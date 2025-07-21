const eightImmortals = {
  id: "eight-immortals",
  title: "The Eight Immortals Cross the Sea",
  icon: "🌊",
  difficulty: "Hard",
  theme: "Teamwork",
  estimatedTime: "15-20 min",
  description: "Eight legendary immortals must cross the sea using their unique magical objects.",
  content: [
    {
      type: "story",
      text: "The Eight Immortals decided to attend the Queen Mother's birthday banquet across the Eastern Sea. They were powerful beings, each carrying a special magical object. They gathered at the shore, looking at the vast ocean before them."
    },
    {
      type: "question",
      domain: "number",
      question: "When you picture this group of legendary figures at the shore, how many immortals would be standing together?",
      options: [
        "Exactly eight immortals",
        "Three or four immortals",
        "Dozens of immortals",
        "Just one immortal"
      ],
      correctAnswer: 0,
      explanation: "The story is about the Eight Immortals, so exactly eight would be gathered at the shore."
    },
    {
      type: "story",
      text: "Lü Dongbin, their leader, suggested, 'Instead of riding clouds like usual, let's each cross using our own magical treasure. It will be more interesting!' The others agreed enthusiastically. Each immortal held their special object."
    },
    {
      type: "question",
      domain: "movement",
      question: "If the immortals usually ride clouds to travel, how would they typically move through the sky?",
      options: [
        "Walking on invisible stairs",
        "Swimming through the air",
        "Floating or gliding smoothly above",
        "Jumping from star to star"
      ],
      correctAnswer: 2,
      explanation: "Riding clouds would mean floating or gliding smoothly through the sky."
    },
    {
      type: "story",
      text: "Li Tieguai went first. He was an old man with a crippled leg who walked with an iron crutch. He threw his crutch onto the water, and it transformed into a boat-like vessel. He climbed aboard and began sailing across."
    },
    {
      type: "question",
      domain: "shape",
      question: "When Li Tieguai's iron crutch transforms on the water, what shape would it need to take to carry him?",
      options: [
        "Remaining a thin straight stick",
        "A curved boat-like form to float",
        "A perfect square platform",
        "A tall tower pointing up"
      ],
      correctAnswer: 1,
      explanation: "To carry someone across water, the crutch would need to become a curved, boat-like shape."
    },
    {
      type: "story",
      text: "Beautiful He Xiangu followed, carrying her magical lotus flower. She gently placed the lotus on the water, and it grew enormous. She stepped onto the pink petals, which carried her across the waves like a floating island."
    },
    {
      type: "question",
      domain: "size",
      question: "For a lotus flower to carry a person across the sea, how would its size need to change?",
      options: [
        "Shrink to tiny size",
        "Stay normal flower size",
        "Grow enormous like a platform",
        "Disappear completely"
      ],
      correctAnswer: 2,
      explanation: "The lotus would need to grow enormous to support a person's weight on water."
    },
    {
      type: "story",
      text: "Zhang Guolao rode backward on his white donkey, as was his strange habit. But at the water's edge, he folded his donkey up like paper until it was flat. He placed it on the water where it floated like a raft."
    },
    {
      type: "question",
      domain: "perspective",
      question: "If Zhang Guolao always rides backward on his donkey, which direction would he face while crossing the sea?",
      options: [
        "Looking forward where he's going",
        "Looking back toward the shore he left",
        "Looking straight up at the sky",
        "Looking down at the water"
      ],
      correctAnswer: 1,
      explanation: "Someone who rides backward would face the shore they left, not the direction they're traveling."
    },
    {
      type: "story",
      text: "Young Han Xiangzi played his magical flute. The beautiful music caused his jade flute to shine and grow larger. He used it like a boat, sitting cross-legged as the flute carried him across the waves."
    },
    {
      type: "question",
      domain: "sound",
      question: "As Han Xiangzi plays his magical flute while crossing, what might sea creatures below hear?",
      options: [
        "Thunderous drums",
        "Complete silence",
        "Melodious flute music drifting over water",
        "Loud shouting voices"
      ],
      correctAnswer: 2,
      explanation: "The magical flute would create melodious music that would drift across the water."
    },
    {
      type: "story",
      text: "Lan Caihe, who could be either male or female and stayed forever young, carried a flower basket. They scattered the flower basket on the water, and each flower became a stepping stone. Lan Caihe danced across from flower to flower."
    },
    {
      type: "question",
      domain: "movement",
      question: "When you picture Lan Caihe crossing on floating flowers, what kind of movement would this require?",
      options: [
        "Swimming underneath the flowers",
        "Light hopping from flower to flower",
        "Rolling across in a ball",
        "Digging through the flowers"
      ],
      correctAnswer: 1,
      explanation: "Dancing across floating flowers would require light hopping movements from one to another."
    },
    {
      type: "story",
      text: "Cao Guojiu, the royal immortal, held up his jade tablet of authority. It shimmered and created a golden bridge of light across the water. He walked regally across this bridge as befitted his noble status."
    },
    {
      type: "question",
      domain: "color",
      question: "When a royal jade tablet creates a bridge of light, what color would this magical bridge likely be?",
      options: [
        "Dark black shadows",
        "Golden glowing light",
        "Muddy brown",
        "Invisible clearness"
      ],
      correctAnswer: 1,
      explanation: "A royal magical bridge of light would likely glow with golden radiance."
    },
    {
      type: "story",
      text: "Zhongli Quan, the barefoot immortal with a big belly, waved his magical fan. The fan created powerful winds that lifted him up. He floated across the sea like a balloon, laughing heartily as the wind carried him."
    },
    {
      type: "question",
      domain: "where",
      question: "If Zhongli Quan's fan creates winds that lift him like a balloon, where would he be in relation to the water?",
      options: [
        "Deep under the water",
        "Floating high above the waves",
        "Skimming along the surface",
        "Inside a underwater cave"
      ],
      correctAnswer: 1,
      explanation: "Wind lifting someone like a balloon would carry them high above the water."
    },
    {
      type: "story",
      text: "Finally, Lü Dongbin drew his magical sword and threw it onto the water. It became a long, narrow boat. As he sailed across, he noticed dark clouds gathering. The Dragon King was angry about immortals crossing without permission!"
    },
    {
      type: "question",
      domain: "background",
      question: "When the Dragon King becomes angry and creates a storm, how would the sky change?",
      options: [
        "Becoming bright and sunny",
        "Turning completely white",
        "Showing rainbow colors",
        "Filling with dark storm clouds"
      ],
      correctAnswer: 3,
      explanation: "An angry Dragon King creating a storm would fill the sky with dark storm clouds."
    },
    {
      type: "story",
      text: "Huge waves rose up and sea monsters appeared. But the Eight Immortals worked together, each using their powers. They combined their magical objects to create a protective barrier and safely reached the other shore."
    },
    {
      type: "question",
      domain: "shape",
      question: "When eight magical objects combine to form a protective barrier, what shape would best protect the group?",
      options: [
        "A flat line behind them",
        "A dome or sphere surrounding them",
        "A tiny dot in the center",
        "Eight separate small shields"
      ],
      correctAnswer: 1,
      explanation: "A protective barrier would form a dome or sphere shape to surround and protect the group."
    },
    {
      type: "story",
      moral: "Each person has unique talents that contribute to group success. The Eight Immortals show that by using individual strengths together, any obstacle can be overcome."
    }
  ]
};

export default eightImmortals;