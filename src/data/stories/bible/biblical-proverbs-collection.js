// Biblical Proverbs with Visualization Bridge for ASD Learners

// Proverbs 16:18 - Pride goes before a fall
const prideBeforeFall = {
  id: "pride-before-fall",
  title: "Pride Goes Before a Fall",
  icon: "👑",
  difficulty: "Medium",
  theme: "Humility",
  estimatedTime: "10-15 min",
  description: "Learn how being too proud can lead to problems through visualization.",
  content: [
    {
      type: "story",
      text: "Marcus loved to climb trees and was very good at it. 'I'm the best climber ever! I don't even need to look where I put my feet,' he boasted to his friends."
    },
    {
      type: "question",
      domain: "where",
      question: "When you picture Marcus in the tree, where would his eyes be looking as he brags to his friends?",
      options: [
        "Down at his feet and the branches",
        "At his friends on the ground below",
        "Up at the sky through the leaves",
        "At the tree trunk for safety"
      ],
      correctAnswer: 1,
      explanation: "When we're being proud and showing off, we often stop paying attention to important things like safety."
    },
    {
      type: "story",
      text: "As Marcus kept bragging and waving his arms, he didn't notice the branch under his foot was cracking. Suddenly, CRACK! Down he tumbled into a pile of soft leaves."
    },
    {
      type: "question",
      domain: "movement",
      question: "Picture what happens to someone's balance when they're waving their arms and not watching their feet. How would their body move?",
      options: [
        "They would become more stable",
        "They would stay perfectly still",
        "They would float upward",
        "They would start to wobble and sway"
      ],
      correctAnswer: 3,
      explanation: "Being too proud makes us careless, like Marcus not watching where he stepped!"
    },
    {
      type: "story",
      text: "Marcus learned something important that day. King Solomon wrote in Proverbs: 'Pride goes before destruction, and a haughty spirit before a fall.' Being too proud makes us stop being careful."
    },
    {
      type: "question",
      domain: "what",
      question: "Visualize Sarah showing off her math skills by doing problems in her head without writing anything down. What would likely happen when the problems get harder?",
      options: [
        "She would solve them even faster",
        "She would never make any mistakes",
        "She would start making errors without noticing",
        "The problems would become easier"
      ],
      correctAnswer: 2,
      explanation: "Just like Marcus in the tree, being too proud to use helpful tools (like writing) can lead to mistakes."
    },
    {
      type: "story",
      text: "Now Marcus climbs carefully, always watching his steps. He's still a great climber, but he's learned that being proud and being careful can't happen at the same time."
    },
    {
      type: "question",
      domain: "perspective",
      question: "Picture two climbers: one looking carefully at each branch, another looking away to show off. From a bird's view above, which climber would you trust to reach the top safely?",
      options: [
        "The show-off climber",
        "Neither climber",
        "The careful climber",
        "Both equally"
      ],
      correctAnswer: 2,
      explanation: "Being humble and careful helps us succeed, while too much pride leads to falling - just like the proverb teaches!"
    },
    {
      type: "story",
      moral: "Pride goes before a fall means: when we think we're too good to be careful, that's when we make mistakes. Stay humble and pay attention!"
    }
  ]
};

// Proverbs 15:1 - A gentle answer turns away wrath
const gentleAnswer = {
  id: "gentle-answer",
  title: "A Gentle Answer Turns Away Wrath",
  icon: "🕊️",
  difficulty: "Easy",
  theme: "Kindness",
  estimatedTime: "10-15 min",
  description: "Discover how soft words can calm angry situations through visualization.",
  content: [
    {
      type: "story",
      text: "Emma's brother Jake stormed into the room, face red with anger. 'You broke my model airplane!' he shouted, his fists clenched tight like rocks."
    },
    {
      type: "question",
      domain: "color",
      question: "When you picture Jake's angry face, what color would it be?",
      options: [
        "Bright red like a tomato",
        "Pale white like paper",
        "Green like grass",
        "Blue like the sky"
      ],
      correctAnswer: 0,
      explanation: "Anger often makes our faces turn red as our emotions heat up, just like fire!"
    },
    {
      type: "story",
      text: "Emma could have yelled back, but she remembered the Bible verse: 'A gentle answer turns away wrath.' She spoke softly: 'I'm really sorry, Jake. Let me help you fix it.'"
    },
    {
      type: "question",
      domain: "size",
      question: "Picture Jake's clenched fists when Emma speaks gently. How would they change compared to tight rocks?",
      options: [
        "They would squeeze even tighter",
        "They would stay exactly the same",
        "They would slowly start to open and relax",
        "They would grow bigger"
      ],
      correctAnswer: 2,
      explanation: "Gentle words help angry feelings shrink and soften, like ice melting in warm water."
    },
    {
      type: "story",
      text: "As Emma kept speaking softly, something amazing happened. Jake's shoulders dropped, his fists opened, and the red color faded from his face. 'Okay,' he said quietly. 'Thanks for helping.'"
    },
    {
      type: "question",
      domain: "movement",
      question: "Visualize anger as a fire. When someone pours gentle words on it like cool water, how does the fire change?",
      options: [
        "It grows bigger and hotter",
        "It stays exactly the same size",
        "It slowly gets smaller and calmer",
        "It turns into ice"
      ],
      correctAnswer: 2,
      explanation: "Gentle words work like water on fire - they cool down hot anger!"
    },
    {
      type: "story",
      text: "Together, they fixed the airplane. Jake realized that Emma's gentle answer had helped his anger melt away, just like the proverb promised."
    },
    {
      type: "question",
      domain: "sound",
      question: "Picture this: If harsh words sound like thunder, what would gentle words sound like in your mind?",
      options: [
        "Like loud drums",
        "Like breaking glass",
        "Like a fire alarm",
        "Like a soft breeze or quiet rain"
      ],
      correctAnswer: 3,
      explanation: "Gentle words are soft and calming, helping to quiet the storm of anger."
    },
    {
      type: "story",
      moral: "A gentle answer turns away wrath means: speaking softly and kindly can calm someone's anger, while harsh words make it worse. Gentleness has power!"
    }
  ]
};

