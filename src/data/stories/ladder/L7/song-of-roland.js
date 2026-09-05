// song-of-roland.js  L7, B4 the unreal past. Target: conditional. Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "song-of-roland",
  title: "The Song of Roland",
  icon: "📯",
  difficulty: "Hard",
  theme: "The horn blown too late",
  estimatedTime: "5-10 min",
  description: "Roland could call for help with a single blast of his horn, but pride keeps him from it until the rearguard is doomed. Rebuild the branch where he blows it in time.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "France",
    region: "Western Europe",
    saga: null,
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Roland, the bravest of Charlemagne's knights, was left to guard the rearguard of the army as it crossed the mountains. He carried a great horn, the oliphant; one mighty blast would call Charlemagne and the whole host racing back to help. Then a vast enemy force came pouring down upon Roland's small band in the narrow pass." },
    { type: "story", text: "His wise companion Oliver begged him three times to blow the horn at once, while there was still time to be saved. But Roland, too proud to call for help, refused. He would not sound the horn for fear it would look like fear. So they fought on alone." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Oliver begged Roland to blow the horn at the first sight of the enemy. If Roland had blown it then, what would have happened?",
      options: [
        "Nothing; Charlemagne was too far to hear it",
        "Charlemagne would have turned the army back in time and saved the rearguard",
        "The enemy would have surrendered at once",
        "Roland would have lost his honor forever"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch that pride closed off: a horn blown early would have reached Charlemagne while there was still time, and the men would have been saved. The whole tragedy is the call that could have come and did not."
    },
    { type: "story", text: "The battle went on, and Roland's men fell one by one until almost none were left. Only then, with the field lost and his friends dying around him, did Roland at last raise the horn to his lips and blow, so hard that his temples burst with the effort." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "By the time Roland finally blows the horn, his men are already dying and the field is lost. Price the delay: because he waited so long, what cannot be undone even though Charlemagne hears him now?",
      options: [
        "Nothing is lost; the army arrives in time after all",
        "The rearguard is already destroyed, and no rescue can bring back the men who have fallen while he held his pride",
        "Roland's horn is broken and useless",
        "Charlemagne refuses to come"
      ],
      correctAnswer: 1,
      explanation: "The horn sounds at last, but too late to matter. Pricing the branch means seeing that the same call which would have saved everyone early can now save no one, because the cost was already paid in the waiting."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Charlemagne arrives to find his rearguard dead. Holding the lost branch, if Roland had not let pride rule him that day, what would the great king be riding into now?",
      options: [
        "Exactly the same field of the dead",
        "A living rearguard and a victory, instead of a valley of the slain and a grief he will carry the rest of his life",
        "An empty pass with no battle at all",
        "A surrendered enemy waiting to make peace"
      ],
      correctAnswer: 1,
      explanation: "The mixed branch runs from a past choice into the present scene: a humbler Roland would have left Charlemagne riding into rescue, not mourning. The reader holds the arrival that should have been against the one that is."
    },
    { type: "story", text: "Charlemagne came too late, and found Roland and all his men slain in the pass. He wept, and avenged them, but the rearguard he could not bring back. The horn had been blown at last, but pride had let it sound too late." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Why did Roland refuse to blow the horn when Oliver first begged him to?",
      options: [
        "Because his pride would not let him seem to call for help out of fear",
        "Because the horn was broken at the time",
        "Because Charlemagne had forbidden it",
        "Because he did not yet see the enemy"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: pride held the horn at his side. Here it names the choice the whole grief turns on rather than testing the branch."
    },
    { type: "story", moral: "One early blast would have saved them all. To read this song is to hold the rescue that pride refused, and to count its cost in the silent pass." }
  ]
};
export default story;
