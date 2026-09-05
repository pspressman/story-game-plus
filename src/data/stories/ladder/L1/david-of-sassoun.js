// david-of-sassoun.js
// L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Gate: order battles, hold won territory versus what is still under siege.
const davidOfSassoun = {
  id: "david-of-sassoun",
  title: "David of Sassoun",
  icon: "⚔️",
  difficulty: "Beginner",
  theme: "The magic sword chooses its moment",
  estimatedTime: "5-10 min",
  description: "Arab armies press Sassoun from every side. David rides out with a magic sword and a horse born from the sea. Track which battles have been won and which forts are still under attack.",

  meta: {
    level: 1,
    track: "gated",
    tier: "R",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Armenia",
    region: "Caucasus",
    saga: null,
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
      text: "The city of Sassoun had endured siege after siege. Arab invaders came with armies, demanding tribute and submission. David, son of heroes, trained in the high mountains with a sword forged by his ancestors and a stallion born from sea foam. When he came of age, he rode down to break the encirclement."
    },
    {
      type: "question",
      domain: "number",
      band: "B0",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Before David ever rides into battle, how many of the sieges against Sassoun had the city managed to throw off completely on its own?",
      options: [
        "None—they endured but never broke free",
        "About half of them",
        "All but the current one",
        "Every single one"
      ],
      correctAnswer: 0,
      explanation: "The story shows siege after siege with the city enduring, not defeating. The pattern before David arrives is survival under pressure, not victory. This pictures the simplest count and does not test the level's own target."
    },
    {
      type: "story",
      text: "David's first fight came at the eastern pass, where an Arab commander had camped with siege engines aimed at the outer walls. David's magic sword sang as he charged. The invaders broke and fled before he reached their tents. By sunset the pass was clear."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: true,
      question: "The invaders flee the eastern pass before David even reaches their camp. What had already happened to make them run?",
      options: [
        "David had cut down their commander in single combat",
        "The magic sword had sung during his charge",
        "Sassoun's defenders had attacked from behind",
        "David's stallion had trampled their siege engines"
      ],
      correctAnswer: 1,
      explanation: "Track the order: the sword sings as he charges, the invaders break and flee, then he would have reached the tents. The breaking comes after the singing but before arrival. The sword's magic worked at a distance."
    },
    {
      type: "story",
      text: "Word of the eastern victory spread, but the main Arab army still surrounded the city's southern gate. Their general, Msra-Melik, had been besieging that gate for months and would not withdraw. David rode south to meet him, and the two armies clashed in a day-long battle."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "Why does David have to fight a second battle at the southern gate, even after his victory in the east?",
      options: [
        "The southern gate is the true entrance to Sassoun's treasure",
        "Msra-Melik's army is still besieging that gate and will not leave",
        "David's horse refuses to return by the eastern route",
        "The magic sword demands a second test"
      ],
      correctAnswer: 1,
      explanation: "Follow what is happening where: the eastern pass is now clear, but the southern gate is still under siege by a separate force. One victory does not automatically end the other ongoing siege. David must go where the threat continues."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "David stands at the southern gate facing Msra-Melik's army. By this moment, what has David already accomplished?",
      options: [
        "He has defeated both the eastern and southern armies",
        "He has cleared the eastern pass but the south is still under siege",
        "He has driven off Msra-Melik but the east remains blocked",
        "He has won no battles yet—this is his first fight"
      ],
      correctAnswer: 1,
      explanation: "Hold what is done against what is still happening: the eastern pass victory is complete, but the southern siege is ongoing as he arrives. One battle has been won; the other is about to begin."
    },
    {
      type: "story",
      text: "David's sword struck Msra-Melik's shield and split it in two. The general fell, his army scattered, and by nightfall Sassoun's gates stood open with no enemy in sight. The city that had endured siege after siege was finally, fully free."
    },
    {
      type: "story",
      moral: "Sassoun had survived many armies but broken none. David arrived with a sword that sang and a purpose that would not bend, and the pattern of endless siege finally ended."
    }
  ]
};

export default davidOfSassoun;