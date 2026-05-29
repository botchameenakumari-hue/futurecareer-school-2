import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const bannedChecks = [
  { label: 'page-explaining', regex: /\bthis page is for\b/gi },
  { label: 'article-explaining', regex: /\bthis article is for\b/gi },
  { label: 'section-narration', regex: /\bin this section we (?:cover|will cover)\b/gi },
  { label: 'guide-explaining', regex: /\bthis guide exists to\b/gi },
  { label: 'route-instruction', regex: /\buse this page when\b/gi },
  { label: 'architecture-term', regex: /\bhub page\b/gi },
  { label: 'architecture-term', regex: /\bsupport page\b/gi },
  { label: 'architecture-term', regex: /\btopic page\b/gi },
  { label: 'architecture-term', regex: /\bstage page\b/gi },
  { label: 'architecture-term', regex: /\bparent page\b/gi },
  { label: 'architecture-term', regex: /\brelated article\b/gi },
  { label: 'internal-sales-language', regex: /\bhigh-intent prospects?\b/gi },
  { label: 'internal-sales-language', regex: /\bkeyword intent\b/gi },
  { label: 'page-justification', regex: /\bwhy this page exists(?: separately)?\b/gi },
  { label: 'internal-technical-language', regex: /\bthis section can grow cleanly\b/gi },
  { label: 'internal-technical-language', regex: /\bseo-compatible\b/gi },
  { label: 'internal-technical-language', regex: /\bnoindex\b/gi },
  { label: 'internal-technical-language', regex: /\bindexable\b/gi },
  { label: 'old-category-copy', regex: /\bthese are the main questions and search themes this topic answers\b/gi },
  { label: 'old-category-copy', regex: /\bplanned article directions for this topic\b/gi },
  { label: 'old-category-copy', regex: /\bthis topic is already mapped and will grow with focused guides around the questions below\b/gi },
  { label: 'old-related-links-copy', regex: /\bkeep reading here, or move to the next page that helps you act on this topic\b/gi },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile() && fullPath.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function toLineNumber(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

function getExcerpt(text, index, length) {
  const start = Math.max(0, index - 60);
  const end = Math.min(text.length, index + length + 60);
  return text.slice(start, end).replace(/\s+/g, ' ').trim();
}

function extractVisibleText(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyHtml = bodyMatch ? bodyMatch[1] : html;

  return bodyHtml
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&rsaquo;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

async function main() {
  let distStats;
  try {
    distStats = await stat(distDir);
  } catch {
    console.error('dist/ not found. Run `npm run build` before `npm run check:public-copy`.');
    process.exit(1);
  }

  if (!distStats.isDirectory()) {
    console.error('dist/ is not a directory. Run `npm run build` before `npm run check:public-copy`.');
    process.exit(1);
  }

  const htmlFiles = await walk(distDir);
  const findings = [];

  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const text = extractVisibleText(html);

    for (const check of bannedChecks) {
      const matches = [...text.matchAll(check.regex)];
      for (const match of matches) {
        const index = match.index ?? 0;
        findings.push({
          file: path.relative(root, file),
          label: check.label,
          phrase: match[0],
          line: toLineNumber(text, index),
          excerpt: getExcerpt(text, index, match[0].length),
        });
      }
    }
  }

  if (findings.length) {
    console.error('Public-copy guardrail failed. Found reader-facing copy that still sounds internal or structural:\n');
    for (const finding of findings) {
      console.error(`- [${finding.label}] ${finding.file}:${finding.line}`);
      console.error(`  phrase: ${finding.phrase}`);
      console.error(`  excerpt: ${finding.excerpt}\n`);
    }
    process.exit(1);
  }

  console.log(`Public-copy guardrail passed across ${htmlFiles.length} rendered HTML files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
