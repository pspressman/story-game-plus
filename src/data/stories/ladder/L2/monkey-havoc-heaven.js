// monkey-havoc-heaven.js
// L2, B2 one other mind. Grammar target: non_finite (infinitive, gerund, participle).
// Rewritten: prior Q1 described Monkey wandering the halls, a scene in no story block,
// and its option forecast the theft. Nothing here requires knowing the tale beforehand.
const monkeyHavocHeaven = {
  id: "monkey-havoc-heaven",
  title: "Monkey's Havoc in Heaven",
  icon: "🐵",
  difficulty: "Easy",
  theme: "The trickster, undone by appetite",
  estimatedTime: "5-10 min",
  description: "Heaven gives a troublesome newcomer a grand title and a small job. Work out what the title was for.",

  meta: {
    level: 2,
    track: "gated",
    tier: "R",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "non_finite",
    culture: "China",
    region: "East Asia",
    saga: "journey_to_the_west",
    source_epic: true,
    threads: [],
    edges: ["trickster_many_faces"],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },

  content: [
    {
      type: "story",
      text: "Monkey had made so much trouble on earth that Heaven decided the simplest thing was to bring him up and give him a post. They named him Protector of the Heavenly Horses. He wore the title for some days, very pleased with it, until another god asked him with a straight face how the stable was coming along. Then he found out where his post stood on the list. It stood at the bottom. There was nothing below it."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Heaven could have fought him or shut him out. Picture the gods choosing a grand-sounding title for the lowest job there is. What were they trying to do?",
      options: [
        "Reward him properly for how strong he had proved himself",
        "Quiet him down with something that sounded like an honour and cost them nothing",
        "Train him slowly for a greater position later on",
        "Keep him near the horses because he was good with animals"
      ],
      correctAnswer: 1,
      explanation: "A real honour would have come with a real place on the list. A fine name attached to the bottom rung is not a gift, it is a way of making a difficulty go quiet, and it works right up until he finds out where he is standing."
    },
    {
      type: "story",
      text: "Monkey walked out of the stable and did not go back. He went to the orchard of the Queen Mother, where the peaches of immortality grow, the fruit that makes the gods deathless and is served once an age at the Great Banquet. He ate them. He ate every peach on every tree. Then he found the wine set aside for the banquet and drank it, and after that the golden pills of life in Laozi's furnace room, and he swallowed those too."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "He could have burned the orchard or smashed the jars, and Heaven would have lost just as much. Picture him eating instead. What does eating do that breaking would not?",
      options: [
        "It leaves no evidence for the gods to find",
        "What made them deathless is now inside him instead of in their garden",
        "It is quieter, so nobody hears him at work",
        "It proves he was hungry rather than angry"
      ],
      correctAnswer: 1,
      explanation: "Breaking the peaches would only mean nobody has them. Eating them moves them. Everything Heaven kept in that orchard to hold itself above him has been taken off the tree and put into the one creature they thought they had put in the stable."
    },
    {
      type: "story",
      text: "The gods came back to a stripped orchard, dry jars, and an empty furnace. The Jade Emperor sent ten thousand warriors after Monkey. They came at him with spears and blades and heavenly fire, and he fought them all and laughed while he did it, and not one blow could finish him."
    },
    {
      type: "question",
      domain: "cause",
      band: "B2",
      grammar_cell: "participle",
      gates: true,
      question: "Ten thousand warriors of Heaven, and none of them can land a killing blow. Picture what is standing in front of them. Why can they not win?",
      options: [
        "There are too few of them for a fighter as skilled as Monkey",
        "They are attacking a creature who has eaten the things that make a god impossible to kill",
        "Their weapons were forged for use on earth, not in Heaven",
        "The Jade Emperor has secretly ordered them to hold back"
      ],
      correctAnswer: 1,
      explanation: "The peaches and the pills did exactly what they were made to do. Heaven is sending soldiers to kill someone carrying Heaven's own deathlessness inside him, and every one of those blows is landing on a thing they themselves made unkillable."
    },
    {
      type: "story",
      text: "At last the Buddha came. He did not strike at Monkey at all. He put out his hand, and set a mountain of stone down on top of him, and left him under it."
    },
    {
      type: "question",
      domain: "inference",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "Ten thousand blades failed and one mountain works. Picture Monkey under the stone, perfectly alive. What did the Buddha understand that the warriors did not?",
      options: [
        "That the Buddha is simply stronger than ten thousand warriors",
        "That a creature who cannot be killed can still be held, so the answer was never a weapon",
        "That Monkey had grown tired after such a long fight",
        "That the mountain would slowly take his immortality away"
      ],
      correctAnswer: 1,
      explanation: "Everyone else was trying to end him and he had made that impossible. The stone does not try. Being unkillable is no protection at all against simply being kept in one place, and nothing he swallowed does anything about a weight on top of him."
    },
    {
      type: "story",
      moral: "A trick may open a door, but appetite can trap you inside. The hand that takes everything cannot choose what to let go."
    }
  ]
};

export default monkeyHavocHeaven;
