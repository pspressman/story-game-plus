# STORY LADDER WAVE: L3 and L4
## Second supervised wave for StoryGameNew. Read this whole file before doing anything.

**Authority:** Peter Pressman via AUSPEX. Source design: HARPER "Story-Game Progression Spine v2".
**Repo:** /Users/peterpressman/MyDevelopment/JavaScript/StoryGameNew
**Prerequisite:** the floor (L0, L1, L2) and Wide Sky are already built, validated, wired, and confirmed rendering click-to-screen. The `ladder` module is registered in storyModules.js AND in src/pages/story/[moduleId]/[storyId].js (both getStaticPaths and the getStaticProps switch). Do not re-register it.

This wave does three things: correct one piece of floor metadata, build L3, build L4. Definition of done is render-to-screen, not a passing validator. Read section 8 before you start.

---

## 0. THE GRAMMAR ACCRETION FIX (why this wave starts with a correction)

The original spec listed "all 12 tenses" as online at L1. That was wrong: it puts the hardest tense-aspect forms one rung off the floor and breaks basics-before-complexity. Peter and HARPER have settled it: grammar accretes slowly, one or two forms per level, cumulative, and each level also carries its named structural target (non-finiteness, voice, modality, and so on) as it comes due. All twelve tense-aspect forms are not fully online until L7, which is exactly where the third conditional needs them.

The floor QUESTIONS already stayed modest (e.g. Momotaro only used sequence, past progressive, and past perfect), so no floor question needs rewriting. Only the floor `grammar_online` METADATA over-declared the pool and must be corrected, so that this wave and every wave above reads an honest pool and does not inherit permission to reach too high. That correction is Step 1 below. It touches metadata only.

---

## 1. HARD RULES

1. Additive only for new nodes. For the floor correction, change ONLY the `grammar_online` array; touch nothing else (no question, story beat, explanation, gate flag, or other meta field).
2. Questions must bind the construct. An L3 gating question must make the reader flip the vantage and read the event from the one it happens to. An L4 gating question must make the reader weigh what a character is bound to do against what they are free to do. A question that does not exercise the level's target is wrong content even if it reads fine.
3. Never name the device. The grammar is the target, never the vocabulary. Do not write "passive voice," "modal," "deontic," "obligation case," or any tense name in a question or explanation. Say what happens to whom, or what someone is bound or free to do, in plain words. The validator lints for "passive voice" and "modal verb"; stay clear of all of it.
4. One best answer per gating question. Exactly one correct option, three wrong. No all-options-true "choose the best" items; those are still held for a separate HARPER pass.
5. Build order: floor correction first, then L3, then L4. Validate each level before the next.
6. Run the validator after every batch. Paste output into PROGRESS_LOG.md. Fix hard failures before continuing.
7. Cultural care. Some L3 nodes are Indigenous (Sedna, the Blind Boy and the Loon). These are gated and carry questions, but write them with care and add a short `cultural_care` note, and list them in the handoff for HARPER's review. Do not invent restricted detail; tell the well-attested public version plainly.
8. Definition of done is render-to-screen (section 8). A passing validator is necessary, not sufficient. The last wave reported "ready to render" while three separate breaks blocked the screen. Do not repeat that.

---

## 2. RUN PROTOCOL

### Step 0. Recon (no content yet)
- Read one floor node from each level (e.g. L0/thor-utgard.js, L1/momotaro.js, L2/anansi-moss-rock.js) to reconfirm the extended shape and the exact `grammar_online` arrays currently on disk.
- Read the two exemplars shipped with this brief: example_L3_children-of-lir.js and example_L4_sir-gawain-green-knight.js. They are finished valid nodes; place them as the real L3 and L4 starters rather than rewriting.
- Locate the domain-to-label map in StoryGame.jsx (last wave found it as `visualizationDomains` near line 234 and extended it). You will extend it again in Step 3. Record the path and line in PROGRESS_LOG.md.
- Confirm the story page already handles `ladder` (it should, from the prior fix). You do NOT edit the story page this wave: L3 and L4 nodes flow into the existing ladder master barrel, which getStaticPaths already enumerates.
- Write findings to PROGRESS_LOG.md before proceeding.

### Step 1. Floor grammar_online correction (metadata only)
For every node already on disk at L0, L1, and L2, set `meta.grammar_online` to exactly the accreted array for its level from section 3. Change nothing else in the file. Back up each file you edit (timestamped .bak). After editing a level, re-run the validator on that level to confirm nothing else moved and it still passes. Log before/after counts.

This is a label fix-forward. The questions and gates stay exactly as they are. If you find yourself editing anything other than the grammar_online array, stop; that is out of scope.

