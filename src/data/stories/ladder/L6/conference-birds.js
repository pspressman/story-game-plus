// conference-birds.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
const story = {
  id: "conference-birds",
  title: "The Conference of the Birds",
  icon: "🕊️",
  difficulty: "Hard",
  theme: "The journey each bird could take, and what it would cost",
  estimatedTime: "5-10 min",
  description: "The birds are told that a true king awaits beyond seven hard valleys. Each must hold the branch where they go, and the branch where they stay.",
  meta: {
    level: 6,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional"],
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
    { type: "story", text: "All the birds of the world gathered, for they had no king. The wise hoopoe told them of the Simurgh, a great king who dwelt beyond seven valleys, across deserts and mountains, through hardship few would survive. \"If you would find your true king,\" the hoopoe said, \"this is the road.\"" },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "The hoopoe lays out the road but does not force anyone onto it. If a bird were to set out and cross all seven hard valleys, what would lie at the end?",
      options: [
        "Nothing; the journey leads nowhere",
        "The true king, the Simurgh, whom they have been longing for",
        "A new and harder set of valleys",
        "A way back to exactly where they started"
      ],
      correctAnswer: 1,
      explanation: "The whole choice rests on a branch that has not been taken. Hold it clearly: were a bird to make the crossing, it would reach the king. Each bird must weigh that possible end against the hard road to it, with nothing yet decided."
    },
    { type: "story", text: "But as the road was described, the birds began to make excuses. The nightingale said she could never leave her beloved rose. The parrot longed only for its cage and its sweet treats. The hawk was proud of its place at the king's wrist already. One by one they measured the journey against what they loved." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "The nightingale will not leave her rose. Hold both branches for her: if she were to stay with the rose, what would she be giving up?",
      options: [
        "Nothing; she can have both the rose and the king",
        "The chance to cross the valleys and reach the Simurgh she was made to seek",
        "Only a short and easy walk",
        "Her song, which she would lose at home"
      ],
      correctAnswer: 1,
      explanation: "Her choice is a fork. Staying keeps the rose but closes the branch where she reaches the king. To follow her you hold what she keeps against what that keeping costs her, the journey she will now never make."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "A handful of birds decide to go despite the danger. By the hoopoe's promise, if they endure every valley and arrive, what will they find waiting?",
      options: [
        "That there is no king and the journey was for nothing",
        "The king they sought, the goal that made every hardship worth bearing",
        "That they should have stayed home with the others",
        "A locked gate they cannot pass"
      ],
      correctAnswer: 1,
      explanation: "For those who choose the road, the conditional turns toward hope: endure the valleys, and the king is reached. The reader holds that promised end through every hardship, the branch the travelers are betting their journey on."
    },
    { type: "story", text: "Many turned back, each clinging to a comfort or a fear. Only thirty birds crossed all seven valleys to the end, where a great secret about the king they sought awaited them, a secret saved for those who finished the road." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Why did so many of the birds turn back instead of making the journey?",
      options: [
        "Each was clinging to some comfort or fear it would not give up",
        "The hoopoe forbade most of them to go",
        "A storm closed the road completely",
        "They could not find the road at all"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: each bird's attachment held it back. Here it shows why the road thinned rather than testing the branch."
    },
    { type: "story", moral: "Before any bird flew a single valley, the whole story lived in a branch: the king that could be reached, and all that reaching him would cost." }
  ]
};
export default story;
