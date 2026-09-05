// winters-tale-statue.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
const story = {
  id: "winters-tale-statue",
  title: "The Winter's Tale: The Statue That Breathes",
  icon: "🗿",
  difficulty: "Easy",
  theme: "Wronged, mourned, and restored",
  estimatedTime: "5-10 min",
  description: "A king's false belief casts away the wife who loved him. Years later he stands before her statue. Stand on the side of the wronged and the one who wronged her.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "England",
    region: "British Isles",
    saga: "shakespeare",
    source_epic: false,
    threads: ["shakespeare"],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "King Leontes grew suddenly and wrongly certain that his good queen, Hermione, had betrayed him. Nothing she said could move him. He cast her off and put her on trial, though she was innocent of everything he believed." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Hermione stands accused by her own husband of a thing she never did. Seen from her side, what is being done to her?",
      options: [
        "She is being gently questioned and will soon be cleared",
        "She is being wrongly accused and cast off by the man who should have trusted her most",
        "She is being honored before the whole court",
        "She is being asked to forgive a small misunderstanding"
      ],
      correctAnswer: 1,
      explanation: "From where she stands, the harm is entirely done to her: condemned, not for what is true, but for what her husband has decided to believe. The vantage of the innocent and accused is the one to hold."
    },
    { type: "story", text: "In the grief of the trial, word came that Hermione had collapsed and died. Leontes, too late, saw the ruin his false belief had made, and for many long years he lived in sorrow and remorse for what he had done." },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Years later, Leontes is brought before a lifelike statue of the wife he wronged. How does he most likely feel as he looks at it?",
      options: [
        "Pleased to have such a fine likeness of her",
        "Pierced with grief and remorse, undone by what he did to her",
        "Curious about how the sculptor worked",
        "Eager to find a new queen at last"
      ],
      correctAnswer: 1,
      explanation: "Read from his side, the statue is a wound: it sets before him the wife destroyed by his own false belief. The feeling is the heavy remorse of the one who did the wrong, not idle admiration."
    },
    { type: "story", text: "As he gazed and grieved, the statue moved. It stepped down. It breathed. Hermione was alive, kept hidden all those years by a faithful friend, and now, with the worst of his folly behind him, she was given back to him." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "The statue breathes and steps down. What is revealed about Hermione, and what is done for Leontes?",
      options: [
        "She was a magical copy made to comfort him",
        "She had been kept alive and hidden all along, and now she is restored to him",
        "She has been brought back from the dead by a spell",
        "She was never really his wife at all"
      ],
      correctAnswer: 1,
      explanation: "The turn is that she was preserved, not dead, and now she is given back to him. He is on the receiving end of a mercy he did not earn, as she was once on the receiving end of his wrong."
    },
    { type: "story", text: "And so the long winter of his remorse ended in a spring he had not dared to hope for, the wife he had wronged standing warm and alive before him once more." },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had everyone, including Leontes, believed for years that Hermione was dead?",
      options: [
        "She had collapsed and been reported dead after the cruel trial",
        "She had sailed away to a distant land",
        "She had been turned to stone by a curse",
        "She had never existed in the first place"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause across time: the report of her death at the trial is why all believed her gone. Here it sets up the wonder of the statue rather than testing the vantage."
    },
    { type: "story", text: "(This is the plot of Shakespeare's play, told in plain words, not his own lines.)" },
    { type: "story", moral: "She was wronged, and mourned, and at last given back. To stand with both of them is to feel the harm and the mercy in the same breath." }
  ]
};
export default story;
