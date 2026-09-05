// mwindo.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
const story = {
  id: "mwindo",
  title: "Mwindo and His Father",
  icon: "⚡",
  difficulty: "Hard",
  theme: "Two branches at the moment of revenge",
  estimatedTime: "5-10 min",
  description: "The wonder-child Mwindo finally has at his mercy the father who tried to destroy him. Hold the branch where he takes revenge, and the branch where he does not.",
  meta: {
    level: 6,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional"],
    grammar_target: "conditional",
    culture: "Congo",
    region: "East and Central Africa",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "Nyanga, Democratic Republic of the Congo - credit specifically, not 'African'. Openly shared oral epic; care = accuracy.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Chief Shemwindo feared that a son would one day take his place, so he swore that any son born to him would be destroyed. But the child Mwindo was born with wonders about him and could not be killed. Driven out and hunted by his own father, Mwindo grew in power and at last followed the fleeing Shemwindo all the way down into the underworld." },
    { type: "story", text: "There, at the end of the long chase, Mwindo stood over his father at last. The man who had tried so hard to destroy him was now helpless before him. One word from Mwindo, and his revenge would be complete." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Mwindo has his father at his mercy. Hold the first branch: if Mwindo were to take his revenge and destroy his father now, what would follow?",
      options: [
        "He would finally be at peace and all would be well",
        "He would answer his father's cruelty with cruelty, becoming the very thing that hunted him, and the cycle of fear would simply turn again",
        "His father would forgive him afterward",
        "The underworld would make him its king"
      ],
      correctAnswer: 1,
      explanation: "The branch of revenge is laid out to be held, not yet taken. Were Mwindo to kill, he would mirror the father who feared and hunted his own child, keeping the same cruelty alive. The reader weighs that closing of the circle."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Now hold the other branch. If instead Mwindo were to spare his father and seek to be reconciled, what could become of their ruined house and kingdom?",
      options: [
        "Nothing could change; the harm is already done",
        "The long quarrel could end, and the kingdom could be healed and rightly ruled at last",
        "The father would only try to kill him again at once",
        "Mwindo would lose all his power"
      ],
      correctAnswer: 1,
      explanation: "The mercy branch opens a different future: were he to spare and reconcile, the cycle could break and the kingdom be restored. Holding both branches side by side, the reader feels the whole weight of the choice before Mwindo makes it."
    },
    { type: "story", text: "Mwindo chose the harder road. He spared his father, and the two were reconciled, and Mwindo became a wise ruler who governed with justice rather than fear. The cruelty that had begun the story was not passed on." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "Mwindo rules now with justice instead of fear. If a ruler governs that way rather than by terror, what is likely to follow for his people?",
      options: [
        "They will rise against him at the first chance",
        "They will trust and follow him, and the kingdom will be steadier than one held by fear",
        "Nothing will change from his father's reign",
        "They will leave the kingdom entirely"
      ],
      correctAnswer: 1,
      explanation: "The story closes by pointing forward on a hopeful branch: rule by justice, and trust follows. It is the living answer to the revenge Mwindo refused, the better future that his mercy made possible."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Shemwindo tried to destroy his own son in the first place?",
      options: [
        "Because he feared a son would one day take his place",
        "Because the son had attacked him",
        "Because a stranger had told him to",
        "Because the kingdom had no room for a child"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause from the opening: the father's fear of being replaced began it all. Here it frames the choice rather than testing the branch."
    },
    { type: "story", moral: "At the last moment two futures lay open before Mwindo. To read the tale is to hold them both, the revenge that would repeat the wound and the mercy that could end it." }
  ]
};
export default story;
