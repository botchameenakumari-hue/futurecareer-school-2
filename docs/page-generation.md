# Page Generation Pattern — FutureCareerSchool

This project uses **individual `.astro` files per URL**, not a catch-all template.
Each page is its own file under `src/pages/`. Configuration data (copy, FAQs, CTAs) lives in `src/config/`.

---

## 1. How routes and the sitemap are managed

The source of truth for which pages are live and indexable is `src/config/site.ts`:

```ts
export const LIVE_INDEXABLE_ROUTES: string[] = [
  '/',
  '/about/',
  '/contact/',
  '/services/',
  '/services/career-counselling-and-career-guidance/',
  '/services/career-counselling-and-career-guidance/career-guidance/',
  // ... all live pages
];
```

`src/pages/sitemap.xml.ts` reads this array and generates the XML sitemap.
`src/pages/robots.txt.ts` reads the same config to output the `Sitemap:` directive.

**Rule:** add a URL here ONLY after the page file exists and the page is ready to be indexed.
Adding a URL before the file is ready will put a broken page in the sitemap.

---

## 2. Page types and their layouts

| Page type | Layout | Config source |
|---|---|---|
| BOFU service pages | `ServicePageLayout.astro` | `src/config/bofu.ts` (or inline in the `.astro` file) |
| Blog posts | `BlogPostLayout.astro` | `src/config/blog.ts` (registered in BLOG_PUBLISHED_POSTS) |
| Assessment pages | `BaseLayout.astro` + bofu components | `src/config/assessmentPages.ts` |
| Career resources | `CareerResourceLayout.astro` (or BaseLayout) | Inline or in dedicated config |
| Core pages (home, about, contact) | `BaseLayout.astro` | Inline |

---

## 3. Adding a new service/BOFU page

1. Create the file at the correct parent-child path:
   ```
   src/pages/services/<silo>/<page-name>/index.astro
   ```
2. Import and use `ServicePageLayout.astro`. Pass: `title`, `description`, `path`, `schema`.
3. Add the route to `LIVE_INDEXABLE_ROUTES` in `site.ts`.
4. Run `npm run verify` (build + public-copy check).

---

## 4. Adding a new blog post

1. Create the file at:
   ```
   src/pages/blog/<category-slug>/<post-slug>/index.astro
   ```
   The category slug must match an existing entry in `BLOG_CATEGORIES` in `src/config/blog.ts`.
2. Use `BlogPostLayout.astro`.
3. Register the post in `BLOG_PUBLISHED_POSTS` array in `src/config/blog.ts`.
4. Add both the category route (if new) and the post route to `LIVE_INDEXABLE_ROUTES` in `site.ts`.
5. `npm run verify`.

---

## 5. Dynamic routes (assessment pages)

Assessment pages use a dynamic `[slug]` route:
```
src/pages/services/assessments/[slug]/index.astro
```
The data for each assessment lives in `src/config/assessmentPages.ts`. The `[slug]` template reads the config and generates pages at build time via `getStaticPaths()`.

This is the ONE place in this project where a data-driven catch-all is used — specifically for assessment pages where the number of variants is large.

---

## 6. Key rules

- **Parent-child folder structure always** — `/services/silo/child/` not `/silo-child/` at root
- **No date in slugs** for evergreen content (use `/career-options-after-12th/` not `/career-options-after-12th-2026/`)
- **One page = one intent** — never put two keyword clusters on the same URL
- **Read `SEO_ARCHITECTURE.md` and `BLOG_WORKFLOW.md`** (or `BOFU_PAGE_PROMPT.md`) before creating any new page — the full rules are there

---

## 7. Verification after any new page

```bash
npm run verify      # build + public-copy guardrail
cat dist/sitemap.xml  # confirm new URL appears
```

Do not deploy until `npm run verify` exits clean.
