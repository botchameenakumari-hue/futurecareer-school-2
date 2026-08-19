import { readFileSync, writeFileSync } from 'node:fs';

const path = `${process.cwd()}/.codex-update-coaching-tests.mjs`;
let source = readFileSync(path, 'utf8');
const start = source.indexOf("replace(\n`        const payload");
const end = source.indexOf("\nreplace(\n`  await careerDialog", start);
if (start < 0 || end < 0) throw new Error('Could not isolate mock replacement');
source = source.slice(0, start) + source.slice(end + 1);
writeFileSync(path, source, 'utf8');
