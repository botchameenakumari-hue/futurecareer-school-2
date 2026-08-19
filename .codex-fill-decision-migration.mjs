import { readFileSync, writeFileSync } from 'node:fs';

const root = process.cwd();
const sql = readFileSync(`${root}/.codex-decision-ready-migration.sql`, 'utf8');
writeFileSync(`${root}/supabase/migrations/20260814184907_decision_ready_coaching_workspace.sql`, sql, 'utf8');
