// src/data/stories/aesop/ass-lions-skin.js
const assLionsSkin = {
  id: "ass-lions-skin",
  title: "The Ass in the Lion's Skin",
  icon: "🦁",
  difficulty: "Easy",
  theme: "Fine clothes do not make fine people",
  estimatedTime: "5-10 min",
  description: "A donkey finds a lion's skin and puts it on. All the animals run in fear—until he makes one small mistake that gives him away.",
  content: [
    {
      type: "story",
      text: "An Ass found a Lion's skin that hunters had left behind in the forest. He thought it would be amusing to wear it and see how the other animals reacted. He draped the skin over himself, covering his gray fur and long ears."
    },
    {
      type: "question",
      domain: "where",
      question: "Where did the Ass find the lion's skin he is now wearing?",
      options: [
        "The Lion gave it to him as a gift",
        "Left behind by hunters in the forest",
        "In a shop in the village",
        "Still on a living lion"
      ],
      correctAnswer: 1,
      explanation: "The skin was discarded by hunters, which is why the Ass can pick it up without danger. This detail explains how he got his disguise."
    },
    {
      type: "story",
      text: "Wearing the Lion's skin, the Ass walked through the forest. The other animals saw what they thought was a Lion coming and scattered in terror. Deer bounded away, rabbits dove into burrows, even the Fox ran and hid."
    },
    {
      type: "question",
      domain: "mood",
      question: "As the animals flee in terror and the Ass watches them run, what is he most likely feeling?",
      options: [
        "Frightened by their reaction",
        "Amused and pleased with his successful trick",
        "Sorry for scaring them",
        "Confused about why they are running"
      ],
      correctAnswer: 1,
      explanation: "He put on the skin to see how animals would react, and his trick is working perfectly. He would feel pleased with himself and entertained."
    },
    {
      type: "question",
      domain: "color",
      question: "What color is the Ass's own fur hidden beneath the lion's skin?",
      options: [
        "Golden like the lion's mane",
        "Gray, the natural color of a donkey",
        "Pure white",
        "Black with stripes"
      ],
      correctAnswer: 1,
      explanation: "Donkeys are gray, and the story mentions his gray fur being covered. This ordinary color is what the grand disguise hides."
    },
    {
      type: "story",
      text: "The Ass became so pleased with himself that he grew careless. Seeing a group of animals fleeing, he forgot himself for a moment and let out a loud, triumphant bray—\"HEE-HAW!\""
    },
    {
      type: "question",
      domain: "number",
      question: "How many animals continue to fear the Ass after they hear his donkey bray?",
      options: [
        "All of them remain terrified",
        "About half still run away",
        "None—the sound gives away his true identity immediately",
        "Only the smallest animals stop fearing him"
      ],
      correctAnswer: 2,
      explanation: "The instant the animals hear a donkey's bray coming from what looks like a lion, the trick collapses. A lion does not hee-haw."
    },
    {
      type: "story",
      text: "The moment that donkey bray escaped his lips, the disguise was ruined. The Fox stopped running and turned back, laughing. \"Ah-ha! I thought there was something odd about that Lion. Fine feathers—or in this case, fine fur—do not make fine birds. Or fine lions!\""
    },
    {
      type: "story",
      moral: "You can disguise your appearance, but your true nature will reveal itself. Fine clothes do not make fine people."
    }
  ]
};

export default assLionsSkin;
