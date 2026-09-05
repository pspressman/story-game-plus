// src/data/stories/aesop/dog-manger.js
const dogManger = {
  id: "dog-manger",
  title: "The Dog in the Manger",
  icon: "🐕",
  difficulty: "Easy",
  theme: "Selfishness helps no one",
  estimatedTime: "5-10 min",
  description: "A dog lies down in a manger full of hay. When hungry animals arrive, watch what the dog does—even though he cannot eat hay himself.",
  content: [
    {
      type: "story",
      text: "A Dog looking for a comfortable place to nap found a manger full of fresh hay in a barn. He climbed in, circled three times, and settled down for a sleep."
    },
    {
      type: "question",
      domain: "where",
      question: "Where has the Dog decided to take his nap?",
      options: [
        "Outside under a tree",
        "In a manger filled with hay meant for cattle",
        "On a soft cushion in the house",
        "In his own doghouse"
      ],
      correctAnswer: 1,
      explanation: "He is lying in a manger—the feeding trough where farm animals eat hay. This location is the setup for the whole conflict."
    },
    {
      type: "story",
      text: "Soon the Ox returned from his day's work in the field, tired and hungry. He lowered his head to eat from the manger where his dinner of hay waited."
    },
    {
      type: "question",
      domain: "mood",
      question: "Picture the Ox returning from a long day of heavy work. How does he most likely feel as he approaches his food?",
      options: [
        "Playful and energetic",
        "Tired and hungry, looking forward to his meal",
        "Angry and looking for a fight",
        "Full and uninterested in eating"
      ],
      correctAnswer: 1,
      explanation: "After a hard day pulling a plow, the Ox would be exhausted and hungry, anticipating the hay that should be waiting. This makes what happens next worse."
    },
    {
      type: "story",
      text: "But the Dog, disturbed from his comfortable spot, jumped up and began barking and snapping fiercely at the Ox, driving him away from the manger."
    },
    {
      type: "question",
      domain: "number",
      question: "How much of the hay in the manger can the Dog actually eat himself?",
      options: [
        "All of it—he eats hay just like the Ox",
        "About half of it if he tries",
        "None—dogs cannot eat hay",
        "A small portion to stay polite"
      ],
      correctAnswer: 2,
      explanation: "Dogs are meat-eaters and cannot digest hay. The Dog is guarding food he cannot use, which is the cruelty of his action."
    },
    {
      type: "question",
      domain: "color",
      question: "What color is the fresh hay the Dog is lying on?",
      options: [
        "Deep green like living grass",
        "Golden yellow or tan, like dried grass",
        "White like cotton",
        "Brown like mud"
      ],
      correctAnswer: 1,
      explanation: "Hay is dried grass, which turns a golden yellow or tan color. This is the bed the Dog is protecting even though it means nothing to him."
    },
    {
      type: "story",
      text: "The Ox backed away sadly. \"What a selfish creature,\" he said. \"He cannot eat the hay himself, yet he will not let me have it. He guards what he cannot use.\""
    },
    {
      type: "story",
      moral: "People often begrudge others what they cannot enjoy themselves. Selfishness helps no one, not even the selfish."
    }
  ]
};

export default dogManger;
