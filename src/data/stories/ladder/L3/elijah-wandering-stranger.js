// elijah-wandering-stranger.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior description and block 1 both revealed the test before it was asked
// about, and Q4 asked for a reason already stated. Scaffolded outside-to-inside.
const story = {
  id: "elijah-wandering-stranger",
  title: "Elijah the Wandering Stranger",
  icon: "🚪",
  difficulty: "Easy",
  theme: "Who you are really turning away",
  estimatedTime: "5-10 min",
  description: "On one night a ragged traveller knocks at two doors in the same village.",
  meta: {
    level: 3,
    track: "gated",
    tier: "R",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Jewish",
    region: "Mediterranean",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "A traveller came into a village at dusk, dusty to the knees, with nothing on him worth taking. He went first to the largest house, where the windows were lit and there was food being carried about inside, and he knocked and asked for a little bread and somewhere out of the cold. The man of the house looked him up and down, and shut the door, and the traveller heard the bolt go across."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Picture the rich man going back to his table after the door is bolted. How long does he think about the traveller?",
      options: [
        "All evening, feeling guilty about it",
        "Hardly at all; it is a small thing that happens at doors and it is finished",
        "Until morning, when he decides to look for him",
        "Long enough to send a servant after him with bread"
      ],
      correctAnswer: 1,
      explanation: "Nothing happened to him. He was interrupted and now he is not. Picture the evening carrying on exactly as it would have, which is what a moment looks like from the side of the person for whom it costs nothing."
    },
    {
      type: "story",
      text: "He walked on to the end of the village, to a cottage with one room. The couple there had bread for the next day and no more than that. They brought him in, and gave him the bread, and gave him their bed, and the two of them lay on the floor by the fire. In the morning he was gone. After that, small good things kept quietly happening to that house, more than could be accounted for."
    },
    {
      type: "question",
      domain: "inference",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: true,
      question: "The rich man had food to spare and gave nothing. The poor couple had one day's bread and gave all of it. Picture both doors from the traveller's side. What did the second door cost, that the first would not have?",
      options: [
        "Nothing; the rich man simply chose to be unkind",
        "Everything they had, while the rich man was asked for a scrap he would not have missed",
        "The same from each, since both were asked for one meal",
        "More for the rich man, because he had more to protect"
      ],
      correctAnswer: 1,
      explanation: "The same request landed on two very different houses. One was asked for a crumb off a full table and refused it. The other was asked for tomorrow, and handed it over, and slept on the floor."
    },
    {
      type: "story",
      text: "It is told that the traveller was Elijah, who walks the world in poor clothes and knocks at doors, and that how he is answered tells more than the ones answering know."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Go back to the rich man at his table, hours before he could possibly know this. Stand inside that evening. What had already happened to him?",
      options: [
        "Nothing yet; it only becomes real when he finds out",
        "The whole of it, and he was going about his evening on the other side of a thing already settled",
        "He had been warned and had ignored the warning",
        "He had been forgiven, since he did not know"
      ],
      correctAnswer: 1,
      explanation: "The knowing changes nothing about the night. He answered the door, and the answer counted, and he ate his supper afterwards with no idea. Stand in that room and the strange part is how ordinary it felt."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "participle",
      gates: true,
      question: "Now stand inside the poor couple on the floor by the fire that night, cold, with tomorrow's bread gone. Would knowing who their guest was have made them more generous?",
      options: [
        "Yes, they would have given even more if they had known",
        "No, because they had already given everything, which is why it counted",
        "Yes, because anyone treats a prophet better than a beggar",
        "No, because they would have been too frightened to help"
      ],
      correctAnswer: 1,
      explanation: "There was nothing left to add. That is the whole weight of it: the kindness was complete before anyone knew it was being watched, which is the only condition under which such a thing can be measured at all."
    },
    { type: "story", moral: "One door shut and one door opened, and each answered more than a beggar. You cannot always see who stands before you, so answer as if it were anyone in need." }
  ]
};
export default story;
