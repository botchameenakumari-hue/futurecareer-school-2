// Places page media in the right spot in the finished HTML, with no browser JavaScript.
//
// Why this exists: the layout used to append every image group to the end of <body> and rely on an
// inline script in BaseLayout.astro to move it into the page. On /services/ pages that script looked
// for a <main> element that does not exist, so the hero and context images stayed after the footer,
// and without JavaScript (crawlers, link previews) the blog images were hidden or at the bottom.
//
// What it does after the build (astro:build:done), by splicing exact source ranges found with parse5:
//   service pages   move the hero, diagram and context figures to directly after the page hero.
//   every page      correct width/height on local images to the real file size and add a title
//                   attribute (copied from alt) when one is missing; point og:image/twitter:image at the
//                   article's own hero when it has one instead of the generic SVG.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const SITE = 'https://futurecareerschool.com';

// A small, deliberately restrained visual system for newly added articles that do not yet
// have article-specific artwork. Existing article visuals always win; these are only used
// when a blog post would otherwise ship with no explanatory imagery at all.
const EMPTY_BLOG_VISUALS = [
  { src: '/images/blog/system/career-visual-system-hero.webp', label: 'Editorial career decision scene', width: 1600, height: 900 },
  { src: '/images/blog/system/career-visual-system-summary.webp', label: 'Clarity before commitment', width: 1600, height: 1000 },
  { src: '/images/blog/system/career-visual-system-matrix.webp', label: 'Compare a career option', width: 1600, height: 1000 },
  { src: '/images/blog/system/career-visual-system-chain.webp', label: 'From interest to evidence', width: 1600, height: 1000 },
  { src: '/images/blog/system/career-visual-system-checklist.webp', label: 'Before you commit', width: 1600, height: 1000 },
  { src: '/images/blog/system/career-visual-system-proof.webp', label: 'Build a high-value skill portfolio', width: 1600, height: 1000 },
];

const CATEGORY_HEROES = new Set([
  'career-change', 'career-guidance', 'career-options', 'college-degrees', 'freelancing-business',
  'government-jobs', 'interviews', 'job-search', 'linkedin-networking', 'medical-careers',
  'parents', 'resume', 'salary-growth', 'skills', 'stream-selection',
]);

const attr = (node, name) => (node.attrs || []).find((a) => a.name === name)?.value;
const classes = (node) => (attr(node, 'class') || '').split(/\s+/).filter(Boolean);
const elementChildren = (node) => (node.childNodes || []).filter((child) => child.tagName);

function* walkElements(node) {
  for (const child of node.childNodes || []) {
    if (child.tagName) {
      yield child;
      yield* walkElements(child);
    }
  }
}

function findFirst(root, predicate) {
  for (const el of walkElements(root)) if (predicate(el)) return el;
  return null;
}

