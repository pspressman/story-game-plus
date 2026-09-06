// princess-kaguya.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior description named both vantages the questions asked for, Q1 was a
// lookup, and every correct option was the only passive one on its list.
const story = {
  id: "princess-kaguya",
  title: "Princess Kaguya",
  icon: "🌕",
  difficulty: "Easy",
  theme: "Given for a time, and taken back",
  estimatedTime: "5-10 min",
  description: "An old bamboo cutter finds something shining inside a stalk in the grove.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Japan",
    region: "East Asia",
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
      text: "An old bamboo cutter was working in the grove when he saw one stalk shining. He cut it open and there was a child inside, no bigger than his hand. He carried her home to his wife and they raised her as their own. She grew quickly, and she grew beautiful, and word of her went out until suitors were coming from every province, and at last from the Emperor himself."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Picture the old couple through those years, raising her. What do they believe about how she came to them?",
      options: [
        "That she was left in the grove for them to find and keep",
        "That she was lent to them and will be collected one day",
        "That she is a spirit who will bring them wealth",
        "That she was stolen from another family"
      ],
      correctAnswer: 0,
      explanation: "Nobody told them anything. A child appeared and they took her in and she called them mother and father, and there is nothing in that to suggest an ending. They are raising a daughter."
    },
    {
      type: "story",
      text: "But as the years went on Kaguya grew quiet and sad, and would not say why. At last she told them. She was not from this world. She was of the Moon, and her own people were coming for her, and on the night of the full moon they would take her back."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Stand inside the old couple in the hour after she tells them. Something has changed about all the years behind them. What?",
      options: [
        "They realise she never really loved them",
        "The whole time they thought they were raising a daughter, she was on loan and the day was already set",
        "They understand she has been lying to them",
        "They see that they should have found her family sooner"
      ],
      correctAnswer: 1,
      explanation: "Nothing about the past has altered and all of it now reads differently. Every ordinary evening was inside a borrowed time that somebody else had measured out, and they are only learning it near the end."
    },
    {
      type: "story",
      text: "The Emperor sent guards, and they stood around the house on the night of the full moon with their bows ready. Then the light came down out of the sky, and the shining company came with it, and the guards could not lift their arms, and no arrow went anywhere."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand among the guards as the light comes down. They are armed, trained, and standing exactly where they were told to stand. What is happening to them?",
      options: [
        "They are being defeated in a fight they might have won",
        "They are finding out that they were never going to be part of this at all",
        "They are being frightened into running away",
        "They are being asked to step aside politely"
      ],
      correctAnswer: 1,
      explanation: "It is not a battle they lose. Nobody fights them. The arms simply do not lift, and the thing goes past them, and the whole apparatus of guarding turns out to have had no bearing on it."
    },
    {
      type: "story",
      text: "They put a feathered robe around Kaguya's shoulders. And as it touched her, her sorrows about this world began to go out of her, the way heat goes out of a room."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand inside Kaguya as the robe settles on her. She is not being hurt, and she is not being forced. What is being taken from her?",
      options: [
        "Her memory of the grove where she was found",
        "The grief itself, so that she loses even the part of her that would have minded going",
        "Her beauty, which belonged to this world",
        "Her voice, so she cannot say goodbye"
      ],
      correctAnswer: 1,
      explanation: "The robe is a kindness on its face. But her sorrow was the shape her love for them had, and taking it away means she goes up untroubled, and the two people on the ground watch someone leave who no longer entirely minds leaving them."
    },
    {
      type: "story",
      text: "Then she rose into the sky with the shining company and was gone, and the old man and his wife stood in the doorway looking up at the light that had taken their daughter home."
    },
    { type: "story", moral: "She was found, and raised, and loved, and taken back. Some gifts are given only for a while, and the keeping of them was never in our hands." }
  ]
};
export default story;
