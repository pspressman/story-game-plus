// falstaff-rejected.js  L7, B7 broken bond. History thread (Shakespeare's shaping), inaccuracy flagged.
const story = {
  id: "falstaff-rejected",
  title: "I Know Thee Not, Old Man",
  icon: "👑",
  difficulty: "Hard",
  theme: "A friendship cast off at the moment of triumph",
  estimatedTime: "5-10 min",
  description: "A wild prince and his old rogue of a companion were the closest of friends. On the day the prince becomes king, he turns and disowns him. Rebuild the friendship that might have been kept, and weigh the bond a crown broke.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B7",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "England",
    region: "British Isles",
    saga: null,
    source_epic: false,
    threads: [{ type: "history", inaccuracy_flag: true }],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "When he was a wild young prince, Hal spent his days in taverns with old Falstaff, a fat, boastful, warm-hearted rogue who loved the prince like a son and was sure that one day his royal friend would make his fortune. (This is the story as a famous playwright shaped it, not exact history.) Then the old king died, and Hal was crowned. Falstaff hurried to the coronation, calling out joyfully to his friend, certain of his reward." },
    {
      type: "question",
      domain: "if_only",
      band: "B7",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Falstaff and Hal had been close companions for years. If the new king had stayed the friend he once was, what would have met Falstaff at the coronation instead of cold words?",
      options: [
        "Exactly what he received",
        "Welcome and reward, the long friendship honored rather than cast aside",
        "A harsher punishment",
        "Nothing different"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where the bond holds. The friendship was real and Falstaff had built his hopes on it; a king who kept faith would have raised him up. That kept friendship is the bright branch against which the rejection lands so hard."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The new king looks at the friend who knew him best and says, I know thee not, old man. Beyond Falstaff's dashed hopes, what is broken in that moment?",
      options: [
        "Only a small debt of money",
        "The bond itself, a real friendship publicly unmade, the king choosing his crown over the man who loved him",
        "A quarrel that meant nothing",
        "A stranger's passing greeting"
      ],
      correctAnswer: 1,
      explanation: "Read the relationship as the thing destroyed. The words do not just deny a reward; they unmake a bond in front of everyone. The king severs the friendship on purpose, to be the man the crown needs, and the cost is a person who loved him."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B7",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Soon after, Falstaff dies, broken-hearted. Price the rejection: because the king cast him off, what does the old man lose that he had counted on for years?",
      options: [
        "A single night's lodging",
        "The friendship and place he had built his whole hope upon, so that the loss itself is what kills him",
        "A game of dice",
        "Nothing he truly needed"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from the public words to the lonely death: because the bond was broken, the old man's hope collapses, and he does not outlive it long. The grief is that the thing he trusted most was the thing taken away."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did the new king reject his old friend? (as the playwright tells it)",
      options: [
        "To show he had put aside his wild youth and become a serious king",
        "Because Falstaff had robbed him",
        "Because he had never liked Falstaff",
        "Because the law forced him to"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause, in the play's shaping: the king sheds his old life to prove himself changed. Real history was less tidy; here the reason frames the broken bond rather than testing it."
    },
    { type: "story", moral: "On the day he gained a crown, the new king lost a friend, and chose to. To read it is to hold the friendship that might have been kept, and to weigh the bond a single cold sentence broke." }
  ]
};
export default story;
