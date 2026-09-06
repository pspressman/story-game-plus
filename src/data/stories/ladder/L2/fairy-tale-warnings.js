// fairy-tale-warnings.js  L2, B2. COLLAPSED node: Snow White + Sleeping Beauty + Little Red Riding Hood.
// Rewritten: prior version summarised all three tales in a single paragraph and then
// asked four questions about stories it had never told. Each tale is now told, each
// gets its own picturing question, and the comparison comes only at the end.
const story = {
  id: "fairy-tale-warnings",
  title: "Three Warnings: the Apple, the Wolf, and the Spindle",
  icon: "🍎",
  difficulty: "Easy",
  theme: "Danger hidden behind a friendly or harmless face",
  estimatedTime: "5-10 min",
  description: "A soft-spoken grandmother, a kind old peddler, a pretty little spindle. Three tales, told one at a time. Look at each face before you decide what is behind it.",
  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "past_perfect",
    culture: "European",
    region: "Western Europe",
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
      text: "A girl in a red hood was sent through the wood to her grandmother's cottage, and her mother told her to keep to the path and speak to nobody. She met a wolf on the way and told him where she was going. The wolf went on ahead by the shorter road. When the girl arrived, the cottage door was open and her grandmother was lying in bed with the blanket pulled high and the nightcap down low."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Picture the girl in the doorway looking at the bed. You know something she does not. What is she actually looking at?",
      options: [
        "Her grandmother, sleeping too soundly to greet her",
        "The wolf, who got here first and is lying where the grandmother should be",
        "An empty bed with the blankets heaped up",
        "Her grandmother, hiding from the wolf outside"
      ],
      correctAnswer: 1,
      explanation: "The wolf took the shorter road. He was here before her. Everything after that is arrangement: the blanket high, the cap low, the shape in the bed. She sees her grandmother because that is what the shape has been made to look like."
    },
    {
      type: "story",
      text: "In another kingdom, a queen looked in her mirror and learned that Snow White was still alive in a cottage in the woods. The queen knew the girl would slam the door on a queen. So she stained her face, bent her back, wrapped herself in a peddler's shawl, and filled a basket with apples, and only one of the apples was poisoned. Then she walked out to the woods and knocked."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Only one apple in that whole basket is poisoned. Picture the queen filling it that morning. Why did she bother with all the others?",
      options: [
        "She meant to sell them and make some money on the way",
        "So the basket would look like an ordinary peddler's basket, and the one apple would not stand out in it",
        "She could not remember which apple she had poisoned",
        "She intended to poison the whole basket but ran out of poison"
      ],
      correctAnswer: 1,
      explanation: "A woman at the door holding one apple is a woman with a purpose. A woman holding a basket is a peddler. The good apples are not generosity, they are cover, and the whole disguise works the same way her bent back does."
    },
    {
      type: "story",
      text: "In a third kingdom, a princess had been cursed at her christening to prick her finger on a spindle and fall. Her father burned every spindle in the land. Sixteen years went by with no spindle anywhere, and the princess grew up and never saw one. Then one afternoon she climbed a staircase in a tower she had not been in before, and found an old woman sitting in a little room, spinning."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Picture the princess in that doorway, looking at the spindle turning. Her father burned them all before she could walk. What does she think she is looking at?",
      options: [
        "The very thing she was warned about all her life",
        "An interesting object she has never seen before, and no reason at all to be afraid of it",
        "A weapon the old woman is about to use on her",
        "A toy that belongs to another child in the tower"
      ],
      correctAnswer: 1,
      explanation: "The burning was meant to keep her safe, and it did something else as well. Sixteen years without a single spindle means sixteen years of never learning what one looks like. She walks toward it because to her it is just a pretty thing going round."
    },
    {
      type: "story",
      text: "In each tale a warning had been given beforehand. Keep to the path. Do not open the door to strangers. Beware the spindle. In each tale the danger arrived anyway, wearing something the child had no reason to run from."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Now hold all three pictures at once: the shape in the bed, the basket of apples, the old woman spinning. What is the same in all three?",
      options: [
        "The danger is enormous and frightening to look at",
        "The danger has arranged itself to look like something ordinary and safe",
        "The danger comes from someone in the child's own family",
        "The danger appears only after dark"
      ],
      correctAnswer: 1,
      explanation: "Nothing in any of the three scenes looks alarming, and that is the work each danger has done. A wolf in a bed, poison in a basket, a curse in a pretty turning thing. What they share is not what they are but what they have been made to look like."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Each child was warned before any of this happened. Picture the moment the warning was given, before the wood or the basket or the tower. Why does a warning have to come that early?",
      options: [
        "Because grown-ups enjoy making rules",
        "Because by the time the danger is in front of you it will not look like danger, so the warning has to be already in your head",
        "Because the children would forget it otherwise",
        "Because warnings only work if nobody explains them"
      ],
      correctAnswer: 1,
      explanation: "None of the three children could have worked it out on the spot. The bed looked like grandmother, the basket looked like fruit, the spindle looked like nothing at all. The warning is the only thing that arrives before the disguise does."
    },
    { type: "story", moral: "A soft voice, a full basket, a pretty little thing that turns. In each tale the harm hid behind something that looked safe, and a warning was meant to get there first." }
  ]
};
export default story;
