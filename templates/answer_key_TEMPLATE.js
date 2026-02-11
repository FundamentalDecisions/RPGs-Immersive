// TEMPLATE: conversations/scene<sceneID>/answer_key_<pairKey>.js

if (!window.SCENE_DATA) window.SCENE_DATA = {};
if (!window.SCENE_DATA[SCENE_ID]) window.SCENE_DATA[SCENE_ID] = {};

window.SCENE_DATA[SCENE_ID].answerKey = [
  {
    blankUID: 'BLANK_UID_1',
    acceptedAnswers: ['example answer', 'alternate answer'],
    mindset: 'systemsThinker',
    score: 1
  },
  {
    blankUID: 'BLANK_UID_2',
    acceptedAnswers: ['another answer'],
    mindset: 'resourceCraftsman',
    score: 1
  }
];

if (!window.SCENE_DATA_BY_PAIR) window.SCENE_DATA_BY_PAIR = {};
if (!window.SCENE_DATA_BY_PAIR.PAIR_KEY) window.SCENE_DATA_BY_PAIR.PAIR_KEY = {};
if (!window.SCENE_DATA_BY_PAIR.PAIR_KEY[SCENE_ID]) {
  window.SCENE_DATA_BY_PAIR.PAIR_KEY[SCENE_ID] = window.SCENE_DATA[SCENE_ID];
}
