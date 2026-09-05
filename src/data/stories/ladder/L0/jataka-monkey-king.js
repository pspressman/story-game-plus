// jataka-monkey-king.js
// L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture where the King stands and where his body reaches.
const jatakaMonkeyKing = {
  id: "jataka-monkey-king",
  title: "The Monkey King",
  icon: "🐒",
  difficulty: "Beginner",
  theme: "A king's body becomes a bridge",
  estimatedTime: "5-10 min",
  description: "Hunters surround a troop of monkeys in a tall tree by the river. The Monkey King uses his own body as a bridge so all can escape. Picture where he stands and where the others cross.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Buddhist",
    region: "South Asia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "A troop of monkeys lived in a tall tree by the river. One day hunters came with nets and surrounded the tree on all sides. The young monkeys cried out. The far bank lay just out of reach across the water."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "The Monkey King ties one end of a vine to the tree and the other around his waist, then leaps. Where does his body hang?",
      options: [
        "Flat on the ground below the tree",
        "Stretched tight in the air between the tree and the far bank",
        "Floating on the surface of the water",
        "Curled up inside the tree hollow"
      ],
      correctAnswer: 1,
      explanation: "Picture his leap carefully: he jumps from the tree toward the far bank, and the vine holds him in the air between them. His body becomes a bridge hanging across the gap."
    },
    {
      type: "story",
      text: "The Monkey King's hands gripped a branch on the far bank, and the vine held his feet to the tree behind. His body stretched tight across the river like a living bridge. \"Cross on me,\" he called. \"Quickly.\""
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_present",
      gates: false,
      question: "Picture the monkeys running across the King's back, one after another. How many of them stay behind in the tree?",
      options: [
        "All of them",
        "About half",
        "Only the young ones",
        "None; they all cross to safety"
      ],
      correctAnswer: 3,
      explanation: "Every single monkey in the troop runs across the King's body and reaches the far bank. The picture shows the tree emptying completely as they all escape."
    },
    {
      type: "story",
      text: "Monkey after monkey ran across the King's back and dropped to the far bank, safe. The last one was the youngest. When she stepped off, the King let go. He fell into the water below, too tired to hold on any longer."
    },
    {
      type: "question",
      domain: "mood",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "After the last monkey crossed, the King fell. Picture his face as he let go. What did he feel?",
      options: [
        "Afraid that he had failed his troop",
        "Angry at the hunters below",
        "Peaceful, knowing all were safe",
        "Surprised that the vine broke"
      ],
      correctAnswer: 2,
      explanation: "He held on until every single monkey crossed. Only then did he let go. That order of events shows his feeling: the work was done, and he could rest."
    },
    {
      type: "story",
      text: "The hunters below pulled the King from the river. They saw what he had done and let him go, bowing low. A body can be a bridge when nothing else will reach."
    },
    {
      type: "story",
      moral: "The King made his own body the bridge. Sometimes the tool you need is yourself."
    }
  ]
};

export default jatakaMonkeyKing;