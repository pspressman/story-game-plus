// cu-chulainn-boyhood.js  L2, B2. Ireland. How Setanta became Cu Chulainn.
// Rewritten: prior version stated the killing and the grief inside a question stem,
// and every answer restated the sentence above it. The gate is now the hound acting
// on what was true when it was loosed, not what is true now.
const story = {
  id: "cu-chulainn-boyhood",
  title: "How the Boy Became the Hound",
  icon: "🐕",
  difficulty: "Easy",
  theme: "Setting right what you have undone",
  estimatedTime: "5-10 min",
  description: "A boy arrives late to a feast and meets a guard dog working from an old count of who is inside. Picture what the hound knows and what it cannot know.",
  meta: {
    level: 2,
    track: "gated",
    tier: "A",
    band: "B2",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle"],
    grammar_target: "past_perfect",
    culture: "Ireland",
    region: "British Isles",
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
      text: "Culann the smith was holding a feast, and he had counted his guests in through the door and shut it behind the last of them. Then he went out to the yard and unchained his hound. It was a huge dog, and it had one job: nobody crosses this yard at night. Culann went back in to his fire and his ale."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "Picture the hound alone in the dark yard just after Culann goes inside. What does it believe about the people it is guarding against?",
      options: [
        "That some guests are still on the road and will arrive later",
        "That everyone who belongs here is already inside, so anything moving out here is a stranger",
        "That it should let children pass but stop grown men",
        "That Culann will come out again soon to call it off"
      ],
      correctAnswer: 1,
      explanation: "It was let out after the door shut. That is the whole of what it knows. Picture the yard divided in the dog's mind into inside, where the guests are, and outside, where nothing has any business being."
    },
    {
      type: "story",
      text: "But the boy Setanta had been invited too. He had stayed late at his game on the green, and now he was coming up the road in the dark, alone, running to catch the end of the feast. He turned in at Culann's gate."
    },
    {
      type: "question",
      domain: "irony",
      band: "B2",
      grammar_cell: "past_perfect",
      gates: true,
      question: "You can see both the boy on the road and the dog in the yard. Picture the moment Setanta steps through the gate. What is wrong here?",
      options: [
        "The boy is trespassing where he was never welcome",
        "The boy is an invited guest, but the count the hound is working from was finished before he arrived",
        "The hound has escaped its chain and should not be loose",
        "Culann has set the dog on the boy deliberately"
      ],
      correctAnswer: 1,
      explanation: "Nobody here is wrong. The boy really was invited. The dog really was told everyone was in. The trouble is that the counting happened first and the boy happened after, and no one went back out to tell the dog."
    },
    {
      type: "story",
      text: "The hound came at him across the yard. Setanta had no weapon but the ball and stick he had been playing with. When it was over the great dog lay dead in the dirt, and the door of the house was open, and Culann was standing in the light of it looking down at his hound."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B2",
      grammar_cell: "participle",
      gates: false,
      question: "Picture Culann in the doorway, looking from the dead hound to the boy standing over it. He is a host and he is the dog's owner at the same time. What is he feeling?",
      options: [
        "Only anger at the boy for killing his dog",
        "Grief for the hound and no blame for the boy, because he can see how it happened",
        "Relief that the dangerous animal is gone",
        "Fear that the boy will attack him next"
      ],
      correctAnswer: 1,
      explanation: "He knows he shut the door. He knows he loosed the dog. Standing there he can see the whole thing at once, which is why what is on his face is loss rather than accusation."
    },
    {
      type: "question",
      domain: "where",
      band: "B2",
      grammar_cell: "gerund",
      gates: true,
      question: "The hound is gone. Picture Culann's house tomorrow night, and the night after. What is different about it now?",
      options: [
        "The feast will have to be held somewhere else",
        "There is an empty yard with nothing in it watching the dark",
        "The door will no longer close properly",
        "Culann will have to move away from the district"
      ],
      correctAnswer: 1,
      explanation: "The dog was not a pet, it was the thing standing between a smith's house and whatever walks the road at night. Picture that yard empty and you are looking at the actual size of what was lost."
    },
    {
      type: "story",
      text: "Setanta looked at the empty yard too. Then he told Culann: I will guard your house myself, every night, until a pup of that hound is grown and trained to do it. And he did. And they called him Cu Chulainn after that, which means the Hound of Culann."
    },
    {
      type: "question",
      domain: "intent",
      band: "B2",
      grammar_cell: "infinitive",
      gates: true,
      question: "Setanta could have apologised, or paid, or brought another dog. Picture what he offers instead. What is he actually doing?",
      options: [
        "Proving he is braver than the hound was",
        "Putting himself into the exact gap he made, and standing in it until it is filled again",
        "Punishing himself so that Culann will forgive him",
        "Making sure no other dog can take the hound's place"
      ],
      correctAnswer: 1,
      explanation: "He does not offer something instead of the hound. He offers the hound's own job, in the hound's own yard, on the hound's own nights, for as long as it takes. That is why the name he earns is the dog's."
    },
    { type: "story", moral: "The boy caused a loss without meaning to, and then chose to stand in the very place he had emptied. To make right a harm you caused is how a name worth keeping is earned." }
  ]
};
export default story;
