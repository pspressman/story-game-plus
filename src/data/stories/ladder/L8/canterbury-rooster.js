// canterbury-rooster.js  L8, B5 a mind holding a mind. Target: reported_speech. Gate: track what was said across the seam.
const story = {
  id: "canterbury-rooster",
  title: "The Rooster and the Fox",
  icon: "🐓",
  difficulty: "Advanced",
  theme: "A tale told of a tale told",
  estimatedTime: "5-10 min",
  description: "A traveler tells the others a story about a proud rooster, and inside it the rooster passes on what wise men long ago said about dreams. Keep track of who is really speaking.",
  meta: {
    level: 8,
    track: "gated",
    tier: "O",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "England",
    region: "British Isles",
    saga: "canterbury",
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A band of travelers on the road to Canterbury passed the time by telling one another stories. When it was one pilgrim's turn, he told a tale about a fine rooster named Chanticleer, who lived in a poor widow's farmyard and crowed more truly than any clock." },
    { type: "story", text: "In the pilgrim's tale, Chanticleer woke one morning groaning, and told his favorite hen that he had dreamed of a fearsome beast, red and houndlike, lurking to seize him. The hen scoffed and said the dream was nothing but a bit of bad digestion." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Chanticleer tells his hen that he had dreamed of a red beast. Across the seam of his telling, when did the dream happen, compared to his speaking of it?",
      options: [
        "The dream happens after he speaks",
        "The dream came first, in the night, and he speaks of it the next morning",
        "The dream and the speaking are the same event",
        "There was no dream"
      ],
      correctAnswer: 1,
      explanation: "He reports a dream already dreamed, so the dreaming sits earlier than the telling. Tracking across the seam places the night's dream before the morning's words about it."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "To prove dreams can warn of real danger, Chanticleer says that wise men long ago wrote that such dreams come true. Is Chanticleer claiming he himself has seen the future, or passing on what others said?",
      options: [
        "He is claiming to have seen the future himself",
        "He is passing on what others said, a claim resting inside his own claim",
        "He is making it up on the spot with no source",
        "He is repeating what the hen told him"
      ],
      correctAnswer: 1,
      explanation: "Chanticleer leans on the authority of others, not his own sight. Tracking the seam means hearing the layering: the pilgrim tells of the rooster, who in turn passes on what wise men once said, a voice within a voice within a voice."
    },
    { type: "story", text: "Despite the warning of his dream, Chanticleer let his guard down, and a sly fox crept into the yard. The fox flattered him, praising his wonderful voice, and coaxed him to shut his eyes and stretch his neck to crow his very best. The moment his eyes closed, the fox snatched him up and ran." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Caught in the fox's jaws, Chanticleer cleverly tells the fox to shout back at the chasing villagers that the rooster is his and they should give up. Track what happens when the fox opens his mouth to say it.",
      options: [
        "The fox holds the rooster even tighter",
        "To speak, the fox must open his jaws, and the instant he does, Chanticleer breaks free and flies up a tree",
        "The villagers stop chasing at once",
        "Chanticleer is swallowed"
      ],
      correctAnswer: 1,
      explanation: "The trap turns on speech itself: the fox cannot both speak and keep his grip. Tracking what was said means seeing how Chanticleer uses the fox's own boasting words to win his escape, turning a saying into freedom."
    },
    { type: "story", text: "So the rooster who had been fooled by flattery escaped by flattery in turn, and refused ever again to close his eyes when a stranger praised him. And the pilgrim finished his tale, and the road to Canterbury went on." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did the fox tell Chanticleer to close his eyes and crow?",
      options: [
        "To flatter him off his guard so the fox could seize him",
        "Because the fox loved his singing",
        "To help the rooster crow more loudly",
        "Because the widow had asked him to"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the flattery was bait. Here it frames the trick rather than testing the tracking of what was said."
    },
    { type: "story", moral: "A traveler told of a rooster, who told of a dream, who passed on what wise men said. To read it is to keep straight whose words are whose, layer within layer." }
  ]
};
export default story;
