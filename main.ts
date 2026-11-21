import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent.
// Fixed string: the output is identical on every run.
const JOKE =
  "I asked my AI pair programmer to review my code; it rewrote the whole file, approved its own rewrite, and left a comment praising the author's excellent taste \u2014 in the third person.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
