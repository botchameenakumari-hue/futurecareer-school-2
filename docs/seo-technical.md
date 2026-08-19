# Technical SEO — Astro Implementation Guide

Patterns proven on a production Indian-market Astro site (72+ indexable pages, full structured data, clean build pipeline).

---

## 1. astro.config.mjs — essential settings

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',    // MUST be set — used by sitemap + canonical helper
  trailingSlash: 'ignore',           // accept both with and without
  build: {
    format: 'directory',             // /about/ → dist/about/index.html (clean URLs, no .html)
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),   // exclude 404 from sitemap
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
```

**Why `build.format: 'directory'`:** every URL ends with a trailing slash and maps to `index.html`.
Hostinger/Apache serves them as clean URLs (`/about/` not `/about.html`). No .html in canonical ever.

---

## 2. BaseLayout.astro — full `<head>` checklist

Every page must pass through a single layout that injects all of this. Never scatter meta tags across individual pages.

```astro
---
// Props every page must supply
export interface Props {
  title: string;          // unique <title> for this page
  description: string;    // unique meta description (130–160 chars)
  path: string;           // e.g. "/career-coaching/online/" (with leading + trailing slash)
  ogType?: string;        // defaults to 'website'; use 'article' for blog posts
  schema?: object[];      // page-specific JSON-LD schemas (added to org + website)
}

const { title, description, path, ogType = 'website', schema = [] } = Astro.props;

// Build canonical from the site URL + path — never hardcode
const canonical = new URL(path, SITE.url).href;
const ogImage   = new URL('/og-image.png', SITE.url).href;

// Organization schema — on EVERY page
const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', ... };
// WebSite schema — on EVERY page
const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', ... };

const allSchema = [orgSchema, websiteSchema, ...schema];
---

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="theme-color" content="#YOUR_COLOR" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="sitemap" href="/sitemap-index.xml" />

  <!-- Open Graph -->
  <meta property="og:type"        content={ogType} />
  <meta property="og:site_name"   content={SITE.name} />
  <meta property="og:locale"      content="en_IN" />
  <meta property="og:url"         content={canonical} />
  <meta property="og:title"       content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image"       content={ogImage} />
  <meta property="og:image:width"  content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image"       content={ogImage} />

  <!-- JSON-LD (array: org + website + page-specific schemas) -->
  <script type="application/ld+json" set:html={JSON.stringify(allSchema)} />
</head>
```

**Rules:**
- `title` ≤ 60 chars, unique across the whole site
- `description` 130–160 chars, unique across the whole site
- One `<h1>` per page — enforce in code review
- `canonical` is always the same as the current URL (never point it elsewhere unless deduplicating)

---

## 3. JSON-LD structured data

### On every page — Organization + WebSite

```js
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  logo: { '@type': 'ImageObject', url: `${SITE.url}/og-image.png` },
  telephone: CONTACT.phone,
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.phone,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en-IN',
};
```

### On service / product pages — Service + FAQPage + BreadcrumbList

```js
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.h1,
  description: page.metaDescription,
  provider: { '@id': `${SITE.url}/#organization` },
  areaServed: { '@type': 'Country', name: 'India' },
  url: canonical,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: page.faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    ...page.parents.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: p.label,
      item: new URL(p.href, SITE.url).href,
    })),
    { '@type': 'ListItem', position: page.parents.length + 2, name: page.shortLabel },
  ],
};
```

For city pages, add `areaServed` on the Service schema with the city name:
```js
areaServed: { '@type': 'City', name: 'Mumbai', containedIn: { '@type': 'Country', name: 'India' } }
```

For comparison / guide pages, use `Article` instead of `Service` as the page-type schema.

---

## 4. `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap-index.xml
```

Simple. No Disallow needed for a clean marketing site. The sitemap line helps crawlers find it even without submission.

---

## 5. `public/.htaccess` (Apache / Hostinger)

```apache
# Force HTTPS + non-www
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]

# Custom 404
ErrorDocument 404 /404/index.html

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml application/xml
</IfModule>

# Cache policy
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html                "access plus 0 seconds"
  ExpiresByType text/css                 "access plus 1 year"
  ExpiresByType application/javascript   "access plus 1 year"
  ExpiresByType image/svg+xml            "access plus 1 year"
  ExpiresByType image/png                "access plus 1 year"
  ExpiresByType image/webp               "access plus 1 year"
  ExpiresByType font/woff2               "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-Frame-Options "SAMEORIGIN"
</IfModule>
```

**Key points:**
- HTML: zero cache (`0 seconds`) so updates are instant
- Static assets (CSS/JS/fonts/images): 1 year — Astro's build hashes their filenames so cache-busting is automatic
- Security headers are free and required by any security scanner

---

## 6. `src/config/site.ts` — centralise all site constants

```ts
export const SITE = {
  url:         'https://yourdomain.com',
  name:        'Your Site Name',
  description: 'One-sentence description of what you do.',
  language:    'en',
  locale:      'en_IN',
  tagline:     'Your headline tagline',
};

export const CONTACT = {
  phone:    '+91 XXXXX XXXXX',
  phoneTel: 'tel:+91XXXXXXXXXX',
  whatsapp: 'https://wa.me/91XXXXXXXXXX',
  email:    'hello@yourdomain.com',
  address:  'City, State',
};
```

Import these from every page and component — never hardcode the domain or contact info inline.

---

## 7. View transitions (Astro 5 only)

If using Astro 5's `ClientRouter` (view transitions), any JS that runs on `DOMContentLoaded` must also run on `astro:page-load`:

```js
// use astro:page-load instead of DOMContentLoaded for view-transition-aware init
document.addEventListener('astro:page-load', () => {
  // guard against double-registration
  if (document.body.dataset.fx === '1') return;
  document.body.dataset.fx = '1';
  // ... your init code
});
```

Without this guard, effects accumulate on navigation and break.

---

## 8. Pre-launch technical checklist

- [ ] `site` set correctly in `astro.config.mjs`
- [ ] `build.format: 'directory'` set
- [ ] `@astrojs/sitemap` installed and configured with 404 filter
- [ ] `robots.txt` in `public/` with correct sitemap URL
- [ ] `.htaccess` in `public/` with HTTPS redirect
- [ ] OG image (`/og-image.png`) 1200×630 px exists in `public/`
- [ ] Every page has unique title + description + canonical + `<h1>`
- [ ] Organization + WebSite schema on every page
- [ ] Service/Article + FAQPage + Breadcrumb on service pages
- [ ] `npm run build` completes clean before any deployment
