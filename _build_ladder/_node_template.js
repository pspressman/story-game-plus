// _node_template.js
// Annotated template for story-ladder nodes. Copy the shape, not this file.
// Two variants below: a GATED node and a WIDE_SKY node.
// The existing player walks content[]. The meta block is additive and ignored by the current renderer.
// correctAnswer is 0-indexed. Keep that.

// ----------------------------------------------------------------------------
// VARIANT A: GATED NODE (levels 0..10)
// ----------------------------------------------------------------------------
const gatedExample = {
  id: "kebab-case-id",
  title: "Human Title",
  icon: "📖",
  difficulty: "Beginner",      // DERIVED from level. L0-1 Beginner, L2-3 Easy, L4-5 Medium, L6-7 Hard, L8-9 Advanced, L10 Master
  theme: "One short theme line",
  estimatedTime: "5-10 min",
  description: "One or two sentences. Invite the reader to picture, do not summarize the lesson.",

  meta: {
    level: 0,
    track: "gated",
    tier: "R",                 // R basic, A advanced, O complex
    band: "B0",                // B0..B8, the node's primary relational band
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative"],
    grammar_target: "locative",
    culture: "Culture",
    region: "Region Bucket",
    saga: null,                // or a slug like "arthur"
    source_epic: false,        // true if this is a fragment of a larger epic
    threads: [],               // ["shakespeare"] or [{ type:"history", inaccuracy_flag:true }]
    edges: [],                 // ["trickster_many_faces"] etc.
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    { type: "story", text: "Prose beat. Plain, concrete, picturable." },

    {
      type: "question",
      domain: "where",         // display category
      band: "B0",              // relational band exercised
      grammar_cell: "locative",// grammatical form the options turn on
      gates: true,             // true iff it exercises grammar_target above
      question: "A picturing question. Answerable only by a reader who built the scene.",
      options: [
        "Plausible but wrong",
        "Correct, requires the inference",
        "Plausible but wrong",
        "Plausible but wrong"
      ],
      correctAnswer: 1,
      explanation: "Why the pictured scene yields this answer. Never names the device."
    },

    // A cumulative question may reach back to an easier move; mark gates:false.
    // {
    //   type: "question", domain:"number", band:"B0", grammar_cell:"simple_past",
    //   gates: false, question:"...", options:[...4...], correctAnswer:0, explanation:"..."
    // },

    { type: "story", text: "More prose. The reveal can use richer grammar in narration; only QUESTIONS are construct-bound." },
    { type: "story", moral: "A short, earned line. Not a restatement of the question." }
  ]
};

// DISQUALIFIED ITEM (do not write items like this):
// {
//   type:"question", question:"What is the past tense of 'drink'?", ...
// }
// This names the device and tests vocabulary, not the inference. It never counts.

// ----------------------------------------------------------------------------
// VARIANT B: WIDE_SKY NODE (encounter-only, untestable)
// ----------------------------------------------------------------------------
const wideSkyExample = {
  id: "kebab-case-id",
  title: "Human Title",
  icon: "🌌",
  difficulty: "Story",
  theme: "What whole does this story hold",
  estimatedTime: "5-10 min",
  description: "Invite the reader in. This story is met and pictured, never scored.",

  meta: {
    level: null,
    track: "wide_sky",
    tier: null,
    band: null,
    grammar_online: [],
    grammar_target: null,
    culture: "Culture",
    region: "Region Bucket",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: "Note on care. Present whole, do not reduce to a plot or a question.",
    untestable: true,
    visualize_prompt: "An engage-not-score prompt the future engine will surface. Picture, do not answer."
  },

  // Wide_sky content is prose only. NO type:"question" blocks.
  // The single exception across the whole Wide Sky set is Tiddalik, which may carry
  // visualization questions, all with gates:false. Every other Wide Sky node has none.
  content: [
    { type: "story", text: "Prose beat. Weave a gentle 'picture this' into the words themselves." },
    { type: "story", text: "More prose." },
    { type: "story", moral: "A closing line that opens out, not one that tests." }
  ]
};

export { gatedExample, wideSkyExample };
