// example_L0_thor-utgard.js
// WORKED EXEMPLAR. L0, B0 percept. Grammar target: locative (with simple tense, concrete noun).
// Gate: picture the scene in front of you. Every question is answerable from story text
// that PRECEDES it. The horn-to-sea reveal is the king's confession, never a quiz answer.
const thorUtgard = {
  id: "thor-utgard",
  title: "Thor at Utgard",
  icon: "⚡",
  difficulty: "Beginner",
  theme: "A thing is not its size",
  estimatedTime: "5-10 min",
  description: "A giant hands Thor a plain drinking horn and dares him to empty it. Watch what happens each time he drinks, and you will know something is wrong before Thor does.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",
    band: "B0",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Norse",
    region: "Northern Europe",
    saga: "norse_eddas",
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
      text: "Thor and his companions came to the hall of the giants at Utgard. The hall was so wide that the far wall was lost in shadow. The giant king sat on a high seat at one end, and Thor stood before him on the stone floor, no taller than the king's knee."
    },
    {
      type: "question",
      domain: "where",
      band: "B0",
      grammar_cell: "locative",
      gates: true,
      question: "Picture the hall as Thor stands in it. Where is the giant king, compared to Thor?",
      options: [
        "Beside him on the stone floor",
        "Above him, on a high seat at the end of the hall",
        "Behind him, blocking the door",
        "Outside the hall entirely"
      ],
      correctAnswer: 1,
      explanation: "The king sits on a high seat at one end of the hall, and Thor stands below on the floor, no taller than the king's knee. Picturing that puts the king above him and some distance off."
    },
    {
      type: "story",
      text: "\"A small test,\" said the king. \"Empty this horn in one draught. My youngest empty it in three.\" A servant carried in a drinking horn and set the wide mouth of it down on the table before Thor. The narrow end trailed away behind the servant, out of the torchlight, and Thor did not trouble to follow it with his eyes."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_present",
      gates: false,
      question: "The king says his youngest giants can empty the horn. How many draughts does he say it takes them?",
      options: [
        "One",
        "Three",
        "Seven",
        "He does not say"
      ],
      correctAnswer: 1,
      explanation: "The king says his youngest empty it in three. He is asking Thor to do it in one, which is why the challenge sounds small and insulting at the same time."
    },
    {
      type: "story",
      text: "Thor set his mouth to the horn and drank a great, long draught until his breath gave out. Certain he had nearly emptied it, he lowered the horn and looked inside. The drink had gone down by less than the width of one finger."
    },
    {
      type: "question",
      domain: "what",
      band: "B0",
      grammar_cell: "simple_past",
      gates: true,
      question: "Thor drank as long as his breath would last. Picture the level of drink inside the horn when he looks in. What has it done?",
      options: [
        "The horn has emptied completely",
        "It has fallen by about half",
        "It has sunk by less than a finger's width",
        "It has risen higher than before"
      ],
      correctAnswer: 2,
      explanation: "The story says it went down by less than the width of one finger. His mightiest pull moved it almost not at all."
    },
    {
      type: "story",
      text: "Twice more Thor drank, and each time he drank until he could not draw another breath. Each time he looked in, and each time the level had barely stirred. Three great draughts, and the horn was nearly as full as when the servant set it down."
    },
    {
      type: "question",
      domain: "inference",
      band: "B0",
      grammar_cell: "simple_past",
      gates: true,
      question: "Three enormous draughts, and the level has hardly moved. What must be true of this horn?",
      options: [
        "Thor is drinking far less than he thinks he is",
        "The horn holds far more than its mouth makes it look",
        "The servant keeps refilling it when no one is watching",
        "The drink inside is too thick to swallow"
      ],
      correctAnswer: 1,
      explanation: "Nothing in the hall suggests Thor is drinking weakly, or that anyone refilled it. What the evidence points to is the horn itself: whatever it holds is far bigger than the small mouth on the table suggests.",
      hint: "You cannot see the narrow end of the horn. Think about what could be down there."
    },
    {
      type: "story",
      text: "Only later did the giant king confess. The narrow end of that horn had been set into the ocean itself, and Thor, without knowing it, had been drinking down the sea. Three draughts had lowered every ocean in the world by the width of a finger, and the giants were afraid of him ever after."
    },
    {
      type: "question",
      domain: "mood",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "The king admits the horn reached the sea, and that Thor lowered the whole ocean. How do the giants feel about Thor after that?",
      options: [
        "They laugh at him for failing the test",
        "They are frightened of how strong he turned out to be",
        "They forget about him at once",
        "They are angry that he spilled their drink"
      ],
      correctAnswer: 1,
      explanation: "The story says the giants were afraid of him ever after. He looked like he had failed, but what he had actually done was drink down part of the sea."
    },
    {
      type: "story",
      moral: "A plain horn held the whole sea. Look again at a small thing before you trust its size."
    }
  ]
};

export default thorUtgard;
