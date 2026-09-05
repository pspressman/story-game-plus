// regen_level_barrels.mjs
// Run from repo root BEFORE wire_master: node _build_ladder/regen_level_barrels.mjs
// Rebuilds every L{N}/index.js and wide-sky/index.js from the actual .js files in each
// dir (floor + newly added). Idempotent.
// SOURCE-HELD GATE: any file whose id is in _build_ladder/source_held.json is SKIPPED
// (loud notice) and never enters a barrel, so permission-pending material cannot be wired
// even if the file is physically present in a build-path dir.

import { readdir, writeFile, stat, readFile } from "node:fs/promises";
import { join } from "node:path";

const LADDER = join(process.cwd(), "src/data/stories/ladder");
const camel = b => b.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

let held = new Set();
try {
  const m = JSON.parse(await readFile(join(process.cwd(), "_build_ladder/source_held.json"), "utf8"));
  held = new Set(m.source_held || []);
} catch { /* no manifest = no holds */ }

const entries = await readdir(LADDER);
let skipped = 0;
for (const e of entries.sort()) {
  const full = join(LADDER, e);
  const s = await stat(full);
  if (!s.isDirectory()) continue;
  if (!(/^L\d+$/.test(e) || e === "wide-sky")) continue;

  const all = (await readdir(full)).filter(f => f.endsWith(".js") && f !== "index.js").sort();
  const files = [];
  for (const f of all) {
    const id = f.slice(0, -3);
    if (held.has(id)) { console.log(`  HELD (source-held), skipped: ${id}  [${e}]`); skipped++; continue; }
    files.push(f);
  }

  const imports = files.map(f => `import ${camel(f.slice(0, -3))} from './${f.slice(0, -3)}';`).join("\n");
  const arr = files.map(f => `  ${camel(f.slice(0, -3))}`).join(",\n");
  const varName = (e === "wide-sky" ? "wideSky" : e.toLowerCase()) + "Stories";
  const out = `// ${e} index - regenerated\n${imports}\n\nconst ${varName} = [\n${arr}\n];\n\nexport default ${varName};\n`;

  await writeFile(join(full, "index.js"), out, "utf8");
  console.log(`${e}: ${files.length} nodes`);
}
console.log(`All level barrels regenerated. Source-held skipped: ${skipped}.`);
