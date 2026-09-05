// vikram-vetala.js  L5, B5 infer the hidden state. Target: epistemic_modal.
const story = {
  id: "vikram-vetala",
  title: "King Vikram and the Vetala's Riddle",
  icon: "👻",
  difficulty: "Medium",
  theme: "The answer hidden inside the tale",
  estimatedTime: "5-10 min",
  description: "A spirit rides on the king's shoulder and tells a story that ends in a question. The king must reason out the answer or carry the spirit forever. So must you.",
  meta: {
    level: 5,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "India",
    region: "South Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Each night King Vikram carried a vetala, a clever spirit, on his shoulder, and each night the vetala told him a story that ended in a riddle. The rule was strict: if Vikram knew the answer and stayed silent, his head would burst; if he spoke, the spirit would fly back to its tree and the long task would begin again." },
    { type: "story", text: "One night the vetala told of a thief about to be hanged who suddenly laughed and then wept, though he was a hard man who had never shown feeling. \"Tell me, king,\" said the spirit, \"why did the thief laugh, and why did he weep?\"" },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "A merchant's daughter has just offered to marry the condemned thief to save his life. Knowing this, why might the hard thief have laughed?",
      options: [
        "He must have been glad to be saved from the rope",
        "He might well have laughed at the strangeness of it: the very people who once would not look at him now beg him to marry, only because they need him",
        "He must have found the rope itself funny",
        "He must have been laughing at the merchant's daughter"
      ],
      correctAnswer: 1,
      explanation: "Reason from what the thief knows. The respectable family that would never have welcomed him now pleads for him, only to spare their daughter another match. The laugh is at that bitter reversal, which the evidence of the offer makes the fitting reading."
    },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "And the weeping, from a man who never wept. What can we reason was behind his tears?",
      options: [
        "He must have been afraid of dying after all",
        "He might have wept that he would not live to repay such a kindness, or that he must owe his life to those who once scorned him",
        "He must have wept because the laughing hurt his throat",
        "He must have been pretending in order to escape"
      ],
      correctAnswer: 1,
      explanation: "The tears, set beside the laugh, point to a feeling the bare scene does not state: grief at owing his life to scorners, or at being saved too late to make anything of it. Reading the hidden state means hearing what the moment presses out of even a hard man."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why was the thief about to be saved from hanging?",
      options: [
        "Because a merchant's daughter had offered to marry him and spare his life",
        "Because the king had pardoned him",
        "Because he had escaped from the guards",
        "Because the rope had broken"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the marriage offer is what stays the execution. Here it supplies the fact the riddle turns on rather than testing the inference."
    },
    { type: "story", text: "Vikram, knowing the answer, spoke it aloud, and at once the vetala laughed and flew back to its tree, and the patient king set off to fetch it down once more." },
    { type: "story", moral: "The answer was never stated, only buried in the scene. To solve the riddle you must reason out the feeling the story leaves unsaid." }
  ]
};
export default story;
