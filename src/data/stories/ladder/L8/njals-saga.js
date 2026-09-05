// njals-saga.js  L8, B5 a mind holding a mind. Target: reported_speech. Gate: track what was said across the seam.
const story = {
  id: "njals-saga",
  title: "Njal and the Carried Words",
  icon: "🔥",
  difficulty: "Advanced",
  theme: "A feud built out of what people said",
  estimatedTime: "5-10 min",
  description: "A long and deadly feud grows not from deeds seen but from words carried between households. Track what was actually done against what was merely said.",
  meta: {
    level: 8,
    track: "gated",
    tier: "O",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Iceland",
    region: "Northern Europe",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Njal was a wise man, known for his fairness and his gift for the law. His family and the family of his friend Gunnar lived near one another, and all might have been peaceful. But the wives and servants of the two households began to carry sharp words back and forth, each telling that the other side had said something insulting." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "The trouble between the households grows as people carry words between them. Is the feud driven by harms the families actually saw each other commit, or by what each is told the other side said?",
      options: [
        "By harms each clearly saw the other commit",
        "By what each is told the other said, so the killing grows from carried words, true or twisted, rather than witnessed deeds",
        "By a single battle everyone watched",
        "By a written contract gone wrong"
      ],
      correctAnswer: 1,
      explanation: "The feud feeds on reports, not on things seen. Tracking the seam means seeing that each new wound answers a saying carried from elsewhere, and a household acts on what it was told the other said, which may bend further with every teller."
    },
    { type: "story", text: "Each insult carried across led to an answer, and each answer to a killing, and each killing demanded revenge. Wise Njal and brave Gunnar tried again and again to make peace and pay compensation, but the carried words kept the wound open, and blood kept being spilled." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "At the great law assembly, a man stands and declares that he heard the accused admit to a killing. The court did not see the killing. What must it now weigh?",
      options: [
        "The killing itself, witnessed by all",
        "The spoken testimony, which stands in for a deed no one in the court saw, so the judgment rests on what the witness says he heard",
        "A confession written by the accused",
        "Nothing; the case is dropped"
      ],
      correctAnswer: 1,
      explanation: "In the law, words carry the weight of deeds done out of sight. Tracking what was said means seeing that the court judges a reported admission, not the act itself, so everything turns on the testimony of what was heard."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "A servant tells her mistress that the neighbors had mocked her at a feast the day before. By the time the mistress hears it and flares into anger, when was the mocking supposed to have happened?",
      options: [
        "It is happening right then, in front of her",
        "It had happened earlier, at the feast, so she rages at a thing already past and known to her only by the servant's report",
        "It has not happened yet and may be prevented",
        "It never happened and the servant invented it on the spot"
      ],
      correctAnswer: 1,
      explanation: "The servant reports a slight already given, so the mocking sits earlier than the telling of it. Tracking across the seam means placing the deed in the past and seeing that the mistress answers a finished event she only heard about, never saw."
    },
    { type: "story", text: "In the end the long feud could not be quenched, and Njal and his family were burned in their own home by their enemies. The wise man who had spent his life settling quarrels with words was undone by the words that others carried." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "What kept driving the feud between the two families?",
      options: [
        "Carried words and insults passed between the households, true or twisted",
        "A dispute over a single field",
        "An invasion from another country",
        "A disagreement about the law of the land only"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the carried words kept the wound open. Here it names the engine of the feud rather than testing the tracking of what was said."
    },
    { type: "story", moral: "A peace-loving man was burned by a feud made of what people said. To read it is to weigh deeds seen against words carried, and to watch how a saying can spill blood." }
  ]
};
export default story;
