// example_L0_thor-utgard.js
// WORKED EXEMPLAR. L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture the thing right. Both gating questions turn on a pictured fact, not a named form.
const thorUtgard = {
  id: "thor-utgard",
  title: "Thor at Utgard",
  icon: "⚡",
  difficulty: "Beginner",
  theme: "A thing is not its size",
  estimatedTime: "5-10 min",
  description: "A giant hands Thor a plain drinking horn and dares him to empty it. Picture the horn well and you will see the trick before Thor does.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Norse",
    region: "Northern Europe",
    saga: "norse_eddas",
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
      text: "In the hall of the giants at Utgard, the king smiled at Thor. \"A small test,\" he said. \"Empty this horn in one draught. My youngest do it in three.\" A servant set down a long drinking horn. It did not look so very large."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "The horn looks ordinary in the hall, but its far end runs out of sight. Where does that far end actually reach?",
      options: [
        "Into a barrel in the next room",
        "All the way down to the sea",
        "Into a hidden spring beneath the floor",
        "Nowhere; the horn is shallow"
      ],
      correctAnswer: 1,
      explanation: "The giants have set the horn's tip into the ocean itself. To picture the scene rightly is to follow the horn past the hall and down to the sea, which is why no single draught can lower it."
    },
    {
      type: "story",
      text: "Thor set his mouth to the horn and drank a great, long draught until his breath gave out. He lowered it, certain he had nearly emptied it, and looked inside."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: true,
      question: "After that huge draught, picture the level of drink in the horn. How much did it drop?",
      options: [
        "The horn emptied completely",
        "It fell by about half",
        "It sank barely a finger's width",
        "It rose higher than before"
      ],
      correctAnswer: 2,
      explanation: "Since the horn opens into the sea, even Thor's mightiest pull moves the level almost not at all. Picturing the size of the sea against one mouthful gives the answer."
    },
    {
      type: "story",
      text: "Twice more Thor drank, and twice more the level scarcely stirred. Only later did the giant king confess: the horn had reached the sea, and Thor, without knowing it, had been gulping down the ocean. Where the world had looked small, it had been vast all along."
    },
    {
      type: "story",
      moral: "A plain horn held the whole sea. Look again at a small thing before you trust its size."
    }
  ]
};

export default thorUtgard;
