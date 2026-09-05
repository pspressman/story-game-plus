// sigurd-cursed-gold.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
const story = {
  id: "sigurd-cursed-gold",
  title: "Sigurd and the Cursed Gold",
  icon: "🐉",
  difficulty: "Easy",
  theme: "The weight a prize can carry",
  estimatedTime: "5-10 min",
  description: "Sigurd slays a dragon and takes its hoard. Stand on the dragon's side, and then on Sigurd's, as the curse does its quiet work.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
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
    { type: "story", text: "The smith Regin raised Sigurd and told him of a dragon, Fafnir, who lay coiled on a heath guarding a mountain of gold. \"Kill him,\" said Regin, \"and the hoard is ours.\" Sigurd reforged the broken sword of his father, dug a pit in the dragon's path, and waited in the dark." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "As Fafnir crawls over the pit, Sigurd drives the sword up into his heart. Stand where the dragon stands in his last moment. What is happening to him?",
      options: [
        "He is handing his treasure to a worthy warrior at last",
        "He is being struck down from below by a stranger he has never met",
        "He is teaching Sigurd a hard lesson about greed",
        "He is winning the fight and driving Sigurd off"
      ],
      correctAnswer: 1,
      explanation: "From the dragon's side this is not something he does but something done to him: a blow from below, by someone whose name he does not even know until he asks. Standing on the receiving end is the shift."
    },
    { type: "story", text: "Dying, Fafnir warned that the gold was cursed, that whoever kept it would be destroyed by it. Then Regin asked Sigurd to roast the dragon's heart. A drop of its blood touched Sigurd's tongue, and at once he understood the speech of two birds in the tree above, who said: Regin means to kill you and take the gold himself." },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Sigurd hears from the birds what the man who raised him is planning. How does he most likely feel in that moment?",
      options: [
        "Proud that he can now understand birds",
        "Betrayed by the one person he had trusted to guide him",
        "Hungry, and eager to taste more of the heart",
        "Certain the birds must be lying to him"
      ],
      correctAnswer: 1,
      explanation: "The hurt lands because of who Regin is to him. To be plotted against by the man who raised you is a wound felt from the inside; pride or appetite would miss the whole weight of the moment."
    },
    { type: "story", text: "Sigurd struck first, and rode away with the cursed gold loaded on his horse. He became a king and married a queen, and for a while all seemed well." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Sigurd rides off pleased with his fortune. What has been done to him that he cannot see?",
      options: [
        "A curse has been laid on him through the gold he carries",
        "The birds have stolen part of his treasure",
        "His horse has been poisoned by the dragon's blood",
        "Regin's family has quietly forgiven him"
      ],
      correctAnswer: 0,
      explanation: "The danger is something worked upon him without his knowing, riding along in the gold itself. He feels like the winner while the curse has already taken hold of his fate."
    },
    { type: "story", text: "In time, jealousy and treachery came into Sigurd's own hall, and he was killed by those closest to him, exactly as the dragon had said. The gold passed on, and the sorrow with it." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did Sigurd kill Regin before taking the gold?",
      options: [
        "The birds told him Regin planned to kill him first",
        "Regin refused to let him near the hoard",
        "Regin had turned himself into a second dragon",
        "Sigurd wanted to drink the rest of the blood"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause from earlier in the tale: the birds' warning is what moved Sigurd to strike. Here it sets up the curse that follows, rather than testing the vantage."
    },
    { type: "story", moral: "The cruel blow was felt by the dragon, the betrayal by Sigurd, the curse by everyone the gold touched. Some prizes are carried, and some carry you." }
  ]
};
export default story;
