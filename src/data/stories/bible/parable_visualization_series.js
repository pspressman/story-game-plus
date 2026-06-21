// src/data/stories/bible/parable-visualization-series.js
const parableVisualizationSeries = {
  id: "parable-visualization-series",
  title: "Parables of Jesus: Visualization and Meaning",
  icon: "🌾",
  difficulty: "Medium",
  theme: "Wisdom",
  estimatedTime: "20-30 min",
  description: "Use visualization to explore Jesus' parables and understand their deeper meaning through everyday comparisons.",
  content: [
    // existing content above...

    // === PARABLE OF THE LOST COIN ===
    {
      type: "story",
      text: "Imagine a woman sweeping every corner of her home. She's lost one silver coin and won't stop looking until she finds it. When she does, she calls her friends and celebrates."
    },
    {
      type: "question",
      domain: "movement",
      question: "What would the woman's hands look like as she moved through each part of her home?",
      options: [
        "Folded calmly in her lap",
        "Reaching, pushing, and lifting objects in every corner",
        "Waving slowly at passing neighbors",
        "Clasped together and perfectly still"
      ],
      correctAnswer: 1,
      explanation: "Though the story never describes her hands, someone who has lost something precious searches by reaching into every gap and shifting objects aside—a detail the reader must picture rather than read."
    },
    {
      type: "story",
      text: "Now picture this: A student loses a special pencil from a friend. They search all through their backpack and classroom. When they find it, they smile wide and hold it close."
    },
    {
      type: "question",
      domain: "mood",
      question: "What would the student's body feel like on the inside the moment before they spotted the pencil?",
      options: [
        "Heavy and tight with worry",
        "Completely relaxed and unbothered",
        "Buzzing with excitement about lunch",
        "Numb and unaware"
      ],
      correctAnswer: 0,
      explanation: "The story tells us the student searched hard, but never describes their inner tension. A reader must infer the anxious, constricted feeling that comes just before a long-sought thing is finally found."
    },
    {
      type: "story",
      text: "Jesus said God celebrates like that when someone who feels lost is found."
    },
    {
      type: "question",
      domain: "what",
      question: "If you could see into heaven during the parable's celebration, what expression would you picture on God's face?",
      options: [
        "Indifferent and distant",
        "Disappointed and stern",
        "Radiant and overjoyed",
        "Confused and uncertain"
      ],
      correctAnswer: 2,
      explanation: "The parable compares God's response to a person throwing a joyful party—suggesting a face full of delight and warmth, something never directly described in the text."
    },

    // === PARABLE OF THE RICH FOOL ===
    {
      type: "story",
      text: "Imagine a farmer with barns overflowing with grain. Instead of sharing, he tears them down to build bigger ones. He says, 'Now I can relax!' But that night, he dies, and none of the grain goes with him."
    },
    {
      type: "question",
      domain: "background",
      question: "What would the farmer's neighbors' homes and tables look like compared to his overflowing barns?",
      options: [
        "Equally full and prosperous",
        "Grander and more decorated than his",
        "Sparse and bare, with little food to spare",
        "Identical in every way to his own"
      ],
      correctAnswer: 2,
      explanation: "The parable implies the farmer hoarded rather than shared, suggesting those around him likely lacked what he had in abundance—a detail readers must infer and picture, not one stated in the text."
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
        "Don't build barns"
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
      question: "What would the expression on the earliest worker's face look like the moment they opened their pay and saw the amount?",
      options: [
        "Soft and grateful, already expecting the kindness",
        "Darkening with irritation as they glanced at the last worker's coins",
        "Blank and unbothered, indifferent to the amount",
        "Bright with laughter, immediately celebrating with the others"
      ],
      correctAnswer: 1,
      explanation: "The story tells us some workers grumbled, but never describes their faces. A reader must visualize the shift from expectation to frustration the moment an early worker realized someone who worked far less received identical pay."
    },

    // === PARABLE OF THE RICH MAN AND LAZARUS ===
    {
      type: "story",
      text: "A rich man feasts in fine clothes while a poor man named Lazarus lies outside, hungry and sick. When both die, Lazarus is comforted in heaven, but the rich man is in pain."
    },
    {
      type: "question",
      domain: "where",
      question: "In your mental image, what does the space between Lazarus and the rich man's dining table look like?",
      options: [
        "A short, open hallway they share together",
        "A wide, unbridged gap—light and warmth on one side, cold stone on the other",
        "A crowded marketplace where they meet daily",
        "A narrow path with friendly neighbors passing through"
      ],
      correctAnswer: 1,
      explanation: "The parable never describes the physical space between them, but the contrast of feasting inside and suffering outside invites us to imagine a stark, uncrossed divide—foreshadowing the great chasm described after death."
    },
    {
      type: "story",
      text: "Now picture this: One student always gets new supplies and snacks. Another has none. After school, the one with plenty says nothing. Later, roles switch—and the first student remembers how they didn't help."
    },
    {
      type: "question",
      domain: "mood",
      question: "What would the first student's face look like in the quiet moment when they realize the other student now has everything they once had?",
      options: [
        "Bright and cheerful, unbothered by the change",
        "Tight and downcast, shadowed by a memory they cannot undo",
        "Wide-eyed with excitement at the new situation",
        "Blank and unreadable, showing no reaction at all"
      ],
      correctAnswer: 1,
      explanation: "The story tells us the student remembers not helping, but never describes their face. A reader must picture the particular heaviness that settles over someone who sees an opportunity for kindness has permanently passed."
    },
    {
      type: "story",
      text: "Jesus warns that our choices now matter. Kindness, not riches, lasts into eternity."
    },
    {
      type: "question",
      domain: "what",
      question: "If someone read this parable and then looked down at their own hands, what might those hands represent to them?",
      options: [
        "Tools only for earning more wealth",
        "Something too weak to make any difference",
        "Instruments of mercy they still have time to use",
        "A sign that hard work always brings rewards"
      ],
      correctAnswer: 2,
      explanation: "The parable implies that the rich man's window of opportunity closed at death. A reader must infer that their own hands—still alive and able—represent a chance to act with kindness that the rich man never took."
    }
  ]
};

export default parableVisualizationSeries;