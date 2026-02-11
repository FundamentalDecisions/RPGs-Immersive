// TEMPLATE: conversations/scene<sceneID>/conversation_<pairKey>.js
// Replace placeholders with actual pair key + scene ID.

if (!window.SCENE_DATA) window.SCENE_DATA = {};
window.SCENE_DATA[SCENE_ID] = {
  conversation: [
    {
      uid: 'S<sceneID>-R1-T1',
      round: 1,
      speaker: 'Speaker Name',
      role: 'Role Label',
      is_player: false,
      narrative: 'Optional narrative shown first for this turn.',
      resource: 'Optional resource content shown second for this turn.',
      resource_guideline: 'Optional resource guideline.',
      dialogue: 'Dialogue text shown after narrative/resource.'
    },
    {
      uid: 'S<sceneID>-R1-T2',
      round: 1,
      speaker: 'Player Speaker',
      role: 'Player Role',
      is_player: true,
      dialogue: 'Player response with [BLANK_UID_1] and [BLANK_UID_2].',
      blanks: ['BLANK_UID_1', 'BLANK_UID_2']
    }
  ]
};

if (!window.SCENE_DATA_BY_PAIR) window.SCENE_DATA_BY_PAIR = {};
if (!window.SCENE_DATA_BY_PAIR.PAIR_KEY) window.SCENE_DATA_BY_PAIR.PAIR_KEY = {};
window.SCENE_DATA_BY_PAIR.PAIR_KEY[SCENE_ID] = window.SCENE_DATA[SCENE_ID] || {};

if (!window.SCENE_META_BY_PAIR) window.SCENE_META_BY_PAIR = {};
if (!window.SCENE_META_BY_PAIR.PAIR_KEY) window.SCENE_META_BY_PAIR.PAIR_KEY = {};
window.SCENE_META_BY_PAIR.PAIR_KEY[SCENE_ID] = {
  sceneTitle: 'Scene <sceneID> Title',
  context: 'Optional short scene context.'
};
