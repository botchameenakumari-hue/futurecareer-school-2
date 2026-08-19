import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { BLOG_PUBLISHED_POSTS } from '../config/blog';
import { SITE_NAME, SITE_URL } from '../config/site';

export const GET: APIRoute = (context) =>
  rss({
    title: `${SITE_NAME} Blog`,
    description:
      'Practical career guidance articles on career options, stream selection, skill roadmaps, salary growth, assessments, and AI readiness.',
    site: context.site ?? SITE_URL,
    items: [...BLOG_PUBLISHED_POSTS]
      .sort((a, b) => b.publishedAtISO.localeCompare(a.publishedAtISO))
      .map((post) => ({
        title: post.title,
        description: post.description,
        pubDate: new Date(post.publishedAtISO),
        link: `/blog/${post.categorySlug}/${post.slug}/`,
      })),
    customData: '<language>en-in</language>',
  });
