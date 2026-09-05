// prospero-tempest.js  L10 summit. B8, the maker who knows he is making. Tempest second seat.
const story = {
  id: "prospero-tempest",
  title: "Prospero Breaks His Staff",
  icon: "🪄",
  difficulty: "Master",
  theme: "The maker who chooses to stop making",
  estimatedTime: "5-10 min",
  description: "A magician has spent the whole story making things happen with his art. At the end he sets the power down, frees what he commanded, and steps out of his own tale to speak to us.",
  meta: {
    level: 10,
    track: "gated",
    tier: "A",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "England",
    region: "British Isles",
    saga: "shakespeare",
    source_epic: false,
    threads: ["shakespeare"],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Prospero, a magician living on an island with his daughter, had raised a great storm to bring his old enemies to his shores, and all through the tale he arranged everything: the visions, the spirits, the meetings, the punishments. The spirit Ariel did his bidding, and nothing happened on the island that Prospero had not shaped." },
    {
      type: "question",
      domain: "self_aware",
      band: "B8",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Prospero has spent the whole story making things happen with his art. At the end, what does this maker choose to do with the very power he has been wielding?",
      options: [
        "Use it to rule the island forever",
        "Set it down on purpose: break his staff, give up his book, and free Ariel, laying aside the magic he has used all along",
        "Pass it to his daughter to use",
        "Hide it for a future war"
      ],
      correctAnswer: 1,
      explanation: "A maker who knows he is making can choose to stop. Having shaped everything, Prospero deliberately lays down the art, breaking the staff and freeing his servant. The summit move is a creator turning, knowingly, away from his own power."
    },
    {
      type: "question",
      domain: "self_aware",
      band: "B8",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "By the last scene, having arranged every fate on the island, Prospero turns and speaks directly to the audience watching. What will he have shown himself to be that an ordinary character never could?",
      options: [
        "A villain who escapes punishment",
        "A maker aware he is inside a made thing, who can step to the edge of his own story and address the very people watching it",
        "A spirit like Ariel",
        "A king of a great country"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect holds the whole arc: by the end he will have been not just acting in the tale but knowing it for a tale, enough to speak past its edge to us. That self-awareness, the maker who sees the making, is the rarest altitude the ladder reaches."
    },
    {
      type: "question",
      domain: "self_aware",
      band: "B8",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Prospero could keep his power and take full revenge on the enemies in his grasp. Why does a maker who knows he is making choose mercy and release instead?",
      options: [
        "Because he is too weak to take revenge",
        "Because, seeing the whole as his own making, he is free to unmake it gently rather than rule it, and chooses forgiveness over the power he could keep",
        "Because Ariel forces him to",
        "Because his enemies defeat him"
      ],
      correctAnswer: 1,
      explanation: "Held against the branch where he rules and revenges, his mercy is a choice only a self-aware maker can make. Knowing the whole island is his to shape, he elects to dissolve his power kindly, which is why the play ends in release rather than triumph."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Prospero raised the storm at the start of the tale?",
      options: [
        "To bring his old enemies to his island and set his plan in motion",
        "To frighten his daughter",
        "To sink passing ships for treasure",
        "Because he could not control his magic"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the storm was the opening move of his design. Here it frames the maker rather than testing his self-awareness. (This is the plot of Shakespeare's play, told plainly, not his own lines.)"
    },
    { type: "story", moral: "Having made the whole island dance to his art, the magician chose to set the art down and step to the edge of his tale to speak to us. At the summit, the deepest move is a maker who knows he is making, and chooses." }
  ]
};
export default story;
