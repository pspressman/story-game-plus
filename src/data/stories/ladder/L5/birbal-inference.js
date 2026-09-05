// birbal-inference.js  L5, B5 infer the hidden state. Target: epistemic_modal (must/might/could as inference).
const story = {
  id: "birbal-inference",
  title: "Birbal and the Lengthening Stick",
  icon: "🪵",
  difficulty: "Medium",
  theme: "The guilty give themselves away",
  estimatedTime: "5-10 min",
  description: "A jewel is stolen and any of the servants could be the thief. Birbal hands out sticks and lets the guilty mind betray itself. Reason out who must have done it.",
  meta: {
    level: 5,
    track: "gated",
    tier: "R",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "India",
    region: "South Asia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A jewel went missing from the palace, and it could only have been taken by one of the ten servants who had the keys. Each one swore he was innocent, and there was no way to tell them apart. So the emperor called for Birbal." },
    { type: "story", text: "Birbal gave each servant a stick, all exactly the same length. \"These are magic sticks,\" he said. \"Tonight, the stick belonging to the thief will grow longer by the width of two fingers. The honest men's sticks will stay as they are. Bring them back to me in the morning.\"" },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "In the morning, one servant's stick is shorter than all the rest. What must be true of him?",
      options: [
        "He must be innocent, since his stick did not grow",
        "He must be the thief, for only a guilty man would cut his stick short, fearing it would grow and betray him",
        "He might simply have been given a shorter stick to begin with",
        "He must have lost part of his stick by accident"
      ],
      correctAnswer: 1,
      explanation: "There are no magic sticks. An innocent man has nothing to fear and leaves his alone. Only a man who believes his guilt will show would cut his stick short overnight, so the short stick can only point one way."
    },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Why could the nine innocent servants safely leave their sticks untouched, while the thief could not?",
      options: [
        "Because the innocent had not been listening to Birbal",
        "Because the innocent had nothing to hide, so they had no reason to expect their stick to grow",
        "Because the innocent had shorter sticks already",
        "Because the thief's stick really was magic"
      ],
      correctAnswer: 1,
      explanation: "The trick works on the mind, not the wood. An innocent man does not fear the test, so he does nothing. Only the guilty man acts on the fear, and the acting is what gives him away."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did Birbal give the servants sticks at all?",
      options: [
        "To set a test that would make the guilty mind betray itself",
        "Because he needed firewood for the palace",
        "To measure how tall each servant was",
        "Because the emperor liked riddles"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the sticks are bait for the guilty conscience. Here it frames the trick rather than testing the inference itself."
    },
    { type: "story", text: "Birbal pointed to the man with the short stick, and the thief, seeing he was caught, confessed at once. No magic had been needed, only a careful reading of what a guilty mind would do." },
    { type: "story", moral: "He could not see the theft, but he could reason out the thief. What a guilty man does to protect himself is often the very thing that reveals him." }
  ]
};
export default story;
