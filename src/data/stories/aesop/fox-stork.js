// src/data/stories/aesop/fox-stork.js
const foxStork = {
  id: "fox-stork",
  title: "The Fox and the Stork",
  icon: "🍲",
  difficulty: "Easy",
  theme: "Treat others as you wish to be treated",
  estimatedTime: "5-10 min",
  description: "A fox invites a stork to dinner and serves soup in a way only a fox can eat. The stork returns the invitation with a lesson.",
  content: [
    {
      type: "story",
      text: "A Fox one day invited a Stork to dinner. The Stork arrived promptly, pleased to be invited. But when the meal was served, the Fox brought out soup in a wide, shallow dish."
    },
    {
      type: "question",
      domain: "where",
      question: "Where is the soup that the Fox has served for dinner?",
      options: [
        "In deep bowls that both can use",
        "In wide, shallow dishes on the table",
        "In tall narrow jars",
        "Hidden away in the kitchen"
      ],
      correctAnswer: 1,
      explanation: "The Fox serves the soup in wide, shallow dishes—a container he can easily lap from but impossible for the Stork's long beak to use."
    },
    {
      type: "story",
      text: "The Fox lapped up his soup easily with his wide tongue. But the Stork, with her long thin beak, could only dip the very tip of it into the shallow dish. She could not get a single mouthful. Meanwhile, the Fox licked his dish clean."
    },
    {
      type: "question",
      domain: "number",
      question: "How much soup does the Stork manage to eat from the shallow dish?",
      options: [
        "A full meal, same as the Fox",
        "About half her portion",
        "None—her beak cannot scoop from the shallow dish",
        "More than the Fox"
      ],
      correctAnswer: 2,
      explanation: "Despite trying, the Stork's long thin beak cannot pick up soup from a flat shallow dish. She leaves hungry while the Fox finishes his meal."
    },
    {
      type: "question",
      domain: "mood",
      question: "As the Fox laps up all his soup and the Stork sits with an empty stomach, what is the Fox likely feeling?",
      options: [
        "Genuinely sorry for not thinking of her needs",
        "Amused by his own clever trick",
        "Angry that she won't eat",
        "Worried she will complain"
      ],
      correctAnswer: 1,
      explanation: "The Fox deliberately chose dishes that only he could use. His behavior suggests he finds his trick amusing, not that he's sorry."
    },
    {
      type: "story",
      text: "The Stork said nothing, but a few days later she invited the Fox to dine at her home. When the Fox arrived, the meal was served in tall jars with narrow necks."
    },
    {
      type: "question",
      domain: "color",
      question: "Picture the long thin beak the Stork uses to eat. What color is it most likely to be?",
      options: [
        "Bright blue like her invitation",
        "The natural color of a stork's beak—orange or reddish",
        "Pure white like paper",
        "Green like leaves"
      ],
      correctAnswer: 1,
      explanation: "A stork's beak is naturally orange or reddish-orange. This long, pointed tool is perfect for reaching into narrow jars."
    },
    {
      type: "story",
      text: "The Stork easily slipped her long beak into the jars and ate her fill. The Fox could only lick the outside of the narrow opening and went home as hungry as the Stork had left his table."
    },
    {
      type: "story",
      moral: "One bad turn deserves another. Treat others as you wish to be treated."
    }
  ]
};

export default foxStork;
