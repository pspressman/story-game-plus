// djoha-pots.js  L5, B5 infer the hidden state. Target: epistemic_modal.
const story = {
  id: "djoha-pots",
  title: "Djoha and the Borrowed Pot",
  icon: "🍲",
  difficulty: "Medium",
  theme: "Trapped by what you chose to believe",
  estimatedTime: "5-10 min",
  description: "Djoha borrows a pot and returns it with a smaller one inside, saying it gave birth. The neighbor is delighted. Reason out the trap the neighbor has walked into.",
  meta: {
    level: 5,
    track: "gated",
    tier: "R",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "Sephardic",
    region: "Mediterranean",
    saga: null,
    source_epic: false,
    threads: [],
    edges: ["one_fool_many_hats"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Djoha borrowed a large cooking pot from his neighbor. When he returned it, there was a small pot tucked inside. \"Your pot gave birth while it was with me,\" Djoha said solemnly, \"so the baby pot is yours too.\" The neighbor knew perfectly well that pots cannot give birth, but a free second pot is a free second pot, so he smiled and took both." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The neighbor happily accepts that a pot can give birth, because it brings him a free pot. What has he now committed himself to believing?",
      options: [
        "That Djoha is a generous and honest man",
        "That pots are living things that can be born, which means they could also fall ill and die",
        "That he should borrow pots more often",
        "That Djoha owes him nothing further"
      ],
      correctAnswer: 1,
      explanation: "To pocket the baby pot, the neighbor must accept the rule that pots can be born. Reason it forward: anything that can be born can die, and he has just agreed to that rule out loud for the sake of a free pot."
    },
    { type: "story", text: "A week later Djoha borrowed the large pot again, a fine one, and this time he did not bring it back. When the neighbor came asking, Djoha put on a sorrowful face. \"I am so sorry,\" he said. \"Your pot died.\"" },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The neighbor wants to protest that a pot cannot die. Why must he hold his tongue?",
      options: [
        "Because Djoha is bigger and stronger than he is",
        "Because he already accepted that pots can be born, so he cannot now deny that they can die without admitting the first claim was false",
        "Because the pot really did die",
        "Because the law forbids arguing about pots"
      ],
      correctAnswer: 1,
      explanation: "The trap closes on his own earlier choice. Having taken the baby pot by agreeing pots can be born, he cannot reject the death without confessing he only believed the birth out of greed. His own reasoning binds him."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why was the neighbor willing to believe the first pot had given birth?",
      options: [
        "Because believing it gained him a free extra pot",
        "Because he had seen pots give birth before",
        "Because Djoha showed him proof",
        "Because he trusted Djoha completely"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: greed for the free pot made the absurd claim easy to swallow. Here it sets up the trap rather than testing the inference."
    },
    { type: "story", text: "And so the neighbor lost his good pot and could say nothing, caught by the very belief he had been so glad to accept when it brought him something for nothing." },
    { type: "story", moral: "What you agree to for a small gain can bind you to a larger loss. Djoha did not steal the pot so much as let the neighbor reason himself out of it." }
  ]
};
export default story;
