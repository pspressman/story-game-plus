// red-cliffs-arrows.js  L10 summit. Gate: armies of minds anticipating each other.
const story = {
  id: "red-cliffs-arrows",
  title: "Borrowing the Arrows",
  icon: "🏹",
  difficulty: "Master",
  theme: "Making the enemy hand you your weapons",
  estimatedTime: "5-10 min",
  description: "Ordered to make a hundred thousand arrows in three days, the strategist makes none. He sails into the fog and lets the enemy fire them straight into his boats.",
  meta: {
    level: 10,
    track: "gated",
    tier: "O",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "China",
    region: "East Asia",
    saga: "three_kingdoms",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The jealous commander Zhou Yu hoped to be rid of the brilliant Zhuge Liang. So he ordered him to produce a hundred thousand arrows for the coming battle within ten days, knowing it was impossible. Zhuge Liang calmly answered that he would need only three days, and staked his own life on it. He did not make a single arrow." },
    { type: "story", text: "On the third night a thick fog rolled over the river. Zhuge Liang lined twenty light boats with bundles of straw and screens of cloth, set drummers aboard, and rowed them quietly toward the great enemy fleet of Cao Cao, anchored across the water." },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Zhuge Liang has his men beat drums and shout in the fog as the straw boats near Cao Cao's fleet. What is he counting on the unseen enemy to do?",
      options: [
        "Row out and board the boats to capture them",
        "Fear a hidden attack in the fog and pour volleys of arrows blindly at the noise, rather than risk sailing out to see",
        "Light the fog on fire",
        "Surrender at the sound of the drums"
      ],
      correctAnswer: 1,
      explanation: "Zhuge Liang reads the cautious enemy mind. Cao Cao, unable to see and fearing an ambush in the fog, will defend by firing arrows at the noise, not gamble his ships sailing blindly into the murk. The whole plan rests on that prediction."
    },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "future_perfect",
      gates: true,
      question: "Cao Cao's archers fire volley after volley into the fog, and the arrows bury themselves in the straw bundles. By the time the boats slip back across the river, what will the enemy have done for Zhuge Liang?",
      options: [
        "Destroyed all his boats",
        "Supplied him with the hundred thousand arrows themselves, fired straight into his waiting straw",
        "Captured his drummers",
        "Sailed out and scattered him"
      ],
      correctAnswer: 1,
      explanation: "The enemy becomes the arrow-maker. By predicting that Cao Cao would fire defensively, Zhuge Liang turns the fleet's own volleys into his supply. He made no arrows; he arranged for the enemy to make them for him."
    },
    {
      type: "question",
      domain: "anticipation",
      band: "B6",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Suppose the fog had not come, or Cao Cao had dared to sail out and look. What would have happened to Zhuge Liang's plan?",
      options: [
        "It would have worked even better",
        "It would have collapsed: without the cover that forced a blind, defensive response, the light straw boats would have been exposed and lost",
        "Nothing; the arrows appear by magic",
        "Cao Cao would have made the arrows anyway"
      ],
      correctAnswer: 1,
      explanation: "Hold the branch that did not happen: the trick needed the fog to force exactly the cautious, blind response Zhuge Liang predicted. Read rightly, his genius was choosing the conditions that made the enemy's safest move into his victory."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Zhou Yu ordered Zhuge Liang to make so many arrows so quickly?",
      options: [
        "Because he hoped the impossible task would destroy his rival",
        "Because the army had truly run out of arrows that day",
        "Because Zhuge Liang had asked for the job",
        "Because Cao Cao had demanded them"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the order was a trap meant to ruin a rival. Here it frames the challenge rather than testing the anticipation."
    },
    { type: "story", text: "The boats returned heavy with more than a hundred thousand arrows, well before the third day was out. Zhou Yu, who had meant to destroy him, was left to marvel at a man who could make an enemy arm him." },
    { type: "story", moral: "He made not one arrow, yet gathered a hundred thousand, by knowing exactly how a frightened enemy would answer the dark. At the summit, foresight of the other mind is the whole campaign." }
  ]
};
export default story;
