// nezha.js  L2, B2. Grammar adds future, past_perfect, infinitive, gerund, participle.
const story = {
  id: "nezha",
  title: "Nezha and the Anger of the Sea",
  icon: "🌊",
  difficulty: "Easy",
  theme: "Bold deeds and the choice to protect",
  estimatedTime: "4-7 min",
  description: "A powerful, headstrong child angers the lord of the sea, and then must choose what to do when his boldness puts his family in danger.",
  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "past_perfect",
    culture: "China",
    region: "East Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Nezha was no ordinary child. He had been born with great strength, and he loved testing it. One hot day, playing in the sea, he stirred the water so wildly that he disturbed the palace of the Dragon King far below. The Dragon King had ruled those waters for ages, and he was furious that a mere boy had shaken his halls." },
    {
      type: "question",
      domain: "cause",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Why did the Dragon King become furious with Nezha?",
      options: [
        "Because Nezha had refused to visit him",
        "Because Nezha's wild playing in the sea had disturbed the Dragon King's palace below",
        "Because Nezha had stolen his crown",
        "Because Nezha had insulted him in words"
      ],
      correctAnswer: 1,
      explanation: "Track the cause back a step. The boy had not meant to start a war, but his rough playing in the water shook the palace beneath. The anger follows from what his strength had done, not from any insult."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "The Dragon King threatened to punish Nezha's whole family for the trouble. Nezha chose to take the blame himself. What did he want to do?",
      options: [
        "To run away and hide from everyone",
        "To protect his family by bearing the punishment alone",
        "To start a bigger fight with the sea",
        "To blame the Dragon King instead"
      ],
      correctAnswer: 1,
      explanation: "Read the aim behind the choice. Nezha could have let others suffer, but his purpose was to shield his parents. He steps forward to carry the cost himself, so the harm falls on him and not on the family he wants to save."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B2",
      grammar_cell: "simple_future",
      gates: true,
      question: "Nezha knew that taking the blame would cost him dearly. What did he understand would happen next, once he stepped forward?",
      options: [
        "That nothing at all would change",
        "That he himself would face the punishment, sparing his family from it",
        "That the Dragon King would simply forgive everyone",
        "That the sea would dry up"
      ],
      correctAnswer: 1,
      explanation: "Look ahead with Nezha. He does not act blindly; he knows the cost is coming and chooses it anyway. The future he steps into is one where he pays so his family does not."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "What did Nezha disturb while playing in the sea?",
      options: [
        "The Dragon King's palace far below the water",
        "A fishing boat",
        "A flock of seabirds",
        "A sandcastle on the shore"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the event: his playing shook the Dragon King's palace. Here it sets the scene rather than testing cause or intent."
    },
    { type: "story", moral: "Nezha's boldness brought trouble, but when that trouble fell toward his family, he chose to carry it himself. Strength can stir up danger; what matters is what you do when the danger turns toward those you love." }
  ]
};
export default story;
