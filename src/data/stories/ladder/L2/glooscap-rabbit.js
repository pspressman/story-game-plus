// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: prior Q1's correct option spelled out the rest of the plot before the
// child had read it. Every option here is answerable only from what has already
// happened, and no option forecasts a later block.
const glooscapRabbit = {
  id: "glooscap-rabbit",
  title: "Glooscap and Rabbit",
  icon: "🐰",
  difficulty: "Easy",
  theme: "The small one who outthinks the great",
  estimatedTime: "5-10 min",
  description: "Rabbit comes to meet the greatest power in the land, full of admiration. Watch what his admiring questions are actually doing.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "Wabanaki",
    region: "North America",
    saga: null,
    source_epic: false,
    threads: [],
    edges: ["trickster_many_faces"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "Glooscap made the rivers and set the mountains where they stand, and there was no greater power in the land. Rabbit came hopping up the valley to meet him, and had to tip his head right back to see him. \"They say you are tall,\" said Rabbit. \"From down here I cannot tell how tall. Could you make yourself big enough to touch the clouds, so that I could see it?\""
    },
    {
      type: "question",
      domain: "vantage",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Rabbit says he cannot tell how tall Glooscap is from down there. Picture Rabbit at Glooscap's feet, looking up. Is that true?",
      options: [
        "Yes, a rabbit really cannot judge height from the ground",
        "No, Glooscap towers over him already, and Rabbit can see that perfectly well",
        "Yes, because the valley is too dark to see clearly",
        "No, because Rabbit has met Glooscap many times before"
      ],
      correctAnswer: 1,
      explanation: "He has to tip his head right back. He knows exactly how big Glooscap is. Saying that he cannot tell is the first move, and it is not a true thing said by accident."
    },
    {
      type: "story",
      text: "Glooscap rose up and up until his head was among the clouds. Rabbit stared, and clapped his paws. \"Remarkable,\" he said. \"Though anyone big can be big. I wonder whether someone truly great could make himself small. Small enough to fit inside a hollow reed.\""
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Rabbit says anyone big can be big. Picture what that sentence does to the giant standing in the clouds. What is it for?",
      options: [
        "To thank Glooscap politely for the demonstration",
        "To take the value out of what Glooscap has just done, so that he needs to do something else",
        "To warn Glooscap that other giants exist",
        "To ask Glooscap to come back down to the ground"
      ],
      correctAnswer: 1,
      explanation: "A moment ago being enormous was the proof. Now Rabbit has made it ordinary. Whatever Glooscap does next, he will be doing because the last thing stopped counting, and Rabbit is the one who decides when that happens."
    },
    {
      type: "story",
      text: "Glooscap heard the doubt in it and began to shrink. He came down out of the clouds, down past the treetops, down to the height of a man, and kept going, smaller and smaller, while Rabbit sat on his heels and watched."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Glooscap is shrinking to answer a doubt. Picture the two of them from a little way off: one growing and shrinking on command, one sitting still and watching. Who is deciding what happens?",
      options: [
        "Glooscap, since he is the one with the power to change",
        "Rabbit, since every change Glooscap makes is an answer to something Rabbit said",
        "Neither of them; it is happening by itself",
        "Both of them equally, since they agreed to it"
      ],
      correctAnswer: 1,
      explanation: "Power to do a thing is not the same as choosing to do it. Glooscap has all the strength in the picture and none of the choosing. The one who has not moved has been running it since the first question."
    },
    {
      type: "story",
      text: "Smaller and smaller, until Glooscap stood no taller than a blade of grass. Rabbit held up the hollow reed. Glooscap looked at it, and then at Rabbit, and did not step in."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "gerund",
      gates: false,
      question: "Glooscap stops at the mouth of the reed and looks at Rabbit. Picture what he has just understood. What does he see?",
      options: [
        "That the reed is too narrow even for someone that small",
        "That he has spent this whole time proving himself to someone who never doubted him",
        "That Rabbit is about to run away",
        "That he cannot make himself any smaller than he already is"
      ],
      correctAnswer: 1,
      explanation: "Rabbit knew how tall he was from the beginning. Every doubt since has been made up on the spot. Standing at the mouth of the reed, Glooscap can look back along the whole line of them and see what they were for."
    },
    {
      type: "story",
      text: "Glooscap grew until he filled the valley again, and he was laughing. \"You did that with nothing but your mouth,\" he said. \"I will remember it.\" And Rabbit, who had got what he came for, went off through the grass well pleased with himself."
    },
    {
      type: "story",
      moral: "The trap is laid with flattery, and pride walks toward it on its own feet. The one who makes you prove yourself is the one steering."
    }
  ]
};

export default glooscapRabbit;
