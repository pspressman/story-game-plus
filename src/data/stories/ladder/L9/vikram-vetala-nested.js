// vikram-vetala-nested.js  L9, B6 recursion. Target: nested_reported_speech. Gate: a mind reporting a mind reporting a mind.
const story = {
  id: "vikram-vetala-nested",
  title: "The Vetala's Nested Riddle",
  icon: "🌀",
  difficulty: "Advanced",
  theme: "A tale inside the trap, and the trap that loops",
  estimatedTime: "5-10 min",
  description: "The spirit on the king's shoulder tells a riddle in which one person reports what another said. To answer, the king must untangle whose words are whose, and answering springs the trap again.",
  meta: {
    level: 9,
    track: "gated",
    tier: "A",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "nested_reported_speech",
    culture: "India",
    region: "South Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "King Vikram had to carry the vetala, a clever spirit, back across the night, and the rule was cruel. The vetala would tell a tale ending in a riddle. If the king knew the answer and kept silent, his head would burst; but the instant he spoke the answer aloud, the spirit would fly back to its tree and the long carrying would begin all over again." },
    { type: "story", text: "This night the vetala told of a merchant's daughter. A maid came to the daughter and said that a young man had sworn he would rather die than wed anyone but her. Later a second maid came and said that the young man's friend had told her the young man had already promised himself to another. The daughter had to judge the truth from these two reports alone." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "The second report is the deepest nested: a maid says that the young man's friend told her that the young man had promised himself to another. How many people stand between the daughter and the young man's own supposed promise?",
      options: [
        "None; she heard him promise it herself",
        "Two: the friend, who claimed it, and the maid, who carried the friend's claim to her",
        "Only one, the maid",
        "Three or more"
      ],
      correctAnswer: 1,
      explanation: "Track the layers in the riddle: the young man's promise reaches the daughter through the friend who reported it and the maid who carried the friend's report. She is judging a claim two tellers deep, never the young man's own words."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The vetala asks the king which maid the daughter should believe. Why is the second report the weaker one to trust?",
      options: [
        "Because second maids always lie",
        "Because it is carried through more mouths, a friend's claim relayed by a maid, so it is further from the young man himself and easier to have bent on the way",
        "Because it came later in the day",
        "Because the daughter disliked the second maid"
      ],
      correctAnswer: 1,
      explanation: "The deeper a claim is nested, the more hands could have shaped it. The first report is the young man's own sworn words carried once; the second is a friend's claim about him, carried again. Tracking the seams is how the king weighs them."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "The king works out the answer and speaks it aloud. What happens the moment his answer leaves his mouth?",
      options: [
        "The vetala praises him and sets him free",
        "The vetala flies back to its tree, and the king must go and carry it down once more, the whole trap looping again",
        "The riddle changes into a new one instantly",
        "The king's head bursts anyway"
      ],
      correctAnswer: 1,
      explanation: "The trap itself is a loop. Knowing forces him to speak, and speaking sends the spirit back to the start. Even the frame nests: a tale of relayed words, wrapped in a task that answering only restarts."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_present",
      gates: false,
      question: "Why must King Vikram answer the riddle even though answering frees the spirit?",
      options: [
        "Because if he knows the answer and stays silent, his head will burst",
        "Because the vetala is his friend",
        "Because he enjoys the walk",
        "Because the tree asks him to"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: silence in the face of a known answer is fatal, so he must speak. Here it frames the looping trap rather than testing the nesting."
    },
    { type: "story", moral: "The riddle hid a claim within a claim, and the trap hid a loop within a task. To beat the spirit is to untangle whose words are whose, even knowing the answer sends it flying back." }
  ]
};
export default story;
