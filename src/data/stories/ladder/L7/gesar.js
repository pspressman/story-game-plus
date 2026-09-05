// gesar.js  L7, B4 unreal past. Tibetan/Mongolian living epic. cultural_care flagged for HARPER. Gate: rebuild and price.
const story = {
  id: "gesar",
  title: "King Gesar's Long Forgetting",
  icon: "🐎",
  difficulty: "Hard",
  theme: "The harm done while a hero is away",
  estimatedTime: "5-10 min",
  description: "A heaven-sent king is meant to guard his people, but an enchantment makes him forget his purpose and linger far away. Rebuild the homecoming that should have come sooner, and weigh the cost of the years he lost.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Tibetan and Mongolian",
    region: "Central Asia and the Himalaya",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "Tibetan and Mongolian living epic, publicly sung by Gesar bards. Highest care of the openly-held set: flag whose framing, since Tibet, Mongolia, and China are all in play, including state instrumentalization. The care here is as much about framing as about telling.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "King Gesar was sent from the heavens to protect his people, to drive off demons and tyrants and guard the land of Ling. He won great victories. But far from home, an enchantment clouded his mind, and for a long while he forgot his purpose and lingered, his great mission slipping out of memory, while back in his kingdom an old enemy gathered strength." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Gesar lingered far away, his purpose dimmed, while his people waited. If he had returned the moment he was first needed, what would have been spared?",
      options: [
        "Nothing; the harm was fated",
        "The suffering his people endured in his absence, since the enemy would have had no time to harm them",
        "Only a single day of trouble",
        "His own crown"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where he comes home in time. Gesar's strength was never in doubt; only his presence. So the timely return undoes the harm entirely, and the grief is measured by how long he stayed away."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "While Gesar forgot, the enemy advanced. Price the delay: because he was away so long, what does he find when at last his memory returns and he rides home?",
      options: [
        "A kingdom exactly as he left it",
        "A land harmed and people who have suffered, losses that his presence would have prevented",
        "A throne offered to someone else by choice",
        "That no time had passed"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from the long forgetting to the homecoming: because the years were lost, the harm is already done when he arrives. He returns mighty as ever, only to meet the cost of having been gone."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Gesar was sent to keep his mission always before him. If he had never let it slip from memory at all, how would his story have gone?",
      options: [
        "The same, with the same losses",
        "Without the grief of the long absence, the harm that came only because he forgot never happening at all",
        "With more enemies, not fewer",
        "Without any victories"
      ],
      correctAnswer: 1,
      explanation: "Hold the branch of unbroken purpose. The losses in this part of the tale flow not from any defeat but from forgetting. Keep the mission in mind, and that whole sorrow simply never opens."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Gesar come to the land in the first place?",
      options: [
        "He had been sent from the heavens to protect his people and drive off demons and tyrants",
        "He had come seeking treasure",
        "He had been exiled there",
        "He had lost his way while traveling"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: he was sent to guard his people. Here it frames the duty he forgets rather than testing the branch. (Details vary across the living tradition.)"
    },
    { type: "story", moral: "A hero strong enough to save his people forgot, for a while, that they needed saving, and the harm came not from any defeat but from his absence. To read it is to weigh the homecoming that should have come sooner." }
  ]
};
export default story;
