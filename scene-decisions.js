const SCENE_DECISIONS_BY_PAIR = {
  chef_vs_owner: {
    scene1: {
      sceneID: 1,
      decisionCheckpoint: {
        question: 'Would you decide to join the Restaurant Owner in the Investor meeting?',
        options: [
          { optionID: 'A', optionLabel: 'Option A', optionText: 'Yes', outcome: 2 },
          { optionID: 'B', optionLabel: 'Option B', optionText: 'No', outcome: 'END_GAME' }
        ]
      }
    },
    scene2: {
      sceneID: 2,
      decisionCheckpoint: {
        question: 'Would you join the Restaurant Owner to run the business for another 3 months?',
        options: [
          { optionID: 'A', optionLabel: 'Option A', optionText: 'Yes', outcome: 3 },
          { optionID: 'B', optionLabel: 'Option B', optionText: 'No', outcome: 'END_GAME' }
        ]
      }
    },
    scene3: {
      sceneID: 3,
      decisionCheckpoint: {
        question: 'What would you propose to do first?',
        options: [
          {
            optionID: 'A',
            optionLabel: 'Option A',
            optionText: 'Review the PnL to investigate where the money goes',
            outcome: 4
          },
          {
            optionID: 'B',
            optionLabel: 'Option B',
            optionText: 'Check Inventory to plan How much to order for the next 3 months',
            outcome: 5
          },
          {
            optionID: 'C',
            optionLabel: 'Option C',
            optionText: 'Scout other restaurants in town to find recent trend, market demand and hidden opportunities',
            outcome: 6
          },
          {
            optionID: 'D',
            optionLabel: 'Option D',
            optionText: 'Feel Overwhelmed and Decide to Withdraw',
            outcome: 'END_GAME'
          }
        ]
      }
    },
    scene4: {
      sceneID: 4,
      decisionCheckpoint: {
        question: 'What is the biggest cost to cut?',
        options: [
          { optionID: 'A', optionLabel: 'Option A', optionText: 'Labor Cost', outcome: 'END_GAME' },
          { optionID: 'B', optionLabel: 'Option B', optionText: 'Rental Cost', outcome: 'END_GAME' },
          { optionID: 'C', optionLabel: 'Option C', optionText: 'Cost of Goods Sold', outcome: 'END_GAME' },
          {
            optionID: 'D',
            optionLabel: 'Option D',
            optionText: 'Nothing. The problem is not the cost',
            outcome: 'END_GAME'
          }
        ]
      }
    },
    scene5: {
      sceneID: 5,
      decisionCheckpoint: {
        question: 'How much should we buy for the next 3 months',
        options: [
          { optionID: 'A', optionLabel: 'Option A', optionText: '>1M worth of Inventory', outcome: 'END_GAME' },
          { optionID: 'B', optionLabel: 'Option B', optionText: '1M worth of Inventory', outcome: 'END_GAME' },
          { optionID: 'C', optionLabel: 'Option C', optionText: '<>1M worth of Inventory', outcome: 'END_GAME' }
        ]
      }
    },
    scene6: {
      sceneID: 6,
      decisionCheckpoint: {
        question: 'Which opportunity is worth excecuting now?',
        options: [
          {
            optionID: 'A',
            optionLabel: 'Option A',
            optionText: 'Opportunity One — corporate bulk delivery',
            outcome: 'END_GAME'
          },
          {
            optionID: 'B',
            optionLabel: 'Option B',
            optionText: 'Opportunity Two — premium meal kits',
            outcome: 'END_GAME'
          },
          {
            optionID: 'C',
            optionLabel: 'Option C',
            optionText: 'Opportunity Three — late-night ghost kitchen for shift workers',
            outcome: 'END_GAME'
          }
        ]
      }
    }
  },

  // Structure ready for expansion - content files can be added scene-by-scene.
  owner_vs_floor_manager: {
    scene1: {
      sceneID: 1,
      decisionCheckpoint: {
        question: 'What would you say in your speech?',
        options: [
          {
            optionID: 'A',
            optionLabel: 'Option A (LEARNING FORWARD)',
            optionText: `Three years ago, we opened Ember & Spoon believing that quality food and genuine hospitality would be enough. Tonight, looking at all of you here, I realize we built something that mattered. But I also have to be honest—we failed in ways I'm only now understanding. We didn't listen fast enough. We didn't adapt when the market shifted. We focused on perfection in the kitchen while missing what was happening in the dining room. You deserved better operational excellence, and I'm sorry we didn't deliver it. What you gave us—your loyalty, your trust, your presence tonight—that's the part I'll carry forward. Thank you for teaching me what truly matters in this business`,
            outcome: 'END_GAME'
          },
          {
            optionID: 'B',
            optionLabel: 'Option B (GRATITUDE & CLOSURE)',
            optionText: `When we started Ember & Spoon, I thought success meant critical acclaim and full reservations every night. Tonight taught me I was measuring the wrong things. Success is you—the Lim family who celebrated every milestone here, the couple at Table 11 who chose us for four anniversaries, the teams who made this your meeting place, the regulars who became friends. We're closing not because we failed at creating something meaningful, but because meaningful isn't always sustainable. What we built together—these relationships, these moments, the way we showed up for each other—that doesn't end tonight. Thank you for the last 5 extraordinary years.`,
            outcome: 'END_GAME'
          }
        ]
      }
    }
  },
  floor_manager_vs_supplier: {}
};

// Backward compatibility for existing logic that still reads window.SCENE_DECISIONS.
const SCENE_DECISIONS = SCENE_DECISIONS_BY_PAIR.chef_vs_owner;

window.SCENE_DECISIONS_BY_PAIR = SCENE_DECISIONS_BY_PAIR;
window.SCENE_DECISIONS = SCENE_DECISIONS;
