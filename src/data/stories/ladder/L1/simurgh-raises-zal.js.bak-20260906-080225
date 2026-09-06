// simurgh-raises-zal.js
// L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Gate: order events, hold ongoing-vs-done. Shows gates:true sequence items,
// a gates:true aspect item, and a cumulative gates:false B0 item reaching back to the floor.
const simurghRaisesZal = {
  id: "simurgh-raises-zal",
  title: "The Simurgh Raises Zal",
  icon: "🦅",
  difficulty: "Beginner",
  theme: "The abandoned one becomes blessed",
  estimatedTime: "5-10 min",
  description: "A baby born with white hair is left on a mountain. A giant bird finds him and lifts him to her nest. Track what happened before his father's heart breaks.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Persia",
    region: "Persia and Central Asia",
    saga: "shahnameh",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "The hero Sam had waited years for a son. When the child finally came, he had snow-white hair and eyes pale as moonlight. The midwives gasped. Sam, ashamed, ordered his servants to carry the baby far into the mountains and leave him on the rocks."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "Before the servants ever reach the mountain, picture what Sam has just done. What did he order?",
      options: [
        "He ordered them to raise the child in secret",
        "He ordered them to abandon the baby in the mountains",
        "He ordered them to find a healer for the child",
        "He ordered them to present the baby to the king"
      ],
      correctAnswer: 1,
      explanation: "The story shows Sam's command clearly: take the baby far away and leave him on the rocks. This is a picturing question reaching back to the simplest move; it does not test the level's own target."
    },
    {
      type: "story",
      text: "High on Mount Alborz, the Simurgh—a great bird with feathers like dawn—was circling over her nest when she saw a bundle crying on the stones below. She swept down, lifted the infant in her talons, and brought him to her nest among her own young."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "When the Simurgh first spots the baby, what was she doing?",
      options: [
        "She was hunting for food on the ground",
        "She was flying over her nest",
        "She was sleeping in her nest",
        "She was teaching her young to fly"
      ],
      correctAnswer: 1,
      explanation: "Hold what was ongoing: the Simurgh was circling over her nest when she saw him. The discovery happens during that flight, not before or after."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "Why does the Simurgh bring the child to her nest?",
      options: [
        "Sam has sent her a message to protect his son",
        "She plans to feed him to her young",
        "She sees a helpless infant and lifts him to safety",
        "The baby's white hair marks him as a bird spirit"
      ],
      correctAnswer: 2,
      explanation: "Follow the order of events: she sees a crying bundle on the stones, sweeps down, and brings him up. The act is mercy for something helpless, not a plan or message."
    },
    {
      type: "story",
      text: "Years passed. The child, named Zal, grew strong and wise under the Simurgh's care, fed on the meat she brought and warmed by her great wings. Meanwhile, far below, Sam began to dream of a beautiful youth who called him father. His heart filled with bitter regret."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: true,
      question: "By the time Sam begins to feel regret, what has already happened to Zal?",
      options: [
        "He has died alone on the mountain",
        "He has been raised for years by the Simurgh",
        "He has just been abandoned by the servants",
        "He has returned home to confront his father"
      ],
      correctAnswer: 1,
      explanation: "Holding what has been completed before Sam's regret is the whole point: years of growing, feeding, and care by the bird have already passed. The abandonment is long done and Zal has thrived."
    },
    {
      type: "story",
      text: "Sam climbed the mountain, weeping, and found his son glowing with health and learning. The Simurgh gave Zal a feather from her breast and told him: burn this if you ever need me. Then she let him go home with his father, and the curse of shame turned to blessing."
    },
    {
      type: "story",
      moral: "What seemed a mark of shame became a gate to wonder. The child cast out rose higher than any kept safe."
    }
  ]
};

export default simurghRaisesZal;