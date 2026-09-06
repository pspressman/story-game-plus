// blodeuwedd.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior description told the child the answer ("made and given no say"), and
// every correct option was the only passive-sounding one on its list. Scaffolded:
// Q1-Q2 read the scene from outside, Q3-Q5 require standing inside it.
const story = {
  id: "blodeuwedd",
  title: "Blodeuwedd, the Woman Made of Flowers",
  icon: "🌼",
  difficulty: "Easy",
  theme: "A life chosen for you by other hands",
  estimatedTime: "5-10 min",
  description: "A man is cursed never to marry a woman of any human family. Two magicians find a way around it.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Wales",
    region: "British Isles",
    saga: "mabinogion",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "Lleu could never marry a woman born of any human family. That was the curse on him. So the magicians Math and Gwydion went out and gathered flowers: oak blossom, and broom, and meadowsweet. They worked over them for a long while. And a woman sat up out of the heap of flowers, and looked at them, and they called her Blodeuwedd, which means flower-face. They took her to Lleu that same day, and she was married to him."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Picture the order of that day: the flowers, the working, the waking, the wedding. When was it decided that she would be Lleu's wife?",
      options: [
        "At the wedding, when she agreed to it",
        "Before she existed at all, which is why she was made",
        "When she first saw Lleu and liked him",
        "When the magicians asked her what she wanted"
      ],
      correctAnswer: 1,
      explanation: "Follow it backwards. The marriage is not something that happened to her after she woke; it is the reason there was any gathering of flowers in the first place. The decision is older than she is."
    },
    {
      type: "question",
      domain: "what",
      band: "B3",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Picture a girl in a village nearby, the same age. Set her life beside Blodeuwedd's. What does the village girl have that Blodeuwedd does not?",
      options: [
        "A family, a childhood, and years of knowing people before anything was asked of her",
        "Greater beauty than a woman made of flowers",
        "Magic of her own to protect herself with",
        "Permission to marry whoever she likes"
      ],
      correctAnswer: 0,
      explanation: "Blodeuwedd is a grown woman who is one day old. Everything the village girl stands on, people she has known, things she has seen, a past to compare against, simply is not there behind her."
    },
    {
      type: "story",
      text: "She lived in Lleu's house as his wife. In time a man named Gronw came riding through that country, and stopped, and stayed. She loved him. And the two of them made a plan against Lleu."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand inside the house with her before Gronw ever comes. She is looking at the husband she was made for. What can she not do that anybody else in that country could?",
      options: [
        "Leave the house without permission",
        "Think back to before she knew him, because there is no before",
        "Speak to Lleu about how she feels",
        "Recognise that he is a good man"
      ],
      correctAnswer: 1,
      explanation: "Everyone else can measure a marriage against the life they had first. She opened her eyes into this one. There is nothing behind her to compare it with, so there is no vantage from which she could ever have said no."
    },
    {
      type: "story",
      text: "The plan failed. Lleu lived. And Gwydion, who had made her, came for her."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "participle",
      gates: true,
      question: "Stand where Gwydion stands as he comes for her. He made her out of flowers with his own hands. What does he think he is dealing with?",
      options: [
        "A woman who has wronged his kinsman and must answer for it",
        "Something he made that has gone wrong, which is his to correct",
        "A daughter who has disappointed him",
        "An enemy magician working against him"
      ],
      correctAnswer: 1,
      explanation: "He does not put her on trial and he does not ask her anything. He comes the way you come to a thing of your own that is not doing what it was for, and that is why what happens next is a change rather than a punishment."
    },
    {
      type: "story",
      text: "He did not kill her. He worked one more change on her, and she went up off the ground as an owl, and the daylight birds would not have her near them. She keeps to the dark now."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand inside the owl and look back down the whole of her life: the flowers, the wedding, this. What has never once happened to her?",
      options: [
        "Being spoken to kindly by anyone",
        "Being asked, at any point, what she wanted",
        "Being allowed out of the house alone",
        "Being given a name of her own"
      ],
      correctAnswer: 1,
      explanation: "She was made without being asked, married without being asked, and changed without being asked. Go through it from her side and there is no moment anywhere in it where the question came to her."
    },
    { type: "story", moral: "She was made, and married, and changed, all by other hands. The story asks you to stand for a while where she stood, and feel a life she was never asked to want." }
  ]
};
export default story;
