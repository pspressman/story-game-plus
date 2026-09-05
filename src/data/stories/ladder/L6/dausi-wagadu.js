// dausi-wagadu.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
const story = {
  id: "dausi-wagadu",
  title: "The Lost City of Wagadu",
  icon: "🏛️",
  difficulty: "Hard",
  theme: "The city that could stand, if only",
  estimatedTime: "5-10 min",
  description: "The great city Wagadu is lost and found again, falling each time the people give in to a fault. Hold the branch where they hold firm, and the city stays.",
  meta: {
    level: 6,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional"],
    grammar_target: "conditional",
    culture: "Soninke",
    region: "West Africa",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "Soninke, West Africa - credit specifically, not 'African'. Standard source traces to Frobenius, a colonial-era collector of contested reliability; treat provenance with caution. Annual-sacrifice content gentled for children (editorial, separate from consent).",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The bards sing of Wagadu, a great and shining city. Four times she has been lost, and four times found again. Each time she falls, it is not to an enemy from outside, but because her own people give way to a fault: once to vanity, once to falsehood, once to greed, once to discord." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Wagadu vanishes whenever her people give in to a fault. Hold the other branch in mind: if the people were to hold firm against vanity and greed, what would become of Wagadu?",
      options: [
        "She would fall anyway, for cities always fall",
        "She would remain standing and shining, since it is only the fault that brings her down",
        "She would be carried off by enemies instead",
        "She would turn to stone forever"
      ],
      correctAnswer: 1,
      explanation: "The story names the cause of every fall as a fault within. So the branch that could be follows directly: were the people to master the fault, the thing that destroys the city would never strike, and Wagadu would stand. Holding that possible city is the point."
    },
    { type: "story", text: "The bards say something stranger still: that Wagadu is not truly the stone and the walls, but lives in the hearts of her people. While they remember her and keep her spirit, she is never wholly gone, only sleeping, waiting to be built once more." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "If the people were to keep Wagadu alive in their hearts even after her walls have fallen, what could happen to the city in time?",
      options: [
        "Nothing; once the walls fall she is gone for good",
        "She could rise again, rebuilt by the very people who never let her go",
        "She could only live on in song, never in stone",
        "She would be claimed by another people entirely"
      ],
      correctAnswer: 1,
      explanation: "The tale makes the city's survival depend on memory, not masonry. So a branch opens: were the people to hold her in their hearts, the fallen city could be raised once more. Each return in the song is that very branch, taken."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "The bards promise Wagadu will shine a fifth time, more splendid than ever. By their telling, if the people overcome the fault that has felled her before, what will that fifth city be?",
      options: [
        "Exactly the same as before, no better",
        "Stronger and more lasting than any Wagadu yet, because the old weakness will at last be conquered",
        "Smaller and weaker than before",
        "A city with no people in it"
      ],
      correctAnswer: 1,
      explanation: "The promised branch is conditional on a change: master the fault, and the next Wagadu surpasses all the others. The reader holds a future city that depends entirely on the people becoming what the earlier cities needed them to be."
    },
    { type: "story", text: "And so Wagadu waits in the hearts of her people, the city that always could stand, if only her own would not let her fall." },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "present_perfect",
      gates: false,
      question: "How many times has Wagadu been lost so far in the bards' telling?",
      options: [
        "Twice",
        "Three times",
        "Four times",
        "Once"
      ],
      correctAnswer: 2,
      explanation: "A plain count from the opening: four falls, four findings, with a fifth city promised. Here it grounds the pattern rather than testing the branch."
    },
    { type: "story", moral: "Wagadu was never beaten from outside. To sing her is to hold the city that could always stand, and to feel the fault that keeps tearing it down." }
  ]
};
export default story;
