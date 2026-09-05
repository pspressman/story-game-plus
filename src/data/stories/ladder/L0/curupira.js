// curupira.js
// L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture the backward feet and wrong-way tracks.
const curupira = {
  id: "curupira",
  title: "Curupira",
  icon: "🌳",
  difficulty: "Beginner",
  theme: "What looks backward may lead you wrong",
  estimatedTime: "5-10 min",
  description: "In the Amazon forest, a protector spirit with backward feet guards the animals. Picture his footprints carefully.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Amazon",
    region: "South America",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "A hunter walked into the deep forest with his bow, looking for animals to kill. He did not know that Curupira was watching him. Curupira is small and strong, with bright red hair and feet that point backward. When hunters hurt the forest animals, he leads them away until they are lost."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "The hunter sees fresh footprints in the mud. The toes point north. Where is Curupira actually walking?",
      options: [
        "North, following his toes",
        "South, away from his toes",
        "Standing still in one place",
        "In a circle around the hunter"
      ],
      correctAnswer: 1,
      explanation: "Curupira's feet point backward. When the toes point north, his body walks south. To picture the tracks rightly is to see them pointing the wrong way."
    },
    {
      type: "story",
      text: "The hunter followed the prints, certain they would lead him to game. He walked and walked, north through thick vines and trees. Behind him, far to the south, Curupira stood on a fallen log and laughed."
    },
    {
      type: "question",
      domain: "color",
      band: "B0",
      grammar_cell: "concrete_noun",
      gates: false,
      question: "Picture Curupira standing on the log in the forest. What color is his hair?",
      options: [
        "Black as night",
        "Bright red as fire",
        "Green as the leaves",
        "White as cloud"
      ],
      correctAnswer: 1,
      explanation: "The story tells us his hair is bright red. Picturing the figure clearly gives the answer."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "The hunter walked north, following the toe prints. How many animals did he find that way?",
      options: [
        "A whole herd",
        "Three or four",
        "One small bird",
        "None at all"
      ],
      correctAnswer: 3,
      explanation: "The backward feet sent him the wrong direction, away from all the animals. The trick worked: he found nothing."
    },
    {
      type: "story",
      text: "By evening the hunter was deep in strange forest with no idea which way was home. He had seen no animals, heard no familiar sounds. Only then did he remember the old stories about a forest guardian whose feet point the wrong way. He set down his bow and walked home empty-handed, and never hunted carelessly again."
    },
    {
      type: "question",
      domain: "mood",
      band: "B0",
      grammar_cell: "simple_present",
      gates: false,
      question: "Picture the hunter at the end, walking home with no animals. How does he feel about the forest now?",
      options: [
        "Proud of how far he walked",
        "Angry at Curupira for tricking him",
        "More careful and respectful",
        "Eager to return tomorrow"
      ],
      correctAnswer: 2,
      explanation: "The story shows him setting down his weapon and changing his ways. He has learned to be more careful and show respect."
    },
    {
      type: "story",
      moral: "Backward feet left forward-pointing tracks. The forest kept its animals by showing the hunter the wrong way home."
    }
  ]
};

export default curupira;