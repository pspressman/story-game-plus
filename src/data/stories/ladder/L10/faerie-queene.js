// faerie-queene.js  L10 summit. B8, knights AS virtues. Open Field allegory-engine.
const story = {
  id: "faerie-queene",
  title: "The Knight Who Was Holiness",
  icon: "🛡️",
  difficulty: "Master",
  theme: "A virtue given a horse and a sword",
  estimatedTime: "5-10 min",
  description: "A knight rides out to fight a monster, but the knight stands for a virtue and the monster for a sin. Read a battle that is really an inner struggle made into a story.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "England",
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
    { type: "story", text: "In a land of marvels, a knight with a red cross on his shield rode out to slay a great dragon and free a kingdom. But this knight was no ordinary man: he was meant to stand for Holiness itself, and the dragon he fought stood for sin and error. Every blow of their battle carried a second meaning beneath the first." },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The knight stands for Holiness and the dragon for Error. When the knight strikes the dragon, what is the battle really showing beneath the swords and scales?",
      options: [
        "Only an exciting monster fight",
        "A virtue struggling against a vice, the inner fight between holiness and sin made visible as a battle you can watch",
        "A quarrel over treasure",
        "A game between friends"
      ],
      correctAnswer: 1,
      explanation: "Read the second meaning under the first. Because the knight is a virtue and the dragon a sin, their fight is the inner struggle of the soul turned into a story. The dragon is not just a beast; it is everything the virtue must overcome."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "future_perfect",
      gates: true,
      question: "The knight is wounded, falls, rises, and fights on across three long days. By the time the quest is finally won, what will he have gained, beyond a defeated dragon?",
      options: [
        "Only the dragon's gold",
        "The virtue made whole; he will have proven and become the holiness he was sent to stand for, the inner thing won along with the outer fight",
        "A larger sword",
        "A new kingdom to rule by force"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect carries both layers to the end: by the finish he will have won not just a battle but the virtue itself, made complete through the struggle. In an allegory the outer victory is always the sign of an inner one achieved."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Why give a virtue like Holiness a name, a horse, a shield, and a dragon to fight, instead of simply describing it?",
      options: [
        "Because virtues are boring otherwise",
        "So the inner life can be seen and followed as a story, the abstract thing turned into a knight whose struggles a reader can watch and feel",
        "Because the writer ran out of ideas",
        "Because knights are easier to draw"
      ],
      correctAnswer: 1,
      explanation: "Allegory makes the invisible visible. By dressing a virtue as a knight and a sin as a dragon, the inner struggle becomes something a reader can travel alongside. The story is a machine for showing what cannot otherwise be seen."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "What does the Redcrosse Knight stand for in the tale?",
      options: [
        "Holiness itself",
        "Simple greed",
        "A real historical king",
        "Nothing at all"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the allegory's key: the knight is Holiness. Here it names the figure rather than testing how the allegory works."
    },
    { type: "story", moral: "The knight was a virtue, the dragon a sin, and their battle the soul's own struggle made into a story. At the summit, a tale can give an abstract thing a sword and let you watch it win itself." }
  ]
};
export default story;
