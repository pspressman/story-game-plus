// sigurd-cursed-gold.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior Q1's stem performed the killing and its option supplied the reading;
// Q4 asked for a cause stated one block earlier.
const story = {
  id: "sigurd-cursed-gold",
  title: "Sigurd and the Cursed Gold",
  icon: "🐉",
  difficulty: "Easy",
  theme: "The weight a prize can carry",
  estimatedTime: "5-10 min",
  description: "A smith raises a boy, and tells him about a dragon lying on a mountain of gold.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
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
      text: "The smith Regin raised Sigurd from a boy, and told him often about the dragon Fafnir, who lay out on the heath on a mountain of gold. Kill him, Regin said, and the hoard is ours. So Sigurd reforged his dead father's broken sword, and went out to the heath, and dug a pit in the track the dragon used, and got down in it in the dark to wait."
    },
    {
      type: "question",
      domain: "intent",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Regin is a smith and knows where the dragon is. Picture him telling the boy about it, over and over, for years. Why him and not Regin himself?",
      options: [
        "Because Sigurd is the rightful heir to the gold",
        "Because someone has to get into the pit under the dragon, and Regin would rather it were not him",
        "Because only a reforged sword can kill Fafnir",
        "Because Regin does not actually want the gold"
      ],
      correctAnswer: 1,
      explanation: "He has known where that hoard is the whole time and has not gone. What he has done instead is raise somebody, and tell him about it until he wants it, and let him be the one lying in the dark under the track."
    },
    {
      type: "story",
      text: "The dragon came over the pit and Sigurd drove the sword up into him, and Fafnir went down in the heather, dying. He asked who had done it. And then he said: the gold is cursed. Whoever holds it will be destroyed by it."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand inside Fafnir in the heather, dying, having just been told the name of a young man he has never met. What does he understand about what has happened to him?",
      options: [
        "That he was beaten in a fair fight by a better warrior",
        "That someone he had never heard of was raised and aimed at him by a person with a reason",
        "That the gods have finally punished him for his greed",
        "That his own carelessness is what killed him"
      ],
      correctAnswer: 1,
      explanation: "He asks who, and the answer means nothing to him. The boy is not his enemy and never was. Somewhere behind this stranger in the pit there is a person with an old grievance, and Fafnir dies at the end of an arrangement he was not part of."
    },
    {
      type: "story",
      text: "Regin came up and asked Sigurd to roast the dragon's heart for him. Sigurd burned his thumb on it and put it in his mouth, and the blood was on his tongue, and all at once he could understand two birds talking in the tree above him. They were saying that Regin was going to kill him as soon as the heart was eaten."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Put the birds' warning next to what Regin has been doing since Sigurd was small. What does Sigurd now understand about his own childhood?",
      options: [
        "That Regin was training him to be a great warrior",
        "That the years of stories about the dragon were the beginning of this, and he was being aimed the whole time",
        "That Regin never really cared about the gold",
        "That the birds must be mistaken about a man who raised him"
      ],
      correctAnswer: 1,
      explanation: "The warning does not only tell him about tonight. It tells him what all those tellings were for, and he has to look back at being brought up and see it as work somebody was doing on him."
    },
    {
      type: "story",
      text: "Sigurd killed him first, and loaded the gold on his horse and rode off with it. He became a king and married a queen and for a while everything went well for him."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Sigurd rides away pleased. Fafnir told him plainly that the gold destroys whoever holds it. Picture him loading it anyway. What has he done with the warning?",
      options: [
        "Forgotten it in the excitement of the fight",
        "Heard it, understood it, and taken the gold regardless, which is what everyone who has held it did",
        "Decided the dragon was lying to spite him",
        "Never actually heard it, since the dragon spoke too quietly"
      ],
      correctAnswer: 1,
      explanation: "He was warned at the source, by the one who had it longest. He takes it anyway. Whatever the curse is, it does not need to trick anybody, because it works on people who have already been told."
    },
    {
      type: "story",
      text: "In time treachery came into his own hall, and he was killed by people close to him, exactly as Fafnir had said. The gold went on to somebody else, and the sorrow went with it."
    },
    { type: "story", moral: "The cruel blow was felt by the dragon, the betrayal by Sigurd, the curse by everyone the gold touched. Some prizes are carried, and some carry you." }
  ]
};
export default story;
