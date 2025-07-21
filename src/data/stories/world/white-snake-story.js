const whiteSnake = {
  id: "white-snake",
  title: "The Legend of the White Snake",
  icon: "🐍",
  difficulty: "Hard",
  theme: "Love",
  estimatedTime: "15-20 min",
  description: "A magical tale of a white snake spirit who transforms into a woman and falls in love.",
  content: [
    {
      type: "story",
      text: "At the bottom of West Lake lived a white snake spirit named Bai Suzhen who had practiced magic for a thousand years. She had a good friend, a green snake spirit named Xiao Qing. One day, they decided to visit the human world."
    },
    {
      type: "question",
      domain: "where",
      question: "When you picture these magical snake spirits in their underwater home, where would they most likely be resting?",
      options: [
        "In tree branches above the water",
        "In caves or grottos at the lake bottom",
        "Floating on lily pads on the surface",
        "On the sandy beach beside the lake"
      ],
      correctAnswer: 1,
      explanation: "Since they lived at the bottom of the lake, they would likely rest in underwater caves or grottos."
    },
    {
      type: "story",
      text: "Using their magic powers, the two snakes transformed into beautiful young women. Bai Suzhen became a lady dressed in flowing white silk, while Xiao Qing wore green robes. They walked across the famous Broken Bridge over West Lake."
    },
    {
      type: "question",
      domain: "movement",
      question: "As you visualize these magical beings crossing the bridge in human form, how would they likely be moving?",
      options: [
        "Slithering like snakes despite their human appearance",
        "Walking gracefully like elegant ladies",
        "Hopping on one foot playfully",
        "Crawling on hands and knees"
      ],
      correctAnswer: 1,
      explanation: "Having transformed into young women, they would walk gracefully like proper ladies of that time."
    },
    {
      type: "story",
      text: "Suddenly, rain began to fall. A young scholar named Xu Xian was crossing the bridge and kindly offered to share his umbrella with the two ladies. Bai Suzhen looked into his gentle eyes and felt her heart flutter with a feeling she'd never known before."
    },
    {
      type: "question",
      domain: "mood",
      question: "When you imagine Bai Suzhen looking at Xu Xian for the first time, what expression would be on her face?",
      options: [
        "Angry and frightening",
        "Bored and sleepy",
        "Surprised and enchanted, perhaps blushing",
        "Disgusted and turning away"
      ],
      correctAnswer: 2,
      explanation: "Since her heart fluttered with new feelings of love, she would look surprised and enchanted."
    },
    {
      type: "story",
      text: "Bai Suzhen and Xu Xian fell deeply in love and soon married. They opened a medicine shop together, where Bai Suzhen used her magical knowledge of herbs to create powerful healing potions. Many sick people came to them for help."
    },
    {
      type: "question",
      domain: "where",
      question: "In your mental picture of their daily life, where would you see Bai Suzhen and Xu Xian working?",
      options: [
        "In a medicine shop helping sick people",
        "On a farm growing rice",
        "In the palace as royal guards",
        "On a boat fishing in the lake"
      ],
      correctAnswer: 0,
      explanation: "The story tells us they opened a medicine shop together where they helped heal sick people."
    },
    {
      type: "story",
      text: "Their happiness caught the attention of a jealous monk named Fa Hai. He could see that Bai Suzhen was not human and believed that humans and spirits should never be together. He decided to reveal her true identity to Xu Xian."
    },
    {
      type: "question",
      domain: "perspective",
      question: "From Fa Hai's point of view as a monk with magical sight, what would he see when looking at Bai Suzhen?",
      options: [
        "Just an ordinary woman",
        "A beautiful princess",
        "Both her human form and her true snake spirit nature",
        "Nothing at all - she would be invisible"
      ],
      correctAnswer: 2,
      explanation: "As a monk with special powers, Fa Hai could see through the disguise to her true snake spirit nature."
    },
    {
      type: "story",
      text: "During the Dragon Boat Festival, Fa Hai told Xu Xian to make his wife drink realgar wine, saying it would protect her health. But realgar wine is poisonous to snake spirits! When Bai Suzhen drank it, she lost control of her magic."
    },
    {
      type: "question",
      domain: "movement",
      question: "As the realgar wine affects Bai Suzhen, how would you visualize her movement changing?",
      options: [
        "Dancing gracefully and happily",
        "Struggling and losing control, perhaps writhing",
        "Standing perfectly still like a statue",
        "Flying up into the clouds"
      ],
      correctAnswer: 1,
      explanation: "Since the wine is poisonous to her and makes her lose control, she would struggle and writhe in distress."
    },
    {
      type: "story",
      text: "Bai Suzhen transformed back into her white snake form in front of Xu Xian. The poor scholar was so shocked and frightened that he collapsed and his heart stopped beating. When Bai Suzhen regained her human form, she found her beloved husband lifeless."
    },
    {
      type: "question",
      domain: "size",
      question: "When Bai Suzhen reveals her true form, how large would the white snake appear compared to a normal snake?",
      options: [
        "Tiny, like a garden snake",
        "The same size as any regular snake",
        "Much larger - a magical thousand-year-old spirit snake",
        "Microscopic and impossible to see"
      ],
      correctAnswer: 2,
      explanation: "As a thousand-year-old spirit snake with great power, she would be much larger than a normal snake."
    },
    {
      type: "story",
      text: "Desperate to save her husband, Bai Suzhen flew to the sacred Kunlun Mountain. There grew a magical herb that could bring the dead back to life. But the mountain was guarded by powerful immortals who wouldn't let her take it."
    },
    {
      type: "question",
      domain: "background",
      question: "As you picture the sacred Kunlun Mountain where the magical herb grows, what would the setting look like?",
      options: [
        "A tropical beach with palm trees",
        "A misty, towering mountain with an otherworldly appearance",
        "A deep underground cave",
        "A modern city with tall buildings"
      ],
      correctAnswer: 1,
      explanation: "A sacred mountain with magical herbs would appear misty and towering with a mystical, otherworldly quality."
    },
    {
      type: "story",
      text: "Bai Suzhen fought bravely against the immortal guards. Her love for Xu Xian gave her incredible strength. Moved by her devotion, the immortals finally allowed her to take one small piece of the life-giving herb."
    },
    {
      type: "question",
      domain: "number",
      question: "In your visualization of Bai Suzhen's success, how many pieces of the magical herb did she obtain?",
      options: [
        "A whole basket full",
        "One small piece",
        "Hundreds of herbs",
        "None at all"
      ],
      correctAnswer: 1,
      explanation: "The immortals allowed her to take one small piece of the life-giving herb."
    },
    {
      type: "story",
      text: "Bai Suzhen rushed back and gave Xu Xian the magical herb. He opened his eyes and came back to life! Xu Xian realized that even though his wife was a snake spirit, she truly loved him. He accepted her for who she was, and they embraced with tears of joy."
    },
    {
      type: "question",
      domain: "when",
      question: "At what point in the story does Xu Xian fully accept that his wife is a snake spirit?",
      options: [
        "The moment they first met on the bridge",
        "When they opened their medicine shop",
        "He never accepts the truth",
        "After she saved his life with the magical herb"
      ],
      correctAnswer: 3,
      explanation: "Xu Xian accepts her true nature after she saves his life, proving her genuine love for him."
    },
    {
      type: "story",
      moral: "True love sees beyond appearances and accepts the beloved completely. Bai Suzhen's devotion and Xu Xian's acceptance show that love can bridge any difference, even between the human and spirit worlds."
    }
  ]
};

export default whiteSnake;