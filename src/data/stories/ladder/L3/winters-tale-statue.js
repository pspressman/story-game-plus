// winters-tale-statue.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior Q3 asked what was revealed about Hermione immediately after the block
// stated it, and Q4 asked for a cause given two blocks earlier.
const story = {
  id: "winters-tale-statue",
  title: "The Winter's Tale: The Statue That Breathes",
  icon: "🗿",
  difficulty: "Easy",
  theme: "Wronged, mourned, and restored",
  estimatedTime: "5-10 min",
  description: "A king becomes certain of something about his wife. Nothing anyone says can move him.",
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
    {
      type: "story",
      text: "King Leontes became certain, all at once and out of nothing, that his queen Hermione had betrayed him. His lords told him he was wrong. The oracle he sent to told him he was wrong. Hermione told him he was wrong. He put her on trial anyway, in front of the whole court."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand inside Hermione in the courtroom. She is innocent and she knows it, and so does everyone present. What can she actually do about her situation?",
      options: [
        "Prove her innocence by producing witnesses",
        "Nothing, because the one person who needs convincing has stopped taking evidence",
        "Appeal to the oracle for a second judgement",
        "Wait for her husband to calm down and see sense"
      ],
      correctAnswer: 1,
      explanation: "Being right is usually a thing you can use. Here the lords, the oracle and her own word have all been put in front of him and bounced off. Standing where she stands, the truth is in her hands and there is nowhere to put it."
    },
    {
      type: "story",
      text: "Word came during the trial that Hermione had collapsed and died. And the certainty went out of Leontes as suddenly as it had come, and he saw what he had done, and there was nothing left to do about it. He lived another sixteen years."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Stand inside Leontes in the first hour after the certainty leaves him. What is the worst part of what he is looking at?",
      options: [
        "That everyone in the court saw him be wrong",
        "That he did all of it himself, over everyone's objection, and there is nobody else to blame any of it on",
        "That he will now have to rule alone",
        "That the oracle had warned him and he ignored it"
      ],
      correctAnswer: 1,
      explanation: "Nobody deceived him. Nobody pushed him. He was told, repeatedly, by everyone, and he went on. What he has to carry for sixteen years is not a mistake that happened to him but one he insisted on against all resistance."
    },
    {
      type: "story",
      text: "Sixteen years later he was brought to see a statue of her, newly finished, so lifelike that the sculptor was praised for it. He stood in front of it a long time and could not speak."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Picture the statue: not the young queen he accused, but a woman sixteen years older. Why would the sculptor have made it that way?",
      options: [
        "Because statues are always made to look older than life",
        "Because it shows the years she would have lived, which is the thing he took",
        "Because the sculptor never saw her when she was young",
        "Because the stone had aged since it was carved"
      ],
      correctAnswer: 1,
      explanation: "A likeness of the queen at the trial would show him the day. This shows him the whole of what came after, sixteen years of a life that did not happen, standing in front of him in stone at the age she should be."
    },
    {
      type: "story",
      text: "And then the statue moved. It came down off the step. It was breathing. Hermione had been alive the whole sixteen years, hidden by a friend who had kept the secret, and she came down and stood in front of him."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand inside Hermione, who chose to spend sixteen years hidden and has just chosen to end it. What was she doing all that time?",
      options: [
        "Being kept safe by a friend until it was safe to return",
        "Waiting to see whether his remorse would last, since only years could show that",
        "Punishing him for what he did to her",
        "Recovering from the illness that struck her at the trial"
      ],
      correctAnswer: 1,
      explanation: "She was not a prisoner and not asleep. She could have come back any year of the sixteen and did not. A man sorry for a week is not the same as a man sorry for sixteen years, and there is no way to find out which he is except to let the time run."
    },
    { type: "story", text: "(This is the plot of Shakespeare's play, told in plain words, not his own lines.)" },
    { type: "story", moral: "She was wronged, and mourned, and at last given back. To stand with both of them is to feel the harm and the mercy in the same breath." }
  ]
};
export default story;
