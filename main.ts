// The Internet in One Word — make.fun entry
// Writes a single word to /output/entry.txt. Node 22, stdlib only, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this script's location, never from process.cwd().
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const WORD = "scrollhole"; // 10 characters: the internet, in one word.

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), WORD, "utf8");
