// el-dorado.js  L5, B5 infer the hidden state. Target: epistemic_modal.
const story = {
  id: "el-dorado",
  title: "El Dorado: The Gilded Man",
  icon: "🏞️",
  difficulty: "Medium",
  theme: "What the rumor really pointed to",
  estimatedTime: "5-10 min",
  description: "Outsiders heard of a man covered in gold and a lake of treasure, and reasoned their way to a city that never was. Read the clue as it should have been read.",
  meta: {
    level: 5,
    track: "gated",
    tier: "R",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "Muisca",
    region: "South America",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Long ago, the Muisca people of the high Andes had a sacred rite. When a new chief was raised up, his people coated him head to foot in gold dust, and he was rowed on a raft to the middle of a still lake. There he washed the gold from his body into the water and cast in offerings of gold and emeralds, gifts to the spirit of the lake." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "European explorers heard of a man covered in gold and a lake full of golden offerings. From this they concluded a whole city of solid gold must lie hidden nearby. What should they have inferred instead?",
      options: [
        "That an even greater golden city must be hidden deeper in the jungle",
        "That the gold pointed to a sacred ceremony at a lake, not to a city built of gold",
        "That the story must be entirely made up",
        "That the gold must have come from the sky"
      ],
      correctAnswer: 1,
      explanation: "The clues all point to a rite: a gilded man, a lake, offerings cast into water. Nothing in them points to a city. Reading the evidence for what it actually shows gives a ceremony, not the gleaming city the explorers wished into being."
    },
    { type: "story", text: "The name El Dorado, the gilded one, first meant that golden man on his raft. But as the story passed from mouth to mouth, El Dorado became the name of an imagined kingdom, then a lost city, then a land paved in gold, each teller adding more." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Expedition after expedition searched the jungles for the golden city and found nothing but hardship. From all those empty searches, what can we reason about the city?",
      options: [
        "It must be hidden so well that no one could ever find it",
        "It most likely never existed, and the searchers were chasing a tale grown far beyond the true rite",
        "It must have sunk beneath the ground before they arrived",
        "It must move from place to place to avoid being found"
      ],
      correctAnswer: 1,
      explanation: "Many careful searches turning up nothing is strong evidence that there was nothing to find. The reasonable inference is not an ever-better hiding place, but that the city was a story, swollen from a real ceremony into a golden dream."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did the Muisca cover their new chief in gold dust?",
      options: [
        "As part of a sacred ceremony to raise up a new chief at the lake",
        "To hide him from his enemies",
        "To make him too heavy to run away",
        "To sell him to the explorers"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the gilding was a rite of leadership. Here it grounds the true story rather than testing the inference."
    },
    { type: "story", text: "The real treasure, it turned out, was not a city at all, but a small lake holding the quiet offerings of generations, and a story that the world had stretched into gold." },
    { type: "story", moral: "From a true clue, the searchers reasoned to a false city. Read the evidence for what it shows, not for the riches you hope it hides." }
  ]
};
export default story;
