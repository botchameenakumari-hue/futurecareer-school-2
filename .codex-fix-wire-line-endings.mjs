import { readFileSync, writeFileSync } from 'node:fs';

const path = `${process.cwd()}/.codex-wire-coaching-workspace.mjs`;
let source = readFileSync(path, 'utf8');
source = source.replaceAll('\\r\\n', '\\n');
const anchor = "let workspace = readFileSync(workspacePath, 'utf8');";
if (!source.includes(anchor)) throw new Error('Could not find workspace read');
source = source.replace(anchor, `${anchor}\nworkspace = workspace.replace(/\\r\\n/g, '\\n');`);
writeFileSync(path, source, 'utf8');
