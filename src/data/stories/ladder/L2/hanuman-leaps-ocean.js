// hanuman-leaps-ocean.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Gate: read the trick. The gating stems turn on a non-finite form AND on a second character's read of intent.
const hanumanLeapsOcean = {
  id: "hanuman-leaps-ocean",
  title: "Hanuman Leaps the Ocean",
  icon: "🐵",
  difficulty: "Easy",
  theme: "The hidden measure of power",
  estimatedTime: "5-10 min",
  description: "Hanuman leaps to Lanka to find Sita, tricks demons by shrinking and growing. Read his intent in choosing when to reveal his power.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "India",
    region: "South Asia",
    saga: "ramayana",
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
      text: "Hanuman stood at the ocean's edge with the other monkeys, all of them staring at the water stretching endlessly toward Lanka where Sita was held prisoner. The older bears said it was too far. Hanuman said nothing, only grew in size until his shadow covered the beach, then leapt, a white arc across the sky."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "When a demon mountain rises from the waves demanding that Hanuman rest on her before crossing, he thanks her, flies through her side without stopping, and continues toward Lanka. What is he really doing?",
      options: [
        "Refusing to rest because he is too excited to slow down",
        "Keeping his mission secret by avoiding every delay",
        "Showing disrespect to the spirits of the ocean",
        "Testing whether the mountain is real or a trick"
      ],
      correctAnswer: 1,
      explanation: "The heart of the trick is hidden speed. Every offer of rest, every plea to pause, is a test or a trap. By flying through without stopping he protects the mission itself, letting nothing slow his search."
    },
    {
      type: "story",
      text: "At last he reached Lanka's golden walls. Guards patrolled every gate. Hanuman shrank himself down to the size of a cat and crept through the palace gardens unseen, searching window after window through the long night until he found Sita beneath an ashoka tree, guarded by demon women."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Sita sees a tiny monkey step from the shadows holding Rama's ring. She has never met Hanuman. What must she be thinking to decide whether to trust him?",
      options: [
        "A small monkey must be harmless and therefore safe to trust",
        "The ring proves the monkey's story, but his choice to come small and secret shows he understands the danger around her",
        "Any creature sent by Rama would arrive in full size and power",
        "The demons must have sent this creature to trick her into speaking"
      ],
      correctAnswer: 1,
      explanation: "Reading his choice to shrink is reading his mind: he knows she is watched, he knows grand gestures would bring guards, so he comes in a shape that can slip through demon sight. That carefulness, plus the ring, tells her he is real."
    },
    {
      type: "question",
      domain: "number",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "By the time Hanuman speaks to Sita in the garden, how many forms has he taken since leaving the beach where the other monkeys stood?",
      options: [
        "One: only his giant form for the leap",
        "Two: giant for the leap, then small in the garden",
        "Three: giant, then normal size at the shore of Lanka, then small",
        "None: he has stayed the same size throughout"
      ],
      correctAnswer: 1,
      explanation: "Counting the shapes: huge to leap the ocean, tiny to pass the guards. This is a simpler tracking move from an earlier rung, holding what has already changed rather than reading why."
    },
    {
      type: "story",
      text: "Before leaving, Hanuman let himself be captured by Ravana's son, then broke free and set fire to half the city with his burning tail, leaping back across the ocean in his giant form once more. When he landed, the other monkeys knew: Sita lived, and Rama's army could march."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "participle",
      gates: false,
      question: "Ravana's demons spent the whole night boasting that no monkey could ever threaten Lanka's golden walls. What makes their boast ring hollow by morning?",
      options: [
        "A monkey has already passed through their walls, found Sita, spoken to her, and burned half the city",
        "Monkeys are known to be stronger than demons in battle",
        "The walls were never made of real gold",
        "Rama's army has already crossed the ocean during the night"
      ],
      correctAnswer: 0,
      explanation: "The gap between their boast and the reality is irony's home. They said it could never happen; it has already happened while they spoke, the city burning behind them."
    },
    {
      type: "story",
      moral: "The power held back until the right moment is worth twice the power spent too soon. A hidden measure finds its mark."
    }
  ]
};

export default hanumanLeapsOcean;