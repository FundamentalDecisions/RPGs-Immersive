import fs from 'fs';
import path from 'path';
import vm from 'vm';

const repoRoot = process.cwd();

function read(filePath) {
  return fs.readFileSync(path.join(repoRoot, filePath), 'utf8');
}

function runScriptInContext(filePath, context) {
  const source = read(filePath);
  vm.runInContext(source, context, { filename: filePath });
}

function makeContext() {
  const window = {};
  const context = vm.createContext({
    window,
    console,
    sessionStorage: {
      _store: new Map(),
      getItem(key) { return this._store.has(key) ? this._store.get(key) : null; },
      setItem(key, value) { this._store.set(key, String(value)); },
      removeItem(key) { this._store.delete(key); }
    }
  });
  context.window = window;
  return context;
}

function getMaxRound(conversation) {
  return Math.max(...conversation.map((turn) => Number(turn.round) || 0));
}

function validate() {
  const errors = [];
  const warnings = [];

  const context = makeContext();
  runScriptInContext('pair-config.js', context);
  runScriptInContext('pair-manifest.js', context);
  runScriptInContext('scene-decisions.js', context);

  const { PAIR_CONFIG, PAIR_CONTENT_MANIFEST, SCENE_DECISIONS_BY_PAIR, SCENE_END_ROUNDS_BY_PAIR } = context.window;

  if (!PAIR_CONFIG || !PAIR_CONTENT_MANIFEST || !SCENE_DECISIONS_BY_PAIR || !SCENE_END_ROUNDS_BY_PAIR) {
    throw new Error('Core pair globals missing after loading config/manifest/decisions.');
  }

  // Load every scene asset declared in manifest to populate SCENE_DATA_BY_PAIR.
  Object.values(PAIR_CONTENT_MANIFEST).forEach((pairManifest) => {
    Object.values(pairManifest?.scenes || {}).forEach((scene) => {
      if (scene.conversationScript) runScriptInContext(scene.conversationScript, context);
      if (scene.answerKeyScript) runScriptInContext(scene.answerKeyScript, context);
    });
  });

  const sceneDataByPair = context.window.SCENE_DATA_BY_PAIR || {};

  Object.values(PAIR_CONFIG).forEach((pair) => {
    const pairKey = pair.pairKey;
    const configuredScenes = pair.scenes || [];
    const manifestScenes = Object.keys(PAIR_CONTENT_MANIFEST?.[pairKey]?.scenes || {}).map(Number);
    const decisionTree = SCENE_DECISIONS_BY_PAIR[pairKey] || {};
    const endRounds = SCENE_END_ROUNDS_BY_PAIR[pairKey] || {};

    if (pair.enabled && configuredScenes.length === 0) {
      errors.push(`[${pairKey}] enabled pair has no configured scenes.`);
    }

    configuredScenes.forEach((sceneID) => {
      const manifestScene = PAIR_CONTENT_MANIFEST?.[pairKey]?.scenes?.[sceneID];
      if (!manifestScene?.conversationScript || !manifestScene?.answerKeyScript) {
        errors.push(`[${pairKey}] scene ${sceneID} missing manifest conversation/answerKey scripts.`);
      }

      const sceneBundle = sceneDataByPair?.[pairKey]?.[sceneID];
      const conversation = sceneBundle?.conversation;
      const answerKey = sceneBundle?.answerKey;

      if (!Array.isArray(conversation) || conversation.length === 0) {
        errors.push(`[${pairKey}] scene ${sceneID} conversation missing/empty.`);
      }

      if (!Array.isArray(answerKey) || answerKey.length === 0) {
        errors.push(`[${pairKey}] scene ${sceneID} answerKey missing/empty.`);
      }

      const sceneDecision = decisionTree?.[`scene${sceneID}`]?.decisionCheckpoint;
      if (!sceneDecision?.question || !Array.isArray(sceneDecision.options) || sceneDecision.options.length === 0) {
        errors.push(`[${pairKey}] scene ${sceneID} decision checkpoint missing/invalid.`);
      }

      if (endRounds?.[sceneID] == null) {
        errors.push(`[${pairKey}] scene ${sceneID} missing SCENE_END_ROUNDS_BY_PAIR value.`);
      }

      if (Array.isArray(conversation) && conversation.length > 0 && endRounds?.[sceneID] != null) {
        const maxRound = getMaxRound(conversation);
        if (Number(endRounds[sceneID]) !== maxRound) {
          errors.push(`[${pairKey}] scene ${sceneID} endRound=${endRounds[sceneID]} does not match max conversation round=${maxRound}.`);
        }
      }
    });

    const manifestOnlyScenes = manifestScenes.filter((sceneID) => !configuredScenes.includes(sceneID));
    if (manifestOnlyScenes.length > 0) {
      warnings.push(`[${pairKey}] manifest contains scenes not in pair.scenes: ${manifestOnlyScenes.join(', ')}.`);
    }
  });

  if (warnings.length > 0) {
    console.warn('Pair template validation warnings:');
    warnings.forEach((warning) => console.warn(`- ${warning}`));
  }

  if (errors.length > 0) {
    console.error('Pair template validation failed:');
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log('Pair template validation passed.');
}

validate();
