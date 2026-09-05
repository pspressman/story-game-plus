// sundiata.js  L7, B4 the unreal past. Target: conditional. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "sundiata",
  title: "Sundiata, the Lion of Mali",
  icon: "🦁",
  difficulty: "Hard",
  theme: "The boy who could not walk, and the empire that hung on it",
  estimatedTime: "5-10 min",
  description: "A mocked, crippled boy is the only hope of a people under a tyrant. Rebuild the branches where he never rises, and weigh what would have been lost.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Mali",
    region: "West Africa",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Sundiata was born a prince of Mali, but as a child he could not walk, and the court mocked him and his mother. When his father died, a rival seized the throne, and Sundiata and his mother were driven into exile to wander far from home. It seemed the lion would never roar." },
    { type: "story", text: "But one day, stung by an insult to his mother, the boy called for an iron bar, gripped it, and slowly, painfully, pulled himself upright. The iron bent like a bow in his hands as he rose at last to his full height and took his first steps. From that day he grew into a warrior of great strength." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "As a boy Sundiata could not walk and was scorned by everyone. If he had never found the will to rise to his feet, what would the future have lost?",
      options: [
        "Nothing; another king would have done the same",
        "The warrior who would free his people and found the great empire of Mali, for none of it could have happened from the floor",
        "Only his own pride",
        "A single battle, no more"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where the boy stays down: no rising means no warrior, and no warrior means no empire. The whole future of Mali is priced against one painful effort to stand."
    },
    { type: "story", text: "Back in Mali, the sorcerer-king Soumaoro ruled as a cruel tyrant, and the people suffered under him. They remembered the exiled prince and sent messengers across the land begging Sundiata to return and deliver them." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Sundiata was safe in exile while his homeland groaned under Soumaoro. If he had chosen to stay away and not answer their call, what would have become of his people?",
      options: [
        "They would have freed themselves easily without him",
        "They would have remained under the tyrant, and the kingdom that became Mali would never have risen",
        "Soumaoro would have stepped down on his own",
        "Nothing would have changed for anyone"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch of the road not taken: an exile who never returns leaves his people in chains and the empire unborn. Pricing it means seeing how much rode on his choice to go back into danger."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Sundiata returned, defeated Soumaoro, and founded a great empire remembered to this day. Holding the lost branches, if that mocked boy had never risen and returned, what would the world remember now?",
      options: [
        "Exactly the same empire under a different name",
        "Neither the lion king nor the Mali he built, only a tyrant's reign and a prince who stayed down",
        "A larger empire built by someone else",
        "Nothing different at all"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from the boy on the floor to the empire in memory now: no rising, no return, no Mali to remember. The reader holds the whole later world against the small moment it grew from."
    },
    { type: "story", text: "So the boy who could not walk became Sundiata, the Lion of Mali, who freed his people and founded an empire whose name endures. All of it had hung, once, on whether a scorned child would find the strength to stand." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did the people of Mali send messengers to the exiled Sundiata?",
      options: [
        "To beg him to return and free them from the tyrant Soumaoro",
        "To tell him never to come back",
        "To offer him gold to stay away",
        "To ask him to teach them to walk"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: their suffering under Soumaoro is why they called him home. Here it frames the choice rather than testing the branch."
    },
    { type: "story", moral: "An empire remembered for centuries grew from a crippled boy gripping an iron bar. To read his tale is to hold the futures where he never rose, and to feel how much one effort to stand could carry." }
  ]
};
export default story;
