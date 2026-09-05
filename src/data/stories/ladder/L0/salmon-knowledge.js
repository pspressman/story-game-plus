// salmon-knowledge.js
// L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture which finger touched his lips.
const salmonKnowledge = {
  id: "salmon-knowledge",
  title: "The Salmon of Knowledge",
  icon: "🐟",
  difficulty: "Beginner",
  theme: "The first taste is everything",
  estimatedTime: "5-10 min",
  description: "Young Fionn cooks a salmon for his master. The first to taste it gains all knowledge. Picture which finger touched his lips.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Ireland",
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
    {
      type: "story",
      text: "The poet Finnegas had fished for seven years to catch the Salmon of Knowledge. The first person to taste it would know everything. At last he caught it and told his student Fionn, \"Cook it well, but do not eat even one bite.\""
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "Fionn turns the salmon over the fire. A blister rises on its silver skin. Where does Fionn press his thumb to flatten it?",
      options: [
        "On the head of the fish",
        "On the tail of the fish",
        "On the hot blister on the side",
        "On the coals beneath the fire"
      ],
      correctAnswer: 2,
      explanation: "The thumb goes right to the blister on the salmon's side. Picturing that spot is everything: the hot fat burns his thumb, and that burned thumb will carry the taste to his mouth."
    },
    {
      type: "story",
      text: "The blister burned. Without thinking, Fionn put his thumb to his lips to cool it. The moment his tongue touched the salmon fat, light filled his head."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: true,
      question: "Picture Fionn's hand in that instant. How many fingers touched his lips and brought the salmon's taste into his mouth?",
      options: [
        "His whole hand touched his face",
        "Just his thumb alone",
        "His thumb and first finger together",
        "None; he did not taste it at all"
      ],
      correctAnswer: 1,
      explanation: "Only the one thumb, burned on the blister, went to his mouth. One finger, one taste, and the knowledge passed complete."
    },
    {
      type: "story",
      text: "Finnegas looked at the boy's face and understood at once what had happened. \"The salmon was meant for you,\" he said quietly. \"Go now. You have all I might have taught you, and more.\""
    },
    {
      type: "question",
      domain: "color",
      band: "B0",
      grammar_cell: "concrete_noun",
      gates: false,
      question: "Picture the salmon turning over the fire before the blister rose. What color was its skin?",
      options: [
        "Silver",
        "Gold",
        "Red",
        "Black"
      ],
      correctAnswer: 0,
      explanation: "The story names the silver skin early on. This is a plain seeing move, not a gate."
    },
    {
      type: "question",
      domain: "mood",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "When Finnegas saw the boy's changed face, how did he answer?",
      options: [
        "He shouted in anger",
        "He spoke quietly and let the boy go",
        "He laughed with joy",
        "He said nothing at all"
      ],
      correctAnswer: 1,
      explanation: "The master saw what had happened and spoke quietly, sending Fionn away. Picturing the mood of that final moment shows acceptance, not rage."
    },
    {
      type: "story",
      moral: "A thumb pressed to a blister, then to a mouth. The smallest touch can change everything."
    }
  ]
};

export default salmonKnowledge;