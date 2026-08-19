import { readFileSync, writeFileSync } from 'node:fs';

const path = `${process.cwd()}/.codex-update-coaching-tests.mjs`;
let source = readFileSync(path, 'utf8');
const anchor = "let source = readFileSync(path, 'utf8');";
if (!source.includes(anchor)) throw new Error('Could not find test source read');
source = source.replace(anchor, `${anchor}\nsource = source.replace(/\\r\\n/g, '\\n');`);
writeFileSync(path, source, 'utf8');
