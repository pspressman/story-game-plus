// seven-labors-rostam.js  L1, B1. Shahnameh. Sequence-of-deeds node.
// Rewritten: the labors are now TOLD, not merely counted. Prior version asked about a
// lion and a final labor that appeared nowhere in the text, and carried Cu Chulainn
// distractors (Setanta, Culann) from the node it was cloned from.
const story = {
  id: "seven-labors-rostam",
  title: "The Seven Labors of Rostam",
  icon: "🦁",
  difficulty: "Beginner",
  theme: "One danger after another, toward a goal",
  estimatedTime: "5-10 min",
  description: "To rescue a captured king, Rostam must pass seven trials in order. Hold the road in your mind: what lies behind him, and how far is left.",
  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence",
    culture: "Persia",
    region: "Persia and Central Asia",
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
      text: "A demon had taken the king of Persia and his whole army, and held them in a far country. The hero Rostam went after them alone, on his horse Rakhsh. Between him and that country lay seven dangers, and the road ran through them one after another. There was no way round."
    },
    {
      type: "question",
      domain: "where",
      band: "B1",
      grammar_cell: "locative",
      gates: true,
      question: "Picture the road Rostam is about to ride, with the seven dangers on it and the king at the far end. Where is the seventh danger?",
      options: [
        "At the very start, before he has gone any distance",
        "Last on the road, closest to where the king is held",
        "Off to one side, where he can ride around it",
        "Behind him, in the country he came from"
      ],
      correctAnswer: 1,
      explanation: "The dangers come one after another along a road that ends where the king is. Lay them out in order and the seventh is the one nearest the far end, the last thing standing between Rostam and the rescue."
    },
    {
      type: "story",
      text: "The first night, Rostam ate and lay down to sleep in tall grass, with Rakhsh grazing nearby. A lion lived in that grass. It came for the sleeping man. Rakhsh reached it first, struck it down with his hooves, and went back to grazing. Rostam woke in the morning and found the dead lion, and knew nothing of the night."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Picture the field while the lion is coming. Rostam is asleep and Rakhsh is awake. Who knows the danger is there?",
      options: [
        "Both of them, and they meet it together",
        "Only the horse, while the man sleeps through the whole thing",
        "Only Rostam, who is pretending to sleep",
        "Neither of them until morning"
      ],
      correctAnswer: 1,
      explanation: "Two things are going on at once in that field. The man is asleep and stays asleep. The horse sees, acts, and finishes it. That is why Rostam wakes to a dead lion and no memory of how it got there."
    },
    {
      type: "story",
      text: "The second day the road ran into desert. There was no water in it. Rostam walked until Rakhsh could not lift his head, and lay down under his shield to die. A ram came past him, walking steadily, going somewhere. Rostam got up and followed it, and the ram walked to a spring."
    },
    {
      type: "question",
      domain: "inference",
      band: "B1",
      grammar_cell: "simple_past",
      gates: true,
      question: "Rostam is dying of thirst when a ram walks past. Picture how it moves. Why does he get up and follow it?",
      options: [
        "Because he wants to hunt it for food",
        "Because an animal walking steadily through waterless desert must be going to water",
        "Because the ram belongs to the demon and will lead him to the king",
        "Because he thinks it is Rakhsh returned to him"
      ],
      correctAnswer: 1,
      explanation: "Nothing living crosses dry desert at a steady walk without somewhere to drink. The ram is not a sign or a spirit; it is an animal that knows where the water is, and Rostam reasons from how it moves."
    },
    {
      type: "story",
      text: "Four more dangers came and went on that road, and Rostam came through them. At the last he reached the demon's country, and the demon was waiting for him, and the king was still in chains behind it."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Rostam stands facing the demon at last. Picture the road stretching back behind him. How much of it is finished?",
      options: [
        "None of it; the trials all lie ahead",
        "All of it but this, six dangers behind him and one in front",
        "About half, with the rest waiting past the demon",
        "All seven, including the demon"
      ],
      correctAnswer: 1,
      explanation: "The lion, the desert, and four more make six behind him. The demon is the seventh and it has not been fought yet. Everything is done except the thing he came for."
    },
    {
      type: "story",
      text: "Rostam fought the demon and killed it, and struck the chains off the king, and the army came out of that country alive."
    },
    { type: "story", moral: "Seven dangers stood between Rostam and the king, and he met them one at a time, each bringing him closer. A great task is often a chain of smaller ones, faced in order." }
  ]
};
export default story;
