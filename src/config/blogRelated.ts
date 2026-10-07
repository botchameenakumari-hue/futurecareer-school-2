import { BLOG_PUBLISHED_POSTS } from './blog';

// Picks related posts for a blog article.
// 1. The most topically similar posts (title + slug word overlap), any category.
// 2. The next posts in the same category in a fixed ring order, so every post in a
//    category is guaranteed inbound links from its neighbours and no post is orphaned
//    (previously every post in a category linked to the same first three posts).
const STOP = new Set([
  'a', 'an', 'and', 'the', 'of', 'for', 'to', 'in', 'on', 'vs', 'or', 'is', 'it', 'at', 'how', 'what', 'which',
  'india', 'indian', 'career', 'careers', 'guide', 'best', 'after', 'your', 'you', 'with', 'from', 'do', 'does',
  'not', 'real', 'honest', 'actually', 'good', 'job', 'jobs', 'why', 'when', 'who', 'that', 'this', 'are', 'be',
]);

const tokens = (text: string) =>
  new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .split(' ')
      .filter((word) => word.length > 2 && !STOP.has(word))
  );

const similarity = (a: Set<string>, b: Set<string>) => {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  a.forEach((word) => {
    if (b.has(word)) shared += 1;
  });
  return shared / (a.size + b.size - shared);
};

export function getRelatedPosts(categorySlug: string, slug: string, similarCount = 3, ringCount = 2) {
  const all = BLOG_PUBLISHED_POSTS;
  const current = all.find((post) => post.categorySlug === categorySlug && post.slug === slug);
  const currentTokens = tokens(`${current?.title ?? ''} ${slug.replace(/-/g, ' ')}`);

  const similar = all
    .filter((post) => !(post.categorySlug === categorySlug && post.slug === slug))
    .map((post) => ({
      post,
      score: similarity(currentTokens, tokens(`${post.title} ${post.slug.replace(/-/g, ' ')}`)),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug))
    .slice(0, similarCount)
    .map((entry) => entry.post);

  const sameCategory = all.filter((post) => post.categorySlug === categorySlug);
  const index = sameCategory.findIndex((post) => post.slug === slug);
  const ring: typeof all = [];
  if (index >= 0) {
    for (let step = 1; ring.length < ringCount && step < sameCategory.length; step += 1) {
      const candidate = sameCategory[(index + step) % sameCategory.length];
      if (!similar.includes(candidate)) ring.push(candidate);
    }
  }
  return [...similar, ...ring];
}
