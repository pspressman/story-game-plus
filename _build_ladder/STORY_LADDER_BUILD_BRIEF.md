# STORY LADDER BUILD BRIEF
## Overnight content run for StoryGameNew. Read this whole file before doing anything.

**Authority:** Peter Pressman via AUSPEX. Source design: HARPER "Story-Game Progression Spine v2".
**Repo:** /Users/peterpressman/MyDevelopment/JavaScript/StoryGameNew
**Job tonight:** write story content. Do NOT build the gating engine. Do NOT build locks. Labels and construct-bound questions only.

---

## 0. WHAT THIS IS

The game teaches inference by visualization. A story is a `content[]` array the player walks: prose beats (`type:"story"`) interleaved with 4-option questions (`type:"question"`) that can only be answered by a reader who pictured the scene. tortoise-hare.js is the canonical shape and is not to be changed.

HARPER built a curriculum on top of this: a ladder of levels 0 to 10, each level defined by the grammar online plus the relational band in scope. We are extending the existing node shape additively so this content renders today and carries the metadata a future engine will gate on. We are not refactoring the player.

Tonight you build the FLOOR (L0, L1, L2), the existing Aesop set, and the Wide Sky stories. Then you STOP and hand off. Higher levels come in later supervised waves.

---

## 1. HARD RULES (violating any of these wastes the night)

1. Additive only. Add fields. Never remove or rename an existing field. The renderer ignores fields it does not know, so new metadata is safe.
2. Questions must bind the construct. A question that does not exercise the node's grammar and relational band is wrong content even if it reads fine. Looks-right-tests-nothing is the failure this run exists to prevent.
3. Never name the device. The grammar is the target, never the vocabulary. "What is he really drinking from?" is valid. "What is the past tense of drink?" is disqualified. No question or explanation may contain grammar metalanguage (tense names, "passive", "subjunctive", "infinitive", "gerund", "participle", "modal", "conditional", "reported speech", "grammar", "part of speech").
4. One best answer per gating question. Tonight every gating question has exactly one correct option and three wrong ones. Do NOT write all-options-true "choose the best" items. Those are held for a separate HARPER pass. If you find yourself making three options also true, stop and make them wrong.
5. Wide Sky is not quizzed. Wide Sky stories are met, pictured, never scored. Only one Wide Sky story carries questions: Tiddalik the Frog (openly shared, fable-shaped). Every other Wide Sky story has zero question blocks. Cultural-care stories carry no questions, period.
6. No skipping levels in your build order. Aesop first, then L0, then L1, then L2, then Wide Sky. Validate each batch before the next.
7. Run the validator after every batch. Paste its output into PROGRESS_LOG.md. If it reports hard failures, fix them before continuing. Do not report a batch done unless the validator passes on it.
8. No hardcoded dates in code. Dated strings only in filenames you write to disk (manifest, log).
9. Before overwriting any existing file (aesop/index.js, storyModules.js, any component), copy it to a timestamped .bak first.
10. Verify against the real files. Read tortoise-hare.js, the aesop index, storyModules.js, and the question-rendering component from the live repo before generating. Memory of the shape is not the shape.

---

## 2. RUN PROTOCOL (execute in order)

### Step 0. Recon (no content yet)
- Read `src/data/stories/aesop/tortoise-hare.js`. Confirm the node shape and the exact field names (`correctAnswer` is 0-indexed; keep it).
- Read `src/data/stories/aesop/index.js` and `src/data/storyModules.js`. Confirm the barrel-export pattern and the switch-based loader.
- `ls` the aesop directory. List which files the index imports versus which actually exist on disk.
- Find the React component that renders a question block and locate how the `domain` string becomes the on-screen category header (the live site shows domain `mood` as the header "Emotional Context"). Record the file path and the exact mapping in PROGRESS_LOG.md.
- Decision gate on domains: if a domain-to-label map is found and is a plain object, you may extend it (back it up first) to cover the new domains in section 4. If you cannot find it or its shape is unclear, do NOT guess. Restrict tonight's questions to the four proven domains only (mood, where, number, color), express the bands through those four, and log that the richer domains are blocked pending Peter.
- Find where module `color` strings (blue, purple, amber, green) map to styles. Pick a safe existing color for the new module. Default to green if unsure.

Write everything you found to `_build_ladder/PROGRESS_LOG.md` before proceeding.

### Step 1. Aesop warm-up (zero schema risk, guaranteed value)
- These eight Aesop fables ALREADY EXIST on disk and in the index. Do NOT regenerate any of them. Confirm by `ls` of the aesop directory before writing anything:
  tortoise-hare, fox-crow, ant-grasshopper, boy-who-cried-wolf, goose-golden-eggs, lion-mouse, country-mouse-city-mouse, wind-sun.
