// decameron-frame.js  L8, B5. Frame structure only, age-appropriate (per care note). Reported speech.
const story = {
  id: "decameron-frame",
  title: "The Storytellers Who Fled the Plague",
  icon: "📖",
  difficulty: "Advanced",
  theme: "A story that holds many other stories",
  estimatedTime: "5-9 min",
  description: "To escape a plague, ten young people gather in the countryside and pass the days telling tales. Follow how a story can be built as a frame around the stories its characters tell.",
  meta: {
    level: 8,
    track: "gated",
    tier: "O",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Italy",
    region: "Western Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: "Adult source; use frame structure only, kept age-appropriate.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Long ago, when a terrible plague swept through their city, ten young people left for a quiet house in the hills to wait in safety. To pass the long days, they agreed that each of them would tell a story in turn, and so, day after day, they sat together while one after another spoke and the rest listened." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "We read that on the first day, one young woman told the others a tale of a clever traveler. We never hear it from the traveler himself; we are told that she told it. How is the whole book built?",
      options: [
        "As a single straight story with one teller",
        "As a frame: an outer story about the ten young people, inside which we are told the many tales they tell each other",
        "As a list of facts with no teller",
        "As a letter to a king"
      ],
      correctAnswer: 1,
      explanation: "Notice the layer of telling. There is the outer story of the ten in the hills, and inside it the tales they speak. The book reports their telling, so every inner story reaches us wrapped in the frame of who told it, and to whom."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "passive_voice",
      gates: true,
      question: "When the book says a tale was told by one of the company on the third day, what are you really being asked to hold?",
      options: [
        "Only the events of the inner tale, and nothing else",
        "Two things at once: the inner tale itself, and the outer fact that one of the ten told it on that day to the others",
        "Just the names of the ten",
        "The weather in the hills"
      ],
      correctAnswer: 1,
      explanation: "Track both layers together. The inner tale matters, but so does the frame around it: who is speaking, on which day, to which listeners. The phrasing keeps the teller present, so you hold the story and its telling at the same time."
    },
    {
      type: "question",
      domain: "cause",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Why did the ten young people gather in the countryside in the first place?",
      options: [
        "To escape the plague in the city and wait in safety",
        "To hunt for treasure",
        "To attend a royal wedding",
        "To fight a war"
      ],
      correctAnswer: 0,
      explanation: "Track the reason for the frame itself. The plague drove them out of the city, and the storytelling is how they keep their spirits up while they wait. The danger they fled is what gathers the tellers in one place."
    },
    {
      type: "question",
      domain: "report",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "How did the ten young people pass the days at the country house?",
      options: [
        "Each told a story in turn while the others listened",
        "They slept the whole time",
        "They wrote letters to the city",
        "They built a new house"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the setup: they took turns telling stories. Here it frames the structure rather than testing the layers of telling."
    },
    { type: "story", moral: "The book is a story about people telling stories, and to read it well you hold both the tale and the teller at once. A frame lets one story carry many inside it." }
  ]
};
export default story;
