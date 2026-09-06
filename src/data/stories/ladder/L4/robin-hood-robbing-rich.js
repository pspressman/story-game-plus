// robin-hood-robbing-rich.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
// Rewritten: description stated the dilemma and its resolution, all three gating questions
// asked the same thing three ways, and Q4 was a lookup. Options now level across the band.
const story = {
  id: "robin-hood-robbing-rich",
  title: "Robin Hood: Justice Against the Law",
  icon: "🏹",
  difficulty: "Medium",
  theme: "When the law forbids what is just",
  estimatedTime: "5-10 min",
  description: "The Sheriff's taxes are collected on time every quarter. The shire is starving.",
  meta: {
    level: 4,
    track: "gated",
    tier: "R",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal"],
    grammar_target: "deontic_modal",
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
      text: "The law in the shire was working exactly as written. The taxes were assessed, and collected, and carried to Nottingham, and anyone who did not pay was taken before the court and dealt with properly. The lords who set the rates grew rich on them. The villages that paid them went hungry through the winter, and nothing in the law was broken anywhere in that sentence."
    },
    {
      type: "question",
      domain: "inference",
      band: "B4",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Picture a villager who has done everything the law asks of him and has nothing left to eat. What has gone wrong?",
      options: [
        "The law has been broken by the Sheriff, who is taking more than the rates permit him to take",
        "Nothing has been broken, which is the trouble: the rules were followed and the outcome is still this",
        "The villager has failed to pay properly, and is being punished as the statutes provide for",
        "The harvest has failed that year, so there would have been hunger whatever the rates had been"
      ],
      correctAnswer: 1,
      explanation: "There is no villain breaking a rule here. Every step was lawful, and the man is starving at the end of it. That is a harder thing to argue with than a crime, because there is nobody to accuse of anything."
    },
    {
      type: "story",
      text: "Robin Hood took to the greenwood and began stopping the collectors on the road. He took what they were carrying and walked it back to the villages it had been assessed on. In the courts he was a thief and an outlaw with a price on him. In the villages he was the only thing that had ever come back."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture Robin choosing the road instead of the courts. What would petitioning the law have got him?",
      options: [
        "A hearing before the Sheriff, who would be obliged to consider the complaint on its merits",
        "Nothing, since he would be asking the men who set the rates to rule that the rates are wrong",
        "A long delay, but eventually a judgement, because the courts move slowly and not unjustly",
        "His arrest, because a man who complains about taxes is treated as refusing to pay them"
      ],
      correctAnswer: 1,
      explanation: "The lords collecting are the lords judging. There is no part of that machine standing outside itself where an appeal could land. He is not skipping the lawful route; there is not one for what is being done."
    },
    {
      type: "story",
      text: "The Sheriff hunted them through Sherwood for years. The band lived rough and slept armed and were never more than a bad day from the gallows, and they kept doing it."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Robin could argue that an unjust law does not bind him at all. Picture him living hunted instead. What does accepting the outlawry show?",
      options: [
        "That he is not clever enough to construct a legal defence for what he has been doing",
        "That he holds the law to be real and binding, and is breaking it knowingly rather than dismissing it",
        "That he enjoys the life of the greenwood more than he would enjoy a pardon and a settled place",
        "That he expects a future king to pardon him, so the danger he runs is smaller than it looks"
      ],
      correctAnswer: 1,
      explanation: "A man who thought the law meaningless would argue he had done nothing wrong. Robin never does. He accepts that he is an outlaw and goes on anyway, which is a different claim: not that the law is nothing, but that this once it is outweighed."
    },
    {
      type: "story",
      text: "He became a legend, and outlasted the Sheriff who hunted him by several hundred years, which is the usual arrangement in these stories."
    },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Picture a different man in the shire deciding that some law is unjust and he may therefore break it. What made Robin's case different from that?",
      options: [
        "Robin was of noble birth, so his judgement about the law carried more weight than a villager's",
        "Robin gave away everything he took, so nothing he did could be explained by his own advantage",
        "Robin only took from men who were themselves breaking the law by overcharging the villages",
        "Robin was popular in the shire, and a man the people support is not really an outlaw at all"
      ],
      correctAnswer: 1,
      explanation: "Anyone can say a law is unjust when obeying it is expensive. What separates him is that he ends up with nothing: the goods go back to the villages, and he keeps the danger. That is the only part of the argument he cannot be lying about."
    },
    { type: "story", moral: "The law said one thing and justice said another. Robin chose justice, knowing the law would call him a thief for it." }
  ]
};
export default story;
