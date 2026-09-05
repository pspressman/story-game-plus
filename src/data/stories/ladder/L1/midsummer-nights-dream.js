// L1 node: A Midsummer Night's Dream: The Lovers' Chase
// B1 event and cause. Grammar target: sequence_and_aspect.
// Gate: order events, hold ongoing-vs-done. Shows gates:true sequence/aspect items,
// and cumulative gates:false B0 item reaching back to the floor.
const midsummerNightsDream = {
  id: "midsummer-nights-dream",
  title: "A Midsummer Night's Dream: The Lovers' Chase",
  icon: "🌙",
  difficulty: "Beginner",
  theme: "Love reversed by magic in the wood",
  estimatedTime: "5-10 min",
  description: "Four lovers flee into an enchanted forest. A mischievous sprite dabbles with a love potion, reversing who chases whom. Watch what happens before and after the drops fall.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Britain",
    region: "British Isles",
    saga: "shakespeare",
    source_epic: false,
    threads: ["shakespeare"],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "In Athens, Hermia loved Lysander, and he loved her back. But Demetrius also wanted Hermia, and her father commanded her to wed Demetrius instead. Helena, Hermia's friend, loved Demetrius hopelessly; he scorned her. The two couples fled into the forest that night."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "simple_past",
      gates: false,
      question: "Before anyone enters the enchanted forest, how many of the four lovers actually have their love returned?",
      options: [
        "All four of them",
        "Only Hermia and Lysander",
        "Only Demetrius and Helena",
        "None of them"
      ],
      correctAnswer: 1,
      explanation: "Picture the starting arrangement: Hermia and Lysander love each other, but Helena's love for Demetrius is not returned, and Demetrius's pursuit of Hermia is not wanted. Only one pair matches before the magic begins."
    },
    {
      type: "story",
      text: "Deep in the wood lived Oberon the fairy king and Puck his servant. Oberon saw Helena chasing Demetrius, who kept pushing her away. He told Puck to squeeze a magic flower's juice onto the sleeping Demetrius's eyelids, so the next person he saw would entrance him. But Puck mistook Lysander for Demetrius and anointed the wrong man."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: true,
      question: "When Lysander wakes and suddenly declares love for Helena, what had Puck done?",
      options: [
        "He had squeezed the potion onto Helena instead",
        "He had placed the potion on the right man, Demetrius",
        "He had mistaken Lysander for Demetrius and anointed the wrong sleeper",
        "He had decided to ignore Oberon's command entirely"
      ],
      correctAnswer: 2,
      explanation: "Track the order: Oberon gives the instruction naming Demetrius, Puck finds a sleeping Athenian and assumes it is the right one, but it is Lysander. The mistake has already happened before Lysander opens his eyes."
    },
    {
      type: "story",
      text: "Now Lysander was chasing Helena, and Hermia could not understand why her beloved had abandoned her. Meanwhile a troupe of workmen rehearsed a play called Pyramus and Thisbe in a clearing. Puck, amused, gave their leader Bottom a donkey's head. Bottom wandered about braying, unaware, while Oberon's queen Titania—also charmed—fell madly in love with him."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "Why is Hermia suddenly alone and confused in the forest?",
      options: [
        "Lysander has fallen asleep and cannot hear her calling",
        "The potion's mistake has sent Lysander chasing after Helena instead",
        "Demetrius has captured Lysander and locked him away",
        "Hermia's father has found her and dragged Lysander back to Athens"
      ],
      correctAnswer: 1,
      explanation: "Follow the order of events: Puck anoints Lysander by mistake, Lysander wakes and sees Helena first, and the enchantment makes him pursue Helena. Hermia's confusion comes after the potion has already switched Lysander's affection."
    },
    {
      type: "story",
      text: "Oberon realized the blunder and at last charmed Demetrius properly. Now both men were pursuing Helena, who thought they were mocking her. The four quarreled bitterly. Oberon ordered Puck to lead them in circles until they dropped asleep, then fix everything. Puck obeyed: he squeezed an antidote onto Lysander's eyes, left Demetrius enchanted with Helena, and let them all wake at dawn."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "By the time the lovers wake at sunrise, what has Puck done to restore the pairings?",
      options: [
        "He has removed all the magic from everyone",
        "He has left Lysander's love for Hermia restored and Demetrius charmed to love Helena",
        "He has made all four of them forget the night entirely",
        "He has switched the magic so now the women chase the men"
      ],
      correctAnswer: 1,
      explanation: "Holding what has already been completed: Puck has applied the antidote to Lysander, returning him to Hermia, and kept the potion on Demetrius, giving Helena her wish. The fixing is done by dawn."
    },
    {
      type: "story",
      text: "The lovers woke thinking the night had been a strange dream. Hermia and Lysander were reunited, and Demetrius now adored Helena. Even Hermia's father relented. Back in Athens they watched the workmen perform their comedy of Pyramus and Thisbe—Bottom, restored to human shape, played the tragic lover with great enthusiasm."
    },
    {
      type: "story",
      moral: "The story turned on when the drops fell and onto whom. One mistake in the dark tangled four lives; one careful fix at dawn set them right again."
    }
  ]
};

export default midsummerNightsDream;