// example_L1_sword-in-the-stone.js
// WORKED EXEMPLAR. L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Gate: order events, hold ongoing-vs-done. Shows a gates:true sequence item, a gates:true
// aspect item, and a cumulative gates:false B0 item reaching back to the floor.
const swordInTheStone = {
  id: "sword-in-the-stone",
  title: "The Sword in the Stone",
  icon: "🗡️",
  difficulty: "Beginner",
  theme: "The right hand, not the strong one",
  estimatedTime: "5-10 min",
  description: "Grown knights heave at a sword fixed in an anvil and cannot stir it. A boy walks up to borrow one for his brother. Watch the order of what happens.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "present_perfect", "past_perfect", "past_progressive", "sequence", "concrete_noun", "locative"],
    grammar_target: "sequence_and_aspect",
    culture: "Britain",
    region: "British Isles",
    saga: "arthur",
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
      text: "A sword stood fixed in an anvil on a stone, and on it were cut the words: whoever draws this is the true king. Knight after knight had gripped it, braced a boot on the stone, and hauled until their faces went red. Not one had moved it a hair."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Before young Arthur ever steps up to the stone, picture the knights who have already tried. How many of them had managed to shift the sword?",
      options: [
        "None of them",
        "About half",
        "Only the strongest few",
        "All but one"
      ],
      correctAnswer: 0,
      explanation: "The story has shown try after failing try, so the pictured tally before Arthur arrives is zero. This is a picturing question reaching back to the simplest move; it does not test the level's own target."
    },
    {
      type: "story",
      text: "On tournament day, Arthur's older brother Kay found he had left his sword back at the inn. \"Fetch me one, quick,\" he told Arthur. The inn was locked and crowded. Hurrying back past the churchyard, Arthur saw a sword standing ready in a stone and, thinking nothing of it, pulled it free."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "Why does Arthur tug at this particular sword in the churchyard?",
      options: [
        "He means to prove he is the king",
        "His brother needs a sword now and this is the nearest one",
        "The watching knights have dared him to try",
        "He wants to test how strong he has become"
      ],
      correctAnswer: 1,
      explanation: "Follow the order of events: Kay's sword is left behind, the inn is shut, Arthur is sent to find a replacement fast, and the churchyard sword is simply the first one to hand. He is running an errand, not claiming a throne."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Kay carries the sword to their father and says he drew it himself. By that moment, what has actually happened?",
      options: [
        "Kay has drawn it after many tries of his own",
        "Arthur has drawn it and handed it to Kay",
        "The sword has worked itself loose on its own",
        "Their father has drawn it for them both"
      ],
      correctAnswer: 1,
      explanation: "Holding what has already been completed against Kay's claim is the whole point: the drawing is done, and it was Arthur who did it. Kay only carried it afterward."
    },
    {
      type: "story",
      text: "Their father asked Kay to set the sword back and draw it again. Kay could not. Arthur, puzzled, slid it out once more as easily as before. Then they understood what had quietly happened in the churchyard, and knelt."
    },
    {
      type: "story",
      moral: "Strength rattled the sword for years. A boy on an errand lifted it. The story turned on who was sent, not who was strong."
    }
  ]
};

export default swordInTheStone;
