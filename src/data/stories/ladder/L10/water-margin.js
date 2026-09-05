// water-margin.js  L10 summit. Band B7, the outlaw band as a unit, with B6 strategy.
const story = {
  id: "water-margin",
  title: "The Outlaws of the Marsh",
  icon: "🏞️",
  difficulty: "Master",
  theme: "A hundred and eight who become one band",
  estimatedTime: "5-10 min",
  description: "Driven outside the law one by one by corrupt officials, scattered heroes gather into a single brotherhood of the marsh. Read the band as the unit, and its cunning as one mind.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B7",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "China",
    region: "East Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "One by one, honest and able people were wronged by corrupt officials, framed, demoted, hounded, until each was driven outside the law with nowhere to turn. And one by one they made their way to the marshes of Liangshan, a stronghold ringed by water, where they joined together. In time a hundred and eight heroes gathered there into a single sworn brotherhood." },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Scattered outlaws who each lost everything alone have become the band of the marsh. What is the band now, beyond a crowd of individuals?",
      options: [
        "A loose group that scatters at the first danger",
        "A single unit with one cause, so that wronging any one member is now to face all hundred and eight together",
        "A simple gang of thieves",
        "A temporary camp soon abandoned"
      ],
      correctAnswer: 1,
      explanation: "Read the brotherhood as the unit. Alone, each hero was easy to crush; joined, they form one body, and the corrupt power that picked them off singly must now reckon with the whole band as a single, answering thing."
    },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "When the government sends armies against the marsh, the outlaws use the water, the reeds, and feigned retreats to trap them. How does the band fight a far larger force?",
      options: [
        "By meeting it head-on in open field",
        "As one cunning mind, luring the army into the watery maze where its size becomes a weakness and the band can cut it apart",
        "By running away for good",
        "By bribing every soldier"
      ],
      correctAnswer: 1,
      explanation: "The band thinks as a single strategist. It anticipates how a large army will move into unknown marsh and turns that against it, the many heroes acting as one mind that reads and traps a stronger foe."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "first_conditional",
      gates: true,
      question: "The outlaws raise a banner reading that they act in heaven's name against injustice. If a new hero is wronged by officials anywhere in the land, what does the band's nature lead it to do?",
      options: [
        "Ignore the stranger as none of its concern",
        "Take the wronged one in, since the band exists to gather exactly those the corrupt have cast out, growing as one cause",
        "Hand the stranger to the officials",
        "Demand payment before helping"
      ],
      correctAnswer: 1,
      explanation: "The bond has a logic that reaches outward. Because the band is one cause and not a closed clique, each fresh injustice feeds it another member, so the unit grows by the very wrongs it was formed to answer."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had the heroes come to the marshes of Liangshan one by one?",
      options: [
        "Because each had been wronged and driven outside the law by corrupt officials, with nowhere else to go",
        "Because they were searching for treasure",
        "Because the emperor had summoned them there",
        "Because they were born in the marsh"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: corruption drove each of them out and toward the stronghold. Here it frames how the band formed rather than testing the band-as-unit."
    },
    { type: "story", text: "So the scattered and the cast-out became one famous brotherhood of the marsh, feared by the powerful who had made them, a single band raised from a hundred separate wrongs." },
    { type: "story", moral: "A hundred and eight wronged alone became one band that thought and struck as one. At the summit, a whole brotherhood can be the single mind a story asks you to read." }
  ]
};
export default story;
