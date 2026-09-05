// tempest-storm-mercy.js (reshaped to canonical schema 2026-06-24T14-18-32-732Z)
const story = {
  "id": "tempest-storm-mercy",
  "title": "The Tempest",
  "icon": "📖",
  "difficulty": "Medium",
  "theme": "The storm was raised, then the mercy was chosen",
  "estimatedTime": "5-10 min",
  "description": "Prospero calls a storm to wreck his enemies on his island. By the end, he must decide whether to take revenge or grant mercy.",
  "meta": {
    "level": 3,
    "track": "gated",
    "tier": "A",
    "band": "B3",
    "grammar_online": [
      "simple_present",
      "simple_past",
      "concrete_noun",
      "locative",
      "past_progressive",
      "present_perfect",
      "sequence",
      "simple_future",
      "past_perfect",
      "infinitive",
      "gerund",
      "participle",
      "present_progressive",
      "future_progressive",
      "passive_voice"
    ],
    "grammar_target": "passive_voice",
    "culture": "England",
    "region": "British Isles",
    "saga": "shakespeare",
    "source_epic": false,
    "threads": [
      "shakespeare"
    ],
    "edges": [],
    "cultural_care": null,
    "untestable": false,
    "visualize_prompt": null
  },
  "content": [
    {
      "type": "beat",
      "text": "Prospero lived on an island with his daughter Miranda. Twelve years before, he had been Duke of Milan. But his brother Antonio stole the throne and set Prospero and the baby Miranda adrift in a small boat."
    },
    {
      "type": "beat",
      "text": "Prospero survived. He learned magic from his books. Now he lived on the island with Miranda, a spirit named Ariel, and a creature named Caliban."
    },
    {
      "type": "question",
      "domain": "sequence",
      "band": "B1",
      "grammar_cell": "simple_past",
      "gates": false,
      "question": null,
      "options": [
        "Antonio stole the throne.",
        "Prospero learned magic.",
        "Prospero called a storm.",
        "Miranda met Ferdinand."
      ],
      "correctAnswer": 0,
      "explanation": "Antonio stole the throne twelve years ago, before everything else."
    },
    {
      "type": "beat",
      "text": "One day Prospero saw a ship sailing near the island. His enemies were on board: Antonio, the King of Naples, and the king's son Ferdinand. Prospero raised a great storm with his magic."
    },
    {
      "type": "beat",
      "text": "The ship was wrecked. The passengers were thrown into the sea. But Ariel made sure no one drowned. The people were scattered across the island in small groups."
    },
    {
      "type": "question",
      "domain": "vantage",
      "band": "B3",
      "grammar_cell": "passive_voice",
      "gates": true,
      "question": null,
      "options": [
        "They were thrown into the water and separated from each other.",
        "They threw themselves overboard to escape the flames.",
        "They raised the sails and tried to steer through the waves.",
        "They called for Prospero to stop the wind."
      ],
      "correctAnswer": 0,
      "explanation": "The storm happened to them. They were thrown and scattered by forces outside their control."
    },
    {
      "type": "beat",
      "text": "Ferdinand washed up alone. He thought everyone else had died. Miranda saw him and fell in love at once. Ferdinand loved her too. But Prospero pretended to be angry and made Ferdinand work as a servant."
    },
    {
      "type": "question",
      "domain": "feeling",
      "band": "B3",
      "grammar_cell": "passive_voice",
      "gates": true,
      "question": null,
      "options": [
        "He was treated like a prisoner, but he bore it for Miranda's sake.",
        "He treated Prospero like a servant in return.",
        "He felt proud to show his strength to Miranda.",
        "He complained loudly until Prospero released him."
      ],
      "correctAnswer": 0,
      "explanation": "Ferdinand was being acted upon—treated as a prisoner—but he accepted it because he loved Miranda."
    },
    {
      "type": "beat",
      "text": "Meanwhile, Antonio and the king wandered the island. Ariel led them in circles and made them tired and confused. Caliban met two sailors and plotted with them to kill Prospero and take the island."
    },
    {
      "type": "question",
      "domain": "cause",
      "band": "B2",
      "grammar_cell": "simple_past",
      "gates": false,
      "question": null,
      "options": [
        "Ariel used magic to confuse them.",
        "They followed Caliban into the forest.",
        "The storm destroyed all the paths.",
        "They were looking for Ferdinand."
      ],
      "correctAnswer": 0,
      "explanation": "Ariel led them in circles on purpose. His magic made them confused."
    },
    {
      "type": "beat",
      "text": "At last Prospero gathered all his enemies in one place. He revealed himself. Antonio and the king were shocked and afraid. Prospero had the power to punish them or even kill them."
    },
    {
      "type": "beat",
      "text": "But Prospero chose mercy. He forgave his brother. He freed Ariel from service. He blessed the marriage of Ferdinand and Miranda. Then he broke his magic staff and threw his books into the sea."
    },
    {
      "type": "question",
      "domain": "vantage",
      "band": "B3",
      "grammar_cell": "passive_voice",
      "gates": true,
      "question": null,
      "options": [
        "They were forgiven instead of punished.",
        "They forgave Prospero for using magic against them.",
        "They punished Caliban for plotting against Prospero.",
        "They begged Ferdinand to forgive them."
      ],
      "correctAnswer": 0,
      "explanation": "They were the ones acted upon. Mercy was given to them by Prospero."
    },
    {
      "type": "question",
      "domain": "feeling",
      "band": "B3",
      "grammar_cell": "passive_voice",
      "gates": true,
      "question": null,
      "options": [
        "He was freed from a long service and could finally go.",
        "He freed Prospero from the burden of magic.",
        "He felt sad to leave Miranda and Ferdinand.",
        "He wanted to stay and serve the new duke."
      ],
      "correctAnswer": 0,
      "explanation": "Ariel was being released. Freedom was given to him after years of service."
    },
    {
      "type": "beat",
      "text": "Everyone sailed back to Italy together. Ferdinand and Miranda would marry. Antonio gave back the dukedom. The storm that began in anger ended in forgiveness."
    },
    {
      "type": "question",
      "domain": "vantage",
      "band": "B3",
      "grammar_cell": "passive_voice",
      "gates": true,
      "question": null,
      "options": [
        "It was restored to Prospero by Antonio.",
        "Prospero restored it to the King of Naples.",
        "Ferdinand inherited it when he married Miranda.",
        "Antonio kept it as a gift from his brother."
      ],
      "correctAnswer": 0,
      "explanation": "The dukedom was given back. It was returned to Prospero by the one who had taken it."
    },
    {
      "type": "moral",
      "text": "Mercy is stronger than revenge. The power to forgive heals more than the power to punish."
    }
  ]
};

export default story;
