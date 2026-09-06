// audit_answer_support.mjs
// Flags nodes where a question cannot be answered from the story text shown BEFORE it.
// Heuristic: produces CANDIDATES for human review, not verdicts.
// Usage: node _build_ladder/audit_answer_support.mjs [dir]

import { readFile, readdir, stat } from "node:fs/promises";
import { join, basename } from "node:path";

const ROOT = process.argv[2] || "src/data/stories/ladder";

const STOP = new Set(["the","and","that","this","with","from","into","onto","for","but","not",
"all","any","was","were","are","is","been","be","has","have","had","his","her","him","she","they",
"them","their","its","it","you","your","who","what","when","where","which","how","why","did","does",
"do","will","would","could","should","may","might","one","two","three","out","off","over","under",
"than","then","there","here","some","more","most","much","very","only","just","about","after",
"before","again","still","way","thing","things","nothing","something","anything","him","himself",
"herself","itself","because","while","until","upon","down","up","in","on","at","to","of","a","an",
"as","by","or","so","if","no","yes","he","i","we","us","me","my","our"]);

function words(s) {
  return [...new Set(
    String(s).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
      .filter(w => w.length >= 3 && !STOP.has(w))
      .map(w => w.replace(/(ies|es|s)$/, ""))
  )];
}

function covered(terms, text) {
  const hay = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  return terms.filter(t => hay.includes(t)).length;
}

async function loadDefault(file) {
  const src = await readFile(file, "utf8");
  const url = "data:text/javascript;charset=utf-8;base64," + Buffer.from(src, "utf8").toString("base64");
  return (await import(url)).default;
}

function skip(n) {
  return n === "index.js" || n.startsWith("_") || n.includes("template") ||
         n.includes(".bak") || n.startsWith("validate") || n.startsWith("audit") ||
         (!n.endsWith(".js") && !n.endsWith(".mjs"));
}

const findings = [];
let nodes = 0, questions = 0;

async function walk(dir) {
  for (const e of await readdir(dir)) {
    const p = join(dir, e);
    if ((await stat(p)).isDirectory()) { await walk(p); continue; }
    if (skip(e)) continue;
    await check(p);
  }
}

async function check(file) {
  const name = basename(file);
  let node;
  try { node = await loadDefault(file); } catch { return; }
  if (!node || !Array.isArray(node.content)) return;
  nodes++;

  const c = node.content;
  const hits = [];

  if (c[0] && c[0].type !== "story") hits.push("OPENS ON A NON-STORY BLOCK");

  const storyBlocks = c.filter(b => b && b.type === "story" && b.text);
  if (storyBlocks.length < 2) hits.push(`THIN: only ${storyBlocks.length} story block(s)`);

  for (let i = 0; i < c.length; i++) {
    const b = c[i];
    if (!b || b.type !== "question") continue;
    questions++;
    const before = c.slice(0, i).filter(x => x && x.type === "story" && x.text).map(x => x.text).join(" ");
    const after = c.slice(i + 1).filter(x => x && x.type === "story" && x.text).map(x => x.text).join(" ");
    const ans = (b.options || [])[b.correctAnswer];
    if (!ans) continue;
    const terms = words(ans);
    if (!terms.length) continue;
    const pre = covered(terms, before);
    const post = covered(terms, after);
    if (pre === 0) {
      hits.push(post > 0
        ? `Q${i}: ANSWER REVEALED LATER -> "${ans}" | asks: ${String(b.question).slice(0, 70)}`
        : `Q${i}: NO TEXTUAL SUPPORT -> "${ans}" | asks: ${String(b.question).slice(0, 70)}`);
    }
  }

  if (hits.length) findings.push({ file: name, id: node.id, level: node.meta?.level, hits });
}

await walk(ROOT);

findings.sort((a, b) => (a.level ?? 99) - (b.level ?? 99));
for (const f of findings) {
  console.log(`\n=== ${f.file}  (id: ${f.id}, level: ${f.level})`);
  for (const h of f.hits) console.log(`    ${h}`);
}
console.log(`\n--- ${nodes} nodes, ${questions} questions, ${findings.length} nodes flagged`);
