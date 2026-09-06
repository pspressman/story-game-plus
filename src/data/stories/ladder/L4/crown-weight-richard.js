// crown-weight-richard.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// History play: inaccuracy_flag set. Rewritten: no question asks for the moral outright, and
// all four options carry B4-level subordination rather than the answer alone.
const story = {
  id: "crown-weight-richard",
  title: "The Weight of the Crown",
  icon: "👑",
  difficulty: "Medium",
  theme: "What a crown binds you to that no one else must bear",
  estimatedTime: "5-10 min",
  description: "One king spends the treasury on his favourites. Another takes the crown off him. A story of kings, shaped by a playwright's pen.",
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
    threads: [{ type: "history", inaccuracy_flag: true }],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "King Richard spent the kingdom's money on his favourites. When his uncle died, Richard seized the lands that should have gone to his cousin Bolingbroke, and used them to pay for a war. His lords advised him against it and he did not listen to any of them."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Picture the other lords watching Richard take Bolingbroke's inheritance. They own lands too. What have they just learned?",
      options: [
        "That Richard bears a particular grudge against Bolingbroke, which need not touch the rest of them",
        "That the rule keeping land in a family does not hold, which means it does not hold for theirs",
        "That the war must be urgent indeed, if a king will go so far to find the money to pay for it",
        "That Bolingbroke should have stayed in England, since a man who is absent cannot defend a claim"
      ],
      correctAnswer: 1,
      explanation: "It is not one man's misfortune to them. It is a demonstration that the thing keeping their own estates in their families is only as good as the king's mood, and every one of them is doing that arithmetic."
    },
    {
      type: "story",
      text: "Bolingbroke came back with an army. The lords went over to him almost without a fight. Richard was taken, and made to hand over the crown in front of them all, and Bolingbroke was king."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture the lords choosing sides. Richard was the anointed king and they were sworn to him. What made the oath easy to leave?",
      options: [
        "Bolingbroke's army was too large to face, so that resisting would have cost them everything",
        "Richard had already shown that his half of the bargain did not bind him, so little was left of it",
        "They had never meant the oath seriously, having sworn it only because it was expected of them",
        "The church had released them from it, as a bishop may do when a king has offended badly"
      ],
      correctAnswer: 1,
      explanation: "An oath of loyalty is one half of something. He took the lands, ignored the counsel, and spent what was not his, and by the time Bolingbroke landed there was not much left on the other side of the promise for them to keep faith with."
    },
    {
      type: "story",
      text: "But Bolingbroke could not rest afterwards. He sat up at night. He knew how he had come by the crown, and so did everyone else, and rebellions started almost at once and did not stop while he lived."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "future_perfect",
      gates: true,
      question: "Picture a lord in Bolingbroke's court weighing whether to rebel against him. What can he point to that Richard's lords could not?",
      options: [
        "That Bolingbroke governs worse than Richard did, which the country can see for itself",
        "That the throne has been taken by force once already, which means that it can be taken so",
        "That Bolingbroke was never properly crowned, so that his title carries a flaw in it",
        "That Richard is living yet and wants it back, which gives a rebel someone to raise up"
      ],
      correctAnswer: 1,
      explanation: "Bolingbroke's own road to the crown is the argument against him, and it is available to every ambitious man in England. He cannot answer it, because answering it would mean explaining why the thing he did should not be done again."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Richard thought the crown let him do as he liked and lost it. Picture Bolingbroke awake at night with it. What did each of them get wrong about it beforehand?",
      options: [
        "Both thought the treasury larger than it was, having never had to count it themselves",
        "Both took it for a thing that gives, and each found it was a thing that is owed",
        "Both misjudged how many enemies a king keeps, which no man knows until he is one",
        "Both believed a crown could not be taken away, having seen it worn all their lives"
      ],
      correctAnswer: 1,
      explanation: "One treated it as permission and found out it was a debt to the realm. The other treated it as a prize and found out he had bought the debt. Neither of them, before wearing it, was looking at the right side of the thing."
    },
    { type: "story", text: "A note as you read: these kings come from Shakespeare's history plays, and he shaped them for the stage. The real Richard and the real Bolingbroke were more tangled than the plays allow." },
    { type: "story", moral: "A crown looks like leave to do anything. It is really a bond to do everything. The head that wears it lies least easy of all." }
  ]
};
export default story;
