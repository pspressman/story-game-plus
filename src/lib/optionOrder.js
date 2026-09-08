// src/lib/optionOrder.js
// Deterministic per question option order. Seeded from node data only, so the
// browser order and any audit of that order are computed by the same function.
// 2026-09-08: replaced the LCG low bit draw, which biased the result, with
// mulberry32 and a fractional draw off the high bits.

export const hashKey = (s) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  }
  return h >>> 0;
};

const mulberry32 = (seed) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const shuffleOrder = (n, seed) => {
  const order = Array.from({ length: n }, (_, i) => i);
  const rand = mulberry32(seed);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const t = order[i];
    order[i] = order[j];
    order[j] = t;
  }
  return order;
};

export const orderFor = (stem, step, n) => shuffleOrder(n, hashKey(String(stem) + "::" + String(step)));
