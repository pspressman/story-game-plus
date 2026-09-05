// src/data/stories/aesop/bundle-sticks.js
const bundleSticks = {
  id: "bundle-sticks",
  title: "The Bundle of Sticks",
  icon: "🪵",
  difficulty: "Easy",
  theme: "Unity is strength",
  estimatedTime: "5-10 min",
  description: "A father worries his sons fight too much. He gives them a lesson with sticks that they will never forget.",
  content: [
    {
      type: "story",
      text: "An old man had several sons who were always quarreling. No matter what he said, they would not live in harmony. He decided to teach them a lesson they would remember."
    },
    {
      type: "story",
      text: "One day he called all his sons together and placed before them a bundle of sticks tied tightly with rope. \"Try to break this bundle,\" he said."
    },
    {
      type: "question",
      domain: "where",
      question: "The father has laid something in front of his sons. What is it, and where is it?",
      options: [
        "Loose sticks scattered across the floor",
        "A tightly tied bundle of sticks in front of them",
        "A single thick log on the table",
        "An empty rope with no sticks"
      ],
      correctAnswer: 1,
      explanation: "He presents them with sticks bound together in a bundle—this specific arrangement is the whole point of the lesson."
    },
    {
      type: "story",
      text: "Each son took the bundle in turn and tried with all his might to break it. The strongest pulled and strained. The cleverest looked for weak points. But none of them could snap the bundle in two."
    },
    {
      type: "question",
      domain: "number",
      question: "How many of the sons successfully break the tied bundle?",
      options: [
        "All of them break it easily",
        "Only the oldest manages it",
        "None of them—the bundle stays whole",
        "Exactly half of them"
      ],
      correctAnswer: 2,
      explanation: "Despite every son trying, not one can break the bundle while the sticks remain bound together. This failure sets up the next step."
    },
    {
      type: "story",
      text: "Then the father untied the bundle and handed each son a single stick. \"Now try,\" he said. Each son snapped his stick easily across his knee."
    },
    {
      type: "question",
      domain: "mood",
      question: "As each son snaps his single stick easily after failing to break the bundle, what are they most likely realizing?",
      options: [
        "That they have grown suddenly stronger",
        "The lesson their father is teaching about staying together",
        "That the sticks were defective",
        "That they should have tried harder before"
      ],
      correctAnswer: 1,
      explanation: "The ease of breaking one stick after the impossible bundle is the lesson made visible. They would be understanding what their father means about unity."
    },
    {
      type: "question",
      domain: "color",
      question: "Picture the sticks the father brought for this lesson. What color are they?",
      options: [
        "Painted bright colors",
        "The natural brown of dead wood",
        "Bleached pure white",
        "Green like living branches"
      ],
      correctAnswer: 1,
      explanation: "The sticks are described as something that can be snapped, suggesting dry dead wood, which is naturally brown or tan."
    },
    {
      type: "story",
      text: "\"My sons,\" said the father, \"do you see? Alone, each of you can be easily defeated. But together, bound by loyalty and love, you are unbreakable.\""
    },
    {
      type: "story",
      moral: "In unity there is strength. Together we are unbreakable."
    }
  ]
};

export default bundleSticks;
