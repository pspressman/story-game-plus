// oath-peach-garden.js  L10 summit. Band B7, the bond as a unit. Gate: the relation, not the men.
const story = {
  id: "oath-peach-garden",
  title: "The Oath in the Peach Garden",
  icon: "🌸",
  difficulty: "Master",
  theme: "Three men who become one bond",
  estimatedTime: "5-10 min",
  description: "Three strangers swear brotherhood among the peach blossoms and become a single thing that the whole long war turns on. Read the bond as the unit, not the men apart.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B7",
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
    { type: "story", text: "In a time of war and chaos, three strangers met and found in one another a single purpose: Liu Bei, the gentle leader; Guan Yu, the mighty and loyal; and Zhang Fei, the fierce and bold. In a garden full of blossoming peach trees they swore an oath of brotherhood, vowing that though they were born on different days, they would die on the same one, and that together they would serve their country and protect the weak." },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "present_perfect",
      gates: true,
      question: "After the oath, the three are spoken of and act almost as a single thing through the whole long war. What has the peach-garden oath really created?",
      options: [
        "Three rivals competing for the same throne",
        "One bond that is itself a unit, so that to deal with any one brother is to deal with all three",
        "A simple business partnership",
        "Three strangers who soon forget one another"
      ],
      correctAnswer: 1,
      explanation: "Read the relation as the thing, not the three men separately. The oath fuses them into a single bond that the epic treats as one actor, so a blow to one is a blow to all, and the brotherhood, not any brother, becomes what the story turns on."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "first_conditional",
      gates: true,
      question: "Years later, when one brother is killed by an enemy, what does the oath demand the others do, even against all cold strategy?",
      options: [
        "Quietly accept the loss and make peace",
        "Avenge him, because the bond binds them as one, so the death of a brother is a wound to the whole unit that cannot be left unanswered",
        "Forget the oath, since the war has changed",
        "Replace him with a new brother"
      ],
      correctAnswer: 1,
      explanation: "The bond rules even when it is unwise. Because the three are one, the killing of a brother pulls the others into revenge against careful counsel. To read it you must hold the brotherhood as the unit whose logic overrides each man's separate interest."
    },
    {
      type: "question",
      domain: "bond",
      band: "B7",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Enemies and allies alike learn that you cannot truly win over just one of the three. Why must they reckon with the bond rather than the man?",
      options: [
        "Because the three look identical",
        "Because each brother's choices are governed by the oath, so to predict or move any one of them you must account for all three as a single will",
        "Because only Liu Bei matters",
        "Because the brothers never speak to outsiders"
      ],
      correctAnswer: 1,
      explanation: "At this height the unit of thought is the relationship. To anticipate any brother, a rival must model the bond, since no brother acts as a free single man; each moves as part of the one thing they swore themselves into."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did the three men swear their oath in the peach garden?",
      options: [
        "Because they found a shared purpose and chose to bind themselves as brothers to serve their country together",
        "Because the law required it",
        "Because they were already related by blood",
        "Because an emperor commanded them to"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: a shared purpose led them to bind themselves. Here it frames the bond rather than testing how the bond acts as a unit."
    },
    { type: "story", text: "Through victory and defeat the three held to their oath, and the brotherhood of the peach garden became one of the most famous bonds in all of China's stories, remembered not as three men but as a single loyalty." },
    { type: "story", moral: "Three men swore themselves into one bond, and that bond, not any single brother, is what the war turned on. At the summit, the thing to read can be a relationship itself." }
  ]
};
export default story;
