// marie-de-france-lai.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: description stated the whole dilemma, Q2 asked the child to agree that a bind
// was a bind, and Q4 was a lookup. All options now carry B4 subordination.
const story = {
  id: "marie-de-france-lai",
  title: "A Lai of Marie de France: Lanval's Promise",
  icon: "🌹",
  difficulty: "Medium",
  theme: "Two promises that cannot both be kept",
  estimatedTime: "5-10 min",
  description: "A poor knight at Arthur's court is loved by a lady nobody else has ever seen.",
  meta: {
    level: 4,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "France",
    region: "Western Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "These tales were set down in verse around the year 1150 by Marie de France, and it is worth saying plainly: a woman wrote them, in an age when few women's words were written down at all. This is one of her lais, the tale of the knight Lanval." },
    {
      type: "story",
      text: "Lanval was a knight of Arthur's court whom nobody thought about much, and he had run out of money. Then a lady found him, of great beauty and greater wealth, and loved him, and gave him whatever he needed. She asked one thing: he was never to speak of her to anyone. If he did, she would be gone and he would not see her again. He promised, easily, because at that moment there was nothing he wanted to say to anybody."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture Lanval at court in the months after, richly dressed, with money nobody can explain. What does the promise cost him then?",
      options: [
        "A great deal, since he must invent a false account of his fortune whenever he is asked",
        "Almost nothing, because a secret he has no wish to tell is not yet a burden to keep",
        "His friendships, as the other knights withdraw from a man who will not explain himself",
        "His honour, since a knight who cannot account for his wealth is assumed to have stolen it"
      ],
      correctAnswer: 1,
      explanation: "He agreed to it without weighing it, and for a long time there is nothing to weigh. A promise only shows what it is worth on the day keeping it costs something, and that day has not come yet."
    },
    {
      type: "story",
      text: "Then the queen came to Lanval and wanted him, and he refused her. So she went to the king and said Lanval had insulted her honour. Now he stood accused in front of the whole court, and the one fact that would clear him was the lady: that he was loved already, by someone beside whom the queen was nothing. It was the single thing he had sworn never to say."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture the queen choosing her accusation. She could have said many things about him. Why does she choose this one?",
      options: [
        "Because an insult to her honour is the charge the king is most certain to punish severely",
        "Because it is the charge he cannot answer without breaking the promise that keeps her rival",
        "Because she believes it is partly true, since he refused her more coldly than he needed to",
        "Because the court will believe a queen over a poor knight in any matter of this kind"
      ],
      correctAnswer: 1,
      explanation: "She does not know about the promise, and she does not need to. She picks the charge whose only answer is the woman he is hiding, so that either he stays silent and is ruined, or he speaks and loses what he was hiding."
    },
    {
      type: "story",
      text: "Lanval spoke. He told the court about his lady, and cleared his name, and knew what he had done as he was doing it. And she was gone, exactly as she had said she would be."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture the alternative: Lanval stays silent, keeps the promise, and is condemned. What would the lady have got out of that?",
      options: [
        "Her secret kept, which is what she asked for and the only thing she ever required of him",
        "Her secret kept and the man it belonged to destroyed, which is not what she wanted either",
        "Proof of his devotion, which would have moved her to come and save him from the court",
        "Nothing at all, since a promise kept in silence cannot be known about or rewarded"
      ],
      correctAnswer: 1,
      explanation: "Both roads take something from her. Keeping faith with the rule would have handed the queen the man the rule was protecting. There is no version of that day where she gets everything she asked for."
    },
    {
      type: "story",
      text: "In Marie's telling the lady comes to the court herself at the last, and proves he told the truth, and takes him away with her. But the knot is tied first, and felt, before any mercy unties it."
    },
    { type: "story", moral: "Some promises collide, and no one can keep them both. Lanval saved his honour and lost his love, and the cost was the measure of how much each oath was worth." }
  ]
};
export default story;
