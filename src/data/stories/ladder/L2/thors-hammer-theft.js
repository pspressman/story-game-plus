// L2_thors-hammer-theft.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: the prior description gave away Loki's plan on the story card, Q1's stem
// described the dressing before any block contained it, and Q3 was a lookup.
const thorsHammerTheft = {
  id: "thors-hammer-theft",
  title: "The Theft of Thor's Hammer",
  icon: "🔨",
  difficulty: "Easy",
  theme: "Disguise and deception",
  estimatedTime: "5-10 min",
  description: "Thor wakes up and his hammer is gone. The giant who took it names his price.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "Norse",
    region: "Northern Europe",
    saga: "norse_eddas",
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
      text: "Thor woke and put out his hand for the hammer and it was not there. Word came up from Thrym, king of the giants: he had it, he had buried it eight miles down in the earth, and he would give it back on one condition. The goddess Freyja was to come to his hall and marry him. Nothing else would do."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Thrym could have kept the hammer buried and said nothing. Picture him sending the message instead. What does asking for a bride cost him?",
      options: [
        "Nothing; he has the hammer and can ask for anything",
        "He has to let someone come into his hall, which means opening the one place the hammer is safest",
        "He must give up his kingdom to marry",
        "He risks the other giants learning what he has done"
      ],
      correctAnswer: 1,
      explanation: "Eight miles down and a shut hall is a thing nobody can undo. The moment he wants something delivered, there has to be a door open and people walking through it, and he has made that door himself."
    },
    {
      type: "story",
      text: "The gods sat together and could think of nothing. Freyja would not go, and said so loudly enough that the hall shook. Then Loki looked at Thor for a while, and looked at him again, and began to smile."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Thrym has asked for a bride and will only open his hall to one. Picture Loki looking Thor up and down and starting to smile. What has he worked out?",
      options: [
        "That Thor could fight his way into the hall after all",
        "That Thrym will open the door for a bride and will not check very hard who is under the veil",
        "That Freyja can be persuaded if Thor asks her himself",
        "That the hammer can be dug up while the wedding happens"
      ],
      correctAnswer: 1,
      explanation: "The problem was never the hammer, it was getting into the hall. Thrym has said what will get someone through the door, and Loki is looking at Thor because Thor is roughly the size of a person and a veil covers a face."
    },
    {
      type: "story",
      text: "So they put linen on Thor, and gold at his throat, and a veil over his beard, and Loki dressed as the bridesmaid, and they went to the giant's hall. Thrym met them at the door delighted. At the feast the bride ate a whole ox, and eight salmon, and drank three barrels of mead, and Thrym stopped with his cup halfway up and stared."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Loki leans over and tells Thrym the bride has not eaten for eight days, so eager was she for the wedding. Picture Thrym deciding whether to believe it. Why does he?",
      options: [
        "Because the explanation is a very good one",
        "Because he has wanted this wedding for a long time, and the alternative is that it is not happening",
        "Because Loki is known to be honest",
        "Because giants eat that much at every meal"
      ],
      correctAnswer: 1,
      explanation: "It is a poor explanation and he takes it. He is not weighing it against other explanations; he is weighing it against losing the thing he has schemed and buried a hammer for, and next to that a starving bride is easy to believe."
    },
    {
      type: "story",
      text: "\"Bring in the hammer,\" said Thrym, \"and lay it in the bride's lap, and let it bless the marriage.\" They brought it in and laid it there. Thor's hands closed on it, and he tore the veil off, and there was nothing left of that hall by morning."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "gerund",
      gates: false,
      question: "Thrym buried the hammer eight miles down where nobody could reach it. Picture the moment he calls for it to be brought in. What has happened to all that hiding?",
      options: [
        "It was undone by the gods, who found the hiding place",
        "He undid it himself, carrying the hammer up out of the ground and putting it into Thor's hands",
        "It never worked, because Thor knew where it was all along",
        "The other giants dug it up without telling him"
      ],
      correctAnswer: 1,
      explanation: "Nobody found it. Nobody dug. The one man who knew where it was went and got it and laid it down in front of the person it belonged to, because the wedding he wanted needed it, and he wanted the wedding more than he understood the danger."
    },
    {
      type: "story",
      moral: "The trick succeeds when the mark sees only what they wish to see. A disguise works best on a greedy eye."
    }
  ]
};

export default thorsHammerTheft;
