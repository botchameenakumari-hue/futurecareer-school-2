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
  const root = path.join(publicDir, 'images', 'blog', 'generated', generatedBlogKey(category, pageSlug));
  if (!fs.existsSync(root)) return [];
  const names = ['hero', 'summary', 'matrix', 'chain', 'checklist', 'proof'];
  return names.map((name) => path.join(root, `${pageSlug}-${name}.webp`))
    .filter((file) => fs.existsSync(file))
    .map((file) => '/' + path.relative(publicDir, file).split(path.sep).join('/'));
}

function generatedBlogKey(category, pageSlug) {
  let key = 0;
  for (const character of `${category}/${pageSlug}`) key = (key * 31 + character.charCodeAt(0)) >>> 0;
  return String(key).padStart(10, '0');
}

function generatedBlogSocial(publicDir, category, pageSlug) {
  const file = path.join(publicDir, 'images', 'blog', 'generated', generatedBlogKey(category, pageSlug), `${pageSlug}-social.jpg`);
  return fs.existsSync(file) ? '/' + path.relative(publicDir, file).split(path.sep).join('/') : null;
}

function readableAssetName(src) {
  return path.basename(src).replace(/\.(?:webp|jpe?g|png)$/i, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function emptyBlogVisuals(html, publicDir, category, pageSlug) {
  const h1 = (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const pageTitle = plainText(h1 || 'this career article');
  const categoryHero = CATEGORY_HEROES.has(category) ? `/images/blog/category-heroes/${category}.webp` : null;
  const generated = generatedBlogFiles(publicDir, category, pageSlug);
  const categoryExplanatory = CATEGORY_HEROES.has(category) ? categoryFiles(publicDir, category, pageSlug) : [];
  const visuals = generated.length >= 6
    ? generated.slice(0, 6).map((src, index) => { const mobile = src.replace(/\.webp$/i, '-mobile.webp'); return { src, mobile: fs.existsSync(path.join(publicDir, mobile.slice(1))), label: index === 0 ? 'article-specific career decision map' : readableAssetName(src), width: imageSize(publicDir, src)?.w || (index === 0 ? 1500 : 1600), height: imageSize(publicDir, src)?.h || (index === 0 ? 844 : 1000) }; })
    : categoryHero
    ? [{ src: categoryHero, label: `${category.replace(/-/g, ' ')} career decision hero`, width: 1600, height: 900 }, ...(categoryExplanatory.length >= 5
      ? categoryExplanatory.map((src) => ({ src, label: readableAssetName(src), width: imageSize(publicDir, src)?.w || 1122, height: imageSize(publicDir, src)?.h || 1402 }))
      : EMPTY_BLOG_VISUALS.slice(1))]
    : EMPTY_BLOG_VISUALS;
  const figure = (visual, index) => {
    const alt = `${visual.label} for ${pageTitle}`;
    const title = `${pageTitle}: ${visual.label}`;
    const caption = `${visual.label} for this article: ${pageTitle}.`;
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
              const category = route.split('/')[2];
              const pageSlug = route.split('/')[3];
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
