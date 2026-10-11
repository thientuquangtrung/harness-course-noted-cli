import { createRequire } from "module";
import { runAsk } from "./commands/ask.ts";

const require = createRequire(import.meta.url);
const { version } = require("../package.json") as { version: string };

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log("noted - a tiny notes CLI");
  console.log("");
  console.log("Usage:");
  console.log("  noted --help          Print this help.");
  console.log("  noted version         Print the version.");
  console.log('  noted ask "<query>"   Show the top matching notes with citations.');
  process.exit(0);
}

switch (args[0]) {
  case "version":
    if (args.includes("--json")) {
      console.log(JSON.stringify({ version }));
    } else {
      console.log(version);
    }
    process.exit(0);
  case "ask": {
    const query = args.slice(1).join(" ").trim();
    if (!query) {
      console.error('usage: noted ask "<query>"');
      process.exit(2);
    }
    process.exit(await runAsk(query));
  }
}

console.error(`unknown command: ${args.join(" ")}`);
process.exit(2);
