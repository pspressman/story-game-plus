// cu-chulainn-boyhood.js  L2, B2. Ireland. How Setanta became Cu Chulainn.
const story = {
  id: "cu-chulainn-boyhood",
  title: "How the Boy Became the Hound",
  icon: "🐕",
  difficulty: "Easy",
  theme: "Setting right what you have undone",
  estimatedTime: "4-7 min",
  description: "A boy arrives late to a feast, meets a fierce guard dog that does not know he is a guest, and afterward makes an offer that earns him a new name.",
  meta: {
    level: 2,
    track: "gated",
    tier: "A",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "past_perfect",
    culture: "Ireland",
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
    { type: "story", text: "A young boy named Setanta was invited to a feast at the house of Culann the smith, but he arrived late, after the others had gone in. Culann, thinking all his guests had come, had already loosed his great guard hound for the night, a fierce dog that watched the house. The hound did not know the late-coming boy was a guest, and it rushed at him." },
    {
      type: "question",
      domain: "cause",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Why did the hound attack Setanta?",
      options: [
        "Because Setanta had hurt it earlier",
        "Because Culann had already loosed it for the night, and it did not know the late boy was a welcome guest",
        "Because the boy had thrown stones at it",
        "Because the hound was always cruel to children"
      ],
      correctAnswer: 1,
      explanation: "Track the cause and what came before. The dog was not wicked; it had been set loose to guard, and no one had told it a guest still lay outside. It attacks because, as far as it knows, a stranger is approaching the house in the dark."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Setanta had to kill the hound to defend himself, and Culann was grieved to lose his loyal guard. What did the boy then offer to do?",
      options: [
        "To leave at once and never return",
        "To guard Culann's house himself until a new hound could be reared, taking the dog's place",
        "To buy Culann ten new dogs",
        "To blame Culann for the loss"
      ],
      correctAnswer: 1,
      explanation: "Read the aim behind the offer. The boy does not just apologize; he sets out to repair the loss he caused, standing guard himself in the hound's place. His purpose is to make right the harm, not merely to feel sorry for it."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B2",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Because of his offer, the boy earned a new name. What had he become, in name, by the end?",
      options: [
        "The Smith of Culann",
        "Cu Chulainn, meaning the Hound of Culann, for taking the hound's place",
        "The Lord of the Feast",
        "The Boy Who Ran Away"
      ],
      correctAnswer: 1,
      explanation: "Follow the events to their end. By offering to guard the house himself, he has earned the name the Hound of Culann. The new name is the mark of how he chose to mend what he had broken."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why was Setanta out alone when the hound rushed at him?",
      options: [
        "He had arrived late to the feast, after the others were already inside",
        "He had been thrown out of the house",
        "He was hunting the hound on purpose",
        "He lived in the woods nearby"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the setup: he came late, after the guard dog was loosed. Here it frames the encounter rather than testing cause or intent."
    },
    { type: "story", moral: "The boy caused a loss without meaning to, and then chose to stand in the very place he had emptied. To make right a harm you caused is how a name worth keeping is earned." }
  ]
};
export default story;