- The rule from Peter: do not duplicate a PLOT. Repeated morals are fine; repeated stories are not. None of the eight plots above may be rewritten under any title.
- Add up to 12 NEW Aesop fables with distinct plots, in the exact tortoise-hare format (4 visualization questions across domains mood/where/number/color, one moral block). No `meta` block required for Aesop. Draw from, for example: the Fox and the Grapes, the Crow and the Pitcher, the Milkmaid and her Pail, the Fox and the Stork, the Frogs Who Wanted a King, the Bundle of Sticks, Belling the Cat, the Ass in the Lion's Skin, the Dog in the Manger, the Two Pots, the Boy and the Filberts, the Tortoise and the Eagle, the Wolf in Sheep's Clothing.
- Guard before writing each new file: confirm the new id is not one of the eight existing ids and that no file of that id already exists on disk. Skip if it does.
- Update `aesop/index.js` literally (one import line plus one array entry per new story; back up the index first).
- Run the validator in light mode on aesop. Log results.
- Checkpoint: do not proceed until aesop validates.

### Step 2. Ladder floor L0, then L1, then L2
- Build the cast in section 5, one level at a time, lowest first.
- Each node uses the extended shape in section 3. Each gating question binds grammar_cell plus band per section 4 and the level's targets in section 6.
- Each gated node must contain at least one question with `gates: true` (it exercises that level's grammar_target). Cumulative questions that reach back to an easier move are allowed and carry `gates: false`.
- After each level: run the validator on that level only. Fix hard failures. Log.

### Step 3. Wide Sky batch
- Build the four seated Wide Sky stories (section 5). Kumulipo, Rainbow Serpent, Seven Sisters are story-only with `untestable: true` and a `cultural_care` note. Tiddalik is story-plus-visualization-questions (the only Wide Sky node with questions; all `gates: false`).
- Encourage picturing in the prose itself and carry an engage-not-score prompt in `meta.visualize_prompt`. Never add a `type:"question"` block to a cultural-care story.
- Run the validator. Log.

### Step 4. Wire and stop
- Create the level barrels (`ladder/L0/index.js` etc.) and the master `ladder/index.js` that aggregates all built nodes into one array.
- Register a new module in storyModules.js: placeholder key `ladder`, name "The Ladder" (Peter will rename), a safe existing color, and a `case 'ladder'` in the loader importing `../data/stories/ladder`. Back up storyModules.js first.
- Update `_build_ladder/BUILD_MANIFEST.md` (every file, its level/track/culture/saga, validator status).
- Write `_build_ladder/MORNING_HANDOFF.md`: what shipped, counts by level and track, any device-naming warnings the validator flagged for review, anything you could not resolve, and the proposed next wave (L3 up). Do NOT build above L2.

---

## 3. THE EXTENDED NODE SHAPE

Keep every existing header field (id, title, icon, difficulty, theme, estimatedTime, description, content). Add a `meta` block. See `_node_template.js` for the literal template and `example_*.js` for filled exemplars.

```
meta: {
  level: 0,                 // integer 0..10 for gated nodes; null for wide_sky and canopy
  track: "gated",           // "gated" | "wide_sky" | "canopy"
  tier: "R",                // "R" | "A" | "O" for gated; null otherwise
  band: "B0",               // node's primary relational band B0..B8; null for wide_sky
  grammar_online: [ ... ],  // cumulative grammar available at this level (strings)
  grammar_target: "...",    // the grammar this level gates on
  culture: "Norse",         // specific culture
  region: "Northern Europe",// coarse bucket from section 7
  saga: null,               // epic/cycle slug (section 7) or null
  source_epic: true,        // true if this node is a fragment of a larger epic (HARPER's quarry mark)
  threads: [],              // e.g. ["shakespeare"] or [{ type:"history", inaccuracy_flag:true }]
  edges: [],                // B8 cross-cultural grouping slugs, e.g. ["trickster_many_faces"]
  cultural_care: null,      // string note or null
  untestable: false,        // true for wide_sky and canopy
  visualize_prompt: null    // engage-not-score prompt; used by future engine; null if none
}
```

`difficulty` (existing string field) is now a DERIVED display label, not the truth. `level` is the truth. Set `difficulty` from level:
L0 to L1 "Beginner", L2 to L3 "Easy", L4 to L5 "Medium", L6 to L7 "Hard", L8 to L9 "Advanced", L10 "Master". Wide Sky and canopy: "Story".

Each `type:"question"` block keeps its existing fields and adds three:

```
{
  type: "question",
  domain: "where",          // display category, section 4
  band: "B0",               // relational band this item exercises, B0..B8
  grammar_cell: "locative", // the specific grammatical form exercised, section 4
  gates: true,              // true iff it exercises this node's grammar_target
  question: "...",
  options: [ "...", "...", "...", "..." ],
  correctAnswer: 1,         // 0-indexed
  explanation: "..."        // explains the inference; never names the device
}
```

---

## 4. DOMAINS, BANDS, GRAMMAR CELLS (floor scope)

`domain` is the human-facing category header. `band` is the formal relational construct. `grammar_cell` is the grammatical form. A question carries all three.

Floor domains (extend the label map in recon, or fall back to the first four):
- B0 percept: `where`, `color`, `number`, `mood`  (the four proven domains)
- B1 event and cause: `sequence`, `cause`
- B2 one other mind: `other_mind`, `intent`, `irony`

Suggested display labels for the new domains (register these if you extend the map): sequence to "Order of Events", cause to "Cause and Effect", other_mind to "Another's Mind", intent to "Hidden Intent", irony to "What They Don't Know".

Floor grammar_cell values (use the form the option actually turns on):
- L0: `simple_present`, `simple_past`, `concrete_noun`, `locative`
- L1: any of the 12 tense-aspect forms, e.g. `simple_past`, `present_perfect`, `past_perfect`, `past_progressive`; plus `sequence`
- L2: `infinitive`, `gerund`, `participle` (the non-finite forms)

The four richest items still differ by grammatical realization: the options are competing renderings, and the correct one is the form that both fits the scene and encodes the inferred state. The reader is choosing the sentence that fits, not labeling the form.

---

## 5. THE FLOOR CAST AND WIDE SKY (build exactly these tonight)

Tier marks: [R] basic, [A] advanced, [O] complex. Quarry mark means it is an epic fragment (set source_epic true).

### L0, B0 percept (grammar: simple tense, concrete noun, locative). Gate: picture the thing right.
- Thor at Utgard, Norse, [R], quarry, saga norse_eddas. WORKED in example_L0_thor-utgard.js.
- St. Brendan and the whale-island, Ireland, [R], quarry.
- Curupira, Amazon, [R].
- The Salmon of Knowledge, Ireland, [R], quarry.
- Jataka Tales (one fable), Buddhist, [R].
- Raven Steals the Sun, Haida/Tlingit, [R].
- Kalila wa Dimna (one fable), Arabic/Persian, [R].

### L1, B1 event and cause (grammar: all 12 tenses, sequence). Gate: order events, hold ongoing-vs-done.
- The Sword in the Stone, Britain, [R], quarry, saga arthur. WORKED in example_L1_sword-in-the-stone.js.
- Sinbad's first voyage, Arabic, [R], quarry, saga sinbad.
- Momotaro, Japan, [R].
- Maui fishes up the islands, Polynesia, [R], quarry.
- Manco Capac and Mama Ocllo, Inca, [R].
- Ranginui and Papatuanuku, Maori, [R]. Keep the discrete-event telling here (it brushes the Wide Sky but stays a sequence node).
- Biag ni Lam-ang, Philippines, [R], quarry.
- Beowulf and Grendel, Old English, [A], quarry, saga beowulf.
- Vainamoinen, Finland, [R], quarry, saga kalevala.
- The Simurgh raises Zal, Persia, [R], quarry, saga shahnameh.
- David of Sassoun, Armenia, [R], quarry.
- A Midsummer Night's Dream (the lovers' chase and donkey-headed Bottom; plant the play-within as the lights-on nesting that L9 will call back to), [R], saga shakespeare, threads ["shakespeare"]. Plots only, no raw Shakespeare text.

