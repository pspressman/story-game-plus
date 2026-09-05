// secret-history-mongols.js  L9, B6 recursion. Target: nested_reported_speech. Gate: a mind reporting a mind reporting a mind.
const story = {
  id: "secret-history-mongols",
  title: "The Word Carried Across the Steppe",
  icon: "🏇",
  difficulty: "Advanced",
  theme: "Khans who act on what envoys carry",
  estimatedTime: "5-10 min",
  description: "Across the vast steppe, khans speak to one another only through envoys who carry their words for days. Track whose voice an envoy truly speaks with, and what is risked when the message is bent.",
  meta: {
    level: 9,
    track: "gated",
    tier: "O",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "nested_reported_speech",
    culture: "Mongolia",
    region: "Central Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The oldest book of the Mongols tells of Temujin, who would become Genghis Khan, in the days when the clans were scattered across an enormous grassland. A khan could not simply walk to another; he sent an envoy, who rode for days and then spoke the khan's words aloud, as if the khan himself were speaking through the rider's mouth." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "An envoy arrives and declares a message of peace. Whose words is he truly speaking?",
      options: [
        "His own; he decided the message himself",
        "His khan's, carried in his mouth, so the listening khan hears one man's voice speaking another man's will",
        "The listening khan's own words, repeated back",
        "No one's; he is only making conversation"
      ],
      correctAnswer: 1,
      explanation: "The envoy is a voice for an absent khan. Track the seam: the rider speaks, but the words and the will are his master's. A khan who answers him is answering the khan behind him, not the rider."
    },
    { type: "story", text: "Sometimes the messages nested deeper still. An envoy came to Temujin and said that a rival chief had sworn to him that a third clan had been planning a night raid. So Temujin had to weigh a warning that reached him through a rival's claim, carried by an envoy." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "The envoy says that a rival chief swore that a third clan had planned a raid. How many tellers stand between Temujin and the third clan's supposed plan?",
      options: [
        "None; Temujin saw the third clan preparing",
        "Two: the rival chief, who claimed it, and the envoy, who carried the rival's claim",
        "Only the envoy",
        "Three or more"
      ],
      correctAnswer: 1,
      explanation: "Track the layers: the third clan's plan reaches Temujin through a rival's sworn claim, carried by an envoy. He is two tellers away from anything the third clan actually did, judging a warning shaped by whoever passed it."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Why must Temujin be especially careful with a warning nested this deep, before he strikes the third clan?",
      options: [
        "Because warnings are always false",
        "Because a rival had every reason to invent or twist such a claim, and the envoy may have carried it imperfectly, so acting on it could start a needless war",
        "Because the third clan is too strong to fight",
        "Because envoys are never trusted at all"
      ],
      correctAnswer: 1,
      explanation: "The deeper the claim, the more it could have been shaped to serve the teller. A rival benefits if Temujin attacks the third clan. Tracking the seams means asking who gains from the relayed warning before drawing a sword on it."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Why did the khans of the steppe speak to one another through envoys rather than directly?",
      options: [
        "Because the clans were scattered across an enormous grassland, days apart",
        "Because they could not speak each other's language",
        "Because it was forbidden to meet in person",
        "Because they disliked one another"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: vast distances made envoys necessary. Here it frames why all the words are relayed rather than testing the nesting."
    },
    { type: "story", moral: "On the steppe a khan's will rode in another man's mouth, and a warning might be a rival's claim relayed. To follow it is to ask whose voice an envoy carries, and who gains if it is believed." }
  ]
};
export default story;
