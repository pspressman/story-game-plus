// src/data/stories/bible/parable-visualization-series.js
const parableVisualizationSeries = {
  id: "parable-visualization-series",
  title: "Parables of Jesus: Visualization and Meaning",
  icon: "🌾",
  difficulty: "Medium",
  theme: "Wisdom",
  estimatedTime: "20-30 min",
  description: "Use visualization to explore Jesus’ parables and understand their deeper meaning through everyday comparisons.",
  content: [
    // existing content above...

    // === PARABLE OF THE LOST COIN ===
    {
      type: "story",
      text: "Imagine a woman sweeping every corner of her home. She’s lost one silver coin and won’t stop looking until she finds it. When she does, she calls her friends and celebrates."
    },
    {
      type: "question",
      domain: "movement",
      question: "How would the woman’s body move as she searched for the coin?",
      options: [
        "Calm and still",
        "Tired and sleeping",
        "Busy and focused",
        "Running in circles"
      ],
      correctAnswer: 2,
      explanation: "She’d be moving with purpose, checking every space carefully."
    },
    {
      type: "story",
      text: "Now picture this: A student loses a special pencil from a friend. They search all through their backpack and classroom. When they find it, they smile wide and hold it close."
    },
    {
      type: "question",
      domain: "mood",
      question: "What emotion would show on their face when they find the lost item?",
      options: [
        "Sadness",
        "Joy and relief",
        "Fear",
        "Anger"
      ],
      correctAnswer: 1,
      explanation: "Just like the woman with the coin, they’d feel joy when something special is found."
    },
    {
      type: "story",
      text: "Jesus said God celebrates like that when someone who feels lost is found."
    },
    {
      type: "question",
      domain: "what",
      question: "What does the parable of the lost coin teach?",
      options: [
        "Coins are important",
        "God searches for and rejoices over each person",
        "You should clean your house more",
        "Only perfect people matter"
      ],
      correctAnswer: 1,
      explanation: "Jesus teaches that each person is precious to God, like a coin worth searching for."
    },

    // === PARABLE OF THE RICH FOOL ===
    {
      type: "story",
      text: "Imagine a farmer with barns overflowing with grain. Instead of sharing, he tears them down to build bigger ones. He says, 'Now I can relax!' But that night, he dies, and none of the grain goes with him."
    },
    {
      type: "question",
      domain: "background",
      question: "What would you see behind the man as he looks over his full barns?",
      options: [
        "Huge piles of grain and smiling workers",
        "Empty fields and small sheds",
        "Torn-down buildings and piles of wood",
        "Rain clouds and lightning"
      ],
      correctAnswer: 2,
      explanation: "He tore down his barns to build new ones, focused on storing more for himself."
    },
    {
      type: "story",
      text: "Now picture this: A kid wins a huge box of candy. Instead of sharing, they hide it. But later, the candy melts in the sun and can't be eaten."
    },
    {
      type: "question",
      domain: "what",
      question: "What is the parable of the rich fool teaching?",
      options: [
        "More candy is always better",
        "Store up treasures that last—like kindness—not just stuff",
        "Grain is more useful than candy",
        "Don’t build barns"
      ],
      correctAnswer: 1,
      explanation: "Jesus warns not to treasure things that fade, but to value what lasts."
    },

    // === PARABLE OF THE WORKERS IN THE VINEYARD ===
    {
      type: "story",
      text: "A landowner hires workers all day—some in the morning, some in the afternoon, and some at the last minute. At the end, everyone gets the same pay."
    },
    {
      type: "question",
      domain: "sound",
      question: "What sounds would you hear as workers react to being paid the same?",
      options: [
        "Surprised murmurs and maybe complaining",
        "Marching feet",
        "Complete silence",
        "Joyful clapping by all"
      ],
      correctAnswer: 0,
      explanation: "Some workers were upset because they expected more—but the owner was fair and generous."
    },
    {
      type: "story",
      text: "Now picture this: A teacher gives everyone a treat at the end of the day—whether they cleaned up early or just at the end. Some students are confused, but the teacher says, 'I chose to be kind to everyone.'"
    },
    {
      type: "question",
      domain: "what",
      question: "What is the parable of the vineyard workers teaching?",
      options: [
        "People should only work early",
        "God’s generosity is not based on how long we’ve worked",
        "Fairness always means the same effort",
        "Rewards should always match hours"
      ],
      correctAnswer: 1,
      explanation: "Jesus teaches that God's grace is generous and not earned like a paycheck."
    },

    // === PARABLE OF THE RICH MAN AND LAZARUS ===
    {
      type: "story",
      text: "A rich man feasts in fine clothes while a poor man named Lazarus lies outside, hungry and sick. When both die, Lazarus is comforted in heaven, but the rich man is in pain."
    },
    {
      type: "question",
      domain: "where",
      question: "In your mental image, where is Lazarus lying during his life?",
      options: [
        "At a royal banquet table",
        "Beside the rich man's gate, cold and hungry",
        "On a golden bed",
        "Inside the rich man’s home"
      ],
      correctAnswer: 1,
      explanation: "Lazarus was suffering at the gate—ignored by the rich man."
    },
    {
      type: "story",
      text: "Now picture this: One student always gets new supplies and snacks. Another has none. After school, the one with plenty says nothing. Later, roles switch—and the first student remembers how they didn’t help."
    },
    {
      type: "question",
      domain: "mood",
      question: "What emotion might the first student feel when roles are reversed?",
      options: [
        "Pride and joy",
        "Regret and sorrow",
        "Excitement",
        "Jealousy"
      ],
      correctAnswer: 1,
      explanation: "Like the rich man, the student may wish they had shown kindness when they could."
    },
    {
      type: "story",
      text: "Jesus warns that our choices now matter. Kindness, not riches, lasts into eternity."
    },
    {
      type: "question",
      domain: "what",
      question: "What does the parable of the rich man and Lazarus teach?",
      options: [
        "Rich people are always bad",
        "Poor people never have hope",
        "What we do with what we have matters to God",
        "Only money can help others"
      ],
      correctAnswer: 2,
      explanation: "Jesus teaches that mercy and action—not wealth—are what truly count."
    }
  ]
};

export default parableVisualizationSeries;
