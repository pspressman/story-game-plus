// src/data/stories/aesop/crow-pitcher.js
const crowPitcher = {
  id: "crow-pitcher",
  title: "The Crow and the Pitcher",
  icon: "🦅",
  difficulty: "Easy",
  theme: "Resourcefulness",
  estimatedTime: "5-10 min",
  description: "A thirsty crow finds a pitcher with water at the bottom but cannot reach it. See how cleverness solves the problem.",
  content: [
    {
      type: "story",
      text: "A Crow, half-dead with thirst, came upon a tall clay pitcher. Peering inside, he could see water at the bottom, but the neck of the pitcher was too narrow and the water too low for him to reach."
    },
    {
      type: "question",
      domain: "where",
      question: "Where is the water the Crow desperately needs?",
      options: [
        "Overflowing from the top of the pitcher",
        "At the bottom of the pitcher, out of reach",
        "Spilled on the ground beside the pitcher",
        "In a different pitcher across the field"
      ],
      correctAnswer: 1,
      explanation: "The water sits at the bottom of the pitcher, too low for the Crow's beak to reach. Picturing this position is essential to understanding his problem."
    },
    {
      type: "story",
      text: "The Crow tried to push the pitcher over, but it was too heavy. He tried to break it, but the clay was too strong. Just as he was about to give up, he noticed small pebbles scattered on the ground."
    },
    {
      type: "question",
      domain: "mood",
      question: "When the Crow first spots the pebbles on the ground, how does he most likely feel?",
      options: [
        "Frustrated, seeing them as another obstacle",
        "Hopeful, realizing they might solve his problem",
        "Indifferent, barely noticing them",
        "Angry at whoever left them there"
      ],
      correctAnswer: 1,
      explanation: "The moment of noticing the pebbles is the turning point. A crow who has been desperately trying to reach the water would feel hope at seeing a potential solution."
    },
    {
      type: "story",
      text: "One by one, the Crow picked up pebbles in his beak and dropped them into the pitcher. Slowly, the water began to rise. Pebble after pebble, the level climbed higher and higher."
    },
    {
      type: "question",
      domain: "number",
      question: "How many pebbles does the Crow drop before the water is high enough to drink?",
      options: [
        "Just one large pebble",
        "Many pebbles, one at a time",
        "None—he finds another way",
        "Two or three pebbles"
      ],
      correctAnswer: 1,
      explanation: "The story emphasizes the patient, repeated action: one by one, pebble after pebble. It takes many stones to raise the water level enough."
    },
    {
      type: "question",
      domain: "color",
      question: "What color is the clay pitcher the Crow is working with?",
      options: [
        "Bright red clay",
        "The natural earthy color of clay",
        "Painted bright blue",
        "Clear like glass"
      ],
      correctAnswer: 1,
      explanation: "While the story says 'clay pitcher,' visualizing it naturally means the typical earthy tan or brown color that clay objects have."
    },
    {
      type: "story",
      text: "At last the water reached the top of the pitcher, and the Crow was able to drink his fill. His patience and cleverness had saved him."
    },
    {
      type: "story",
      moral: "Necessity is the mother of invention. Little by little does the trick."
    }
  ]
};

export default crowPitcher;
