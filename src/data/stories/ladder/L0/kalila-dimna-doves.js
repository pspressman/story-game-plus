// kalila-dimna-doves.js
// L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture where the net ends up when the doves fly together.
const kalilaWaDimnaDoves = {
  id: "kalila-dimna-doves",
  title: "The Doves and the Net",
  icon: "🕊️",
  difficulty: "Beginner",
  theme: "Together we carry what alone would trap us",
  estimatedTime: "5-10 min",
  description: "Doves land on grain and are caught in a hunter's net. Picture where the net ends up when they all fly as one.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Arabic/Persian",
    region: "North Africa and Arabia",
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
      text: "A flock of doves saw grain scattered on the ground and swooped down to eat. The moment they landed, a net pulled tight around them all. A hunter had hidden it under the grain."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "The doves are tangled in the net on the ground. If they all beat their wings and rise together, carrying the net with them, where does the net end up?",
      options: [
        "It stays on the ground where it was set",
        "It rises into the air with the doves",
        "It tears and falls in pieces",
        "The hunter catches it before it moves"
      ],
      correctAnswer: 1,
      explanation: "Picture the net: it lies flat on the ground, but when every dove flaps upward at once, the whole net lifts into the sky with them. The weight is spread across many wings."
    },
    {
      type: "story",
      text: "The oldest dove called out: \"Fly together! All at once, now!\" Every bird beat its wings. The net trembled, then lifted. The hunter stood below and watched his trap rise into the air, carried by the very creatures it had caught."
    },
    {
      type: "question",
      domain: "color",
      band: "B0",
      grammar_cell: "simple_present",
      gates: false,
      question: "Picture the hunter standing on the ground as the net floats away above him. What color is the sky behind the rising doves?",
      options: [
        "Blue",
        "Green",
        "Red",
        "Black"
      ],
      correctAnswer: 0,
      explanation: "The scene is in daylight, so the sky is blue. This is a simple picture of what is there, not a trick."
    },
    {
      type: "story",
      text: "The doves flew on, net and all, until they reached a field where a mouse lived. The mouse was an old friend. \"Please,\" said the doves, \"gnaw through this net.\" The mouse set to work."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "Picture the flock flying together with the net. How many doves does it take to lift the net into the air?",
      options: [
        "Just one strong dove",
        "Two or three leading doves",
        "All of them together",
        "None; the net fell back down"
      ],
      correctAnswer: 2,
      explanation: "The story showed every bird beating its wings at once. One dove alone could not carry the net, but together the whole flock lifts it easily."
    },
    {
      type: "story",
      text: "The mouse chewed and chewed until the last thread broke. The doves shook themselves free and flew off, calling their thanks. The net lay empty on the ground, far from the hunter and his grain."
    },
    {
      type: "question",
      domain: "mood",
      band: "B0",
      grammar_cell: "concrete_noun",
      gates: false,
      question: "Picture the doves the moment they shake free of the net. How do they feel?",
      options: [
        "Trapped and afraid",
        "Tired and hungry",
        "Free and grateful",
        "Angry and vengeful"
      ],
      correctAnswer: 2,
      explanation: "They have just escaped the net and been helped by a friend. The story shows them calling out thanks as they fly away."
    },
    {
      type: "story",
      moral: "The net that caught them could not hold them. Many wings together lift what one alone cannot."
    }
  ]
};

export default kalilaWaDimnaDoves;