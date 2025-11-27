// Better Vegetables with Love Than Steak with Hate - Proverbs 15:17
const betterVegetablesLove = {
  id: "better-vegetables-love",
  title: "Better Vegetables with Love Than Steak with Hate",
  icon: "🥗",
  difficulty: "Easy",
  theme: "Love",
  estimatedTime: "10-15 min",
  description: "Discover how love makes simple things better than luxury with hatred.",
  content: [
    {
      type: "story",
      text: "Sam visited two friends' houses for dinner. At Rich's mansion, they ate expensive steak, but Rich's family argued the whole meal, voices sharp with anger."
    },
    {
      type: "question",
      domain: "taste",
      question: "Picture trying to eat your favorite food while people around you are yelling angrily. How would that food taste in your imagination?",
      options: [
        "Extra delicious",
        "The same as always",
        "Like it lost its flavor",
        "Sweeter than usual"
      ],
      correctAnswer: 2,
      explanation: "Anger and hatred make even the best food hard to enjoy!"
    },
    {
      type: "story",
      text: "At Anna's small house, they only had vegetable soup and bread. But Anna's family laughed together, shared stories, and made Sam feel loved. The simple meal felt like a feast!"
    },
    {
      type: "question",
      domain: "mood",
      question: "Visualize Sam's face at each dinner table. At which house would his expression look more relaxed and happy?",
      options: [
        "At Anna's house with vegetables and love",
        "At Rich's house with steak and arguing",
        "His face would be the same at both",
        "He would look sad at both places"
      ],
      correctAnswer: 0,
      explanation: "Love and peace make us feel good inside, no matter what we're eating!"
    },
    {
      type: "story",
      text: "Sam's grandmother explained: 'Better is a dinner of herbs where love is, than a fattened ox with hatred.' This means love makes simple things wonderful, while hatred ruins even the finest things."
    },
    {
      type: "question",
      domain: "background",
      question: "Picture two dinner tables: one with fancy food but dark storm clouds of anger above it, another with simple food but warm sunshine of love. Which background would make the meal better?",
      options: [
        "The storm clouds with fancy food",
        "Both would be equally good",
        "Neither would be pleasant",
        "The sunshine with simple food"
      ],
      correctAnswer: 3,
      explanation: "The 'atmosphere' of love is more important than what's on the plate!"
    },
    {
      type: "story",
      text: "Sam learned something important. When he helped make dinner at home now, he focused on making everyone feel loved and welcome, knowing this was the most important ingredient."
    },
    {
      type: "question",
      domain: "what",
      question: "Visualize a family sharing plain peanut butter sandwiches while joking and hugging, versus eating lobster in angry silence. Which meal would leave everyone feeling more 'full' inside?",
      options: [
        "The silent lobster dinner",
        "Neither would satisfy",
        "The loving sandwich meal",
        "Both would feel the same"
      ],
      correctAnswer: 2,
      explanation: "Love fills our hearts in a way that fancy food alone never can!"
    },
    {
      type: "story",
      moral: "Better vegetables with love than steak with hatred means: love and kindness make any situation wonderful, while anger and hatred ruin even the best things!"
    }
  ]
};

export default betterVegetablesLove;