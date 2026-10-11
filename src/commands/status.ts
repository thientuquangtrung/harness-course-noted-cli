import { readNotes, readProgress, storagePath } from "../store/io.ts";

// Returns the body of the `## Next Action` section, up to the next `## ` heading.
export function nextAction(progress: string): string | null {
  const m = progress.match(/^## Next Action[ \t]*\n([\s\S]*?)(?=^## |(?![\s\S]))/m);
  return m ? m[1].trim() : null;
}

export async function runStatus(): Promise<number> {
  const { notes } = await readNotes();
  const progress = await readProgress();
  console.log(`notes:   ${notes.length}`);
  console.log(`storage: ${storagePath()}`);
  console.log("");
  console.log("## Next Action");
  console.log((progress && nextAction(progress)) ?? "(none recorded; see PROGRESS.md)");
  return 0;
}
