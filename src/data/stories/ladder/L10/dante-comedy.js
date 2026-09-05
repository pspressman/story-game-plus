// dante-comedy.js  L10 summit. B8, the mappable moral cosmos. Open Field allegory-engine.
const story = {
  id: "dante-comedy",
  title: "Dante's Journey Through the Ordered Worlds",
  icon: "🗺️",
  difficulty: "Master",
  theme: "A whole cosmos arranged so place reveals soul",
  estimatedTime: "5-10 min",
  description: "A poet is led down through the depths and up to the heights of the next world, where every soul's place is fixed by the life it led. Read a journey that is really a map of the moral order itself.",
  meta: {
    level: 10,
    track: "gated",
    tier: "A",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "Italy",
    region: "Western Europe",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A poet, lost in a dark wood, is led by the wise guide Virgil down into the depths of the next world and then up its great heights. At every level he meets souls placed exactly according to the lives they lived, the selfish and the cruel far down, the gentle and the just climbing higher and higher toward the light." },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Every soul the poet meets is sorted by the kind of life it led, the place fixed to the deed. Beyond a tour of the afterlife, what is the whole journey really a map of?",
      options: [
        "A real country the poet could visit again",
        "The moral order itself, a cosmos arranged so that where a soul stands shows exactly what that soul was",
        "The poet's own city and its streets",
        "A dream with no pattern to it"
      ],
      correctAnswer: 1,
      explanation: "The journey is the map. Each place is keyed to a kind of life, so the whole ordered world becomes a picture of right and wrong made visible. To read it is to see a moral order laid out as geography you can walk."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "The poet descends to the lowest depth and then climbs all the way to the highest light. By the time he reaches the summit, what will he have been doing the whole long way?",
      options: [
        "Wandering with no direction at all",
        "Passing in order through every grade of the moral world, climbing the entire map from the worst lives to the best as one ascending road",
        "Looking for a way back to his city",
        "Fighting the souls he meets"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect holds the whole climb at once: by the height, he will have been traversing the complete moral order, step by graded step. The journey is not random travel but a measured ascent through the entire map of how a life can go."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "present_perfect",
      gates: true,
      question: "The place each soul lands in mirrors its life with terrible exactness, the deed and its setting fitted together. What does it mean that the outer place matches the inner truth so precisely?",
      options: [
        "It is only a coincidence",
        "The cosmos is built so that the visible place reveals the hidden truth of the soul, so the map itself carries the meaning",
        "The souls chose their own places freely",
        "The poet arranged the places himself"
      ],
      correctAnswer: 1,
      explanation: "When place and soul match exactly, the geography becomes a language. The outer world has been ordered to display the inner one, so reading where a soul is means reading what it was. The map and the meaning are the same thing."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Who guided the poet at the start of his journey?",
      options: [
        "The wise guide Virgil",
        "His own daughter",
        "A talking beast",
        "No one; he went alone"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: Virgil leads him in. Here it frames the journey rather than testing the allegory."
    },
    { type: "story", moral: "The poet did not just travel; he walked a map of the moral world, where every place spoke the truth of a soul. At the summit, a whole cosmos can be ordered so that to read the map is to read the meaning." }
  ]
};
export default story;
