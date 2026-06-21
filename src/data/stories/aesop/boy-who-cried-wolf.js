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
      question: "When you picture the boy passing the hours alone with his sheep, what would the ground beneath his feet most likely look like?",
      options: [
        "Smooth marble tiles like a palace floor",
        "Soft grass and scattered wildflowers where sheep could graze",
        "Deep sand dunes shifting in the wind",
        "Thick ice covering a frozen pond"
      ],
      correctAnswer: 1,
      explanation: "A hillside where sheep are kept would need vegetation for the animals to eat, so you would picture patchy grass and perhaps wildflowers underfoot — details the story never describes but that logically follow from imagining a real grazing hillside."
    },
    {
      type: "story",
      text: "One day, the bored boy decided to play a trick. He ran toward the village shouting, 'Wolf! Wolf! A wolf is attacking the sheep!' The worried villagers dropped their work and rushed up the hill with sticks and tools to help."
    },
    {
      type: "question",
      domain: "movement",
      question: "When you visualize the villagers climbing the hill with their tools, what would their hands and arms look like as they moved?",
      options: [
        "Hands clasped calmly behind their backs",
        "Arms pumping hard, gripping sticks and tools tightly",
        "Arms stretched out lazily at their sides",
        "Waving cheerfully at neighbors along the way"
      ],
      correctAnswer: 1,
      explanation: "Racing uphill while gripping heavy sticks and tools would cause the villagers' arms to pump with effort, knuckles tight around their makeshift weapons as they hurried to defend the flock."
    },
    {
      type: "story",
      text: "When the villagers reached the top, they found the boy laughing and all the sheep safe. 'There's no wolf!' the boy giggled. 'I was just having fun!' The angry villagers scolded him and returned to their work."
    },
    {
      type: "question",
      domain: "mood",
      question: "When you imagine the villagers walking back down the hill after the trick, what would their body language look like?",
      options: [
        "Skipping lightly and waving goodbye to the boy",
        "Shoulders tense, strides stiff, muttering under their breath",
        "Slouched and shuffling slowly from exhaustion",
        "Jumping and cheering with relief"
      ],
      correctAnswer: 1,
      explanation: "People who feel betrayed and irritated after wasting effort typically carry tension in their shoulders and walk with stiff, clipped strides, often muttering to themselves as they go."
    },
    {
      type: "story",
      text: "The next week, the boy was bored again. Once more he shouted, 'Wolf! Wolf!' Again the villagers came running, and again they found no wolf. This time they were even angrier and warned the boy never to lie again."
    },
    {
      type: "question",
      domain: "number",
      question: "If the boy cried wolf one more time after this point in the story, how many false alarms would the villagers have experienced in total?",
      options: [
        "Two false alarms",
        "Three false alarms",
        "Four false alarms",
        "Five false alarms"
      ],
      correctAnswer: 1,
      explanation: "By this moment the villagers have already endured two false alarms. Adding one more imaginary cry would bring the total to three, requiring you to count what has happened and project one step beyond it."
    },
    {
      type: "story",
      text: "A few days later, a real wolf appeared! It began chasing the sheep with its sharp teeth showing. The terrified boy screamed, 'Wolf! Wolf! Please help me! This time it's real!' But down in the village, people just shook their heads."
    },
    {
      type: "question",
      domain: "what",
      question: "When you picture the sheep scattering from the wolf, what sounds would fill the hillside that the story never describes?",
      options: [
        "Gentle humming and soft laughter",
        "Panicked bleating, thundering hooves, and the wolf's snarling growl",
        "Complete silence broken only by birdsong",
        "Slow, rhythmic drumbeats echoing across the hill"
      ],
      correctAnswer: 1,
      explanation: "A wolf attack on a flock would produce sounds the story never mentions: the sheep's frightened bleating, the rumble of hooves as they fled in all directions, and the wolf's aggressive snarling — a chaotic soundscape you must construct in your imagination."
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