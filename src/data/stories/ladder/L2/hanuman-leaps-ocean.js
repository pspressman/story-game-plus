// hanuman-leaps-ocean.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: prior version's stems described a demon mountain, a ring, and a night of
// boasting that appeared nowhere in the story. Every scene questioned here is told.
const hanumanLeapsOcean = {
  id: "hanuman-leaps-ocean",
  title: "Hanuman Leaps the Ocean",
  icon: "🐵",
  difficulty: "Easy",
  theme: "The hidden measure of power",
  estimatedTime: "5-10 min",
  description: "Hanuman crosses the ocean to find Sita. Watch what size he chooses to be, and when.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "India",
    region: "South Asia",
    saga: "ramayana",
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
      text: "The monkeys and bears stood along the shore looking at the water. Sita was held on the island of Lanka, a hundred leagues out, and the older bears said plainly that nobody living could cross it. Hanuman did not argue with them. He walked down the sand, and as he walked he grew, until his shadow lay over the whole beach and the others were standing in it. Then he jumped."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Picture the monkeys on the beach, standing in that shadow, watching him go. What have they just learned?",
      options: [
        "That the crossing is easier than the bears had said",
        "That one of the people who had been standing with them all along could do this, and nobody knew",
        "That Hanuman does not care what the bears think",
        "That the ocean is narrower than it looks"
      ],
      correctAnswer: 1,
      explanation: "He was on that beach with them, ordinary, while they said it could not be done. The shadow is the moment they find out what had been standing next to them, and he says nothing about it at all."
    },
    {
      type: "story",
      text: "He came down on Lanka in the dark. The city had a wall around it and guards walking the top of it, and lamps burning at every gate. Hanuman looked at all of it. Then he made himself small, smaller, down to the size of a cat, and went in under the gate between the feet of the guards."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "He crossed an ocean at the size of a mountain and now he makes himself the size of a cat. Picture him looking at the lit wall before he shrinks. What is he weighing?",
      options: [
        "Whether he is strong enough to break the wall down",
        "That being huge got him here, but being huge is exactly what would get him seen now",
        "Whether the guards would let him pass if he asked politely",
        "How much of his strength the long leap has used up"
      ],
      correctAnswer: 1,
      explanation: "Nothing has happened to his strength. What has changed is what the job needs. Big was right for open water and is wrong for a lit gate, and he is the kind of person who notices the difference before walking in."
    },
    {
      type: "story",
      text: "He went through the gardens window by window all night long. Near morning, under an ashoka tree at the far end, he found Sita sitting on the ground with demon women in a ring around her, watching her."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Picture Hanuman in the leaves above her, looking down at the ring of guards. Why does he not simply grow and carry her out?",
      options: [
        "He is not strong enough to lift her that far",
        "The moment he is big, everyone in that garden sees him, and she is the one sitting in the middle of it",
        "He has been told not to touch her",
        "He does not yet know for certain that it is Sita"
      ],
      correctAnswer: 1,
      explanation: "Picture what happens in the second after. The guards are already around her, and a giant appearing overhead does not remove her from the ring; it starts the fight while she is inside it. His size is a thing he can spend once, and not here."
    },
    {
      type: "story",
      text: "So he stayed small, and waited until the women drowsed, and spoke to her from the branches, quietly, and told her that Rama was coming. Then he went back over the wall, and on his way out he grew again, and set fire to the city with his burning tail, and leapt home across the water."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "participle",
      gates: false,
      question: "Picture the guards on the wall at sunrise, with the city burning behind them. They have been walking that wall all night. What did they see?",
      options: [
        "A giant monkey attacking the gate, which they could not stop",
        "Nothing at all, because the thing that did this walked in under their own feet",
        "Rama's army crossing the water toward them",
        "Sita escaping through the garden"
      ],
      correctAnswer: 1,
      explanation: "They watched the whole night faithfully and they were looking for the wrong size of thing. What burned their city went past them at cat height, and the only part they ever saw was the fire on the way out."
    },
    {
      type: "story",
      moral: "The power held back until the right moment is worth twice the power spent too soon. A hidden measure finds its mark."
    }
  ]
};

export default hanumanLeapsOcean;
