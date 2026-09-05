// src/data/stories/aesop/frogs-king.js
const frogsKing = {
  id: "frogs-king",
  title: "The Frogs Who Wanted a King",
  icon: "🐸",
  difficulty: "Easy",
  theme: "Be careful what you wish for",
  estimatedTime: "5-10 min",
  description: "The frogs live free in their pond but decide they want a king to rule them. They ask the gods for one—and learn why some wishes should stay ungranted.",
  content: [
    {
      type: "story",
      text: "The Frogs lived happily in a pond, free to swim and croak as they pleased. But one day they decided that they wanted a King to rule over them and give them laws. They called up to the gods, begging for a monarch."
    },
    {
      type: "question",
      domain: "mood",
      question: "When the frogs first call to the gods asking for a king, how do they seem to feel about their current freedom?",
      options: [
        "Grateful and content with having no ruler",
        "Bored and dissatisfied, wanting more structure",
        "Frightened of other creatures",
        "Too busy to care"
      ],
      correctAnswer: 1,
      explanation: "Despite living happily, they want change. They feel their freedom is not enough and desire the order a king would bring—a wish they will regret."
    },
    {
      type: "story",
      text: "The gods, amused by this strange request, threw down a large log into the pond. It landed with a great splash. The Frogs, terrified by the noise, dove deep and hid in the mud."
    },
    {
      type: "question",
      domain: "where",
      question: "Where is the 'king' the gods sent to the frogs?",
      options: [
        "Swimming around the pond actively",
        "Floating motionless in the water",
        "On a throne beside the pond",
        "Still up in the sky with the gods"
      ],
      correctAnswer: 1,
      explanation: "The gods sent a log—a piece of dead wood that simply floats. It lies still on the water, doing nothing, which is why the frogs soon lose their fear."
    },
    {
      type: "story",
      text: "After a while, one brave Frog poked his head up. The log lay perfectly still. Soon all the Frogs came out and began hopping onto their new King, sitting on him and treating him with complete disrespect. \"This King is useless!\" they cried. \"Send us a real King!\""
    },
    {
      type: "question",
      domain: "number",
      question: "How many times does the log move or speak after the frogs start hopping on it?",
      options: [
        "It chases them constantly",
        "It speaks once to give them a law",
        "Never—it just floats there silently",
        "It moves every few minutes"
      ],
      correctAnswer: 2,
      explanation: "The log is lifeless wood. It never moves or reacts, which is why the frogs feel safe mocking it and asking for a replacement."
    },
    {
      type: "story",
      text: "The gods, annoyed by the Frogs' ingratitude, sent them a Stork—a real King. The Stork waded into the pond and immediately began catching the Frogs one by one and eating them."
    },
    {
      type: "question",
      domain: "color",
      question: "Picture the long-legged Stork wading through the pond. What color are its legs?",
      options: [
        "Bright green like lily pads",
        "Orange or red, like a stork's natural color",
        "Yellow like butter",
        "Blue like the water"
      ],
      correctAnswer: 1,
      explanation: "Storks have distinctive orange or reddish legs. These long legs let the Stork wade through the pond hunting frogs."
    },
    {
      type: "story",
      text: "Too late the Frogs cried out to the gods for mercy. \"Better no King than this one!\" they croaked. But the gods answered, \"You made your choice. You rejected the harmless king we sent and demanded a powerful one. Now you must live with what you asked for.\""
    },
    {
      type: "story",
      moral: "Be careful what you wish for. It is better to have no ruler than a cruel one, and better to live in peace than under a tyrant."
    }
  ]
};

export default frogsKing;
