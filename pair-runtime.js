const loadedPairScriptSet = new Set();

function loadScriptOnce(src) {
  if (loadedPairScriptSet.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[data-pair-asset="${src}"]`);
    if (existingScript) {
      loadedPairScriptSet.add(src);
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.defer = false;
    script.dataset.pairAsset = src;
    script.onload = () => {
      loadedPairScriptSet.add(src);
      resolve();
    };
    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.body.appendChild(script);
  });
}

function getRoleOptionDescriptors() {
  if (!window.PAIR_CONFIG) return [];

  const roleMap = new Map();

  Object.values(window.PAIR_CONFIG).forEach((pair) => {
    const isEnabled = Boolean(pair?.enabled);
    [pair?.playerRole, pair?.computerRole].forEach((role) => {
      if (!role) return;
      if (!roleMap.has(role)) {
        roleMap.set(role, {
          role,
          isSelectable: false,
          appearsInEnabledPair: false,
          appearsInDisabledPair: false
        });
      }

      const descriptor = roleMap.get(role);
      descriptor.appearsInEnabledPair = descriptor.appearsInEnabledPair || isEnabled;
      descriptor.appearsInDisabledPair = descriptor.appearsInDisabledPair || !isEnabled;
      descriptor.isSelectable = descriptor.isSelectable || isEnabled;
    });
  });

  return Array.from(roleMap.values());
}

function buildRoleOptionLabel(descriptor) {
  if (descriptor.isSelectable) {
    return descriptor.role;
  }

  return `${descriptor.role} 🔒`;
}

function appendRoleOptions(selectEl, selectedValue) {
  const descriptors = getRoleOptionDescriptors();
  descriptors.forEach((descriptor) => {
    const option = document.createElement('option');
    option.value = descriptor.role;
    option.textContent = buildRoleOptionLabel(descriptor);

    if (!descriptor.isSelectable) {
      option.disabled = true;
      option.dataset.lockedRole = 'true';
      option.style.color = '#9aa1a0';
    }

    selectEl.appendChild(option);
  });

  if (selectedValue) {
    const selectedOption = Array.from(selectEl.options).find((opt) => opt.value === selectedValue);
    if (selectedOption && !selectedOption.disabled) {
      selectEl.value = selectedValue;
    }
  }
}

function renderRoleSelectOptions() {
  const playerSelect = document.getElementById('player-role');
  const computerSelect = document.getElementById('computer-role');
  if (!playerSelect || !computerSelect) return;

  const playerSelected = playerSelect.value;
  const computerSelected = computerSelect.value;

  playerSelect.innerHTML = '<option value="">-- Select your role --</option>';
  computerSelect.innerHTML = '<option value="">-- Select computer\'s role --</option>';

  appendRoleOptions(playerSelect, playerSelected);
  appendRoleOptions(computerSelect, computerSelected);
}

function getSceneAssetPathsByPair(pairKey) {
  const pairManifest = window.PAIR_CONTENT_MANIFEST?.[pairKey];
  if (!pairManifest?.scenes) return [];

  const paths = [];
  Object.values(pairManifest.scenes).forEach((sceneConfig) => {
    if (sceneConfig?.conversationScript) paths.push(sceneConfig.conversationScript);
    if (sceneConfig?.answerKeyScript) paths.push(sceneConfig.answerKeyScript);
  });

  return paths;
}

async function ensurePairAssetsLoaded(pairKey) {
  const scripts = getSceneAssetPathsByPair(pairKey);
  for (const src of scripts) {
    await loadScriptOnce(src);
  }
}

async function ensureEnabledPairsAssetsLoaded() {
  if (!window.PAIR_CONFIG) return;

  const enabledPairs = Object.values(window.PAIR_CONFIG)
    .filter((pair) => pair.enabled)
    .map((pair) => pair.pairKey);

  for (const pairKey of enabledPairs) {
    await ensurePairAssetsLoaded(pairKey);
  }
}

window.renderRoleSelectOptions = renderRoleSelectOptions;
window.ensurePairAssetsLoaded = ensurePairAssetsLoaded;
window.ensureEnabledPairsAssetsLoaded = ensureEnabledPairsAssetsLoaded;
window.getSceneAssetPathsByPair = getSceneAssetPathsByPair;
window.getRoleOptionDescriptors = getRoleOptionDescriptors;
