// empty-fort.js  L10 summit. Stacked. Gate: armies of minds anticipating each other. Spec exemplar C.
// Antagonist: Sima Yi (canonical), not the spec's Cao Cao. See parking register.
const story = {
  id: "empty-fort",
  title: "The Empty Fort",
  icon: "🏯",
  difficulty: "Master",
  theme: "Winning by being read correctly",
  estimatedTime: "5-10 min",
  description: "Almost without soldiers, the strategist throws the gates open and plays his lute in plain view. He wins by knowing exactly how his careful enemy will read a careful man.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "China",
    region: "East Asia",
    saga: "three_kingdoms",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The strategist Zhuge Liang was caught at a small fort with almost no soldiers when the great army of Sima Yi came marching toward him. He could not fight and could not flee in time. So he did the strangest thing: he flung the gates wide open, sent a few men to sweep the road calmly, and sat on the wall in plain sight, playing his lute, with two boys beside him." },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "By the time Sima Yi's scouts reach the wall, Zhuge Liang will have been playing his lute calmly for a long while, gates open, showing no fear. What is Zhuge Liang counting on this calm to make Sima Yi conclude?",
      options: [
        "That the fort is empty and easy to take",
        "That a famously careful man would never sit so exposed unless a deadly ambush were already hidden, so attacking would be a trap",
        "That Zhuge Liang has surrendered",
        "That the lute music is a call for reinforcements"
      ],
      correctAnswer: 1,
      explanation: "The bluff works through the enemy's own good judgment. Zhuge Liang counts on Sima Yi reasoning that such calm must mean a trap. The very caution that makes Sima Yi a fine general is the lever the empty fort pulls."
    },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Sima Yi thinks: Zhuge Liang knows I know he is careful, so he would not expose himself unless he meant me to think it safe; therefore it must be a trap. How many minds deep is Sima Yi reasoning here?",
      options: [
        "One: he just looks at the fort",
        "Several: he is thinking about what Zhuge Liang wants him to think, a mind reading a mind reading a mind",
        "None: he acts on instinct alone",
        "Two, but only about the soldiers"
      ],
      correctAnswer: 1,
      explanation: "This is the summit move: Sima Yi models Zhuge Liang modeling him. He out-thinks himself, layering anticipation upon anticipation until the safe reading looks like the dangerous one and he retreats from an empty wall."
    },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Sima Yi turns his whole army around and withdraws. If he had simply ignored the calm and ordered an attack, what would he have found?",
      options: [
        "A fortress packed with hidden soldiers",
        "An almost empty fort he could have taken at once, since the danger existed only in his own reasoning",
        "Zhuge Liang's escape tunnel",
        "A second army behind the hill"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch he did not take: a blunt attack would have walked into an undefended fort. The bluff had no real teeth. It worked entirely because Sima Yi was clever enough to talk himself out of the truth."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did Zhuge Liang open the gates instead of barring them?",
      options: [
        "Because an open, fearless gate sells the illusion of a trap, while a barred gate would invite the attack he could not survive",
        "Because the gates were broken",
        "Because he wanted fresh air for his music",
        "Because he meant to surrender the fort"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the open gate is the bluff, a closed one would have invited the assault he could not withstand. Here it frames the trick rather than testing the layered anticipation."
    },
    { type: "story", text: "Sima Yi, certain that so bold a display had to hide a deadly trap, withdrew his entire army. Only later did he learn the fort had been all but empty, and that he had been beaten not by soldiers but by his own careful mind." },
    { type: "story", moral: "The empty fort held no army, only a man who knew exactly how his enemy would think. At the summit, the sharpest weapon is a true picture of the other mind." }
  ]
};
export default story;
