// The Boy Who Cried Wolf - Aesop's Fable
const boyWhoCriedWolf = {
  id: "boy-who-cried-wolf",
  title: "The Boy Who Cried Wolf",
  icon: "🐺",
  difficulty: "Easy",
  theme: "Honesty",
  estimatedTime: "8-10 min",
  description: "A shepherd boy learns the importance of telling the truth when his lies lead to real danger.",
  content: [
    {
      type: "story",
      text: "A young shepherd boy watched over his village's sheep on a hillside every day. The job was lonely and boring, so the boy often wished for some excitement to break up his long, quiet days."
    },
    {
      type: "question",
      domain: "where",
      question: "When you picture the boy with his sheep, where would you see him spending his day?",
      options: [
        "Inside a dark cave with the sheep",
        "On a grassy hillside overlooking the village",
        "In the middle of the busy village market",
        "Swimming in a deep lake with the sheep"
      ],
      correctAnswer: 1,
      explanation: "The shepherd boy would be on a hillside where he could watch the sheep graze and keep an eye on the village below."
    },
    {
      type: "story",
      text: "One day, the bored boy decided to play a trick. He ran toward the village shouting, 'Wolf! Wolf! A wolf is attacking the sheep!' The worried villagers dropped their work and rushed up the hill with sticks and tools to help."
    },
    {
      type: "question",
      domain: "movement",
      question: "When you visualize the villagers responding to the boy's cry, how would they be moving?",
      options: [
        "Walking slowly and calmly up the hill",
        "Running quickly with worried expressions",
        "Standing still and ignoring the boy",
        "Dancing and celebrating"
      ],
      correctAnswer: 1,
      explanation: "The villagers would be running quickly because they thought there was real danger and wanted to help save the sheep."
    },
    {
      type: "story",
      text: "When the villagers reached the top, they found the boy laughing and all the sheep safe. 'There's no wolf!' the boy giggled. 'I was just having fun!' The angry villagers scolded him and returned to their work."
    },
    {
      type: "question",
      domain: "mood",
      question: "When you picture the villagers' faces after discovering the trick, what expressions would you see?",
      options: [
        "Happy smiles and laughter",
        "Angry frowns and disappointment",
        "Confused and scratching their heads",
        "Sleepy and yawning"
      ],
      correctAnswer: 1,
      explanation: "The villagers would be angry and disappointed because they had rushed to help but were tricked instead."
    },
    {
      type: "story",
      text: "The next week, the boy was bored again. Once more he shouted, 'Wolf! Wolf!' Again the villagers came running, and again they found no wolf. This time they were even angrier and warned the boy never to lie again."
    },
    {
      type: "question",
      domain: "number",
      question: "In your mental image, how many times has the boy now cried wolf falsely?",
      options: [
        "One time",
        "Two times",
        "Three times",
        "Four times"
      ],
      correctAnswer: 1,
      explanation: "The boy has now cried wolf falsely two times - once the first week and once the second week."
    },
    {
      type: "story",
      text: "A few days later, a real wolf appeared! It began chasing the sheep with its sharp teeth showing. The terrified boy screamed, 'Wolf! Wolf! Please help me! This time it's real!' But down in the village, people just shook their heads."
    },
    {
      type: "question",
      domain: "what",
      question: "When you visualize the real wolf, what would make it look dangerous?",
      options: [
        "Soft, fluffy fur and a wagging tail",
        "Sharp teeth and fierce, hungry eyes",
        "Bright purple fur and wings",
        "Tiny size like a mouse"
      ],
      correctAnswer: 1,
      explanation: "A dangerous wolf would have sharp teeth and fierce, hungry eyes as it hunted the sheep."
    },
    {
      type: "story",
      text: "'That boy is lying again,' said the villagers. 'We won't be fooled a third time.' They stayed in the village while the wolf scattered the flock and disappeared into the forest."
    },
    {
      type: "question",
      domain: "perspective",
      question: "When you picture the villagers hearing the boy's third cry for help, from what viewpoint would you see their reaction?",
      options: [
        "From high above, seeing them stay in the village",
        "From inside the wolf's mouth",
        "From underground looking up",
        "From the boy's position on the hill"
      ],
      correctAnswer: 0,
      explanation: "From above, you would see the villagers staying in the village below while the boy calls for help on the distant hill."
    },
    {
      type: "story",
      moral: "Nobody believes a liar, even when they tell the truth. Honesty builds trust, but lies destroy it. Always tell the truth, especially when others are counting on you."
    }
  ]
};

export default boyWhoCriedWolf;