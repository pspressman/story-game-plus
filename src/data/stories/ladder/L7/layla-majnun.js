// layla-majnun.js  L7, B4 the unreal past. Target: conditional. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "layla-majnun",
  title: "Layla and Majnun",
  icon: "🌙",
  difficulty: "Hard",
  theme: "The love that was never allowed to be",
  estimatedTime: "5-10 min",
  description: "Two who loved each other were kept apart until grief unmade them both. Rebuild the branch where they were allowed to be together, and weigh the life it would have been.",
  meta: {
    level: 7,
    track: "gated",
    tier: "O",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Persia",
    region: "Persia and Central Asia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Qays and Layla loved each other from childhood, so deeply that Qays could speak of nothing else, and people began to call him Majnun, the madman, for his love. When he asked to marry Layla, her family refused him and gave her to another, and forbade the two ever to meet." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Layla's family refused Qays and married her to someone else. If they had allowed the two to marry, what would have happened to the lovers?",
      options: [
        "They would have grown to hate each other",
        "They would have been together and made a life, instead of being torn apart to waste away in grief",
        "Qays would have left her anyway",
        "Nothing would have changed for either of them"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch the refusal closed: allowed to marry, the two would have had a shared life rather than a long, separate dying. The whole sorrow rests on a single no."
    },
    { type: "story", text: "Separated, Qays could not bear it. He left his home and wandered the wilderness, ragged and half-mad, reciting poems of his love to the desert and the animals. Layla, married against her heart, pined away far from him, and neither could reach the other." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Qays becomes Majnun, wandering the desert in grief, while Layla fades in a marriage she never wanted. Price the separation: because they were kept apart, what became of a love that might have been a whole life together?",
      options: [
        "It simply faded quietly and was forgotten",
        "It turned into ruin and madness and an early death for both, the same love that, allowed, could have sustained them",
        "It made them both happy in the end",
        "It cost them only a little sorrow"
      ],
      correctAnswer: 1,
      explanation: "Pricing the branch means seeing the same love measured two ways: a life if permitted, a slow destruction once forbidden. The wilderness and the wasting are the cost of the marriage that was refused."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Their names now stand for love that ends in grief. Holding the lost branch, if the families had simply let them wed, what would the two of them be remembered as instead?",
      options: [
        "Exactly the same tragedy as now",
        "An ordinary couple who lived their lives, rather than the very symbol of love destroyed by being forbidden",
        "Strangers who never met",
        "Enemies of their families"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch reaches from the old refusal to their meaning now: permitted to marry, they would be remembered as a life lived, not a love undone. The reader weighs the legend against the quiet life it replaced."
    },
    { type: "story", text: "In the end both died of their grief, apart, never having been allowed the life they wanted. Their story became the great tale of love that the world would not permit, mourned ever after." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Why was Qays given the name Majnun, the madman?",
      options: [
        "Because grief and longing for Layla drove him to wander as if mad",
        "Because he had committed a crime",
        "Because he could not speak at all",
        "Because he refused to marry anyone"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: his overwhelming love and loss is what earned him the name. Here it frames the grief rather than testing the branch."
    },
    { type: "story", moral: "One refusal turned a love into a legend of loss. To read their tale is to hold the life they were never allowed, and to feel the size of what a single no destroyed." }
  ]
};
export default story;
