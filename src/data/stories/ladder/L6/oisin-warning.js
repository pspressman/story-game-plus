// oisin-warning.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
const story = {
  id: "oisin-warning",
  title: "Oisin and the Warning",
  icon: "🐎",
  difficulty: "Hard",
  theme: "The branch you must not step onto",
  estimatedTime: "5-10 min",
  description: "Oisin may visit Ireland from the Land of Youth, but only if he never touches the soil. Hold in your mind the branch that waits if he does.",
  meta: {
    level: 6,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional"],
    grammar_target: "conditional",
    culture: "Ireland",
    region: "British Isles",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Oisin had lived happily in Tir na nOg, the Land of Youth, with Niamh, where no one grew old. But he longed to see Ireland again. Niamh lent him her white horse and gave one warning, again and again: he might ride through Ireland as he pleased, but he must never let his feet touch its soil." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Hold Niamh's warning clearly in mind. If Oisin's foot were to touch the soil of Ireland, what would happen to him?",
      options: [
        "He would simply feel a little tired",
        "All his true years would come upon him at once, and he could never return to the Land of Youth",
        "He would be welcomed home as a young hero",
        "He would turn into one of the white horses"
      ],
      correctAnswer: 1,
      explanation: "The whole tale hangs on a branch that has not happened yet. The warning lays it out: were he to touch the ground, his real age would fall on him and the door to the Land of Youth would shut. Holding that unsprung possibility is the point."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "As long as Oisin stays high on the horse and never dismounts, which branch is he keeping open?",
      options: [
        "The branch where he ages and dies in Ireland",
        "The branch where he stays young and could still return to Niamh and the Land of Youth",
        "The branch where he becomes king of Ireland",
        "The branch where the horse turns against him"
      ],
      correctAnswer: 1,
      explanation: "Staying mounted keeps the safe branch alive: untouched by the soil, he remains young and able to go back. To follow the story you must hold both branches at once, the one he is in and the one a single step would open."
    },
    { type: "story", text: "Ireland looked strange and old to him, for though it had felt like three years in the Land of Youth, three hundred had passed below. He came upon some men struggling to move a great stone, and leaned from his saddle to help them, the girth of the horse straining as he reached." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "Oisin leans far from the saddle, and the girth begins to slip. If the strap breaks and he falls, what will happen the instant he meets the ground?",
      options: [
        "He will leap back onto the horse unharmed",
        "His three hundred years will seize him at once, and he will become a withered old man",
        "Nothing, since the warning was only a story",
        "The men will lift him back into the saddle in time"
      ],
      correctAnswer: 1,
      explanation: "Now the dreaded branch stands one slipped strap away. The reader who has held the warning sees the danger the moment the girth strains: a fall means the soil, and the soil means all his years at once."
    },
    { type: "story", text: "The girth broke. Oisin fell, and his foot touched the earth of Ireland, and in a breath the young rider became an ancient, white-haired man, his years all come home at last. The branch he had held off so long had finally closed around him." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did Ireland look so changed and aged to Oisin when he returned?",
      options: [
        "Because three hundred years had passed below while it felt like only three above",
        "Because he was looking at a different country",
        "Because the Land of Youth had ruined his eyes",
        "Because the men had rebuilt everything overnight"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause across time: centuries had passed in Ireland though little had passed for him. Here it explains the strangeness rather than testing the branch."
    },
    { type: "story", moral: "All through his ride, one step would have undone everything. To follow him is to hold the branch he must not take, right up to the moment it takes him." }
  ]
};
export default story;