// Proverbs 6:6 - Go to the ant
const goToTheAnt = {
  id: "go-to-the-ant",
  title: "Go to the Ant, You Sluggard",
  icon: "🐜",
  difficulty: "Easy",
  theme: "Diligence",
  estimatedTime: "10-15 min",
  description: "Learn about hard work and preparation by visualizing busy ants.",
  content: [
    {
      type: "story",
      text: "Leo lay on the grass, watching a line of ants march by. Each tiny ant carried a crumb bigger than itself. 'Why do they work so hard?' he wondered."
    },
    {
      type: "question",
      domain: "number",
      question: "When you picture the ant trail, how many ants would you see resting and doing nothing?",
      options: [
        "About half of them",
        "None - they're all working",
        "Most of them",
        "All of them are sleeping"
      ],
      correctAnswer: 1,
      explanation: "Ants are always busy working together - that's what makes them special!"
    },
    {
      type: "story",
      text: "Leo's grandpa sat beside him. 'The Bible says: Go to the ant, you sluggard; consider its ways and be wise!' The ants were storing food for winter while the weather was still warm."
    },
    {
      type: "question",
      domain: "when",
      question: "Picture the ants' underground home in winter when snow covers the ground. Because they worked hard in summer, what would you see in their storage rooms?",
      options: [
        "Empty rooms with nothing",
        "Just a few old leaves",
        "Only ice and snow",
        "Rooms full of food they gathered"
      ],
      correctAnswer: 3,
      explanation: "The ants' hard work in good weather means they have plenty when times are hard!"
    },
    {
      type: "story",
      text: "Leo thought about his homework. He often said 'I'll do it later,' but later always became 'too late.' Maybe he could learn from the ants!"
    },
    {
      type: "question",
      domain: "what",
      question: "Visualize two students: one who does homework right after school like the ant, and one who always says 'later.' What would you see on test day?",
      options: [
        "Both equally worried",
        "The 'later' student calm, the ant-like student stressed",
        "The ant-like student calm, the 'later' student panicking",
        "Both perfectly happy"
      ],
      correctAnswer: 2,
      explanation: "Working steadily like ants means we're prepared and calm when challenges come!"
    },
    {
      type: "story",
      text: "Leo decided to be like the ants. He started doing his homework right after school, cleaning his room each day, and helping with chores without being asked."
    },
    {
      type: "question",
      domain: "background",
      question: "Picture Leo's room after a week of ant-like behavior - cleaning a little each day. What would the background of his room look like?",
      options: [
        "Neat, organized, and pleasant",
        "Messier than before",
        "Exactly the same as always",
        "Completely empty"
      ],
      correctAnswer: 0,
      explanation: "Small, steady work each day creates big, positive changes - just like the ants teach us!"
    },
    {
      type: "story",
      moral: "Go to the ant means: learn from how ants work hard without being told. Being diligent and preparing ahead makes life easier and better!"
    }
  ]
};

