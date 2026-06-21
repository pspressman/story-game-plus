// Tales of the Buddha: Visualization Journey
const buddhaTalesVisualization = {
  id: "buddha-tales-visualization",
  title: "Tales of the Buddha: Stories of Wisdom",
  icon: "🪷",
  difficulty: "Medium",
  theme: "Wisdom",
  estimatedTime: "20-30 min",
  description: "Explore Buddhist tales that teach kindness, wisdom, and understanding through visualization and everyday comparisons.",
  content: [
    {
      type: "story",
      text: "Long ago in India, a prince named Siddhartha became the Buddha - which means 'the awakened one.' He taught through simple stories that help us understand how to be kind and wise. Let's explore some of these tales."
    },
    {
      type: "question",
      domain: "what",
      question: "When you picture someone who is 'awakened' or very wise, what would their face look like?",
      options: [
        "Angry and frowning",
        "Peaceful and kind",
        "Sleepy and tired",
        "Worried and scared"
      ],
      correctAnswer: 1,
      explanation: "The Buddha's wisdom brought peace - this showed in his gentle, caring expression."
    },
    
    // === THE ANGRY ELEPHANT ===
    {
      type: "story",
      text: "Once, an angry elephant charged toward the Buddha, sent by someone who wanted to hurt him. Everyone ran away in fear. But the Buddha stood still and raised his hand peacefully."
    },
    {
      type: "question",
      domain: "movement",
      question: "Picture the charging elephant's feet and legs as it gets closer to the Buddha and begins to slow down. How would its stride change?",
      options: [
        "Each step would become faster and more thundering",
        "Its legs would freeze stiff all at once",
        "Its heavy pounding steps would gradually shorten and soften",
        "It would leap into the air"
      ],
      correctAnswer: 2,
      explanation: "As the elephant's rage melted away in the face of calm kindness, its charging stride would naturally slow and shorten, like a wave losing force as it reaches shore."
    },
    {
      type: "story",
      text: "Something amazing happened - the elephant slowed down and stopped. It lowered its trunk gently. The Buddha's kindness had calmed the elephant's anger, like cool water on a fire."
    },
    {
      type: "question",
      domain: "size",
      question: "Imagine the elephant's body right at the moment its fury vanishes — what physical change would you notice in its posture and size compared to when it was charging?",
      options: [
        "It would seem even larger, muscles tensed and towering",
        "It would look the same — size does not change with mood",
        "It would appear to shrink inward, shoulders dropping and body softening",
        "It would grow taller as it became more alert"
      ],
      correctAnswer: 2,
      explanation: "When rage drains from a body, tension releases — an animal that charged with every muscle flared would visibly deflate, seeming smaller and less threatening as calm took over."
    },
    {
      type: "story",
      text: "Think about this: When someone is mean to you at school and you respond with kindness instead of meanness, what happens? Often, their anger fades away too."
    },
    {
      type: "question",
      domain: "what",
      question: "If you could see anger and kindness as colors colliding — the elephant's rage versus the Buddha's calm — what would happen to the angry color?",
      options: [
        "It would blaze brighter and spread outward",
        "It would stay exactly the same shade",
        "It would slowly be washed out and fade away",
        "It would split into many new colors"
      ],
      correctAnswer: 2,
      explanation: "The Buddha showed that peaceful kindness is stronger than anger or force — just as a calm color can absorb and dissolve a fiercer one."
    },
    
    // === THE MUSTARD SEED ===
    {
      type: "story",
      text: "A mother came to the Buddha crying. Her child had died and she begged him to bring the child back. The Buddha said, 'Bring me a mustard seed from a house where no one has ever died.'"
    },
    {
      type: "question",
      domain: "where",
      question: "Picture the mother after knocking on dozens of doors. What would her feet and shoulders look like compared to when she first set out full of desperate hope?",
      options: [
        "Her step would be lighter and quicker with each new door",
        "She would look exactly as she did at the start",
        "Her shoulders would droop and her steps would grow heavy with each turned-away answer",
        "She would be running faster, more determined than ever"
      ],
      correctAnswer: 2,
      explanation: "With every household that turned her away — seeds available but sorrow also present — the weight of understanding would press down on her body, slowing and bowing her as hope of finding that impossible seed faded."
    },
    {
      type: "story",
      text: "At every house, people said, 'We have mustard seeds, but we've lost a grandmother, a father, a sister...' The mother realized everyone knew her sadness. She wasn't alone in her grief."
    },
    {
      type: "question",
      domain: "mood",
      question: "Visualize the mother's face changing as she realizes everyone understands loss. What emotion replaces her lonely despair?",
      options: [
        "More sadness and anger",
        "Complete happiness",
        "Sad but comforted, not alone",
        "Confusion and fear"
      ],
      correctAnswer: 2,
      explanation: "Understanding that others share our experiences helps us feel less alone in hard times."
    },
    {
      type: "story",
      text: "Think about when you feel sad or left out. Knowing that everyone sometimes feels this way - even the popular kids - can help you feel less alone."
    },
    {
      type: "question",
      domain: "what",
      question: "Imagine the mother returning to the Buddha empty-handed after visiting every home. What would her empty hands tell him without any words?",
      options: [
        "That mustard seeds are impossible to find",
        "That she had given up searching too soon",
        "That she had discovered every household carries its own grief",
        "That she wanted to keep her child's memory private"
      ],
      correctAnswer: 2,
      explanation: "Her empty hands spoke of a full journey — each door she knocked on had gently shown her that sorrow is woven into every family's story."
    },
    
    // === THE BLIND MEN AND THE ELEPHANT ===
    {
      type: "story",
      text: "Six blind men wanted to know what an elephant was like. The first touched its side and said, 'An elephant is like a wall!' The second felt its tusk: 'No, it's like a spear!'"
    },
    {
      type: "question",
      domain: "what",
      question: "Picture the third blind man touching the elephant's trunk. What might he think an elephant is like?",
      options: [
        "Like a thick snake or rope",
        "Like a tiny mouse",
        "Like a flying bird",
        "Like a hard rock"
      ],
      correctAnswer: 0,
      explanation: "Each person felt a different part and thought that was the whole elephant!"
    },
    {
      type: "story",
      text: "Each man touched a different part - the leg felt like a tree, the ear like a fan, the tail like a rope. They argued about who was right. But they were ALL right - and all wrong. They each knew only one part."
    },
    {
      type: "question",
      domain: "perspective",
      question: "Visualize looking at your school from different sides - front, back, playground. Would everyone describe it the same way?",
      options: [
        "Yes, exactly the same",
        "No, each view shows different things",
        "Schools don't have different sides",
        "Only teachers can see the whole school"
      ],
      correctAnswer: 1,
      explanation: "Like the elephant, we see different parts of truth from different viewpoints!"
    },
    {
      type: "story",
      text: "The Buddha taught: 'We each see part of the truth. To understand fully, we must listen to others and combine our different views.'"
    },
    {
      type: "question",
      domain: "what",
      question: "Imagine all six blind men finally joining hands in a circle around the elephant, each still touching their own part. What would that circle allow them to do for the first time?",
      options: [
        "Prove that only one of them was correct",
        "Feel the whole animal together as a shared picture",
        "Make the elephant disappear",
        "Agree to stop asking questions"
      ],
      correctAnswer: 1,
      explanation: "By connecting their separate experiences, the men could finally build one complete image — something none of them could achieve alone."
    },
    
    // === THE MONKEY KING'S SACRIFICE ===
    {
      type: "story",
      text: "A monkey king lived with his tribe in a mango tree by a river. When humans discovered their delicious mangoes and wanted to cut down the tree, the monkey king made a bridge with his own body."
    },
    {
      type: "question",
      domain: "shape",
      question: "Picture the monkey king's arms and legs while he stretches himself across the gap. What would happen to the curves of his body as he pulled himself taut enough for others to run across?",
      options: [
        "His body would curl into a tight ball at the center",
        "His limbs would fold into sharp angles like a zigzag",
        "His body would strain into a long, tense arc, nearly flat against the air",
        "He would spin in a circle to make a rounded loop"
      ],
      correctAnswer: 2,
      explanation: "To bear the weight of running monkeys, the monkey king would have to pull every muscle rigid, stretching his body into the flattest, most taut line possible — like a rope drawn tight between two posts."
    },
    {
      type: "story",
      text: "One by one, all the monkeys ran across their king's back to safety. The last monkey was so heavy that it broke the king's back, but everyone escaped. The human king saw this sacrifice and was amazed."
    },
    {
      type: "question",
      domain: "mood",
      question: "Visualize the human king's face watching the monkey king save others while hurting himself. What emotion would show?",
      options: [
        "Anger and hatred",
        "Joy and laughter",
        "Respect and wonder",
        "Fear and running away"
      ],
      correctAnswer: 2,
      explanation: "Seeing someone sacrifice for others creates deep respect and admiration."
    },
    {
      type: "story",
      text: "Think about when someone helps you even when it's hard for them - like a friend sharing lunch when they're hungry too, or someone standing up for you when others might tease them."
    },
    {
      type: "question",
      domain: "what",
      question: "Picture the monkey tribe safe on the far bank, watching their injured king. What would their behavior toward him look like compared to how they treated him before his sacrifice?",
      options: [
        "They would ignore him and search for new food",
        "They would gather close around him, quieter and more gentle than before",
        "They would argue over who should be the next king",
        "They would run away deeper into the forest"
      ],
      correctAnswer: 1,
      explanation: "Witnessing a leader give everything for the group transforms how followers see that leader — the tribe would instinctively draw near with a hushed, reverent care that ordinary times never produce."
    },
    
    // === THE BOWL OF RICE ===
    {
      type: "story",
      text: "A greedy man heard the Buddha speak about contentment. He thought, 'If I give up everything, I'll be happy!' So he gave away his possessions but kept thinking about them constantly."
    },
    {
      type: "question",
      domain: "where",
      question: "Picture the man sitting alone with his simple bowl of rice. Where would his eyes be looking — at the food in front of him or somewhere far away?",
      options: [
        "Down at the rice, eating with full attention",
        "Closed in peaceful meditation",
        "Drifting into the distance, unfocused on the meal",
        "Watching other people gratefully"
      ],
      correctAnswer: 2,
      explanation: "A mind still clinging to lost possessions cannot settle on what is right in front of it — his gaze would wander just as his thoughts did."
    },
    {
      type: "story",
      text: "The Buddha saw him picking at his rice, looking miserable. 'Your bowl may be simple,' Buddha said, 'but your mind is still full of your old treasures. Peace comes from letting go inside, not just outside.'"
    },
    {
      type: "question",
      domain: "what",
      question: "Imagine cleaning your room by shoving everything in the closet versus really organizing. Which brings real cleanliness?",
      options: [
        "Hiding things in the closet",
        "Really organizing and letting go of clutter",
        "Never cleaning at all",
        "Having someone else clean"
      ],
      correctAnswer: 1,
      explanation: "Like true cleaning, true peace means changing inside, not just outside!"
    },
    {
      type: "story",
      text: "Think about this: Being happy isn't about having nothing or everything - it's about enjoying what you have right now, whether it's a lot or a little."
    },
    {
      type: "question",
      domain: "mood",
      question: "Picture two kids: one with many toys but always wanting more, another with few toys but enjoying them fully. Who seems happier?",
      options: [
        "The one with many toys",
        "Neither is happy",
        "The one enjoying what they have",
        "Both are equally unhappy"
      ],
      correctAnswer: 2,
      explanation: "The Buddha taught that contentment comes from our attitude, not our possessions!"
    },
    {
      type: "story",
      moral: "These Buddhist tales teach us that kindness calms anger, everyone shares similar struggles, different viewpoints each hold truth, good leaders serve others, and happiness comes from within - not from what we own."
    }
  ]
};

export default buddhaTalesVisualization;