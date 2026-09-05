// src/lib/readTracker.js
//
// Read/unread tracking. Browser-local, per device, no server.
//
// Two states are recorded per story:
//   started  - the story was opened
//   finished - the reader reached the end
// "Read" on the index means finished. Started-but-not-finished shows as in-progress.
//
// SSR NOTE: never call these during render. Read in useEffect and hold the
// result in state, or the server HTML and the client will disagree.

const STORAGE_KEY = 'syntense.read.v1';

// Session fallback used only when localStorage is unavailable.
let memoryStore = null;

function storageAvailable() {
  if (typeof window === 'undefined') return false;
  try {
    const probe = '__readtracker_probe__';
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    return true;
  } catch (e) {
    return false;
  }
}

/** Composite key. Stories are unique per module, not globally. */
export function storyKey(moduleId, storyId) {
  return `${moduleId}/${storyId}`;
}

function loadRaw() {
  if (!storageAvailable()) return memoryStore || {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (e) {
    return {};
  }
}

function saveRaw(map) {
  if (!storageAvailable()) {
    memoryStore = map;
    return false;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    return true;
  } catch (e) {
    // Quota or private-mode failure. Keep the session copy so the UI stays
    // consistent for this visit; it just will not survive a reload.
    memoryStore = map;
    return false;
  }
}

/** The whole read map: { "ladder/mwindo": { started, finished, opens, last } } */
export function getReadMap() {
  return loadRaw();
}

/** Call when a story mounts. */
export function markStarted(moduleId, storyId) {
  const key = storyKey(moduleId, storyId);
  const map = loadRaw();
  const now = new Date().toISOString();
  const prev = map[key];
  map[key] = {
    started: prev && prev.started ? prev.started : now,
    finished: prev && prev.finished ? prev.finished : null,
    opens: prev && typeof prev.opens === 'number' ? prev.opens + 1 : 1,
    last: now,
  };
  saveRaw(map);
  return map[key];
}

/** Call when the reader reaches the end. Idempotent. */
export function markFinished(moduleId, storyId) {
  const key = storyKey(moduleId, storyId);
  const map = loadRaw();
  const now = new Date().toISOString();
  const prev = map[key];
  map[key] = {
    started: prev && prev.started ? prev.started : now,
    finished: prev && prev.finished ? prev.finished : now,
    opens: prev && typeof prev.opens === 'number' ? prev.opens : 1,
    last: now,
  };
  saveRaw(map);
  return map[key];
}

/** 'unread' | 'started' | 'read' */
export function statusOf(map, moduleId, storyId) {
  const entry = map ? map[storyKey(moduleId, storyId)] : null;
  if (!entry) return 'unread';
  if (entry.finished) return 'read';
  return 'started';
}

export function isRead(map, moduleId, storyId) {
  return statusOf(map, moduleId, storyId) === 'read';
}

/** Parent-facing rollup for one module. */
export function getReadSummary(map, moduleId, stories) {
  const list = Array.isArray(stories) ? stories : [];
  let read = 0;
  let started = 0;
  let latest = null;

  for (const s of list) {
    const entry = map ? map[storyKey(moduleId, s.id)] : null;
    if (!entry) continue;
    if (entry.finished) {
      read += 1;
      if (!latest || entry.finished > latest.finished) {
        latest = { id: s.id, title: s.title, finished: entry.finished };
      }
    } else {
      started += 1;
    }
  }

  return {
    total: list.length,
    read,
    started,
    unread: list.length - read - started,
    latest,
    daysSinceLatest: latest ? daysSince(latest.finished) : null,
  };
}

function daysSince(iso) {
  const then = Date.parse(iso);
  if (Number.isNaN(then)) return null;
  return Math.floor((Date.now() - then) / 86400000);
}

/** Clears all read state on this device. Not wired to any visible button. */
export function resetReadState() {
  memoryStore = null;
  if (!storageAvailable()) return false;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

/** Copyable JSON snapshot. */
export function exportReadState() {
  return JSON.stringify({ key: STORAGE_KEY, exported: new Date().toISOString(), data: loadRaw() }, null, 2);
}
