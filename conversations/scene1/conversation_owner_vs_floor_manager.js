// Scene metadata (non-breaking, additive)
const SCENE_META_owner_vs_floor_manager_1 = {
  sceneID: 1,
  sceneTitle: "In the dining yard...",
  playerRole: "The Restaurant Owner",
  computerRole: "The Floor Manager"
};
window.SCENE_META_1 = SCENE_META_owner_vs_floor_manager_1;

// Store scene-specific data in window namespace
if (!window.SCENE_DATA) window.SCENE_DATA = {};
window.SCENE_DATA[1] = {
  conversation: [
    {
      round: 1,
      uid: "R1-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      narrative: "8:47 PM. Final night service. The dining room is half-full—regulars, curious newcomers, a few emotional faces. An acoustic duo plays softly near the window, something Kenji didn't authorize. String lights Kenji's never seen before glow along the windows. Aiden stands by the bar, watching tables, then catches Kenji emerging from the kitchen looking confused and tense. Aiden walks over quickly, reading Kenji's expression. He speaks before Kenji can object.",
      dialogue: "Before you say anything—yes, I booked the band. Yes, I put up the lights. Yes, I called our VIP regulars and told them tonight was special. The Lim family, the Deutsche Bank group, the Chens—they're all here. I spent $800 of my own money. You're going to give a speech at 9:30. I didn't ask because I knew you'd say no."
    },
    {
      round: 1,
      uid: "R1-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "Aiden, [B1-1], but [B1-2].",
      blanks: ["B1-1", "B1-2"]
    },
    {
      round: 2,
      uid: "R2-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      dialogue: "I did it because these people deserve a proper goodbye. They've been coming here for three years. Anniversaries. Promotions. Bad days. Good days. They built memories here. We don't get to just turn off the lights and disappear. That's not how you treat people who showed up for you."
    },
    {
      round: 2,
      uid: "R2-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "You're right that [B2-1], but the reality is [B2-2].",
      blanks: ["B2-1", "B2-2"]
    },
    {
      round: 3,
      uid: "R3-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      narrative: "A guest at Table 4 raises a glass. Others follow. Quiet applause ripples through the room. Aiden gestures to the dining room.",
      dialogue: "Look around. We're at 60% capacity on a night I expected 20%. Table 6—the Deutsche Bank regulars who stopped coming two months ago? Back. Table 11—the anniversary couple? Here for the fourth year. Table 9—they drove 40 minutes because I told them this mattered. This room is full of people who still care. Do you see that?"
    },
    {
      round: 3,
      uid: "R3-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "I see [B3-1], and it makes me realize [B3-2].",
      blanks: ["B3-1", "B3-2"]
    },
    {
      round: 4,
      uid: "R4-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      narrative: "Aiden's voice sharpens now. This has been building for months.",
      dialogue: "Kenji, I kept telling you we were losing customers not because of food quality, but because of experience gaps. Wait times during rush. Seating flow chaos. Reservation system breaking down. No-show policy we never enforced. You focused on kitchen costs, supplier negotiations, menu margins. I tried to fix the front, but you didn't give me budget or authority. Was I wrong to think the floor mattered as much as the kitchen?"
    },
    {
      round: 4,
      uid: "R4-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "You weren't wrong, I [B4-1] because [B4-2].",
      blanks: ["B4-1", "B4-2"]
    },
    {
      round: 5,
      uid: "R5-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      narrative: "The music shifts to a slower song. One table starts tearing up. Aiden exhales slowly.",
      dialogue: "Here's what kills me. When the BBQ chain opened, I came to you with three proposals. Loyalty program. Corporate lunch packages. Social media partnerships. You said 'let's see how it goes first.' We saw how it went—we lost 30% of our weekday lunch traffic in six weeks. If you could rewind, what would you actually change?"
    },
    {
      round: 5,
      uid: "R5-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "I would have [B5-1] instead of [B5-2].",
      blanks: ["B5-1", "B5-2"]
    },
    {
      round: 6,
      uid: "R6-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      narrative: "Aiden pulls out his phone, shows Kenji a screenshot—a message from three months ago.",
      dialogue: "Remember this? Three months ago I sent you a breakdown. Customer lifetime value data. Table turnover analysis. Revenue per square foot compared to competitors. I showed you we were underpricing premium slots and overpricing lunch. You said 'good analysis' and then nothing changed. Why did you ignore it when the numbers were right there?"
    },
    {
      round: 6,
      uid: "R6-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "I [B6-1] because [B6-2].",
      blanks: ["B6-1", "B6-2"]
    },
    {
      round: 7,
      uid: "R7-A1",
      speaker: "Aiden",
      role: "The Floor Manager",
      narrative: "The musicians finish their set. 9:30 PM approaching. Guests start looking toward the small stage area, expecting Kenji. Aiden checks his watch.",
      dialogue: "Three minutes until your speech, boss. These people came tonight because they believe in what we built. You can thank them and say goodbye. You can acknowledge what went wrong. You can tell them what you learned. But whatever you say up there—you need to mean it. What are you going to tell them?"
    },
    {
      round: 7,
      uid: "R7-K1",
      speaker: "Kenji",
      role: "The Restaurant Owner",
      is_player: true,
      dialogue: "I'm going to tell them [B7-1] because [B7-2].",
      blanks: ["B7-1", "B7-2"]
    }
  ]
};

window.SCENE_META_1 = SCENE_META_owner_vs_floor_manager_1;

if (!window.SCENE_DATA_BY_PAIR) window.SCENE_DATA_BY_PAIR = {};
if (!window.SCENE_DATA_BY_PAIR.owner_vs_floor_manager) window.SCENE_DATA_BY_PAIR.owner_vs_floor_manager = {};
window.SCENE_DATA_BY_PAIR.owner_vs_floor_manager[1] = window.SCENE_DATA[1] || {};
if (!window.SCENE_META_BY_PAIR) window.SCENE_META_BY_PAIR = {};
if (!window.SCENE_META_BY_PAIR.owner_vs_floor_manager) window.SCENE_META_BY_PAIR.owner_vs_floor_manager = {};
window.SCENE_META_BY_PAIR.owner_vs_floor_manager[1] = window.SCENE_META_1;