// Proverbs 27:17 - Iron sharpens iron
const ironSharpensIron = {
  id: "iron-sharpens-iron",
  title: "Iron Sharpens Iron",
  icon: "⚔️",
  difficulty: "Medium",
  theme: "Friendship",
  estimatedTime: "10-15 min",
  description: "Understand how good friends help each other improve through visualization.",
  content: [
    {
      type: "story",
      text: "At the museum, Mia watched a blacksmith work. He rubbed two pieces of iron together, making sparks fly. 'Why are you doing that?' she asked curiously."
    },
    {
      type: "question",
      domain: "shape",
      question: "When you picture a dull knife blade up close, what would its edge look like?",
      options: [
        "Sharp and thin like paper",
        "Thick and rounded like a pencil",
        "Perfectly square",
        "Zigzag like stairs"
      ],
      correctAnswer: 1,
      explanation: "A dull blade is rounded and thick - it needs sharpening to work well!"
    },
    {
      type: "story",
      text: "'Iron sharpens iron,' the blacksmith explained. 'When I rub these together, both pieces become sharper and better. The Bible says friends are like that too!'"
    },
    {
      type: "question",
      domain: "movement",
      question: "Picture what happens when the blacksmith rubs two iron pieces together. How would tiny bits of metal move?",
      options: [
        "They stay perfectly still",
        "Small rough parts rub off, leaving smooth sharp edges",
        "They melt completely",
        "They stick together forever"
      ],
      correctAnswer: 1,
      explanation: "Just like friends help each other remove rough edges and become better people!"
    },
    {
      type: "story",
      text: "Mia thought about her friend Chen. When she was too shy to speak up, Chen encouraged her. When Chen was too loud, Mia helped him listen better. They made each other better!"
    },
    {
      type: "question",
      domain: "what",
      question: "Visualize two students studying together for a spelling test. When one makes a mistake, what would a good 'iron sharpening iron' friend do?",
      options: [
        "Laugh at the mistake",
        "Ignore it completely",
        "Gently correct and help them practice",
        "Do the work for them"
      ],
      correctAnswer: 2,
      explanation: "Good friends help us see our mistakes and improve, just like iron sharpens iron!"
    },
    {
      type: "story",
      text: "The blacksmith showed Mia the finished blade - sharp, shiny, and useful. 'This is what happens when iron sharpens iron. Neither piece could become this good alone.'"
    },
    {
      type: "question",
      domain: "perspective",
      question: "Picture a person trying to see the back of their own head without any help. Now picture them with a friend holding a mirror. Which way would they see themselves better?",
      options: [
        "Alone without help",
        "With their friend's help",
        "Neither way works",
        "Both ways are the same"
      ],
      correctAnswer: 1,
      explanation: "Friends help us see things about ourselves we can't see alone - sharpening our character!"
    },
    {
      type: "story",
      moral: "Iron sharpens iron means: just as iron tools sharpen each other, good friends help each other become better people through honest, caring friendship!"
    }
  ]
};

// Proverbs 25:11 - Apples of gold in silver settings
const applesOfGold = {
  id: "apples-of-gold",
  title: "Apples of Gold in Silver Settings",
  icon: "🍎",
  difficulty: "Hard",
  theme: "Wise Words",
  estimatedTime: "10-15 min",
  description: "Learn how the right words at the right time are precious through visualization.",
  content: [
    {
      type: "story",
      text: "In art class, Sophia created a beautiful picture - golden apples sitting in a shiny silver bowl. 'A word fitly spoken is like apples of gold in settings of silver,' her teacher read from Proverbs."
    },
    {
      type: "question",
      domain: "color",
      question: "When you picture golden apples in a silver bowl, how would this combination look compared to regular apples in a plain bowl?",
      options: [
        "Extra special and beautiful",
        "Exactly the same",
        "Less attractive",
        "Invisible"
      ],
      correctAnswer: 0,
      explanation: "The precious metals make the apples look extra special - just like perfect timing makes words special!"
    },
    {
      type: "story",
      text: "That day, Sophia's friend Ben was struggling with his painting. Everyone else had finished, and Ben looked ready to cry. Sophia knew this was the perfect moment for the right words."
    },
    {
      type: "question",
      domain: "when",
      question: "Picture Ben's face - frustrated and near tears. When would be the perfect time for encouraging words?",
      options: [
        "After he's already given up",
        "Next week sometime",
        "Right now, before he quits",
        "Never"
      ],
      correctAnswer: 2,
      explanation: "The right words at the right moment are precious - timing makes them valuable!"
    },
    {
      type: "story",
      text: "'Your sunset colors are amazing, Ben. I've been watching how carefully you blend them.' Ben's face lit up. Those words at that exact moment were worth more than gold to him."
    },
    {
      type: "question",
      domain: "mood",
      question: "Visualize Ben's expression changing when he hears Sophia's perfectly timed encouragement. What would you see happen to his face?",
      options: [
        "It stays sad and frustrated",
        "It transforms from despair to hope",
        "It becomes angry",
        "Nothing changes at all"
      ],
      correctAnswer: 1,
      explanation: "The right words at the right time can completely change someone's day - that's their golden value!"
    },
    {
      type: "story",
      text: "Later, the teacher praised Sophia. 'You understood the proverb! Your encouragement to Ben was perfectly timed - like placing golden apples in the perfect silver setting.'"
    },
    {
      type: "question",
      domain: "what",
      question: "Picture someone saying 'Great job!' to a friend. What makes this ordinary phrase become like 'golden apples' instead of regular words?",
      options: [
        "Saying it louder",
        "Saying it at the perfect moment when most needed",
        "Writing it down",
        "Saying it many times"
      ],
      correctAnswer: 1,
      explanation: "Timing and genuine care transform ordinary words into precious gifts!"
    },
    {
      type: "story",
      moral: "Words fitly spoken are like apples of gold in settings of silver means: the right words at the right time are incredibly valuable and beautiful, bringing hope and joy!"
    }
  ]
};

// Export all stories
const biblicalProverbs = [
  prideBeforeFall,
  gentleAnswer,
  goToTheAnt,
  ironSharpensIron,
  applesOfGold
];

export default biblicalProverbs;