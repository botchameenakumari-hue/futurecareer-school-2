import { readFile } from 'node:fs/promises';

const file = 'src/components/ParentStudentAgreement.astro';
const source = await readFile(file, 'utf8');
const lower = source.toLowerCase();
for (const needle of ['parent–student career decision agreement', 'saved only in this browser', 'student’s view', 'parent’s view', 'studentnonnegotiable', 'parentnonnegotiable', 'sharedrule', 'data-psa-action="print"', 'reviewdate', 'localstorage']) {
  if (!lower.includes(needle)) throw new Error(`Parent–student agreement tool is missing: ${needle}`);
}
console.log('Parent–student agreement contract passed: local-only worksheet, two views, review date and print action present.');
