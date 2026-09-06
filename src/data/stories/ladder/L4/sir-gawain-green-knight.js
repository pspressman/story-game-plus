// example_L4_sir-gawain-green-knight.js
// WORKED EXEMPLAR. L4, B4 the ought. Grammar target: deontic_modal.
// Rewritten: description stated the dilemma, stems supplied the weighing ("he could stay
// safe, and no one would drag him out"), and Q3 was a lookup. Options level across the band.
const sirGawain = {
  id: "sir-gawain-green-knight",
  title: "Sir Gawain and the Green Knight",
  icon: "🟢",
  difficulty: "Medium",
  theme: "No one forced him; he forced himself, by his word",
  estimatedTime: "5-10 min",
  description: "A green stranger rides into Arthur's hall at Christmas and offers the court a game.",

  meta: {
    level: 4,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "Britain",
    region: "British Isles",
    saga: "arthur",
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
      text: "A knight rode into Arthur's hall at Christmas, green from his hair to his horse, carrying a great axe. \"One blow,\" he said. \"Any man here may strike me one blow with this, and in a year and a day he comes and finds me, and takes one back.\" Nobody moved for a while. Then Gawain stood up, and took the axe, and struck the green head off. The knight got down off his horse, picked the head up, and the head said: a year and a day. Then he rode out."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Picture the moment before Gawain swings, with the court watching. What does he think the bargain is?",
      options: [
        "A trap of some kind, which he intends to spring deliberately for the honour of the court",
        "A one-sided offer, since a man who has lost his head will not be collecting anything later",
        "A test of courage that Arthur's honour requires somebody in the hall to accept publicly",
        "A magical contest in which he expects to face the stranger again on equal terms next year"
      ],
      correctAnswer: 1,
      explanation: "He is not being brave in the way it looks. He swings because the return blow will never be collected by a headless man, and the whole thing costs him nothing. Then the head speaks and the bargain turns out to have been real."
    },
    {
      type: "story",
      text: "The year went by. In the autumn Gawain rode north to find a chapel he was not sure existed, to keep an appointment with a man he had watched pick up his own head."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture what would happen if Gawain simply stayed at Camelot. Who would come for him?",
      options: [
        "The green knight, who would ride to the hall and take the blow in front of the whole court",
        "Nobody at all, which is precisely why riding out is a decision rather than a submission",
        "Arthur's knights, who would be obliged by the court's honour to compel him to keep the terms",
        "The court's judgement, since a knight who broke such a bargain could not remain among them"
      ],
      correctAnswer: 1,
      explanation: "There is no enforcement anywhere in this. The green knight is somewhere north and has not been heard from. Everything that puts Gawain on that road comes from inside him, and that is what the year is testing."
    },
    {
      type: "story",
      text: "On the way a lord took him in and proposed a game to pass the days: whatever each of them won that day, they would trade in the evening. The lord went out hunting. The lord's wife came to Gawain's room, and kissed him, and each evening Gawain gave the kisses to the lord as the game required. On the third day she pressed something else on him: a green girdle, which she said would keep him from being killed."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture Gawain that evening with the girdle under his clothes and the lord coming in. The kisses he handed over cost him nothing. What is different now?",
      options: [
        "The girdle was a gift given privately, so it falls outside the terms of a game about winnings",
        "It is the first thing the game has asked him for that he actually wants to keep",
        "The lady asked him to say nothing about it, so a second promise now binds him to silence",
        "A girdle is not a winning in the way a hunted deer or a kiss is, so the rule does not reach it"
      ],
      correctAnswer: 1,
      explanation: "He has kept the game faithfully for two days, and it has been easy, because nothing he was handing over mattered to him. The girdle is where the rule starts costing something, and that is the only place a rule can be tested."
    },
    {
      type: "story",
      text: "At the green chapel the axe came down and stopped. Came down again and stopped. The third time it took a nick out of his neck and no more: one small cut, for the one thing he had kept back. Gawain rode home alive, and wore the green sash for the rest of his life, and not as a decoration."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Gawain kept the appointment nobody could have made him keep, and came home alive. Picture him wearing the sash afterwards. Why does he count it as a failure?",
      options: [
        "Because he was wounded at the chapel, when a better knight would have taken the blow unmarked",
        "Because the whole year came down to one thing he wanted enough to break the rule for",
        "Because the lady deceived him about what the girdle could do, and he was fool enough to believe her",
        "Because he accepted a gift from another man's wife, which no knight of the court should have done"
      ],
      correctAnswer: 1,
      explanation: "He rode a year to a place he could have avoided, and that part he did. Then he found the one thing worth cheating for, and cheated. The sash is there so he does not get to remember only the riding out."
    },
    {
      type: "story",
      moral: "No one forced him to the chapel. He forced himself, by his word. And the one thing he let himself keep was the very thing he owed."
    }
  ]
};

export default sirGawain;
