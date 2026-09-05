// kathasaritsagara.js  L9, B6 recursion. Target: nested_reported_speech. Gate: a mind reporting a mind reporting a mind.
const story = {
  id: "kathasaritsagara",
  title: "The Ocean of the Streams of Story",
  icon: "🌊",
  difficulty: "Advanced",
  theme: "A sea made of tales within tales",
  estimatedTime: "5-10 min",
  description: "A great sea of stories began as words overheard and passed from teller to teller until they reached the world. Track how many mouths a single tale travels through.",
  meta: {
    level: 9,
    track: "gated",
    tier: "A",
    band: "B6",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional", "reported_speech", "nested_reported_speech"],
    grammar_target: "nested_reported_speech",
    culture: "India",
    region: "South Asia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "There is a vast collection of Indian tales so large it is called the Ocean of the Streams of Story. The old frame tells how it began: long ago the god Shiva told a wonderful set of stories privately to the goddess Parvati. An attendant hidden nearby overheard them, and later repeated them to his own wife, and from her they slipped out into the world of people, where they have been told ever since." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "By the time an ordinary storyteller in a village repeats one of these tales, how many tellers have carried it from the start?",
      options: [
        "None; the villager made it up",
        "A whole chain: Shiva told Parvati, the hidden attendant overheard and told his wife, and from her it passed on and on to the villager",
        "Only one, Shiva",
        "Exactly two, Shiva and Parvati"
      ],
      correctAnswer: 1,
      explanation: "The Ocean is built from passing-on. Track the chain: a god's private telling, overheard, repeated to a wife, spread to the world. Every tale in it arrives through many mouths, each teller wrapped around the one before."
    },
    { type: "story", text: "And the stories nest inside one another too. In one tale, a king is troubled, and his wise minister, to guide him, tells him a story. Inside the minister's story, a clever parrot recounts what it once heard a merchant say to his sons. So the king sits listening to a minister, who voices a parrot, who passes on a merchant's words." },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "nested_reported_speech",
      gates: true,
      question: "As the king listens, whose voice is actually speaking aloud in the throne room, and whose words are buried deepest inside?",
      options: [
        "The merchant speaks aloud; the king's words are deepest",
        "The minister speaks aloud; the merchant's words, carried by the parrot inside the minister's tale, lie deepest",
        "The parrot speaks aloud in the throne room",
        "No one is speaking; the king is reading"
      ],
      correctAnswer: 1,
      explanation: "Only the minister truly speaks in the room. Inside his tale the parrot speaks, and inside the parrot's account the merchant once spoke. Track the layers down: the deepest words, the merchant's, reach the king through two wrappers."
    },
    {
      type: "question",
      domain: "nested_report",
      band: "B6",
      grammar_cell: "epistemic_modal",
      gates: true,
      question: "The minister chose that particular nested tale on purpose. What is he really doing by having a story-parrot quote a merchant's wise advice?",
      options: [
        "Simply entertaining the king with animals",
        "Slipping his own counsel to the king sideways, so the advice arrives as a tale rather than as a command",
        "Confusing the king for no reason",
        "Showing off how many stories he knows"
      ],
      correctAnswer: 1,
      explanation: "The nesting has a purpose. By burying his counsel two tellers deep, the minister advises his king without seeming to instruct him. To follow such a sea of stories, ask at each layer who is telling and why."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "How, in the old frame, did Shiva's private stories ever reach the world of people?",
      options: [
        "A hidden attendant had overheard them and later passed them on",
        "Shiva wrote them in a book for everyone",
        "Parvati shouted them from a mountain",
        "They were never told to anyone"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the overhearing attendant is how the stories escaped into the world. Here it frames the outermost teller rather than testing the nesting."
    },
    { type: "story", moral: "A whole ocean of story is made of tellers inside tellers. To swim in it is to count the mouths a tale has passed through, and to find whose words lie at the very bottom." }
  ]
};
export default story;
