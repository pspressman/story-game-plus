// validate_ladder.mjs
// Usage: node validate_ladder.mjs <dir>   (default dir: src/data/stories/ladder)
// Loads each node file via a data-URL import so it works whether or not the repo is type:module.
// Skips barrels (index.js), the template, and itself. Hard-fails on shape errors.
// Warns (does not fail) when a question stem or explanation names the grammatical device.

import { readFile, readdir, stat } from "node:fs/promises";
import { join, basename } from "node:path";

const ROOT = process.argv[2] || "src/data/stories/ladder";

const BANNED = [
  "past tense", "present tense", "future tense", "verb tense",
  "passive voice", "active voice", "subjunctive", "infinitive",
  "gerund", "participle", "modal verb", "conditional tense",
  "reported speech", "perfect aspect", "part of speech", "grammar"
];
const BANDS = new Set(["B0","B1","B2","B3","B4","B5","B6","B7","B8"]);
const TIERS = new Set(["R","A","O"]);
const TRACKS = new Set(["gated","wide_sky","canopy"]);
import { readFileSync as _rfs } from "node:fs";
import { join as _join } from "node:path";
const SOURCE_HELD = new Set((JSON.parse(_rfs(_join(process.cwd(), "_build_ladder/source_held.json"), "utf8")).source_held) || []);

const hardFails = [];
const warnings = [];
const seenIds = new Map();
let nodeCount = 0;
const byLevel = {};
const byTrack = {};

function fail(file, msg) { hardFails.push(`[FAIL] ${file}: ${msg}`); }
function warn(file, msg) { warnings.push(`[WARN] ${file}: ${msg}`); }

function skip(name) {
  if (name === "index.js") return true;
  if (name.startsWith("_")) return true;
  if (name.startsWith("validate")) return true;
  if (name.includes("template")) return true;
  if (!name.endsWith(".js") && !name.endsWith(".mjs")) return true;
  return false;
}

async function walk(dir) {
  let entries;
  try { entries = await readdir(dir); }
  catch { fail(dir, "directory not found"); return; }
  for (const e of entries) {
    const p = join(dir, e);
    const s = await stat(p);
    if (s.isDirectory()) { await walk(p); continue; }
    if (skip(e)) continue;
    await checkFile(p);
  }
}

async function loadDefault(file) {
  const src = await readFile(file, "utf8");
  const url = "data:text/javascript;charset=utf-8;base64," + Buffer.from(src, "utf8").toString("base64");
  const mod = await import(url);
  return mod.default;
}

function lintText(file, s) {
  if (typeof s !== "string") return;
  const low = s.toLowerCase();
  for (const term of BANNED) {
    if (low.includes(term)) warn(file, `names the device ("${term}"): ${s.slice(0,80)}`);
  }
}

async function checkFile(file) {
  const name = basename(file);
  let node;
  try { node = await loadDefault(file); }
  catch (err) { fail(name, `could not import default export (${err.message})`); return; }
  if (!node || typeof node !== "object") { fail(name, "default export is not an object"); return; }

  nodeCount++;

  if (!node.id) fail(name, "missing id");
  if (node.id && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(node.id)) fail(name, `id not kebab-case: ${node.id}`);
  if (node.id) {
    if (seenIds.has(node.id)) fail(name, `duplicate id, also in ${seenIds.get(node.id)}`);
    else seenIds.set(node.id, name);
  }
  if (!node.title) fail(name, "missing title");
  if (!Array.isArray(node.content) || node.content.length === 0) { fail(name, "missing or empty content[]"); return; }

  const meta = node.meta;
  if (!meta || typeof meta !== "object") { fail(name, "missing meta block"); return; }
  if (!TRACKS.has(meta.track)) { fail(name, `meta.track invalid: ${meta.track}`); return; }

  byTrack[meta.track] = (byTrack[meta.track] || 0) + 1;

  const questions = node.content.filter(b => b && b.type === "question");

  if (meta.track === "gated") {
    if (!Number.isInteger(meta.level) || meta.level < 0 || meta.level > 10) fail(name, `gated node bad level: ${meta.level}`);
    else byLevel[meta.level] = (byLevel[meta.level] || 0) + 1;
    if (!BANDS.has(meta.band)) fail(name, `gated node bad band: ${meta.band}`);
    if (!TIERS.has(meta.tier)) fail(name, `gated node bad tier: ${meta.tier}`);
    if (!meta.grammar_target) fail(name, "gated node missing grammar_target");
    if (!Array.isArray(meta.grammar_online) || meta.grammar_online.length === 0) fail(name, "gated node missing grammar_online");
    if (!meta.culture) fail(name, "gated node missing culture");
    if (!meta.region) fail(name, "gated node missing region");
    if (meta.untestable === true) fail(name, "gated node must not be untestable");
    if (questions.length === 0) fail(name, "gated node has no questions");
    if (!questions.some(q => q.gates === true)) fail(name, "gated node has no gates:true question (nothing exercises the level target)");
  }

  if (meta.track === "wide_sky" || meta.track === "canopy") {
    if (meta.untestable !== true) fail(name, `${meta.track} node must be untestable:true`);
    if (meta.level !== null && meta.level !== undefined) fail(name, `${meta.track} node must have level null`);
    if (questions.length > 0 && node.id !== "tiddalik") fail(name, `${meta.track} node carries questions but is not tiddalik`);
    if (SOURCE_HELD.has(node.id) && !meta.cultural_care) fail(name, "cultural-care node missing cultural_care note");
    if (SOURCE_HELD.has(node.id) && questions.length > 0) fail(name, "cultural-care node must not carry questions");
  }

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const tag = `${name} q${i+1}`;
    if (!Array.isArray(q.options) || q.options.length !== 4) fail(tag, "options must be length 4");
    if (!Number.isInteger(q.correctAnswer) || q.correctAnswer < 0 || q.correctAnswer > 3) fail(tag, `correctAnswer out of range: ${q.correctAnswer}`);
    if (!q.explanation) fail(tag, "missing explanation");
    if (meta.track === "gated") {
      if (!BANDS.has(q.band)) fail(tag, `question bad band: ${q.band}`);
      if (!q.grammar_cell) fail(tag, "question missing grammar_cell");
      if (typeof q.gates !== "boolean") fail(tag, "question missing boolean gates");
    }
    lintText(tag, q.question);
    lintText(tag, q.explanation);
  }
}

await walk(ROOT);

const lines = [];
lines.push("STORY LADDER VALIDATOR");
lines.push(`root: ${ROOT}`);
lines.push(`nodes checked: ${nodeCount}`);
lines.push(`by track: ${JSON.stringify(byTrack)}`);
lines.push(`by level: ${JSON.stringify(byLevel)}`);
lines.push(`hard failures: ${hardFails.length}`);
lines.push(`warnings: ${warnings.length}`);
lines.push("");
for (const f of hardFails) lines.push(f);
if (hardFails.length && warnings.length) lines.push("");
for (const w of warnings) lines.push(w);
const report = lines.join("\n");
console.log(report);

process.exit(hardFails.length > 0 ? 1 : 0);
