// robin-hood-archery.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: the prior description field announced the trap and the beggar on the story
// card, so both gating questions were answered before the child opened the node.
const robinHoodArchery = {
  id: "robin-hood-archery",
  title: "Robin Hood: Disguise and the Archery Contest",
  icon: "🏹",
  difficulty: "Easy",
  theme: "The outlaw's trick",
  estimatedTime: "5-10 min",
  description: "The Sheriff of Nottingham announces an archery contest with a golden arrow for the winner. He is very keen that people should come.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "England",
    region: "British Isles",
    saga: "robin_hood",
    source_epic: true,
    threads: [],
    edges: ["outlaw_circling_the_globe"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "The Sheriff of Nottingham had a golden arrow made, and sent criers out to every village to announce a contest for the finest archer in England. Then he stood his soldiers along the road into town and told them what to watch for. \"Lincoln green,\" he said. \"A tall man with a longbow. He will come. He cannot help himself.\""
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Picture the soldiers taking up their places on the road before a single archer has arrived. What does that tell you the contest is for?",
      options: [
        "Finding the best archer in England, with soldiers there to keep order",
        "Catching one particular man, with the contest built as the bait to bring him in",
        "Protecting the golden arrow from being stolen on the road",
        "Showing off the Sheriff's wealth to the villages"
      ],
      correctAnswer: 1,
      explanation: "Nobody posts men to look for one description before the guests arrive unless the guest is the point. The arrow, the criers, the whole contest are the part that has to look real for the road to work."
    },
    {
      type: "story",
      text: "Deep in Sherwood, Robin heard about it and wanted to go, and his men told him he would be walking into a net. Robin sat and thought. Then he got up and went to the edge of the camp where the rubbish was, and came back with a ragged brown cloak, and rubbed dirt into his face and hands until his own men did not much want to look at him."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "The soldiers have been told exactly what to look for. Picture them watching the road as Robin comes down it. Why does the dirt work?",
      options: [
        "Because dirt makes it hard to see a person's face clearly",
        "Because they are checking every man against one picture, and a filthy beggar is not that picture, so they stop looking at him",
        "Because soldiers are afraid of catching illness from beggars",
        "Because the Sheriff forgot to tell them about disguises"
      ],
      correctAnswer: 1,
      explanation: "They are not searching for Robin. They are searching for green cloth and a tall bowman, and every man on that road gets held up against it for half a second. The dirt does not hide him; it gets him rejected before anyone bothers to look."
    },
    {
      type: "story",
      text: "The day was bright and hot. Fifty archers stood out on the field in their best cloth, and one ragged man waited at the end of the line where nobody was standing near him. Round after round the field thinned out. At the last there were three: a knight, a forester, and the beggar. The beggar's arrow went into the very centre of the mark and the crowd came to its feet."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "The Sheriff is on the platform and can see the whole field. Picture where his eyes are while the beggar shoots. Where is he looking?",
      options: [
        "At the beggar, wondering how a poor man shoots so well",
        "Out at the road, because the man he is waiting for has not arrived yet",
        "At the knight, who he expects to win",
        "At the golden arrow, making sure it is safe"
      ],
      correctAnswer: 1,
      explanation: "He built the whole day to make one man come down that road, and so that is where he is watching. The thing he wants is on the field in front of him winning his contest, and he is facing the wrong way to see it."
    },
    {
      type: "story",
      text: "The Sheriff put the golden arrow into the beggar's dirty hands himself, and the beggar bowed and shuffled off toward the trees. That evening a shaft came over the wall of Nottingham castle with a note tied to it: heaven bless your grace this day, say all in merry Sherwood, and the ragged beggar thanks you for the prize. The Sheriff read it twice and tore it up."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Robin could have simply escaped and said nothing. Picture the Sheriff reading that note. What does the note make him do that getting away did not?",
      options: [
        "It makes him angry, which escaping alone would not have",
        "It makes him go back over the whole day and see that he handed the prize over with his own hands",
        "It tells him where Robin's camp is hidden",
        "It warns him that Robin will come again next year"
      ],
      correctAnswer: 1,
      explanation: "Without the note the Sheriff has a contest that failed. With it he has a memory he has to look at: the beggar in front of him, his own hands, the arrow going across. The note does not tell him anything new; it makes him watch it again."
    },
    {
      type: "story",
      moral: "A mind that has decided what it is looking for will look straight past everything else. The beggar in the corner drew no eye at all."
    }
  ]
};

export default robinHoodArchery;
