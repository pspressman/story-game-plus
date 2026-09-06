// antar-warrior-poet.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: description no longer hands over Q1's premise. All four options carry B4-level
// subordination, so the answer is not marked out by being the only complex one.
const story = {
  id: "antar-warrior-poet",
  title: "Antar the Warrior-Poet",
  icon: "🐎",
  difficulty: "Medium",
  theme: "Bound by honor where no law binds you",
  estimatedTime: "5-10 min",
  description: "A chief's son is kept among the camels because of who his mother was. Then raiders come.",
  meta: {
    level: 4,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
    culture: "Arabia",
    region: "North Africa and Arabia",
    saga: null,
    source_epic: true,
    threads: [],
    edges: ["warrior_poet"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "Antar's father was the chief of the tribe. His mother had been a slave. By the tribe's law the mother decided it, so Antar herded the camels, and was not permitted to call the chief his father, and could not stand with the free warriors. He loved his cousin Abla, and a slave could not marry a free woman."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: false,
      question: "Picture the tribe's law as two lists: what Antar owes them, and what they owe him. What is on his side of it?",
      options: [
        "Protection, and food, and a place at the fire, which is what any tribe owes its own",
        "Nothing at all, since the law that sets out his duties has no entry on the other side",
        "His freedom when he comes of age, which is the custom for a chief's son by any mother",
        "The right to marry within his rank, though not the free woman he happens to want"
      ],
      correctAnswer: 1,
      explanation: "Work down the two columns. He herds, he serves, he keeps his mouth shut about his father. Against that there is no entry at all: not a name, not a place, not the woman. The law runs one direction."
    },
    {
      type: "story",
      text: "Then raiders came down on the camp and drove off the herds, and the free warriors were being beaten back. Antar was out with the camels, which was where he was supposed to be, and no law in the tribe said a slave had to fight."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture Antar standing there deciding. If he rides in and dies doing it, what does the law say his people owe him for it?",
      options: [
        "A hero's burial, and his name spoken at the fires afterwards, as any fallen warrior gets",
        "Nothing, exactly as before, since a law that grants him no claims does not begin to now",
        "His freedom, granted after his death, so that he may at least be buried as a free man",
        "A share of the herds he saves, which would pass to his mother once he was gone"
      ],
      correctAnswer: 1,
      explanation: "There is no bargain available to him. He cannot fight in exchange for anything, because the arrangement has nowhere to record what he would be owed. Whatever he does out there, he does for nothing."
    },
    {
      type: "story",
      text: "He rode into the raiders alone, and the fight turned on him. And the chief, watching the slave save all of them, shouted out in front of the whole tribe: defend your people, Antar. And in saying it he owned him as his son, and as a free man."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "past_perfect",
      gates: true,
      question: "The chief knew who Antar was his whole life and said nothing. Picture what changed in the moment he shouts. What made it possible?",
      options: [
        "He had only just learned that Antar was his son, nobody having told him until that day",
        "Antar had made it cost more to keep the law than to break it, and in front of everyone",
        "The raid had suspended the tribe's laws, so that what is said in a fight does not bind",
        "Abla's father had spoken for him, having watched him ride out while the warriors faltered"
      ],
      correctAnswer: 1,
      explanation: "Nothing about Antar's birth altered. What altered is that the whole tribe was watching a slave save their lives, and the law suddenly looked worse to keep than to set aside. He did not ask for the change; he made it expensive not to."
    },
    {
      type: "story",
      text: "But Abla's father did not simply hand her over. He set a price: tasks, and journeys, and dangers, one after another, and Antar went and did them. And he made poems about all of it, and the poems went further than he did, and are why he is remembered."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture a free-born warrior of that tribe who wants to marry, and set his road beside Antar's. What is Abla's father really charging for?",
      options: [
        "The dangers of the road, which any man must face who would marry a daughter of the tribe",
        "The part of him the chief's shout could not reach, for which no deed will finish paying",
        "The camels and the gold that any bride-price asks, though he asks it in deeds instead",
        "The time it takes to be sure of a man, which every father takes before he will agree"
      ],
      correctAnswer: 1,
      explanation: "Another man asks and is answered. Antar is given a list, completes it, and is given another. He was freed by a shout in front of everybody, and the price he is still paying is for the thing the shout did not reach."
    },
    { type: "story", moral: "The law freed him to do nothing. His own honour bound him to do everything. The deepest duties are the ones no one can force on you." }
  ]
};
export default story;
