// L1 node: Manco Capac and Mama Ocllo
// Level 1, B1 event and cause. Grammar target: sequence_and_aspect.
// Tier R. Track when they start, what they have been doing, where the staff finally sinks.
const mancoCapacMamaOcllo = {
  id: "manco-capac-mama-ocllo",
  title: "Manco Capac and Mama Ocllo",
  icon: "☀️",
  difficulty: "Beginner",
  theme: "The sun sends founders to find their city",
  estimatedTime: "5-10 min",
  description: "The sun god sends his children with a golden staff to wander the earth until they find fertile ground. Watch the order of their journey and what happens at each stop.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Inca",
    region: "South America",
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
      text: "The sun god Inti looked down on the world and saw people living without order or learning. He called his son Manco Capac and his daughter Mama Ocllo to him. \"I am giving you a golden staff,\" he said. \"Walk the earth. At every place you rest, strike the staff into the ground. Where it sinks all the way down, the soil is rich enough. Build my city there.\""
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "How many children did Inti send out on this journey?",
      options: [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      correctAnswer: 1,
      explanation: "The sun god sent two children: Manco Capac and Mama Ocllo. This is a simple counting question reaching back to the floor."
    },
    {
      type: "story",
      text: "Manco Capac and Mama Ocllo came down from the sky near Lake Titicaca, carrying the golden staff between them. They began to walk north. At the first valley they stopped and drove the staff down, but it struck rock and would not sink. They walked on. For months they had been traveling, stopping at hill after hill, and each time the staff bounced back or caught on stone."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_perfect_progressive",
      gates: true,
      question: "By the time they reach the hills around the valley, what have they been doing for months?",
      options: [
        "Building temples at every stop",
        "Walking and testing the ground with the staff",
        "Teaching people how to farm",
        "Gathering followers from every village"
      ],
      correctAnswer: 1,
      explanation: "The ongoing action that had been continuing for months was their journey: walking from place to place and striking the staff into the ground at each stop. They have not yet found the right spot, so they have not started building or teaching."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "Why do Manco Capac and Mama Ocllo keep walking north instead of settling at the first valley?",
      options: [
        "The people there refuse to welcome them",
        "They prefer mountains to valleys",
        "The staff will not sink into the ground there",
        "Inti orders them to walk farther in a dream"
      ],
      correctAnswer: 2,
      explanation: "Follow the order: they try the staff at the first valley, it hits rock and will not sink, so they know the soil is not fertile enough and they must continue. The command was to settle only where the staff sinks all the way down."
    },
    {
      type: "story",
      text: "At last they climbed into a sheltered valley ringed by mountains. Manco Capac raised the staff and brought it down. It slid into the earth as smoothly as a paddle into water and vanished to the hilt. \"Here,\" said Mama Ocllo. They planted the first crop, gathered the scattered people, and taught them to build in stone. The city they founded was Cusco, the navel of the world."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "When Mama Ocllo says \"Here,\" what has just happened to show this is the right place?",
      options: [
        "The people have built a temple to Inti",
        "The staff has sunk completely into the ground",
        "The sun has appeared after months of clouds",
        "They have arrived at the highest mountain"
      ],
      correctAnswer: 1,
      explanation: "The completed action that marks the moment is the staff sinking all the way into the earth. That event has just finished, showing the soil is fertile. The teaching and building come afterward."
    },
    {
      type: "story",
      moral: "The sun sent wanderers with a test, not a map. They learned the right ground not by looking but by trying, step after step, until the earth itself answered."
    }
  ]
};

export default mancoCapacMamaOcllo;