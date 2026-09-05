// ranginui-papatuanuku.js
// L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Tier R. Tracks the sequence: darkness under the embrace, children's decision, 
// separation by Tāne, arrival of light.
const ranginuiPapatuanuku = {
  id: "ranginui-papatuanuku",
  title: "Ranginui and Papatuanuku",
  icon: "🌄",
  difficulty: "Beginner",
  theme: "The price of light",
  estimatedTime: "5-10 min",
  description: "Sky father and Earth mother hold each other so tightly their children cannot see. The children must choose between their parents' embrace and the light.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Maori",
    region: "Polynesia",
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
      text: "In the beginning, Ranginui the Sky Father and Papatuanuku the Earth Mother lay locked in an embrace. Their bodies pressed so close together that no light came between them. Their children lived in the darkness underneath, never seeing the sky, never feeling the sun."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "Before the children ever made their choice, where did they live?",
      options: [
        "In the darkness between their parents",
        "High above in the sky",
        "Far away from their parents",
        "In a cave beneath the ground"
      ],
      correctAnswer: 0,
      explanation: "The story shows the starting condition: the children lived in the space between Sky and Earth, trapped in darkness by their parents' closeness. This simple picture comes before any choices were made."
    },
    {
      type: "story",
      text: "The children grew weary of the endless dark. They gathered to decide: should they kill their parents to make room, or push them apart? Most agreed to push, though Tāwhirimātea the wind refused. One after another the children strained against the embrace and failed. Then Tāne, god of forests, braced his shoulders against his father and his feet against his mother, and pushed."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "What happens right after the children decide to separate their parents?",
      options: [
        "Light immediately floods the world",
        "They try to push, but several fail before Tāne succeeds",
        "Tāwhirimātea attacks his brothers in anger",
        "The parents willingly let go of each other"
      ],
      correctAnswer: 1,
      explanation: "Follow the order: first the decision, then the attempts. Several children try and cannot do it, and only then does Tāne manage to push them apart. The separation is not instant; it comes after repeated failures."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "While the children were living in darkness, what was causing their problem?",
      options: [
        "The sun had not yet been created",
        "Their parents were holding each other too close to let light through",
        "Tāwhirimātea was blocking the sky with storms",
        "They had chosen to live underground"
      ],
      correctAnswer: 1,
      explanation: "The ongoing condition was the embrace: as long as Ranginui and Papatuanuku were pressed together, no light could enter. The darkness was not an absence of sun, but a blocking of it by their bodies."
    },
    {
      type: "story",
      text: "Tāne's strength finally drove them apart. Ranginui rose up to become the distant sky. Papatuanuku spread wide as the earth below. Light poured into the space between them for the first time. But Ranginui wept for his lost wife, and his tears fall still as rain."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "By the time light arrives, what has already happened?",
      options: [
        "The parents have been pushed apart",
        "The children have learned to see in the dark",
        "Tāne has become the new Sky Father",
        "The parents have stopped loving each other"
      ],
      correctAnswer: 0,
      explanation: "The arrival of light is the result, not the cause. What has been completed before it arrives is the separation: Tāne pushed, the parents were driven apart, and only then could light come through."
    },
    {
      type: "story",
      moral: "The children wanted light. They got it, but only by tearing their parents apart. Creation came at the cost of an embrace that can never be restored."
    }
  ]
};

export default ranginuiPapatuanuku;