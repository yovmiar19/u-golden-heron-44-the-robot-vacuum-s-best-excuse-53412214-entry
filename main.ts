// The Robot Vacuum's Best Excuse — make.fun entry
// One line, at most 140 characters, in which a robot vacuum explains
// why it missed a spot. The program writes that line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse, assembled from its two beats: the obstacle the vacuum
// met, and the honest admission of what it is not built to do.
const culprit = "A solitary Cheerio";
const maneuver = "formed a defensive perimeter";
const confession = "I am not trained for close-quarters combat";

const line = `${culprit} ${maneuver}, and ${confession}.`;

// The gate only accepts 1 to 140 characters, so refuse to write a line
// that could never be judged rather than shipping it silently.
const MAX_LINE = 140;
if (line.length < 1 || line.length > MAX_LINE) {
  throw new Error(`Excuse is ${line.length} characters; must be 1-${MAX_LINE}.`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line, "utf8");
console.log(`Wrote ${line.length} characters to ${outPath}`);
