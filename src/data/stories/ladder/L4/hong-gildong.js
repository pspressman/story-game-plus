// hong-gildong.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: prior version's questions restated the block above ("What does X do, and what
// happens next?") and every explanation opened with "Correct." All options now carry B4
// subordination so the answer is not the only complex one on its list.
const story = {
  id: "hong-gildong",
  title: "Hong Gildong",
  icon: "📖",
  difficulty: "Medium",
  theme: "What he is forbidden to do, and what he chooses to do anyway",
  estimatedTime: "5-10 min",
  description: "A minister's son grows up in his father's house, and is not allowed to call him father.",
  meta: {
    level: 4,
    track: "gated",
    tier: "R",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "Korea",
    region: "East Asia",
    saga: null,
    source_epic: false,
    threads: [{ type: "history", inaccuracy_flag: true }],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "Hong Gildong grew up in a great house in Joseon Korea. His father was a high minister of the kingdom. His mother was a concubine of that house, not the minister's wife. So from the time he could speak, Gildong addressed his father by title, as a servant would, and his elder half-brother the same, and everyone in the household heard him do it every day."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: false,
      question: "Picture Gildong greeting his father each morning in front of the household. The rule costs the minister nothing. What is it for?",
      options: [
        "To teach the boy the good manners that any son of a great house is expected to learn",
        "To say aloud, every day and where all can hear, that he is not counted among the family",
        "To keep him from growing proud, since a clever boy who is praised too early will spoil",
        "To protect his mother, whose position would be endangered if the boy spoke too freely"
      ],
      correctAnswer: 1,
      explanation: "Nobody needs reminding who his father is. The rule does not inform anyone of anything. What it does is make the boy perform his own exclusion out loud, in front of witnesses, before breakfast, for years."
    },
    {
      type: "story",
      text: "He turned out to be brilliant. He learned the classics faster than his tutors could set them, and he was the best of the household at arms, and he found a Taoist sage in the hills who taught him things the classics did not cover. But the law of the kingdom said the son of a concubine could not sit the civil service examination, and a man who could not sit it could hold no office at all."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The law lets him study everything and forbids him to use any of it. Picture what the kingdom has arranged for itself here. What has it done?",
      options: [
        "Protected the offices from men who would be resented by those obliged to serve under them",
        "Trained a man it will not employ, and taught him exactly how little his ability will buy",
        "Given him an education that will be useful to him in whatever trade he chooses instead",
        "Ensured that only the sons of proper wives will compete, so the examinations stay fair"
      ],
      correctAnswer: 1,
      explanation: "The two rules together are worse than either alone. It would be one thing to be kept ignorant. He is made excellent and then shown the door, so he can measure precisely what the rule is costing him."
    },
    {
      type: "story",
      text: "His half-brother knew all this and was frightened of him anyway. He was frightened because Gildong was cleverer, and stronger, and better liked in the house. So he hired men to kill him. Gildong had learned enough from the sage to see it coming, and he went over the wall that night and out of his father's house for good."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "past_perfect",
      gates: true,
      question: "The law already barred Gildong from every office in the kingdom. Picture the half-brother arranging the murder anyway. What is he afraid of?",
      options: [
        "That Gildong will find some legal way around the rule and sit the examination after all",
        "That the rule keeps Gildong out of the offices but cannot keep him from being the better man",
        "That their father intends to change the household rules and name Gildong as his heir",
        "That Gildong has learned magic from the sage and will use it against the family"
      ],
      correctAnswer: 1,
      explanation: "The law has done everything the brother could ask of it, and he is still afraid. What frightens him is not a threat to his position but the daily fact of being second in his own house to somebody who is not allowed to compete."
    },
    {
      type: "story",
      text: "Gildong gathered men who had nothing and made them into a band, the Hwalbindang, the League of the Just. They robbed the officials who had been squeezing the provinces, and they gave what they took back to the villages it had come from. Gildong knew what a man owed to the authorities. He also knew what the authorities had been doing with the villages."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture the officials Gildong robs. They hold their offices by the same law that shut him out. What is the League actually taking back?",
      options: [
        "Wealth that the officials had earned by service, which is stolen whoever ends up holding it",
        "What the officials had already taken, so the robbery is the second theft and not the first",
        "Taxes that were owed to the king, which the villages must pay again once the band has gone",
        "Property that belongs to the state, which no private person has any right to redistribute"
      ],
      correctAnswer: 1,
      explanation: "He is not raiding honest men. Every coin the band lifts was squeezed out of a village first. The law calls the second movement theft and has no word at all for the first one, which is the whole of his argument."
    },
    {
      type: "story",
      text: "The king sent soldiers. Gildong used what the sage had taught him and stood in eight places at once, and the soldiers spent months chasing shapes. In the end the king sent a different message: take an official title, a real one, and leave Korea. Gildong took it. He sailed away and founded his own kingdom on an island, and there a man's birth decided nothing."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The king hands Gildong the very thing the law had forbidden him. Picture what the king is admitting by making that offer. What is it?",
      options: [
        "That Gildong has grown too powerful to fight, so the kingdom must buy peace at any price",
        "That the rule was never about ability, since it can be waived the moment it becomes costly",
        "That the sons of concubines should be permitted to sit the examinations from now on",
        "That the officials Gildong robbed had been corrupt, and deserved what the band did to them"
      ],
      correctAnswer: 1,
      explanation: "If the bar had rested on anything real, it could not be lifted by a letter. It comes off the moment keeping it is inconvenient to the king, which tells Gildong exactly what it was worth all along, and he takes the title and goes."
    },
    { type: "story", moral: "When the law forbids what is just, a man must choose between obedience and his own worth. Gildong defied the rule that denied him, and went and built somewhere the rule did not reach." }
  ]
};
export default story;
