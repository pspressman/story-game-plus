// grail-quest-galahad.js  L10 summit. B8, the quest as moral allegory. ADDED Arthurian, pending HARPER.
const story = {
  id: "grail-quest-galahad",
  title: "The Quest for the Grail",
  icon: "🏆",
  difficulty: "Master",
  theme: "A quest that measures the soul, not the sword",
  estimatedTime: "5-10 min",
  description: "The knights of the Round Table ride out after the holy Grail, but the strongest fail and the purest succeeds. Read a quest that tests not what a knight can do, but what he is.",
  meta: {
    level: 10,
    track: "gated",
    tier: "A",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "Britain",
    region: "British Isles",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A vision of the Holy Grail, the sacred cup, appeared at Arthur's court, and the knights of the Round Table swore to seek it. Out they rode, the boldest and strongest among them, certain that valor would carry them to the prize. Yet one by one the great knights failed, turned back by their own hidden faults, while the young and gentle Galahad, not the mightiest, drew nearer and nearer." },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The strongest knights fail and Galahad, far from the mightiest, succeeds. What does the quest actually measure?",
      options: [
        "Which knight has the sharpest sword",
        "Not strength or skill but purity of heart, so the quest tests what a knight is within, not what he can do",
        "Which knight rode the fastest horse",
        "Which knight knew the road best"
      ],
      correctAnswer: 1,
      explanation: "Read what the quest weighs. The Grail cannot be taken by force; it yields only to inner worth. So the search becomes a measure of the soul, and a flawed champion fails where a pure heart, however gentle, is drawn through."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "Each knight rides his own road, meeting trials that catch at his particular weakness. By the time the quest ends, what will it have been doing to the whole company of knights all along?",
      options: [
        "Tiring out their horses",
        "Sorting them by what they truly are within, so the quest will have been measuring each knight's soul the entire way, the road itself a test of inner worth",
        "Leading them in a great circle home",
        "Teaching them to fight better"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect holds the whole quest as a single sieve: by the end it will have been weighing each knight from the inside, every trial fitted to a private flaw. The road is one long test that reveals the soul of everyone who rides it."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Suppose the Grail could be won by sheer strength or clever skill. What would the quest no longer be?",
      options: [
        "Exactly the same quest",
        "A measure of the soul; it is a moral test precisely because only inner worth, and not power, can achieve it",
        "An easier journey",
        "A quest for treasure instead"
      ],
      correctAnswer: 1,
      explanation: "Hold the branch where force could win it. Then the Grail would be mere treasure and the quest mere adventure. Because only purity achieves it, the whole journey stays a test of what a knight is, which is what lifts it to the summit."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Which knight at last achieves the Grail?",
      options: [
        "Galahad, the pure of heart",
        "The strongest knight in the court",
        "Arthur himself",
        "None of them"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the outcome: Galahad achieves it. Here it names the result rather than testing how the quest measures the soul."
    },
    { type: "story", moral: "The Grail went not to the strongest hand but to the purest heart, and the quest weighed every knight from the inside. At the summit, a journey can be a test of what a soul truly is." }
  ]
};
export default story;
