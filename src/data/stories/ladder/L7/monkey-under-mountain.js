// monkey-under-mountain.js  L7, B4 the unreal past. Target: conditional. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "monkey-under-mountain",
  title: "Monkey Under the Mountain",
  icon: "🐒",
  difficulty: "Hard",
  theme: "Five hundred years to weigh one choice",
  estimatedTime: "5-10 min",
  description: "The Monkey King defies Heaven itself and is pinned under a mountain for five centuries. Rebuild the branch where he stayed his hand, and price what his pride cost him.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "China",
    region: "East Asia",
    saga: "journey_to_the_west",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Sun Wukong, the Monkey King, was born from stone and grew so powerful that he feared nothing. Drunk on his own strength, he stormed the halls of Heaven itself, scattered the gods, and declared himself their equal. No punishment seemed able to hold him." },
    { type: "story", text: "At last the Buddha set him a wager: if Monkey could leap out of the Buddha's palm, he would win Heaven. Monkey soared to the ends of the world and back, certain he had won, never knowing he had never left the Buddha's hand. The Buddha closed his fingers and sealed Monkey beneath a great mountain." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Monkey's pride drove him to defy Heaven and challenge the Buddha. If he had not rebelled, what would have followed?",
      options: [
        "He would have been pinned under the mountain anyway",
        "He would never have been sealed beneath the mountain at all, and would have kept his freedom",
        "Heaven would have fallen to him",
        "The Buddha would have rewarded him with the throne"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch his pride closed: no rebellion, no wager, no mountain. The five centuries of imprisonment exist only because he reached past every limit set for him."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Monkey now lies trapped under the mountain for five hundred years with nothing to do but think. Holding the lost branch, if he had been humbler in that hour of triumph, where would he be now?",
      options: [
        "Exactly where he is, under the mountain",
        "Still free and powerful, instead of pinned under stone for centuries paying for a single proud hour",
        "Already dead and forgotten",
        "Ruling Heaven in the Buddha's place"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from one past choice into his present prison: a humbler Monkey would be free now, not buried. Pricing it means feeling how five hundred years grew out of a single moment of pride."
    },
    { type: "story", text: "Under the mountain Monkey waited, century after century, his strength useless against the seal. Only long afterward, when the monk Tripitaka came journeying west, was Monkey freed, on the condition that he guard the monk and learn at last to master himself." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Monkey is freed only to serve and to learn humility on the long road west. Price the whole arc: because he had defied Heaven, what did those five hundred years under the mountain take from him that he could never get back?",
      options: [
        "Nothing; the time meant little to an immortal",
        "Five centuries of his freedom, spent pinned and helpless, the price of an hour he could not take back",
        "Only his magic staff",
        "His memory of who he was"
      ],
      correctAnswer: 1,
      explanation: "Pricing the branch means counting the cost in full: half a thousand years lost under stone, paid for one proud rebellion. The freedom he threw away in an afternoon took centuries to earn back, and those years were simply gone."
    },
    { type: "story", text: "So the Monkey King who had wanted to rule Heaven spent five hundred years learning the weight of a single choice, and only then began the long road toward becoming something wiser than his pride." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did the Buddha seal Monkey beneath the mountain?",
      options: [
        "To punish and humble his rebellion against Heaven",
        "To keep him safe from his enemies",
        "Because Monkey had asked to rest there",
        "To hide him from Tripitaka"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the imprisonment answers his defiance of Heaven. Here it frames the price rather than testing the branch."
    },
    { type: "story", moral: "Five hundred years under stone grew from one proud hour. To read his tale is to hold the freedom he might have kept, and to weigh what a single choice can cost." }
  ]
};
export default story;