### L2, B2 one other mind (grammar: non-finiteness). Gate: read the trick.
- Anansi and the Moss-Covered Rock, Akan, [R], edges ["trickster_many_faces"]. WORKED in example_L2_anansi-moss-rock.js.
- Mullah Nasruddin (one tale), Sufi/Turkic, [R], edges ["one_fool_many_hats"].
- Hershele Ostropoler (one tale), Yiddish, [R].
- Ijapa the Tortoise (one tale), Yoruba, [R], edges ["trickster_many_faces"].
- Glooscap or Nanabozho (one tale), Wabanaki/Anishinaabe, [R], edges ["trickster_many_faces"].
- The Theft of Thor's Hammer, Norse, [R], quarry, saga norse_eddas.
- Monkey's Havoc in Heaven, China, [R], quarry, saga journey_to_the_west.
- Puss in Boots, European, [R].
- Hanuman leaps the ocean, India, [R], quarry, saga ramayana.
- Reynard the Fox (one tale), France, [R], edges ["trickster_many_faces"].
- Robin Hood: the disguise and the archery contest, England, [R], quarry, saga robin_hood, edges ["outlaw_circling_the_globe"].

If a story is unfamiliar, write the well-attested public version simply. Do not invent plot.

### Wide Sky (untestable, encounter-only)
- The Kumulipo, Hawaiian, cultural_care, story-only. WORKED in example_wide-sky_kumulipo.js.
- Tiddalik the Frog, Aboriginal Australian, openly shared, story-PLUS-visualization-questions (gates false). WORKED in example_wide-sky_tiddalik.js.
- The Rainbow Serpent, Aboriginal Australian, cultural_care, story-only.
- The Seven Sisters, Aboriginal Australian, cultural_care, story-only.

