// example_L2_anansi-moss-rock.js
// WORKED EXEMPLAR. L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Gate: read the trick. The gating stems turn on a non-finite form AND on a second character's read of intent.
const anansiMossRock = {
  id: "anansi-moss-rock",
  title: "Anansi and the Moss-Covered Rock",
  icon: "🕷️",
  difficulty: "Easy",
  theme: "The trickster, tricked",
  estimatedTime: "5-10 min",
  description: "Anansi finds a rock with a strange power and a way to use it on his neighbors. One small watcher says nothing, and waits.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "Akan",
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
      text: "Deep in the forest Anansi found a moss-covered rock. When he said the words \"Isn't this a strange moss-covered rock,\" everything went black and he fell down in a faint, waking an hour later. A slow smile spread across his face."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "The next day Anansi begins inviting his neighbors, one by one, to come and admire the moss-covered rock. What is he really hoping to do?",
      options: [
        "To share a wonder he is proud to have found",
        "To make each one faint at the rock so he can carry off their food",
        "To learn who the rock truly belongs to",
        "To find someone who can break its spell"
      ],
      correctAnswer: 1,
      explanation: "Reading the trick means seeing past the friendly invitation to the plan underneath: he leads each animal out to faint, then goes back to empty their store while they lie senseless."
    },
    {
      type: "story",
      text: "So it went. Lion, Elephant, Hippo, each was led to the rock, each fainted, and each woke to find their yams and plantains gone. But Little Bush Deer had been watching from the ferns the whole while, saying not one word."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Bush Deer keeps still, watching Anansi run the same trick again and again without ever calling out. What is she most likely doing?",
      options: [
        "Failing to understand what Anansi is up to",
        "Waiting, having already seen the trick, to turn it back on him",
        "Hoping that Anansi will share some food with her too",
        "Too frightened of Anansi to move or speak"
      ],
      correctAnswer: 1,
      explanation: "Her silence is not confusion. Having watched every step, she already understands the trick, and a second mind that understands a trick is a mind preparing to use it."
    },
    {
      type: "question",
      domain: "number",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Each time an animal wakes by the rock, picture their food store back home. What has happened to it?",
      options: [
        "Nothing; it is untouched",
        "It has been emptied while they lay fainted",
        "It has doubled overnight",
        "Only the rock is missing"
      ],
      correctAnswer: 1,
      explanation: "Holding what has already happened while the animal slept is a simpler tracking move from an earlier rung; here it sets up the trick rather than testing the read of it."
    },
    {
      type: "story",
      text: "When Anansi tried the trick on Bush Deer, she only blinked and said, \"Why yes, Anansi, isn't this a strange moss-covered rock\" and stepped neatly aside. Down went Anansi in a faint of his own. By the time he woke, every animal had carried home what was theirs, and a little extra besides."
    },
    {
      type: "story",
      moral: "The trap found its way home. A trick seen in time becomes a trick returned."
    }
  ]
};

export default anansiMossRock;
