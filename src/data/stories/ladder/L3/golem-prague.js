// golem-prague.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
const story = {
  id: "golem-prague",
  title: "The Golem of Prague",
  icon: "🗿",
  difficulty: "Easy",
  theme: "A thing made to serve, and what it is to be made",
  estimatedTime: "5-10 min",
  description: "A rabbi shapes a guardian from river clay and wakes it with a word. Stand on the side of the made thing, woken and commanded and at last unmade.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Jewish, Prague",
    region: "Central Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "In old Prague, to guard his people in a hard time, Rabbi Loew went down to the river and gathered clay. He shaped it into the form of a great man, and then he placed a holy word upon it. The clay stirred, and stood, and opened its eyes. The Golem was awake." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand where the Golem stands in the moment it first opens its eyes. What is true of it?",
      options: [
        "It has chosen to come to life on its own",
        "It has been shaped and woken by another, given no say in being made",
        "It has slept in the river for years and now wakes naturally",
        "It has asked the rabbi to bring it to life"
      ],
      correctAnswer: 1,
      explanation: "From the Golem's side, its whole existence is done to it: formed by another's hands, woken by another's word. It is made, not making, and that is the vantage to hold."
    },
    { type: "story", text: "The Golem was strong and tireless, and it did whatever the rabbi commanded, guarding the streets through the night. It did not rest, and it did not ask why; it only obeyed the words it was given." },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "The Golem is sent out each night and told exactly what to do, never asked what it wants. Seen from its side, what is its place in the world?",
      options: [
        "It is a free guard who comes and goes as it pleases",
        "It is a maker of its own tasks each day",
        "It is moved entirely by the words it is given, with no will of its own",
        "It is the rabbi's equal and partner"
      ],
      correctAnswer: 2,
      explanation: "Read from inside it, the Golem is always the one acted upon: set in motion, directed, sent. It has no purpose but the one laid on it, which is what makes its making a heavy thing."
    },
    { type: "story", text: "In time the Golem grew too strong to be safely kept, and the danger to the people had passed. So the rabbi climbed to where it lay and gently removed the holy word. The light went out of its eyes, and it sank back into still clay." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "At the end, picture what is done to the Golem. What happens to it?",
      options: [
        "It is set free to live as it likes",
        "It is unmade, the life taken back out of it and the clay left still",
        "It chooses to lie down and sleep",
        "It is sent to guard another city"
      ],
      correctAnswer: 1,
      explanation: "As at its waking, so at its ending: another hand decides. The word is lifted away and the life withdrawn. The Golem is unmade, the doing always belonging to someone else."
    },
    { type: "story", text: "The clay was carried to the attic and laid to rest, and the story says it waits there still, should it ever be needed and woken again." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had the rabbi made the Golem in the first place?",
      options: [
        "To guard and protect his people in a time of danger",
        "To prove that he could shape clay into a man",
        "Because the Golem had asked to be made",
        "To replace the night watchmen who had quit"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause from the opening: protection in a hard time is why it was made. Here it frames the making rather than testing the vantage."
    },
    { type: "story", moral: "It was shaped, woken, commanded, and stilled, all by other hands. To stand where it stood is to feel what it is to be made for someone else's need." }
  ]
};
export default story;
