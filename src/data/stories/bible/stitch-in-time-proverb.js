// Example: Visual bridge from concrete to abstract for proverbs
const stitchInTime = {
  id: "stitch-in-time",
  title: "A Stitch in Time Saves Nine",
  icon: "🧵",
  difficulty: "Medium",
  theme: "Prevention",
  estimatedTime: "10-15 min",
  description: "Learn how fixing small problems prevents bigger ones through visualization.",
  content: [
    {
      type: "story",
      text: "Maya noticed a tiny hole in her favorite backpack. 'A stitch in time saves nine,' her grandmother said, holding up a needle and thread. Maya watched as Grandma fixed the small tear with just one stitch."
    },
    {
      type: "question",
      domain: "size",
      question: "Imagine Grandma's needle passing through the fabric around the tiny hole. How many times would she likely need to push the needle through to close it?",
      options: [
        "Dozens and dozens of times",
        "Just once or twice",
        "At least twenty times",
        "She would need scissors first"
      ],
      correctAnswer: 1,
      explanation: "A tiny hole needs very little work to close - just one or two passes of the needle, which is why fixing it early is so easy."
    },
    {
      type: "story",
      text: "Grandma showed Maya another backpack with a huge rip. 'This started as a tiny hole too, but nobody fixed it. Now it needs many stitches to repair - maybe nine or more!'"
    },
    {
      type: "question",
      domain: "movement",
      question: "Picture the fabric threads around the huge rip in the second backpack. Compared to the threads around Maya's tiny hole, how would those threads look?",
      options: [
        "Neat, straight, and tightly woven together",
        "Frayed, loose, and pulling away from each other",
        "Darker in color and thicker than normal",
        "Perfectly smooth with clean edges"
      ],
      correctAnswer: 1,
      explanation: "When a hole grows into a huge rip over time, the threads around it become frayed and unraveled, making it much harder to repair neatly."
    },
    {
      type: "story",
      text: "Maya thought about other 'small holes' in her life. She had one math problem she didn't understand. If she asked for help now, it would be like one stitch. But if she waited..."
    },
    {
      type: "question",
      domain: "number",
      question: "Imagine Maya's face during a math test next month if she never got help with that one confusing concept. What expression would she most likely have when she sees a difficult problem on the page?",
      options: [
        "A calm, confident smile",
        "A look of surprise and delight",
        "A furrowed brow and wide, panicked eyes",
        "A bored, sleepy expression"
      ],
      correctAnswer: 2,
      explanation: "Without fixing the small gap in understanding early, Maya would feel overwhelmed and anxious when harder problems built on that missing concept appear on a test."
    },
    {
      type: "story",
      text: "Now Maya understood! Whether it's a torn backpack, a confusing math problem, or hurt feelings with a friend, fixing it right away takes less work than waiting."
    },
    {
      type: "question",
      domain: "what",
      question: "Picture this: Tom notices his bike chain is a little loose. Using what you learned from Maya's story, what should Tom visualize happening if he doesn't fix it soon?",
      options: [
        "The chain staying slightly loose forever",
        "The chain fixing itself over time",
        "The chain getting looser until it falls off",
        "The chain turning a different color"
      ],
      correctAnswer: 2,
      explanation: "Just like the hole in the backpack, small problems with the bike will get worse without fixing!"
    },
    {
      type: "story",
      moral: "A stitch in time saves nine means: fixing a small problem now prevents it from becoming a big problem later. One small action today saves lots of work tomorrow!"
    }
  ]
};

export default stitchInTime;