const imageSizeCache = new Map();
function imageSize(publicDir, src) {
  if (imageSizeCache.has(src)) return imageSizeCache.get(src);
  let size = null;
  const file = path.join(publicDir, src);
  if (fs.existsSync(file)) {
    const b = fs.readFileSync(file);
    try {
      if (/\.webp$/.test(src) && b.toString('ascii', 0, 4) === 'RIFF') {
        const type = b.toString('ascii', 12, 16);
        if (type === 'VP8 ') size = { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
        else if (type === 'VP8L') {
          const v = b.readUInt32LE(21);
          size = { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1 };
        } else if (type === 'VP8X') size = { w: b.readUIntLE(24, 3) + 1, h: b.readUIntLE(27, 3) + 1 };
      } else if (/\.png$/.test(src)) size = { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
      else if (/\.jpe?g$/.test(src)) {
        let i = 2;
        while (i < b.length) {
          if (b[i] !== 0xff) {
            i += 1;
            continue;
          }
          const marker = b[i + 1];
          if (marker >= 0xc0 && marker <= 0xc3) {
            size = { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
            break;
          }
          i += 2 + b.readUInt16BE(i + 2);
        }
      }
    } catch {
      size = null;
    }
  }
  imageSizeCache.set(src, size);
  return size;
}

function setAttr(tag, name, value) {
  const re = new RegExp(`(\\s${name}=)("[^"]*"|'[^']*')`);
  const escaped = String(value).replace(/"/g, '&quot;');
  if (re.test(tag)) return tag.replace(re, `$1"${escaped}"`);
  return tag.replace(/^<img/, `<img ${name}="${escaped}"`);
}

function hasNonEmptyAttr(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`));
  return Boolean((match?.[1] ?? match?.[2] ?? '').trim());
}

function fixImageTags(html, publicDir) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = (tag.match(/\ssrc="([^"]*)"/) || [])[1];
    if (!src) return tag;
    const alt = (tag.match(/\salt="([^"]*)"/) || [])[1];
    const local = src.replace(SITE, '');
    let next = tag;
    // The legacy career-landing prototype keeps one deliberately inline hero
    // image. It is still a real image and needs intrinsic dimensions for CLS.
    if (src.startsWith('data:image/jpeg;base64,') && /\bhero-bg\b/.test(tag)) {
      next = setAttr(next, 'width', 1920);
      next = setAttr(next, 'height', 1080);
    }
    if (!local.startsWith('/images/') && !local.startsWith('/blog/')) {
      return alt && !hasNonEmptyAttr(next, 'title') ? setAttr(next, 'title', alt) : next;
    }
    const size = /\.(webp|jpe?g|png)$/.test(local) ? imageSize(publicDir, local) : null;
    if (size) {
      next = setAttr(next, 'width', size.w);
      next = setAttr(next, 'height', size.h);
    }
    if (alt && !hasNonEmptyAttr(next, 'title')) next = setAttr(next, 'title', alt);
    return next;
  });
}

function splice(html, operations) {
  let out = html;
  for (const op of [...operations].sort((a, b) => b.start - a.start)) out = out.slice(0, op.start) + op.text + out.slice(op.end);
  return out;
}

function insertionPointInside(container, html) {
  const kids = elementChildren(container);
  if (kids.length >= 2) return kids[1].sourceCodeLocation.startOffset;
  return container.sourceCodeLocation.endTag?.startOffset ?? container.sourceCodeLocation.endOffset;
}

function processService(html, doc) {
  const body = findFirst(doc, (el) => el.tagName === 'body');
  const kids = elementChildren(body);
  const media = kids.filter((el) => ['bofu-image', 'bofu-diagrams', 'bofu-context-visual'].some((c) => classes(el).includes(c)));
  if (!media.length) return null;
  // The nav can sit directly in <body> or inside the <main id="page-content"> wrapper that assessment pages use.
  const navEl = findFirst(body, (el) => el.tagName === 'header' && attr(el, 'id') === 'nav');
  const navSiblings = navEl && navEl.parentNode ? elementChildren(navEl.parentNode) : [];
  const navIndex = navSiblings.indexOf(navEl);
  const operations = [];
  const target = navIndex >= 0 ? navSiblings[navIndex + 1] : null;
  if (media.length && target && !media.includes(target)) {
    const mediaHtml = media.map((m) => html.slice(m.sourceCodeLocation.startOffset, m.sourceCodeLocation.endOffset)).join('\n');
    for (const m of media) operations.push({ start: m.sourceCodeLocation.startOffset, end: m.sourceCodeLocation.endOffset, text: '' });
    const at = ['article', 'main'].includes(target.tagName) ? insertionPointInside(target, html) : target.sourceCodeLocation.endOffset;
    operations.push({ start: at, end: at, text: '\n' + mediaHtml + '\n' });
  }
  return splice(html, operations);
}

function setMeta(html, property, content) {
  const re = new RegExp(`(<meta (?:property|name)="${property}" content=")[^"]*(")`);
  return re.test(html) ? html.replace(re, `$1${content}$2`) : html;
}

function fixSocialImage(html, publicDir) {
  const og = (html.match(/<meta property="og:image" content="([^"]*)"/) || [])[1];
  if (!og || !og.endsWith('.svg')) return html;
  const body = html.slice(html.indexOf('<body'));
  const match = body.match(/<img\b[^>]*\ssrc="(\/images\/blog\/[^\"]+\.(?:webp|jpe?g|png))"/);
  if (!match) return html;
  const size = imageSize(publicDir, match[1]);
  let out = setMeta(html, 'og:image', SITE + match[1]);
  out = setMeta(out, 'twitter:image', SITE + match[1]);
  if (size) {
    out = setMeta(out, 'og:image:width', size.w);
    out = setMeta(out, 'og:image:height', size.h);
  }
  return out;
}

function plainText(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function visualWordCount(value) {
  return plainText(String(value || '')).split(/\s+/).filter(Boolean).length;
}

function compactVisualLabel(value) {
  const source = plainText(String(value || '')).replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  const concisePatterns = [
    [/^build or confirm an emergency fund\b/i, 'Emergency fund runway'],
    [/^if you are financing a course\b/i, 'Course cost against realistic income'],
    [/^separate\b.*\bfinancial risk\b/i, 'Career change plus financial risk'],
    [/^confusing a growing sector with a growing role\b/i, 'Sector Growth Is Not Role Growth'],
    [/^ignoring what AI is doing to the entry layer\b/i, 'AI Changes Entry-Level Work'],
    [/^underestimating how long skills take to compound\b/i, 'Skill Building Takes Time'],
  ];
  for (const [pattern, label] of concisePatterns) if (pattern.test(source)) return label;
  const firstSentence = source.match(/^[^.!?]*[.!?](?:\s|$)/)?.[0]?.trim() || '';
  if (firstSentence && visualWordCount(firstSentence) <= 7) return firstSentence;
  const cleaned = source
    .replace(/^(?:if|when)\s+(?:you|you are|you\u2019re|you've|you have)\s+/i, '')
    .replace(/\bI am changing fields\b/gi, 'career change')
    .replace(/\bI am also taking on\b/gi, 'adding');
  const stopWords = new Set(['a', 'an', 'the', 'and', 'or', 'to', 'of', 'for', 'in', 'on', 'with', 'from', 'at', 'by', 'as', 'if', 'when', 'you', 'your', 'they', 'them', 'their', 'this', 'that', 'these', 'those', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'can', 'could', 'should', 'would', 'will', 'do', 'does', 'did', 'it', 'its', 'who', 'which', 'what', 'how', 'whether', 'also', 'usually', 'just', 'only', 'very', 'more', 'most', 'some', 'any', 'before', 'after', 'while', 'because', 'not', 'then', 'than']);
  const tokens = cleaned.match(/[₹$]?\d[\d,.]*(?:[–-]\d[\d,.]*)?%?|[\p{L}][\p{L}\p{N}'’–-]*/gu) || [];
  const phraseTokens = tokens.slice(0, 7);
  while (phraseTokens.length > 2 && stopWords.has(phraseTokens.at(-1).toLowerCase())) phraseTokens.pop();
  const label = phraseTokens.join(' ').replace(/^\p{L}/u, (letter) => letter.toLocaleUpperCase());
  if (label && visualWordCount(label) >= 3 && !isIncompleteTableCell(label)) return label;
  return 'Open the full detail';
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function cleanVisualText(value) {
  return String(value ?? '')
    .replace(/\bBBA career options: what the degree actually leads to\b/gi, 'Explore careers after a BBA')
    .replace(/\bthe\s+entry\s+routes?\s+you\s+start\b/gi, 'ways to qualify')
    .replace(/\bentry\s+routes?\b/gi, (match) => /^[A-Z]/.test(match) ? 'Qualification path' : 'qualification path');
}

function escapeVisualText(value) {
  return escapeHtml(cleanVisualText(value));
}

function categoryFiles(publicDir, category, pageSlug) {
  const root = path.join(publicDir, 'images', 'blog', category);
  if (!fs.existsSync(root)) return [];
  const image = (name) => /\.(?:webp|jpe?g|png)$/i.test(name) && !/-social\./i.test(name) && !/(?:cover|hero|thumbnail)\./i.test(name);
  const direct = fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(root, entry.name))
    .sort((a, b) => a.localeCompare(b));
  const ignored = new Set(['career', 'careers', 'career-options', 'india', 'and', 'for', 'the', 'how', 'to', 'a', 'an', 'after', 'in', 'vs', 'with', 'on', 'of']);
  const tokens = (value) => value.split('-').filter((token) => token && !ignored.has(token));
  const pageTokens = new Set(tokens(pageSlug || ''));
  const candidates = direct.map((dir) => {
    const name = path.basename(dir);
    const overlap = tokens(name).filter((token) => pageTokens.has(token)).length;
    const exact = name === pageSlug ? 100 : 0;
    return { dir, score: exact + overlap };
  }).sort((a, b) => b.score - a.score || a.dir.localeCompare(b.dir));
  for (const { dir, score } of candidates) {
    const files = fs.readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && image(entry.name))
      .map((entry) => path.join(dir, entry.name))
      .sort();
    // Article-specific explanatory packs are never category defaults. They
    // are reusable only by the exact article they were designed for; every
    // other page receives the neutral explanatory set below.
    if (files.length >= 5 && score >= 100) return files.slice(0, 5).map((file) => '/' + path.relative(publicDir, file).split(path.sep).join('/'));
  }
  return [];
}

function generatedBlogFiles(publicDir, category, pageSlug) {
  const root = path.join(publicDir, 'images', 'blog', 'generated-r11', generatedBlogKey(category, pageSlug));
  if (!fs.existsSync(root)) return [];
  const manifestPath = path.join(root, 'index.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      return (manifest.visuals || [])
        .slice(0, 5)
        // Support visuals with structured content render as responsive HTML;
        // their old raster twins are not part of the page and need not exist.
        .filter((visual) => typeof visual.file === 'string'
          && (visual.content || fs.existsSync(path.join(root, visual.file))))
        .map((visual) => '/' + path.relative(publicDir, path.join(root, visual.file)).split(path.sep).join('/'));
    } catch {
      return [];
    }
  }
  const order = { hero: 0, summary: 1, matrix: 2, chain: 3, checklist: 4, proof: 5, detail: 6 };
  return fs.readdirSync(root)
    .filter((name) => new RegExp(`^${pageSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(?:hero|summary|matrix|chain|checklist|proof|detail)(?:-\\d{2})?\\.webp$`).test(name))
    .sort((a, b) => {
      const type = (name) => name.match(/-(hero|summary|matrix|chain|checklist|proof|detail)(?:-\d{2})?\.webp$/)?.[1] || 'detail';
      return (order[type(a)] - order[type(b)]) || a.localeCompare(b);
    })
    .slice(0, 5)
    .map((file) => '/' + path.relative(publicDir, path.join(root, file)).split(path.sep).join('/'));
}

function generatedRouteFiles(publicDir, route) {
  const segments = route.split('/').filter(Boolean);
  const pageSlug = segments.at(-1);
  const category = segments.slice(0, -1).join('-');
  return generatedBlogFiles(publicDir, category, pageSlug);
}

function generatedBlogKey(category, pageSlug) {
  let key = 0;
  for (const character of `${category}/${pageSlug}`) key = (key * 31 + character.charCodeAt(0)) >>> 0;
  return String(key).padStart(10, '0');
}

function generatedBlogSocial(publicDir, category, pageSlug) {
  const file = path.join(publicDir, 'images', 'blog', 'generated-r11', generatedBlogKey(category, pageSlug), `${pageSlug}-social.jpg`);
  return fs.existsSync(file) ? '/' + path.relative(publicDir, file).split(path.sep).join('/') : null;
}

function readableAssetName(src) {
  return path.basename(src).replace(/\.(?:webp|jpe?g|png)$/i, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function generatedVisualLabel(type, pageTitle = 'this career guide', sectionTitle = '') {
  const cleanLabel = (value) => plainText(value || '').replace(/\b(undefined|tbd|lorem|checkpoint|gate|leverage|cohort|heuristic)\b/gi, '').replace(/\.\.\.|…/g, '').replace(/\s+/g, ' ').trim().split(/\s+/).slice(0, 9).join(' ');
  const subject = cleanLabel(pageTitle) || 'career guide';
  const section = cleanLabel(sectionTitle);
  const labels = { hero: `${subject} career decision overview`, summary: `${subject} career planning key ideas`, matrix: `${subject} options comparison table`, chain: `${subject} step by step planning sequence`, checklist: `${subject} career decision checklist`, proof: `${subject} career figures and evidence`, detail: section ? `${section} section explainer` : `${subject} career section summary` };
  return cleanLabel(labels[type] || `${subject} explainer`);
}

function visualType(src) {
  return src.match(/-(hero|summary|matrix|chain|checklist|proof|detail)(?:-\d{2})?\.webp$/)?.[1] || 'detail';
}

function generatedDetailFiles(publicDir, category, pageSlug) {
  const root = path.join(publicDir, 'images', 'blog', 'generated-r11', generatedBlogKey(category, pageSlug));
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root).filter((name) => new RegExp(`^${pageSlug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-detail-\\d{2}\\.webp$`).test(name)).sort()
    .map((name) => '/' + path.relative(publicDir, path.join(root, name)).split(path.sep).join('/'));
}

function generatedVisualMeta(publicDir, src) {
  const manifestPath = path.join(publicDir, path.dirname(src).replace(/^\//, ''), 'index.json');
  if (!fs.existsSync(manifestPath)) return null;
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    return manifest.visuals?.find((visual) => visual.file === path.basename(src)) || null;
  } catch {
    return null;
  }
}

function headingTargets(html) {
  return [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map((match, index) => ({
    index,
    start: match.index,
    end: match.index + match[0].length,
    id: (match[0].match(/\bid="([^"]+)"/i) || [])[1] || '',
    text: plainText(match[1]).toLowerCase(),
  }));
}

function insertAfterHeading(html, visual, keywords, used) {
  const headings = headingTargets(html);
  const normalize = (value) => plainText(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const stopWords = new Set(['the', 'a', 'an', 'for', 'to', 'of', 'and', 'in', 'on', 'by', 'with', 'you', 'your', 'what', 'how', 'who', 'this', 'from', 'before', 'after', 'around', 'at', 'it', 'is', 'are', 'should', 'why', 'gets', 'get', 'no', 'do', 'use', 'article', 'ideas', 'key', 'details', 'sections']);
  const labels = [
    ...[...visual.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map((match) => match[1]),
    ...[...visual.matchAll(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi)].map((match) => match[1]),
  ].map(normalize).filter((label) => label && !/^(?:key ideas from this article|section details|explore \d+ sections|open .* details)$/.test(label));
  const sourceSections = (visual.match(/\bdata-source-sections="([^"]*)"/i)?.[1] || '').split(',').filter(Boolean);
  const sourceTarget = sourceSections
    // Source section IDs are authoritative even when another visual already
    // uses the same section. Keep related cards beside their actual source
    // instead of sending later cards to an unrelated unused heading.
    .map((id) => headings.find((heading) => heading.id === id))
    .find(Boolean);
  const scored = headings.filter((heading) => !used.has(heading.index)).map((heading) => {
    const headingText = normalize(heading.text);
    const headingWords = new Set(headingText.split(' ').filter((word) => word.length > 2 && !stopWords.has(word)));
    let score = 0;
    for (const label of labels) {
      if (label === headingText || label.includes(headingText) || headingText.includes(label)) score = Math.max(score, 100 + Math.min(headingText.length, label.length));
      const labelWords = new Set(label.split(' ').filter((word) => word.length > 2 && !stopWords.has(word)));
      const overlap = [...labelWords].filter((word) => headingWords.has(word)).length;
      score = Math.max(score, overlap);
    }
    return { heading, score };
  }).sort((a, b) => b.score - a.score || a.heading.index - b.heading.index);
  const semantic = scored[0]?.score >= 2 ? scored[0].heading : null;
  const preferred = sourceTarget || semantic || headings.find((heading) => !used.has(heading.index) && keywords.some((keyword) => heading.text.includes(keyword)));
  const target = preferred || headings.find((heading) => !used.has(heading.index));
  if (!target) {
    const closing = /<\/(?:main|article|body)>/i.exec(html);
    return closing ? html.slice(0, closing.index) + visual + '\n' + html.slice(closing.index) : html + visual;
  }
  used.add(target.index);
  const following = html.slice(target.end);
  const adjacentVisuals = /^(?:\s*<figure\b[^>]*\barticle-live-visual\b[^>]*>[\s\S]*?<\/figure>)*/i.exec(following)?.[0] || '';
  const at = target.end + adjacentVisuals.length;
  return html.slice(0, at) + '\n' + visual + html.slice(at);
}

function pageHeadings(html) {
  return [...html.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)]
    .map((match) => plainText(match[1])).filter((value) => value && !/career counselling|scalability|checkpoint|gate|short answer|what to verify/i.test(value)).slice(0, 6);
}

function emptyBlogVisuals(html, publicDir, category, pageSlug) {
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career article');
  const headings = pageHeadings(html);
  const categoryHero = CATEGORY_HEROES.has(category) ? `/images/blog/category-heroes/${category}.webp` : null;
  const generated = generatedBlogFiles(publicDir, category, pageSlug);
  const categoryExplanatory = CATEGORY_HEROES.has(category) ? categoryFiles(publicDir, category, pageSlug) : [];
  const visuals = generated.length > 0
    ? generated.slice(0, 5).map((src, index) => { const mobile = src.replace(/\.webp$/i, '-mobile.webp'); return { src, mobile: fs.existsSync(path.join(publicDir, mobile.slice(1))), label: generatedVisualLabel(index, pageTitle, headings), width: imageSize(publicDir, src)?.w || 1000, height: imageSize(publicDir, src)?.h || 1500 }; })
    : categoryHero
    ? [{ src: categoryHero, label: `${category.replace(/-/g, ' ')} career decision hero`, width: 1600, height: 900 }, ...(categoryExplanatory.length >= 5
      ? categoryExplanatory.map((src) => ({ src, label: readableAssetName(src), width: imageSize(publicDir, src)?.w || 1122, height: imageSize(publicDir, src)?.h || 1402 }))
      : EMPTY_BLOG_VISUALS.slice(1))]
    : EMPTY_BLOG_VISUALS;
  const figure = (visual, index) => {
    const alt = visual.label;
    const title = `${pageTitle}: ${visual.label}`;
    const caption = visual.label;
    const loading = index === 0 ? 'eager' : 'lazy';
    const priority = index === 0 ? ' fetchpriority="high"' : '';
    const image = `<img src="${visual.src}" alt="${escapeAttr(alt)}" title="${escapeAttr(title)}" width="${visual.width}" height="${visual.height}" loading="${loading}" decoding="async"${priority}>`;
    const picture = visual.mobile ? `<picture><source media="(max-width: 640px)" srcset="${visual.src.replace(/\.webp$/i, '-mobile.webp')}">${image}</picture>` : image;
    return `<figure class="article-visual${index === 0 ? ' article-visual--hero' : ''}">${picture}<figcaption>${escapeAttr(caption)}</figcaption></figure>`;
  };

  let out = html;
  const lead = /<p\b[^>]*class="[^"]*lead-para[^"]*"[^>]*>[\s\S]*?<\/p>/i.exec(out);
  if (lead) {
    const at = lead.index + lead[0].length;
    out = out.slice(0, at) + '\n' + figure(visuals[0], 0) + out.slice(at);
  } else {
    const h1Tag = /<h1\b[^>]*>[\s\S]*?<\/h1>/i.exec(out);
    if (!h1Tag) return out;
    const at = h1Tag.index + h1Tag[0].length;
    out = out.slice(0, at) + '\n' + figure(visuals[0], 0) + out.slice(at);
  }

  let cursor = 0;
  let inserted = 1;
  for (let index = 1; index < visuals.length; index += 1) {
    const heading = /<h2\b/i.exec(out.slice(cursor));
    if (!heading) break;
    const at = cursor + heading.index;
    const visual = figure(visuals[index], index);
    out = out.slice(0, at) + visual + '\n' + out.slice(at);
    cursor = at + visual.length;
    inserted += 1;
  }
  while (inserted < visuals.length) {
    const visual = figure(visuals[inserted], inserted);
    const closing = /<\/(?:main|article|body)>/i.exec(out);
    if (!closing) break;
    out = out.slice(0, closing.index) + visual + '\n' + out.slice(closing.index);
    inserted += 1;
  }
  return out;
}

function replaceBlogVisualsLegacy(html, publicDir, category, pageSlug) {
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career article');
  const headings = pageHeadings(html);
  const generated = generatedBlogFiles(publicDir, category, pageSlug);
  if (generated.length < 5) return html;
  const visuals = generated.slice(0, 5).map((src, index) => {
    const mobile = src.replace(/\.webp$/i, '-mobile.webp');
    return {
      src,
      mobile: fs.existsSync(path.join(publicDir, mobile.slice(1))),
      label: generatedVisualLabel(index, pageTitle, headings),
      width: imageSize(publicDir, src)?.w || 1000,
      height: imageSize(publicDir, src)?.h || 1500,
      type: ['hero', 'summary', 'matrix', 'chain', 'checklist', 'proof'][index],
    };
  });
  const figure = (visual, index) => {
    const alt = visual.label;
    const title = `${pageTitle}: ${visual.label}`;
    const caption = visual.label;
    const loading = index === 0 ? 'eager' : 'lazy';
    const priority = index === 0 ? ' fetchpriority="high"' : '';
    const image = `<img src="${visual.src}" alt="${escapeAttr(alt)}" title="${escapeAttr(title)}" width="${visual.width}" height="${visual.height}" loading="${loading}" decoding="async"${priority}>`;
    const picture = visual.mobile ? `<picture><source media="(max-width: 640px)" srcset="${visual.src.replace(/\.webp$/i, '-mobile.webp')}">${image}</picture>` : image;
    return `<figure class="article-visual${index === 0 ? ' article-visual--hero' : ''}" data-visual-type="${visual.type}">${picture}<figcaption>${escapeAttr(caption)}</figcaption></figure>`;
  };
  let out = html.replace(/<figure\b[^>]*class="[^"]*\b(?:article-cover|article-visual)\b[^"]*"[^>]*>[\s\S]*?<\/figure>/gi, '');
  const lead = /<p\b[^>]*class="[^"]*lead-para[^\"]*"[^>]*>[\s\S]*?<\/p>/i.exec(out);
  const h1Tag = /<h1\b[^>]*>[\s\S]*?<\/h1>/i.exec(out);
  const heroAt = lead ? lead.index + lead[0].length : h1Tag ? h1Tag.index + h1Tag[0].length : -1;
  const hero = figure(visuals[0], 0);
  if (heroAt >= 0) out = out.slice(0, heroAt) + '\n' + hero + out.slice(heroAt);
  else out = insertAfterHeading(out, hero, [], new Set());
  const used = new Set();
  const routes = [
    ['summary', ['short answer', 'overview', 'real picture', 'why', 'what this means']],
    ['matrix', ['compare', 'comparison', 'table', 'options', 'paths', 'difference', 'versus', ' vs ']],
    ['chain', ['steps', 'process', 'how to', 'roadmap', 'plan', 'become', 'build']],
    ['checklist', ['checklist', 'questions', 'mistakes', 'avoid', 'before you', 'choose']],
    ['proof', ['salary', 'pay', 'cost', 'fee', 'money', 'budget', 'time', 'years', 'figure']],
  ];
  for (let i = 0; i < routes.length; i += 1) {
    const [, keywords] = routes[i];
    out = insertAfterHeading(out, figure(visuals[i + 1], i + 1), keywords, used);
  }
  const details = generatedDetailFiles(publicDir, category, pageSlug);
  for (let i = 0; i < details.length; i += 1) {
    const src = details[i];
    const mobile = src.replace(/\.webp$/i, '-mobile.webp');
    const label = `${pageTitle} section explainer ${i + 1}`;
    const image = `<figure class="article-visual article-visual--detail" data-visual-type="detail"><picture><source media="(max-width: 640px)" srcset="${mobile}"><img src="${src}" alt="${escapeAttr(label)}" title="${escapeAttr(label)}" width="${imageSize(publicDir, src)?.w || 1000}" height="${imageSize(publicDir, src)?.h || 667}" loading="lazy" decoding="async"><\/picture><figcaption>${escapeAttr(`Key facts from ${pageTitle} section ${i + 1}`)}</figcaption></figure>`;
    out = insertAfterHeading(out, image, ['background', 'context', 'why', 'what', 'overview'], used);
  }
  return out;
}

function replaceRouteVisualsLegacy(html, publicDir, route) {
  const generated = generatedRouteFiles(publicDir, route);
  if (generated.length < 5) return html;
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career guide');
  const headings = pageHeadings(html);
  const visuals = generated.slice(0, 5).map((src, index) => {
    const mobile = src.replace(/\.webp$/i, '-mobile.webp');
    return {
      src,
      mobile: fs.existsSync(path.join(publicDir, mobile.slice(1))),
      label: generatedVisualLabel(index, pageTitle, headings),
      width: imageSize(publicDir, src)?.w || 1000,
      height: imageSize(publicDir, src)?.h || 1500,
      type: ['hero', 'summary', 'matrix', 'chain', 'checklist', 'proof'][index],
    };
  });
  const figure = (visual, index) => {
    const alt = visual.label;
    const title = `${pageTitle}: ${visual.label}`;
    const image = `<img src="${visual.src}" alt="${escapeAttr(alt)}" title="${escapeAttr(title)}" width="${visual.width}" height="${visual.height}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"${index === 0 ? ' fetchpriority="high"' : ''}>`;
    const picture = visual.mobile ? `<picture><source media="(max-width: 640px)" srcset="${visual.src.replace(/\.webp$/i, '-mobile.webp')}">${image}</picture>` : image;
    return `<figure class="resource-visual${index === 0 ? ' resource-visual-hero' : ''}" data-visual-type="${visual.type}">${picture}<figcaption>${escapeAttr(visual.label)}</figcaption></figure>`;
  };
  let out = html.replace(/<figure\b[^>]*class="(?:[^"]*bofu-image[^"]*|[^"]*visual[^"]*)"[^>]*>[\s\S]*?<\/figure>/gi, '');
  const h1Tag = /<h1\b[^>]*>[\s\S]*?<\/h1>/i.exec(out);
  const hero = figure(visuals[0], 0);
  if (h1Tag) { const at = h1Tag.index + h1Tag[0].length; out = out.slice(0, at) + '\n' + hero + out.slice(at); }
  else out = insertAfterHeading(out, hero, [], new Set());
  const used = new Set();
  const keywords = [
    ['what you get', 'included', 'outcome', 'session', 'steps'],
    ['compare', 'options', 'difference', 'path'],
    ['how', 'process', 'plan', 'next'],
    ['who', 'fit', 'for you', 'choose'],
    ['cost', 'price', 'fee', 'budget', 'time'],
  ];
  for (let i = 0; i < keywords.length; i += 1) out = insertAfterHeading(out, figure(visuals[i + 1], i + 1), keywords[i], used);
  return out;
}

function visualDescriptor(src, publicDir, pageTitle) {
  const mobile = src.replace(/\.webp$/i, '-mobile.webp');
  const type = visualType(src);
  const meta = generatedVisualMeta(publicDir, src);
  return {
    src,
    type,
    mobile: fs.existsSync(path.join(publicDir, mobile.slice(1))) ? mobile : null,
    label: meta?.alt || generatedVisualLabel(type, pageTitle),
    alt: meta?.alt || generatedVisualLabel(type, pageTitle),
    title: meta?.title || `${pageTitle}: ${meta?.alt || generatedVisualLabel(type, pageTitle)}`,
    caption: meta?.caption || meta?.alt || generatedVisualLabel(type, pageTitle),
    heading: meta?.heading || '',
    content: meta?.content || null,
    width: imageSize(publicDir, src)?.w || 1000,
    height: imageSize(publicDir, src)?.h || 1500,
  };
}

function liveVisualKicker(type) {
  return ({ summary: 'Key ideas', matrix: 'Compare clearly', chain: 'Try the path', checklist: 'Check first', proof: 'Numbers in context', detail: 'Read the evidence' })[type] || 'Career evidence';
}

function compactTableCell(value, maxWords = 6) {
  const source = cleanVisualText(value)
    .replace(/\bworking knowledge of\b/gi, '')
    .replace(/^(?:its|their|our|your)\s+(?:own\s+)?/i, '')
    .replace(/\s*\([^()]*\)/g, '')
    .replace(/,\s*(?:plus|with|because|while|which|and increasingly)\b[\s\S]*$/i, '')
    .replace(/\s+/g, ' ').trim();
  if (!source || (visualWordCount(source) <= maxWords && !isIncompleteTableCell(source))) return source;
  const badStart = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'with', 'for', 'to', 'of', 'in', 'on', 'by', 'from', 'at', 'as', 'which', 'that', 'who', 'what', 'how']);
  const badEnd = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'with', 'for', 'to', 'of', 'in', 'on', 'by', 'from', 'at', 'as', 'which', 'that', 'who', 'what', 'how', 'increasingly', 'regularly', 'usually', 'generally', 'especially', 'mostly']);
  const matches = [...source.matchAll(/\S+/g)];
  const candidates = [];
  for (let start = 0; start < matches.length; start += 1) {
    for (let length = Math.min(maxWords, matches.length - start); length >= 2; length -= 1) {
      const text = source.slice(matches[start].index, matches[start + length - 1].index + matches[start + length - 1][0].length).replace(/^[,;:]+|[,;:]+$/g, '').trim();
      const tokens = text.match(/[\p{L}\p{N}]+(?:[.,][\p{L}\p{N}]+)*/gu) || [];
      if (!tokens.length || tokens.length > maxWords || badStart.has(tokens[0].toLowerCase()) || badEnd.has(tokens.at(-1).toLowerCase()) || isIncompleteTableCell(text)) continue;
      let score = tokens.length * 1.5 - start * 1.2;
      if (/\d/.test(text)) score += 5;
      if (/[.!?]$/.test(text)) score += 0.5;
      if (/^(?:a|an|the|very|widely|roughly|about|approximately)\b/i.test(text)) score -= 2;
      candidates.push({ text, score, start, length });
    }
  }
  candidates.sort((a, b) => b.score - a.score || a.start - b.start || b.length - a.length);
  return candidates[0]?.text || '';
}

function topicMatrixPreview(pageTitle) {
  const title = plainText(String(pageTitle || '')).toLocaleLowerCase();
  const previews = [
    {
      match: /benefits and limits of career guidance/,
      columns: ['Guidance Can', 'Guidance Cannot', 'Next Step'],
      row: ['Explain routes, costs and timelines', 'Cannot replace official notices', 'Verify each current admission rule'],
    },
    {
      match: /emcee script and invitation for a career guidance programme/,
      columns: ['Programme Part', 'What to Say', 'Keep in Mind'],
      row: ['Welcome', 'Explain today’s career focus', 'Keep the purpose brief'],
    },
    {
      match: /how to get a product manager job after engineering/,
      columns: ['Entry Route', 'Best Fit', 'Reality Check'],
      row: ['Structured APM program', 'Final-year students', 'Campus windows are narrow'],
    },
    {
      match: /starting a business vs job in india/,
      columns: ['Path', 'Income Floor', 'Main Trade-Off'],
      row: ['Salaried job', 'Fixed monthly income', 'Role limits the ceiling'],
    },
    {
      match: /how to support child during career confusion/,
      columns: ['What You See', 'Helpful Response', 'Avoid'],
      row: ['Child avoids the topic', 'Ask small, low-pressure questions', 'Skip forced serious talks'],
    },
    {
      match: /product manager skills roadmap india/,
      columns: ['Preparation', 'What It Shows', 'Reality Check'],
      row: ['Portfolio case study', 'Applied product judgment', 'Often outweighs certificates'],
    },
  ];
  return previews.find((preview) => preview.match.test(title)) || null;
}

function isIncompleteTableCell(value) {
  const text = plainText(String(value || '')).replace(/[.!?;:]+$/, '').trim();
  const tokens = text.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) || [];
  if (!tokens.length) return true;
  const last = tokens.at(-1).toLowerCase();
  if (last === 'you' && /^what\s+(?:energizes|motivates|drives|interests|matters to)\b/i.test(text)) return false;
  return new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'with', 'for', 'to', 'of', 'in', 'on', 'by', 'from', 'at', 'as',
    'which', 'that', 'who', 'whose', 'what', 'how', 'because', 'than', 'can', 'could', 'would', 'should', 'will',
    'do', 'does', 'did', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'you', 'your', 'yours',
    'our', 'their', 'its', 'his', 'her', 'more', 'less', 'whole', 'piece', 'point', 'another', 'other', 'same',
  ]).has(last);
}

function liveVisualFigure(visual, index, className, pageTitle = '', pagePhraseState = new Set(), pageSourceText = []) {
  const content = visual.content;
  if (!content) return visualFigure(visual, '', index, className);
  const heading = plainText(visual.heading || visual.caption || 'Career evidence').replace(/[:;]+$/, '').trim();
  const normalizeHeading = (value) => plainText(value).toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const contentBlocks = content.kind === 'bundle' ? Array.isArray(content.blocks) ? content.blocks : [] : [content];
  const blocks = visual.type === 'matrix'
    ? [...contentBlocks.filter((block) => block.kind === 'table'), ...contentBlocks.filter((block) => block.kind !== 'table')]
    : contentBlocks;
  const sourceText = [...pageSourceText, ...blocks.flatMap((block) => Array.isArray(block.figures) ? block.figures.map((item) => item.source || '') : [])]
    .map((value) => plainText(String(value || '')).toLocaleLowerCase().replace(/[^\p{L}\p{N}₹%]+/gu, ' ').trim())
    .filter(Boolean);
  const remaining = blocks.slice(1);
  const moreSummary = remaining.length ? `More sections (${remaining.length})` : '';
  const firstAnswer = blocks.map((block) => block.answer).find(Boolean);
  const heroAnswerIsHeading = visual.type === 'hero' && Boolean(firstAnswer);
  const sectionHeading = visual.type !== 'hero' && visual.type !== 'summary'
    ? blocks.map((block) => block.sourceSectionTitle || block.heading || '').find((value) => plainText(value).trim())
    : '';
  const initialHeading = heroAnswerIsHeading
    ? plainText(firstAnswer).replace(/[:;]+$/, '').trim()
    : plainText(sectionHeading || heading).replace(/[:;]+$/, '').trim();
  const panelPhrases = new Set();
  const phraseKeys = (value) => {
    const words = plainText(String(value || '')).toLocaleLowerCase().match(/[\p{L}\p{N}₹%]+/gu) || [];
    const keys = [];
    for (let i = 0; i + 5 <= words.length; i += 1) keys.push(words.slice(i, i + 5).join(' '));
    return keys;
  };
  const collidesWithEarlierPanel = (value) => phraseKeys(value).some((key) => pagePhraseState.has(key));
  const fitHeading = (value, fallback) => {
    const text = plainText(value || '').trim();
    if (text && !collidesWithEarlierPanel(text)) return text;
    return fallback;
  };
  const registerPhrases = (value) => { for (const key of phraseKeys(value)) panelPhrases.add(key); };
  const headingFallback = ({ hero: 'A Clearer Decision', summary: 'Key Ideas to Weigh', matrix: 'Compare the Main Options', proof: 'Useful Figures', checklist: 'Questions Worth Asking', chain: 'Practical Next Steps', detail: 'Supporting Evidence' })[visual.type] || 'Career Evidence';
  const initialHeadingWords = visualWordCount(initialHeading);
  const headingTooLong = initialHeadingWords > (visual.type === 'hero' ? 14 : 7);
  const headingIsPageTitle = visual.type !== 'hero' && normalizeHeading(initialHeading) === normalizeHeading(pageTitle);
  const headingIsIncomplete = visual.type !== 'hero' && isIncompleteTableCell(initialHeading);
  const displayHeading = fitHeading(
    !initialHeadingWords || headingTooLong || headingIsPageTitle || headingIsIncomplete ? '' : initialHeading,
    headingFallback,
  );
  const renderBlock = (block, visible = true) => {
    const omitAnswer = heroAnswerIsHeading && block.answer === firstAnswer;
    const prioritizeTable = visual.type === 'matrix' && block.kind === 'table' && visible;
    const answer = block.answer && !omitAnswer && !prioritizeTable ? renderCopy(block.answer, 'article-live-answer', visible) : '';
    const supporting = !prioritizeTable && Array.isArray(block.supporting) ? block.supporting.filter(Boolean).filter((text) => {
      const normalized = plainText(String(text)).toLocaleLowerCase().replace(/[^\p{L}\p{N}₹%]+/gu, ' ').trim();
      return normalized && !sourceText.some((source) => source === normalized || source.includes(normalized));
    }).map((text) => renderCopy(text, 'article-live-supporting', visible)).join('') : '';
    const steps = Array.isArray(block.steps) ? block.steps.filter(Boolean) : [];
    const stepsHtml = steps.length ? `<ol class="article-live-items article-live-items--chain">${steps.map((step) => `<li class="article-live-item article-live-item--plain">${renderCopy(typeof step === 'string' ? step : [step.title, step.body].filter(Boolean).join(': '), 'article-live-item__text', visible)}</li>`).join('')}</ol>` : '';
    if (block.kind === 'table') {
      const tables = Array.isArray(block.tables) ? block.tables : [block];
      const renderTable = (table, rows = table.rows) => {
        const columns = Array.isArray(table.columns) ? table.columns.slice(0, 3) : [];
        rows = Array.isArray(rows) ? rows : [];
        if (!columns.length || !rows.length) return '';
        return `<div class="article-live-table-wrap"><table><thead><tr>${columns.map((column) => `<th scope="col">${escapeVisualText(column)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${columns.map((column, columnIndex) => `<td data-label="${escapeAttr(cleanVisualText(column))}">${escapeVisualText(row?.[columnIndex] ?? '')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      };
      const sourceTables = Array.isArray(block.sourceTables) ? block.sourceTables : [];
      const allTables = [...tables, ...sourceTables];
      if (!visible) return `${answer}${allTables.map((table) => renderTable(table)).join('')}${stepsHtml}${supporting}`;
      const visibleTables = [];
      const deferredTables = [];
      let deferred = false;
      for (const table of allTables) {
        const columns = Array.isArray(table.columns) ? table.columns.slice(0, 3) : [];
        const rows = Array.isArray(table.rows) ? table.rows : [];
        if (!columns.length || !rows.length) continue;
        const headerWords = visualWordCount(columns.join(' '));
        if (visibleWordCount + headerWords + 2 > 40 || collidesWithEarlierPanel(columns.join(' '))) { deferred = true; deferredTables.push(table); continue; }
        const visibleRows = [];
        const deferredRows = [];
        for (const row of rows) {
          // Mobile renders each column name beside its cell, so include those
          // repeated labels in the visible-word budget before adding a row.
          const rowWords = visualWordCount((row || []).join(' ')) + visualWordCount(columns.join(' '));
          const cellsFit = (row || []).slice(0, 3).every((cell) => visualWordCount(cell) <= 6 && !isIncompleteTableCell(cell));
          const firstRowHeaderWords = visibleRows.length ? 0 : headerWords;
          if (!cellsFit || visibleWordCount + rowWords + firstRowHeaderWords > 40 || collidesWithEarlierPanel((row || []).join(' '))) { deferred = true; deferredRows.push(row); continue; }
          visibleWordCount += rowWords + firstRowHeaderWords;
          registerPhrases((row || []).join(' '));
          visibleRows.push(row);
        }
        if (visibleRows.length) {
          visibleTables.push(renderTable(table, visibleRows));
          registerPhrases(columns.join(' '));
        }
        if (deferredRows.length) deferredTables.push({ ...table, rows: deferredRows });
        if (visibleRows.length < rows.length) deferred = true;
      }
      let preview = visibleTables.join('');
      if (!preview) {
        const badTableEnd = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'by', 'or', 'than', 'because', 'who', 'which', 'whose', 'what', 'how']);
        const candidates = allTables.flatMap((table) => (table.rows || []).map((row) => ({ table, row })))
          .filter(({ table, row }) => table.columns?.length && row?.length === table.columns.length && row.every((cell) => visualWordCount(cell) <= 6 && !isIncompleteTableCell(cell) && (() => {
            const tokens = visualWordCount(cell) ? plainText(String(cell)).match(/[\p{L}\p{N}]+/gu) || [] : [];
            return tokens.length > 0 && !badTableEnd.has(tokens.at(-1).toLowerCase());
          })()))
          .map((candidate) => ({
            ...candidate,
            words: visualWordCount(candidate.table.columns.join(' ')) + visualWordCount(candidate.row.join(' ')) + visualWordCount(candidate.table.columns.join(' ')),
            repeated: collidesWithEarlierPanel(candidate.row.join(' ')),
          }))
          .sort((a, b) => Number(a.repeated) - Number(b.repeated) || a.words - b.words);
        const choice = candidates.find((candidate) => candidate.words <= 40 - visibleWordCount);
        if (choice) {
          preview = renderTable(choice.table, [choice.row]);
          const previewKey = JSON.stringify(choice.row);
          for (const deferredTable of deferredTables) {
            deferredTable.rows = (deferredTable.rows || []).filter((row) => JSON.stringify(row) !== previewKey);
          }
        }
        if (!preview) {
          const compactCandidates = [];
          const compactSourceTables = [...new Set([
            ...allTables,
            ...allTables.flatMap((table) => Array.isArray(table.sourceTables) ? table.sourceTables : []),
            ...allTables.flatMap((table) => Array.isArray(table.tables) ? table.tables : []),
          ])];
          for (let maxWords = 6; maxWords >= 3; maxWords -= 1) {
            for (const table of compactSourceTables) {
              const columns = (Array.isArray(table.columns) ? table.columns : []).slice(0, 3).map((cell) => compactTableCell(cell, maxWords));
              const rows = (Array.isArray(table.rows) ? table.rows : []).map((row) => (Array.isArray(row) ? row.slice(0, 3) : []).map((cell) => compactTableCell(cell, maxWords)));
              if (!columns.length || columns.some((cell) => !cell || visualWordCount(cell) > maxWords)) continue;
              for (let index = 0; index < rows.length; index += 1) {
                const row = rows[index];
                if (row.length < 2 || row.some((cell) => !cell || visualWordCount(cell) > maxWords)) continue;
                const candidate = { table: { ...table, columns, rows }, row, index, maxWords };
                candidate.words = visualWordCount(columns.join(' ')) + visualWordCount(row.join(' ')) + visualWordCount(columns.join(' '));
                candidate.repeated = collidesWithEarlierPanel(row.join(' '));
                if (candidate.words <= 40 - visibleWordCount) compactCandidates.push(candidate);
              }
            }
          }
          compactCandidates.sort((a, b) => b.maxWords - a.maxWords || Number(a.repeated) - Number(b.repeated) || a.index - b.index || a.words - b.words);
          const choice = compactCandidates[0];
          if (choice) {
            preview = renderTable(choice.table, [choice.row]);
            visibleWordCount += choice.words;
            registerPhrases(choice.table.columns.join(' '));
            registerPhrases(choice.row.join(' '));
          }
        }
      }
      const topicPreview = visual.type === 'matrix' ? topicMatrixPreview(pageTitle) : null;
      if (topicPreview) {
        preview = renderTable({ columns: topicPreview.columns }, [topicPreview.row]);
        visibleWordCount += visualWordCount(topicPreview.columns.join(' ')) * 2 + visualWordCount(topicPreview.row.join(' '));
        registerPhrases(topicPreview.columns.join(' '));
        registerPhrases(topicPreview.row.join(' '));
      }
      if (!visibleTables.length && !preview) visibleWordCount += 3;
      if (deferred) {
        visibleWordCount += 2;
        const remaining = deferredTables.map((table) => renderTable(table)).join('');
        return `${answer}${preview}<details class="article-live-source-tables"><summary>More rows</summary>${remaining}</details>${stepsHtml}${supporting}`;
      }
      return `${answer}${preview}${stepsHtml}${supporting}`;
    }
    if (block.kind === 'figures') {
      const figures = Array.isArray(block.figures) ? block.figures : [];
      const sources = [...new Set(figures.map((figure) => String(figure.source || '').trim()).filter(Boolean))];
      const sourceNotes = sources.length ? `<details class="article-live-sources"><summary>Sources</summary>${sources.map((source) => `<p><small>${escapeVisualText(source)}</small></p>`).join('')}</details>` : '';
      if (visible && sources.length) visibleWordCount += 1;
      const renderFigure = (figure, compact = false, labelOverride = '') => {
        const value = cleanVisualText(figure.value || '');
        let label = labelOverride || cleanVisualText(figure.label || '');
        if (compact) label = compactVisualLabel(label);
        return `<div class="article-live-stat"><strong>${escapeVisualText(value)}</strong><span>${escapeVisualText(label)}</span></div>`;
      };
      const shown = [];
      const deferred = [];
      if (!visible) shown.push(...figures.map((figure) => ({ figure, label: cleanVisualText(figure.label || '') })));
      else for (const figure of figures) {
        const value = cleanVisualText(figure.value || '');
        let label = cleanVisualText(figure.label || '');
        if (collidesWithEarlierPanel(`${value} ${label}`)) label = compactVisualLabel(label);
        const words = visualWordCount(value) + visualWordCount(label);
        if (visibleWordCount + words <= 40) {
          shown.push({ figure, label });
          visibleWordCount += words;
          registerPhrases(`${value} ${label}`);
        } else deferred.push(figure);
      }
      if (visible && deferred.length) {
        while (shown.length && visibleWordCount + 2 > 40) {
          const { figure, label } = shown.pop();
          const words = visualWordCount(figure.value || '') + visualWordCount(label || '');
          visibleWordCount -= words;
          deferred.unshift(figure);
        }
        visibleWordCount += 2;
      }
      const stats = shown.length ? `<div class="article-live-stats">${shown.map(({ figure, label }) => renderFigure(figure, false, label)).join('')}</div>` : '';
      const moreStats = deferred.length ? `<details class="article-live-more-figures"><summary>More figures</summary><div class="article-live-stats">${deferred.map((figure) => renderFigure(figure, true)).join('')}</div></details>` : '';
      return `${answer}${stats}${moreStats}${sourceNotes}${stepsHtml}${supporting}`;
    }
    const items = Array.isArray(block.items) ? block.items : [];
    const listTag = block.type === 'chain' ? 'ol' : 'ul';
    const listClass = block.type === 'checklist' ? ' article-live-items--checklist' : block.type === 'chain' ? ' article-live-items--chain' : '';
    const deferredItems = [];
    const visibleItems = items.map((item, itemIndex) => {
      const text = cleanVisualText(item.text || '');
      const itemHeading = cleanVisualText(item.heading || '');
      if (!visible) return `<li class="article-live-item${itemHeading ? '' : ' article-live-item--plain'}">${itemHeading ? `<span class="article-live-item__label">${escapeVisualText(itemHeading)}</span>` : ''}<span class="article-live-item__text">${escapeVisualText(text)}</span></li>`;
      if (visibleWordCount + visualWordCount(itemHeading) + visualWordCount(text) + 2 <= 40 && !collidesWithEarlierPanel(`${itemHeading} ${text}`)) {
        visibleWordCount += visualWordCount(itemHeading) + visualWordCount(text);
        registerPhrases(`${itemHeading} ${text}`);
        return `<li class="article-live-item${itemHeading ? '' : ' article-live-item--plain'}">${itemHeading ? `<span class="article-live-item__label">${escapeVisualText(itemHeading)}</span>` : ''}<span class="article-live-item__text">${escapeVisualText(text)}</span></li>`;
      }
      const label = compactVisualLabel(itemHeading || text);
      const summary = fitHeading(label, `Check ${itemIndex + 1}`);
      if (visibleWordCount + visualWordCount(summary) + 2 <= 40) {
        visibleWordCount += visualWordCount(summary);
        registerPhrases(summary);
        return `<li class="article-live-item${itemHeading ? '' : ' article-live-item--plain'}"><details class="article-live-compact-detail"><summary class="article-live-item__text">${escapeVisualText(summary)}</summary><p>${escapeVisualText(text)}</p></details></li>`;
      }
      deferredItems.push({ itemHeading, text });
      return '';
    });
    const itemsHtml = visibleItems.some(Boolean) ? `<${listTag} class="article-live-items${listClass}">${visibleItems.join('')}</${listTag}>` : '';
    const moreItems = deferredItems.length
      ? `<details class="article-live-more"><summary>More ${block.type === 'checklist' ? 'checks' : block.type === 'chain' ? 'steps' : 'points'}</summary><${listTag} class="article-live-items${listClass}">${deferredItems.map(({ itemHeading, text }) => `<li class="article-live-item${itemHeading ? '' : ' article-live-item--plain'}">${itemHeading ? `<span class="article-live-item__label">${escapeVisualText(itemHeading)}</span>` : ''}<span class="article-live-item__text">${escapeVisualText(text)}</span></li>`).join('')}</${listTag}></details>`
      : '';
    if (deferredItems.length) visibleWordCount += 2;
    return `${answer}${itemsHtml}${moreItems}${stepsHtml}${supporting}`;
  };
  const sourceSections = content.kind === 'bundle'
    ? [...new Set((content.blocks || []).map((block) => block.sourceSectionId).filter(Boolean))]
    : [content.sourceSectionId].filter(Boolean);
  const sourceAttr = sourceSections.length ? ` data-source-sections="${escapeAttr(sourceSections.join(','))}"` : '';
  const genericCaption = /^(?:career overview for|a short visual summary of|evidence card about|focused evidence about|summary of|career direction at a glance for|based on article content|more context from the article|further context for this section|key points at a glance|a starting point for comparing routes|compare the listed options)/i;
  const captionCandidate = plainText(visual.caption || '').replace(/[:;]+$/, '').trim();
  const repeatsTitle = pageTitle && normalizeHeading(captionCandidate) === normalizeHeading(pageTitle);
  const captionLead = ({ hero: 'Decision summary', summary: 'Key points', matrix: 'Compare routes', proof: 'Figures in context', checklist: 'Questions to consider', chain: 'Steps to take', detail: 'Page evidence' })[visual.type] || 'Article visual';
  const captionTopic = heading.split(/\s+/).filter(Boolean).slice(0, 2).join(' ');
  const caption = !captionCandidate || genericCaption.test(captionCandidate) || repeatsTitle || visualWordCount(captionCandidate) > 6
    ? visual.type === 'matrix' ? 'Compare routes' : `${captionLead}: ${captionTopic || 'Career choices'}`
    : captionCandidate;
  const captionShortType = ({ hero: 'Decision', summary: 'Takeaways', matrix: 'Comparison', proof: 'Figures', checklist: 'Checks', chain: 'Steps', detail: 'Evidence' })[visual.type] || 'Visual';
  const uniqueCaption = fitHeading(caption, `${captionShortType}: ${captionTopic.split(/\s+/)[0] || 'Career'}`);
  let visibleWordCount = visualWordCount(displayHeading) + visualWordCount(uniqueCaption) + visualWordCount(moreSummary);
  registerPhrases(displayHeading);
  registerPhrases(uniqueCaption);
  const renderCopy = (value, className, visible = true) => {
    let text = cleanVisualText(value || '').trim();
    if (!text || (!/[.!?]$/.test(text) && isIncompleteTableCell(text))) return '';
    text = text.replace(/^\p{Ll}/u, (letter) => letter.toLocaleUpperCase());
    if (!/[.!?]$/.test(text)) text += '.';
    if (!visible) return `<p class="${className}">${escapeVisualText(text)}</p>`;
    const words = visualWordCount(text);
    if (visibleWordCount + words <= 40 && !collidesWithEarlierPanel(text)) {
      visibleWordCount += words;
      registerPhrases(text);
      return `<p class="${className}">${escapeVisualText(text)}</p>`;
    }
    const label = fitHeading(compactVisualLabel(text), 'Full detail');
    visibleWordCount += visualWordCount(label);
    registerPhrases(label);
    return `<details class="article-live-compact-detail"><summary class="${className}">${escapeVisualText(label)}</summary><p>${escapeVisualText(text)}</p></details>`;
  };
  const first = blocks[0] ? `<div class="article-live-primary">${renderBlock(blocks[0])}</div>` : '';
  const singleProofFigure = visual.type === 'proof'
    && (first.match(/class="article-live-stat"/g) || []).length === 1
    && !first.includes('article-live-table-wrap');
  const more = remaining.length
    ? `<details class="article-live-more"><summary>${escapeVisualText(moreSummary)}</summary>${remaining.map((block) => `<details class="article-live-need"><summary>${escapeVisualText(block.heading || 'Section details')}</summary>${renderBlock(block, false)}</details>`).join('')}</details>`
    : '';
  const body = `<div class="article-live-bundle">${first}${more}</div>`;
  const ariaLabel = displayHeading || firstAnswer || caption;
  const headingHtml = displayHeading ? `<h3>${escapeVisualText(displayHeading)}</h3>` : '';
  for (const key of panelPhrases) pagePhraseState.add(key);
  return `<figure class="${className} article-live-visual" data-visual-type="${escapeAttr(visual.type)}"${sourceAttr} role="group" aria-label="${escapeAttr(cleanVisualText(ariaLabel))}"><div class="article-live-card${singleProofFigure ? ' article-live-card--narrow' : ''}">${headingHtml}${body}</div>${uniqueCaption ? `<figcaption>${escapeVisualText(uniqueCaption)}</figcaption>` : ''}</figure>`;
}
function visualFigure(visual, pageTitle, index, className) {
  const image = `<img src="${visual.src}" alt="${escapeAttr(visual.alt || visual.label)}" title="${escapeAttr(visual.title || visual.label)}" width="${visual.width}" height="${visual.height}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"${index === 0 ? ' fetchpriority="high"' : ''}>`;
  const picture = visual.mobile ? `<picture><source media="(max-width: 640px)" srcset="${visual.mobile}">${image}</picture>` : image;
  return `<figure class="${className}" data-visual-type="${visual.type}">${picture}<figcaption>${escapeAttr(visual.caption || visual.label)}</figcaption></figure>`;
}

function placeGeneratedVisuals(html, publicDir, generated, pageTitle, className, keywords) {
  if (!generated.length) return html;
  const visuals = generated.map((src) => visualDescriptor(src, publicDir, pageTitle));
  const pageSourceText = visuals.flatMap((visual) => {
    const blocks = visual.content?.kind === 'bundle' ? (visual.content.blocks || []) : [visual.content].filter(Boolean);
    return blocks.flatMap((block) => Array.isArray(block.figures) ? block.figures.map((item) => item.source || '') : []);
  });
  const preserveBofuHero = className === 'resource-visual' && /<figure\b[^>]*class="[^"]*\bbofu-image\b[^"]*"/i.test(html);
  const preserveBofuContext = className === 'resource-visual' && /<figure\b[^>]*class="[^"]*\bbofu-context-visual\b[^"]*"/i.test(html);
  const coverPattern = /<figure\b[^>]*class="[^"]*\b(?:article-cover-visual|compass-cover-visual)\b[^"]*"[^>]*>[\s\S]*?<\/figure>/i;
  const hasEditorialCover = coverPattern.test(html);
  let out = html.replace(/<figure\b[^>]*class="([^"]*)"[^>]*>[\s\S]*?<\/figure>/gi, (figure, classNames) => {
    if (!/(?:^|\s)(?:article-cover|article-visual|resource-visual|bofu-image|bofu-context-visual|compass-visual|locations-hub-visual)(?:\s|$)/i.test(classNames)) return figure;
    if (preserveBofuHero && /(?:^|\s)bofu-image(?:\s|$)/i.test(classNames)) return figure;
    if (preserveBofuContext && /(?:^|\s)bofu-context-visual(?:\s|$)/i.test(classNames)) return figure;
    if (hasEditorialCover && /(?:^|\s)(?:article-cover-visual|compass-cover-visual)(?:\s|$)/i.test(classNames)) return figure;
    return '';
  });
  const hero = visuals.find((visual) => visual.type === 'hero') || visuals[0];
  const hasExistingCover = hasEditorialCover || preserveBofuHero;
  const placedVisuals = visuals.filter((visual) => visual !== hero);
  if (hero?.content && placedVisuals.length) {
    const mergeTarget = placedVisuals.find((visual) => visual.type === 'summary') || placedVisuals[0];
    const asBlocks = (value) => value?.kind === 'bundle' ? value.blocks || [] : value ? [value] : [];
    mergeTarget.content = { kind: 'bundle', blocks: [...asBlocks(hero.content), ...asBlocks(mergeTarget.content)] };
  }
  const lead = /<p\b[^>]*class="[^"]*lead-para[^"]*"[^>]*>[\s\S]*?<\/p>/i.exec(out);
  const h1 = /<h1\b[^>]*>[\s\S]*?<\/h1>/i.exec(out);
  const at = lead ? lead.index + lead[0].length : h1 ? h1.index + h1[0].length : -1;
  const pagePhraseState = new Set();
  const heroHtml = visualFigure(hero, pageTitle, 0, className);
  if (!hasExistingCover) {
    if (at >= 0) out = out.slice(0, at) + '\n' + heroHtml + out.slice(at);
    else out = insertAfterHeading(out, heroHtml, [], new Set());
  }
  const used = new Set(); let index = 1;
  for (const visual of placedVisuals) {
    out = insertAfterHeading(out, liveVisualFigure(visual, index, className, pageTitle, pagePhraseState, pageSourceText), keywords[visual.type] || keywords.detail || [], used);
    index += 1;
  }
  return out;
}

function replaceBlogVisuals(html, publicDir, category, pageSlug) {
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career article');
  // Older page files can contain generated raster diagrams as bare <img> tags
  // between authored figures. The new responsive HTML figures replace those
  // diagrams; leaving the old tags behind creates uncaptained duplicate visuals.
  const withoutLegacyGeneratedImages = html
    .replace(/<picture\b[^>]*>[\s\S]*?<\/picture>/gi, (picture) =>
      /\/images\/blog\/generated\//i.test(picture) ? '' : picture,
    )
    .replace(/<img\b(?=[^>]*(?:src|srcset)="[^"]*\/images\/blog\/generated\/)[^>]*>/gi, '')
    .replace(/<picture\b[^>]*>\s*<\/picture>/gi, '');
  return placeGeneratedVisuals(withoutLegacyGeneratedImages, publicDir, generatedBlogFiles(publicDir, category, pageSlug), pageTitle, 'article-visual', {
    summary: ['overview', 'why', 'what', 'meaning'], matrix: ['compare', 'comparison', 'options', 'paths', 'difference'], chain: ['steps', 'process', 'roadmap', 'plan', 'become', 'build'], checklist: ['checklist', 'questions', 'mistakes', 'avoid', 'choose'], proof: ['salary', 'pay', 'cost', 'fee', 'money', 'budget', 'time', 'years'], detail: ['background', 'context', 'why', 'what', 'overview'],
  });
}

function replaceRouteVisuals(html, publicDir, route) {
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career guide');
  return placeGeneratedVisuals(html, publicDir, generatedRouteFiles(publicDir, route), pageTitle, 'resource-visual', {
    summary: ['included', 'outcome', 'session', 'steps'], matrix: ['compare', 'options', 'difference', 'path'], chain: ['how', 'process', 'plan', 'next'], checklist: ['who', 'fit', 'choose'], proof: ['cost', 'price', 'fee', 'budget', 'time'], detail: ['background', 'context', 'overview'],
  });
}

export default function placePageMedia() {
  return {
    name: 'place-page-media',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distDir = fileURLToPath(dir);
        const publicDir = path.resolve('public');
        const stats = { service: 0, attrs: 0, social: 0, blogBaseline: 0 };
        const walk = (d) => {
          for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) walk(full);
            else if (entry.name === 'index.html') handle(full);
          }
        };
        const handle = (file) => {
          let html = fs.readFileSync(file, 'utf8');
          if (html.startsWith('<!doctype html><title>Redirecting')) return;
          const route = '/' + path.relative(distDir, path.dirname(file)).split(path.sep).join('/') + '/';
          const original = html;
          const isBlogPost = /^\/blog\/[^/]+\/[^/]+\/$/.test(route);
          const isService = route.startsWith('/services/');
          const hasServiceMedia = isService && /class="[^"]*bofu-(image|context-visual|diagrams)/.test(html);
          if (isService && hasServiceMedia) {
            const doc = parse(html, { sourceCodeLocationInfo: true });
            const next = processService(html, doc);
            if (next !== null) {
              html = next;
              stats.service += 1;
            }
          }
          if (isBlogPost && !route.startsWith('/blog/assessments/')) {
            const hasArticleImages = /<img\b[^>]*\ssrc="(?:https?:\/\/futurecareerschool\.com)?\/images\/blog\//i.test(html);
            const category = route.split('/')[2];
            const pageSlug = route.split('/')[3];
            const hasGeneratedPack = generatedBlogFiles(publicDir, category, pageSlug).length > 0;
            if (hasGeneratedPack) {
              html = replaceBlogVisuals(html, publicDir, category, pageSlug);
              const social = generatedBlogSocial(publicDir, category, pageSlug);
              if (social) {
                html = setMeta(html, 'og:image', SITE + social);
                html = setMeta(html, 'twitter:image', SITE + social);
              }
              stats.blogBaseline += 1;
            } else if (!hasArticleImages) {
              html = emptyBlogVisuals(html, publicDir, category, pageSlug);
              const social = generatedBlogSocial(publicDir, category, pageSlug)
                || (CATEGORY_HEROES.has(category)
                ? `/images/blog/category-heroes/${category}-social.jpg`
                : '/images/blog/system/career-visual-system-social.jpg');
              html = setMeta(html, 'og:image', SITE + social);
              html = setMeta(html, 'twitter:image', SITE + social);
              stats.blogBaseline += 1;
            }
            const social = fixSocialImage(html, publicDir);
            if (social !== html) stats.social += 1;
            html = social;
          }
          if ((route.startsWith('/career-resources/') || route.startsWith('/career-skills-compass/') || route.startsWith('/services/')) && generatedRouteFiles(publicDir, route).length > 0) {
            html = replaceRouteVisuals(html, publicDir, route);
          }
          const fixed = fixImageTags(html, publicDir);
          if (fixed !== html) stats.attrs += 1;
          html = fixed;
          if (html !== original) fs.writeFileSync(file, html);
        };
        walk(distDir);
        console.log(`[place-page-media] service pages placed ${stats.service}, blog baseline visuals added ${stats.blogBaseline}, pages with fixed image attributes ${stats.attrs}, social images set ${stats.social}`);
      },
    },
  };
}
