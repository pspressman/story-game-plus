// src/data/stories/aesop/milkmaid-pail.js
const milkmaidPail = {
  id: "milkmaid-pail",
  title: "The Milkmaid and Her Pail",
  icon: "🥛",
  difficulty: "Easy",
  theme: "Don't count your chickens",
  estimatedTime: "5-10 min",
  description: "A milkmaid carries a pail of milk on her head and dreams of all she will buy with the money. Watch what happens to plans built on things not yet sold.",
  content: [
    {
      type: "story",
      text: "A Milkmaid walked to market with a full pail of milk balanced carefully on her head. As she walked, she began to think about what she would do with the money from selling the milk."
    },
    {
      type: "question",
      domain: "where",
      question: "As the Milkmaid walks and dreams, where is the pail of milk?",
      options: [
        "In her hands in front of her",
        "Balanced on top of her head",
        "Already sold at the market",
        "Left at home by mistake"
      ],
      correctAnswer: 1,
      explanation: "She carries the pail balanced on her head as she walks—a detail that matters when she starts moving carelessly."
    },
    {
      type: "story",
      text: "\"With this milk,\" she thought, \"I will buy eggs. The eggs will hatch into chickens. I'll sell the chickens and buy a fine new dress. In that dress, I'll turn heads at the fair, and I'll toss my head proudly at all the young men.\""
    },
    {
      type: "question",
      domain: "number",
      question: "At this point in the story, how many of the things she's imagining does the Milkmaid actually own right now?",
      options: [
        "Everything—the eggs, chickens, and dress",
        "Only the pail of milk, nothing else yet",
        "The eggs and chickens, but not the dress",
        "The dress only"
      ],
      correctAnswer: 1,
      explanation: "She owns only the milk. The eggs, chickens, and dress are all imagined future purchases that haven't happened yet."
    },
    {
      type: "story",
      text: "Lost in her daydream, the Milkmaid tossed her head proudly just as she imagined doing at the fair. The pail tumbled off her head and smashed on the ground. All the milk spilled into the dirt."
    },
    {
      type: "question",
      domain: "mood",
      question: "Picture the Milkmaid's face the instant after the milk spills. What does she most likely feel?",
      options: [
        "Joyful, ready to continue to the market",
        "Shocked and dismayed, watching her plans vanish",
        "Relieved to put the pail down",
        "Proud of her graceful movement"
      ],
      correctAnswer: 1,
      explanation: "Her entire chain of imagined purchases depended on that milk. The moment it spills, all her plans collapse at once, bringing shock and dismay."
    },
    {
      type: "question",
      domain: "color",
      question: "What color is the milk spreading across the dirt?",
      options: [
        "Clear like water",
        "White pooling in the brown dust",
        "Yellow like butter",
        "Green from the grass"
      ],
      correctAnswer: 1,
      explanation: "Fresh milk is white, and as it spills onto brown dirt, that contrast would be clearly visible—the white liquid soaking into the earth."
    },
    {
      type: "story",
      text: "The Milkmaid stood looking at the puddle of milk and her broken pail. There would be no eggs, no chickens, no dress, and no proud toss of her head at the fair."
    },
    {
      type: "story",
      moral: "Don't count your chickens before they hatch. Build plans on what you have, not what you hope to have."
    }
  ]
};

export default milkmaidPail;
