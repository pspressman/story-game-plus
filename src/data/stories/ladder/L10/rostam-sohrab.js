// rostam-sohrab.js  L10 summit. Dramatic irony; the audience holds what the fighters do not.
const story = {
  id: "rostam-sohrab",
  title: "Rostam and Sohrab",
  icon: "🛡️",
  difficulty: "Master",
  theme: "The one truth the fighters cannot see",
  estimatedTime: "5-10 min",
  description: "A great champion and a young hero face each other in single combat, and only you, watching, know what neither of them does: that they are father and son.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B7",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "Persia",
    region: "Persia and Central Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Rostam, the greatest champion of Persia, had once, in a far country, left a token with the princess Tahmineh, and then ridden away, never knowing she bore him a son. That son, Sohrab, grew into a mighty young warrior, and he longed only to find his famous father. Seeking him, Sohrab rode to war, hoping that in the great armies he might at last meet Rostam." },
    { type: "story", text: "The two came face to face as champions of opposing armies, called out to single combat. Rostam did not give his name, as was his guarded habit. Sohrab, his heart leaping with a hope he could not prove, asked more than once if the great warrior before him might be Rostam, but he was turned aside and could not be sure." },
    {
      type: "question",
      domain: "irony",
      band: "B7",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "As the two warriors circle each other, you the reader know they are father and son, while they do not. What does this knowledge do to the way you watch the fight?",
      options: [
        "It makes the fight ordinary and dull",
        "It fills every blow with dread, because you can see the catastrophe rushing toward two people who cannot see it themselves",
        "It tells you nothing useful",
        "It means the fight will surely be stopped in time"
      ],
      correctAnswer: 1,
      explanation: "This is the summit of held knowledge: you carry the one truth the fighters lack. Watching, you hold their hidden bond against their blindness, and every stroke lands twice, once on the field and once in the gap between what you know and what they do not."
    },
    {
      type: "question",
      domain: "irony",
      band: "B7",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Sohrab asks more than once whether his opponent is Rostam, and is turned aside. If Rostam had simply spoken his name when the boy asked, what would have followed?",
      options: [
        "Nothing would have changed",
        "Father and son would have known each other, and the killing that is coming could have been turned aside entirely",
        "Sohrab would have attacked harder",
        "The armies would have fought instead"
      ],
      correctAnswer: 1,
      explanation: "Hold the branch a single name would have opened. The whole tragedy hangs on Rostam's guardedness; one honest answer to the boy's question would have undone the doom. You watch the saving word go unspoken, knowing what it would have spared."
    },
    {
      type: "question",
      domain: "irony",
      band: "B7",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Rostam strikes the fatal blow, and only then, finding his own token on the dying youth, learns the truth. Why does this discovery break him so utterly?",
      options: [
        "Because he lost the duel",
        "Because the truth you held all along crashes into him at the worst possible instant: he has killed the very son he never knew was seeking him",
        "Because the token was valuable",
        "Because the armies were watching"
      ],
      correctAnswer: 1,
      explanation: "The knowledge you carried the whole time finally reaches Rostam, too late to matter. The grief is built from the gap closing at the cruelest moment, the bond revealed only once it has been destroyed by the man it bound."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Sohrab gone to war in the first place?",
      options: [
        "Because he longed to find his famous father, Rostam",
        "Because he hated Persia",
        "Because he had been forced into the army",
        "Because he wanted Rostam's throne"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the search for his father drew him to war. Here it deepens the irony rather than testing the held knowledge directly."
    },
    { type: "story", text: "Too late, Rostam knew his son, and his grief was beyond any war he had ever won. The whole sorrow had lived, all along, in the space between what the fighters knew and what you, watching, knew for them." },
    { type: "story", moral: "You held the one truth the warriors could not, and watched it ruin them. At the summit, a story can place the whole weight of its grief in the gap between your knowing and theirs." }
  ]
};
export default story;
