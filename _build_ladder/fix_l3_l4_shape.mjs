// fix_l3_l4_shape.mjs
// Run from the repo root: node _build_ladder/fix_l3_l4_shape.mjs
// Deterministically reshapes every L3 and L4 node file into the canonical schema the
// validator and renderer expect. Backs up each file first. Derives a question's
// explanation from its feedback array when present; flags any question left with no
// explanation (these need a content pass, not a guess). Regenerates the L3 and L4 barrels.
// Idempotent: safe to run twice. Skips the two exemplars, which are already correct.

import { readFile, writeFile, readdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const REPO = process.cwd();
const LADDER = join(REPO, "src/data/stories/ladder");
const LEVELS = [ { dir: "L3", level: 3 }, { dir: "L4", level: 4 } ];
const SKIP_TRANSFORM = new Set(["index.js", "children-of-lir.js", "sir-gawain-green-knight.js"]);

const GRAMMAR_ONLINE = {
  3: ["simple_present","simple_past","concrete_noun","locative","past_progressive","present_perfect","sequence","simple_future","past_perfect","infinitive","gerund","participle","present_progressive","future_progressive","passive_voice"],
  4: ["simple_present","simple_past","concrete_noun","locative","past_progressive","present_perfect","sequence","simple_future","past_perfect","infinitive","gerund","participle","present_progressive","future_progressive","passive_voice","future_perfect","deontic_modal"]
};
const GRAMMAR_TARGET = { 3: "passive_voice", 4: "deontic_modal" };

const ts = new Date().toISOString().replace(/[:.]/g, "-");
const missingExplanations = [];
const unknownShapes = [];
const transformed = [];

function pick(node, key) {
  return node.meta && node.meta[key] !== undefined ? node.meta[key] : node[key];
}

async function loadDefault(file) {
  const src = await readFile(file, "utf8");
  const url = "data:text/javascript;charset=utf-8;base64," + Buffer.from(src, "utf8").toString("base64");
  const mod = await import(url);
  return mod.default;
}

function normalizeQuestion(q, fileName, idx) {
  const question = q.question ?? q.stem ?? q.text ?? null;
  let options = null;
  let correctAnswer = null;
  if (Array.isArray(q.options)) {
    if (q.options.length && typeof q.options[0] === "object") {
      options = q.options.map(o => o.text);
      correctAnswer = q.options.findIndex(o => o.correct === true);
    } else {
      options = q.options.slice();
    }
  }
  if (correctAnswer === null || correctAnswer === -1) {
    if (typeof q.correctAnswer === "number") correctAnswer = q.correctAnswer;
    else if (typeof q.correct === "number") correctAnswer = q.correct;
  }
  let explanation = q.explanation ?? null;
  if (!explanation && Array.isArray(q.feedback) && typeof correctAnswer === "number") {
    explanation = q.feedback[correctAnswer] ?? null;
  }
  if (!explanation) {
    missingExplanations.push(`${fileName} q${idx + 1}`);
    explanation = "";
  }
  if (question === null || options === null || correctAnswer === null) {
    unknownShapes.push(`${fileName} q${idx + 1}`);
  }
  return {
    type: "question",
    domain: q.domain ?? null,
    band: q.band ?? null,
    grammar_cell: q.grammar_cell ?? null,
    gates: typeof q.gates === "boolean" ? q.gates : false,
    question,
    options,
    correctAnswer,
    explanation
  };
}

function rebuild(node, level, fileName) {
  const meta = {
    level,
    track: "gated",
    tier: pick(node, "tier") ?? null,
    band: pick(node, "band") ?? null,
    grammar_online: GRAMMAR_ONLINE[level],
    grammar_target: GRAMMAR_TARGET[level],
    culture: pick(node, "culture") ?? null,
    region: pick(node, "region") ?? null,
    saga: pick(node, "saga") ?? null,
    source_epic: pick(node, "source_epic") ?? false,
    threads: pick(node, "threads") ?? [],
    edges: pick(node, "edges") ?? [],
    cultural_care: pick(node, "cultural_care") ?? null,
    untestable: false,
    visualize_prompt: pick(node, "visualize_prompt") ?? null
  };
  let qn = 0;
  const content = (node.content || []).map(b =>
    b && b.type === "question" ? normalizeQuestion(b, fileName, qn++) : b
  );
  return {
    id: node.id,
    title: node.title,
    icon: node.icon ?? "\ud83d\udcd6",
    difficulty: node.difficulty ?? "Medium",
    theme: node.theme ?? "",
    estimatedTime: node.estimatedTime ?? "5-10 min",
    description: node.description ?? "",
    meta,
    content
  };
}

function toCamel(base) {
  return base.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

async function processLevel({ dir, level }) {
  const dpath = join(LADDER, dir);
  let files;
  try { files = await readdir(dpath); }
  catch { console.log(`skip ${dir} (not found)`); return; }
  const nodeFiles = files.filter(f => f.endsWith(".js") && f !== "index.js");
  const barrelEntries = [];
  for (const f of nodeFiles) {
    const fpath = join(dpath, f);
    const base = f.replace(/\.js$/, "");
    barrelEntries.push({ varName: toCamel(base), base });
    if (SKIP_TRANSFORM.has(f)) continue;
    let node;
    try { node = await loadDefault(fpath); }
    catch (e) { unknownShapes.push(`${f} (import error: ${e.message})`); continue; }
    await copyFile(fpath, `${fpath}.bak-${ts}`);
    const rebuilt = rebuild(node, level, f);
    const out = `// ${f} (reshaped to canonical schema ${ts})\nconst story = ${JSON.stringify(rebuilt, null, 2)};\n\nexport default story;\n`;
    await writeFile(fpath, out, "utf8");
    transformed.push(f);
  }
  const imports = barrelEntries.map(e => `import ${e.varName} from './${e.base}';`).join("\n");
  const arr = barrelEntries.map(e => `  ${e.varName}`).join(",\n");
  const varName = dir.toLowerCase() + "Stories";
  const barrel = `// ${dir} index - regenerated ${ts}\n${imports}\n\nconst ${varName} = [\n${arr}\n];\n\nexport default ${varName};\n`;
  try { await copyFile(join(dpath, "index.js"), join(dpath, `index.js.bak-${ts}`)); } catch {}
  await writeFile(join(dpath, "index.js"), barrel, "utf8");
}

for (const lv of LEVELS) await processLevel(lv);

console.log("TRANSFORM REPORT");
console.log("reshaped files: " + transformed.length);
console.log(transformed.join(", "));
console.log("");
console.log("questions missing explanation (need a content pass): " + missingExplanations.length);
for (const m of missingExplanations) console.log("  " + m);
console.log("");
console.log("unknown shapes (could not normalize, look by hand): " + unknownShapes.length);
for (const u of unknownShapes) console.log("  " + u);
console.log("");
console.log("Barrels regenerated for L3 and L4. Now run the validator and restart dev.");
