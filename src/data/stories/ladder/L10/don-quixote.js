// don-quixote.js  L10 summit. B8, the man who knows he chooses the unreal.
const story = {
  id: "don-quixote",
  title: "Don Quixote and the Windmills",
  icon: "🌬️",
  difficulty: "Master",
  theme: "Choosing the giant while seeing the windmill",
  estimatedTime: "5-10 min",
  description: "An old gentleman rides out as a knight and charges windmills as if they were giants. The strange thing is not that he cannot tell the difference, but that, told the truth, he chooses the giant anyway.",
  meta: {
    level: 10,
    track: "gated",
    tier: "A",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "Spain",
    region: "Western Europe",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "An old gentleman had read so many tales of brave knights that he resolved to become one himself. He named his bony horse, called a farm girl his noble lady, and rode out to right the world's wrongs. Coming upon a field of windmills, he declared them monstrous giants and charged, lance lowered, while his squire Sancho shouted that they were only windmills." },
    {
      type: "question",
      domain: "self_aware",
      band: "B8",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Sancho tells him plainly they are windmills, and Quixote has eyes that work. What is strange about a man who can be told the truth and still charges the giant?",
      options: [
        "He is simply blind and cannot see the windmills",
        "He can see the windmill perfectly well, yet chooses the giant, living by the noble tale he has picked over the plain fact in front of him",
        "He has never heard the word windmill",
        "Sancho is lying to him"
      ],
      correctAnswer: 1,
      explanation: "This is the summit twist: Quixote is not merely fooled. He holds both the windmill and the giant, and chooses the giant on purpose, for the sake of the story he has decided to live inside. The choosing, not the seeing, is the heart of him."
    },
    {
      type: "question",
      domain: "self_aware",
      band: "B8",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "Adventure after adventure, inns become castles and flocks of sheep become armies. By the end of his ride, what will Quixote have been doing all along that sets him apart from an ordinary madman?",
      options: [
        "He will have been failing to notice the real world at all",
        "He will have been choosing, again and again, to live in the world of the ideal while the plain world stayed in plain view, a knowing choice rather than a simple mistake",
        "He will have been pretending only to amuse Sancho",
        "He will have been slowly forgetting he was ever a knight"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect register holds his whole life at once: across every adventure he will have been electing the ideal over the fact, with the fact never hidden from him. That sustained, knowing choice is what lifts him above a man who merely cannot tell the difference."
    },
    {
      type: "question",
      domain: "self_aware",
      band: "B8",
      grammar_cell: "second_conditional",
      gates: true,
      question: "If Quixote truly could not tell a windmill from a giant, he would simply be mad. Since he can, what makes him something more than that?",
      options: [
        "Nothing; he is exactly as mad as he seems",
        "That he chooses the unreal on purpose, for the sake of an ideal, so his madness is really a kind of devotion to a better world he insists on seeing",
        "That he is older than other knights",
        "That his horse is also enchanted"
      ],
      correctAnswer: 1,
      explanation: "Hold the branch where he is merely deluded against the one where he chooses. Because he could name the windmill and elects the giant, his folly becomes a willed loyalty to the ideal, the rarest thing the summit can ask you to read."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did the old gentleman set out as a knight in the first place?",
      options: [
        "He had read so many tales of knights that he resolved to revive their world and become one himself",
        "He had been ordered to by a king",
        "He had lost his home and needed work",
        "He had been challenged to a duel"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: a head full of knightly tales set him riding. Here it frames the choice rather than testing his self-aware embrace of the unreal."
    },
    { type: "story", moral: "He charged the windmill knowing it was a windmill, because he had chosen to live among giants. At the summit, a mind can knowingly choose the unreal and make of that choice its own kind of greatness." }
  ]
};
export default story;
