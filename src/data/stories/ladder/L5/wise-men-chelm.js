// wise-men-chelm.js  L5, B5 infer the hidden state. Target: epistemic_modal.
const story = {
  id: "wise-men-chelm",
  title: "The Wise Men of Chelm and the Moon",
  icon: "🌝",
  difficulty: "Medium",
  theme: "Reasoning rightly where the wise reason wrong",
  estimatedTime: "5-10 min",
  description: "The famous wise men of Chelm try to catch the moon in a barrel. Their reasoning goes wrong at every step. Yours should not.",
  meta: {
    level: 5,
    track: "gated",
    tier: "R",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "Jewish",
    region: "Central Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The town of Chelm was famous for its wise men, who were wise in the way that made everyone else laugh. One bright night they decided the town needed its own moon, so it would never be dark again. And there, shining up at them from a barrel of water in the yard, was the moon itself." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The wise men see the moon shining in the water barrel and declare they have caught it. What must actually be true?",
      options: [
        "They really have caught the moon and trapped it in the barrel",
        "It can only be a reflection; the moon itself is still up in the sky where it always was",
        "There must be two moons now, one in the barrel and one above",
        "The moon must have fallen into the water by accident"
      ],
      correctAnswer: 1,
      explanation: "A moon in a barrel can only be a reflection of the one overhead. Reasoning past what the wise men want to believe, the true moon is exactly where it has always been, far out of any barrel's reach."
    },
    { type: "story", text: "Delighted, the wise men clapped a lid on the barrel at once, to keep the moon from escaping back into the sky. They set a guard on it and went to bed proud of their catch." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The next night clouds cover the sky, and when the wise men open the barrel the water is dark and empty of any moon. They cry that it has been stolen. What must really have happened?",
      options: [
        "A thief must have crept in and taken their moon",
        "With clouds hiding the moon above, there is nothing left to reflect, so the reflection is simply gone, no theft at all",
        "The moon must have dissolved in the water",
        "The guard must have let the moon out"
      ],
      correctAnswer: 1,
      explanation: "No reflection can exist without the real moon shining down to cast it. The clouds hide the moon, the reflection vanishes, and nothing was ever caught or stolen. The right reading sees through the wise men's panic."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did the wise men put a lid on the barrel?",
      options: [
        "To stop the moon they thought they had caught from escaping",
        "To keep the water clean for drinking",
        "To hide the barrel from thieves in the town",
        "To stop the rain from getting in"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: they sealed it to trap their catch. Here it shows their mistaken belief rather than testing the inference."
    },
    { type: "story", text: "And so the wise men of Chelm mourned their stolen moon, never once guessing that it had been hanging quietly in the sky the whole time, having never been theirs to catch at all." },
    { type: "story", moral: "The wise men reasoned from what they wished were so. To read a thing rightly, follow what must be true, not what you hope you have caught." }
  ]
};
export default story;
