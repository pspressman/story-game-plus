// hang-tuah-wrong-king.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
const story = {
  id: "hang-tuah-wrong-king",
  title: "Hang Tuah and the Wrong King",
  icon: "⚔️",
  difficulty: "Medium",
  theme: "What you owe a king who has wronged you",
  estimatedTime: "5-10 min",
  description: "A loyal warrior is condemned by his king on a lie, then ordered to strike down the friend who rebelled to avenge him. He must weigh loyalty against loyalty.",
  meta: {
    level: 4,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "Malay",
    region: "Southeast Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Hang Tuah was the most loyal warrior in the land, and the sultan loved him. But jealous men whispered a lie, saying Hang Tuah had done a shameful thing. The sultan believed them and ordered Hang Tuah put to death. A wise minister, knowing the warrior was innocent, hid him away instead and only pretended to carry out the order." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The sultan has condemned Hang Tuah to death on a lie, though he is innocent. Does a subject owe obedience to a king who has wronged him so?",
      options: [
        "Yes, always and without question, no matter the wrong",
        "It is the hardest of questions: the bond to the king pulls one way, and the wrong done pulls the other, and neither answer is clean",
        "No, a wronged subject owes the king nothing ever again",
        "Yes, but only if the king apologizes first"
      ],
      correctAnswer: 1,
      explanation: "Weigh the bond against the wrong. Loyalty says he must obey; justice says he is free to turn away. The story refuses to make it easy, because the pull of must and the pull of may are both real and both strong."
    },
    { type: "story", text: "Hang Tuah's dearest friend, Hang Jebat, did not know he was alive. Believing the king had murdered the best and most faithful man in the land, Jebat rose in fury and rebelled, seizing the palace to avenge his friend. No one could stand against him." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Hang Jebat rebels out of love for his wronged friend. Was he bound to stay loyal to a king who killed the innocent, or free to rise against such injustice?",
      options: [
        "He was simply a traitor, bound to obey no matter what",
        "He acted on a real wrong, yet by breaking the bond of loyalty he stepped onto ground where even a just cause turns dangerous",
        "He was entirely right and owed the king nothing at all",
        "He should have done nothing and said nothing"
      ],
      correctAnswer: 1,
      explanation: "Jebat's cause is just, but loyalty is a bond not lightly broken. The tale holds both truths: the king's wrong was real, and a warrior free to rebel for justice still unleashes a ruin that cannot be controlled."
    },
    { type: "story", text: "Then the sultan learned Hang Tuah was alive, and in his need he called for him: only Hang Tuah could defeat Hang Jebat. So the most loyal warrior was sent to kill the friend who had rebelled for love of him." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The king who wronged him now orders Hang Tuah to slay the friend who rebelled to avenge him. What makes this command such agony to weigh?",
      options: [
        "It is easy; he should simply refuse the king",
        "His bond to the king says he must obey, while his bond to his friend says he should refuse, and he cannot honor both",
        "It is easy; he should simply join the rebellion",
        "There is no real choice, since he must always obey"
      ],
      correctAnswer: 1,
      explanation: "Two duties collide head-on. To the king, he must. To the friend who loved him, he ought not. Whichever he chooses, he breaks a bond he holds sacred, and that is the agony the story will not soften."
    },
    { type: "story", text: "Hang Tuah chose his oath to the king, and faced Hang Jebat, and the two friends fought. It ended in grief, as it could only end, with loyalty and love set against each other and no way to keep them both." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Hang Jebat rebelled against the sultan in the first place?",
      options: [
        "Because he believed the king had murdered his innocent friend Hang Tuah",
        "Because he wanted the throne for himself",
        "Because the king had not paid him",
        "Because foreign enemies had hired him"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: Jebat rose believing his friend had been wrongly killed. Here it sets up the collision of duties rather than testing the weighing of must against may."
    },
    { type: "story", moral: "What do you owe a king who has wronged you? The story gives no easy answer, only the grief of a man bound two ways at once." }
  ]
};
export default story;
