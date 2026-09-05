// hero-twins-ballgame.js  L2, B2. Maya, Popol Vuh. cultural_care note for HARPER awareness.
const story = {
  id: "hero-twins-ballgame",
  title: "The Hero Twins and the Lords Below",
  icon: "🏐",
  difficulty: "Easy",
  theme: "An invitation that hides an intent",
  estimatedTime: "4-7 min",
  description: "Two brothers love their ballgame so much that their noise reaches the lords of the underworld, who send a summons that is friendlier on the outside than the inside.",
  meta: {
    level: 2,
    track: "gated",
    tier: "A",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "past_perfect",
    culture: "Maya",
    region: "Mesoamerica",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "K'iche' Maya (Popol Vuh) - credit specifically, not 'Mayan'. Openly shared; written down to be preserved and read. Care = accuracy and specific crediting. This is the gentle, kid-facing telling.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The two Hero Twins loved nothing better than playing their ballgame, and they played it loudly, day after day, on the court above. Far below, in the gloomy halls of the underworld, the lords were trying to rest. The twins' fathers had played the same game before them and had been called down long ago. Now the bouncing and shouting overhead disturbed the lords once again, and they decided to act." },
    {
      type: "question",
      domain: "cause",
      band: "B2",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Why did the lords of the underworld take notice of the twins?",
      options: [
        "Because the twins had sent them a gift",
        "Because the twins were playing their ballgame so loudly that the noise disturbed the lords below",
        "Because the twins had stolen something",
        "Because the twins had asked to visit"
      ],
      correctAnswer: 1,
      explanation: "Track the cause. It was not a quarrel or a theft; it was simply the constant, noisy game overhead. The disturbance rises from the court above down into the halls below, and the lords stir because of it."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "The lords sent up a polite summons inviting the twins to come down and play. But the twins' fathers had been defeated when they answered such a call before. What do the lords most likely really want?",
      options: [
        "To make friends and play a fair, friendly game",
        "To get the twins down where they can be challenged and beaten, as their fathers were",
        "To give the twins a prize",
        "To teach the twins a new game"
      ],
      correctAnswer: 1,
      explanation: "Look past the polite words to the aim beneath. A friendly invitation, sent by lords the twins' own fathers never came back from, is not really friendly. The summons is a trap dressed as a welcome."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "What had already happened to the twins' fathers before this summons came?",
      options: [
        "They had won great riches in the underworld",
        "They had been called down by the lords and defeated long ago",
        "They had refused every summons",
        "They had never played the ballgame at all"
      ],
      correctAnswer: 1,
      explanation: "Reach back to what came before. The fathers had answered a like summons and lost. Knowing that earlier defeat is what reveals the danger hidden inside the lords' polite new invitation."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "What did the Hero Twins love to do?",
      options: [
        "Play their ballgame, loudly and often",
        "Sleep all day",
        "Sail the sea",
        "Build great towers"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the setup: the twins loved their ballgame. Here it frames the noise that drew the lords rather than testing the hidden intent."
    },
    { type: "story", moral: "The lords' invitation was polite on the outside and dangerous on the inside, and the fate of the twins' fathers showed which to trust. A friendly face is not always a friendly heart." }
  ]
};
export default story;
