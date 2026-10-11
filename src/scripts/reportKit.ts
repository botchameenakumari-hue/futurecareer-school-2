// Structured report helpers shared by the assessment results, the skill portfolio
// tracker and the Class 10 and Class 12 career chart tools. Builds the same line
// format that the PDF renderer already understands, so every report gets the same
// look, and adds a stable report anatomy (cover details, methodology, limits, plans,
// checklist, review page, sources).
import { createVisualAssessmentPdf, type VisualReportLine } from './assessmentPdfRenderer';

export type ReportLine = VisualReportLine;

export const REPORT_VERSION = '2.0';
export const REPORT_VERSION_LABEL = 'Report version 2.0, October 2026';

export const h1 = (text: string): ReportLine => ({ kind: 'heading-1', text });
export const h2 = (text: string): ReportLine => ({ kind: 'heading-2', text });
export const h3 = (text: string): ReportLine => ({ kind: 'heading-3', text });
export const p = (text: string): ReportLine => ({ kind: 'body', text });
export const li = (text: string): ReportLine => ({ kind: 'bullet', text });
export const bullets = (items: string[]): ReportLine[] => items.filter(Boolean).map(li);

export function cleanPdfText(value: string): string {
  return String(value)
    .replace(/₹/g, 'Rs. ')
    .replace(/[‒–—−]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[•·∙・]/g, ' - ')
    .replace(/[×✕✖]/g, 'x')
    .replace(/[→⇒➤➜]/g, '->')
    .replace(/ /g, ' ')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function todayLabel(d = new Date()): string {
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function addDays(days: number, from = new Date()): Date {
  const d = new Date(from.getTime());
  d.setDate(d.getDate() + days);
  return d;
}

export const STANDARD_LIMITS = [
  'This report comes from your own answers and your own entries. It has not been checked by anyone else.',
  'It describes a pattern at one point in time and is not a diagnosis, a prediction or a guarantee of any outcome.',
  'Use it to start a conversation and to choose small experiments, then confirm any rule, fee or date on the official source.',
];

export interface StructuredReportOptions {
  title: string;
  fileName: string;
  kicker: string;
  coverBadge?: string;
  coverMeta?: string[];
  lines: ReportLine[];
}

const SITE = {
  guidanceUrl: 'https://futurecareerschool.com/services/career-counselling-and-career-guidance/',
  guidanceLabel: 'Explore Personalised Career Guidance',
  siteUrl: 'https://futurecareerschool.com',
  whatsappUrl: 'https://wa.me/917815927259',
  phoneDisplay: '+91 78159 27259',
  phoneE164: '+917815927259',
};

export async function downloadStructuredReport(opts: StructuredReportOptions): Promise<boolean> {
  const lines = opts.lines
    .map((l) => ({ kind: l.kind, text: cleanPdfText(l.text) }))
    .filter((l) => l.text && /[a-z0-9]/i.test(l.text)) as ReportLine[];
  if (!lines.length) return false;
  const { jsPDF } = await import('jspdf');
  const pdf = createVisualAssessmentPdf(lines, opts.title, jsPDF, {
    ...SITE,
    reportKicker: opts.kicker,
    coverBadge: opts.coverBadge,
    coverMeta: (opts.coverMeta || []).map(cleanPdfText),
  });
  pdf.save(opts.fileName);
  return true;
}
