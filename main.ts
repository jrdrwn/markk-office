import { mkdirSync, writeFileSync } from "node:fs";

const JOKE_OPEN = "The printer is out of toner again, ";
const JOKE_MIDDLE = "so I printed the toner order form ";
const JOKE_CLOSE = "and it came out blank.";

const JOKE = [JOKE_OPEN, JOKE_MIDDLE, JOKE_CLOSE].join("");

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
