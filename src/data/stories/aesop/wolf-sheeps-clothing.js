// src/data/stories/aesop/wolf-sheeps-clothing.js
const wolfSheepsClothing = {
  id: "wolf-sheeps-clothing",
  title: "The Wolf in Sheep's Clothing",
  icon: "🐺",
  difficulty: "Easy",
  theme: "Appearances deceive",
  estimatedTime: "5-10 min",
  description: "A wolf finds a sheepskin and wears it as a disguise. See how the trick that fools the flock becomes his own trap.",
  content: [
    {
      type: "story",
      text: "A Wolf had been lurking near a flock of sheep for days, but the shepherd kept careful watch. The Wolf could never get close. Then one day he found a sheepskin that had been thrown aside."
    },
    {
      type: "question",
      domain: "where",
      question: "Where does the Wolf find the sheepskin he is about to use?",
      options: [
        "Still on a living sheep in the flock",
        "Thrown aside and lying on the ground",
        "Hanging in the shepherd's house",
        "At the market in town"
      ],
      correctAnswer: 1,
      explanation: "The sheepskin has been discarded and left on the ground, which is why the Wolf can pick it up without being seen."
    },
    {
      type: "story",
      text: "The Wolf wrapped the sheepskin around himself, with the wool hanging over his own gray fur and the sheep's head covering his snout. Disguised, he slipped into the flock. The sheep, thinking he was one of them, grazed peacefully nearby."
    },
    {
      type: "question",
      domain: "mood",
      question: "As the Wolf walks among the sheep and they do not run, what is he most likely feeling?",
      options: [
        "Terrified that he will be caught",
        "Pleased and confident that his trick is working",
        "Sorry for deceiving the innocent sheep",
        "Confused about where he is"
      ],
      correctAnswer: 1,
      explanation: "The Wolf's plan is succeeding—the sheep accept him as one of them. He would feel clever and pleased that his disguise is fooling everyone."
    },
    {
      type: "question",
      domain: "color",
      question: "What color is the Wolf's real fur hidden under the white sheepskin?",
      options: [
        "White like the sheep",
        "Gray, the natural color of a wolf",
        "Golden yellow",
        "Black as midnight"
      ],
      correctAnswer: 1,
      explanation: "The story mentions his gray fur being covered by the wool. This contrast between gray and white is part of why the disguise works."
    },
    {
      type: "story",
      text: "That evening, the shepherd penned the flock for the night, locking the gate behind them. The Wolf, still in his disguise, was shut inside with them. In the dark he waited, planning which sheep to attack first."
    },
    {
      type: "question",
      domain: "number",
      question: "Picture the pen at night. How many ways out does the Wolf have now that the gate is locked?",
      options: [
        "Many exits all around the pen",
        "The gate is locked—he is trapped with no way out",
        "He can leave whenever he wants",
        "Two secret exits only he knows about"
      ],
      correctAnswer: 1,
      explanation: "By staying in disguise, the Wolf let himself be locked in the pen. Now he is trapped just like the sheep he meant to eat."
    },
    {
      type: "story",
      text: "But the shepherd needed meat for his dinner. He entered the pen with a knife, grabbed the nearest animal in the dark—which happened to be the Wolf in his sheepskin—and killed him on the spot."
    },
    {
      type: "story",
      moral: "Appearances can deceive, and a disguise that fools others may trap the deceiver. The wolf who pretends to be a sheep may be treated like one."
    }
  ]
};

export default wolfSheepsClothing;
