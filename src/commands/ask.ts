import { resolve } from "node:path";
import { readIndex, readNotes } from "../store/io.ts";

const STOP = new Set(["the", "and", "for", "with", "a", "an", "of", "to", "is", "in", "on"]);
const tokenize = (s: string) =>
  s.toLowerCase().match(/[a-z0-9]{3,}/g)?.filter((t) => !STOP.has(t)) ?? [];

export async function runAsk(query: string, k = 3): Promise<number> {
  const idx = await readIndex();
  if (!idx) {
    console.error("no index found; run `noted index` first");
    return 1;
  }
  const { notes } = await readNotes();
  const score = new Map<string, number>();
  for (const t of new Set(tokenize(query))) {
    const entry = idx.tokens.find((e) => e.token === t);
    if (!entry) continue;
    for (const id of entry.note_ids) score.set(id, (score.get(id) ?? 0) + 1);
  }
  const ranked = Array.from(score.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([id]) => notes.find((n) => n.id === id))
    .filter((n) => n !== undefined);

  if (ranked.length === 0) {
    console.log("no matches");
    return 0;
  }
  // Citation rule (docs/citation-rule.md): every match names its source by absolute path.
  for (const n of ranked) {
    const snippet = n.body.split("\n").find((l) => l.trim()) ?? "";
    console.log(`[${n.id}] ${n.title}`);
    console.log(`    ${snippet.slice(0, 120)}`);
    console.log(`    cite: ${resolve(n.path)}`);
  }
  return 0;
}
