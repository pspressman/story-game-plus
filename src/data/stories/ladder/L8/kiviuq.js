// kiviuq.js  L8, B5 a mind holding a mind. Target: reported_speech. Gate: track what was said across the seam.
const story = {
  id: "kiviuq",
  title: "Kiviuq the Wanderer",
  icon: "🧭",
  difficulty: "Advanced",
  theme: "A hero known only through the telling",
  estimatedTime: "5-10 min",
  description: "The great wanderer Kiviuq reaches his listeners only through the elders who tell of him. Track what is known firsthand against what is carried down in words.",
  meta: {
    level: 8,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Inuit",
    region: "Arctic North America",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "Inuit oral tradition told in many regional versions; treat as a living tradition and defer to Inuit tellers on detail. Flagged for HARPER review.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The elders tell of Kiviuq, a great traveler who has wandered the world through more adventures than anyone can count, across ice and sea and strange shores. The stories of him are many, and each is passed from elder to child around the lamp, kept alive by the telling." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "The children listening have never met Kiviuq. How do they come to know him and his journeys?",
      options: [
        "They have traveled with him themselves",
        "Only through what the elders tell, for the wanderer reaches them entirely as words passed down",
        "They read of him in a book",
        "He visits the camp each winter to tell his own tale"
      ],
      correctAnswer: 1,
      explanation: "Kiviuq lives for the listeners as a carried story, not a met person. Tracking the seam means seeing that everything they hold of him comes through the elders' telling, handed down across many tellers before reaching their ears."
    },
    { type: "story", text: "In one of his adventures, Kiviuq came upon a lonely shore where an old woman offered him shelter. As he settled in, another voice warned him quietly that this old woman was not what she seemed, and that he should be on his guard through the night." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Kiviuq is warned in words that the kindly old woman is dangerous, though she looks harmless. What does the warning ask him to do?",
      options: [
        "Trust only what his eyes show him",
        "Weigh the spoken warning above the pleasant appearance, acting on what he was told rather than on how things look",
        "Ignore the warning completely",
        "Tell the old woman what he heard"
      ],
      correctAnswer: 1,
      explanation: "The danger reaches Kiviuq as words that contradict what he sees. Tracking what was said means holding the warning against the appearance and choosing to act on the telling, since the truth here travels by speech, not by sight."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "The elders say that Kiviuq is wandering still, and that one day he will return. Across the seam of their telling, is his return something that has already happened or something still spoken of as ahead?",
      options: [
        "It has already happened long ago",
        "It is still spoken of as yet to come, a thing the telling places in the future rather than the past",
        "It is happening at this very moment in the camp",
        "It never will happen and they know it"
      ],
      correctAnswer: 1,
      explanation: "The elders carry a return that has not yet come, holding it open in their words. Tracking across the seam means placing the promised return ahead in time, kept alive as something still awaited each time the tale is told."
    },
    { type: "story", text: "And so Kiviuq journeys on through the stories, met by his guile and his courage, and the elders keep telling of him, so that the wanderer is never wholly gone from his people as long as the tale is spoken." },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "simple_present",
      gates: false,
      question: "Why do the elders keep telling the tales of Kiviuq?",
      options: [
        "To pass on his story and keep the wanderer alive in memory",
        "Because they have nothing else to say",
        "To frighten the children into sleeping",
        "Because Kiviuq pays them to"
      ],
      correctAnswer: 0,
      explanation: "A reach back to reading intent: the telling keeps him present for the people. Here it frames the tradition rather than testing the tracking of what was said."
    },
    { type: "story", moral: "A wanderer none of them has met lives on entirely in the telling. To read it is to hold what is carried in words, and to track when each thing is placed in time." }
  ]
};
export default story;
