import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { IndexFile, NotesFile } from "../store/types.ts";

// Creates a throwaway repo root with a seeded .noted/ and chdirs into it.
export function useFixture(): string {
  const root = mkdtempSync(join(tmpdir(), "noted-"));
  mkdirSync(join(root, ".noted"));
  const notes: NotesFile = {
    notes: [
      { id: "n1", path: "notes/alpha.md", title: "Alpha", body: "\nAlpha release plan.\nMore." },
      { id: "n2", path: "notes/beta.md", title: "Beta", body: "Beta notes mention alpha once." },
    ],
  };
  const index: IndexFile = {
    tokens: [
      { token: "alpha", note_ids: ["n1", "n2"] },
      { token: "release", note_ids: ["n1"] },
      { token: "beta", note_ids: ["n2"] },
    ],
  };
  writeFileSync(join(root, ".noted/notes.json"), JSON.stringify(notes));
  writeFileSync(join(root, ".noted/index.json"), JSON.stringify(index));
  process.chdir(root);
  return root;
}

export async function captureLog(fn: () => Promise<number>): Promise<{ code: number; out: string }> {
  const lines: string[] = [];
  const orig = console.log;
  console.log = (...a: unknown[]) => void lines.push(a.join(" "));
  try {
    const code = await fn();
    return { code, out: lines.join("\n") };
  } finally {
    console.log = orig;
  }
}
