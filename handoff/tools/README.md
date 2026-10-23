# Helper tools used in the first chat

These lived in a scratch folder (`/tmp/claude-0/scratch`) and are copied here so they survive. Paths inside them point to `/home/user/futurecareer-school-2` and an isolated build copy at `/tmp/claude-0/wt`; recreate that copy if you want to use `regcheck.sh` (see below), or just run the checks in the repo when no agent has unfinished drafts in the tree.

| File | What it does |
|---|---|
| `P2_BRIEF.md` | The shared brief given to every page-writing agent in the second half (owner perspectives, length policy, research rules, three separate logged follow-up passes, files an agent may create, report format). Read it first; it is the best single statement of the page-building protocol. |
| `P1_BRIEF.md` | The earlier version of the same brief (used for the first 9 pages). |
| `addpost.py` | `python3 addpost.py <category> <slug> "<title>" "<description>" <readMinutes>` appends an entry to `BLOG_PUBLISHED_POSTS` in `src/config/blog.ts` (publishedAtISO 2026-10-14). Skips if the slug already exists. |
| `linkp.py` | `python3 linkp.py <category>/<slug> '<p sentence with <a href>>'` inserts one `<p>` with an internal link just before the FAQ heading of a sibling page (skips if the link already exists). Use to add inbound links from related pages. |
| `regcheck.sh` | `regcheck.sh <category>/<slug> ...` builds an isolated copy of HEAD plus the given new pages and modified siblings, then runs check-public-copy, check-blog-links, check-internal-urls, check-inbound-links, check-scalability-coverage. Needs a copy of the repo at `/tmp/claude-0/wt` with `node_modules` symlinked (build with `node node_modules/astro/astro.js build`, because `pnpm` fails inside the copy). |

POST_SCALE lines for single-career guides go in `src/config/scalability.mjs` (object `POST_SCALE`); category `salary-growth` was added to `LENS_CATEGORIES` there.
