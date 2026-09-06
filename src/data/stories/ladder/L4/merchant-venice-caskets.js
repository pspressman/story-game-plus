// merchant-venice-caskets.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: description stated the binding, Q1 and Q4 both asked why Portia cannot choose,
// and Q4 was a lookup. All options now carry B4 subordination.
const story = {
  id: "merchant-venice-caskets",
  title: "The Merchant of Venice: The Casket Choice",
  icon: "📦",
  difficulty: "Medium",
  theme: "Bound by a promise you did not make",
  estimatedTime: "5-10 min",
  description: "A rich woman's father dies and leaves instructions about how she is to be married.",
  meta: {
    level: 4,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "England",
    region: "British Isles",
    saga: "shakespeare",
    source_epic: false,
    threads: ["shakespeare"],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "Portia had money, and wit, and a great house, and no say in who she married. Her father had died leaving a will: three caskets, one gold, one silver, one lead, and whichever suitor chose the right one would have her. She could not refuse the man who chose correctly, and she could not accept any man who did not."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Portia is bound by a promise she was never asked to give. Picture what her father thought he was arranging. What was the will for?",
      options: [
        "To keep her fortune together, by making sure no fortune-hunter could talk his way into it",
        "To pick her husband for her after his death, because he did not trust her to do it herself",
        "To give her a way of refusing suitors politely, without having to insult powerful families",
        "To honour an old custom of Belmont, which every family of that standing was expected to follow"
      ],
      correctAnswer: 1,
      explanation: "He could have left her the choice and did not. Whatever else the caskets do, they are a machine for deciding a thing he was not going to be alive for, and it runs whether she likes its answer or not."
    },
    {
      type: "story",
      text: "And the suitors were bound too. Before a man could open a casket he swore an oath: if he chose wrong, he would leave at once, never say which casket he had picked, and never marry any woman as long as he lived."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture the second condition of the oath: never say which casket you chose. Portia gains nothing by that silence. Who does?",
      options: [
        "The suitor himself, whose defeat will not be talked about in the courts of Europe",
        "Every suitor still to come, who is prevented from learning anything from the failures",
        "Portia's household, who would be embarrassed by gossip about the men who came and lost",
        "The dead father, whose strange arrangement is not held up to ridicule by those who fail"
      ],
      correctAnswer: 1,
      explanation: "If the losers could talk, the fourth man would arrive knowing two wrong answers and the test would collapse. The silence clause is not modesty; it is what keeps every suitor guessing from nothing, exactly as the first one did."
    },
    {
      type: "story",
      text: "The proud ones came and reached for the gold and the silver, and each chose wrong and went away bound by his oath. Then Bassanio came, whom Portia wanted, and he passed the two bright caskets and picked up the lead one, which said that the man who chose it must give and risk everything he had."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture the three caskets in front of a suitor. Two promise him something and one demands something. What is the test actually sorting for?",
      options: [
        "Cleverness, since a sharp man will see through the shine to the trick underneath it",
        "What the man came for, because only somebody who came to give will reach for the one that asks",
        "Courage, since it takes nerve to pass over gold and stake everything on a piece of lead",
        "Good fortune, because with three caskets and no clue any man has the same chance as another"
      ],
      correctAnswer: 1,
      explanation: "The gold and silver are addressed to a man who has come to acquire something. The lead is addressed to one who has come to hand something over. It does not measure how sharp he is, only which of those two he is."
    },
    {
      type: "story",
      text: "Bassanio had chosen right, and they could marry. The father's odd machine had done what it was built to do, and sorted the men who came to take from the one who came to give."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The test worked and Portia got the man she wanted. Picture how near it came to going otherwise. What was she never protected from?",
      options: [
        "A suitor who guessed the lead casket by luck, without any of the qualities it was testing for",
        "Being married to a man she disliked, since the caskets were never going to consult her",
        "A suitor who bribed a servant to tell him which casket the earlier men had opened",
        "The possibility that no man at all would choose correctly, leaving her unmarried for life"
      ],
      correctAnswer: 1,
      explanation: "It came out well and it was not built to come out well for her. Any of the proud ones could have reached for the lead by accident, and the will would have handed her over just as readily. The happy ending is luck sitting on top of a machine that did not care."
    },
    { type: "story", text: "(This is the plot of Shakespeare's play, told in plain words.)" },
    { type: "story", moral: "She could not choose, and they could not guess lightly. A promise made by another can bind you as tightly as one you swear yourself." }
  ]
};
export default story;
