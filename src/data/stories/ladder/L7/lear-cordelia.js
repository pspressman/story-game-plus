// lear-cordelia.js  L7, B4 the unreal past. Target: conditional. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "lear-cordelia",
  title: "King Lear and Cordelia",
  icon: "👑",
  difficulty: "Hard",
  theme: "The true love mistaken for too little",
  estimatedTime: "5-10 min",
  description: "A king asks his daughters to prove their love in words, and casts off the one who loves him truly. Rebuild the branch where he hears her rightly.",
  meta: {
    level: 7,
    track: "gated",
    tier: "O",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
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
    { type: "story", text: "Old King Lear decided to divide his kingdom among his three daughters, and asked each to say how much she loved him. The two elder daughters poured out grand flattery and were rewarded. But Cordelia, the youngest, who truly loved him most, would not flatter; she said only that she loved him as a daughter should, no more and no less." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Lear, enraged that Cordelia would not flatter him like her sisters, disowned her on the spot. If he had recognized her plain honesty as the truest love of the three, what would have followed?",
      options: [
        "Nothing; his daughters would have betrayed him anyway",
        "He would have kept his one faithful daughter close, and would not have handed himself over to the two who only flattered",
        "Cordelia would have refused him in turn",
        "The kingdom would have fallen apart at once"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch his anger closed: had Lear read honest love rightly, he would have kept Cordelia and not given his power and trust to the daughters who lied. The whole ruin grows from one misreading at the start."
    },
    { type: "story", text: "Having cast off Cordelia, Lear gave everything to the two flatterers. They quickly turned on him, stripped away his dignity, and shut him out into a storm. Old and broken, his mind began to fail, and only then did he see which daughter had truly loved him." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Lear now wanders mad in the storm, betrayed by the daughters he chose. Holding the lost branch, if he had not driven Cordelia away at the start, where would he be now?",
      options: [
        "Exactly where he is, mad in the storm",
        "Safe and honored with the daughter who loved him, rather than cast out by the two who only flattered",
        "Ruling the kingdom alone with no daughters",
        "Already dead of old age"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch reaches from the opening choice to the present storm: a Lear who had kept Cordelia would not be wandering betrayed now. Pricing it means feeling how one misjudgment carried him all the way to this night."
    },
    { type: "story", text: "At the very end, Lear and Cordelia were brought together again, and for a moment he knew her and her love. But it was too late: she was killed before they could be saved, and Lear died with her in his arms, undone by the grief of it." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Father and daughter are reunited only at the end, and then she is killed. Price the whole chain: because Lear could not tell true love from flattery at the start, what is lost forever by the time he finally sees it?",
      options: [
        "Only a little time; all ends well",
        "Cordelia herself, and any chance of the life they might have had, for he understands her love only when it can no longer be saved",
        "Merely his crown and lands",
        "Nothing of any real weight"
      ],
      correctAnswer: 1,
      explanation: "The recognition comes, but too late to undo anything. Pricing the branch means seeing that the love he finally reads rightly is the very thing his early blindness has already destroyed."
    },
    { type: "story", text: "So the king who asked to be told how much he was loved lost the one who loved him most, and learned the truth only when it could save no one. (This is the plot of Shakespeare's play, told plainly, not his own lines.)" },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Lear disowned Cordelia at the start?",
      options: [
        "Because she refused to flatter him as her sisters had",
        "Because she had stolen part of the kingdom",
        "Because she had married against his wishes",
        "Because she had never loved him"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: her refusal to flatter is what set off his anger. Here it names the misjudgment the grief turns on rather than testing the branch."
    },
    { type: "story", moral: "He asked for love in words and threw away the love that would not perform. To read it is to hold the daughter he should have kept, and to count what the keeping would have spared." }
  ]
};
export default story;
