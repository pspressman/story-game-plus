// robin-hood-archery.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Gate: read the trick. The gating stems turn on a non-finite form AND on reading Robin's plan through disguise.
const robinHoodArchery = {
  id: "robin-hood-archery",
  title: "Robin Hood: Disguise and the Archery Contest",
  icon: "🏹",
  difficulty: "Easy",
  theme: "The outlaw's trick",
  estimatedTime: "5-10 min",
  description: "The Sheriff announces an archery contest with a golden arrow as prize. Robin Hood knows it is a trap, but he cannot resist. One ragged beggar steps forward.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "England",
    region: "British Isles",
    saga: "robin_hood",
    source_epic: true,
    threads: [],
    edges: ["outlaw_circling_the_globe"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "The Sheriff of Nottingham proclaimed a great archery contest, the prize a golden arrow. \"Robin Hood will come,\" he said to his men. \"He is too proud to stay away. We will be watching for Lincoln green and a long bow.\" In Sherwood Forest, Robin only smiled and reached for rags and dirt."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Robin chooses to enter the contest dressed as a filthy beggar instead of wearing his usual green. What is he really hoping to accomplish by coming in disguise?",
      options: [
        "To hide his shame at entering the Sheriff's contest",
        "To win the golden arrow while avoiding the Sheriff's trap",
        "To make the other archers underestimate him and feel sorry for him",
        "To test whether his own men will recognize him"
      ],
      correctAnswer: 1,
      explanation: "Reading the trick means seeing past the surface reason (winning) to the hidden plan underneath: by coming in rags, he can shoot openly under the Sheriff's nose yet walk away free when the soldiers are hunting green cloth and a tall outlaw."
    },
    {
      type: "story",
      text: "The day came bright and hot. Fifty archers stood in their best cloth. One ragged man in the corner drew no eye at all. Round by round the arrows flew until only three remained: a knight, a forester, and the beggar. The beggar's final arrow split the very center. The crowd roared. The Sheriff, watching, frowned at the empty road."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "The Sheriff stands watching the road for Robin Hood while the beggar wins his prize. What is the Sheriff failing to see?",
      options: [
        "That Robin Hood is already dead and will never come",
        "That the ragged beggar winning the contest is Robin himself",
        "That his own men have betrayed him to Robin Hood",
        "That the golden arrow is actually a fake"
      ],
      correctAnswer: 1,
      explanation: "The Sheriff's mind is fixed on one picture: Lincoln green on the road. His failure to read the trick—that Robin could come in another skin—means he cannot see what is happening right in front of him."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "When the beggar walks away with the golden arrow toward the forest edge, what has already happened to the Sheriff's plan to capture Robin Hood?",
      options: [
        "It has succeeded; Robin is surrounded",
        "It has failed; Robin has won the prize and is escaping unseen",
        "It has been postponed until next year's contest",
        "It has been discovered by Robin's men who warned him away"
      ],
      correctAnswer: 1,
      explanation: "Tracking what has already happened by the moment the beggar walks free is a simpler move from an earlier rung; here it confirms the trick's success rather than testing the read of the plan itself."
    },
    {
      type: "story",
      text: "Safe in the greenwood that evening, Robin Hood tied the golden arrow to a shaft and sent it flying back to Nottingham castle with a message: \"Heaven bless your grace this day, say all in merry Sherwood. The ragged beggar thanks you for the prize.\" The Sheriff read it twice, then tore it into small pieces."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Robin sends a message thanking the Sheriff for the prize only after he is safely away. What makes this message bite deeper than simple boasting?",
      options: [
        "Robin is sincerely grateful that the Sheriff held a fair contest",
        "Robin reveals that the Sheriff's own trap became the stage for Robin to win glory and mock him",
        "Robin promises to return the arrow in the future",
        "Robin threatens to harm the Sheriff if he tries again"
      ],
      correctAnswer: 1,
      explanation: "The irony cuts because Robin thanks the Sheriff for exactly what the Sheriff was trying to prevent: by setting a trap to catch Robin, he instead gave Robin the perfect opportunity to prove his skill and humiliate him. The message forces the Sheriff to see how completely his plan backfired."
    },
    {
      type: "story",
      moral: "Pride is not only the trap; sometimes it is also the key. A mind that sees only one face will always miss the beggar in the corner."
    }
  ]
};

export default robinHoodArchery;