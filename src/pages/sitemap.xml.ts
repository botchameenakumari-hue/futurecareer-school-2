import type { APIRoute } from 'astro';
import { LIVE_INDEXABLE_ROUTES, SITE_URL } from '../config/site';

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${LIVE_INDEXABLE_ROUTES.map(
  (route) => `  <url>
    <loc>${new URL(route.path, SITE_URL).href}</loc>
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
