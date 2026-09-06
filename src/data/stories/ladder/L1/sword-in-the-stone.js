// example_L1_sword-in-the-stone.js
// WORKED EXEMPLAR. L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Rewritten: prior version's items each restated the sentence above them. Every item
// here requires building the scene. Q3 and Q4 are the vantage split: what Arthur
// believes he is doing, against what the reader can see is happening.
const swordInTheStone = {
  id: "sword-in-the-stone",
  title: "The Sword in the Stone",
  icon: "🗡️",
  difficulty: "Beginner",
  theme: "The right hand, not the strong one",
  estimatedTime: "5-10 min",
  description: "Grown knights heave at a sword fixed in an anvil and cannot stir it. A boy walks up to borrow one for his brother. Picture what he thinks he is doing.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Britain",
    region: "British Isles",
    saga: "arthur",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "In the churchyard stood a great stone, and on the stone an anvil, and driven through the anvil a sword. Words were cut into the stone: whoever draws this out is the true king. For years the knights had come. Each one gripped the hilt in both hands, set a boot against the anvil, and hauled until the veins stood out on his neck. Then the next man stepped up."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: false,
      question: "Picture the sword sitting there in the churchyard. What is it stuck through?",
      options: [
        "The stone itself, with the anvil beside it",
        "The anvil, which is standing on top of the stone",
        "The ground, with the stone and anvil nearby",
        "A tree stump between two stones"
      ],
      correctAnswer: 1,
      explanation: "Stack it up from the ground: stone at the bottom, anvil on top of the stone, sword driven down through the anvil. That is why a knight can brace his boot on the anvil and still pull nothing loose."
    },
    {
      type: "question",
      domain: "movement",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Years of knights have hauled on that hilt with everything they have. Picture the sword through all of it. What has it been doing?",
      options: [
        "Working loose a little more each time",
        "Standing exactly as it was, not shifting at all",
        "Sinking deeper into the anvil with every pull",
        "Turning slowly in its slot"
      ],
      correctAnswer: 1,
      explanation: "All that force, year after year, and the story shows no man moving it. Picture the sword as the still thing at the centre while men strain around it and give up one after another."
    },
    {
      type: "story",
      text: "On the morning of the tournament, Arthur's older brother Kay reached for his sword and found he had left it at the inn. \"Fetch me one, quick,\" he said. Arthur ran. The inn was locked and the streets were packed. Coming back past the churchyard he saw a sword standing ready with nobody near it, so he took the hilt and drew it out, and ran on with it to his brother."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B1",
      grammar_cell: "simple_past",
      gates: true,
      question: "Picture Arthur running back with the sword in his hand. What does he think he is carrying?",
      options: [
        "Proof that he is the true king of Britain",
        "A borrowed sword for Kay, that somebody left in a stone",
        "A holy thing he has stolen from the churchyard",
        "A sword he has won in a contest"
      ],
      correctAnswer: 1,
      explanation: "He never stopped to read the stone. He was sent on an errand, he was in a hurry, and he found a sword nobody was using. In his hands it is only a sword, and he is only late."
    },
    {
      type: "question",
      domain: "irony",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "You have watched the knights and you have read the words on the stone. Arthur has done neither. Picture the empty anvil behind him as he runs. What has just happened there?",
      options: [
        "Nothing important; a boy has borrowed a sword",
        "The thing years of knights could not do has been done, and the only person who does not know it is the one who did it",
        "The sword has broken and Arthur is carrying the pieces",
        "Another knight has finally succeeded and Arthur took the sword afterward"
      ],
      correctAnswer: 1,
      explanation: "Two pictures at once. In Arthur's, an errand is finished. In yours, an empty anvil stands in a churchyard and the whole question of who rules Britain has just been settled by a boy who did not look down."
    },
    {
      type: "story",
      text: "Kay carried the sword to their father and said that he had drawn it himself. Their father took him back to the churchyard and told him to put it in and draw it again. Kay set it in the anvil and pulled, and pulled, and could not move it. Then Arthur, puzzled, slid it out as easily as before."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Kay has the sword in his hands and has already claimed it. Picture him gripping the hilt in the churchyard with his father watching. What does he already know?",
      options: [
        "That he will draw it easily this time",
        "That it will not come, because he was not the one who pulled it out",
        "That Arthur is about to be named king",
        "That the sword has been switched for another"
      ],
      correctAnswer: 1,
      explanation: "He knows exactly where the sword came from, because Arthur handed it to him. He grips it knowing it will not move. Picture the pulling as something he has to be seen doing, not something he expects to work."
    },
    {
      type: "story",
      text: "Then they understood what had quietly happened in the churchyard while the tournament was being got ready, and they knelt down in front of the boy who had been sent to fetch a sword."
    },
    {
      type: "story",
      moral: "Strength rattled the sword for years. A boy on an errand lifted it. The story turned on who was sent, not who was strong."
    }
  ]
};

export default swordInTheStone;
