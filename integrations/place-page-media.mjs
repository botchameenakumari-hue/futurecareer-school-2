// Places page media in the right spot in the finished HTML, with no browser JavaScript.
//
// Why this exists: the layout used to append every image group to the end of <body> and rely on an
// inline script in BaseLayout.astro to move it into the page. On /services/ pages that script looked
// for a <main> element that does not exist, so the hero and context images stayed after the footer,
// and without JavaScript (crawlers, link previews) the blog images were hidden or at the bottom.
//
// What it does after the build (astro:build:done), by splicing exact source ranges found with parse5:
//   blog posts      move the fallback image group into the article (after its first element), applying the
//                   same keep/remove rules the old script used.
//   service pages   drop the generic blog image group (it is not about the keyword and one of its files
//                   does not exist) and move the hero, diagram and context figures to directly after
//                   the page hero.
//   every page      correct width/height on local images to the real file size and add a title
//                   attribute (copied from alt) when one is missing; point og:image/twitter:image at the
//                   article's own hero when it has one instead of the generic SVG.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const SITE = 'https://futurecareerschool.com';

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

function processBlog(html, doc) {
  const body = findFirst(doc, (el) => el.tagName === 'body');
  const group = findFirst(body, (el) => el.tagName === 'div' && attr(el, 'data-blog-fallback-group') !== undefined);
  if (!group) return null;
  const articleBody = findFirst(
    body,
    (el) => attr(el, 'id') === 'itm-article' || el.tagName === 'article' || (classes(el).includes('post-body') && !!findAncestorById(el, 'blog-post'))
  );
  const g = group.sourceCodeLocation;
  const operations = [{ start: g.startOffset, end: g.endOffset, text: '' }];
  if (!articleBody) return splice(html, operations);

  const customImages = [...walkElements(articleBody)].filter(
    (el) => el.tagName === 'img' && (attr(el, 'src') || '').includes('/images/blog/') && !(attr(el, 'src') || '').includes('/images/blog/category/')
  ).length;
  let groupHtml = html.slice(g.startOffset, g.endOffset);
  const figures = elementChildren(group).filter((el) => el.tagName === 'figure');
  const keepClasses = ['blog-fallback-visual--context', 'blog-fallback-visual--at-a-glance', 'blog-fallback-visual--page-specific', 'blog-fallback-visual--page-explainer', 'blog-fallback-visual--page-context'];
  let show = true;
  if (customImages >= 3) {
    if (figures.some((f) => classes(f).includes('blog-fallback-visual--context'))) {
      const drops = figures.filter((f) => !keepClasses.some((k) => classes(f).includes(k)));
      groupHtml = splice(
        groupHtml,
        drops.map((f) => ({ start: f.sourceCodeLocation.startOffset - g.startOffset, end: f.sourceCodeLocation.endOffset - g.startOffset, text: '' }))
      );
    } else show = false;
  }
  if (show) {
    groupHtml = groupHtml.replace(/class="blog-fallback-visual-group([^"]*)"/, 'class="blog-fallback-visual-group is-visible$1"');
    operations.push({ start: insertionPointInside(articleBody, html), end: insertionPointInside(articleBody, html), text: groupHtml });
  }
  return splice(html, operations);
}

function findAncestorById(el, id) {
  for (let p = el.parentNode; p; p = p.parentNode) if (p.attrs && attr(p, 'id') === id) return p;
  return null;
}

function processService(html, doc) {
  const body = findFirst(doc, (el) => el.tagName === 'body');
  const kids = elementChildren(body);
  const group = kids.find((el) => el.tagName === 'div' && attr(el, 'data-blog-fallback-group') !== undefined);
  const media = kids.filter((el) => ['bofu-image', 'bofu-diagrams', 'bofu-context-visual'].some((c) => classes(el).includes(c)));
  const navIndex = kids.findIndex((el) => el.tagName === 'header' && attr(el, 'id') === 'nav');
  if (!group && !media.length) return null;
  const operations = [];
  if (group) operations.push({ start: group.sourceCodeLocation.startOffset, end: group.sourceCodeLocation.endOffset, text: '' });
  const target = navIndex >= 0 ? kids[navIndex + 1] : null;
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
  const match = body.match(/<img\b[^>]*\ssrc="(\/images\/blog\/(?!category\/|page-cards\/|page-context\/)[^"]+\.(?:webp|jpe?g|png))"/);
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

export default function placePageMedia() {
  return {
    name: 'place-page-media',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distDir = fileURLToPath(dir);
        const publicDir = path.resolve('public');
        const stats = { blog: 0, service: 0, attrs: 0, social: 0 };
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
          const hasFallbackGroup = html.includes('data-blog-fallback-group');
          const hasServiceMedia = isService && /class="[^"]*bofu-(image|context-visual|diagrams)/.test(html);
          if ((isBlogPost && hasFallbackGroup) || (isService && (hasFallbackGroup || hasServiceMedia))) {
            const doc = parse(html, { sourceCodeLocationInfo: true });
            const next = isBlogPost ? processBlog(html, doc) : processService(html, doc);
            if (next !== null) {
              html = next;
              if (isBlogPost) stats.blog += 1;
              else stats.service += 1;
            }
          }
          if (isBlogPost) {
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
        console.log(`[place-page-media] blog groups placed ${stats.blog}, service pages placed ${stats.service}, pages with fixed image attributes ${stats.attrs}, social images set ${stats.social}`);
      },
    },
  };
}
