// src/data/stories/aesop/boy-filberts.js
const boyFilberts = {
  id: "boy-filberts",
  title: "The Boy and the Filberts",
  icon: "🫘",
  difficulty: "Easy",
  theme: "Greed leads to loss",
  estimatedTime: "5-10 min",
  description: "A boy reaches into a jar of nuts and grabs as many as his hand can hold. But now his closed fist will not come back out.",
  content: [
    {
      type: "story",
      text: "A Boy put his hand into a jar full of filberts—delicious roasted nuts. He grasped as many as his fist could possibly hold and tried to pull his hand out."
    },
    {
      type: "question",
      domain: "where",
      question: "Where are the nuts the Boy is trying to take?",
      options: [
        "Spread out on a table",
        "Inside a jar with a narrow opening",
        "In his pocket already",
        "Growing on a tree outside"
      ],
      correctAnswer: 1,
      explanation: "The nuts are inside a jar, and the jar's narrow neck is what creates the problem. Picturing this container is key to the story."
    },
    {
      type: "story",
      text: "But his closed fist, now stuffed full of nuts, was too big to pass back through the narrow neck of the jar. The Boy tugged and pulled, but his hand would not come free. He began to cry."
    },
    {
      type: "question",
      domain: "mood",
      question: "As the Boy tugs and his hand stays stuck, what is he most likely feeling?",
      options: [
        "Happy with his handful of nuts",
        "Frustrated and upset that he is trapped",
        "Sleepy and ready for a nap",
        "Proud of his cleverness"
      ],
      correctAnswer: 1,
      explanation: "His hand is trapped and he cannot get it out or keep the nuts. The story says he begins to cry, showing frustration and distress."
    },
    {
      type: "story",
      text: "A man passing by saw the Boy's trouble. \"Don't cry,\" he said kindly. \"Just let go of half the nuts, and your hand will slip out easily. Be content with less, and you can have something instead of nothing.\""
    },
    {
      type: "question",
      domain: "number",
      question: "According to the man's advice, how many nuts should the Boy release to free his hand?",
      options: [
        "All of them",
        "About half of them",
        "Just one or two nuts",
        "None—he should pull harder"
      ],
      correctAnswer: 1,
      explanation: "The man says to let go of half the nuts. This would make his fist small enough to slide out while still keeping some nuts as a reward."
    },
    {
      type: "question",
      domain: "color",
      question: "What color are filberts—the roasted nuts the Boy is grabbing?",
      options: [
        "Bright red like apples",
        "Brown, like hazelnuts when roasted",
        "Green like fresh peas",
        "White like milk"
      ],
      correctAnswer: 1,
      explanation: "Filberts are hazelnuts, and when roasted they turn a rich brown color. This warm brown is what you would see in the jar."
    },
    {
      type: "story",
      text: "The Boy, learning his lesson, loosened his grip and let some of the nuts fall back into the jar. His hand, now smaller, slipped free easily. He walked away with a modest handful—less than he wanted, but more than nothing."
    },
    {
      type: "story",
      moral: "Do not try to have everything at once. Greed for too much often leaves you with nothing. Be content with what you can reasonably take."
    }
  ]
};

export default boyFilberts;
