// hang-tuah-wrong-king.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: no question asks the child to endorse that a dilemma is hard, and all four
// options carry B4-level subordination rather than the answer alone.
const story = {
  id: "hang-tuah-wrong-king",
  title: "Hang Tuah and the Wrong King",
  icon: "⚔️",
  difficulty: "Medium",
  theme: "What you owe a king who has wronged you",
  estimatedTime: "5-10 min",
  description: "Jealous men tell the sultan a lie about his most loyal warrior. The sultan believes it.",
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
    {
      type: "story",
      text: "Hang Tuah was the sultan's most loyal warrior, and men at court were jealous of it. They told the sultan that Hang Tuah had done a shameful thing. It was a lie, and the sultan did not check it. He ordered Hang Tuah put to death. But the minister given the order knew the man was innocent, and hid him in the forest, and reported the execution done."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: false,
      question: "Picture the minister deciding, with the order in his hand. He disobeys the sultan to save an innocent man. What has he actually done to Hang Tuah's situation?",
      options: [
        "Ended it, since a man who has not been executed is a man whose troubles are behind him",
        "Kept him alive inside it, still condemned and still innocent, and now hidden as well",
        "Cleared his name, because a minister who knows the truth will carry it to the sultan",
        "Freed him of every obligation, having been cast off by the king he had served so long"
      ],
      correctAnswer: 1,
      explanation: "Nothing has been fixed. The lie stands, the sentence stands, and the man is alive in a forest where nobody can hear him say he did not do it. He is saved and he is not any less condemned."
    },
    {
      type: "story",
      text: "Hang Jebat was Hang Tuah's dearest friend and believed the execution had happened. He knew Hang Tuah was innocent because he knew him. And so he rose against the sultan, and took the palace, and no one in the country could stand against him."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Picture Jebat's rebellion as it looks to him, and then picture what is actually true. Where is the gap?",
      options: [
        "He is avenging a man who is not dead, so that everything he does is built on nothing",
        "He believes the palace defended, when in truth nobody inside it can stand against him",
        "He believes the sultan gave the order himself, though the jealous men had given it for him",
        "He believes his friend would want this, though Hang Tuah would have forbidden it outright"
      ],
      correctAnswer: 0,
      explanation: "The wrong he is avenging was real, right up until a minister quietly undid it and told nobody. Everything Jebat does from that point rests on a death that did not happen, and there is no way for him to find that out."
    },
    {
      type: "story",
      text: "Then the sultan learned that Hang Tuah was alive, because nobody else could stop Jebat. He had him brought out of the forest and gave him back his weapons, and ordered him to go into the palace and kill the friend who had rebelled for his sake."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture what the sultan is asking for, in order: he condemned Hang Tuah on a lie, and now he needs him. What is he not offering along with the order?",
      options: [
        "Payment for the work, which a warrior called back from exile might reasonably expect",
        "Any word that the condemning was wrong, or any apology for having ordered his death",
        "Protection for his family, who would suffer badly if the fight in the palace went ill",
        "A promise of advancement afterwards, which a king usually offers before a hard task"
      ],
      correctAnswer: 1,
      explanation: "He does not say he was deceived, or that he is sorry, or that the sentence is lifted. He calls for the man he ordered killed and hands him a task. The wrong is never addressed, only stepped over because it has become inconvenient."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture Hang Tuah walking to the palace. Whatever he decides when he gets there, one thing is already settled by the situation itself. What is it?",
      options: [
        "That he will die in the fighting, since Jebat has beaten every man sent against him",
        "That he cannot keep faith with both, because the two he is bound to now want opposite things",
        "That the sultan will pardon him afterwards, having needed him when nobody else would serve",
        "That Jebat will lay down his weapon, once he sees the friend he believed to be dead"
      ],
      correctAnswer: 1,
      explanation: "He held two loyalties his whole life and they never pulled against each other before. The lie put them on opposite sides. Before he chooses anything, the choosing itself has already cost him one of them."
    },
    {
      type: "story",
      text: "He kept his oath to the sultan. He went in, and he fought Hang Jebat, and Hang Jebat died on the palace floor, and it ended the way it had to end once the lie was told."
    },
    { type: "story", moral: "What do you owe a king who has wronged you? The story gives no easy answer, only the grief of a man bound two ways at once." }
  ]
};
export default story;
