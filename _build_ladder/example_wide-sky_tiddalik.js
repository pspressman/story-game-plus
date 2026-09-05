// example_wide-sky_tiddalik.js
// WORKED EXEMPLAR. Wide Sky, untestable, BUT openly shared and fable-shaped, so it carries
// visualization questions. This is the ONLY Wide Sky node with questions. Every question is
// gates:false (it counts toward no level gate). The node stays untestable:true as a node.
const tiddalik = {
  id: "tiddalik",
  title: "Tiddalik the Frog",
  icon: "🐸",
  difficulty: "Story",
  theme: "Letting go fills the world",
  estimatedTime: "5-10 min",
  description: "A giant frog wakes up thirsty and drinks until the land runs dry. To bring the water back, the animals must do the one thing he is not expecting.",

  meta: {
    level: null,
    track: "wide_sky",
    tier: null,
    band: null,
    grammar_online: [],
    grammar_target: null,
    culture: "Aboriginal Australian",
    region: "Australia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: "Aboriginal Dreaming story, widely and openly shared. Fable-shaped, so gentle visualization questions are welcome here. The other Dreaming stories in Wide Sky are not to be quizzed.",
    untestable: true,
    visualize_prompt: "Picture the land before and after Tiddalik drinks. Hold both pictures at once and feel the difference."
  },

  content: [
    {
      type: "story",
      text: "One morning Tiddalik the giant frog woke with a thirst like no other. He drank from the creek, then the river, then the lake, then every billabong and waterhole, until he had swallowed all the fresh water in the whole land."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "Picture the wide river that used to run past the animals' homes. After Tiddalik has drunk his fill, what is left of it?",
      options: [
        "A full river, flowing as before",
        "A half-empty channel",
        "Cracked mud with only a few small pools",
        "A flooded plain"
      ],
      correctAnswer: 2,
      explanation: "If one frog has swallowed every river and lake, the picture left behind is dry cracked ground where the water used to be. This is a picturing beat, not a test."
    },
    {
      type: "story",
      text: "The animals grew desperate. Plants wilted, throats went dry. A wise old wombat said the only way to get the water back was to make Tiddalik laugh, for then it would all come pouring out of him."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "concrete_noun",
      gates: false,
      question: "The animals gather in front of Tiddalik to try to make him laugh. Picture him among them. How does he look compared to the others?",
      options: [
        "Tiny and easy to miss",
        "Swollen huge and round in the middle of them all",
        "Thin and starved",
        "Hidden underground out of sight"
      ],
      correctAnswer: 1,
      explanation: "He is holding all the water in the land inside himself, so the right picture is an enormous, bloated frog towering over the gathered animals."
    },
    {
      type: "story",
      text: "One by one the animals tried. Kookaburra told his best jokes; nothing. Then the eel began to dance, twisting himself into loops and knots and silly shapes, and at last Tiddalik could not help it."
    },
    {
      type: "question",
      domain: "mood",
      band: "B0",
      grammar_cell: "simple_present",
      gates: false,
      question: "As Tiddalik bursts out laughing and the water gushes back into the dry rivers, how do the other animals most likely look?",
      options: [
        "Angry and shouting at him",
        "Relieved and laughing along with him",
        "Bored and wandering away",
        "Frightened and hiding"
      ],
      correctAnswer: 1,
      explanation: "The water they were dying without is rushing back to the world. The natural picture is relief and shared laughter as the land drinks again."
    },
    {
      type: "story",
      text: "The water flooded back into the creeks and rivers and lakes, and the land came alive once more. Tiddalik had held the whole world's water inside him, and it was letting it go, not holding on, that brought the world back."
    },
    {
      type: "story",
      moral: "He kept everything, and everything dried up. He let it go, and the world filled again."
    }
  ]
};

export default tiddalik;
