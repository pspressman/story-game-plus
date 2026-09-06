// pwyll-otherworld.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior description named the vantage to take, Q1's stem performed the swap
// and the option read it back, and Q4 was a lookup.
const story = {
  id: "pwyll-otherworld",
  title: "Pwyll in the Otherworld",
  icon: "🦌",
  difficulty: "Easy",
  theme: "A face that is not your own, and the trust it carries",
  estimatedTime: "5-10 min",
  description: "A lord's hounds take a stag that another pack brought down. The owner of those hounds is not an ordinary man.",
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
    {
      type: "story",
      text: "Pwyll, lord of Dyfed, was out hunting when he came on a stag already pulled down by a strange white pack. He drove those hounds off and set his own on the carcass. The owner rode up: Arawn, king of the Otherworld, and not pleased. For amends, Arawn named a strange price. The two of them would trade shapes for a year. Pwyll would go and rule the Otherworld wearing Arawn's face, and Arawn would rule Dyfed wearing Pwyll's."
    },
    {
      type: "question",
      domain: "inference",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Arawn could have demanded gold or a fight. Picture what he asks for instead: a year with his own kingdom in the hands of the man who wronged him. What is he risking?",
      options: [
        "Nothing, since he keeps Pwyll's kingdom as security",
        "Everything he has, handed to someone who has already shown he takes what is not his",
        "Only a year of his own time",
        "His reputation among the other Otherworld kings"
      ],
      correctAnswer: 1,
      explanation: "The man drove another pack off a kill it had earned. That is what Arawn knows about him, and on that evidence he hands over his country, his hall and his wife for a year. It is not a punishment so much as an enormous bet."
    },
    {
      type: "story",
      text: "So Pwyll went to the Otherworld in Arawn's shape, and ruled there, and every evening Arawn's wife came and sat with him and talked about the day, and went to bed beside him, and never once thought he was anyone but her husband."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand inside the queen at one of those evenings. She is talking about her day to her husband. What is actually happening?",
      options: [
        "She is being tricked by a man who means her harm",
        "She is giving the ordinary trust of a marriage to somebody it was never meant for, and nobody will ever tell her",
        "She is beginning to suspect that something is wrong",
        "She is being tested by Arawn to see if she is faithful"
      ],
      correctAnswer: 1,
      explanation: "Nothing bad is being done to her and something is being taken all the same. The easiness of talking to your own husband is a thing she is spending on a stranger, and the arrangement is between two men neither of whom asked her."
    },
    {
      type: "story",
      text: "And every night Pwyll lay down with his back to her and did not touch her, and said nothing about why, for a year."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B3",
      grammar_cell: "participle",
      gates: true,
      question: "Stand inside the queen again, on the hundredth of those nights. She does not know about any bargain. How does her husband's behaviour look to her?",
      options: [
        "Like a man keeping faith with a friend",
        "Like her husband turning away from her night after night for a reason she cannot get at",
        "Like ordinary tiredness after a day of ruling",
        "Like a punishment for something she has done"
      ],
      correctAnswer: 1,
      explanation: "The honourable thing and the cold thing are the same act, and she is on the side where only the coldness shows. A year of it, with no explanation available to her, because the explanation is a secret between two kings."
    },
    {
      type: "story",
      text: "At the year's end the two kings met at the place they had agreed, and traded their shapes back. Arawn went home and found his kingdom well kept, and learned from his wife how the year had gone. He and Pwyll were friends from that day, and Dyfed and the Otherworld were at peace."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Three people lived through that year. Picture what each of them ends up with. What does the queen get?",
      options: [
        "A husband returned and a friendship between kingdoms",
        "An explanation at last for a year that made no sense to her, given to her after it was over",
        "Nothing; she is the only one who is never told anything",
        "The gratitude of both kings for her patience"
      ],
      correctAnswer: 1,
      explanation: "The two kings walk away with a friendship they chose to build. She is handed the answer to a year she spent confused, once it can no longer be refused or agreed to. Being told afterwards is not the same as being asked."
    },
    { type: "story", moral: "A face can be exchanged, and a trust can be kept inside it. Standing where each one stood, you feel both the deceiving and the honouring at once." }
  ]
};
export default story;
