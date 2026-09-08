import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const root = process.argv[2] || "src/data/stories/ladder";
const libSrc = readFileSync("src/lib/optionOrder.js", "utf8");
const lib = await import("data:text/javascript;base64," + Buffer.from(libSrc).toString("base64"));

const walk = (d) => readdirSync(d).flatMap(f => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return walk(p);
  return (f.endsWith(".js") && f !== "index.js") ? [p] : [];
});

const tally = {};
const total = { raw: [0,0,0,0], shown: [0,0,0,0], n: 0 };

for (const p of walk(root)) {
  let mod;
  try {
    mod = await import("data:text/javascript;base64," + Buffer.from(readFileSync(p, "utf8")).toString("base64"));
  } catch (e) { console.error("SKIP " + p + " " + e.message); continue; }
  const node = mod.default;
  if (!node || !Array.isArray(node.content)) continue;
  const lvl = "L" + (node.meta && node.meta.level);
  node.content.forEach((b, step) => {
    if (b.type !== "question" || !Array.isArray(b.options)) return;
    const order = lib.orderFor(b.question, step, b.options.length);
    const shown = order.indexOf(b.correctAnswer);
    const raw = b.correctAnswer;
    tally[lvl] = tally[lvl] || { raw: [0,0,0,0], shown: [0,0,0,0], n: 0 };
    tally[lvl].n++;
    total.n++;
    if (raw >= 0 && raw < 4) { tally[lvl].raw[raw]++; total.raw[raw]++; }
    if (shown >= 0 && shown < 4) { tally[lvl].shown[shown]++; total.shown[shown]++; }
  });
}

console.log("level  n    source ABCD        rendered ABCD");
Object.keys(tally).sort().forEach(k => {
  const t = tally[k];
  console.log(k.padEnd(6), String(t.n).padEnd(4), t.raw.join(" ").padEnd(18), t.shown.join(" "));
});

const chi = (obs) => {
  const e = obs.reduce((a, b) => a + b, 0) / 4;
  return obs.reduce((a, o) => a + ((o - e) * (o - e)) / e, 0);
};

console.log("");
console.log("TOTAL ", String(total.n).padEnd(4), total.raw.join(" ").padEnd(18), total.shown.join(" "));
console.log("chi2 source   " + chi(total.raw).toFixed(1));
console.log("chi2 rendered " + chi(total.shown).toFixed(1) + "   (3 df, flat is under 7.8 at p=.05)");
