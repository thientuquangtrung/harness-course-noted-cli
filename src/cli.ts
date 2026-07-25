import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { version } = require("../package.json") as { version: string };

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log("noted - a tiny notes CLI");
  console.log("");
  console.log("Usage:");
  console.log("  noted --help        Print this help.");
  console.log("  noted version       Print the version.");
  process.exit(0);
}

if (args[0] === "version") {
  if (args.includes("--json")) {
    console.log(JSON.stringify({ version }));
  } else {
    console.log(version);
  }
  process.exit(0);
}

console.error(`unknown command: ${args.join(" ")}`);
process.exit(2);
