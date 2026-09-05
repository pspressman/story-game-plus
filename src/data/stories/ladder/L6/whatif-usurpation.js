// whatif-usurpation.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
// History play: inaccuracy_flag set. Explanations note the story bends real kings.
const story = {
  id: "whatif-usurpation",
  title: "The What-If of a Stolen Crown",
  icon: "👑",
  difficulty: "Hard",
  theme: "The branch a king opens by taking the throne",
  estimatedTime: "5-10 min",
  description: "A man weighs seizing a crown that is not rightly his. Hold the branch where he takes it, and the shadow that branch would cast forever after.",
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
    threads: [{ type: "history", inaccuracy_flag: true }],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "In Shakespeare's history plays, a great lord stands before a tempting branch: the crown is weak, the king is failing, and he could reach out and take the throne for himself, though it is not his by right. Before he acts, the whole future hangs on a question of what-if." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Hold the branch where he takes the crown. If a man were to seize a throne that is not rightfully his, what would shadow his reign ever after?",
      options: [
        "Nothing; once crowned, all would simply obey him in peace",
        "The same right he used to take it, for if a crown can be seized once, others could seize it from him in turn",
        "He would instantly become the rightful king",
        "His enemies would all forgive him at once"
      ],
      correctAnswer: 1,
      explanation: "The branch carries its own poison. Were he to take the crown by force, he would prove that crowns can be taken, and that proof would hang over him, since any strong claimant could do to him exactly what he did. The reader holds that restless future before the deed is done."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Now hold the other branch. If the rightful heir were left to take the throne in his proper turn instead, what would the kingdom more likely have?",
      options: [
        "Endless war, no matter who rules",
        "A settled, unquestioned claim, so the throne would rest on right rather than on force",
        "Exactly the same trouble as a seized crown",
        "No king at all"
      ],
      correctAnswer: 1,
      explanation: "The lawful branch offers what the seized one cannot: a claim no one can copy against him, because it rests on right rather than strength. Holding both branches, the reader feels the quiet the kingdom trades away when the crown is grabbed."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "Suppose the lord does seize the crown. If others later look at his throne and see that it was simply taken, what will they be tempted to do?",
      options: [
        "Honor him forever as the truest king",
        "Reach for it themselves, since he has shown a crown is something one can simply take",
        "Forget how he came to power",
        "Hand him even more land"
      ],
      correctAnswer: 1,
      explanation: "The conditional runs forward and turns on him: by taking the crown he teaches everyone that crowns can be taken, so his own example invites the next challenger. The branch he opens does not close behind him."
    },
    { type: "story", text: "A note as you read: these usurping lords and failing kings come from Shakespeare's history plays, and he shaped them for the stage. The real struggles for the English crown were messier and slower than any play, so hold the story lightly as history even while you feel its truth about power." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: false,
      question: "Setting the what-if aside, what does a crown taken by force always lack that a crown held by right has?",
      options: [
        "A settled claim that others cannot easily copy against the holder",
        "Fine robes and a golden seat",
        "Soldiers and castles",
        "A grand coronation feast"
      ],
      correctAnswer: 0,
      explanation: "A reach back to the weighing of right and power from the level below: the seized crown lacks a settled claim. Here it grounds the lesson rather than testing the branch. Remember, too, the plays simplify a tangled real history."
    },
    { type: "story", moral: "Before the crown is ever seized, its whole future is visible in a branch. To take it by force is to teach the world it can be taken, and that lesson never leaves the throne." }
  ]
};
export default story;
