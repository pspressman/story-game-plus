// david-of-sassoun.js
// L1, B1 event and cause. Grammar target: sequence_and_aspect.
// Gate: hold two places at once. What is finished in one place while another is ongoing.
// Every answer must be read off a pictured scene, never matched to a sentence.
const davidOfSassoun = {
  id: "david-of-sassoun",
  title: "David of Sassoun",
  icon: "⚔️",
  difficulty: "Beginner",
  theme: "The magic sword chooses its moment",
  estimatedTime: "5-10 min",
  description: "Arab armies press Sassoun from every side. David rides out with a sword forged by his ancestors and a horse born from sea foam. Hold the whole city in your mind: one gate freed while another is still shut.",

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
      text: "Sassoun sat in a bowl of mountains, with a pass into the east and a great gate facing south. Army after army had come demanding tribute, and army after army had sat outside the walls until the people gave in. High above the city, David trained with a sword forged by his ancestors and a stallion born from sea foam. When he came of age, he rode down."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: false,
      question: "Picture a child who has lived her whole life inside those walls, in all the years before David rides down. What has she never once seen?",
      options: [
        "An army camped outside the walls",
        "Open country beyond the gates, with no army sitting in it",
        "Snow on the mountains above the city",
        "Her own family gathered in one room"
      ],
      correctAnswer: 1,
      explanation: "Army after army came, and each one sat there until the city gave in. Set that against a whole childhood and the thing she has never had is a plain view out of an open gate with nobody besieging it."
    },
    {
      type: "story",
      text: "David rode east first. In the pass an Arab commander had dragged up siege engines and aimed them at the outer wall. David came down the slope at a gallop, alone, with the sword up. The men at the engines looked up at what was coming, and did not wait for it. They left the engines standing and ran."
    },
    {
      type: "question",
      domain: "other_mind",
      band: "B1",
      grammar_cell: "past_progressive",
      gates: true,
      question: "The soldiers run before David reaches them, leaving the engines behind. Picture what they are looking at as they decide. What are they running from?",
      options: [
        "A wound one of them has already taken",
        "The sight of what is coming down at them, before it arrives",
        "An order from their commander to fall back",
        "Sassoun's defenders coming out of the gate behind them"
      ],
      correctAnswer: 1,
      explanation: "Nothing has touched them yet. He has not got there. What empties that pass is the thing they can see bearing down the slope, and they decide about it while it is still on its way."
    },
    {
      type: "story",
      text: "By sunset the eastern pass was clear. But Sassoun has two ways in. At the southern gate the general Msra-Melik had been camped for months with the main army, and no word from the east made him move."
    },
    {
      type: "question",
      domain: "where",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: true,
      question: "Picture the whole city from above at that sunset: the eastern pass on one side, the southern gate on the other. What does it look like?",
      options: [
        "Both ways in are open and empty",
        "One way in is clear, and the other still has an army sitting across it",
        "Both ways in are still blocked by armies",
        "The eastern pass is blocked again and the south is clear"
      ],
      correctAnswer: 1,
      explanation: "Two places, one picture. The east is finished and empty. The south is not finished, and the army there has not moved. A city with one door open and one door held is not yet a free city."
    },
    {
      type: "story",
      text: "David turned his horse south. The ride took him the length of the valley, and the two armies met before the gate and fought the whole day through."
    },
    {
      type: "question",
      domain: "cause",
      band: "B1",
      grammar_cell: "sequence",
      gates: true,
      question: "David has already won in the east. Picture the southern gate as he rides toward it. Why is he not finished?",
      options: [
        "The eastern soldiers have come back and rejoined the siege",
        "A different army has been sitting at the southern gate all along, and winning elsewhere did nothing to it",
        "His sword only works once at each gate",
        "Msra-Melik has moved his camp to a new position"
      ],
      correctAnswer: 1,
      explanation: "Two sieges were going on at the same time, run by different men in different places. Ending one does not reach the other. The southern army is exactly where it has been for months."
    },
    {
      type: "story",
      text: "David's sword struck Msra-Melik's shield and split it in two. The general fell, and his army scattered into the hills. By nightfall no enemy stood before either way into Sassoun."
    },
    {
      type: "question",
      domain: "vantage",
      band: "B1",
      grammar_cell: "present_perfect",
      gates: false,
      question: "Bring back the child from the beginning and stand her in the southern gateway that night. What does she see that she has never seen before?",
      options: [
        "Mountains standing above the city",
        "Open ground running away from the gate with nothing camped on it",
        "Her own city walls from the inside",
        "Soldiers moving about in the streets"
      ],
      correctAnswer: 1,
      explanation: "Mountains and walls and soldiers she has seen all her life. The new thing is the emptiness: ground outside the gate with no army sitting on it, which is what nobody in that city had ever looked at."
    },
    {
      type: "story",
      moral: "Sassoun had survived many armies but broken none. It took holding the whole city in mind at once, both gates, to see when it was finally free."
    }
  ]
};

export default davidOfSassoun;
