// Norse mythology story for visualization-based reading comprehension
const odinRavens = {
  id: "odin-ravens",
  title: "Odin and His Ravens",
  icon: "🐦‍⬛",
  difficulty: "Easy", 
  theme: "Wisdom",
  estimatedTime: "6-10 min",
  description: "The wise god Odin sends his two ravens to fly across the world and bring back news.",
  content: [
    {
      type: "story",
      text: "Odin was the king of all the Norse gods. He had a long gray beard and wore a blue cloak. On his shoulders sat two black ravens named Huginn and Muninn."
    },
    {
      type: "question", 
      domain: "what",
      question: "When you picture Odin, what would be sitting on his shoulders?",
      options: [
        "Two white doves",
        "Two black ravens",
        "Two red cardinals", 
        "Two brown owls"
      ],
      correctAnswer: 1,
      explanation: "The story tells us that two black ravens named Huginn and Muninn sat on Odin's shoulders."
    },
    {
      type: "story",
      text: "Every morning, Odin would send his ravens flying across the nine worlds. The ravens had sharp eyes and could see everything that happened below. They flew over forests, mountains, and seas."
    },
    {
      type: "question",
      domain: "perspective", 
      question: "In your mental image, from what angle would the ravens see the world below them?",
      options: [
        "Looking up from the ground",
        "Looking straight ahead at eye level",
        "Looking down from high above",
        "Looking from inside a cave"
      ],
      correctAnswer: 2,
      explanation: "Since the ravens were flying high in the sky, you would picture them looking down from above at the world below."
    },
    {
      type: "story",
      text: "Huginn and Muninn saw many things on their journey. They watched farmers working in fields, sailors crossing stormy seas, and children playing in villages. Nothing escaped their keen sight."
    },
    {
      type: "question",
      domain: "background",
      question: "When you visualize the ravens flying over the countryside, what scenes would you see below?",
      options: [
        "Only empty desert sand",
        "Farmers, sailors, and villages with people",
        "Just wild animals and no people", 
        "Only tall mountains with no life"
      ],
      correctAnswer: 1,
      explanation: "The story describes farmers working, sailors on seas, and children in villages, so you would picture a world full of people doing different activities."
    },
    {
      type: "story",
      text: "When evening came, the ravens flew back to Odin's palace. They perched on his shoulders and whispered everything they had seen into his ears. This is how Odin knew about all the happenings in the world."
    },
    {
      type: "question",
      domain: "when",
      question: "In your mental picture, what time of day would the ravens return to Odin?",
      options: [
        "Early morning when the sun rises",
        "Noon when the sun is highest",
        "Evening as the day ends",
        "Midnight when it's completely dark"
      ],
      correctAnswer: 2,
      explanation: "The story says when evening came, the ravens flew back, so you would picture them returning as the day was ending."
    },
    {
      type: "story", 
      text: "The ravens told Odin about a kind farmer who shared his bread with hungry travelers. They also warned him about a dragon stirring in the northern mountains. Odin smiled, knowing his ravens helped him watch over everyone."
    },
    {
      type: "question",
      domain: "mood",
      question: "When you imagine Odin listening to his ravens' news, what expression would be on his face?",
      options: [
        "Angry and upset",
        "Confused and worried", 
        "Happy and smiling",
        "Sleepy and bored"
      ],
      correctAnswer: 2,
      explanation: "The story says Odin smiled when he heard the news, knowing his ravens helped him watch over everyone, so you would picture him looking happy."
    },
    {
      type: "story",
      moral: "Odin's ravens show us that knowledge and wisdom come from paying attention to the world around us. Good leaders listen and learn from others."
    }
  ]
};

export default odinRavens;