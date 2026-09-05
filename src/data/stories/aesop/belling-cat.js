// src/data/stories/aesop/belling-cat.js
const bellingCat = {
  id: "belling-cat",
  title: "Belling the Cat",
  icon: "🔔",
  difficulty: "Easy",
  theme: "Easy to propose, hard to do",
  estimatedTime: "5-10 min",
  description: "The mice hold a meeting to solve their biggest problem: the cat. One clever mouse has a brilliant idea—but who will carry it out?",
  content: [
    {
      type: "story",
      text: "The Mice held a council to discuss how to deal with the Cat who had been catching them one by one. Many plans were proposed and rejected. At last, a young Mouse stood up and said proudly, \"I have the perfect solution!\""
    },
    {
      type: "question",
      domain: "where",
      question: "Where are all the mice gathered as they discuss their problem?",
      options: [
        "Scattered throughout the house, each hiding alone",
        "Together in a council meeting",
        "Inside the cat's basket",
        "Outside in the street far from home"
      ],
      correctAnswer: 1,
      explanation: "They have called a formal meeting—a council—to discuss the problem together. Picturing them assembled as a group matters for what comes next."
    },
    {
      type: "story",
      text: "\"We should hang a bell around the Cat's neck,\" the young Mouse declared. \"Then we will hear him coming and have time to run. We will never be caught by surprise again!\" The mice cheered and clapped. It seemed like the perfect plan."
    },
    {
      type: "question",
      domain: "mood",
      question: "As the young Mouse finishes explaining his bell plan, how do the other mice seem to feel?",
      options: [
        "Doubtful and worried it won't work",
        "Excited and relieved, thinking the problem is solved",
        "Angry at the young Mouse for speaking",
        "Bored and ready to leave"
      ],
      correctAnswer: 1,
      explanation: "They cheer and clap, seeing the solution as perfect. They feel excited relief—at least until someone asks the next question."
    },
    {
      type: "story",
      text: "Then an old wise Mouse stood up slowly. \"That is indeed a wonderful plan,\" he said. \"But tell me—which one of you will volunteer to hang the bell around the Cat's neck?\""
    },
    {
      type: "question",
      domain: "number",
      question: "After the old Mouse asks who will actually hang the bell on the cat, how many mice volunteer?",
      options: [
        "Every mouse raises their paw at once",
        "The young Mouse who proposed it volunteers immediately",
        "About half of them step forward bravely",
        "Not a single mouse volunteers"
      ],
      correctAnswer: 3,
      explanation: "The whole point is that nobody will take on the dangerous task. The silence after the question is the lesson."
    },
    {
      type: "question",
      domain: "color",
      question: "Picture the bell the mice want to hang on the cat. What color would such a small warning bell most likely be?",
      options: [
        "Golden or silver metal",
        "Bright red like danger",
        "Wooden brown",
        "Invisible so the cat won't see it"
      ],
      correctAnswer: 0,
      explanation: "Small bells are typically made of brass, gold, or silver metal—materials that ring clearly when they move."
    },
    {
      type: "story",
      text: "A long silence fell over the council. The perfect plan, it turned out, required someone to do the most dangerous part. Not one mouse was willing to face the Cat to hang the bell."
    },
    {
      type: "story",
      moral: "It is easy to propose impossible solutions when you don't have to carry them out yourself."
    }
  ]
};

export default bellingCat;
