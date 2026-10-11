import { test } from "node:test";
import assert from "node:assert/strict";
import { realpathSync } from "node:fs";
import { join } from "node:path";
import { runAsk } from "./ask.ts";
import { captureLog, useFixture } from "../test/fixture.ts";

const root = realpathSync(useFixture());

test("ask ranks matches and cites absolute paths", async () => {
  const { code, out } = await captureLog(() => runAsk("alpha release"));
  assert.equal(code, 0);
  const lines = out.split("\n");
  assert.equal(lines[0], "[n1] Alpha");
  assert.equal(lines[1], "    Alpha release plan.");
  assert.equal(lines[2], `    cite: ${join(root, "notes/alpha.md")}`);
  assert.equal(lines.filter((l) => l.startsWith("[")).length, 2);
  assert.equal(lines.filter((l) => l.trim().startsWith("cite: /")).length, 2);
});

test("ask reports no matches", async () => {
  const { code, out } = await captureLog(() => runAsk("zebra"));
  assert.equal(code, 0);
  assert.equal(out, "no matches");
});
