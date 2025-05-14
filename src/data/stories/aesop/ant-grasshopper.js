// src/data/stories/aesop/ant-grasshopper.js
const antGrasshopper = {
  id: "ant-grasshopper",
  title: "The Ant and the Grasshopper",
  icon: "🐜",
  difficulty: "Easy",
  theme: "Preparation",
  estimatedTime: "5-10 min",
  description: "Learn the importance of planning ahead in this classic fable.",
  content: [
    {
      type: "story",
      text: "In a field one summer's day, a Grasshopper was hopping about, chirping and singing to its heart's content. An Ant passed by, bearing along with great effort an ear of corn he was taking to his nest."
    },
    {
      type: "question",
      domain: "when",
      question: "What time of year would this scene most likely take place?",
      options: [
        "Winter with snow on the ground",
        "Spring with flowers blooming",
        "Summer with bright sunshine",
        "Fall with leaves changing color"
      ],
      correctAnswer: 2,
      explanation: "The story explicitly states it was 'one summer's day' when the Grasshopper was hopping about and the Ant was gathering food."
    },
    {
      type: "story",
      text: "\"Why not come and chat with me,\" said the Grasshopper, \"instead of toiling in that way?\" \"I am storing food for the winter,\" said the Ant, \"and recommend you do the same.\" \"Why bother about winter?\" said the Grasshopper; \"we have plenty of food at present.\""
    },
    {
      type: "story",
      text: "The Ant went on its way and continued its toil. When winter came, the Grasshopper found itself dying of hunger, while seeing the ants distributing corn and grain from the stores they had collected in summer."
    },
    {
      type: "question",
      domain: "color",
      question: "What color would the landscape most likely be during winter in this story?",
      options: [
        "Green and lush like summer",
        "Brown and white with bare trees and snow",
        "Yellow and orange like autumn",
        "Pink and purple with spring flowers"
      ],
      correctAnswer: 1,
      explanation: "In winter, the landscape would logically be visualized as brown (bare trees and ground) and white (snow), representing the barren season when food is scarce."
    },
    {
      type: "story",
      moral: "It is best to prepare for the days of necessity."
    }
  ]
};

export default antGrasshopper;

