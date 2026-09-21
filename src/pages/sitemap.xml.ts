import type { APIRoute } from 'astro';
import { LIVE_INDEXABLE_ROUTES, SITE_URL } from '../config/site';

// Every page on this site is emitted by Astro's `directory` build format, so
// the URL that actually serves without a redirect always carries a trailing
// slash (Apache's mod_dir issues a 301 from the slash-less path to the
// slash-terminated one). LIVE_INDEXABLE_ROUTES entries are hand-written and
// not all of them include that trailing slash, so normalize here rather than
// relying on every entry to remember it — this is what keeps the sitemap
// from listing URLs that immediately redirect.
const withTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${LIVE_INDEXABLE_ROUTES.map(
  (route) => `  <url>
    <loc>${new URL(withTrailingSlash(route.path), SITE_URL).href}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
).join('\n')}
</urlset>
`;

export const GET: APIRoute = () =>
  new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
