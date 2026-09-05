// assert_no_held.mjs
// Run from repo root AFTER regen + wire, BEFORE build:
//   node _build_ladder/assert_no_held.mjs
// Scans every wired level barrel (L{N}/index.js, wide-sky/index.js) for imported node
// ids and FAILS LOUD (exit 1) if any id is on the source-held list in
// _build_ladder/source_held.json. Textual scan (no module execution), so it is immune to
// Next-vs-Node resolution differences and catches a held node even if a barrel was
// hand-edited to smuggle one past regen's skip.

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const held = new Set(
  JSON.parse(await readFile(join(process.cwd(), "_build_ladder/source_held.json"), "utf8")).source_held || []
);

const LADDER = join(process.cwd(), "src/data/stories/ladder");
const dirs = (await readdir(LADDER)).filter(d => /^L\d+$/.test(d) || d === "wide-sky");

const wired = new Set();
for (const d of dirs) {
  let txt;
  try { txt = await readFile(join(LADDER, d, "index.js"), "utf8"); } catch { continue; }
  const re = /from\s+['"]\.\/([a-z0-9-]+)['"]/g;
  let m;
  while ((m = re.exec(txt))) wired.add(m[1]);
}

const leaked = [...wired].filter(id => held.has(id));

if (leaked.length) {
  console.error("\n=========================================================");
  console.error("  BUILD GATE FAILED: source-held material is wired in.");
  console.error("  These ids are permission-pending and must NOT ship:");
  leaked.forEach(id => console.error("    - " + id));
  console.error("  They belong in _held_pending_permission/ (outside src/).");
  console.error("  Move them out, re-run regen + wire, then deploy.");
  console.error("=========================================================\n");
  process.exit(1);
}

console.log(`Source-held gate: clear. ${wired.size} nodes wired across barrels, none on the ${held.size}-id hold list.`);
