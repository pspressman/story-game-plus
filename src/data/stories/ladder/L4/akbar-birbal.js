// akbar-birbal.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: description no longer states the question. All four options carry B4-level
// subordination, so the answer is not marked out by being the only complex one.
const story = {
  id: "akbar-birbal",
  title: "Birbal and the Smell of Food",
  icon: "🍲",
  difficulty: "Medium",
  theme: "Owing only what was truly taken",
  estimatedTime: "5-10 min",
  description: "A cook drags a beggar in front of the emperor's minister, demanding to be paid.",
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
    {
      type: "story",
      text: "A beggar sat down in the shade outside a cook-shop and ate the dry bread he had, and while he ate he breathed in the smell of the curries cooking inside. The cook came out and took hold of him. \"You have been sitting there enjoying my food. You will pay me for it.\" The beggar had nothing. A crowd gathered, and the quarrel went before Birbal, the emperor's minister."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Picture the cook's shop at the end of that day, and picture it as it would have been if the beggar had never sat down. What is different?",
      options: [
        "There is less food in the pots, because some of what was cooked has gone to the beggar",
        "Nothing is different at all, because nothing that was in the shop has left it",
        "There are fewer customers inside, because those passing were put off by a beggar at the door",
        "The cook has had to work later than usual, since he must make up for what he lost"
      ],
      correctAnswer: 1,
      explanation: "Every pot is as full as it would have been. Nothing left the shop. Set the two evenings beside each other and you cannot find the thing the cook says was taken from him."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The cook could have shut his door, or cooked at the back. Picture him choosing to cook where the smell goes out into the street. Why does he do that?",
      options: [
        "He has not noticed that it escapes, since a man stops smelling his own kitchen after a while",
        "He is sending it out on purpose, because the smell in the street is what brings people in",
        "He is obliged to cook at the front, since the law will not let a shop bar its door by day",
        "He has no choice about it, because the room at the back is too small to cook a meal in"
      ],
      correctAnswer: 1,
      explanation: "The smell going into the street is not a leak, it is the sign over the door. He puts it there to catch people, and then charges the beggar for the one part of his business he gives away deliberately."
    },
    {
      type: "story",
      text: "Birbal heard them both out. Then he took a few coins from his own purse, and held them over a metal bowl, and shook his hand so that they rang and rattled against each other. Then he put them back in his pocket. \"There,\" he said to the cook. \"You have been paid.\""
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The cook wants coins in his hand, not a noise. Picture him objecting to that. What would he have to argue?",
      options: [
        "That a sound, however loud it rings, is worth less than the coins which happened to make it",
        "That the sound of the coins is not the coins, which is what the beggar has been saying all along",
        "That Birbal, whatever his rank at court, may not settle a quarrel in which he is himself paying",
        "That the debt is the beggar's to answer, so it is the beggar who should be made to hand it over"
      ],
      correctAnswer: 1,
      explanation: "The moment he says the noise is not payment, he has said the beggar's case for him. He cannot complain about the ruling without giving up the claim that brought him there."
    },
    {
      type: "story",
      text: "The crowd laughed, and the cook went red, and let the beggar go."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Birbal never says the cook is a bad man or that the claim was wicked. Picture what his ruling actually settles. What is it?",
      options: [
        "That a man who owns nothing should not be charged, however much he may have enjoyed",
        "Where the line falls between what you must pay for and what you may have for nothing",
        "That a cook who wants paying is bound to keep his door shut, so that nothing gets out",
        "That the emperor's ministers reason better than shopkeepers, which the crowd knew already"
      ],
      correctAnswer: 1,
      explanation: "It is not about the beggar being poor; a rich man breathing the same air would owe the same nothing. What is settled is the line: you are bound to pay for what leaves the shop, and free of what only drifts."
    },
    { type: "story", moral: "You are bound to pay for what you truly take, and free of what merely drifts your way. The smell of a thing is not the thing itself." }
  ]
};
export default story;
