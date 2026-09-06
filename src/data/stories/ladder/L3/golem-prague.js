// golem-prague.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// Rewritten: prior description listed the three gating answers in order ("woken and
// commanded and at last unmade"), and Q4 asked for a reason stated in block 1.
const story = {
  id: "golem-prague",
  title: "The Golem of Prague",
  icon: "🗿",
  difficulty: "Easy",
  theme: "A thing made to serve, and what it is to be made",
  estimatedTime: "5-10 min",
  description: "In a dangerous year, a rabbi in Prague goes down to the river for clay.",
  meta: {
    level: 3,
    track: "gated",
    tier: "A",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Jewish, Prague",
    region: "Central Europe",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "It was a bad year in Prague and the people were in danger. Rabbi Loew went down to the river at night and carried up clay, and shaped it on the bank into the form of a very large man, and worked over it until nearly morning. Then he set a holy word upon it. The clay moved. It sat up, and stood, and opened its eyes, and looked at him."
    },
    {
      type: "question",
      domain: "what",
      band: "B3",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Picture a newborn child opening its eyes for the first time, and the Golem opening its eyes on the riverbank. What does the child have coming that the Golem does not?",
      options: [
        "Someone who loves it",
        "Years ahead of growing, learning, and becoming whatever it turns out to be",
        "A name given by its parents",
        "The ability to speak one day"
      ],
      correctAnswer: 1,
      explanation: "The child arrives at the beginning of something. The Golem arrives finished, at full size, on the night it is needed. Everything it will ever be was decided on the riverbank before its eyes opened."
    },
    {
      type: "story",
      text: "It was enormously strong and it never tired. Every night the rabbi told it where to go and what to do, and it went and did it, and came back. It never asked why, and it was never told."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "Stand inside the Golem in the hour before it is given the night's instruction. It is waiting. What does it know about what is coming?",
      options: [
        "Roughly what it will be doing, since the nights are much the same",
        "Nothing at all, because what happens next is a sentence somebody else has not said yet",
        "That it will be sent out to guard the streets",
        "That the rabbi will decide fairly"
      ],
      correctAnswer: 1,
      explanation: "Everyone else can guess at tomorrow from yesterday. The Golem's next few hours are not in the world yet; they are in a word that has not been spoken. Standing inside it, the future is a blank until somebody fills it in."
    },
    {
      type: "story",
      text: "In time the danger to the people passed. And the Golem had grown very strong, stronger than was safe to keep in a city. The rabbi went up to where it lay one night and took the holy word away from it. The light went out of its eyes and the shape settled back into clay."
    },
    {
      type: "question",
      domain: "inference",
      band: "B3",
      grammar_cell: "past_perfect",
      gates: true,
      question: "The Golem is unmade for being too strong. Picture where that strength came from. Whose doing is it?",
      options: [
        "The Golem's, since it chose to grow stronger",
        "The rabbi's, who made it that way on purpose because the danger was great",
        "Nobody's; it happened by accident",
        "The people's, who asked for a stronger guardian"
      ],
      correctAnswer: 1,
      explanation: "It did not train, and it did not want anything. It was built strong because a weak one would have been no use that year. The reason it is being ended is a decision that was taken before it woke."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Stand inside the Golem as the word is lifted away. It cannot object and it will not be asked. What is the difference between this and any ordinary death?",
      options: [
        "There is no difference; it is simply dying",
        "Its life was never in its own keeping, so it is not losing something that was ever its own",
        "It happens more quickly than an ordinary death",
        "It can be undone again later, so it does not count"
      ],
      correctAnswer: 1,
      explanation: "A person's life is theirs and gets taken. The Golem's was on loan from the moment it opened its eyes, kept in a word held by somebody else, and lifting it away is the same hand closing that opened."
    },
    {
      type: "story",
      text: "They carried the clay up to the attic and left it lying there, and the story says it is there still, and could be woken again if it were ever needed."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "future_progressive",
      gates: true,
      question: "Stand inside the clay in the attic. Picture what the last line promises: that it might be woken again if it is needed. Is that a comfort?",
      options: [
        "Yes, because it means the Golem is not truly gone",
        "Only to the people, since waking it again would happen for their sake and not its own",
        "Yes, because it will get to see the city again",
        "No, because it can never be woken a second time"
      ],
      correctAnswer: 1,
      explanation: "Read the sentence carefully: if it were ever needed. Not wanted, not missed. Even the hope at the end of the story belongs to somebody else, and the Golem is still the thing that gets fetched."
    },
    { type: "story", moral: "It was shaped, woken, commanded, and stilled, all by other hands. To stand where it stood is to feel what it is to be made for someone else's need." }
  ]
};
export default story;
