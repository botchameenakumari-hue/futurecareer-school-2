import { readFile } from 'node:fs/promises';

const sharedStagePdfFiles = [
  'src/scripts/class10AssessmentPdf.ts',
  'src/scripts/class11AssessmentPdf.ts',
  'src/scripts/graduateAssessmentPdf.ts',
];

for (const file of sharedStagePdfFiles) {
  const source = await readFile(file, 'utf8');
  const baseOnly = source.includes('// Front/back detail content is rendered as dedicated report pages') && source.includes('return baseSections;');
  const front = source.indexOf("const frontSections = extrasSections(container, 'front');");
  const body = source.indexOf('sections.forEach((section) => {');
  const back = source.indexOf("const backSections = extrasSections(container, 'back');");
  if (!baseOnly || front < 0 || body < 0 || back < 0 || !(front < body && body < back)) {
    throw new Error(`Stage PDF front/body/back page contract failed: ${file}`);
  }
}

const working = await readFile('src/scripts/workingProfessionalAssessmentPdf.ts', 'utf8');
const front = working.indexOf("for (const section of frontSections)");
const body = working.indexOf('for (let index = 0; index < sourceSections.length; index += 1)');
const back = working.indexOf("for (const section of backSections)");
if (front < 0 || body < 0 || back < 0 || !(front < body && body < back)) {
  throw new Error('Stage PDF front/body/back page contract failed: working-professional PDF');
}

console.log('Stage PDF detail contract passed: four generators preserve explicit front and back report sections.');
