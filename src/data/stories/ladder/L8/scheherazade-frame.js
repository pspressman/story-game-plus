// scheherazade-frame.js  L8, B5 a mind holding a mind. Target: reported_speech (single embedding, backshift). Gate: track what was said across the seam.
const story = {
  id: "scheherazade-frame",
  title: "Scheherazade and the Thousand Nights",
  icon: "🌃",
  difficulty: "Advanced",
  theme: "A story inside a story inside a night",
  estimatedTime: "5-10 min",
  description: "Scheherazade keeps herself alive by telling tales, and inside her tales the characters tell tales of their own. Track who is speaking, and when each thing was said.",
  meta: {
    level: 8,
    track: "gated",
    tier: "A",
    band: "B5",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech"],
    grammar_target: "reported_speech",
    culture: "Arabic",
    region: "North Africa and Arabia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "A king, betrayed long ago, had grown so bitter that he married a new bride each evening and had her put to death at dawn. Clever Scheherazade offered herself, and each night she told the king a tale so gripping that she stopped at its most exciting point as morning came. To hear the ending, the king let her live one more day, and then another, and another." },
    { type: "story", text: "In one of her tales, a merchant sat down to eat and tossed away a date stone. At once a towering genie appeared and said that the stone had struck and killed his own invisible son, and that the merchant must therefore die." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "The genie tells the merchant that the date stone had struck his son. Tracking the order of events across what the genie says: when did the striking happen, compared to the genie's speaking?",
      options: [
        "The striking happens after the genie speaks",
        "The striking happened first, before the genie appeared to speak of it",
        "The striking and the speaking happen at the same moment",
        "The striking never happened at all"
      ],
      correctAnswer: 1,
      explanation: "When the genie speaks of a blow that had already landed, the deed sits earlier than the telling. Tracking across the seam means placing the striking before the speaking, even though we only learn of it from the words spoken after."
    },
    { type: "story", text: "To save himself, the merchant begged for time, and other travelers gathered. Each old man offered to tell the genie a strange tale of his own, promising that if his story was wonderful enough, the genie would spare a portion of the merchant's blood. So now there were tales being told inside the tale that Scheherazade was telling the king." },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "An old man inside the merchant's tale begins his own story to the genie. Track the layers: whose voice is actually speaking aloud in the king's bedchamber?",
      options: [
        "The old man's, directly",
        "Scheherazade's, who is telling of the merchant, who is telling of the old man, all in her single voice to the king",
        "The genie's",
        "The king's"
      ],
      correctAnswer: 1,
      explanation: "Only one person is truly speaking in the room: Scheherazade. The merchant and the old man live inside her telling. Tracking the seams means knowing that every nested voice is still hers, carried across one frame after another."
    },
    {
      type: "question",
      domain: "report",
      band: "B5",
      grammar_cell: "reported_speech",
      gates: true,
      question: "Each old man promises the genie that he will spare the merchant if the tale proves wonderful. The merchant does not see his rescue happen yet; he only hears it offered. What is the rescue, at this point, resting on?",
      options: [
        "A deed already done and finished",
        "Words of a promise, which must still be made good by a tale that has not yet been judged",
        "The genie's son returning to life",
        "The king's mercy"
      ],
      correctAnswer: 1,
      explanation: "The merchant's life hangs on a spoken bargain, not a finished act. Tracking what was said means seeing that a promise is only a claim about the future until the telling earns it, and the danger holds until then."
    },
    { type: "story", text: "Night after night Scheherazade wove tales within tales, always breaking off at dawn. A thousand and one nights passed this way, until the king, his bitterness melted by her stories, set aside his cruel vow and kept her as his queen." },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "simple_present",
      gates: false,
      question: "Why does Scheherazade always stop her story at its most exciting point as morning comes?",
      options: [
        "So the king will keep her alive another day to hear how it ends",
        "Because she forgets the rest by morning",
        "Because the king orders her to stop",
        "Because the stories have no endings"
      ],
      correctAnswer: 0,
      explanation: "A reach back to reading hidden intent: the cliffhanger is her way of buying one more day. Here it frames the device rather than testing the tracking of what was said."
    },
    { type: "story", moral: "One voice in a dark room held a hundred others, each speaking inside the last. To follow her is to keep track of who speaks, and of when each thing was said and done." }
  ]
};
export default story;
