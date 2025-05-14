// src/data/stories/world/aladdin-lamp.js
const aladdinLamp = {
  id: "aladdin-lamp",
  title: "Aladdin and the Magic Lamp",
  icon: "🪔",
  difficulty: "Medium",
  theme: "Wisdom",
  estimatedTime: "10-15 min",
  description: "Follow Aladdin's adventure as he discovers a magic lamp with a powerful genie inside.",
  content: [
    {
      type: "story",
      text: "Long ago in a distant land, there lived a poor young man named Aladdin. Though he had little money, Aladdin was kind-hearted and dreamed of a better life for himself and his widowed mother."
    },
    {
      type: "story",
      text: "One day, a stranger approached Aladdin, claiming to be his long-lost uncle. This man was actually a wicked sorcerer who needed Aladdin's help to retrieve a magical lamp from a dangerous cave."
    },
    {
      type: "question",
      domain: "mood",
      question: "What expression would most likely be on the sorcerer's face when talking to Aladdin?",
      options: [
        "Openly angry and threatening",
        "Visibly sad and tearful",
        "Friendly on the surface but with hidden malice",
        "Confused and disoriented"
      ],
      correctAnswer: 2,
      explanation: "Since the sorcerer was pretending to be Aladdin's uncle to trick him, he would logically appear friendly on the surface while hiding his true malicious intentions."
    },
    {
      type: "story",
      text: "The sorcerer led Aladdin to a hidden cave filled with treasures and told him to enter, but to touch nothing except the lamp. Inside, Aladdin found magnificent jewels, gold coins, and beautiful objects beyond imagination."
    },
    {
      type: "question",
      domain: "background",
      question: "What would the inside of the cave most likely look like?",
      options: [
        "A modern bank vault with metal walls",
        "A small, dark hole with a single lamp",
        "A vast cavern glittering with treasures and jewels",
        "An underwater grotto filled with fish"
      ],
      correctAnswer: 2,
      explanation: "Based on the description of magnificent jewels, gold coins, and beautiful objects, the cave would most logically be visualized as a vast cavern filled with glittering treasures."
    },
    {
      type: "story",
      moral: "True wealth comes not from possessions, but from wisdom and kindness of heart."
    }
  ]
};

export default aladdinLamp;