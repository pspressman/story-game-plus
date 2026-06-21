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
      question: "What would the Fox's eyes most likely be focused on as he devises his plan?",
      options: [
        "The roots of the tree, searching for fallen food",
        "The Crow's beak, where the cheese is held",
        "The sky above, watching for other birds",
        "The surrounding forest, looking for escape routes"
      ],
      correctAnswer: 1,
      explanation: "Since the Fox's entire focus is on obtaining the cheese, his gaze would be fixed on the Crow's beak where the prize is held, mentally calculating how to claim it."
    },
    {
      type: "story",
      text: "Coming and standing under the tree he looked up and said, \"What a noble bird I see above me! Her beauty is without equal, the hue of her plumage exquisite. If only her voice is as sweet as her looks are fair, she ought without doubt to be Queen of the Birds.\""
    },
    {
      type: "question",
      domain: "movement",
      question: "How would the Fox's tail most likely move as he delivers his flattering speech?",
      options: [
        "Bristling upright in visible excitement",
        "Tucked between his legs in submission",
        "Swishing slowly in a calm, deliberate manner",
        "Wagging rapidly like an excited dog"
      ],
      correctAnswer: 2,
      explanation: "A cunning Fox carefully executing a calculated scheme would keep composed and controlled, so his tail would move in a slow, deliberate swish rather than betraying eagerness or nervousness."
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