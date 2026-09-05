// akbar-birbal.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
const story = {
  id: "akbar-birbal",
  title: "Birbal and the Smell of Food",
  icon: "🍲",
  difficulty: "Medium",
  theme: "Owing only what was truly taken",
  estimatedTime: "5-10 min",
  description: "A cook demands payment from a beggar who only smelled his food. The wise Birbal must judge what is truly owed, and what is not.",
  meta: {
    level: 4,
    track: "gated",
    tier: "R",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "India",
    region: "South Asia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A poor beggar sat outside a cook-shop and ate his dry bread while breathing in the rich smell of curries cooking inside. The cook rushed out and seized him. \"You have been enjoying the smell of my food! You must pay me for it!\" The beggar had no coins, and the quarrel was brought before Birbal, the emperor's wisest minister." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The cook insists the beggar must pay real coins for the smell of the food. Is the beggar truly bound to pay?",
      options: [
        "Yes, he must pay in full, since he enjoyed the cooking",
        "No, he took nothing solid; a smell that drifts out freely is something he may enjoy without owing for it",
        "Yes, but only half, since he only smelled it",
        "No, because the cook should have closed his door"
      ],
      correctAnswer: 1,
      explanation: "Weigh what binds against what is free. The beggar ate his own bread and took no food; the smell drifted out on its own. There is no real debt here, so he is not bound to pay for what he was free to breathe."
    },
    { type: "story", text: "Birbal listened, then took a few coins from his own purse. He held them above a metal bowl and shook them, so the coins rang and jingled, and then he put them back in his pocket. \"There,\" he said to the cook. \"You have been paid.\"" },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "By paying the cook with only the sound of the coins, what is Birbal saying the cook is owed?",
      options: [
        "Nothing less than the full price of a meal",
        "Exactly as much as he gave: a smell answered by a sound, and no more",
        "All the coins in Birbal's purse",
        "A free meal in return"
      ],
      correctAnswer: 1,
      explanation: "Birbal matches the debt to what was actually given. The cook handed over no food, only a smell, so what he may rightly claim is its equal: the sound of money, not the money itself."
    },
    { type: "story", text: "The crowd laughed, and the cook went red, for he saw that he had tried to charge for something he had never really given away. He let the beggar go." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did Birbal jingle the coins instead of handing them to the cook?",
      options: [
        "Because the cook had given only a smell, so a sound was its fair match",
        "Because Birbal did not have enough coins to pay",
        "Because the beggar asked him to keep the money",
        "Because the emperor had forbidden paying for food"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the sound repays the smell. Here it shows the justice of the ruling rather than testing the weighing of must against may."
    },
    { type: "story", moral: "You are bound to pay for what you truly take, and free of what merely drifts your way. The smell of a thing is not the thing itself." }
  ]
};
export default story;
