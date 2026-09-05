// L2 node: puss-in-boots
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Gate: read the trick. The gating stems turn on a non-finite form AND on the cat's hidden plan to build a false marquis.
const pussInBoots = {
  id: "puss-in-boots",
  title: "Puss in Boots",
  icon: "👢",
  difficulty: "Easy",
  theme: "The long con",
  estimatedTime: "5-10 min",
  description: "A cat tricks a king into thinking his poor master is a wealthy marquis. Each lie builds on the last. Read the cat's hidden plan through the sequence of tricks.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "European",
    region: "Western Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: ["trickster_many_faces"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "The miller died and left his youngest son nothing but a cat. The cat stood up, looked the boy in the eye, and said, \"Get me a pair of boots and a sack. You will see.\" The boy, having nothing else, obeyed."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "The cat begins catching rabbits in the forest and bringing them to the king, saying each time, \"A gift from my master, the Marquis of Carabas.\" What is the cat really trying to do?",
      options: [
        "To impress the king with his own hunting skill",
        "To build the idea of a wealthy, generous master who does not yet exist",
        "To repay the boy for the boots by feeding the royal family",
        "To learn if the king already knows the real Marquis of Carabas"
      ],
      correctAnswer: 1,
      explanation: "Reading the trick means seeing past the gift to the long game: each rabbit is not food but a brick in a false reputation. The cat plants the name over and over so the king will believe the marquis is real before ever meeting the boy."
    },
    {
      type: "story",
      text: "Weeks passed. Then one day the cat saw the king's carriage rolling toward the river. He told the boy to strip and jump in, then hid the rags in the reeds and ran out shouting, \"Help! Thieves have stolen my master's fine clothes while he bathed!\""
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "The king hears the cat crying about stolen clothes and remembers receiving many gifts from the Marquis of Carabas. What is the king now thinking about the poor boy standing wet and ragged in the river?",
      options: [
        "That he is a common thief pretending to be noble",
        "That he really is the wealthy marquis the cat has been describing all along",
        "That he should question the cat more carefully about the gifts",
        "That the boy is too young to own land or title"
      ],
      correctAnswer: 1,
      explanation: "The king's mind has already been shaped by the gifts. Hearing the marquis name again, he does not see a poor miller's son but the wealthy man he has been led to imagine. The trick works because the cat built the belief first."
    },
    {
      type: "question",
      domain: "number",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "By the time the cat shouts about thieves at the river, how many gifts from the Marquis of Carabas has the king already received?",
      options: [
        "None; this is the first meeting",
        "One or two rabbits the day before",
        "Many gifts over weeks of hunting",
        "Only a single letter introducing the marquis"
      ],
      correctAnswer: 2,
      explanation: "Tracking what has already happened before the river scene shows the foundation: the cat has been delivering game for weeks, making the name familiar and the generosity expected."
    },
    {
      type: "story",
      text: "The king dressed the boy in royal clothes and invited him into the carriage. The cat ran ahead to every field and castle, threatening the workers: \"Say these lands belong to the Marquis of Carabas, or be chopped to bits.\" When the king asked the farmers, they bowed and answered just as the cat had commanded. By sundown the king was convinced, and the boy, still silent, rode home engaged to the princess."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "participle",
      gates: false,
      question: "At the end the king believes he has found a modest, noble marquis for his daughter. Knowing the truth, what has he really done?",
      options: [
        "Married his daughter to the son of his oldest rival",
        "Chosen the one suitor honest enough to stay quiet",
        "Been tricked into making a penniless miller's son royalty",
        "Discovered the one man in the kingdom who truly deserved the title"
      ],
      correctAnswer: 2,
      explanation: "The irony lands when you hold both pictures: the king thinks he is rewarding noble wealth, but the cat has conjured the whole marquis from nothing. Silence from the boy read as modesty was just a poor man with nothing to say."
    },
    {
      type: "story",
      moral: "A lie told once is a gamble. A lie told many times, in the right order, becomes the truth others choose to believe."
    }
  ]
};

export default pussInBoots;