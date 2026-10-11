import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { IndexFile, NotesFile } from "./types.ts";

export const NOTED_DIR = ".noted";

export const storagePath = () => resolve(NOTED_DIR);

async function readText(path: string): Promise<string | null> {
  try {
    return await readFile(path, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw err;
  }
}

export async function readNotes(): Promise<NotesFile> {
  const raw = await readText(`${NOTED_DIR}/notes.json`);
  return raw === null ? { notes: [] } : JSON.parse(raw);
}

export async function readIndex(): Promise<IndexFile | null> {
  const raw = await readText(`${NOTED_DIR}/index.json`);
  return raw === null ? null : JSON.parse(raw);
}

export async function readProgress(): Promise<string | null> {
  return readText("PROGRESS.md");
}
