const PAIR_CONFIG = {
  chef_vs_owner: {
    pairKey: 'chef_vs_owner',
    label: 'Chef vs Restaurant Owner',
    playerRole: 'The Chef (Mira)',
    computerRole: 'The Restaurant Owner (Kenji)',
    scenes: [1, 2, 3, 4, 5, 6],
    sceneEndRounds: {
      1: 10,
      2: 9,
      3: 7,
      4: 8,
      5: 4,
      6: 9
    },
    enabled: true
  },
  owner_vs_floor_manager: {
    pairKey: 'owner_vs_floor_manager',
    label: 'Restaurant Owner vs Floor Manager',
    playerRole: 'The Restaurant Owner (Kenji)',
    computerRole: 'The Floor Manager (Aiden)',
    scenes: [],
    sceneEndRounds: {},
    enabled: false,
    notes: 'Structure placeholder. Add conversation/answer-key files, then mark enabled=true.'
  },
  floor_manager_vs_supplier: {
    pairKey: 'floor_manager_vs_supplier',
    label: 'Floor Manager vs Local Supplier',
    playerRole: 'The Floor Manager (Aiden)',
    computerRole: 'The Local Supplier (Shila)',
    scenes: [],
    sceneEndRounds: {},
    enabled: false,
    notes: 'Structure placeholder. Add conversation/answer-key files, then mark enabled=true.'
  }
};

const SCENE_END_ROUNDS_BY_PAIR = Object.fromEntries(
  Object.values(PAIR_CONFIG).map((pair) => [pair.pairKey, pair.sceneEndRounds || {}])
);

function resolvePairKey(playerRole, computerRole) {
  const pair = Object.values(PAIR_CONFIG).find(
    (entry) => entry.playerRole === playerRole && entry.computerRole === computerRole
  );
  return pair ? pair.pairKey : null;
}

function getActivePairKey() {
  const gameSession = JSON.parse(sessionStorage.getItem('gameSession') || '{}');
  return gameSession.pairKey || 'chef_vs_owner';
}

function getSceneEndRoundForPair(pairKey, sceneID) {
  return SCENE_END_ROUNDS_BY_PAIR?.[pairKey]?.[sceneID] ?? null;
}

window.PAIR_CONFIG = PAIR_CONFIG;
window.SCENE_END_ROUNDS_BY_PAIR = SCENE_END_ROUNDS_BY_PAIR;
window.resolvePairKey = resolvePairKey;
window.getActivePairKey = getActivePairKey;
window.getSceneEndRoundForPair = getSceneEndRoundForPair;
