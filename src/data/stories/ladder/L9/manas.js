// manas.js  L9, B6 recursion. Target: nested_reported_speech. Gate: a mind reporting a mind reporting a mind.
const story = {
  id: "manas",
  title: "Manas and the Bards Who Carry Him",
  icon: "🎶",
  difficulty: "Advanced",
  theme: "A hero alive only because the telling never stops",
  estimatedTime: "5-10 min",
  description: "The great Kyrgyz hero Manas is kept alive by reciters who learned him from reciters before them. Track how the hero reaches a listener, and how the tellers become part of the tale.",
  meta: {
    level: 9,
    track: "gated",
    tier: "A",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "nested_reported_speech",
    culture: "Kyrgyz",
    region: "Central Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "Kyrgyz national epic, performed in the manaschi tradition - credit it specifically. Openly and proudly shared; care = accuracy and specific crediting.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The Kyrgyz people have an epic so vast it takes days to recite: the story of the hero Manas, who united the scattered tribes. It was never a written book. It lives in the mouths of special reciters, the manaschi, who learned it from the manaschi before them, who learned it from those before them, back through many lifetimes." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "A child listening today hears the deeds of Manas from a reciter. How have those deeds reached the child?",
      options: [
        "The child witnessed them in person",
        "Through a long chain of reciters, each having learned the tale from the one before, carrying Manas down across the generations to this telling",
        "From a single book written by Manas himself",
        "The child invented them"
      ],
      correctAnswer: 1,
      explanation: "Manas reaches the child through tellers inside tellers across time. Track the chain: each reciter carries what an earlier reciter carried, so today's telling holds every reciter who ever passed it on, all the way back."
    },
    { type: "story", text: "And within the epic, words are carried too. In one part, a messenger comes to Manas and says that the enemy khan had boasted to his warriors that he would crush the Kyrgyz before winter. Manas must decide what to do, knowing of the boast only through the messenger." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "The messenger says the enemy khan had boasted to his warriors of crushing the Kyrgyz. How does Manas learn of the boast?",
      options: [
        "He stood among the enemy and heard it himself",
        "Through the messenger, who carries to Manas what the khan said to his own warriors, a boast relayed across the line",
        "The enemy khan told Manas directly",
        "Manas dreamed it"
      ],
      correctAnswer: 1,
      explanation: "Track the seam: the khan boasted to his warriors, and a messenger carried that boast to Manas. The threat reaches Manas wrapped in the messenger's telling, never from the khan's own mouth to his ear."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The Kyrgyz say that as long as Manas is recited, the people know who they are. What is strange and looping about that?",
      options: [
        "Nothing; it is just a saying",
        "The tellers are part of what they tell: the people keep Manas alive by reciting him, and Manas keeps the people knowing themselves, each holding up the other",
        "Manas wrote the reciters into the story",
        "The reciters are forbidden to appear in the tale"
      ],
      correctAnswer: 1,
      explanation: "Here the recursion turns on the tellers themselves. The reciters carry Manas, and Manas carries the people's sense of themselves, so the telling and the told fold into each other, a story that keeps alive the very people who keep it alive."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "simple_present",
      gates: false,
      question: "Why do the manaschi keep reciting the enormous epic of Manas, generation after generation?",
      options: [
        "To carry the hero and the people's story onward, keeping both alive in memory",
        "Because they are paid by the word",
        "Because no one will let them stop",
        "To put their listeners to sleep"
      ],
      correctAnswer: 0,
      explanation: "A reach back to reading intent: the reciting preserves both hero and people. Here it frames the living chain rather than testing the nesting."
    },
    { type: "story", moral: "Manas lives only because reciters carry him from mouth to mouth across the ages, and the carriers are part of what they carry. To follow it is to hear every teller folded into the tale." }
  ]
};
export default story;
