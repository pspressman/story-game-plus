// enfeoffment-decree.js  L10 summit. Band B8, cosmic register. Gate: destinies sealed; what will have been.
const story = {
  id: "enfeoffment-decree",
  title: "The Decree That Names the Gods",
  icon: "📜",
  difficulty: "Master",
  theme: "Fates sealed from above the whole war",
  estimatedTime: "5-10 min",
  description: "When the great war ends, a single decree assigns every fallen hero an everlasting place among the gods. Read a story told from so high that each ending was, all along, a beginning.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "China",
    region: "East Asia",
    saga: "investiture",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "In the great war between the falling Shang dynasty and the rising Zhou, gods, immortals, and magicians fought alongside armies, and countless heroes fell on every side. When at last the war was won, the sage Jiang Ziya climbed a high terrace and unrolled the Investiture, a heavenly decree. From it he read out, one by one, the name of each fallen spirit and the everlasting divine office it would now hold." },
    {
      type: "question",
      domain: "destiny",
      band: "B8",
      grammar_cell: "future_perfect",
      gates: true,
      question: "As the decree is read, a hero who died in battle is named the god of a star, another the god of a river. Seen from the height of the decree, what has each hero's death turned out to be?",
      options: [
        "A simple, final end with nothing after",
        "The doorway to the office the decree had been waiting to give, so that by the close each death will have become the start of a divine role",
        "A mistake to be undone",
        "A punishment for losing"
      ],
      correctAnswer: 1,
      explanation: "From the cosmic height the story speaks a strange register: every ending was already a beginning. Read from the decree, each fall will have become an appointment, the war reframed as the sorting of spirits into the offices they were always going to hold."
    },
    {
      type: "question",
      domain: "destiny",
      band: "B8",
      grammar_cell: "passive_voice",
      gates: true,
      question: "The heroes do not choose their new offices; they are named to them by the decree, friend and foe alike. What does this tell you about the vantage the story is told from?",
      options: [
        "That the heroes are still fighting",
        "That the tale is told from above the whole war, where even the enemies are being placed into one ordered heaven by a single hand",
        "That the decree can be argued with",
        "That only the winners are remembered"
      ],
      correctAnswer: 1,
      explanation: "The naming is done to them, from above. The vantage is higher than any army: a view from which both sides are gathered into one cosmic order. At the summit, a story can be told from so far up that winners and losers alike are simply being filed into their places."
    },
    {
      type: "question",
      domain: "destiny",
      band: "B8",
      grammar_cell: "past_perfect",
      gates: true,
      question: "By the decree's telling, the offices had in a sense been set aside for these spirits before the war even ended. How does that change the meaning of all the fighting that came before?",
      options: [
        "It makes the war meaningless",
        "It reframes the whole war as the long process by which each spirit arrived at the place that had been prepared for it, so the battles read as a sorting toward fixed ends",
        "It proves no one really died",
        "It means the war never happened"
      ],
      correctAnswer: 1,
      explanation: "Held from the cosmic vantage, the war becomes the path to appointments that had been waiting all along. The grand register folds the whole struggle into a destiny already laid out, so the fighting reads forward and backward at once."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "What did Jiang Ziya read aloud from the high terrace at the war's end?",
      options: [
        "The Investiture decree, naming each fallen spirit to an everlasting divine office",
        "A list of the living soldiers' wages",
        "A treaty between two kings",
        "The rules of a new game"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the decree assigns the dead their divine offices. Here it frames the cosmic register rather than testing the destiny vantage."
    },
    { type: "story", text: "One by one the names were read, and a war full of grief became a heaven full of gods, each fallen hero at last in the place the decree had held for them all along." },
    { type: "story", moral: "Told from high enough, every ending is an appointment kept. At the summit a story can speak in the register of fates already sealed, where what happened was always going to have been." }
  ]
};
export default story;
