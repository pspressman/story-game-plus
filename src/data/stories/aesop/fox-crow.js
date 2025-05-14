
// src/data/stories/aesop/fox-crow.js
const foxCrow = {
  id: "fox-crow",
  title: "The Fox and the Crow",
  icon: "🦊",
  difficulty: "Easy",
  theme: "Flattery",
  estimatedTime: "5-10 min",
  description: "Discover why you shouldn't listen to flattery in this short fable.",
  content: [
    {
      type: "story",
      text: "A Crow was sitting on a branch of a tree with a piece of cheese in her beak when a Fox observed her and set his wits to work to discover some way of getting the cheese."
    },
    {
      type: "question",
      domain: "where",
      question: "Where would the Fox most likely be positioned in this scene?",
      options: [
        "High up in the tree next to the Crow",
        "On the ground looking up at the Crow",
        "Hidden inside a hollow in the tree trunk",
        "Swimming in a nearby stream"
      ],
      correctAnswer: 1,
      explanation: "Since the Crow is in the tree with cheese and the Fox wants to get it, the Fox would logically be positioned on the ground looking up at the Crow."
    },
    {
      type: "story",
      text: "Coming and standing under the tree he looked up and said, \"What a noble bird I see above me! Her beauty is without equal, the hue of her plumage exquisite. If only her voice is as sweet as her looks are fair, she ought without doubt to be Queen of the Birds.\""
    },
    {
      type: "question",
      domain: "movement",
      question: "How would the Fox likely move while flattering the Crow?",
      options: [
        "Pacing back and forth nervously",
        "Standing still with his head tilted upward",
        "Jumping up and down trying to reach the branch",
        "Running in circles around the tree"
      ],
      correctAnswer: 1,
      explanation: "To effectively flatter the Crow and maintain eye contact, the Fox would most naturally be visualized as standing still with his head tilted upward toward the Crow."
    },
    {
      type: "story",
      text: "The Crow was greatly flattered by this, and just to show the Fox that she could sing, she opened her mouth to give a caw. Down fell the cheese, which the Fox immediately snapped up."
    },
    {
      type: "story",
      text: "\"Thank you,\" said the Fox. \"That was all I wanted. In exchange for your cheese, I will give you a piece of advice for the future: Do not trust flatterers.\""
    },
    {
      type: "question",
      domain: "mood",
      question: "What expression would most likely be on the Crow's face after losing the cheese?",
      options: [
        "Happy and satisfied",
        "Confused but still smiling",
        "Embarrassed and disappointed",
        "Angry and vengeful"
      ],
      correctAnswer: 2,
      explanation: "After being tricked into dropping the cheese, the Crow would logically appear embarrassed by her gullibility and disappointed at losing her food."
    },
    {
      type: "story",
      moral: "Beware of flatterers; they praise only to gain advantage."
    }
  ]
};

export default foxCrow;
