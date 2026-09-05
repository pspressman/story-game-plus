// hero-twins-underworld.js  L5, B5 infer the hidden state. Target: epistemic_modal.
const story = {
  id: "hero-twins-underworld",
  title: "The Hero Twins in the House of Trials",
  icon: "🔥",
  difficulty: "Medium",
  theme: "Reading the trap before it springs",
  estimatedTime: "5-10 min",
  description: "The lords of the underworld set the twins a test that cannot be passed honestly. The twins must reason out the only way through. So must you.",
  meta: {
    level: 5,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal"],
    grammar_target: "epistemic_modal",
    culture: "Maya",
    region: "Mesoamerica",
    saga: "popol_vuh",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: "K'iche' Maya (Popol Vuh) - credit specifically, not 'Mayan'. Openly shared. Underworld trials gentled for children (editorial, not a consent matter).",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "The twins Hunahpu and Xbalanque were called down to Xibalba, the underworld, where the lords meant to destroy them through a series of deadly houses. That night they were sent into the Dark House and handed a single torch and two cigars, with a command: keep them burning all night, but return them in the morning whole and unburned, exactly as given." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "A torch cannot burn all night and also be returned unburned; the command is a trap with no honest answer. What must the twins realize they have to do?",
      options: [
        "They must let the torch burn and accept the punishment",
        "They must make the torch only appear to burn, so it seems lit through the night yet is never truly consumed",
        "They must refuse to light the torch at all",
        "They must burn the torch quickly and hide the ashes"
      ],
      correctAnswer: 1,
      explanation: "The test cannot be met as stated, so the only path is to satisfy the appearance and not the substance: make it look lit while keeping it whole. Reading the trap means seeing that what the lords will check is how it looks, not what truly happened."
    },
    { type: "story", text: "So the twins fixed the red tail-feathers of a macaw to the tip of the torch, so it glowed red as if aflame, and they set fireflies on the ends of the cigars, so they shone like burning coals in the dark. All night the lords' guards saw fire that never ate anything away." },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "In the morning the lords see the torch glowing yet whole, and conclude the twins obeyed. What did the lords fail to reason out?",
      options: [
        "That the twins must be very strong",
        "That a fire which glows yet never consumes is no true fire, so the twins must have faked the burning rather than performed the impossible",
        "That the torch must have been magic from the start",
        "That the guards must have lit a second torch"
      ],
      correctAnswer: 1,
      explanation: "The lords read the glow as proof and stopped there. The sounder inference, which they miss, is that a flame eating nothing cannot be real flame, so the unburned torch reveals a clever fake, not an impossible feat performed."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had the lords of Xibalba given the twins the torch and cigars at all?",
      options: [
        "As one of a series of deadly tests meant to destroy them",
        "As a gift to welcome them kindly",
        "Because the twins had asked for light",
        "To help the twins find their way out"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the torch is one trap among many meant to ruin them. Here it frames the test rather than testing the inference."
    },
    { type: "story", text: "The twins handed back the torch and cigars whole and glowing, and the lords, baffled, had to let them pass to the next trial. Again and again the twins read the underworld's traps and turned them, until at last they overcame the lords themselves." },
    { type: "story", moral: "When a test cannot be passed, read what it truly checks. The twins saw that the lords would judge by the look of the fire, and gave them a look that hid the truth." }
  ]
};
export default story;
