// ragnarok.js  L7, B4 unreal past. Norse. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "ragnarok",
  title: "Ragnarok: The Doom of the Gods",
  icon: "🌑",
  difficulty: "Hard",
  theme: "Meeting an end you know you cannot escape",
  estimatedTime: "5-10 min",
  description: "The gods know their doom is foretold and that they will fall, yet they arm for the last battle anyway. Rebuild the choices that might have turned it, and weigh a grief that no choice undoes.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Norse",
    region: "Northern Europe",
    saga: "norse_eddas",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The gods of the north had long been warned of Ragnarok, the doom in which the great wolf would break its chain, the giants would march, and gods and monsters would destroy one another. Odin knew he would fall to the wolf. Yet the gods gathered their bravest warriors and made ready, choosing to meet the foretold end with their weapons in their hands." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "The slide toward Ragnarok quickened after the bright god Baldr was killed. If Baldr had not died, what might have been different about the doom ahead?",
      options: [
        "Nothing at all; his death meant little",
        "The gods' brightest hope would still have stood among them, and the long darkening toward the end might have been held back a while",
        "Ragnarok would have come sooner",
        "The wolf would have stayed chained forever"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where Baldr lives. His death is the loss that tips the world toward its end, so undoing it lifts, for a moment, the whole weight of the coming doom. The grief gathers around the one death that need not have happened."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "The gods know they will lose, and arm for the last battle even so. What is both noble and grievous in fighting a doom you are certain you cannot win?",
      options: [
        "They secretly expect to win",
        "They choose to meet the end with courage rather than despair, though no victory is possible, so the grief lives in the knowing itself",
        "They have not understood the prophecy",
        "They fight only to delay dinner"
      ],
      correctAnswer: 1,
      explanation: "Hold the branch where they flee or surrender against the one where they stand. They stand, knowing it changes nothing, and that is the heart of it: a courage spent on a battle already lost, grief and honor bound together."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "After Ragnarok, the tales say a new green world rises from the sea. Holding that ending, even if the gods had somehow escaped their doom, what would the world never have gained?",
      options: [
        "Nothing worth having",
        "The fresh world that only the ending makes room for, so that the very doom they grieve is also the door to renewal",
        "A longer winter",
        "More gods to fight"
      ],
      correctAnswer: 1,
      explanation: "Price the doom from the far side. Because the end is also a beginning, escaping it would have cost the renewal that follows. The grief is real, yet held against the whole, the ending carries a strange gift folded inside it."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_present",
      gates: false,
      question: "What is Ragnarok?",
      options: [
        "The foretold doom of the gods, when gods and monsters destroy one another",
        "A great feast in the gods' hall",
        "The name of Odin's spear",
        "A river in the north"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the term: Ragnarok is the foretold end. Here it frames the doom rather than testing the branch."
    },
    { type: "story", moral: "The gods met an end they knew they could not escape, and stood anyway. To read it is to weigh the deaths that need not have come, and a grief that even foresight could not turn aside." }
  ]
};
export default story;
