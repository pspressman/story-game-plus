// children-of-lir-depth.js  L7, B4 unreal past. Second seat of Children of Lir (first at L3). Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "children-of-lir-depth",
  title: "The Children of Lir: Nine Hundred Years",
  icon: "🦢",
  difficulty: "Hard",
  theme: "The whole life a spell stole",
  estimatedTime: "5-10 min",
  description: "Four children are turned to swans for nine hundred years by a jealous stepmother. Rebuild the human lives they never got to live, and weigh what those centuries cost.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
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
    { type: "story", text: "After their mother died, the four children of Lir were given a stepmother, Aoife, who grew jealous of how their father loved them. With a stroke of a druid's wand she turned them into four white swans and laid on them a doom of nine hundred years: three hundred on one lonely lake, three hundred on a cold strait, and three hundred on a wild sea. Only their human voices were left to them, so they sang through the long centuries." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Aoife laid the spell out of jealousy alone. If she had never worked it, what would the four children's lives have been?",
      options: [
        "Exactly the same, swans either way",
        "Ordinary human lives beside their father, the nine hundred lonely years on the water never spent at all",
        "Even longer as swans",
        "A different kind of enchantment"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch the wand closed. Without the spell, four children would simply have grown up at home. The whole grief is the human life that was there for the taking and was turned, by one jealous stroke, into nine centuries of feathers and cold water."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "When the nine hundred years are finally over and they take human shape again, price what the spell cost. What do the children find?",
      options: [
        "Their father waiting, unchanged, to welcome them",
        "Everyone they loved long dead and the world utterly changed, and themselves suddenly ancient, with only moments of life left",
        "That no time had passed at all",
        "A reward for their patience"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch reaches from the long-ago spell into the moment of return: because those centuries were spent, the world they knew is centuries gone. They are freed only to find there is nothing left to be freed into, and they crumble into age."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "At the very end a holy man breaks the spell. If that release had come at the start instead of after nine hundred years, what would have been spared?",
      options: [
        "Nothing; the spell had to run its course",
        "The whole nine hundred years of loneliness and loss, the children kept among the living they loved",
        "Only a single year",
        "The swans' beautiful singing"
      ],
      correctAnswer: 1,
      explanation: "Hold the early release against the late one. The same breaking, come at the beginning, would have given them their lives back whole. Coming at the end, it gives them only age and death. The grief is measured in the centuries between the two."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Aoife turned the children into swans?",
      options: [
        "Because she was jealous of how their father loved them",
        "Because they had wronged her",
        "To protect them from an enemy",
        "Because they asked to fly"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: jealousy drove the spell. Here it names the wrong the grief turns on rather than testing the branch."
    },
    { type: "story", moral: "A single jealous stroke turned four lives into nine hundred years of cold water. To read it at depth is to hold the human lives they never lived, and to count the centuries the spell stole from them." }
  ]
};
export default story;
