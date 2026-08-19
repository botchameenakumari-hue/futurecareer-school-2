import type { APIRoute } from 'astro';
import { SITE_URL } from '../config/site';

const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
