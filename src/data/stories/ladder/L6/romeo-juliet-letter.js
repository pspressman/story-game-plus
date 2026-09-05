// romeo-juliet-letter.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
const story = {
  id: "romeo-juliet-letter",
  title: "Romeo and Juliet: The Letter That Could Come",
  icon: "💌",
  difficulty: "Hard",
  theme: "The branch where the message arrives in time",
  estimatedTime: "5-10 min",
  description: "Juliet only seems dead, and a letter is meant to tell Romeo so. Hold the branch where it reaches him, against the branch where it does not.",
  meta: {
    level: 6,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional"],
    grammar_target: "conditional",
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
    { type: "story", text: "To escape a marriage she did not want, and to be with Romeo, Juliet drank a potion that would make her seem dead for a time, though she only slept. A friar sent a letter to Romeo to explain the secret plan: she is not truly dead; wait, and she will wake." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Everything depends on that letter. If it were to reach Romeo in time, what would he understand when he came to Juliet lying still in the tomb?",
      options: [
        "That she is truly and finally dead",
        "That she only sleeps and will soon wake, so that he would wait for her rather than despair",
        "That she has run away with someone else",
        "That he should leave the city forever"
      ],
      correctAnswer: 1,
      explanation: "The whole tragedy turns on a branch that has not yet failed. Hold it: were the letter to arrive, Romeo would know she sleeps, and he would wait. The reader carries that saving possibility into every delay of the message."
    },
    { type: "story", text: "But the letter went astray and never reached him. Instead, Romeo heard only that Juliet was dead, with no word of the plan, and he believed it utterly." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Romeo believes Juliet is truly dead. Hold the branch the lost letter closed: if he knew the truth, that she only sleeps, what would he not do?",
      options: [
        "He would not bother to visit the tomb at all",
        "He would not take his own life in despair, because he would be waiting for her to wake",
        "He would not have loved her in the first place",
        "He would not return to the city"
      ],
      correctAnswer: 1,
      explanation: "The reader holds the rescued branch against the real one. Knowing she sleeps, Romeo would wait, not despair, and the deaths would not come. That is the unbearable nearness of the story: one branch away from saved."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "Juliet's plan rests on Romeo learning the secret before he sees her. If he reaches the tomb still believing she is dead, what is the plan in danger of becoming?",
      options: [
        "A clever success that fools everyone",
        "A trap, since the very stillness meant to save her will look to him like death and drive him to ruin",
        "A simple delay with no real harm",
        "A way for them both to escape unharmed"
      ],
      correctAnswer: 1,
      explanation: "Without the message, the sleeping potion that was meant to save Juliet turns deadly: it convinces Romeo she is gone. Holding that branch, the reader sees how the plan flips from rescue to ruin the instant the letter fails."
    },
    { type: "story", text: "Believing her dead, Romeo took his own life beside her. And Juliet woke a moment too late, to find him gone. The branch where the letter came in time hung over it all, so close, and never taken. (This is the plot of Shakespeare's play, told plainly, not his own lines.)" },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did Juliet appear to be dead in the tomb?",
      options: [
        "She had drunk a potion to seem dead and escape an unwanted marriage",
        "She had truly died of grief",
        "She had been struck down by an enemy",
        "She had fallen asleep by accident"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the potion is why she seems dead. Here it supplies the fact the branch turns on rather than testing the branch itself."
    },
    { type: "story", moral: "One letter, arriving or not, was the whole story. To read it is to hold the branch where the message comes in time, and to feel how the smallest delay closed it forever." }
  ]
};
export default story;
