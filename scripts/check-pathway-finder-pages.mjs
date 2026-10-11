import fs from 'node:fs';

const pages = [
  ['course-entrance-exam-finder.astro', null, 'Course and entrance exam'],
  ['commerce-without-maths-course-finder.astro', 'commerce-no-maths', 'Commerce without Maths'],
  ['mpc-pcm-course-finder.astro', 'mpc', 'MPC / PCM'],
  ['bipc-pcb-course-finder.astro', 'bipc', 'BiPC / PCB'],
];
for (const [file, preset, label] of pages) {
  const source = fs.readFileSync(`src/pages/tools/${file}`, 'utf8');
  const needles = [label, 'official', 'course'];
  if (preset) needles.unshift(`initialPreset="${preset}"`);
  for (const needle of needles) {
    if (!source.toLowerCase().includes(needle.toLowerCase())) throw new Error(`${file} missing ${needle}`);
  }
}
const component = fs.readFileSync('src/components/CourseEligibilityFinder.astro', 'utf8');
if (!component.includes('D.initialPreset') || !component.includes('interface Props') || !component.includes('data-cef="exam"') || !component.includes('state.exam')) throw new Error('Course finder stream, preset or exam-filter state is not wired.');
console.log('pathway finder pages contract passed');
