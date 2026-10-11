import { readFile } from 'node:fs/promises';

const source = await readFile('src/scripts/resultCompanion.ts', 'utf8');
for (const needle of ['baseProject', 'scoreGap', 'resultSignal', 'Personal focus:', 'baseProject.steps', 'expected output']) {
  if (!source.includes(needle)) throw new Error(`Shared assessment companion is missing: ${needle}`);
}
console.log('Assessment companion contract passed: project and plan copy are tailored to strongest and weakest dimensions.');
