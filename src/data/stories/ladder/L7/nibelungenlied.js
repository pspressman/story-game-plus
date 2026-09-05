// nibelungenlied.js  L7, B4 unreal past. Gate: rebuild the branch and price it. Violence handled with restraint.
const story = {
  id: "nibelungenlied",
  title: "The One Secret That Doomed Siegfried",
  icon: "🍃",
  difficulty: "Hard",
  theme: "A trust turned into a weapon",
  estimatedTime: "5-10 min",
  description: "A hero is invincible but for one small spot, and only his wife knows where. Meaning to protect him, she gives the secret to the wrong man. Rebuild the safety she might have kept, and weigh what one trusting word cost.",
  meta: {
    level: 7,
    track: "gated",
    tier: "O",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Germany",
    region: "Western Europe",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The hero Siegfried had once bathed in a dragon's blood and become unharmable, all but one small spot on his back where a falling leaf had kept the blood away. His wife, Kriemhild, knew of that single spot. When a grim warrior named Hagen turned against Siegfried, Kriemhild, fearing for her husband and trusting Hagen to guard him, sewed a small mark on Siegfried's garment over the very place and told Hagen where it lay." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Kriemhild revealed the secret spot only to keep Siegfried safe. If she had kept it to herself, what would have followed?",
      options: [
        "Exactly the same end",
        "Hagen could never have found the one weak place, and Siegfried would not have been struck down there",
        "Siegfried would have died another way at once",
        "The dragon would have returned"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where the secret stays sealed. Siegfried's one weakness was useless to an enemy who did not know it. The whole doom turns on a single shared confidence, so withholding it leaves the hero unharmable as before."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The very mark meant to protect Siegfried is what guides the blow against him. What is bitter about how the secret was used?",
      options: [
        "It was simply bad luck",
        "Her love and trust became the weapon, the protection she intended turning into the exact key to his undoing",
        "The mark was sewn crookedly",
        "Hagen forgot where it was"
      ],
      correctAnswer: 1,
      explanation: "Read the cruel reversal. The thing offered in love is received in treachery; the guard she set becomes the aim point. The grief is sharpest because the harm came through her care, not against it."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Siegfried's death sets loose Kriemhild's long revenge, which in the end destroys nearly everyone. Price that first betrayal: because of one revealed secret, what does the whole story become?",
      options: [
        "A happy tale of reunion",
        "A long chain of grief and ruin, one trusting word unraveling a kingdom",
        "A quarrel soon forgotten",
        "A story with no consequences"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch reaches from the single confidence to the wreck of many lives. Because that one secret was given to the wrong man, every later sorrow follows. To read it is to trace a kingdom's fall back to one small, loving mistake."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why was Siegfried vulnerable in only one spot, despite his dragon-blood bath?",
      options: [
        "A falling leaf had covered one place on his back, so the blood never touched it",
        "He had been wounded there before",
        "The dragon had bitten him there",
        "He chose to leave one spot unprotected"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: a leaf left one spot untouched. Here it sets up the single weakness rather than testing the branch."
    },
    { type: "story", moral: "One secret, shared in love with the wrong man, brought down a hero and a kingdom after him. To read it is to hold the safety that might have been kept, and to weigh what a single trusting word can cost." }
  ]
};
export default story;
