// tale-of-heike.js  L7, B4 the unreal past. Target: conditional. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "tale-of-heike",
  title: "The Tale of the Heike",
  icon: "🌸",
  difficulty: "Hard",
  theme: "The proud who did not endure",
  estimatedTime: "5-10 min",
  description: "A mighty clan rises to rule all and falls to nothing. Rebuild the branch where pride did not undo them, and feel the weight of all that passed away.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Japan",
    region: "East Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The Heike clan rose to the very height of power, ruling the land and filling the court with their own. But in their pride they scorned and wronged everyone around them, certain their glory would never end. The old tellers begin the tale with a warning: the proud do not endure, but fade like a dream on a spring night." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "The Heike, at the peak of their power, made enemies of nearly everyone through their arrogance. If they had held that power with humility instead, what might have followed?",
      options: [
        "Nothing; their fall was fixed from birth",
        "They might not have turned the whole land against them, and their house might have endured far longer",
        "They would have lost their power even faster",
        "Their rivals would have grown proud in their place at once"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch pride closed: a Heike clan that ruled gently would not have raised every hand against itself, and might have lasted. The tale grieves not a doom from the heavens but a fall the proud brought on themselves."
    },
    { type: "story", text: "The rival Minamoto rose against them, and the Heike were driven back and back, from the capital to the coast, until at last they were cornered at sea in the great battle of Dan-no-ura. There, with the fight lost, the women of the clan and the young child-emperor were taken down beneath the waves rather than be captured." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "At Dan-no-ura the Heike are destroyed, and a grandmother takes the little emperor into the sea. Price the fall: because the clan had made itself so hated, what is lost in that final battle beyond any winning back?",
      options: [
        "Only a single battle, soon forgotten",
        "The whole house, its children and its glory, gone under the waves where no victory could ever restore them",
        "A small piece of land near the coast",
        "Nothing of any lasting weight"
      ],
      correctAnswer: 1,
      explanation: "Pricing the branch means feeling the size of what ends here: not a setback but the extinction of a great house, down to its child-emperor. The arrogance of years is paid for all at once in the sea."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "The bards now sing the Heike as a lesson on the fading of all glory. Holding the lost branch, if the clan had never let pride rule them, what would their name carry today?",
      options: [
        "Exactly the same sorrow it carries now",
        "Honor rather than a warning, remembered for how they ruled instead of how they fell",
        "Nothing; no one would remember them",
        "Greater power than ever before"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch reaches from their long-ago pride to their name in the present: humbler Heike would be remembered with respect, not held up as the very emblem of glory that does not last. The reader weighs the memory they made against the one they might have left."
    },
    { type: "story", text: "And so the Heike passed from the height of the world to the bottom of the sea, and their tale became the song of how the mighty fall, sung ever after as a warning to the proud." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "What warning do the tellers give at the very opening of the tale?",
      options: [
        "That the proud do not endure, but fade like a dream on a spring night",
        "That the sea is dangerous in spring",
        "That children should not rule",
        "That the Minamoto were invincible"
      ],
      correctAnswer: 0,
      explanation: "A plain recall of the opening line: the proud do not last. Here it frames the whole fall rather than testing the branch."
    },
    { type: "story", moral: "They ruled as if glory were forever, and lost it all in an afternoon at sea. To read the tale is to hold the house that humility might have spared, and to feel how completely pride let it pass away." }
  ]
};
export default story;
