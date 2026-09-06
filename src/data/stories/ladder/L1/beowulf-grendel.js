// L1 Beowulf and Grendel
// B1 event and cause, grammar_target: sequence_and_aspect, tier: A
// Every question requires building the scene and reading something off it that the
// text does not state. No question can be answered by matching a sentence.
const beowulfGrendel = {
  id: "beowulf-grendel",
  title: "Beowulf and Grendel",
  icon: "⚔️",
  difficulty: "Beginner",
  theme: "The end of a long terror",
  estimatedTime: "5-10 min",
  description: "For twelve winters, Grendel has torn warriors from Heorot hall. Then a Geat named Beowulf crosses the sea to face him. Picture the hall, the crossing, and the grip.",

  meta: {
    level: 1,
    track: "gated",
    tier: "A",
    band: "B1",
    grammar_online: ["simple_present", "simple_past", "concrete_noun", "locative", "past_progressive", "present_perfect", "sequence"],
    grammar_target: "sequence_and_aspect",
    culture: "Old English",
    region: "Northern Europe",
    saga: "beowulf",
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
      text: "King Hrothgar built a mead-hall called Heorot, the brightest hall in the northern world. Its roof was gold-plated and its windows spilled firelight across the fields. But before the benches were warm, Grendel came in the dark. Night after night he burst through the door, seized sleeping warriors, and dragged them back to his fen. For twelve winters no man slept in Heorot after sundown."
    },
    {
      type: "question",
      domain: "where",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Stand out in the cold fields on any night of those twelve winters and look toward Heorot. What do you see from there?",
      options: [
        "Firelight in every window and song spilling out the door",
        "A huge black shape against the sky, with no light and no sound in it",
        "Warriors standing shoulder to shoulder in a ring around the walls",
        "Grendel crouched on the roof, waiting for morning"
      ],
      correctAnswer: 1,
      explanation: "The hall was built to blaze with light, but no one sleeps there after sundown now. Put those together and the thing you see from the fields is the great hall gone dark and silent, which is exactly what makes it terrible."
    },
    {
      type: "story",
      text: "Across the whale-road in Geatland, the warrior Beowulf heard of Hrothgar's long grief. He gathered fourteen men, launched a ship, and set out for Denmark. The crossing took many days."
    },
    {
      type: "question",
      domain: "sequence",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Beowulf's ship is out in open water, still days from Denmark. Picture Heorot on that same night, far away. What is happening there?",
      options: [
        "The hall is lit and feasting, waiting for him to arrive",
        "Grendel is still coming in the dark, and men are still keeping away after sundown",
        "Hrothgar has already pulled the hall down and gone",
        "Nothing at all, because Grendel stopped the day Beowulf set sail"
      ],
      correctAnswer: 1,
      explanation: "Nothing about a ship at sea reaches Denmark yet. While the crossing is going on, the raiding is also going on, in another place at the same time. Two things running at once, and neither one knows about the other."
    },
    {
      type: "story",
      text: "When he reached Heorot, Beowulf told Hrothgar: \"I have come to end this. Tonight I will meet Grendel with no sword and no shield.\" That night he and his men lay down in the dark hall and waited."
    },
    {
      type: "question",
      domain: "where",
      band: "B1",
      grammar_cell: "locative",
      gates: true,
      question: "Picture Beowulf choosing his place in the dark hall before Grendel comes. If he means to lay hands on the thing, where does he have to be?",
      options: [
        "Outside in the fields, hidden, ready to follow it home",
        "Inside the hall, in the dark, close to the way Grendel comes in",
        "Up in the roof beams, above the sleeping benches",
        "In Hrothgar's own house, well away from the hall"
      ],
      correctAnswer: 1,
      explanation: "Grendel comes through the door of the hall and takes men off the benches. Anyone waiting outside, or above, or in another building never gets his hands on him. To catch the thing you have to be lying in the dark where it will walk."
    },
    {
      type: "story",
      text: "Grendel smashed through the door, snatched one warrior, and tore him apart. Then he reached for Beowulf. The Geat caught his arm in a grip the monster had never felt before."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "For twelve winters nothing in that hall has ever been able to hold Grendel. Picture his face the instant the grip closes on his arm. What is on it?",
      options: [
        "The same rage he has worn every other night",
        "Fear, for the first time in twelve winters",
        "Boredom, because this happens often",
        "Triumph, because he has caught someone new"
      ],
      correctAnswer: 1,
      explanation: "Twelve winters of taking whoever he liked, and now something holds him. The new thing on his face has to be the thing he has never had cause to feel in that hall before."
    },
    {
      type: "story",
      text: "They grappled, and the hall shook, and benches splintered under them. Grendel heaved and twisted, and at last wrenched himself free and fled into the night, leaving his arm torn from the shoulder."
    },
    {
      type: "question",
      domain: "movement",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "Beowulf is holding on and Grendel is straining to get away. Picture the two of them locked together. Where does the struggle travel while it lasts?",
      options: [
        "Deeper into the hall, toward Hrothgar's high seat",
        "Toward the door, because Grendel is pulling for the way out",
        "Nowhere; they stay planted on one spot the whole time",
        "Out across the fields and down to the black water"
      ],
      correctAnswer: 1,
      explanation: "Grendel is no longer hunting. He is trying to leave, and he does leave, out into the night. Picture him hauling one way and Beowulf braced the other, and the whole grinding struggle drags toward the door he came in by."
    },
    {
      type: "story",
      text: "In the morning, warriors followed the blood trail to the edge of the black water. Grendel had crept home to die. Beowulf hung the torn arm high under the roof of Heorot, and that night the hall rang with song until dawn."
    },
    {
      type: "question",
      domain: "intent",
      band: "B1",
      grammar_cell: "simple_past",
      gates: false,
      question: "Picture a Dane stepping through that door at sundown, the first time in twelve winters anyone has dared. He looks up. Why did Beowulf hang the arm where it hangs?",
      options: [
        "To dry it out before it spoiled",
        "So that anyone who walks in sees at once that the thing is beaten",
        "Because there was nowhere else in the hall to put it",
        "To frighten Hrothgar into paying him more gold"
      ],
      correctAnswer: 1,
      explanation: "Hung high under the roof, it is the first thing a man sees when he comes through the door he was afraid of. It is proof, put where the fear used to be, which is why they can sing in there again."
    },
    {
      type: "story",
      moral: "Twelve winters of terror, one night of courage. The story turned on who finally came, not how long the waiting had been."
    }
  ]
};

export default beowulfGrendel;
