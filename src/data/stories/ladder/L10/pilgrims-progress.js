// pilgrims-progress.js  L10 summit. B8, the inner life as a road. Open Field allegory-engine.
const story = {
  id: "pilgrims-progress",
  title: "Christian's Road to the Celestial City",
  icon: "🏔️",
  difficulty: "Master",
  theme: "A journey where every place is a state of the soul",
  estimatedTime: "5-10 min",
  description: "A man named Christian sets out for a far city, and the swamps, hills, and fairs he crosses each carry the name of an inner state. Read a road that is really the journey of a soul.",
  meta: {
    level: 10,
    track: "gated",
    tier: "A",
    band: "B8",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "stacked",
    culture: "England",
    region: "British Isles",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A man named Christian set out from his home, which was called the City of Destruction, to reach a far and shining place called the Celestial City. Along the road he passed through strange country: a swamp called the Slough of Despond, a steep climb called the Hill Difficulty, a loud market called Vanity Fair, and a dark pass called the Valley of the Shadow." },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Christian wades, almost sinking, through the Slough of Despond, a swamp of discouragement. What is the swamp really, beneath the mud?",
      options: [
        "An ordinary marsh on the way",
        "His own despair, turned into a place he must struggle across, an inner state made into a country",
        "A river he could have sailed around",
        "A trap set by robbers"
      ],
      correctAnswer: 1,
      explanation: "Read the name and you read the meaning. The Slough of Despond is despair itself, given mud and water so the reader can watch Christian struggle through it. In this road, the inner state has become the landscape."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "future_perfect_progressive",
      gates: true,
      question: "From the swamp to the hill to the dark valley and beyond, Christian presses on toward the city. By the time he arrives, what will he have been walking through the whole journey?",
      options: [
        "A set of unrelated places with no meaning",
        "His own doubts, fears, and temptations, each one turned into a place on the road, so the whole trip will have been the journey of his soul made into a map",
        "A single short street near his home",
        "A country he invented to pass the time"
      ],
      correctAnswer: 1,
      explanation: "The future-perfect gathers the whole road: by the city, he will have been crossing his own inner life the entire way, every despair and temptation walked through as a place. The outer journey has been the soul's journey all along."
    },
    {
      type: "question",
      domain: "allegory",
      band: "B8",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Why give the man the plain name Christian and the places names like Vanity Fair and the Hill Difficulty?",
      options: [
        "Because the writer could not think of better names",
        "So the journey of a soul can be read straight off the map, each name telling you the inner thing that place stands for",
        "Because they are real towns in England",
        "To make the story harder to follow"
      ],
      correctAnswer: 1,
      explanation: "The names are the key that has been handed to the reader. Calling the man Christian and the swamp Despond turns the whole road into a readable diagram of an inner life, where every place announces the state of soul it stands for."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "simple_present",
      gates: false,
      question: "Where is Christian trying to reach at the end of his road?",
      options: [
        "The Celestial City",
        "The City of Destruction he started from",
        "Vanity Fair",
        "The Hill Difficulty"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of the goal: he journeys toward the Celestial City. Here it names the destination rather than testing the allegory."
    },
    { type: "story", moral: "Christian's road was his own soul laid out as country, every swamp and hill an inner state with a name. At the summit, a whole journey can be a map of a life lived from the inside." }
  ]
};
export default story;
