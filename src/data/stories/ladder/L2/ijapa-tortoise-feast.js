// ijapa-tortoise-feast.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: prior Q1's correct option named the false-name trick a full block before
// the story told it. Nothing here reaches forward past the block the child has read.
const ijapaTortoiseFeast = {
  id: "ijapa-tortoise-feast",
  title: "Ijapa's Feast in the Sky",
  icon: "🐢",
  difficulty: "Easy",
  theme: "The name that took everything",
  estimatedTime: "5-10 min",
  description: "A tortoise with no wings talks his way to a feast in the sky. Watch what he borrows, and from how many.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "Yoruba",
    region: "West Africa",
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
      text: "Word came down from the sky people: a feast, and all the birds invited. Ijapa the tortoise heard it and wanted to go, but a tortoise has no wings. So he went around the birds one at a time. He told each one how fine its feathers were, and asked for one. Only one. Not a bird could think of a reason to refuse, and by evening Ijapa had a coat of feathers and could fly."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Ijapa could have asked one generous bird for a whole wing. Picture him instead going round them all, asking one feather each. What does asking small get him?",
      options: [
        "A better-looking coat, since the feathers come in many colours",
        "Nobody is asked for enough to say no to, so nobody says no",
        "The birds will forget they ever gave anything away",
        "The sky people will not notice a tortoise among the birds"
      ],
      correctAnswer: 1,
      explanation: "One feather is nothing to lose. That is the whole point of asking for one. Spread the cost thin enough across enough people and no single person has a reason to stop it, and the thing gets built anyway."
    },
    {
      type: "story",
      text: "They flew up together. When they landed the sky people came out to greet them and asked each guest for a name. The birds gave theirs one by one. Then Ijapa stepped forward, bowed low, and said, \"My name is All of You.\""
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Picture the sky people hearing that answer. They do not laugh and they do not question it. What have they heard?",
      options: [
        "A joke, which they are too polite to react to",
        "A name, strange to them but no stranger than anything else a guest might be called",
        "An insult aimed at their hospitality",
        "A claim that the tortoise speaks for all the birds"
      ],
      correctAnswer: 1,
      explanation: "They asked for names and they are collecting names. Nothing about the sound of it warns them, because a host meeting strangers has no way to tell an odd name from a trap, and Ijapa has said nothing that is not an answer to the question asked."
    },
    {
      type: "story",
      text: "The sky people set out the feast: roasted yams, pepper soup, fried plantain, palm wine. Then they stood back and announced to the room, \"This food is for All of You.\" Ijapa went forward and began to eat."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "One sentence has just been spoken and two things have been heard. Picture the room. What did the birds understand, and what did Ijapa?",
      options: [
        "Both heard an invitation to everyone, but Ijapa moved faster",
        "The birds heard everyone; Ijapa heard his own name being called",
        "Both understood the food was only for the tortoise",
        "The birds heard nothing, since the hosts spoke only to Ijapa"
      ],
      correctAnswer: 1,
      explanation: "The hosts said one thing and meant everyone in the room. The same words, landing in Ijapa's ear, are a name. He is not stealing the food; he is being handed it, by people who think they are handing it to all of them."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Picture a bird about to object as the dishes empty. To stop this, what would it have to do in front of its hosts?",
      options: [
        "Simply take a dish for itself and say nothing",
        "Tell the hosts they misunderstood their own announcement, and call another guest a liar at their table",
        "Ask the hosts politely to bring out more food",
        "Fly home at once and leave the tortoise there"
      ],
      correctAnswer: 1,
      explanation: "The hosts are not wrong about anything they said, and Ijapa has not broken a rule of the table. Undoing it means contradicting the hosts about their own words and accusing a fellow guest in their house, which is why the birds sit and watch it happen."
    },
    {
      type: "story",
      text: "The birds flew home hungry and silent. And one by one, without a word, each took back its own feather. Ijapa stood on the edge of the sky with nothing on him at all."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Nobody punished Ijapa. Each bird only took back the one thing that was its own. Picture him at the edge of the sky. Why can they undo him so completely?",
      options: [
        "Because they acted together and outnumbered him",
        "Because everything holding him up belonged to somebody else, so he was only ever up there on loan",
        "Because the sky people asked them to take the feathers back",
        "Because a tortoise is too heavy to fly for long anyway"
      ],
      correctAnswer: 1,
      explanation: "He never had wings. He had a hundred small permissions, and every one of them could be withdrawn by the person who gave it. Nothing was taken from him that was his, and there is nothing left."
    },
    {
      type: "story",
      text: "There was one way down and it went through a bird. Ijapa called to Parrot to fly ahead and tell his wife to pile every soft thing in the house on the ground beneath him. Parrot went. Parrot told her to bring out the hard things. Ijapa fell onto stones and iron pots, and his shell broke into a hundred pieces. He lived. The cracks are on it still."
    },
    {
      type: "story",
      moral: "A borrowed path can vanish. The trick that lifts you may leave you with no way home."
    }
  ]
};

export default ijapaTortoiseFeast;
