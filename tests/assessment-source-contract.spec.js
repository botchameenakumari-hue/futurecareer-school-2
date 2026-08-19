import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const assessmentRoot = path.resolve('src/pages/services/assessments');

const assessments = [
  { route: 'class-10-and-below', containerId: 'results-container' },
  { route: 'class-11-to-12', containerId: 'results-container' },
  { route: 'graduates-and-early-professionals', containerId: 'results-container' },
  { route: 'working-professionals-and-career-changers', containerId: 'results-container' },
  { route: 'stream-selector-test-after-10th', containerId: 'results-container' },
  { route: 'stream-selector-test-after-12th', containerId: 'results-container' },
  { route: 'career-aptitude-test-after-10th', containerId: 'results-container' },
  { route: 'career-aptitude-test-after-12th', containerId: 'results-container' },
  {
    route: 'placement-aptitude-test',
    containerId: 'result-shell',
    downloadButtonId: 'download-button',
  },
  {
    route: 'numerical-reasoning-test',
    containerId: 'result-shell',
    downloadButtonId: 'download-button',
  },
  {
    route: 'verbal-reasoning-test',
    containerId: 'result-shell',
    downloadButtonId: 'download-button',
  },
  {
    route: 'myers-briggs-career-test',
    containerId: 'result-shell',
    downloadButtonId: 'download-button',
  },
  {
    route: 'big-5-personality-test-careers',
    containerId: 'result-shell',
    downloadButtonId: 'download-button',
  },
];

test('all assessment sources keep the report, PDF, mobile, and retake contract', async () => {
  expect(assessments).toHaveLength(13);

  for (const assessment of assessments) {
    const sourcePath = path.join(assessmentRoot, assessment.route, 'index.astro');
    const source = await readFile(sourcePath, 'utf8');

    expect(source, `${assessment.route}: report component import`).toContain(
      "import AssessmentReportTools from '../../../../components/AssessmentReportTools.astro';"
    );
    expect(source, `${assessment.route}: report component mount`).toContain(
      '<AssessmentReportTools'
    );
    expect(source, `${assessment.route}: result container`).toContain(
      `id="${assessment.containerId}"`
    );
    expect(source, `${assessment.route}: retake implementation`).toMatch(
      /function\s+(?:retake|retakeQuiz|retakeTest)\s*\(/
    );
    expect(source, `${assessment.route}: print dialog must not be used`).not.toMatch(
      /window\.print\s*\(/
    );

    if (assessment.containerId !== 'results-container') {
      expect(source, `${assessment.route}: configured result container`).toContain(
        `containerId="${assessment.containerId}"`
      );
    }

    if (assessment.downloadButtonId) {
      expect(source, `${assessment.route}: configured detailed PDF button`).toContain(
        `downloadButtonId="${assessment.downloadButtonId}"`
      );
      expect(source, `${assessment.route}: detailed PDF button exists`).toContain(
        `id="${assessment.downloadButtonId}"`
      );
      expect(source, `${assessment.route}: detailed PDF is saved directly`).toMatch(
        /doc\.save\s*\(/
      );
    }
  }
});

test('shared report source contains the required responsive and direct-PDF safeguards', async () => {
  const source = await readFile(
    path.resolve('src/components/AssessmentReportTools.astro'),
    'utf8'
  );

  expect(source).toContain('data-download-assessment-report');
  expect(source).toContain('assessment-report-actions--top');
  expect(source).toContain('downloadAssessmentReportPdf');
  expect(source).toMatch(
    /const\s*\{\s*jsPDF(?::\s*\w+)?\s*\}\s*=\s*await import\('jspdf'\)/
  );
  expect(source).toContain('[style*="display:grid"]');
  expect(source).toContain('[style*="display: grid"]');
  expect(source).toContain('grid-template-columns: minmax(0, 1fr) !important');
  expect(source).toContain('overflow-wrap: break-word !important');
  expect(source).toContain('word-break: normal !important');
  expect(source).not.toMatch(/window\.print\s*\(/);
});
