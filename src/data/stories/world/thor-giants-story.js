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
      question: "If you could see Thor's eyes in your mental image, what color would they most likely appear?",
      options: [
        "Soft violet like lavender flowers",
        "Pale grey like a calm winter sky",
        "Bright blue like crackling electricity",
        "Deep brown like rich soil"
      ],
      correctAnswer: 2,
      explanation: "Since Thor is the god of thunder and lightning, you would likely picture his eyes as a fierce electric blue, matching the crackling energy of the lightning he commands."
    },
    {
      type: "story", 
      text: "One day, frost giants came down from the mountains. They were as tall as pine trees and wanted to steal the golden apples from the gods. Thor grabbed his hammer and thunder rumbled across the sky."
    },
    {
      type: "question",
      domain: "size",
      question: "If you pictured a frost giant reaching down to pick up a full-grown adult human, how would that look?",
      options: [
        "The giant would struggle and strain to lift the person",
        "The giant would need both hands and bend low to reach",
        "The giant could scoop the person up the way you might pick up a small toy",
        "The person and giant would be close enough in size to shake hands easily"
      ],
      correctAnswer: 2,
      explanation: "Since the giants tower as tall as pine trees, a full-grown person would be tiny by comparison, so you would picture the giant plucking a human off the ground as effortlessly as picking up a small figurine."
    },
    {
      type: "story",
      text: "Thor threw his magic hammer at the giants. Lightning flashed and thunder crashed. The hammer flew through the air and always came back to Thor's hand. The giants ran away in fear."
    },
    {
      type: "question",
      domain: "movement",
      question: "When you picture the hammer returning to Thor's outstretched hand, what would his hand and arm look like bracing for the catch?",
      options: [
        "His arm would be limp and relaxed at his side",
        "His arm would be stretched forward with fingers spread wide, muscles tensed",
        "His hands would be covering his face in fear",
        "Both arms would be crossed calmly over his chest"
      ],
      correctAnswer: 1,
      explanation: "Catching a powerful returning weapon would require readiness, so you would picture Thor thrusting his arm forward with fingers splayed open and muscles tightened, braced to grip the handle as it flies back."
    },
    {
      type: "story",
      text: "When Thor raised his hammer high, storm clouds gathered in the sky. Rain poured down and wind howled through the mountains. The giants knew they could not win against the god of thunder."
    },
    {
      type: "question",
      domain: "background",
      question: "If you could see the mountains in the background during Thor's battle, what would they look like?",
      options: [
        "Dry and dusty with no vegetation",
        "Lush and green with blooming flowers",
        "Shrouded in mist with rain-slicked rock faces",
        "Glowing warmly in bright afternoon sunlight"
      ],
      correctAnswer: 2,
      explanation: "With rain pouring down and wind howling through the mountains, you would picture the peaks wrapped in grey mist and soaked with rain, making the rocky surfaces dark and wet."
    },
    {
      type: "story",
      text: "The frost giants retreated to their icy caves in the far mountains. Thor had saved the golden apples and protected all the gods. Peace returned to the land, and the sun shone bright again."
    },
    {
      type: "question",
      domain: "where",
      question: "In your mind, what would the entrance to the frost giants' home look like from the outside?",
      options: [
        "A wide wooden door painted bright red",
        "A jagged opening rimmed with ice and hanging icicles",
        "A neat stone archway covered in vines",
        "A sandy tunnel entrance surrounded by palm trees"
      ],
      correctAnswer: 1,
      explanation: "Since the giants live in icy caves deep in cold mountains, you would picture a rough, jagged cave mouth fringed with thick ice and long icicles dripping from above."
    },
    {
      type: "story",
      moral: "Thor's story teaches us that courage and strength can protect others from harm. Sometimes we must be brave to keep our friends and family safe."
    }
  ]
};

export default thorGiants;