// src/data/stories/aesop/fox-grapes.js
const foxGrapes = {
  id: "fox-grapes",
  title: "The Fox and the Grapes",
  icon: "🦊",
  difficulty: "Easy",
  theme: "Sour grapes",
  estimatedTime: "5-10 min",
  description: "A hungry fox spots delicious grapes hanging high above. Watch what happens when he cannot reach them.",
  content: [
    {
      type: "story",
      text: "A Fox one hot summer's day came upon a vineyard. High on a trellis hung bunches of ripe purple grapes, glistening in the sunlight. The Fox's mouth watered at the sight."
    },
    {
      type: "question",
      domain: "where",
      question: "Picture the grapes the Fox is staring at. Where are they hanging?",
      options: [
        "On the ground within easy reach",
        "High up on a trellis above his head",
        "Hidden inside a locked shed",
        "Floating in mid-air"
      ],
      correctAnswer: 1,
      explanation: "The grapes hang high on a trellis, which is why the Fox will need to jump to reach them. Picturing their position above him is key to the whole story."
    },
    {
      type: "story",
      text: "The Fox backed up and took a running leap at the grapes. He missed. He tried again and again, jumping as high as he could, but each time he fell short. The grapes remained just out of reach."
    },
    {
      type: "question",
      domain: "number",
      question: "How many times does the Fox successfully grab a grape?",
      options: [
        "Zero times—he never reaches them",
        "Once, on his first try",
        "Several times, but drops them",
        "Every time he jumps"
      ],
      correctAnswer: 0,
      explanation: "Despite all his jumping, the Fox never manages to reach even a single grape. This failure is what leads to his response."
    },
    {
      type: "story",
      text: "Finally, hot and tired, the Fox gave up. As he walked away, he lifted his nose in the air and said, \"I am sure those grapes are sour anyway. I wouldn't want them even if I could reach them.\""
    },
    {
      type: "question",
      domain: "mood",
      question: "As the Fox walks away saying the grapes are sour, what is he really feeling inside?",
      options: [
        "Genuinely relieved to have discovered they were bad",
        "Disappointed and trying to hide his failure from himself",
        "Happy and proud of his jumping",
        "Curious about what other fruit might be nearby"
      ],
      correctAnswer: 1,
      explanation: "The Fox is pretending the grapes weren't desirable to save his pride. His real feeling is disappointment, which he masks by declaring them sour."
    },
    {
      type: "question",
      domain: "color",
      question: "What color are the ripe grapes hanging on the trellis?",
      options: [
        "Green and unripe",
        "Purple and glistening",
        "Yellow like lemons",
        "Red like apples"
      ],
      correctAnswer: 1,
      explanation: "The story describes them as purple and ripe, glistening in the sunlight—clearly desirable fruit that the Fox genuinely wanted."
    },
    {
      type: "story",
      text: "And so the Fox trotted off, pretending he had never wanted the grapes at all."
    },
    {
      type: "story",
      moral: "It is easy to despise what you cannot have."
    }
  ]
};

export default foxGrapes;
