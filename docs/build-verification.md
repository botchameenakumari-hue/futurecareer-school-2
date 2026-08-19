# Build Verification — How to Check Your Site Without a Browser

**Always verify by build output, not by browser preview.** Browser preview (dev server) hot-reloads but skips some Astro build steps, may show stale content, and doesn't reflect what actually gets deployed. The build is the truth.

---

## 1. The verification command

```bash
npm run build
```

A clean build means:
- All pages generated successfully (no Astro compilation errors)
- No duplicate slugs (the guard in `src/data/index.ts` runs at build time)
- All TypeScript interfaces satisfied
- Sitemap generated

If the build fails: fix the error, don't work around it.

---

## 2. Post-build PowerShell audit script

Run this after every significant change. It verifies actual HTML output, not source code.

```powershell
# Save as scripts/audit-seo.ps1
# Run from project root: .\scripts\audit-seo.ps1

$dist = "dist"
$pages = Get-ChildItem -Path $dist -Filter "index.html" -Recurse

Write-Host "=== SEO Audit ===" -ForegroundColor Cyan
Write-Host "Total pages: $($pages.Count)"

$titles = @(); $descs = @(); $issues = @()

foreach ($page in $pages) {
  $content = Get-Content $page.FullName -Raw

  # Check title
  if ($content -match '<title>([^<]+)</title>') {
    $title = $matches[1].Trim()
    if ($title.Length -gt 60) {
      $issues += "$($page.FullName): title too long ($($title.Length) chars)"
    }
    if ($titles -contains $title) {
      $issues += "$($page.FullName): DUPLICATE title: $title"
    }
    $titles += $title
  } else {
    $issues += "$($page.FullName): NO TITLE FOUND"
  }

  # Check meta description
  if ($content -match 'name="description"\s+content="([^"]+)"') {
    $desc = $matches[1].Trim()
    if ($desc.Length -gt 165) {
      $issues += "$($page.FullName): description too long ($($desc.Length) chars)"
    }
    if ($descs -contains $desc) {
      $issues += "$($page.FullName): DUPLICATE description"
    }
    $descs += $desc
  } else {
    $issues += "$($page.FullName): NO META DESCRIPTION"
  }

  # Check canonical
  if ($content -notmatch 'rel="canonical"') {
    $issues += "$($page.FullName): NO CANONICAL"
  }

  # Check JSON-LD
  if ($content -notmatch 'application/ld\+json') {
    $issues += "$($page.FullName): NO JSON-LD"
  }

  # Check H1 (should have exactly one)
  $h1matches = ([regex]::Matches($content, '<h1[^>]*>')).Count
  if ($h1matches -ne 1) {
    $issues += "$($page.FullName): H1 count = $h1matches (should be 1)"
  }
}

# Check sitemap
$sitemap = Join-Path $dist "sitemap-index.xml"
if (Test-Path $sitemap) {
  $sitemapContent = Get-Content $sitemap -Raw
  $urlCount = ([regex]::Matches($sitemapContent, '<loc>')).Count
  Write-Host "Sitemap URLs: $urlCount"
} else {
  $issues += "MISSING sitemap-index.xml"
}

# Report
if ($issues.Count -eq 0) {
  Write-Host "`n✓ No issues found." -ForegroundColor Green
} else {
  Write-Host "`n✗ Issues ($($issues.Count)):" -ForegroundColor Red
  $issues | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
}
```

---

## 3. Content integrity grep (run after build)

After stripping invented content, add a grep guard to catch regressions. Add the banned terms specific to your business here.

```powershell
# Check dist/ for banned/fabricated terms — should return 0 results
# Run from project root after npm run build

$bannedTerms = @(
  # Add your specific banned terms here, e.g.:
  # "100% placement guarantee",
  # "500\+ students placed",
  # "invented program name",
  "guaranteed job",
  "100% placement"
)

Write-Host "=== Content integrity check ===" -ForegroundColor Cyan
$found = 0

foreach ($term in $bannedTerms) {
  $results = Select-String -Path "dist\**\*.html" -Pattern $term -Recurse -CaseSensitive:$false
  if ($results) {
    Write-Host "FOUND '$term' in:" -ForegroundColor Red
    $results | ForEach-Object { Write-Host "  $($_.Filename):$($_.LineNumber)" }
    $found++
  }
}

if ($found -eq 0) {
  Write-Host "✓ No banned terms found." -ForegroundColor Green
}
```

Or with `ripgrep` (rg) if installed — faster on large sites:
```bash
rg -i "guaranteed job|100% placement|invented-term" dist/
```

---

## 4. What to verify for each type of change

| Change type | What to check |
|---|---|
| New page added | Build clean, title/desc/canonical/JSON-LD present, slug not duplicated, sitemap count increased |
| Copy edit | Build clean, no banned terms, description unique |
| Layout change | Build clean, H1 count still 1 across all pages, canonical still correct |
| Navigation/footer change | All internal links valid (no 404s), footer has correct URLs |
| New silo / URL structure | No slug collision, breadcrumb parents correct, internal links updated |
| Before any deployment | Full audit script clean, sitemap URL count matches expected page count |

---

## 5. Checking internal links (optional, post-build)

Install `lychee` (link checker) and run against the dist folder:

```bash
lychee dist/ --offline --include-fragments
```

Or use the built-in Node.js approach: serve the dist folder and run any link checker against localhost.

Broken internal links waste crawl budget and create bad UX. Check them before deploying.

---

## 6. Deploying

For Hostinger (or any Apache host):
1. `npm run build` — must complete clean
2. Run the audit script — must have zero issues
3. Upload `dist/` contents to `public_html/` (not the `dist/` folder itself, but its contents)
4. `.htaccess` is inside `public/` so it ends up in `dist/` and then `public_html/` — don't skip it
5. After deploy: verify `https://yourdomain.com/sitemap-index.xml` is accessible
6. Submit sitemap in Google Search Console
