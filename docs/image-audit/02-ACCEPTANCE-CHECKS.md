# Acceptance checks

Run after every batch:

```
pnpm build
node scripts/audit-images.mjs --scope=blog       # blog pages
node scripts/audit-images.mjs --scope=services   # service/assessment pages
git diff --check
```

`node scripts/audit-images.mjs --strict` exits 1 when any rule below fails.

| Rule | Current result (2026-10-07) | Goal |
|---|---|---|
| Component code printed on a page | 0 (fixed) | 0 |
| Generic category image used | 2,415 tags (all blog + service pages) | 0 |
| Auto-generated page-card image used | 1,035 tags | 0 |
| Page-context image used (blog) | see report | 0 |
| Generic blog image on a service page | 218 pages | 0 |
| og:image is the generic SVG or missing (blog) | 342 pages | 0 |
| Image file missing | 1 blog + 215 service pages | 0 |
| Alt missing or too short | see script output | 0 |
| Title attribute missing | 205+ | 0 |
| width/height missing or ratio differs from file | 400 | 0 |
| Image over 250 KB | 297 tags | 0 |
| Non-meaningful filename `visual-N` | 15 tags | 0 |
| Explanatory image without caption | see script output | 0 |
| Blog page with fewer than hero + 5 images | all but about 55 | 0 |
| All blog images clustered after the article | 317 pages | 0 |

Manual checks (the script cannot do these): open one page from each category at 390 px and 1280 px; confirm no horizontal overflow, text inside images readable without zoom, captions wrap, one eager hero only; read every statistic on an infographic against the article text and its cited source.
