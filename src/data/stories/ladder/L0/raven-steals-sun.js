// raven-steals-sun.js
// L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture where the sun is kept and where Raven takes it.
const ravenStealsSun = {
  id: "raven-steals-sun",
  title: "Raven Steals the Sun",
  icon: "🌞",
  difficulty: "Beginner",
  theme: "Light hidden, light freed",
  estimatedTime: "5-10 min",
  description: "The Sky Chief keeps the sun locked in a box in his house. The world is dark. Raven has a plan to bring the light down.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Haida/Tlingit",
    region: "North America",
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
      text: "Long ago the world lay dark. All the light—sun, moon, and stars—belonged to one man, the Sky Chief, who kept them locked away in carved boxes in the corner of his house. No one else could see them. No one else could touch them."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "Picture the sun right now, at the start of this story. Where is it?",
      options: [
        "High in the sky above the village",
        "Inside a box in the Sky Chief's house",
        "Buried deep under the ground",
        "Floating far out at sea"
      ],
      correctAnswer: 1,
      explanation: "The sun is not in the sky where we expect it. It is locked inside a carved box in the corner of the Sky Chief's house, which is why the world stays dark."
    },
    {
      type: "story",
      text: "Raven wanted the light for the world. He changed himself into a pine needle and dropped into the Sky Chief's daughter's cup. She drank, and soon after, a baby was born. The Sky Chief loved his grandson and gave him anything he cried for."
    },
    {
      type: "question",
      domain: "color",
      band: "B0",
      grammar_cell: "concrete_noun",
      gates: false,
      question: "Picture the world outside while the sun stays locked in the box. What does it look like?",
      options: [
        "Bright and warm with golden light",
        "Gray and dim like twilight",
        "Completely black with no light at all",
        "Red and flickering like fire"
      ],
      correctAnswer: 2,
      explanation: "With the sun locked away, no light reaches the world. It is not dim or gray—it is utterly black, as if night never ends."
    },
    {
      type: "story",
      text: "The baby—Raven in disguise—cried and pointed at the smallest box. The Sky Chief opened it and gave him the stars to play with. The baby tossed them up through the smoke hole, and they scattered across the sky. Then he cried for the moon, and sent that up too. At last he cried for the biggest box."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "By the time the baby cries for the biggest box, how many of the three lights has he already thrown up into the sky?",
      options: [
        "None; all are still in boxes",
        "One—only the stars",
        "Two—the stars and the moon",
        "All three"
      ],
      correctAnswer: 2,
      explanation: "Picture what has already happened: the baby threw the stars through the smoke hole, then the moon. Only the sun, in the biggest box, remains."
    },
    {
      type: "story",
      text: "The Sky Chief smiled and handed over the sun. The baby held it, then turned back into Raven, spread his wings, and flew straight up through the smoke hole. He carried the sun out into the world and hung it in the sky, and for the first time, light poured down on everything."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "Picture the sun at the end of the story. Where has Raven put it?",
      options: [
        "Back in the box in the Sky Chief's house",
        "Hidden in his own nest",
        "Up in the sky above the world",
        "Deep in a cave on the mountain"
      ],
      correctAnswer: 2,
      explanation: "Raven has moved the sun from inside the locked box to up in the sky where it can light the whole world. This is the great change of the story: the sun's place shifts from hidden to high."
    },
    {
      type: "story",
      moral: "A locked box kept the sun. A trick brought it into the sky. What was held in one corner now shines on everything."
    }
  ]
};

export default ravenStealsSun;