// pandora-forbidden-door.js  L6, B4 the counterfactual present. Target: conditional. Gate: hold the branch that could be.
const story = {
  id: "pandora-forbidden-door",
  title: "The Forbidden Door",
  icon: "🚪",
  difficulty: "Hard",
  theme: "The one branch you are told never to open",
  estimatedTime: "5-10 min",
  description: "She may open every door in the great house but one. Hold in your mind the branch that waits behind it, and what opening it would loose.",
  meta: {
    level: 6,
    track: "gated",
    tier: "R",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional"],
    grammar_target: "conditional",
    culture: "European",
    region: "Western Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A girl was given the run of a great house and a ring of keys. \"Open any door you wish,\" she was told, \"and enjoy all you find. But this one small door you must never open.\" And the little key to it was placed on the ring with all the others, so that the forbidden door was always there in her hand." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "Hold the warning in mind. If she were to turn the little key and open the forbidden door, what would most likely happen?",
      options: [
        "Nothing at all; the warning was meaningless",
        "Something kept carefully shut away would be loosed, and could not easily be shut again",
        "She would simply find an empty room and a clean floor",
        "She would be rewarded for her curiosity"
      ],
      correctAnswer: 1,
      explanation: "Forbidden doors in such tales guard a branch that must stay closed. Holding it, the reader knows that opening would release what the door was built to contain, and that what is loosed does not go meekly back. That unsprung branch is the whole tension."
    },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "second_conditional",
      gates: true,
      question: "As long as that one door stays shut, which branch is she keeping closed off?",
      options: [
        "The branch where she enjoys the rest of the house in peace",
        "The branch where the hidden trouble is loosed and her quiet life is undone",
        "The branch where she is given even more keys",
        "The branch where the house falls down"
      ],
      correctAnswer: 1,
      explanation: "Keeping the door shut holds the bad branch at bay. To follow the story you carry both at once: the calm she is living in, and the ruin one turn of the key would open. Her safety lasts exactly as long as the door does."
    },
    { type: "story", text: "Day after day she walked past the little door, and her curiosity grew. Surely one quick look could do no harm. She told herself she would open it only a crack, see what was there, and close it again at once." },
    {
      type: "question",
      domain: "branch",
      band: "B4",
      grammar_cell: "first_conditional",
      gates: true,
      question: "She plans to open the door just a crack, peek, and shut it again. If what is behind the door is something that escapes the moment it is loosed, what is wrong with her plan?",
      options: [
        "Nothing; a quick look is perfectly safe",
        "Once it is loosed it cannot simply be shut back in, so even a crack would be too late to undo",
        "The door is too heavy for her to open even a crack",
        "She would not be able to see anything in the dark"
      ],
      correctAnswer: 1,
      explanation: "Her plan assumes the branch can be opened and then closed at will. But if what waits cannot be recaptured, then the conditional is harsher than she thinks: a crack is enough, and there is no shutting it again once it is out."
    },
    { type: "story", text: "At last she could not help herself, and she opened the forbidden door. What had been kept inside slipped past her into the wide world, and no key on her ring could ever lock it away again. All the open doors of the house could not undo that single closed one, opened." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why was she able to open all the other doors freely, without any trouble?",
      options: [
        "Because only the one small door had been forbidden to her",
        "Because the other rooms were all empty",
        "Because she had been given a second set of keys",
        "Because someone watched her the whole time"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: every door but one was allowed. Here it sharpens how single the forbidden branch was rather than testing it."
    },
    { type: "story", moral: "All the trouble of the tale waited behind one closed door. To read it is to hold the branch she must not open, and to feel how a single turn of a key cannot be taken back." }
  ]
};
export default story;
