// src/data/stories/aesop/tortoise-hare.js
const tortoiseHare = {
  id: "tortoise-hare",
  title: "The Tortoise and the Hare",
  icon: "🐢",
  difficulty: "Easy",
  theme: "Perseverance",
  estimatedTime: "5-10 min",
  description: "Learn how slow and steady can win the race in this classic fable.",
  content: [
    {
      type: "story",
      text: "A Hare was making fun of the Tortoise one day for being so slow. \"Do you ever get anywhere?\" he asked with a mocking laugh."
    },
    {
      type: "story",
      text: "\"Yes,\" replied the Tortoise, \"and I get there sooner than you think. I'll run you a race and prove it.\" The Hare was amused at the idea of running a race with the Tortoise, but agreed."
    },
    {
      type: "question",
      domain: "mood",
      question: "What expression would be on the Hare's face when the Tortoise challenged him to a race?",
      options: [
        "Angry and offended",
        "Worried and concerned",
        "Smug and overconfident",
        "Sad and disappointed"
      ],
      correctAnswer: 2,
      explanation: "Since the Hare was making fun of the Tortoise and was amused at the idea of racing him, he would most likely look smug and overconfident, not taking the challenge seriously."
    },
    {
      type: "story",
      text: "The race course was set, and all the animals in the forest gathered to watch. The Fox was chosen to be the judge. He marked the distance and started the race."
    },
    {
      type: "question",
      domain: "where",
      question: "Where would the animals watching the race most likely be positioned?",
      options: [
        "All clustered at the starting line only",
        "Scattered along the sides of the race path",
        "Following behind the racers",
        "All waiting at the finish line only"
      ],
      correctAnswer: 1,
      explanation: "The most natural way to visualize the audience would be scattered along the sides of the race path, allowing them to watch different parts of the race as it progresses."
    },
    {
      type: "story",
      text: "The Hare darted almost out of sight at once, but soon stopped and, to show his contempt for the Tortoise, lay down to have a nap. The Tortoise plodded on and on, and when the Hare awoke from his nap, he saw the Tortoise was near the finish line."
    },
    {
      type: "question",
      domain: "number",
      question: "How many times would the Hare likely have stopped during the race?",
      options: [
        "No stops at all",
        "Just once for the nap",
        "Two or three brief stops",
        "Many stops throughout the race"
      ],
      correctAnswer: 1,
      explanation: "In the story, the Hare is described as stopping once to take a nap to show his contempt for the Tortoise. There's no mention of other stops."
    },
    {
      type: "story",
      text: "The Hare now ran his swiftest, but he could not overtake the Tortoise in time. The Tortoise had reached the goal, and was calmly waiting for him."
    },
    {
      type: "question",
      domain: "color",
      question: "What color would the finish line most likely be?",
      options: [
        "Invisible, as natural forest paths don't have finish lines",
        "Brown like the dirt path",
        "White or black, standing out against the forest floor",
        "Colorful with rainbow stripes"
      ],
      correctAnswer: 2,
      explanation: "A finish line would need to be clearly visible, so it would logically be white or black to stand out against the natural colors of the forest floor."
    },
    {
      type: "story",
      text: "\"Slow and steady wins the race,\" said the Tortoise with a smile."
    },
    {
      type: "story",
      moral: "The race is not always to the swift; slow and steady determination can often lead to success."
    }
  ]
};

export default tortoiseHare;
