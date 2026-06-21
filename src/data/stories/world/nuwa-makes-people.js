// Chinese mythology story for visualization-based reading comprehension
const nuwaMakesPeople = {
  id: "nuwa-makes-people",
  title: "Nuwa Makes People",
  icon: "👥",
  difficulty: "Easy",
  theme: "Creativity",
  estimatedTime: "6-10 min",
  description: "The goddess Nuwa feels lonely in the empty world and creates the first humans from clay.",
  content: [
    {
      type: "story",
      text: "After Pangu created the world, it was beautiful but very quiet and lonely. The goddess Nuwa had the head and arms of a woman but the long, winding body of a snake. She slithered through the empty forests and across the silent mountains, wishing for company."
    },
    {
      type: "question",
      domain: "what",
      question: "If you watched Nuwa move through the forest, what kind of trail would she leave behind on soft ground?",
      options: [
        "A trail of muddy footprints from two feet",
        "A wide, winding groove from a long body dragging along the earth",
        "No trail at all, since she floats above the ground",
        "A row of hoofprints like a horse would leave"
      ],
      correctAnswer: 1,
      explanation: "Because Nuwa has the long, winding body of a snake, you can infer she would slither and leave a wide, winding groove in soft ground rather than footprints."
    },
    {
      type: "story",
      text: "One day, Nuwa came to a peaceful river. She looked at her reflection in the clear water and had a wonderful idea. 'I will make companions who look like me!' she said. She scooped up yellow clay from the riverbank and began to shape it with her hands."
    },
    {
      type: "question",
      domain: "color",
      question: "When Nuwa looked at her reflection in the river to use as a model, what color would the finished clay figures most likely appear?",
      options: [
        "Bright blue like the river water",
        "Pale white like river foam",
        "A warm yellowish-brown tone similar to the clay",
        "Bright green like river moss"
      ],
      correctAnswer: 2,
      explanation: "Since the figures were shaped from clay and never described as being painted or changed, you can infer they would retain the warm yellowish-brown color of the clay they were made from."
    },
    {
      type: "story",
      text: "Nuwa carefully molded the clay into a small figure with two arms, two legs, and a head. When she breathed on it, the clay figure came to life! It stood up, smiled at Nuwa, and began to talk and laugh. Nuwa was so happy to have a friend."
    },
    {
      type: "question",
      domain: "movement",
      question: "Just before the clay figure came to life, how would its surface most likely feel if you could touch it?",
      options: [
        "Warm and soft like skin",
        "Cold, damp, and firm like shaped clay",
        "Rough and dry like crumbling rock",
        "Slippery and wet like river water"
      ],
      correctAnswer: 1,
      explanation: "The figure had just been shaped from riverbank clay, so before Nuwa breathed life into it, you can infer it would still feel cold, damp, and firm the way freshly worked clay does."
    },
    {
      type: "story",
      text: "Nuwa loved her new companion so much that she decided to make more. She worked all day, carefully shaping each clay figure by hand. But making people one by one was very slow work, and Nuwa wanted to fill the whole world with laughter and friendship."
    },
    {
      type: "question",
      domain: "mood",
      question: "As the hours passed and Nuwa kept shaping figures one by one, what would her hands most likely look and feel like?",
      options: [
        "Clean and dry, because clay does not stick to a goddess",
        "Caked with clay and aching from the long, careful work",
        "Glowing with magical light that melted the clay instantly",
        "Completely still, because she used only her breath to shape the figures"
      ],
      correctAnswer: 1,
      explanation: "Working all day pressing and shaping wet clay by hand would coat her hands in clay and cause them to tire and ache, even though neither detail is stated directly in the story."
    },
    {
      type: "story",
      text: "Then Nuwa had a clever idea. She found a long vine and dipped it into a pool of clay mud. When she lifted the vine and flicked it through the air, drops of clay flew everywhere. Each drop that landed became a new person!"
    },
    {
      type: "question",
      domain: "shape",
      question: "When Nuwa flicked the vine through the air, what shape would the clay drops most likely be as they flew?",
      options: [
        "Perfect cubes with sharp flat edges",
        "Tiny irregular blobs stretched by the speed of flight",
        "Flat discs spinning like coins",
        "Long straight rods like pencils"
      ],
      correctAnswer: 1,
      explanation: "Clay flung from a vine at speed would be pulled and stretched by the air into small, uneven blobs rather than any neat geometric shape, even though the story never describes their form."
    },
    {
      type: "story",
      text: "Soon the world was filled with people of all sizes. The ones Nuwa had made carefully by hand became nobles and leaders. The ones made from the flying clay drops became farmers, builders, and craftspeople. All of them brought joy and life to the once-silent world."
    },
    {
      type: "question",
      domain: "number",
      question: "If you could compare the number of people made by hand to those made by the flicked vine, which group would most likely be larger?",
      options: [
        "The hand-shaped group, because Nuwa worked harder on them",
        "Both groups would be exactly the same size",
        "The vine-flicked group, because each flick sent countless drops flying at once",
        "Neither group, because they all disappeared afterward"
      ],
      correctAnswer: 2,
      explanation: "You can infer that flicking a vine once sent many drops flying in all directions, creating far more people at a time than Nuwa could shape one by one with her hands."
    },
    {
      type: "story",
      moral: "Nuwa's story shows us that creativity and hard work can bring joy to the world. When we make something with love and care, it can bring happiness to many people."
    }
  ]
};

export default nuwaMakesPeople;