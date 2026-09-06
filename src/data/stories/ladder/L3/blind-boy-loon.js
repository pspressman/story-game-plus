// blind-boy-loon.js  L3, B3 vantage flip and the other's feeling. Target: passive_voice.
// CULTURAL CARE: Inuit story. Flagged for HARPER review.
// Rewritten: prior Q1 stated the deception in its own stem and then asked the child to
// identify it, and Q4 asked for a reason given in the block above.
const story = {
  id: "blind-boy-loon",
  title: "The Blind Boy and the Loon",
  icon: "🦆",
  difficulty: "Easy",
  theme: "What you cannot see being done to you, and the sight given back",
  estimatedTime: "5-10 min",
  description: "A boy who cannot see lives with the woman who is meant to care for him. A bear comes to the house.",
  meta: {
    level: 3,
    track: "gated",
    tier: "R",
    band: "B3",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice"],
    grammar_target: "passive_voice",
    culture: "Inuit",
    region: "North America",
    saga: null,
    source_epic: false,
    threads: [],
    edges: [],
    cultural_care: "Inuit story. Told here in a plain version. Present with respect and flag for HARPER cultural review before ship.",
    untestable: false,
    visualize_prompt: null
  },
  content: [
    {
      type: "story",
      text: "A boy who could not see lived with the old woman who was meant to look after him. One winter a bear came at the house, and there was no one else. She put the bow in his hands and stood behind him and turned him by the shoulders until he was aimed, and told him when. He loosed the arrow. He heard it hit, and he heard something heavy come down on the snow outside, and he heard the old woman go out. When she came back in she told him he had missed, and that the bear had run off into the dark."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Picture what the boy has to go on: the sound of the hit, the weight coming down outside, and then her telling him he missed. Which of those can he check?",
      options: [
        "All of them, since he heard everything clearly",
        "None of them; every one needs eyes, and hers are the only eyes in the house",
        "Only the sound of the arrow striking",
        "Only what she tells him afterwards"
      ],
      correctAnswer: 1,
      explanation: "He heard something. What it was, and what is lying out there now, is a thing you find out by going and looking. She went and looked. Everything he knows about that night has to come back through her, and there is no second way to check it."
    },
    {
      type: "story",
      text: "That winter there was meat in the house. He could smell it cooking. He was given broth, and small pieces, and told there was little enough to go round and that they were lucky to have it. She ate at the other side of the room and he could hear her eating."
    },
    {
      type: "question",
      domain: "inference",
      band: "B3",
      grammar_cell: "present_progressive",
      gates: true,
      question: "There is meat in a house where the bear supposedly ran off. Picture what the boy would work out if he put those two things together. Why does he not?",
      options: [
        "He is not clever enough to notice the difference",
        "He has been given a reason for the meat and no way to weigh it, and she is the person he has to trust",
        "He does not care where the food comes from",
        "He is too weak from hunger to think about it"
      ],
      correctAnswer: 1,
      explanation: "The two facts sit right next to each other and one of them explains the other. But he has been told where the meat came from, he cannot go and see, and the only person who could tell him otherwise is the one telling him this."
    },
    {
      type: "story",
      text: "In the spring he made his way down to the lake. A loon came up out of the water beside him and told him to hold on to its back. It went down, deep, into the cold, and came up. When they surfaced he could see the light. It went down again, and again, and each time there was more, until he could see the lake, and the shore, and his own hands."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "Picture the boy standing on the shore afterwards, seeing everything. Besides the lake, what else has just been handed back to him?",
      options: [
        "His strength, which the winter had taken",
        "The ability to check things for himself, which he has never had",
        "His memory of what happened the night of the bear",
        "The friendship of the loon, who will stay with him"
      ],
      correctAnswer: 1,
      explanation: "Sight is not only seeing. Everything he has believed all winter he believed because he was told it, and there was no other way. Standing on that shore he has, for the first time, the option of going and looking."
    },
    {
      type: "story",
      text: "He walked back to the house. The bearskin was stretched on a frame outside, dry and stiff, where it had been all winter. The meat was in the cache, more than a little, and he stood and looked at it."
    },
    {
      type: "question",
      domain: "feeling",
      band: "B3",
      grammar_cell: "passive_voice",
      gates: true,
      question: "The skin has been on that frame all winter, right outside the door he went in and out of. Picture him seeing it. What is the worst part?",
      options: [
        "That the bear was bigger than he had thought",
        "That it was never hidden at all; anyone with eyes could see it, and he walked past it every day",
        "That the skin has been damaged by the weather",
        "That she killed the bear herself and took the credit"
      ],
      correctAnswer: 1,
      explanation: "Nothing was concealed. It stood in the open the whole time, and the whole winter of being told he had missed happened a few steps away from the thing that proved otherwise. It only worked because of what he could not do."
    },
    {
      type: "story",
      text: "From that day the boy could see the world, and he could see the people in it, and he was never so easy to lie to again."
    },
    { type: "story", moral: "What was done to him in the dark, he could not see. When his sight was given back, the truth came with it." }
  ]
};
export default story;