### Step 2. Build L3, then L4
- Build the cast in section 5, L3 first.
- Each node uses the accreted grammar_online for its level (section 3), the level's grammar_target and band (section 4), and binds every gating question per section 4. At least one gating question (gates true) per node must exercise the level target. Cumulative gates:false items reaching to lower levels are encouraged for variety.
- Use the new domains in section 6 for the relational questions.
- After L3: run the validator on L3 only, fix hard failures, log. Then the same for L4.

### Step 3. Wire (lighter than the floor; the module plumbing already exists)
- Create ladder/L3/index.js and ladder/L4/index.js barrels (same pattern as the existing level barrels: import each sibling, export an array).
- Add the two new level arrays to the master ladder/index.js: import them and spread them into the single exported array, after wideSkyStories or wherever fits, so the master flattens L0 through L4 plus Wide Sky into one flat array. Back up the master first.
- Extend the `visualizationDomains` map in StoryGame.jsx with the new domains in section 6 (vantage, feeling, obligation). Back up StoryGame.jsx first. If you cannot find or safely extend the map, do NOT guess; restrict L3/L4 question domains to ones already mapped and log the gap.

### Step 4. RENDER GATE (this is the definition of done)
- Restart the dev server (npm run dev). A clean compile here is the barrel parse check the validator cannot do, because the validator skips index.js. If the compile fails on an import line, it is almost certainly an injected-space typo like `import foo bar from`; fix it and restart.
- Open one L3 story and one L4 story click-to-screen in the browser (e.g. /story/ladder/children-of-lir and /story/ladder/sir-gawain-green-knight). Confirm: the page is not a 404, the prose renders, and each question shows a real category header (e.g. "The Other Side", "Must or May"), not a blank or a raw domain string.
- Only after both stories render is this wave done. Record the two URLs you opened and what you saw in MORNING_HANDOFF.md.

### Step 5. Manifest and handoff
- Update _build_ladder/BUILD_MANIFEST.md with every new file and the floor files you corrected.
- Write _build_ladder/WAVE_L3_L4_HANDOFF.md: what shipped, counts, the two render URLs confirmed, any device-naming warnings flagged, any cultural-care nodes for HARPER, anything unresolved, and the proposed next wave (L5 to L6). Do NOT build above L4.

---

## 3. ACCRETION TABLE (grammar_online per level, cumulative)

Set each level's `grammar_online` to exactly the array shown. Each level is the level above plus its additions.

- L0: ["simple_present", "simple_past", "concrete_noun", "locative"]
- L1: L0 + ["past_progressive", "present_perfect", "sequence"]
- L2: L1 + ["simple_future", "past_perfect", "infinitive", "gerund", "participle"]
- L3: L2 + ["present_progressive", "future_progressive", "passive_voice"]
- L4: L3 + ["future_perfect", "deontic_modal"]

Written out in full:
- L0 = simple_present, simple_past, concrete_noun, locative
- L1 = simple_present, simple_past, concrete_noun, locative, past_progressive, present_perfect, sequence
- L2 = simple_present, simple_past, concrete_noun, locative, past_progressive, present_perfect, sequence, simple_future, past_perfect, infinitive, gerund, participle
- L3 = (all L2) + present_progressive, future_progressive, passive_voice
- L4 = (all L3) + future_perfect, deontic_modal

The two exemplars already carry the correct L3 and L4 arrays; copy their grammar_online verbatim for new nodes at those levels.

---

## 4. LEVEL TARGETS AND BANDS (this wave)

