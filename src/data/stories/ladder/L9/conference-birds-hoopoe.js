// conference-birds-hoopoe.js  L9, B6 recursion. Target: nested_reported_speech. Gate: a mind reporting a mind reporting a mind.
const story = {
  id: "conference-birds-hoopoe",
  title: "The Hoopoe's Tales, and the Seeker Who Was the Sought",
  icon: "🐦",
  difficulty: "Advanced",
  theme: "Stories relayed to persuade, and a mirror at the end",
  estimatedTime: "5-10 min",
  description: "The hoopoe answers each frightened bird not with a command but with a story, often a story holding another's words. And at the journey's end the seekers find the strangest nesting of all.",
  meta: {
    level: 9,
    track: "gated",
    tier: "R",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "nested_reported_speech",
    culture: "Persia",
    region: "Persia and Central Asia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The hoopoe led the birds toward their hidden king, the Simurgh, but at every step a frightened bird made an excuse. The hoopoe rarely ordered them on. Instead it answered each excuse with a story. To one bird it told the tale of a dervish, and inside that tale the dervish repeated what a great king had once said to him about longing." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "The hoopoe tells of a dervish who repeats what a king once said. When a listening bird hears the king's words about longing, how do those words reach it?",
      options: [
        "Straight from the king himself, who is present",
        "Through two tellers: the hoopoe voicing the dervish, who in turn repeats the king's old words",
        "Only from the dervish, who is speaking aloud",
        "From the bird's own memory"
      ],
      correctAnswer: 1,
      explanation: "Track the nesting: the hoopoe speaks, voicing a dervish inside its tale, and that dervish carries a king's remembered words. The king's saying reaches the bird wrapped twice over, in a story within a story."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The hoopoe could simply order the birds to be brave. Why answer each fear with a nested tale instead?",
      options: [
        "Because the hoopoe has forgotten how to give orders",
        "Because a lesson carried inside a borrowed story slips past a bird's fear better than a bare command would",
        "Because the hoopoe wants to delay the journey",
        "Because the birds cannot understand plain speech"
      ],
      correctAnswer: 1,
      explanation: "The relaying is the method. By placing courage inside a dervish inside a king's old words, the hoopoe lets each bird arrive at the lesson rather than be pushed to it. The nesting is how persuasion travels here."
    },
    { type: "story", text: "Many birds turned back, but at last thirty crossed the seven valleys and reached the Simurgh's court, worn and trembling. And there they found the strangest thing. In their own language, thirty birds is said si murgh, which is the very name Simurgh. The king they had sought was the thirty of them, together, reflected back." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "The thirty birds set out to find a great king, the Simurgh, and discover that the seekers and the sought are the same. What kind of twist is this?",
      options: [
        "A simple lie the hoopoe told them",
        "A loop that folds back on itself: the searchers were searching for themselves all along, the sought hidden inside the seekers",
        "A different king arriving at the last moment",
        "An ending with no meaning at all"
      ],
      correctAnswer: 1,
      explanation: "This is recursion at its deepest: the answer to the search was the searchers. Just as the hoopoe nested tale inside tale, the whole journey nests the sought inside the seeker, the mind finding itself at the center of what it chased."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did so many of the birds turn back before reaching the Simurgh?",
      options: [
        "Each made an excuse, clinging to a comfort or a fear",
        "The hoopoe forbade them to continue",
        "A storm blocked the only road",
        "They could not understand the hoopoe's stories"
      ],
      correctAnswer: 0,
      explanation: "A reach back to reading intent: each bird's attachment held it back. Here it frames the thinning flock rather than testing the nesting."
    },
    { type: "story", moral: "The hoopoe taught with stories inside stories, and the journey ended with the seekers folded into the sought. To follow it is to track every relayed tale, and to feel a search that loops back to where it began." }
  ]
};
export default story;
