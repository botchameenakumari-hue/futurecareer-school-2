import { readFile } from 'node:fs/promises';

const stagePages = [
  'src/pages/services/assessments/class-10-and-below/index.astro',
  'src/pages/services/assessments/class-11-to-12/index.astro',
  'src/pages/services/assessments/graduates-and-early-professionals/index.astro',
  'src/pages/services/assessments/working-professionals-and-career-changers/index.astro',
];

for (const file of stagePages) {
  const source = await readFile(file, 'utf8');
  if (!source.includes('data-fcs-score-label') || !source.includes('data-fcs-score-value')) {
    throw new Error(`Stage score contract is missing from ${file}`);
  }
}

const companion = await readFile('src/scripts/resultCompanion.ts', 'utf8');
if (!companion.includes('[data-fcs-score-label][data-fcs-score-value]')) {
  throw new Error('Shared companion reader does not consume the stage score contract.');
}

console.log(`Stage score contract passed for ${stagePages.length} stage pages.`);
