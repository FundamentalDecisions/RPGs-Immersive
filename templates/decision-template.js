// TEMPLATE: add this block under SCENE_DECISIONS_BY_PAIR.PAIR_KEY
// in scene-decisions.js for each scene.
scene<sceneID>: {
  sceneID: <sceneID>,
  decisionCheckpoint: {
    question: 'Decision question text?',
    options: [
      { optionID: 'A', optionLabel: 'Option A', optionText: 'Option text', outcome: <nextSceneID or "END_GAME"> },
      { optionID: 'B', optionLabel: 'Option B', optionText: 'Option text', outcome: <nextSceneID or "END_GAME"> }
    ]
  }
}
