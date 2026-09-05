// fall-of-arthur.js  L10 summit. B7, the fellowship as a unit, breaking from within.
const story = {
  id: "fall-of-arthur",
  title: "The Fall of the Round Table",
  icon: "⚔️",
  difficulty: "Master",
  theme: "A fellowship that had been breaking long before it broke",
  estimatedTime: "5-10 min",
  description: "The Round Table seems to shatter all at once in a final battle, but the bond had been cracking from within for years. Read the loss of a fellowship, not just of men.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B7",
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
    { type: "story", text: "King Arthur had gathered the greatest knights of the land at a round table, where none sat above another, bound together in a fellowship sworn to justice. For a long while it was the wonder of the world. But trust among them had begun to fray: old loves and old grudges divided the knights, and Arthur's own kin, the traitor Mordred, schemed against him from within." },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "When the final battle comes, the collapse of the Round Table looks sudden. But what will the fellowship have been doing, quietly, for a long while before that day?",
      options: [
        "Growing stronger and more united than ever",
        "Breaking from within, its trust cracking through divided loyalties and grudges, so that by the last battle the bond will have been failing for years already",
        "Resting peacefully with no troubles",
        "Welcoming new knights to grow larger"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect reveals the slow truth under the sudden one. By the day of the last battle, the fellowship will have been coming apart for a long time, weakened from inside. The open shattering only finishes a bond that had been quietly failing."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "present_perfect",
      gates: true,
      question: "The Round Table was the bond that made many separate knights into one fellowship. When it falls, what is lost beyond the knights who die in battle?",
      options: [
        "Only some swords and armor",
        "The fellowship itself, the unit of many-as-one, an ideal of bound equals that cannot simply be rebuilt by gathering new knights",
        "A single castle",
        "Nothing of any real weight"
      ],
      correctAnswer: 1,
      explanation: "Read the bond as the thing that dies. What ends is not just lives but the fellowship, the one-from-many that the table stood for. You can seat new knights, but the bond that had made them a single sworn body is gone."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "third_conditional",
      gates: true,
      question: "If the trust among the fellowship had held firm, would Mordred's treachery by itself have been enough to destroy the Round Table?",
      options: [
        "Yes; one traitor could always have ended it",
        "No; the bond fell because it had already been weakened from inside, so the traitor's blow only finished what inner division had begun",
        "Yes; Mordred was simply too strong",
        "No; nothing could ever have harmed it"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where the bond stayed whole. A sound fellowship could have weathered one traitor; this one could not, because it had already been cracking within. The grief is that the fall came as much from inside as from any outside blow."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "What was the Round Table?",
      options: [
        "The fellowship of Arthur's knights, seated as equals and sworn to justice",
        "A magic weapon Arthur carried",
        "A single famous battle",
        "The name of Arthur's castle"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the bond's name: the Round Table is the fellowship of equal knights. Here it frames what is lost rather than testing how the bond fails."
    },
    { type: "story", moral: "The Round Table did not fall in a day; it had been breaking from within long before the last battle named the loss. At the summit, what dies can be a bond itself, and the grief is to see it had been failing all along." }
  ]
};
export default story;
