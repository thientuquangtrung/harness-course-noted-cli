import { test } from "node:test";
import assert from "node:assert/strict";
import { writeFileSync } from "node:fs";
import { nextAction, runStatus } from "./status.ts";
import { captureLog, useFixture } from "../test/fixture.ts";

useFixture();

test("nextAction extracts only its own section", () => {
  const md = "# P\n\n## Current State\nx\n\n## Next Action\n\nDo Module 06.\n\n## Later\ny\n";
  assert.equal(nextAction(md), "Do Module 06.");
  assert.equal(nextAction("## Next Action\nlast section\n"), "last section");
  assert.equal(nextAction("# nothing here\n"), null);
});

test("status prints count, storage path, and Next Action", async () => {
  writeFileSync("PROGRESS.md", "## Next Action\nStart Module 06.\n");
  const { code, out } = await captureLog(runStatus);
  assert.equal(code, 0);
  assert.match(out, /^notes: {3}2$/m);
  assert.match(out, /^storage: \/.*\.noted$/m);
  assert.match(out, /## Next Action\nStart Module 06\.$/);
});
