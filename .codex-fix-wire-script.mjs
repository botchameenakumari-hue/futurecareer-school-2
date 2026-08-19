import { readFileSync, writeFileSync } from 'node:fs';

const path = `${process.cwd()}/.codex-wire-coaching-workspace.mjs`;
let source = readFileSync(path, 'utf8');
const before = "workspace = replaceBetween(workspace, 'function bindEvents()', workspace.length, block('BIND_EVENTS').trimEnd() + '\\r\\n', 'event bindings');";
const after = "const bindStart = workspace.indexOf('function bindEvents()');\nif (bindStart < 0) throw new Error('Could not find event bindings');\nworkspace = workspace.slice(0, bindStart) + block('BIND_EVENTS').trimEnd() + '\\r\\n';";
if (!source.includes(before)) throw new Error('Could not find event binding replacement');
source = source.replace(before, after);
writeFileSync(path, source, 'utf8');
