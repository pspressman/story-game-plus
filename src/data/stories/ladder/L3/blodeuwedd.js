// blodeuwedd.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
const story = {
  id: "blodeuwedd",
  title: "Blodeuwedd, the Woman Made of Flowers",
  icon: "🌼",
  difficulty: "Easy",
  theme: "A life chosen for you by other hands",
  estimatedTime: "5-10 min",
  description: "Two magicians make a wife out of flowers for a man under a curse. Stand on her side, the one who was made and given no say.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Wales",
    region: "British Isles",
    saga: "mabinogion",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Lleu was under a strange curse: he could never have a wife born of any human family. So the magicians Math and Gwydion took the flowers of the oak, the broom, and the meadowsweet, and out of them they made a woman. They named her Blodeuwedd, which means flower-face, and they gave her to Lleu to marry." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand on Blodeuwedd's side at the moment she first opens her eyes. What is true of her?",
      options: [
        "She has chosen Lleu freely from among many suitors",
        "She has been made by others for a purpose, given no say in the life set before her",
        "She has grown up slowly like any child and come of age",
        "She has been asked whether she wishes to marry at all"
      ],
      correctAnswer: 1,
      explanation: "From where she stands, her very existence is something done to her: shaped by other hands, named by them, handed to a husband she did not choose. That is the vantage the whole story turns on."
    },
    { type: "story", text: "For a time Blodeuwedd lived as Lleu's wife. But she had never chosen him, and when another man, Gronw, passed through the land, she came to love him instead, and the two of them plotted against Lleu." },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Blodeuwedd was made to be a wife and was never asked what she wanted. How does that most likely sit with her as the years pass?",
      options: [
        "She feels grateful to have been given any life at all",
        "She feels the ache of a life fitted to her without her say, and reaches for one she chooses herself",
        "She feels nothing, since flowers cannot truly feel",
        "She feels proud to have been chosen by such great magicians"
      ],
      correctAnswer: 1,
      explanation: "Read it from inside her: a life arranged for her by others is a life she did not pick, and that unchosen quality is what turns her toward a love that is her own, for better or worse."
    },
    { type: "story", text: "The plot failed. Lleu survived, and Gwydion came for Blodeuwedd. As punishment he did not kill her, but worked one last change upon her: he turned her into an owl, to live forever in the dark and be shunned by all other birds." },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "At the end, picture what is done to Blodeuwedd. What happens to her?",
      options: [
        "She is set free to return to the flowers she was made from",
        "She is changed into an owl and made to keep to the night, away from every other bird",
        "She is allowed to choose her own punishment",
        "She is turned back into the magicians' helper"
      ],
      correctAnswer: 1,
      explanation: "As at her making, so at her ending: a shape is forced upon her by another's hand. She is changed, not changing, and made to live apart. The vantage stays with the one things are done to."
    },
    { type: "story", text: "And so the woman of flowers became the owl, and to this day the owl keeps to the dark and is met with unease by the birds of the day." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had the magicians made Blodeuwedd in the first place?",
      options: [
        "Because Lleu had been cursed never to marry a human woman",
        "Because they wished to give the flowers a voice",
        "Because Lleu had asked them for a helper, not a wife",
        "Because an owl had begged them to take human form"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause from the start of the tale: the curse on Lleu is the reason she was made at all. Here it frames her making rather than testing the vantage."
    },
    { type: "story", moral: "She was made, and married, and changed, all by other hands. The story asks you to stand for a while where she stood, and feel a life she was never asked to want." }
  ]
};
export default story;
