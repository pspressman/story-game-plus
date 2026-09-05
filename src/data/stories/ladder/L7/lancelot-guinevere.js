// lancelot-guinevere.js  L7, B4 unreal past + B7 divided bond. ADDED Arthurian, pending HARPER. Love handled with restraint.
const story = {
  id: "lancelot-guinevere",
  title: "Lancelot's Divided Heart",
  icon: "💔",
  difficulty: "Hard",
  theme: "Two loyalties that cannot both be kept",
  estimatedTime: "5-10 min",
  description: "The greatest knight loves his king and also loves his king's wife, and the two loyalties cannot both be honored. Rebuild the fellowship that might have held, and weigh the bond a divided heart broke.",
  meta: {
    level: 7,
    track: "gated",
    tier: "O",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Britain",
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
    { type: "story", text: "Lancelot was the bravest and most trusted of all King Arthur's knights, and Arthur loved him as a brother. Yet Lancelot also came to love Queen Guinevere, Arthur's wife, and she him. They kept the love hidden, but it pulled Lancelot two ways at once, between the king he served and the queen he loved, two loyalties that could not both be kept whole." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Lancelot was Arthur's most loyal knight and also loved the queen. If that love had never grown between them, what would the fellowship of the Round Table have been spared?",
      options: [
        "Nothing; it would have fallen anyway",
        "The division and ruin the love brought when it came to light, and the fellowship might have held together",
        "Only a brief quarrel",
        "A single tournament"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch without the hidden love. The Round Table's deepest crack runs through Lancelot's divided heart, so closing that wound lets the fellowship stand. The grief is that so much was lost to a love that need not have been."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Lancelot's heart pulls him toward Guinevere, his sworn oath toward Arthur. What makes his place so painful, beyond ordinary love?",
      options: [
        "He simply cannot decide what he wants",
        "His two deepest loyalties cannot both be kept, so to honor one is to betray the other, and the bond of the whole fellowship hangs on which way he turns",
        "He does not really care for either",
        "He is afraid of the queen"
      ],
      correctAnswer: 1,
      explanation: "Read the bond under the love. This is not mere wanting; it is two true loyalties set against each other, where any faithful choice is also a betrayal. And because Lancelot is the keystone knight, his private division becomes the whole fellowship's fault line."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "When the love is at last exposed, knights take sides and the Round Table breaks apart. Price it: because the two could not master that love, what is lost that no one wished to lose?",
      options: [
        "A little gold",
        "The fellowship itself, friends turned into enemies and Arthur's whole order undone",
        "A single friendship",
        "Nothing that mattered"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from the hidden love to the open ruin: because it could not be set aside, its exposure splits the brotherhood into warring sides. What falls is far larger than the lovers, the fellowship of equals that the whole age was built upon."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Whose love divided the Round Table?",
      options: [
        "Lancelot, Arthur's greatest knight, and Queen Guinevere",
        "Arthur and a rival king",
        "Two squires of the court",
        "Merlin and a sorceress"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the love of Lancelot and Guinevere is the fault line. Here it names the pair rather than testing the divided bond."
    },
    { type: "story", moral: "The greatest knight could not keep faith with both his king and his heart, and a fellowship paid for the division. To read it is to hold the brotherhood that might have stood, and to weigh two loyalties that could not both be kept." }
  ]
};
export default story;
