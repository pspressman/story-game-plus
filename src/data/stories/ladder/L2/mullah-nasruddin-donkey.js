// L2 node: Mullah Nasruddin and the Donkey
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: the prior description field announced the moral on the story card before
// the child opened the node, and Q1 then asked for what had already been given away.
const mullahNasruddinDonkey = {
  id: "mullah-nasruddin-donkey",
  title: "Mullah Nasruddin and the Donkey",
  icon: "🫏",
  difficulty: "Easy",
  theme: "The wise fool's mirror",
  estimatedTime: "5-10 min",
  description: "A man and his son set out for market with one donkey between them. Everyone they pass has an opinion about it.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "Sufi/Turkic",
    region: "Persia and Central Asia",
    saga: null,
    source_epic: false,
    threads: [],
    edges: ["one_fool_many_hats"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "Nasruddin and his son set out for market, walking either side of their donkey. They had not gone far when men by the roadside began laughing at them. \"Look at those two fools, walking to market with a perfectly good donkey and nobody on it!\" Nasruddin did not argue. He lifted his son onto the donkey's back, and they went on."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Picture what the roadside men can see: two travellers, a donkey, nobody riding. What do they not know from where they are standing?",
      options: [
        "Which of the two owns the donkey",
        "Anything at all about why those two are walking, or how far, or whether the donkey is fit to carry anyone",
        "How far the market is from the village",
        "Whether the donkey is old or young"
      ],
      correctAnswer: 1,
      explanation: "They see one moment of a journey from the side of a road and they judge it immediately. Everything that would make the choice sensible or foolish is invisible to them, and they do not wait to find out."
    },
    {
      type: "story",
      text: "Further on they passed travellers going the other way, who stopped and stared. \"Shameful. A strong young boy riding in comfort while his old father walks in the dust.\" Nasruddin nodded, and helped his son down, and climbed up himself, and they went on."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Hold both roadsides in your mind at once. The first group wanted somebody on the donkey; this group objects to who it is. Could Nasruddin have set out in a way that satisfied both?",
      options: [
        "Yes, if the son had ridden from the beginning",
        "No, because the second group only objects once someone is riding, and the first only objects when nobody is",
        "Yes, if he had explained his reasons to the first group",
        "No, because both groups dislike him personally"
      ],
      correctAnswer: 1,
      explanation: "Put the two complaints side by side and they point opposite ways. There is no arrangement he could have chosen before leaving home that would have got him past both, because the second objection only exists once he has answered the first."
    },
    {
      type: "story",
      text: "At the market gate a third crowd was waiting. \"Cruel man! The two of you sitting up there like lords and that poor animal staggering under the weight of you both.\" Nasruddin laughed out loud. Then he climbed down, and his son climbed down, and the two of them hoisted the donkey onto their shoulders and carried it in through the gate."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Carrying a donkey is absurd and Nasruddin knows it. Picture him hoisting it up anyway, in front of everyone. What is the absurd thing for?",
      options: [
        "To rest the donkey after a long walk",
        "To take obeying the crowd one step further than it can go, so everyone can see where it leads",
        "To show off how strong he and his son are",
        "To make sure nobody can accuse him of cruelty again"
      ],
      correctAnswer: 1,
      explanation: "He is not solving the problem. He is finishing it. Each crowd told him to change and he changed, and this is what is left at the end of changing every time, carried in through the gate where they can all look at it."
    },
    {
      type: "story",
      text: "The crowd went quiet, and then they laughed. Nasruddin set the donkey down and bowed to them."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "The crowd goes silent before it laughs. Picture that silence. What has just arrived in their heads?",
      options: [
        "Fear that Nasruddin has gone mad",
        "That they are looking at the end of their own advice, and they are the ones who put it there",
        "Sympathy for the donkey being carried",
        "Confusion, because they cannot tell what he is doing"
      ],
      correctAnswer: 1,
      explanation: "The laugh comes second. The silence is the gap where they work out that nobody made him do this except them, one instruction at a time, and that the ridiculous thing in the gateway is theirs."
    },
    {
      type: "story",
      moral: "Walk beside it, ride it, carry it: there is always someone to call you foolish. The mirror the fool holds up is clear."
    }
  ]
};

export default mullahNasruddinDonkey;
