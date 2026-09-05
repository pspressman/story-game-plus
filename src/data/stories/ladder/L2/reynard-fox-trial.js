// reynard-fox-trial.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Gate: read the trick. Each accusation becomes Reynard's weapon.
const reynardFoxTrial = {
  id: "reynard-fox-trial",
  title: "Reynard the Fox on Trial",
  icon: "🦊",
  difficulty: "Easy",
  theme: "The courtroom turned upside-down",
  estimatedTime: "5-10 min",
  description: "Reynard stands accused before King Lion's court. One by one the animals come forward with charges, and one by one Reynard twists each complaint into a trap for the accuser.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "France",
    region: "Western Europe",
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
      text: "King Lion sat in judgment and all the animals gathered. Isengrim the Wolf stepped forward, fur bristling. \"Reynard stole three hens from my yard last winter!\" The fox only smiled. \"Your Majesty, by keeping hens so poorly fenced, wasn't the Wolf himself inviting every hungry creature in the forest to help themselves? I thought it a gift.\""
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "When Reynard answers the Wolf's accusation by pointing to the poor fence, what is he really trying to do?",
      options: [
        "To admit his theft and apologize sincerely",
        "To shift the blame onto the Wolf for bad fencing and escape punishment",
        "To offer to repair the fence as payment",
        "To prove he never took any hens at all"
      ],
      correctAnswer: 1,
      explanation: "Reading the trick means seeing past the surface logic about fences to Reynard's hidden move: turning the accuser into the accused, making the Wolf's carelessness the crime instead of his own theft."
    },
    {
      type: "story",
      text: "The court murmured. Bruin the Bear lumbered forward next. \"Reynard promised to lead me to a tree full of honey, then trapped me in a split log!\" Reynard bowed low. \"I only meant to help the Bear learn caution before reaching into dark places. Surely saving him from future bee stings is a kindness?\""
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "The Bear hears Reynard call the trap a lesson meant to teach caution. What is the Bear most likely thinking?",
      options: [
        "That Reynard truly was trying to protect him from bees",
        "That Reynard is lying, having planned the trap to hurt him from the start",
        "That he should thank Reynard for the warning",
        "That he misunderstood what happened in the log"
      ],
      correctAnswer: 1,
      explanation: "The Bear knows his own experience. A second mind reading Reynard's words sees the inversion at once: kindness claimed over cruelty delivered, and no true teacher traps the student first."
    },
    {
      type: "question",
      domain: "number",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Count the animals who have stepped forward to accuse Reynard so far in this trial.",
      options: [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      correctAnswer: 1,
      explanation: "Wolf and Bear have spoken. Simple counting from earlier practice; here it tracks the mounting accusations before Reynard's final escape."
    },
    {
      type: "story",
      text: "Chanticleer the Rooster flew up, feathers flashing. \"He ate my sister!\" But before Reynard could answer, King Lion raised one paw. \"Enough. Fox, you twist every charge into your accuser's shame. I see the trick now.\" He paused, then sighed. \"But I cannot punish a tongue that breaks no law of the court. Go, and let the animals guard themselves.\" Reynard bowed and slipped away, grinning, as the court stood silent."
    },
    {
      type: "story",
      moral: "The courtroom became a stage, each accuser made the fool. A tongue quick enough turns every truth inside-out."
    }
  ]
};

export default reynardFoxTrial;