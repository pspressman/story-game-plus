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
      question: "When you picture Odin standing in his palace, what would his overall silhouette look like from a distance?",
      options: [
        "A clean-shaven young man in bright armor",
        "A tall figure with a long beard, dark cloak, and two winged shapes perched on his frame",
        "A small bald man carrying a large sword",
        "A robed figure with a pointed hat and no animals nearby"
      ],
      correctAnswer: 1,
      explanation: "Combining Odin's long gray beard, blue cloak, and the two ravens on his shoulders, you would picture a commanding, broad-shouldered silhouette with dark winged shapes flanking his head."
    },
    {
      type: "story",
      text: "Every morning, Odin would send his ravens flying across the nine worlds. The ravens had sharp eyes and could see everything that happened below. They flew over forests, mountains, and seas."
    },
    {
      type: "question",
      domain: "perspective", 
      question: "In your mental image, what would a dense forest look like to the ravens as they soared high above it?",
      options: [
        "A towering wall of tree trunks blocking their path at eye level",
        "A flat, dark-green carpet of treetops stretching out beneath them",
        "A single large tree filling their entire field of vision",
        "A bright open meadow with no trees visible at all"
      ],
      correctAnswer: 1,
      explanation: "Flying high above a forest, the ravens would see the treetops compressed into a continuous canopy far below — a broad, dark-green carpet rather than individual tall trees."
    },
    {
      type: "story",
      text: "Huginn and Muninn saw many things on their journey. They watched farmers working in fields, sailors crossing stormy seas, and children playing in villages. Nothing escaped their keen sight."
    },
    {
      type: "question",
      domain: "background",
      question: "When you visualize the ravens soaring high above a stormy sea, what would the water look like from their height?",
      options: [
        "A perfectly flat, mirror-like silver surface with no movement",
        "A swirling mass of dark churning waves with whitecaps and no land in sight",
        "A shallow, calm, light-blue pond surrounded by flowers",
        "A frozen sheet of ice with no waves at all"
      ],
      correctAnswer: 1,
      explanation: "Picturing ravens flying high over a stormy sea, you would imagine dark, churning waves far below with white foam at their peaks — a turbulent, vast expanse of water."
    },
    {
      type: "story",
      text: "When evening came, the ravens flew back to Odin's palace. They perched on his shoulders and whispered everything they had seen into his ears. This is how Odin knew about all the happenings in the world."
    },
    {
      type: "question",
      domain: "when",
      question: "In your mental picture, what would the sky look like as the ravens made their way back to Odin's palace?",
      options: [
        "Bright blue with the sun directly overhead",
        "Pitch black with no visible light anywhere",
        "Pale pink and orange with the sun sinking low on the horizon",
        "Overcast white with midday clouds"
      ],
      correctAnswer: 2,
      explanation: "Since the ravens returned in the evening, you would picture a sky fading from blue to warm pink and orange hues as the sun dipped toward the horizon."
    },
    {
      type: "story", 
      text: "The ravens told Odin about a kind farmer who shared his bread with hungry travelers. They also warned him about a dragon stirring in the northern mountains. Odin smiled, knowing his ravens helped him watch over everyone."
    },
    {
      type: "question",
      domain: "mood",
      question: "When you imagine Odin hearing the warning about the dragon stirring in the mountains, what would his body posture look like?",
      options: [
        "Slouched and relaxed, looking ready to fall asleep",
        "Leaning forward with a tense, alert bearing and furrowed brow",
        "Jumping up and running away in panic",
        "Lying flat on the ground with eyes closed"
      ],
      correctAnswer: 1,
      explanation: "Receiving a warning about a dangerous dragon would make Odin visibly tense and alert — you would picture him sitting upright, leaning slightly forward, with a serious, focused expression showing the weight of his responsibility."
    },
    {
      type: "story",
      moral: "Odin's ravens show us that knowledge and wisdom come from paying attention to the world around us. Good leaders listen and learn from others."
    }
  ]
};

export default odinRavens;