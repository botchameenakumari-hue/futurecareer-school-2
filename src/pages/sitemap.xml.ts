import type { APIRoute } from 'astro';
import { LIVE_INDEXABLE_ROUTES, SITE_URL } from '../config/site';
import { BLOG_BASE_PATH, BLOG_PUBLISHED_POSTS } from '../config/blog';

// Blog posts carry a real publish date; use it as <lastmod> so crawlers can prioritise recrawling.
// Other pages have no reliable modified date, so they omit <lastmod> rather than report a wrong one.
const blogLastmod = new Map(
  BLOG_PUBLISHED_POSTS.map((post) => [`${BLOG_BASE_PATH}/${post.categorySlug}/${post.slug}/`, post.publishedAtISO])
);

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
    <loc>${new URL(withTrailingSlash(route.path), SITE_URL).href}</loc>${
      blogLastmod.get(withTrailingSlash(route.path)) ? `\n    <lastmod>${blogLastmod.get(withTrailingSlash(route.path))}</lastmod>` : ''
    }
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
