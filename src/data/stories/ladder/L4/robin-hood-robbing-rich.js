// robin-hood-robbing-rich.js  L4, B4 the ought. Target: deontic_modal. Gate: weigh must vs may.
const story = {
  id: "robin-hood-robbing-rich",
  title: "Robin Hood: Justice Against the Law",
  icon: "🏹",
  difficulty: "Medium",
  theme: "When the law forbids what is just",
  estimatedTime: "5-10 min",
  description: "The law says Robin must not take from the rich. The poor are starving under unjust taxes. He must decide which he is truly bound to obey.",
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
    { type: "story", text: "In Sherwood the law was clear: the Sheriff's taxes must be paid, and no one might take a coin from the rich lords who collected them. But the taxes were cruel, and the poor of the shire were left to starve so that the Sheriff and his friends could grow fat. Robin Hood watched the law protect the cruel and crush the hungry." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "The law says Robin must not take from the rich. He sees the poor starving under unjust taxes. What does he judge he ought to do, against the law?",
      options: [
        "He must obey the law exactly, whatever it costs the poor",
        "He judges that a higher justice binds him to act, even though the law forbids it",
        "He may do nothing, since it is not his concern",
        "He must report the poor to the Sheriff"
      ],
      correctAnswer: 1,
      explanation: "Weigh the law against justice. The law binds him to obey; what he judges right binds him to act. Robin holds that the deeper ought, helping the wronged, outweighs a law that shields the cruel."
    },
    { type: "story", text: "So Robin and his band took from the rich lords what they had wrung from the poor, and gave it back to those it had been taken from. In the eyes of the law they were thieves and outlaws. In the eyes of the hungry, they were the only justice left." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Is Robin simply free to break any law he thinks unjust? What does the story show about his choice?",
      options: [
        "Yes, anyone may break any law they dislike, with no cost",
        "No; he breaks the law knowing it makes him an outlaw, choosing justice with his eyes open to the price",
        "He is not really breaking the law at all",
        "He breaks the law only by accident"
      ],
      correctAnswer: 1,
      explanation: "The point is not that the law stops mattering. Robin knows the law binds him and that defying it makes him hunted. He chooses justice anyway, accepting the cost, which is what makes it a true weighing of must against ought."
    },
    { type: "story", text: "The Sheriff hunted them through the greenwood, and Robin's men lived as outlaws, always one step from the gallows. They paid in danger and exile for the help they gave, and still they judged it worth the price." },
    {
      type: "question",
      domain: "obligation",
      band: "B4",
      grammar_cell: "deontic_modal",
      gates: true,
      question: "Why do Robin and his men keep robbing the rich even though it makes them hunted outlaws?",
      options: [
        "Because they enjoy breaking rules for its own sake",
        "Because they judge they are bound to right a wrong the law refuses to right, and accept the danger that comes with it",
        "Because the law secretly allows it",
        "Because no one is really chasing them"
      ],
      correctAnswer: 1,
      explanation: "They are not bound by the law here, but they bind themselves to justice. Knowing the danger, they still hold themselves obliged to help the wronged, which is the ought they choose over the law's must."
    },
    { type: "story", text: "And so Robin Hood became a legend, the outlaw who served justice when the law would not, remembered long after the Sheriff who hunted him was forgotten." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had the poor of the shire been left to starve?",
      options: [
        "Because cruel and unjust taxes had stripped them to enrich the Sheriff and the lords",
        "Because they had refused to work",
        "Because Robin had taken their food",
        "Because a drought had ruined the harvest"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the unjust taxes are why the poor suffer. Here it explains what Robin is responding to rather than testing the weighing of must against may."
    },
    { type: "story", moral: "The law said one thing and justice said another. Robin chose justice, knowing the law would call him a thief for it." }
  ]
};
export default story;
