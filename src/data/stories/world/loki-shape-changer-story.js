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
      question: "When you picture Loki's clothing in your mind, what colors and style would a trickster god most likely wear?",
      options: [
        "Pure white robes, clean and simple, like a holy priest",
        "Dark, shifting colors — deep greens and blacks — with an asymmetrical, unpredictable cut",
        "Bright yellow with large, cheerful polka dots",
        "Plain grey with no decoration, blending into the background"
      ],
      correctAnswer: 1,
      explanation: "Since Loki is a trickster with mischievous eyes and a sly smile, you would visualize him wearing dark, shifting, slightly unsettling colors that match his cunning nature — nothing straightforward or pure about his appearance."
    },
    {
      type: "story",
      text: "Loki had promised a giant that he could marry the goddess Freya in exchange for building a wall around the gods' home. But when the giant almost finished the wall, the gods realized Loki's promise was a terrible mistake."
    },
    {
      type: "question",
      domain: "mood",
      question: "In your mental image, what would the other gods' faces and postures look like when they confronted Loki about his promise?",
      options: [
        "Laughing and slapping him on the back with admiration",
        "Turned away from him, yawning, with drooping shoulders showing boredom",
        "Leaning forward with furrowed brows, clenched jaws, and pointed fingers aimed at Loki",
        "Sitting calmly with relaxed smiles, clearly unbothered"
      ],
      correctAnswer: 2,
      explanation: "Since the situation was a terrible mistake threatening Freya's fate, you would picture the gods bearing down on Loki with tense, accusatory body language — furrowed brows, rigid postures, and gestures of blame — not calm or cheerful at all."
    },
    {
      type: "story",
      text: "The gods demanded that Loki fix the problem. So Loki used his shape-changing magic and transformed himself into a beautiful mare. He galloped away from the wall, leading the giant's strong work-horse with him."
    },
    {
      type: "question", 
      domain: "what",
      question: "When you picture the giant watching his work-horse disappear with the mare, what would his face most likely look like in that moment?",
      options: [
        "Soft and dreamy, with a faraway, peaceful expression",
        "Twisted with sudden fury — wide eyes, bared teeth, fists clenching at his sides",
        "Blank and unreadable, showing no reaction at all",
        "Curled into a gentle smile, happy for the horse"
      ],
      correctAnswer: 1,
      explanation: "Since losing the horse meant losing his chance to finish the wall and win Freya, you would visualize the giant's face erupting into rage the instant he understood what was happening — a furious, disbelieving expression of someone watching their victory stolen away."
    },
    {
      type: "story",
      text: "Without his horse to help carry the heavy stones, the giant could not finish building the wall in time. He became very angry and chased after Loki, but the shape-changer was too clever and quick to be caught."
    },
    {
      type: "question",
      domain: "movement",
      question: "As you picture the mare that Loki had become weaving through the landscape ahead of the giant, what would her movement look like compared to his?",
      options: [
        "Slow and lumbering, barely staying ahead with great effort",
        "Darting and fluid — cutting sharp angles and disappearing into gaps the giant could never fit through",
        "Moving in a perfectly straight line at a steady, unchanging pace",
        "Zigzagging randomly with no purpose, nearly running into trees"
      ],
      correctAnswer: 1,
      explanation: "Since Loki was too clever and quick to be caught, you would visualize the mare exploiting every advantage of her smaller, nimbler form — slipping through narrow gaps, cutting sudden turns — making the enormous giant look helpless by comparison."
    },
    {
      type: "story", 
      text: "When Loki returned to his normal shape, the other gods were relieved. The giant had failed to finish the wall on time, so Freya did not have to marry him. The gods' home was still protected, and they had learned to be more careful about Loki's promises."
    },
    {
      type: "question",
      domain: "shape",
      question: "When you imagine the moment Loki finished transforming back, what would that transformation physically look like mid-change?",
      options: [
        "An instant flash with no visible in-between stage",
        "The horse shape slowly shrinking and reshaping — hooves becoming hands, the muzzle flattening into a face",
        "The mare splitting into two separate creatures before one disappeared",
        "Loki sinking underground and rising up in a new form"
      ],
      correctAnswer: 1,
      explanation: "Since the story describes a shape-change but not how it looks, you have to visualize the process yourself — most naturally picturing the animal form gradually morphing, limbs and features shifting back into a god's body."
    },
    {
      type: "story",
      moral: "Loki's story teaches us that while cleverness can solve problems, it's better to think carefully before making promises we might not be able to keep."
    }
  ]
};

export default lokiShapeChanger;