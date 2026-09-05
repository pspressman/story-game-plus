// wire_master.mjs
// Run from repo root: node _build_ladder/wire_master.mjs
// Regenerates src/data/stories/ladder/index.js so it imports every level barrel present
// (L0, L1, ... L10) plus wide-sky, and spreads them into one flat array. Backs up the
// existing master first. Run this after adding any new level so getStaticPaths picks it up.

import { readdir, writeFile, copyFile, stat } from "node:fs/promises";
import { join } from "node:path";

const LADDER = join(process.cwd(), "src/data/stories/ladder");
const ts = new Date().toISOString().replace(/[:.]/g, "-");

const entries = await readdir(LADDER);
const dirs = [];
for (const e of entries) {
  const s = await stat(join(LADDER, e));
  if (!s.isDirectory()) continue;
  if (/^L\d+$/.test(e) || e === "wide-sky") dirs.push(e);
}

// order: numeric levels ascending, then wide-sky last
const levelDirs = dirs.filter(d => /^L\d+$/.test(d)).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));
const hasWideSky = dirs.includes("wide-sky");

function varFor(dir) {
  if (dir === "wide-sky") return "wideSkyStories";
  return dir.toLowerCase() + "Stories";
}

const ordered = [...levelDirs, ...(hasWideSky ? ["wide-sky"] : [])];
const imports = ordered.map(d => `import ${varFor(d)} from './${d}';`).join("\n");
const spread = ordered.map(d => `  ...${varFor(d)}`).join(",\n");

const out = `// Ladder master index - regenerated ${ts}\n${imports}\n\nconst ladderStories = [\n${spread}\n];\n\nexport default ladderStories;\n`;

try { await copyFile(join(LADDER, "index.js"), join(LADDER, `index.js.bak-${ts}`)); } catch {}
await writeFile(join(LADDER, "index.js"), out, "utf8");

console.log("Master ladder index regenerated.");
console.log("levels wired: " + ordered.join(", "));
