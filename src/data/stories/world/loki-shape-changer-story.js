// Norse mythology story for visualization-based reading comprehension
const lokiShapeChanger = {
  id: "loki-shape-changer",
  title: "Loki the Shape-Changer", 
  icon: "🎭",
  difficulty: "Medium",
  theme: "Cleverness",
  estimatedTime: "8-12 min", 
  description: "The mischievous god Loki uses his shape-changing powers to solve a problem he created.",
  content: [
    {
      type: "story",
      text: "Loki was the trickster god who could change into any shape he wanted. He had green eyes that sparkled with mischief and a sly smile. One day, his tricks got the other gods into serious trouble."
    },
    {
      type: "question",
      domain: "color", 
      question: "When you picture Loki's eyes in your mind, what color would they be?",
      options: [
        "Deep blue like the ocean",
        "Brown like tree bark",
        "Green and sparkling with mischief", 
        "Gray like storm clouds"
      ],
      correctAnswer: 2,
      explanation: "The story tells us Loki had green eyes that sparkled with mischief, so you would visualize bright green, playful eyes."
    },
    {
      type: "story",
      text: "Loki had promised a giant that he could marry the goddess Freya in exchange for building a wall around the gods' home. But when the giant almost finished the wall, the gods realized Loki's promise was a terrible mistake."
    },
    {
      type: "question",
      domain: "mood",
      question: "In your mental image, how would the other gods feel when they realized Loki's mistake?",
      options: [
        "Happy and excited about the wedding",
        "Worried and upset about the promise",
        "Sleepy and uninterested", 
        "Confused but not concerned"
      ],
      correctAnswer: 1,
      explanation: "The story says the gods realized it was a terrible mistake, so you would picture them looking worried and upset about what Loki had promised."
    },
    {
      type: "story",
      text: "The gods demanded that Loki fix the problem. So Loki used his shape-changing magic and transformed himself into a beautiful mare. He galloped away from the wall, leading the giant's strong work-horse with him."
    },
    {
      type: "question", 
      domain: "what",
      question: "When you visualize Loki using his magic powers, what would he change into?",
      options: [
        "A fierce wolf with sharp teeth",
        "A beautiful mare (female horse)",
        "A giant eagle with large wings",
        "A slippery fish with silver scales"
      ],
      correctAnswer: 1,
      explanation: "The story explains that Loki transformed himself into a beautiful mare to solve the problem."
    },
    {
      type: "story",
      text: "Without his horse to help carry the heavy stones, the giant could not finish building the wall in time. He became very angry and chased after Loki, but the shape-changer was too clever and quick to be caught."
    },
    {
      type: "question",
      domain: "movement",
      question: "In your mental picture, how would Loki (as a mare) move to escape the angry giant?",
      options: [
        "Slowly walking step by step",
        "Standing perfectly still",
        "Galloping quickly and cleverly away",
        "Flying high up into the clouds"
      ],
      correctAnswer: 2,
      explanation: "The story says Loki was too clever and quick to be caught, so you would picture him galloping swiftly away from the giant."
    },
    {
      type: "story", 
      text: "When Loki returned to his normal shape, the other gods were relieved. The giant had failed to finish the wall on time, so Freya did not have to marry him. The gods' home was still protected, and they had learned to be more careful about Loki's promises."
    },
    {
      type: "question",
      domain: "shape",
      question: "When you imagine Loki changing back, what shape would he return to?",
      options: [
        "He would stay as a mare forever",
        "His normal god shape with human form",
        "A completely different animal shape",
        "A tree or plant shape"
      ],
      correctAnswer: 1,
      explanation: "The story says Loki returned to his normal shape, so you would picture him changing back to his regular god form that looks like a person."
    },
    {
      type: "story",
      moral: "Loki's story teaches us that while cleverness can solve problems, it's better to think carefully before making promises we might not be able to keep."
    }
  ]
};

export default lokiShapeChanger;