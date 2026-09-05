// vainamoinen-kalevala.js
// L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Gate: order events, hold ongoing-vs-done. Giant oak blocks sun and moon,
// tiny man emerges and grows huge to fell it.
const vainamoinenKalevala = {
  id: "vainamoinen-kalevala",
  title: "Vainamoinen and the Oak",
  icon: "🌳",
  difficulty: "Beginner",
  theme: "The smallest seed fells the greatest tree",
  estimatedTime: "5-10 min",
  description: "A giant oak blocks sun and moon. Vainamoinen calls a tiny man from the sea who grows enormous and fells the tree. Sequence the transformations.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Finland",
    region: "Northern Europe",
    saga: "kalevala",
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
      text: "An acorn fell into rich earth and a sapling broke through the soil. Day by day it climbed higher. Soon its trunk was broader than a man could reach around, and its crown touched the clouds. The oak spread its branches until the sky was hidden. The moon could not shine through, and the sun could not break past its leaves."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "Picture the oak when the acorn first split and the first green shoot appeared. How many branches had the sapling grown at that moment?",
      options: [
        "None yet",
        "A single small one",
        "Three or four",
        "Dozens already"
      ],
      correctAnswer: 0,
      explanation: "At the first sprouting, a sapling is a stem only. Branches come later as it grows. This question reaches back to the simplest picture of the beginning."
    },
    {
      type: "story",
      text: "Old Vainamoinen saw the darkness spreading. He called to the sea for help. The waves parted, and up from the foam stepped a man no taller than a man's thumb. The tiny figure stood dripping on the shore and looked up at the towering oak."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "What happens first: the man stepping from the sea, or Vainamoinen calling for help?",
      options: [
        "The man steps out before Vainamoinen calls",
        "Vainamoinen calls, then the man steps out",
        "They happen at exactly the same instant",
        "The man grows huge before either event"
      ],
      correctAnswer: 1,
      explanation: "Follow the order: Vainamoinen sees the darkness and calls to the sea. Only after his call do the waves part and the man appear. The call comes first, then the response."
    },
    {
      type: "story",
      text: "As Vainamoinen and the people watched, the thumb-sized man began to swell. His head rose past Vainamoinen's waist, then his shoulder, then higher still. Within moments he was taller than the tallest pine. His hand alone was the size of a boat. He reached for an axe that had appeared beside him, an axe as large as a hillside."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "At the moment when the man's head was rising past Vainamoinen's shoulder, what was happening to his body?",
      options: [
        "It had already finished growing",
        "It was still getting bigger",
        "It was shrinking back down",
        "It had stopped changing"
      ],
      correctAnswer: 1,
      explanation: "The story shows a continuous transformation. When his head passes the shoulder, the growth is ongoing. He keeps swelling until he is taller than the tallest pine, so the change is still in progress at that point."
    },
    {
      type: "story",
      text: "The giant lifted the axe and swung. The blade bit deep into the oak's trunk. He swung again, and again. Chips the size of houses flew through the air. With a groan that shook the earth, the oak toppled. Sunlight flooded the land. The moon sailed clear across the open sky."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "The people look up and see the moon shining down on them. By that moment, what has happened to the oak?",
      options: [
        "It is still standing and blocking the light",
        "It is beginning to shake but has not fallen",
        "It has already fallen to the ground",
        "It has vanished without being cut"
      ],
      correctAnswer: 2,
      explanation: "The moon can shine only after the oak no longer blocks it. The story shows the tree toppling, and then the moon sailing clear. So when the people see the moon, the felling is already complete."
    },
    {
      type: "story",
      moral: "The darkness came from a seed, and a figure smaller than a thumb felled it. The people learned that the mightiest barrier can fall before the smallest champion when the need is great."
    }
  ]
};

export default vainamoinenKalevala;