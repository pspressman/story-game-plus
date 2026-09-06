// hero-twins-underworld.js  L5, B5 infer the hidden state. Target: epistemic_modal.
// Rewritten: prior Q1 stated the trap inside its own stem and its correct option
// described the macaw-feather solution one block before the story revealed it.
const story = {
  id: "hero-twins-underworld",
  title: "The Hero Twins in the House of Trials",
  icon: "🔥",
  difficulty: "Medium",
  theme: "Reading the trap before it springs",
  estimatedTime: "5-10 min",
  description: "The lords of the underworld hand the twins a torch and a command. Work out what the command is actually asking for before the twins do.",
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
    {
      type: "story",
      text: "The lords of Xibalba, the underworld, had called the twins Hunahpu and Xbalanque down to their country, and had a row of houses waiting for them, each one meant to finish them. On the first night the twins were put into the Dark House. A guard handed them one pine torch and two cigars. \"Keep all three burning until morning,\" he said. \"Bring them back to us at dawn whole and unburned, exactly as you were given them.\" Then the door was shut."
    },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Picture the torch at dawn if the twins simply obey and keep it lit all night. What is in their hands?",
      options: [
        "A whole torch, since one night is not long enough to burn it down",
        "A stub and some ash, because that is what a torch that has burned all night is",
        "A torch that has gone out but is otherwise unharmed",
        "A torch the guards will have replaced during the night"
      ],
      correctAnswer: 1,
      explanation: "Follow the fire through the hours. Burning is a thing that eats what it stands on. Picture the morning honestly and the two halves of the order cannot both be true at once, which is what the lords are counting on."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The lords are not in the Dark House. Picture how they will find out whether the order was obeyed. What are they actually going to check?",
      options: [
        "The heat of the torch when it is handed back",
        "What the guards saw glowing in the dark, and what the torch looks like in the morning",
        "Whether the twins admit to what they did",
        "How much smoke came out under the door"
      ],
      correctAnswer: 1,
      explanation: "Nobody watches the burning itself. There are eyes on the dark, and there are hands on the torch at dawn. Everything the lords will ever know about that night reaches them through those two things, which is a narrower gap than the order sounds."
    },
    {
      type: "story",
      text: "The twins sat in the dark and did not light anything. They found the red tail-feathers of a macaw and bound them to the tip of the torch, and in the black of the house the red showed like a flame. They caught fireflies and set one on the end of each cigar, so that each ended in a small hot point of light. All night the guards looked in and saw three fires burning."
    },
    {
      type: "question",
      domain: "inference",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "Picture a guard at the door at midnight, looking in at the three points of light. What could he tell from where he stands?",
      options: [
        "Nothing except that something is glowing in the dark",
        "That the torch is real fire, because he can see it clearly",
        "That the twins have tricked him, since feathers look nothing like flame",
        "How much of the torch has burned away so far"
      ],
      correctAnswer: 0,
      explanation: "From the doorway a glow is a glow. Whether it is eating the torch away is not something the eye reports at that distance in that dark, and the trick works in exactly the space between what he sees and what he assumes it means."
    },
    {
      type: "story",
      text: "At dawn the twins came out and handed back a torch and two cigars, whole, unmarked, still glowing. The lords looked at them and could not say the order had been broken. They let the twins go on to the next house."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B5",
      grammar_cell: "epistemic_modal",
      gates: false,
      question: "The lords hold an unburned torch that glowed all night. Picture what they would have to admit to themselves to see the trick. What is it?",
      options: [
        "That their guards fell asleep at the door",
        "That the order they set could not be obeyed, so anything that appears to obey it must be a fake",
        "That the twins are stronger than they had thought",
        "That the Dark House does not work properly"
      ],
      correctAnswer: 1,
      explanation: "The evidence is right there in their hands. What stops them reading it is that reading it means starting from the fact that they set an impossible task on purpose, and going on from there to what a passing mark would really have to mean."
    },
    {
      type: "story",
      text: "Again and again in Xibalba the twins were handed something that could not be done, and each time they worked out what was truly being checked, and gave the lords that instead. In the end they overcame the lords themselves."
    },
    { type: "story", moral: "When a test cannot be passed, work out what it really checks. The twins saw that the lords would judge by the look of the fire, and gave them a look." }
  ]
};
export default story;
