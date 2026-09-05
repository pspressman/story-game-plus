// aladdin-magician.js  L5, B5 infer the hidden state. Target: epistemic_modal.
const story = {
  id: "aladdin-magician",
  title: "Aladdin and the False Uncle",
  icon: "🪔",
  difficulty: "Medium",
  theme: "Reading the stranger's true purpose",
  estimatedTime: "5-10 min",
  description: "A weeping stranger arrives claiming to be Aladdin's long-lost uncle. He is generous, kind, and only wants one small thing. Reason out what he really is.",
  meta: {
    level: 5,
    track: "gated",
    tier: "R",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "Arabic",
    region: "North Africa and Arabia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A stranger came to the city in fine robes, found young Aladdin in the street, and wept with joy. \"My boy! I am your father's long-lost brother, your own uncle, home at last!\" He gave Aladdin's mother gold for the household and promised to set the boy up in business. Aladdin's father had died years before and had never once mentioned a brother." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The uncle is generous and kind, but Aladdin's father never spoke of any brother, and now the man wants Aladdin to climb alone into a dark cave and fetch one old lamp. What should Aladdin suspect?",
      options: [
        "That the uncle must be telling the truth, since he gave them gold",
        "That the man might well not be his uncle at all, and is using kindness to get Aladdin to fetch something he wants for himself",
        "That the lamp must be worthless, or the uncle would fetch it himself",
        "That his father must simply have forgotten to mention a brother"
      ],
      correctAnswer: 1,
      explanation: "Weigh the clues: an unmentioned brother, sudden generosity, and a stranger who will not enter the cave himself but sends a boy for one particular lamp. Together these point past the kind uncle to a man with a hidden purpose of his own."
    },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The man could enter the cave himself, yet he insists only Aladdin go in and bring out the lamp. What can we reason from his refusal to go in?",
      options: [
        "He must be too old to climb down",
        "Something about the cave or the lamp must be a danger or a barrier to him, so he needs someone else to take the risk and do the reaching",
        "He must simply be lazy",
        "He must want Aladdin to enjoy the adventure"
      ],
      correctAnswer: 1,
      explanation: "A man who badly wants a thing but will not fetch it himself is telling you something. The likeliest read is that the cave or the lamp blocks him, so he sends a boy to bear the danger and hand him the prize."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Why did the stranger give Aladdin's mother gold and fine words?",
      options: [
        "To win their trust so Aladdin would do as he asked",
        "Because he was truly a rich and generous uncle",
        "Because he had too much gold to carry",
        "Because Aladdin's mother had asked him for money"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the gifts buy trust toward the favor he means to ask. Here it sets up the trick rather than testing the inference."
    },
    { type: "story", text: "And so it proved. The man was no uncle but a sorcerer who needed a stranger's hand to lift the lamp from the enchanted cave. Aladdin, who had begun to wonder at it all, kept his wits, and in the end the lamp became his and not the sorcerer's." },
    { type: "story", moral: "Kindness with a hidden price is worth reading twice. What a stranger will not do himself, but begs of you, tells you much about what he is really after." }
  ]
};
export default story;
