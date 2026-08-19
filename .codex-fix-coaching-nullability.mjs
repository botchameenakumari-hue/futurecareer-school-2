import { readFileSync, writeFileSync } from 'node:fs';

const path = `${process.cwd()}/src/scripts/coachingWorkspace.ts`;
let source = readFileSync(path, 'utf8');
const before = `  const primary = currentPrimaryCareer();
  const review = new Date();
  review.setDate(review.getDate() + 30);
  const rows = items.map((item) => ({
    student_id: activeStudentId(),`;
const after = `  const primary = currentPrimaryCareer();
  const actorId = ctx.user.id;
  const studentId = activeStudentId();
  const review = new Date();
  review.setDate(review.getDate() + 30);
  const rows = items.map((item) => ({
    student_id: studentId,`;
if (!source.includes(before)) throw new Error('Could not find skill plan row setup');
source = source.replace(before, after).replace('    created_by: ctx.user.id,\n    updated_by: ctx.user.id,', '    created_by: actorId,\n    updated_by: actorId,');
writeFileSync(path, source, 'utf8');
