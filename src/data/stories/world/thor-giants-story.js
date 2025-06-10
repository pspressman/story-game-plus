// Norse mythology story for visualization-based reading comprehension
const thorGiants = {
  id: "thor-giants",
  title: "Thor and the Giants",
  icon: "⚡", 
  difficulty: "Medium",
  theme: "Courage",
  estimatedTime: "8-12 min",
  description: "The mighty Thor uses his hammer to protect the gods from dangerous giants.",
  content: [
    {
      type: "story",
      text: "Thor was the strongest of all the Norse gods. He had red hair like fire and carried a magic hammer called Mjolnir. When giants threatened the gods, Thor would ride across the sky in his chariot pulled by two goats."
    },
    {
      type: "question",
      domain: "color",
      question: "When you picture Thor in your mind, what color would his hair most likely be?",
      options: [
        "Golden yellow like wheat",
        "Dark brown like tree bark", 
        "Bright red like flames",
        "Silver white like snow"
      ],
      correctAnswer: 2,
      explanation: "The story tells us Thor had red hair like fire, so you would visualize bright red hair like flames."
    },
    {
      type: "story", 
      text: "One day, frost giants came down from the mountains. They were as tall as pine trees and wanted to steal the golden apples from the gods. Thor grabbed his hammer and thunder rumbled across the sky."
    },
    {
      type: "question",
      domain: "size",
      question: "When you imagine the frost giants, how tall would they appear compared to a regular person?",
      options: [
        "About the same height as a person",
        "Twice as tall as a person",
        "As tall as a large pine tree", 
        "As small as a child"
      ],
      correctAnswer: 2,
      explanation: "The story says the giants were as tall as pine trees, so you would picture them much taller than any person."
    },
    {
      type: "story",
      text: "Thor threw his magic hammer at the giants. Lightning flashed and thunder crashed. The hammer flew through the air and always came back to Thor's hand. The giants ran away in fear."
    },
    {
      type: "question",
      domain: "movement",
      question: "In your mental image, how would Thor's hammer move through the air?",
      options: [
        "It would fall straight down to the ground",
        "It would fly in a circle and return to Thor",
        "It would stick in a tree and stay there",
        "It would break into many pieces"
      ],
      correctAnswer: 1,
      explanation: "The story tells us the hammer always came back to Thor's hand, so you would picture it flying back to him."
    },
    {
      type: "story",
      text: "When Thor raised his hammer high, storm clouds gathered in the sky. Rain poured down and wind howled through the mountains. The giants knew they could not win against the god of thunder."
    },
    {
      type: "question",
      domain: "background",
      question: "When you visualize the scene above Thor, what would you see in the sky?",
      options: [
        "Bright sunshine and clear blue sky",
        "Dark storm clouds and lightning",
        "Colorful rainbow and white clouds",
        "Stars and a full moon"
      ],
      correctAnswer: 1,
      explanation: "The story describes storm clouds gathering when Thor raised his hammer, so you would picture a stormy, dark sky with lightning."
    },
    {
      type: "story",
      text: "The frost giants retreated to their icy caves in the far mountains. Thor had saved the golden apples and protected all the gods. Peace returned to the land, and the sun shone bright again."
    },
    {
      type: "question",
      domain: "where",
      question: "In your mental picture, where would the giants go after being defeated?",
      options: [
        "To a warm, sunny beach",
        "To a green meadow with flowers", 
        "To dark, icy caves in the mountains",
        "To a busy marketplace in town"
      ],
      correctAnswer: 2,
      explanation: "The story says the giants retreated to their icy caves in the far mountains, so that's where you would picture them going."
    },
    {
      type: "story",
      moral: "Thor's story teaches us that courage and strength can protect others from harm. Sometimes we must be brave to keep our friends and family safe."
    }
  ]
};

export default thorGiants;