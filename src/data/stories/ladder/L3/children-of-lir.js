// example_L3_children-of-lir.js
// WORKED EXEMPLAR. L3, B3 the other's feeling and the vantage flip. Target: passive_voice.
// Rewritten: prior Q1's stem performed the event and its option supplied the reading;
// Q3 was a counting item. Scaffolded from outside-the-scene to inside it.
const childrenOfLir = {
  id: "children-of-lir",
  title: "The Children of Lir",
  icon: "🦢",
  difficulty: "Easy",
  theme: "The cruel thing was done to them, not by them",
  estimatedTime: "5-10 min",
  description: "A father marries again after his wife dies. His new wife watches him with his four children.",

  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
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
    {
      type: "story",
      text: "Lir had four children and loved them past all reason. When their mother died he married her sister, Aoife, and for a while the house was quiet. But Aoife watched. She watched him come in and go straight to the children. She watched the room change when they were in it. One cold morning she put the four of them in her chariot and drove out to a wide lake."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Picture the four children climbing into the chariot that morning. What do they think is happening?",
      options: [
        "That something is wrong and they are in danger",
        "That they are going out for the day with the woman who lives in their house",
        "That their father has sent them away",
        "That they are being taken to their mother"
      ],
      correctAnswer: 1,
      explanation: "Nothing has been said to them. Everything Aoife has been doing has happened behind her own eyes. From where the children stand, this is a chariot and a cold morning and a grown-up they know."
    },
    {
      type: "story",
      text: "At the water's edge she made them get down. Then she took out a druid's wand and struck them with it, one after another, and where four children had been standing there were four white swans on the lake."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand inside one of the swans in the first seconds. Picture what your own body is doing that it has never done. What is happening?",
      options: [
        "You are swimming away as fast as you can",
        "You are on water instead of ground, and the arms you would reach with are not there",
        "You are trying to remember how you got to the lake",
        "You are watching the other three swans and copying them"
      ],
      correctAnswer: 1,
      explanation: "The change is not something they watched happen. It happened in them. The first thing any of them can know about it is what their own body is doing now and cannot stop doing."
    },
    {
      type: "story",
      text: "But the spell did not take everything. It could not reach their voices. They spoke to each other on the water in their own speech, and they sang, and the singing was so sweet that people stopped on the road to hear it. Word of it travelled. It came to Lir, and he drove out to the lake."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "participle",
      gates: true,
      question: "Stand beside Lir on the shore hearing his children's voices come off the water. He can hear them and he can see what they are. What is unbearable about the voices in particular?",
      options: [
        "They are too beautiful to listen to for long",
        "They prove the children are still in there, so he has not lost them and cannot reach them",
        "They remind him of their dead mother",
        "They are too quiet for him to make out the words"
      ],
      correctAnswer: 1,
      explanation: "If they had gone entirely he could grieve and go home. The voices mean his children are present, and knowing him, and calling him, from inside something he cannot open. The mercy in the spell is the cruellest part of it."
    },
    {
      type: "story",
      text: "Nine hundred years they were on the water. Through winters that froze their feathers into the ice of the lakes, and through summers, and through the long turning of the country from what it had been into something they did not know. And they sang all that time."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand inside the swans a hundred years in. Aoife is long dead, everyone they knew is dead. What is being done to them now, with nobody doing it?",
      options: [
        "Nothing; the punishment ended when Aoife died",
        "The same thing as on the first day, going on and on with no one left to stop or forgive it",
        "They are slowly turning back into children",
        "They are being punished for something they did wrong"
      ],
      correctAnswer: 1,
      explanation: "One morning's work by one angry woman, and then nine centuries of it continuing by itself. There is nobody to appeal to, nobody to be sorry, nobody who even remembers. It just keeps happening to them."
    },
    {
      type: "story",
      text: "Only when the nine hundred years had entirely worn away did the spell let go of them, and they came in to the shore, and the long sorrow was over."
    },
    {
      type: "story",
      moral: "The cruel thing was done to them, not by them. To hear their song is to stand for a moment exactly where they stood."
    }
  ]
};

export default childrenOfLir;
