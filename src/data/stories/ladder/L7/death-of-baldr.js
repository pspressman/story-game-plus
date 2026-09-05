// death-of-baldr.js  L7, B4 the unreal past. Target: conditional (third/mixed). Gate: rebuild the branch that did not happen and price it.
const story = {
  id: "death-of-baldr",
  title: "The Death of Baldr",
  icon: "🌿",
  difficulty: "Hard",
  theme: "The one thing left unasked",
  estimatedTime: "5-10 min",
  description: "Everything in the world swore not to harm the beloved god, except one small plant. Rebuild the branch where it had been asked too, and feel what it cost that it was not.",
  meta: {
    level: 7,
    track: "gated",
    tier: "A",
    band: "B4",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence", "simple_future", "past_perfect", "infinitive", "gerund", "participle", "present_progressive", "future_progressive", "passive_voice", "future_perfect", "deontic_modal", "present_perfect_progressive", "epistemic_modal", "past_perfect_progressive", "subjunctive", "first_conditional", "second_conditional", "future_perfect_progressive", "third_conditional", "mixed_conditional"],
    grammar_target: "conditional",
    culture: "Norse",
    region: "Northern Europe",
    saga: "norse_eddas",
    source_epic: true,
    threads: [],
    edges: [],
    cultural_care: null,
    untestable: false,
    visualize_prompt: null
  },
  content: [
    { type: "story", text: "Baldr, the brightest and most beloved of the gods, began to dream of his own death. To protect him, his mother Frigg went through the whole world and made every thing swear never to harm him: fire and water, iron and stone, beasts and birds and sickness. Only the mistletoe she passed by, for it seemed too young and small to be any threat." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Frigg got an oath from everything but the mistletoe, which she thought too small to matter. If she had asked the mistletoe to swear as well, what would have happened?",
      options: [
        "Baldr would still have died some other way",
        "There would have been no weapon left that could harm Baldr, and he would not have been killed",
        "The mistletoe would have refused to swear",
        "Frigg would have had to start the oaths over again"
      ],
      correctAnswer: 1,
      explanation: "Rebuild the branch that did not happen: had the one overlooked plant been bound like all the rest, nothing in the world could have struck Baldr down. The whole grief hangs on a single thing left unasked."
    },
    { type: "story", text: "The gods made a game of Baldr's safety, throwing weapons at him to watch them turn aside. But Loki, jealous, found out about the mistletoe. He shaped it into a dart and put it in the hands of Baldr's blind brother, Hodr, guiding his aim. The dart struck, and Baldr fell dead." },
    { type: "story", text: "The gods begged Hel, who rules the dead, to release Baldr. She agreed on one condition: every single thing in the world must weep for him. Messengers went out, and everything wept, stones and trees and metals, all but one giantess in a cave, who said only, let Hel keep what she holds. That giantess was Loki in disguise." },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "third_conditional",
      gates: true,
      question: "Hel would have freed Baldr if all the world had wept, and all did weep but one. If that single giantess had wept too, what would have followed?",
      options: [
        "Nothing; Hel would have kept Baldr regardless",
        "The condition would have been met, and Baldr would have returned from the dead",
        "Loki would have wept in her place",
        "The other gods would have had to die instead"
      ],
      correctAnswer: 1,
      explanation: "Again the branch turns on one refusal. Had that last creature wept, every thing would have mourned and Hel's price would have been paid, and Baldr would have come back. One dry pair of eyes, and the door stayed shut."
    },
    {
      type: "question",
      domain: "if_only",
      band: "B4",
      grammar_cell: "mixed_conditional",
      gates: true,
      question: "Because Baldr stayed dead, the gods now move closer to their final doom. Holding that, if Baldr were still among them now, what would be different about the gods' future?",
      options: [
        "Nothing would be different at all",
        "Their brightest hope would still be with them, and the long slide toward their doom would not weigh on them as it does",
        "Baldr would simply rule in Loki's place",
        "The mistletoe would grow larger"
      ],
      correctAnswer: 1,
      explanation: "This branch reaches from a lost past into the present: were Baldr alive now, the gods would not be carrying the shadow his death cast forward. Pricing the loss means feeling how a single past moment darkens everything that comes after."
    },
    { type: "story", text: "So Baldr remained in the land of the dead, and the gods grieved, and the world moved one step nearer to its ending. All of it hung on a plant unasked and a single creature who would not weep." },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "past_perfect",
      gates: false,
      question: "Why had Frigg not asked the mistletoe to swear the oath?",
      options: [
        "Because it seemed too young and small to be any threat",
        "Because she could not find it anywhere",
        "Because Loki had hidden it from her",
        "Because it had refused once already"
      ],
      correctAnswer: 0,
      explanation: "A plain tracking of cause: the plant was passed over as harmless. Here it names the gap the whole grief turns on rather than testing the branch."
    },
    { type: "story", moral: "One plant unasked, one creature who would not weep. To read this tale is to rebuild the rescue that almost was, and to feel the weight of how nearly it came." }
  ]
};
export default story;
