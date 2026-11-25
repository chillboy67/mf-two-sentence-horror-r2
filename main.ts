// Entry for make.fun: "Two-Sentence Horror".
// Writes my two-sentence horror story to the grader's output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The smart speaker said goodnight in my mother's voice. I live alone, and my mother has been dead for six years.";

// The output file holds exactly these two sentences plus a trailing
// newline — nothing else, so every run produces the same bytes.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote entry to ${join(outputDir, "entry.txt")}`);
