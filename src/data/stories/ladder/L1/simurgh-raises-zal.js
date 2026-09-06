// simurgh-raises-zal.js
// L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Rewritten: prior version's four questions each restated the sentence above them.
// Every answer here requires holding two places, or two times, that the text never joins.
const simurghRaisesZal = {
  id: "simurgh-raises-zal",
  title: "The Simurgh Raises Zal",
  icon: "🦅",
  difficulty: "Beginner",
  theme: "The abandoned one becomes blessed",
  estimatedTime: "5-10 min",
  description: "A baby born with white hair is left on a mountain. A giant bird finds him and lifts him to her nest. Hold the mountain and the house below it in your mind at the same time.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Persia",
    region: "Persia and Central Asia",
    saga: "shahnameh",
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
      text: "The hero Sam had waited years for a son. When the child finally came, his hair was snow-white and his eyes were pale as moonlight. The midwives went quiet. Sam looked at the boy, and then he called his servants and told them to carry him up into the mountains and leave him on the rocks."
    },
    {
      type: "question",
      domain: "intent",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Nothing is wrong with the baby. He is healthy and he is crying. Picture Sam looking down at him before he calls the servants. What is he thinking about?",
      options: [
        "Whether the child is strong enough to survive",
        "What other people will say when they see a son of his who looks like that",
        "How far into the mountains the servants can travel",
        "Whether the midwives can be trusted to keep quiet"
      ],
      correctAnswer: 1,
      explanation: "The midwives go quiet, and that is what moves him. He is not deciding about the baby at all; he is deciding about being seen with the baby. That is why a healthy child ends up on a rock."
    },
    {
      type: "story",
      text: "The servants climbed for two days and set the bundle down on bare stone near the top of Mount Alborz, and went back down without looking behind them. Far above, the Simurgh was circling her nest, a bird with a wingspan wider than a house and feathers the colour of dawn."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Picture the mountainside from up where the Simurgh is flying. On all that bare grey stone, what makes the bundle catch her eye?",
      options: [
        "Its size, because it is the largest thing on the mountain",
        "It is the one small thing down there that is moving and making noise",
        "The white hair, which shines like snow from a great height",
        "The servants standing beside it and pointing"
      ],
      correctAnswer: 1,
      explanation: "The servants are gone. The stone does not move. From that height a baby is nearly nothing, but it is the only thing on the whole slope that squirms and cries, and a hunting bird is built to notice exactly that."
    },
    {
      type: "story",
      text: "She swept down, took him up in her talons, and carried him to the nest, and set him among her own young. She fed him what she fed them. She spread her wings over him at night the way she did over them."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Picture Zal at four years old in that nest, looking around at the others in it with him. What does he think he is?",
      options: [
        "A human child being kept by a bird",
        "One of the Simurgh's own, the same as the young beside him",
        "A prisoner waiting to be rescued",
        "The son of a hero who will come for him"
      ],
      correctAnswer: 1,
      explanation: "He is fed like them and covered at night like them, and he has never seen anything else. Nobody has told him he is different, so what he sees when he looks around is his family."
    },
    {
      type: "story",
      text: "Years went by. Zal grew tall and strong on the mountain. Far below, in his own house, Sam began to dream at night of a young man who called him father, and he would wake with his face wet."
    },
    {
      type: "question",
      domain: "when",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Sam wakes from the dream grieving for a lost baby. Picture the mountain on that same night. What is actually up there?",
      options: [
        "The bare rock where the bundle was left, with nothing on it",
        "A grown young man, asleep in a nest, who has been alive and well the whole time",
        "A small child still crying for someone to come",
        "Nothing; the mountain is empty and Zal is gone"
      ],
      correctAnswer: 1,
      explanation: "Sam's grief is stuck at the moment he stopped knowing anything. But the years ran up on the mountain too. While he mourns an infant, the person he is mourning is grown, and has been for a long time."
    },
    {
      type: "story",
      text: "At last Sam climbed the mountain himself, weeping as he went, and found his son alive and glowing with health. The Simurgh pulled a feather from her own breast and gave it to Zal, and said: burn this if you ever need me. Then she let him go down with his father."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Zal is going down the mountain with a man he has just met. Picture him looking back up at the nest. What is he leaving?",
      options: [
        "A place he was trapped in and is glad to escape",
        "The only home he has ever had, and the mother who raised him",
        "A stranger who fed him out of pity",
        "Nothing worth looking back at"
      ],
      correctAnswer: 1,
      explanation: "The word rescue belongs to Sam, not to Zal. Every year Zal can remember happened in that nest. Going home is going away, and the feather in his hand is there because the Simurgh knows it."
    },
    {
      type: "story",
      moral: "What seemed a mark of shame became a gate to wonder. The child cast out rose higher than any kept safe."
    }
  ]
};

export default simurghRaisesZal;
