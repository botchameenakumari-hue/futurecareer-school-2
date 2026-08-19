import fs from 'node:fs';
import path from 'node:path';

const distRoot = path.resolve('dist');

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function relative(file) {
  return path.relative(distRoot, file).replaceAll('\\', '/');
}

function targetCandidates(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }

  const clean = decoded.replace(/^\/+/, '');
  const exact = path.join(distRoot, ...clean.split('/'));
  const candidates = [exact];

  if (pathname.endsWith('/') || path.extname(clean) === '') {
    candidates.push(path.join(exact, 'index.html'));
  }

  return candidates;
}

const articleFiles = walk(path.join(distRoot, 'blog')).filter((file) =>
  /^blog\/[^/]+\/[^/]+\/index\.html$/.test(relative(file)),
);

const broken = [];
let linksChecked = 0;

for (const file of articleFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const hrefs = [...html.matchAll(/\bhref=(?:"([^"]+)"|'([^']+)')/g)].map(
    (match) => match[1] ?? match[2],
  );

  for (const href of hrefs) {
    if (
      !href ||
      href.startsWith('#') ||
      /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href)
    ) {
      continue;
    }

    const resolved = new URL(href, `https://futurecareerschool.com/${relative(file)}`);
    if (resolved.origin !== 'https://futurecareerschool.com') continue;

    linksChecked += 1;
    if (!targetCandidates(resolved.pathname).some((target) => fs.existsSync(target))) {
      broken.push({
        source: relative(file),
        href,
        resolvedPath: resolved.pathname,
      });
    }
  }
}

console.log(
  `Checked ${linksChecked} internal links across ${articleFiles.length} rendered blog articles.`,
);
console.log(`Broken internal blog links: ${broken.length}`);

if (broken.length) {
  console.dir(broken, { depth: null, maxArrayLength: null });
  process.exitCode = 1;
}
