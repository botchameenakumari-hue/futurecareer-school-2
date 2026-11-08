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

function fixImageTags(html, publicDir) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = (tag.match(/\ssrc="([^"]*)"/) || [])[1];
    if (!src) return tag;
    const local = src.replace(SITE, '');
    if (!local.startsWith('/images/') && !local.startsWith('/blog/')) return tag;
    let next = tag;
    const size = /\.(webp|jpe?g|png)$/.test(local) ? imageSize(publicDir, local) : null;
    if (size) {
      next = setAttr(next, 'width', size.w);
      next = setAttr(next, 'height', size.h);
    }
    const alt = (tag.match(/\salt="([^"]*)"/) || [])[1];
    if (alt && !/\stitle="/.test(tag)) next = setAttr(next, 'title', alt);
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

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function emptyBlogVisuals(html) {
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career article');
  const figure = (visual, index) => {
    const alt = `${visual.label} for ${pageTitle}`;
    const title = `${pageTitle}: ${visual.label}`;
    const caption = `${visual.label} for this article: ${pageTitle}.`;
    const loading = index === 0 ? 'eager' : 'lazy';
    const priority = index === 0 ? ' fetchpriority="high"' : '';
    return `<figure class="article-visual${index === 0 ? ' article-visual--hero' : ''}"><img src="${visual.src}" alt="${escapeAttr(alt)}" title="${escapeAttr(title)}" width="${visual.width}" height="${visual.height}" loading="${loading}" decoding="async"${priority}><figcaption>${escapeAttr(caption)}</figcaption></figure>`;
  };

  let out = html;
  const lead = /<p\b[^>]*class="[^"]*lead-para[^"]*"[^>]*>[\s\S]*?<\/p>/i.exec(out);
  if (lead) {
    const at = lead.index + lead[0].length;
    out = out.slice(0, at) + '\n' + figure(EMPTY_BLOG_VISUALS[0], 0) + out.slice(at);
  } else {
    const h1Tag = /<h1\b[^>]*>[\s\S]*?<\/h1>/i.exec(out);
    if (!h1Tag) return out;
    const at = h1Tag.index + h1Tag[0].length;
    out = out.slice(0, at) + '\n' + figure(EMPTY_BLOG_VISUALS[0], 0) + out.slice(at);
  }

  let cursor = 0;
  let inserted = 1;
  for (let index = 1; index < EMPTY_BLOG_VISUALS.length; index += 1) {
    const heading = /<h2\b/i.exec(out.slice(cursor));
    if (!heading) break;
    const at = cursor + heading.index;
    const visual = figure(EMPTY_BLOG_VISUALS[index], index);
    out = out.slice(0, at) + visual + '\n' + out.slice(at);
    cursor = at + visual.length;
    inserted += 1;
  }
  while (inserted < EMPTY_BLOG_VISUALS.length) {
    const visual = figure(EMPTY_BLOG_VISUALS[inserted], inserted);
    const closing = /<\/(?:main|article|body)>/i.exec(out);
    if (!closing) break;
    out = out.slice(0, closing.index) + visual + '\n' + out.slice(closing.index);
    inserted += 1;
  }
  return out;
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
            if (!hasArticleImages) {
              html = emptyBlogVisuals(html);
              html = setMeta(html, 'og:image', SITE + '/images/blog/system/career-visual-system-social.jpg');
              html = setMeta(html, 'twitter:image', SITE + '/images/blog/system/career-visual-system-social.jpg');
              stats.blogBaseline += 1;
            }
            const social = fixSocialImage(html, publicDir);
            if (social !== html) stats.social += 1;
            html = social;
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
