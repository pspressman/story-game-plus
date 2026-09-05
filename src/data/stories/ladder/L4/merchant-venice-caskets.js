// merchant-venice-caskets.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
const story = {
  id: "merchant-venice-caskets",
  title: "The Merchant of Venice: The Casket Choice",
  icon: "📦",
  difficulty: "Medium",
  theme: "Bound by a promise you did not make",
  estimatedTime: "5-10 min",
  description: "A woman may not choose her own husband; a dead father's will decides it by a riddle of three caskets. Each suitor must swear a heavy oath before he chooses.",
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
    { type: "story", text: "Portia was rich, clever, and longed to choose her own husband. But her father, before he died, had left a will that bound her: she could not marry whom she pleased. Instead, each suitor must choose among three caskets, one of gold, one of silver, one of lead, and only the man who chose the right one could marry her." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Portia loves none of her early suitors and longs to choose for herself. Why can she not simply pick the husband she wants?",
      options: [
        "She may choose freely; she is only being shy",
        "Her father's will binds her: she must marry whoever solves the casket riddle, and may not choose for herself",
        "She must marry the richest suitor who comes",
        "She is forbidden to marry at all"
      ],
      correctAnswer: 1,
      explanation: "Weigh what she wishes against what binds her. Her own heart is free, but the will of her dead father holds her: the caskets decide, not she. What she may want and what she must accept are not the same."
    },
    { type: "story", text: "And the suitors were bound too. Before any man could choose a casket, he had to swear a solemn oath: if he chose wrongly, he must leave at once, never tell which casket he picked, and never marry any woman for the rest of his life." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Each suitor must swear the oath before he may choose. If he chooses the wrong casket, what is he then bound to?",
      options: [
        "He may simply try again with a different casket",
        "He must leave forever and never marry any woman at all, a heavy price for guessing wrong",
        "He must pay a fine and go home",
        "He may marry a different lady instead"
      ],
      correctAnswer: 1,
      explanation: "The oath turns a guess into a binding. A wrong choice does not just lose Portia; it binds the man to lifelong solitude. What he is free to attempt, he is not free to attempt lightly."
    },
    { type: "story", text: "The proud suitors reached for the gold and the silver, drawn by their shine, and each chose wrong and went away bound by his oath. Then came Bassanio, whom Portia loved. He passed over the glittering caskets and chose the plain lead one, whose message warned that the one who chose it must give and risk everything." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The lead casket says that whoever chooses it must give and hazard all he has. What does choosing rightly truly ask of a suitor?",
      options: [
        "Only to be lucky enough to guess",
        "To be willing to give everything and risk all, rather than reach for easy show",
        "To be the wealthiest man in the room",
        "To choose whichever casket looks most valuable"
      ],
      correctAnswer: 1,
      explanation: "The riddle rewards the one bound to give rather than to grab. The gold and silver promise gain; the lead demands sacrifice. Choosing well means accepting what one must give, not seizing what one may get."
    },
    { type: "story", text: "Bassanio's choice was right, and he and Portia could marry at last. The father's strange test had done its work, sorting the suitors who came to take from the one willing to give." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why could Portia not just marry Bassanio when he arrived, without the caskets?",
      options: [
        "Because her father's will had bound the choice to the casket test",
        "Because Bassanio was too poor for her",
        "Because she had already promised another man",
        "Because the law forbade marriage in Venice"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the father's will set the rule that bound them. Here it frames the whole test rather than testing the weighing of must against may. (This is the plot of Shakespeare's play, in plain words.)"
    },
    { type: "story", moral: "She could not choose, and they could not guess lightly. A promise made by another can bind you as tightly as one you swear yourself." }
  ]
};
export default story;
