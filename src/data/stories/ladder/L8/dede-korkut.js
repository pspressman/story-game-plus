// dede-korkut.js  L8, B5 a mind holding a mind. Target: reported_speech. Gate: track what was said across the seam.
const story = {
  id: "dede-korkut",
  title: "Dede Korkut and the Naming of Boghach",
  icon: "🐂",
  difficulty: "Advanced",
  theme: "Acting on what you were told",
  estimatedTime: "5-10 min",
  description: "A boy earns his name by defeating a bull, but jealous men carry false words to his father. Track what is seen, what is merely said, and the gap between them.",
  meta: {
    level: 8,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Turkic",
    region: "Central Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Among the Oghuz people, no boy received a name until he had earned it. One day a maddened bull was loosed in the camp, and a young boy stood his ground, struck it down with a single blow of his fist, and saved the people. The wise bard Dede Korkut came forward and declared that the boy would be called Boghach, the bull-tamer." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Dede Korkut names the boy for what he has just done in front of everyone. Did the people learn of the boy's deed from someone's report, or from the deed itself?",
      options: [
        "Only from a report carried later",
        "From the deed itself, which they saw with their own eyes, so the name rests on what was witnessed, not merely said",
        "From a dream Dede Korkut had",
        "From the bull's own account"
      ],
      correctAnswer: 1,
      explanation: "Here the truth is seen, not just told, and the name stands on solid ground. Establishing that the deed was witnessed sets up the contrast: later, the father will have to act on words alone."
    },
    { type: "story", text: "Boghach grew into a fine young man, and his father was proud of him. But certain warriors of the camp grew jealous, and they went to the father and told him that his son had turned wicked, that the boy meant to seize his father's place and do him harm." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "The jealous warriors tell the father that his son means to harm him. Does the father see this betrayal himself, or act on what he is told?",
      options: [
        "He sees it clearly with his own eyes",
        "He acts only on what the jealous men said, never having witnessed any betrayal at all",
        "His son confesses it to him",
        "Dede Korkut warns him of it"
      ],
      correctAnswer: 1,
      explanation: "Unlike the witnessed deed at the bull, this danger reaches the father only as words. Tracking the seam means seeing that he is about to act on a claim he has not checked, and the whole trouble grows from trusting what was said over what was seen."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Later a messenger tells the boy's mother that her son had been struck down out hunting. By the time those words reach her, what is the state of the thing she is being told about?",
      options: [
        "It has not happened yet and may be prevented",
        "It has already happened; the wounding is in the past, and the news arrives after the fact",
        "It is happening at the very moment she hears it",
        "It will only happen if she believes the message"
      ],
      correctAnswer: 1,
      explanation: "When the message speaks of a son already struck down, the deed sits earlier than the telling. Tracking across the seam means placing the wounding in the past, with the news always lagging behind the event it carries."
    },
    { type: "story", text: "Misled by the jealous men's words, the father wounded his own son, but the boy survived, healed by his mother's care. In time the lie was uncovered, the jealous men were punished, and father and son were reconciled, the truth at last set straight." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Dede Korkut named the boy Boghach?",
      options: [
        "Because he had defeated a raging bull and saved the people",
        "Because his father had asked for the name",
        "Because he was the strongest in the camp by birth",
        "Because he had won a great battle"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the name was earned by the deed with the bull. Here it frames the contrast rather than testing the tracking of what was said."
    },
    { type: "story", moral: "A name was earned by a deed all could see; a wound was dealt on words alone. To read it is to weigh what is witnessed against what is merely told." }
  ]
};
export default story;
