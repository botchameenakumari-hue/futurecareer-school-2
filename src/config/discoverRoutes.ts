import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// import.meta.url-relative resolution is unreliable here: this module gets
// processed by Vite during `astro build`, which does not guarantee the same
// on-disk file location semantics as running it directly under Node/tsx.
// astro build always runs from the project root, so resolve from cwd instead.
const PAGES_ROOT = join(process.cwd(), 'src', 'pages');

const isDynamicSegment = (name: string) => name.startsWith('[') && name.endsWith(']');

/**
 * Recursively finds every routable folder (one containing index.astro) under
 * `relativeRoot` inside src/pages, skipping Astro's dynamic [param] route
 * folders (those are data-driven elsewhere, e.g. assessmentPages.ts).
 *
 * This keeps high-churn silos (blog posts, BOFU service children) in sync
 * with the sitemap automatically — a new page becomes indexable just by
 * existing as a file, with no separate manual list to remember to update.
 */
export function discoverRoutes(relativeRoot: string): string[] {
  const absoluteRoot = join(PAGES_ROOT, ...relativeRoot.split('/'));

  // Fail loudly instead of silently returning an empty list — a resolution
  // bug here should break the build, not quietly drop pages from the sitemap.
  if (!existsSync(absoluteRoot)) {
    throw new Error(
      `discoverRoutes: "${absoluteRoot}" does not exist. PAGES_ROOT resolved to "${PAGES_ROOT}" — check that this is running with cwd at the project root.`,
    );
  }

  const routes: string[] = [];

  const walk = (dir: string, routePrefix: string) => {
    const entries = readdirSync(dir);

    if (entries.includes('index.astro')) {
      routes.push(routePrefix);
    }

    entries.forEach((entry) => {
      const fullPath = join(dir, entry);
      if (!statSync(fullPath).isDirectory() || isDynamicSegment(entry)) return;
      walk(fullPath, `${routePrefix}/${entry}`);
    });
  };

  walk(absoluteRoot, `/${relativeRoot}`);
  return routes;
}
