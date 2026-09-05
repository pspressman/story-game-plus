// egil-saga.js  L8, B5 a mind holding a mind. Target: reported_speech. Gate: track what was said across the seam.
const story = {
  id: "egil-saga",
  title: "Egil and the Head-Ransom",
  icon: "⚔️",
  difficulty: "Advanced",
  theme: "Words sworn, words that buy a life",
  estimatedTime: "5-10 min",
  description: "A warrior-poet falls into the hands of a king who has sworn to kill him. He learns of the death-oath only by report, and must answer it with words of his own.",
  meta: {
    level: 8,
    track: "gated",
    tier: "O",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Iceland",
    region: "Northern Europe",
    saga: null,
    source_epic: true,
    threads: [],
    edges: ["warrior_poet"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Egil Skallagrimsson was a fearsome warrior and a great maker of poems, but he had made a deadly enemy of King Eirik, called Bloodaxe. When a shipwreck cast Egil ashore in the very land where Eirik now ruled, he walked into the lion's den, and friends warned him of the danger he was in." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Egil's friend tells him that King Eirik had sworn to kill him on sight. By the time Egil hears this, when was the death-oath made?",
      options: [
        "It will only be sworn if Egil is captured",
        "It had already been sworn earlier, so Egil walks in knowing a vow against his life was made before he ever arrived",
        "It is being sworn at that very moment",
        "No oath was ever sworn"
      ],
      correctAnswer: 1,
      explanation: "The friend reports an oath already taken, so the swearing sits before Egil's arrival. Tracking across the seam means placing the vow in the past and seeing that Egil now acts knowing a death-sentence was spoken against him beforehand."
    },
    { type: "story", text: "Brought before the king, Egil could not fight his way out; the hall was full of Eirik's men. His one chance was not his sword but his tongue. Through the night, Egil composed a long and magnificent poem in praise of the very king who meant to kill him." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Egil's friend tells the king that Egil has made a great poem in his honor and asks that he be allowed to recite it. At the moment the friend says this, has the king yet heard the poem?",
      options: [
        "Yes, the king has already heard it",
        "No; the claim runs ahead of the deed, and the poem must still actually be recited before it can be judged",
        "The poem does not exist",
        "The king recited it himself"
      ],
      correctAnswer: 1,
      explanation: "The friend's words promise something not yet delivered. Tracking the seam means seeing that a claim about a poem is only a claim until the reciting happens, and Egil's life waits in that gap between the saying and the doing."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Egil recites his poem of praise to the king who has sworn to kill him. By saying aloud how great Eirik is, what is Egil really doing with his words?",
      options: [
        "Confessing to a crime",
        "Turning speech into a ransom for his own head, buying his life with praise rather than with a blade",
        "Surrendering his lands to the king",
        "Insulting the king to his face"
      ],
      correctAnswer: 1,
      explanation: "The poem is not idle flattery but a bargain made of words. Tracking what is said means seeing that Egil pays for his life with the only weapon left to him, a saying so fine the king cannot bring himself to break it with a killing."
    },
    { type: "story", text: "The poem was so masterful that Eirik, though he hated Egil, could not bring himself to put him to death after hearing it. He let Egil go free, and the poem was remembered ever after as the Head-Ransom, the song that bought back a life." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "How did Egil save his life before the hostile king?",
      options: [
        "By composing and reciting a great poem in the king's honor",
        "By fighting his way out of the hall",
        "By bribing the king with gold",
        "By escaping through a window in the night"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the poem is what spared him. Here it frames the ransom rather than testing the tracking of what was said."
    },
    { type: "story", moral: "A death-oath reached him as a report, and he answered it with a poem. To read it is to track words sworn and words spoken, and to see how a saying can take or save a life." }
  ]
};
export default story;
