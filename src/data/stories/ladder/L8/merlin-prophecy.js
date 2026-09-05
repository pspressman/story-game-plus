// merlin-prophecy.js  L8, B5. Arthurian, pending HARPER. Reported speech: a prophecy relayed.
const story = {
  id: "merlin-prophecy",
  title: "Merlin and the Two Dragons",
  icon: "🐉",
  difficulty: "Advanced",
  theme: "Holding what a wise man foretold",
  estimatedTime: "5-9 min",
  description: "A king's tower keeps falling, and the boy Merlin tells him why, and what is yet to come. Follow a prophecy that reaches you only because someone reported it.",
  meta: {
    level: 8,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Britain",
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
    { type: "story", text: "A king was trying to build a great tower, but every night what had been built by day fell down again. His wise men were baffled. Then a boy named Merlin was brought before him, and Merlin told the king that beneath the foundation lay a hidden pool, and beneath the pool slept two dragons, one red and one white. The dragons, he said, woke each night to fight, and their struggle shook the tower to the ground." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "No one had seen the dragons; the king learns of them only because Merlin told him. When the workers dig and find the pool and the two dragons exactly as described, what has been confirmed?",
      options: [
        "That the king had known all along",
        "That what Merlin reported was true, the hidden cause reaching the king through Merlin's telling and then proven by the digging",
        "That dragons build towers",
        "That the wise men had been right"
      ],
      correctAnswer: 1,
      explanation: "Hold the layer of telling. The buried cause was invisible; it came to the king as Merlin's words, a claim about what lay below. The digging tests that report against the world, and finding the dragons shows the telling was true."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Merlin went further and foretold that the white dragon would win for a time, but the red dragon would later rise again. As you read this, what exactly are you tracking?",
      options: [
        "Something you have watched happen yourself",
        "What Merlin said would happen, a prophecy reported to you, a telling about a future that has not yet come",
        "A plain fact about the present",
        "A story the dragons told"
      ],
      correctAnswer: 1,
      explanation: "Keep two distances in mind at once: the events are in the future, and they reach you as Merlin's reported words. You are not seeing the future; you are holding an account of it, told by one voice and passed on to you."
    },
    {
      type: "question",
      domain: "cause",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Why had the tower kept falling, according to what Merlin revealed?",
      options: [
        "Because the stones were too heavy",
        "Because the two buried dragons, fighting each night, shook the ground so that nothing built above could stand",
        "Because the king built it in the rain",
        "Because the workers were lazy"
      ],
      correctAnswer: 1,
      explanation: "Track the hidden cause that Merlin's telling brought to light. The collapse was not poor building but the dragons' nightly battle below. The cause was real all along; it simply could not be known until it was reported."
    },
    {
      type: "question",
      domain: "report",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "What did Merlin say lay beneath the king's tower?",
      options: [
        "A hidden pool, and beneath it two dragons, one red and one white",
        "A buried treasure",
        "A sleeping giant",
        "Nothing at all"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of what Merlin reported: a pool and two dragons. Here it names the claim rather than testing the layers of telling and foretelling."
    },
    { type: "story", moral: "The hidden cause and the coming future both reached the king the same way, as Merlin's words, and only the digging could test them. To read a prophecy is to hold what was foretold, knowing it comes to you through a teller." }
  ]
};
export default story;
