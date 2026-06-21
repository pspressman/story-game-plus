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
      question: "How would the sorcerer most likely position his body and hands while speaking to Aladdin?",
      options: [
        "Arms crossed tightly, standing far away with a scowl",
        "Leaning in warmly, perhaps placing a hand on Aladdin's shoulder with an open smile",
        "Pacing nervously back and forth while avoiding eye contact",
        "Standing rigidly upright with hands clasped behind his back"
      ],
      correctAnswer: 1,
      explanation: "A sorcerer pretending to be a long-lost uncle would need to win Aladdin's trust quickly. He would likely use warm, familiar physical gestures — leaning in closely and perhaps touching Aladdin's shoulder — to physically perform the role of a caring relative while concealing his true motives."
    },
    {
      type: "story",
      text: "The sorcerer led Aladdin to a hidden cave filled with treasures and told him to enter, but to touch nothing except the lamp. Inside, Aladdin found magnificent jewels, gold coins, and beautiful objects beyond imagination."
    },
    {
      type: "question",
      domain: "background",
      question: "How would the air inside the cave most likely feel and smell to Aladdin as he entered?",
      options: [
        "Warm and breezy with the scent of fresh flowers",
        "Cool, stale, and musty from being sealed away for ages",
        "Hot and smoky like a blacksmith's forge",
        "Wet and salty like the ocean shore"
      ],
      correctAnswer: 1,
      explanation: "A hidden cave that had been sealed and undisturbed for a long time would most likely have trapped, stagnant air that felt cool underground and carried a musty, aged smell — details not stated in the story but logical to visualize."
    },
    {
      type: "story",
      moral: "True wealth comes not from possessions, but from wisdom and kindness of heart."
    }
  ]
};

export default aladdinLamp;