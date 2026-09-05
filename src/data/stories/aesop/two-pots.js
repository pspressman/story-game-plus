// src/data/stories/aesop/two-pots.js
const twoPots = {
  id: "two-pots",
  title: "The Two Pots",
  icon: "🫙",
  difficulty: "Easy",
  theme: "Unequal partnerships are dangerous",
  estimatedTime: "5-10 min",
  description: "A clay pot and a brass pot sit on the riverbank. When the brass pot suggests they travel together, the clay pot must make a careful choice.",
  content: [
    {
      type: "story",
      text: "A Clay Pot and a Brass Pot stood together on the bank of a river. The river's current was strong, and pieces of driftwood bobbed past. \"Friend,\" said the Brass Pot, \"let us float down the river together and see the world!\""
    },
    {
      type: "question",
      domain: "where",
      question: "Where are the two pots as the Brass Pot makes his suggestion?",
      options: [
        "Already floating in the middle of the river",
        "On the bank beside the river",
        "Inside a house far from any water",
        "At the bottom of the ocean"
      ],
      correctAnswer: 1,
      explanation: "They stand on the riverbank, looking at the water. The Clay Pot has not yet decided whether to accept the journey."
    },
    {
      type: "story",
      text: "\"Thank you for the invitation,\" replied the Clay Pot carefully, \"but I think I must stay here on the bank. You are made of strong brass, but I am only fragile clay.\""
    },
    {
      type: "question",
      domain: "mood",
      question: "As the Clay Pot politely refuses, what is he most likely feeling?",
      options: [
        "Excited to take risks",
        "Worried and cautious, aware of his own fragility",
        "Angry at the Brass Pot for asking",
        "Bored and ready to sleep"
      ],
      correctAnswer: 1,
      explanation: "The Clay Pot is being careful. He knows he is fragile and the journey is dangerous. His refusal comes from self-protective worry, not anger or boredom."
    },
    {
      type: "question",
      domain: "color",
      question: "What color is the Brass Pot offering the invitation?",
      options: [
        "Dull gray like stone",
        "Golden or coppery yellow—the color of brass",
        "Bright white",
        "The same reddish-brown as the Clay Pot"
      ],
      correctAnswer: 1,
      explanation: "Brass is a golden or yellowish metal. Its color and shine mark it as strong and valuable, unlike the plain clay."
    },
    {
      type: "story",
      text: "\"Nonsense!\" laughed the Brass Pot. \"I will protect you. We will stay side by side, and nothing will harm you.\" But the Clay Pot shook his head. \"If we float together and touch, even accidentally, you will shatter me. And if driftwood knocks us together, I will break.\""
    },
    {
      type: "question",
      domain: "number",
      question: "If the Clay Pot and the Brass Pot bump together in the river, how many of them will break?",
      options: [
        "Both will shatter equally",
        "Only the Clay Pot—the Brass Pot is too strong to break",
        "Neither will break",
        "Only the Brass Pot"
      ],
      correctAnswer: 1,
      explanation: "Brass is hard metal and clay is fragile. In any collision between them, the clay will shatter while the brass remains whole."
    },
    {
      type: "story",
      text: "The Clay Pot stayed safely on the bank. The Brass Pot floated away down the river, dented a few times by rocks but otherwise whole. The Clay Pot, watching from shore, knew he had chosen wisely."
    },
    {
      type: "story",
      moral: "Equals make the best partners. When strength and weakness travel together, the weak one bears all the risk."
    }
  ]
};

export default twoPots;
