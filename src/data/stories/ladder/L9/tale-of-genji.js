// tale-of-genji.js  L9, B6 recursion. Target: nested_reported_speech. Gate: a mind reporting a mind reporting a mind.
const story = {
  id: "tale-of-genji",
  title: "Whispers at the Heian Court",
  icon: "🎴",
  difficulty: "Advanced",
  theme: "Knowing people only through what is passed along",
  estimatedTime: "5-10 min",
  description: "At the old Japanese court, almost everything is learned secondhand: through attendants, messages, and whispered word. Track the tellers between a person and what is finally believed about them.",
  meta: {
    level: 9,
    track: "gated",
    tier: "O",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "nested_reported_speech",
    culture: "Japan",
    region: "East Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "Heian court tale; keep to age-appropriate court-and-message beats.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "In the old imperial court of Japan, the noble ladies lived behind screens and curtains, rarely seen. A nobleman like the shining prince Genji often came to know a lady not by meeting her, but through what others said of her: her attendant told a go-between, who told Genji, that the lady was gifted and gentle. So a whole picture of a person was built out of passed-along words." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "Genji believes a certain lady is gifted and gentle, though he has never met her. How did that picture reach him?",
      options: [
        "He saw and spoke with her himself",
        "Through a chain of tellers: her attendant told a go-between, who told Genji, so he holds a description carried by others",
        "He simply guessed it",
        "She wrote to him directly about herself"
      ],
      correctAnswer: 1,
      explanation: "At this court, people are known by relay. Track the chain: the attendant's words pass to a go-between, then to Genji. What he believes about the lady is a report of a report, never her own self shown plainly to him."
    },
    { type: "story", text: "Messages too went by many hands. Genji would compose a poem, and a trusted servant would carry it to the lady's household, and there an attendant would read it aloud to her mistress behind the screen, since the message could not simply be handed over in person." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "Genji's poem reaches the lady through his servant and then her attendant reading it aloud. By the time the lady hears the poem, how many people have carried Genji's words?",
      options: [
        "None; Genji recites it to her face",
        "Two: his servant who carries it, and her attendant who reads it aloud behind the screen",
        "Only one, the servant",
        "The lady reads it with no help at all"
      ],
      correctAnswer: 1,
      explanation: "Even a love-poem travels nested. Track the hands: Genji to his servant, the servant to her attendant, the attendant's voice to the lady. His words arrive wrapped in two other people before she ever hears them."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Court gossip works the same way. An attendant tells Genji that another lady had said that a third woman had behaved coldly. What is the danger in Genji acting on this?",
      options: [
        "There is no danger; relayed gossip is always true",
        "The claim is carried through several mouths and could have been bent at any step, so Genji may judge the third woman on words she never truly spoke or meant",
        "The third woman will hear it instantly",
        "The attendant will be punished"
      ],
      correctAnswer: 1,
      explanation: "Nested gossip is fragile. Track the seams: one lady's claim about a third, carried to Genji by an attendant. Each hand could shade it, so acting on the deepest claim means trusting words far from their source."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Why were the court ladies known mostly through what others said of them?",
      options: [
        "Because they lived behind screens and curtains and were rarely seen directly",
        "Because they refused to speak at all",
        "Because they lived in another country",
        "Because no one was curious about them"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the screens of the court meant people were met through go-betweens. Here it frames why everything is relayed rather than testing the nesting."
    },
    { type: "story", moral: "At this court a person was a thing built from passed-along words. To move through it is to count the tellers between you and the truth, and to remember how far a whisper has traveled." }
  ]
};
export default story;
