import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word to delete from the dictionary: the emptiest word in the
// language, and the one nobody can live without. Delete it and nobody can
// ever point at something and say "that thing" again.
const WORD = "thing";

// Guard: the entry must be exactly one non-empty word.
if (!/^[a-z]+$/.test(WORD)) throw new Error("WORD must be a single lowercase word");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