- L3. band B3 (the other's feeling, the vantage flip). grammar_target `passive_voice`. Gate: flip the vantage. A gating item makes the reader take the side of the one the event happens to, and the correct option encodes being-acted-upon, or reads the feeling of the character on the receiving end. See example_L3_children-of-lir.js.
- L4. band B4 (the ought, the counterfactual present). grammar_target `deontic_modal`. Gate: weigh must vs may. A gating item sets what a character is free to do against what they are bound to do, and the correct option reads the obligation. See example_L4_sir-gawain-green-knight.js.

---

## 5. THE CAST (build exactly these)

Tier marks: [R] basic, [A] advanced, [O] complex. Quarry means an epic fragment (set source_epic true). (Sh) is Shakespeare: plots only, never raw text, saga "shakespeare", threads ["shakespeare"].

### L3, B3 vantage flip and the other's feeling. Grammar target passive_voice.
- The Children of Lir, Ireland, [R], quarry. WORKED in example_L3_children-of-lir.js.
- Sedna (gentle transformation telling), Inuit, [A]. CULTURAL CARE: write gently, add a cultural_care note, flag for HARPER. The fuller origin is held off the path and is NOT built here.
- Blodeuwedd, Wales, [A], quarry, saga mabinogion.
- Sigurd and the cursed gold, Norse, [A], quarry, saga norse_eddas.
- The Golem of Prague, Jewish/Prague, [A].
- Elijah the wandering stranger, Jewish, [R].
- Pwyll and the Otherworld, Wales, [A], quarry, saga mabinogion.
- Princess Kaguya (the Bamboo Cutter), Japan, [A], quarry.
- The Blind Boy and the Loon, Inuit, [R]. CULTURAL CARE: write gently, add a cultural_care note, flag for HARPER.
- The Winter's Tale (the statue that breathes), [A], saga shakespeare, threads ["shakespeare"].
- The Tempest (the storm, then mercy), [A], saga shakespeare, threads ["shakespeare"]. First seat only; the second seat is L10, not built here.

### L4, B4 the ought. Grammar target deontic_modal.
- Sir Gawain and the Green Knight, Britain, [A], quarry, saga arthur. WORKED in example_L4_sir-gawain-green-knight.js.
- Robin Hood: robbing the rich, justice versus law, England, [R], quarry, saga robin_hood, edges ["outlaw_circling_the_globe"].
- Hong Gildong, Korea, [R].
- Hikayat Hang Tuah (what do you owe a wrong king), Malay, [A], quarry.
- Akbar and Birbal, or Tenali Rama, India, [R].
- Marie de France's Lais (one lai; the said-aloud note that a woman wrote this in 1150), France, [A].
- Antar the warrior-poet, Arabia, [A], quarry, edges ["warrior_poet"].
- The Merchant of Venice: the casket choice, [A], saga shakespeare, threads ["shakespeare"].
- The crown's weight (Richard II or the Henrys), [A], saga shakespeare, threads [{ "type": "history", "inaccuracy_flag": true }]. This is a history play: run it with the inaccuracy flag, and let the explanation gently note that the story bends real kings to fit a stage.

If a story is unfamiliar, write the well-attested public version simply. Do not invent plot or restricted detail.

---

## 6. NEW DOMAINS (extend the label map in StoryGame.jsx)

Add these to the `visualizationDomains` map alongside the existing entries. Suggested display labels:
- `vantage` to "The Other Side"
- `feeling` to "What They Feel"
- `obligation` to "Must or May"

B3 questions use `vantage` and `feeling`. B4 questions use `obligation`. Cumulative gates:false items keep whatever lower-level domain fits (sequence, number, cause, and so on), all of which are already mapped.

---

## 7. CONTROLLED VOCABULARY ADDITIONS

New saga slug this wave: mabinogion. Existing in use: arthur, robin_hood, shakespeare, norse_eddas.
New edge slug this wave: warrior_poet.
New regions if needed: the cast fits existing buckets (British Isles, Western Europe, Mediterranean, North Africa and Arabia, East Asia, Southeast Asia, North America). Add only if a culture genuinely has no bucket.
History thread shape: threads: [{ "type": "history", "inaccuracy_flag": true }].

---

## 8. DEFINITION OF DONE (read again before you claim completion)

The prior wave passed the validator 33/33 and was reported "fully wired and ready to render," yet three things blocked the screen: an injected-space typo in a barrel (the validator skips barrels, so it never caught it), a hardcoded four-module getStaticPaths that 404'd every ladder URL, and a matching switch gap. That is FM-4 in the standing doc: scaffolding without a traced execution path.

So for this wave, "done" means ALL of:
1. Validator passes on L3 and L4 (and the floor still passes after the metadata correction).
2. The dev server compiles clean (this is the barrel parse proof the validator cannot give).
3. One L3 story and one L4 story actually open click-to-screen, render their prose, and show real question headers, not 404s and not blanks.

Write the two URLs you opened into the handoff. If you cannot open them, the wave is not done, no matter what the validator says. Do not claim "ready to render." Either it rendered for you, or it did not.

---

## 9. END-OF-WAVE SELF-CHECK (write into the handoff)

- Did every L3 gating question actually flip the vantage, and every L4 gating question actually weigh must against may? If you reframed a question to make it fit, flag it; that is the signal it was wrong.
- Did the floor correction touch only grammar_online? Confirm by diffing one corrected file against its .bak.
- Did the validator pass on the floor after correction and on L3 and L4? Paste counts.
- List every device-naming warning and every cultural-care node for HARPER.
- State the two render URLs you confirmed. "Shipped" means it opened on screen, not that it is in a barrel.
