// perceval-grail-question.js  L7, B4 unreal past + reinterpretation strand. ADDED Arthurian, pending HARPER. Gate: rebuild and price.
const story = {
  id: "perceval-grail-question",
  title: "The Question Perceval Did Not Ask",
  icon: "🏰",
  difficulty: "Hard",
  theme: "A rule remembered at exactly the wrong moment",
  estimatedTime: "5-10 min",
  description: "A young knight sees a wounded king and a holy vision, and says nothing, because he had been told not to ask too many questions. Rebuild the healing his question would have brought, and weigh the cost of a misread rule.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Britain",
    region: "British Isles",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The young knight Perceval came one night to a strange castle, where a wounded king lay in pain and a solemn procession carried a glowing holy vessel past him. Perceval burned with wonder and pity, and longed to ask what it all meant and what ailed the king. But he held his tongue, for his old teacher had once advised him not to ask too many questions, and to mind his manners as a knight should." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Perceval saw the wounded king and the holy vessel and asked nothing. If he had asked the question, whom the vessel served and what ailed the king, what would have happened?",
      options: [
        "The same; questions change nothing",
        "The king would have been healed and his wasted land restored",
        "Perceval would have been thrown out",
        "The vision would have vanished sooner"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch where the question is asked. In these tales the right question is itself the cure: to ask is to heal. So the unspoken words are not a small lapse but the very thing that would have mended a king and a kingdom."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Perceval stayed silent because he had been told not to ask too many questions. What did he get wrong about that advice?",
      options: [
        "Nothing; the advice forbade all questions",
        "He read a rule about idle chatter as a reason to hold back the one question that truly mattered, applying it exactly where it should not have held",
        "He had forgotten the advice entirely",
        "The advice had been about food, not questions"
      ],
      correctAnswer: 1,
      explanation: "This is the reinterpretation at the heart of it. The teacher meant only that a knight should not prattle rudely. Perceval took those words and stretched them over a sacred moment they were never meant to cover, obeying the letter of a rule and missing its sense."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Perceval wakes to find the castle empty, and only later learns what his silence cost. Price the unasked question: because he did not speak, what must he now spend years trying to undo?",
      options: [
        "A small embarrassment",
        "The king's wound and the wasteland left unhealed, a single withheld question's long and heavy cost",
        "A lost sword",
        "Nothing of any weight"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from the silent night into the long years after: because the question went unasked, the king stays wounded and the land barren, and Perceval must wander seeking a second chance. One held tongue, and a kingdom waits."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did Perceval stay silent before the holy vision?",
      options: [
        "He had been advised not to ask too many questions, and held his tongue",
        "He was too frightened to speak",
        "He did not see the king",
        "He had been forbidden to enter"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: a remembered rule kept him silent. Here it names the reason rather than testing how he misread it."
    },
    { type: "story", moral: "Perceval obeyed a small rule at the one moment it should have been set aside, and a king and a land paid for his silence. To read it is to hold the healing his question would have brought, and to see how a rule can be misjudged at exactly the wrong time." }
  ]
};
export default story;
