import fs from 'node:fs';

const source = fs.readFileSync('docs/assessment-user-validation-protocol.md', 'utf8');
for (const token of [
  'protocol ready; field testing not yet conducted',
  'guardian permission',
  'participant assent',
  'collect no unnecessary identity',
  'task completed: yes/no',
  'Do not describe a feature as validated',
  'defined population',
  'sampling method',
  'analysis method',
  'Ready-to-run session sheet',
  'Session ID:',
  'median total time',
  'These are blank fields until sessions occur',
]) {
  if (!source.includes(token)) throw new Error(`User-validation protocol is missing: ${token}`);
}
console.log('User-validation protocol contract passed: consent, minors, measures, retention and non-validation guardrails are documented.');
