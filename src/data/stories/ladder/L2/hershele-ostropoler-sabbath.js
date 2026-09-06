// hershele-ostropoler-sabbath.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: prior Q1 described the father story before any block contained it, and
// Q3 asked the child to repeat the last sentence of block 1.
const hersheleSabbath = {
  id: "hershele-ostropoler-sabbath",
  title: "Hershele and the Sabbath Meal",
  icon: "🕯️",
  difficulty: "Easy",
  theme: "The trickster's message",
  estimatedTime: "5-10 min",
  description: "A hungry traveller knocks at the door of a man who feeds nobody. Watch which door he tries.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "Yiddish",
    region: "Western Europe",
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
      text: "Hershele came into the town on Friday evening with nothing in his pockets and nothing in his stomach. The whole street smelled of Sabbath cooking. He walked past every lit window and stopped at the biggest house of all, which belonged to a man known through the district for never having fed anyone in his life. He knocked there. The door opened a crack, and a face looked out at him without any welcome in it."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Every house on the street smells of cooking, and Hershele walks past all of them to knock at the one door famous for staying shut. Picture him choosing. What does that choice tell you about him?",
      options: [
        "He does not know which houses are friendly, so he picks at random",
        "He is not looking for the easiest meal; he has come to the hardest door on purpose",
        "He believes the rich man will feel sorry for a hungry stranger",
        "He is too proud to ask a poor family for anything"
      ],
      correctAnswer: 1,
      explanation: "Any hungry man knocks at the nearest warm window. Walking the whole street to reach the one door that never opens is not hunger choosing, it is somebody who has decided the shut door is the interesting one."
    },
    {
      type: "story",
      text: "\"Your father came to me in a dream,\" Hershele said. \"Last night. He is cold where he is, and hungry, and there is nothing he can do about it himself. He said the one thing that would warm him is if his son sat a poor traveller at his Sabbath table tonight.\""
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Hershele could have said the father asked for prayers, or for charity given next week. Picture him deciding what to put in the dream. Why this?",
      options: [
        "Because a dream about food is easier to remember than other kinds",
        "Because it is the one request that can only be satisfied by feeding the man standing at the door",
        "Because he believes the father truly is hungry in the next world",
        "Because the miser has been waiting for news of his father"
      ],
      correctAnswer: 1,
      explanation: "A dream asking for prayers can be answered without opening the door. This one cannot be answered at all except by doing the exact thing Hershele came for, and the man who is asked has no way to satisfy it cheaply."
    },
    {
      type: "story",
      text: "The man's face changed. He stood there a moment with his hand on the door. Then he opened it wide, and went in ahead of Hershele, and set another place at the table."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "This is a man who has never fed anybody. Picture him standing with his hand on the door in that pause. What is happening in him?",
      options: [
        "He is deciding whether the stranger looks honest enough to let in",
        "He is weighing his own habit against the thought of his father cold and hungry, and losing",
        "He is trying to remember whether he ever knew this traveller",
        "He is working out how little food he can get away with serving"
      ],
      correctAnswer: 1,
      explanation: "Nothing about Hershele has changed in that pause. What has changed is that there is now something on the other side of the scale from his own tightness, and it is the one thing heavy enough to move him."
    },
    {
      type: "story",
      text: "They ate together. The man kept filling Hershele's plate, higher than a guest would ask for, and every time he filled it he looked pleased. Hershele ate everything that was put in front of him. When it was over he thanked his host and went out into the dark."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "gerund",
      gates: false,
      question: "The host keeps piling the plate higher and looks pleased each time. Picture what he thinks is happening at that table. What does he think he is doing?",
      options: [
        "Showing off his wealth to a poor traveller",
        "Sending each helping to his father, so the more he gives the more good he does",
        "Making sure the stranger leaves and does not return",
        "Testing whether the traveller will admit he is lying"
      ],
      correctAnswer: 1,
      explanation: "He is not being generous to Hershele at all, in his own mind. Every spoonful is going somewhere else, to somebody he cannot reach any other way, which is why a man who never fed anyone cannot stop filling the plate."
    },
    {
      type: "story",
      moral: "A story well told can open the door that habit had locked. The trick lies not in the tale, but in knowing which tale the listener needs to hear."
    }
  ]
};

export default hersheleSabbath;