Do NOT build tonight (deferred forks Peter and HARPER will resolve): the Polynesian Wayfinders (maybe Wide Sky, maybe a gated L1 node), and any canopy "held beside the path" stories (Peacemaker and the Great League, Sedna's origin). Note them in MORNING_HANDOFF.md, do not create them.

---

## 6. LEVEL TARGETS (floor)

The gate counts a question only if it exercises the level target. Put at least one such question (gates true) in every gated node.

- L0 target: picture the concrete thing in place. grammar_target `locative` (with simple tense and concrete noun online). A gating item turns on where a thing is or what it really is, pictured.
- L1 target: order events and hold ongoing-vs-done. grammar_target `sequence_and_aspect`. A gating item turns on what happened before what, or what has already happened versus what is still going on.
- L2 target: read the trick, one other mind. grammar_target `non_finite`. A gating item turns on someone's hidden intent or a second character's read of it, with the stem turning on a non-finite form (to do, doing, having done).

---

## 7. CONTROLLED VOCABULARIES

Region buckets: Northern Europe, British Isles, Western Europe, Mediterranean, Caucasus, North Africa and Arabia, West Africa, East and Central Africa, Persia and Central Asia, South Asia, East Asia, Southeast Asia, Polynesia, Australia, North America, Mesoamerica, South America.

Saga slugs (lowercase snake_case, add as needed): arthur, robin_hood, shakespeare, norse_eddas, beowulf, kalevala, shahnameh, ramayana, journey_to_the_west, sinbad, popol_vuh, three_kingdoms.

Edge slugs (B8 groupings, lowercase snake_case): trickster_many_faces, one_fool_many_hats, outlaw_circling_the_globe.

Tags are flat. None of them is a folder. Files live in level directories only; culture, saga, region, edges are queryable labels a future browse view filters on. A reader clicks Robin Hood or Norse or Shakespeare wherever they are; level rides on the node, so the order holds inside any collection.

---

## 8. DIRECTORY PLAN

```
src/data/stories/ladder/
  L0/  <node>.js ...  index.js
  L1/  <node>.js ...  index.js
  L2/  <node>.js ...  index.js
  wide-sky/  <node>.js ...  index.js
  index.js          aggregates all built nodes into one default-exported array
_build_ladder/
  PROGRESS_LOG.md
  BUILD_MANIFEST.md
  MORNING_HANDOFF.md
  validate_ladder.mjs   (placed from the handoff package)
```

Node filenames: kebab-case of the id, e.g. `thor-utgard.js`. Each barrel imports its siblings and exports an array, same pattern as aesop/index.js.

---

## 9. VALIDATOR

`validate_ladder.mjs` is in this package. Place it at `_build_ladder/validate_ladder.mjs`. Run from repo root:

```
node _build_ladder/validate_ladder.mjs src/data/stories/ladder
```

It loads each node file (skipping index.js barrels), and hard-fails on: missing id/title/content; non-unique or non-kebab id; options not length 4; correctAnswer out of range; gated node missing level/band/grammar_target/grammar_online/tier/culture/region; gated question missing band/grammar_cell/gates; gated node with no gates-true question; wide_sky node carrying questions when its id is not tiddalik; wide_sky node not marked untestable; cultural_care sacred node missing its care note. It warns (does not fail) when a question stem or explanation contains grammar metalanguage (the never-name-the-device lint). Pipe the output into PROGRESS_LOG.md after each batch.

A passing validator is not proof the questions bind the construct. That is your judgment per rule 2. The validator catches shape and the device-naming lint only.

---

## 10. END-OF-RUN SELF-CHECK (write into MORNING_HANDOFF.md)

- Did any question fail to bind its band and grammar_cell? If you reframed a question to make it fit, that is the signal it was wrong; flag it, do not ship it quietly.
- Did the validator pass on every batch? Paste the final counts.
- List every device-naming warning so HARPER can review the wording.
- State plainly what shipped (renders today) versus what is only labeled. "Shipped" means it is in a barrel and the module loads it.
- Do not claim the floor is complete unless the master ladder index imports it and storyModules registers the module.
