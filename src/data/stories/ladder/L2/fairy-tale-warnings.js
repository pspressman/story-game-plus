// fairy-tale-warnings.js  L2, B2. COLLAPSED node: Snow White + Sleeping Beauty + Little Red Riding Hood as one.
const story = {
  id: "fairy-tale-warnings",
  title: "Three Warnings: the Apple, the Wolf, and the Spindle",
  icon: "🍎",
  difficulty: "Easy",
  theme: "Danger hidden behind a friendly or harmless face",
  estimatedTime: "5-8 min",
  description: "A kind old peddler, a soft-spoken grandmother, a pretty little spindle. In three famous tales, harm hides behind something that looks safe, and a warning was meant to keep it out.",
  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "past_perfect",
    culture: "European",
    region: "Western Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "In one tale, a wolf puts on a grandmother's cap and speaks in a soft, kind voice to a girl in a red hood. In another, a wicked queen disguises herself as a friendly old peddler and offers Snow White a lovely red apple. In a third, a harmless-looking spindle waits for Sleeping Beauty, though her family had been warned of the danger in it. In each, the harm hides behind something that seems safe." },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "The wolf wears the grandmother's cap and speaks softly and sweetly. Behind that kind-seeming face, what does the wolf really intend?",
      options: [
        "To keep the girl company and be her friend",
        "To trick the girl and harm her, hiding a dangerous aim behind a gentle voice",
        "To give the girl a present",
        "To guide the girl safely home"
      ],
      correctAnswer: 1,
      explanation: "Look past the soft voice to the aim beneath it. The wolf speaks kindly on purpose, so the girl will not run. The friendly face is the disguise; the harmful intent is the truth underneath it."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "The queen had disguised herself as a kind old peddler before offering Snow White the apple. Why did she hide who she really was?",
      options: [
        "Because she was shy",
        "So that Snow White would not see the danger and would trust her enough to take the apple",
        "Because she had lost her crown",
        "Because peddlers sell more apples"
      ],
      correctAnswer: 1,
      explanation: "Read why the mask is worn. If Snow White had known the queen, she would have been on guard. The disguise exists to slip the harm past her, turning a wary girl into a trusting one. The kind face is a tool of the cruel aim."
    },
    {
      type: "question",
      domain: "cause",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "In each tale, someone had given a warning beforehand: do not open the door to strangers, do not stray from the path, beware the spindle. Why do such warnings exist?",
      options: [
        "To spoil the fun",
        "Because someone had already seen the hidden danger, and the warning was meant to guard against harm that comes disguised or overlooked",
        "Because grown-ups dislike children",
        "For no real reason at all"
      ],
      correctAnswer: 1,
      explanation: "Connect the warning to the danger it answers. A warning is not an empty rule; it is someone's foresight, passed on. Each tale shows what slips through when the hidden danger is not watched for, which is exactly what the warning tried to prevent."
    },
    {
      type: "question",
      domain: "intent",
      band: "B1",
      grammar_cell: "simple_present",
      gates: false,
      question: "What do the dangerous figures in these tales have in common?",
      options: [
        "They hide their true, harmful intent behind a kind or harmless appearance",
        "They are always loud and obviously frightening",
        "They never speak at all",
        "They warn the children themselves"
      ],
      correctAnswer: 0,
      explanation: "A plain naming of the shared pattern: the danger wears a safe-looking face. Here it states the common thread rather than testing a single tale's hidden aim."
    },
    { type: "story", moral: "A soft voice, a kind smile, a pretty little thing: in each tale the harm hid behind something that looked safe, and a warning was meant to keep it out. Look past the friendly face to what lies behind it." }
  ]
};
export default story;
