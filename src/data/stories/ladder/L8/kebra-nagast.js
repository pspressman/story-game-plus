// kebra-nagast.js  L8, B5 a mind holding a mind. Target: reported_speech. Gate: track what was said across the seam.
const story = {
  id: "kebra-nagast",
  title: "The Queen of Sheba and the Word of Solomon",
  icon: "📜",
  difficulty: "Advanced",
  theme: "Drawn by what was said, going to see for oneself",
  estimatedTime: "5-10 min",
  description: "A queen crosses the world because of reports of a king's wisdom, and a son sets out to find a father he knows only by his mother's words. Track what is told against what is seen.",
  meta: {
    level: 8,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Ethiopia",
    region: "East Africa",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Far in the south reigned Makeda, the Queen of Sheba. A merchant who had traveled north came back and told her of a king named Solomon, who was said to be wiser than any ruler on earth, building wonders and judging every hard case with ease." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "The queen learns of Solomon's wisdom from a merchant's account. At this point, does she know his wisdom firsthand, or only through what was said to her?",
      options: [
        "She knows it firsthand, having met him",
        "Only through what was said; her knowledge rests entirely on the merchant's report until she goes herself",
        "She knows it from a letter Solomon wrote her",
        "She does not know of him at all"
      ],
      correctAnswer: 1,
      explanation: "Her picture of Solomon begins as borrowed words, not direct sight. Tracking the seam means marking that what she holds is a report, which is exactly why she resolves to cross the world and test it against the man himself."
    },
    { type: "story", text: "Unwilling to rest on rumor, the queen made the long journey north to see for herself. She questioned Solomon with the hardest riddles she knew, and found that the reports had been true; his wisdom was real. She stayed a while at his court before returning home, and in time bore a son named Menelik." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "When Menelik is grown, his mother tells him that his father is the great King Solomon, far away in the north. How does Menelik come to know who his father is?",
      options: [
        "He remembers his father from childhood",
        "Only from what his mother tells him, for he has never met or seen Solomon",
        "From a portrait on the wall",
        "Solomon visits and tells him himself"
      ],
      correctAnswer: 1,
      explanation: "Menelik's father exists for him entirely as his mother's words. Tracking the seam means seeing that he holds a father he has only been told of, which sets him on the same path his mother once took: to go and see for himself."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Both mother and son act the same way when handed important news from afar. What do they each do rather than simply trust the report?",
      options: [
        "They ignore the news entirely",
        "They travel to see the truth firsthand, treating the report as a reason to go and verify, not a final answer",
        "They send a messenger to decide for them",
        "They wait for a second rumor to confirm the first"
      ],
      correctAnswer: 1,
      explanation: "The tale rhymes across a generation: each is drawn by words and then goes to test them in person. Tracking what was said means noticing that a report, for both of them, is a starting point to be checked, not an ending to be believed."
    },
    { type: "story", text: "So Menelik journeyed north and met his father at last, and Solomon knew him for his son. Menelik returned to his mother's land carrying his father's blessing, and the line of Sheba and Solomon was joined in him." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why did the Queen of Sheba travel north to Solomon?",
      options: [
        "To see for herself whether the reports of his wisdom were true",
        "To make war on his kingdom",
        "Because he had summoned her",
        "To trade spices and gold only"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the reports drew her to verify them in person. Here it frames the pattern rather than testing the tracking of what was said."
    },
    { type: "story", moral: "A queen and her son were each drawn across the world by words, and each went to meet the truth in person. To read it is to mark the gap between what is told and what is seen." }
  ]
};
export default story;
