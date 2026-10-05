# BOFU Page Image Plan

Purpose: this file keeps the image decisions in one place so images can be made over several days without losing context. Nothing here needs to be done in one sitting.

## The numbers

- **29 images in total, not one per page.** 167 pages share 27 hero images, plus 2 optional site-wide diagrams.
- **Reused images (16):** 9 group heroes that each serve many pages, 5 regional images shared by smaller cities, and the 2 optional diagrams.
- **Unique images (13):** 5 service pages that get their own image (hub, career-counselling, career-guidance, helpline, locations hub) and 8 metro cities.
- Smaller cities near Delhi (Pitampura, Paschim Vihar, Noida, Greater Noida, Gurgaon) reuse `city-delhi`. Cities near Mumbai (Chembur, Dadar, Kalyan, Kandivali, Navi Mumbai, Thane) reuse `city-mumbai`.

## Style guide (use for every image so they look like one set)

- Site colours: dark navy `#080c18` background, gold `#e5b84a`, teal `#2dd4bf`. Keep images dark-theme friendly because BOFU heroes are dark.
- Flat or lightly textured illustration. One consistent style across all 29. No photorealism.
- Size: 1600x900 px, export WebP, under 150 KB. Keep the main subject in the centre 70% so it survives mobile cropping.
- No readable text inside the image, no real logos (WhatsApp, Google and so on), no recognisable real people's faces, no job-guarantee or salary imagery.
- Save as `public/images/bofu/<id>.webp` using the exact id below.

## Wiring (so context is not lost)

- Mapping from every page to its image id: `src/config/bofuImages.ts` (already created). Alt text per id is in the same file.
- Component: `src/components/bofu/BofuImage.astro`. It renders nothing until the file exists, so it is safe to add to pages before the images are ready.
- When some images are ready, ask: "wire the BOFU images that exist". The steps are: add `<BofuImage />` right after the hero on each page whose image file exists, run `pnpm verify`, check at 390px, commit.
- New pages: pick the group image id, add one line to `BOFU_PAGE_IMAGES`, and add `<BofuImage />` after the hero. Only generate a new image when the page belongs to no existing group.

## Optional site-wide diagrams (reused on many pages)

- `diagram-session-flow`: four steps (share your situation, review, recommendation, next steps). Use on all session, program, package and consultation pages and on the hub.
- `diagram-skill-portfolio-chain`: right skill portfolio -> better decisions -> high income opportunities -> earlier financial freedom. Use in the positioning section of any page.

## Image list by phase


### Phase 1 - generate first (covers about 80 pages)

#### `hero-graduates-college` (27 pages)
- Used for: Graduates, freshers, college stage, MBA, engineering, study abroad, exam aspirants
- Prompt: Young Indian graduate on a campus bench with a laptop showing a simple skill roadmap, resume on the bench, bright and modern, dark navy and gold accents
- Pages: `career-coaching-for-engineering-students`, `career-coaching-for-freshers`, `career-coaching-for-science-students`, `career-counselling-after-engineering`, `career-counselling-after-graduation`, `career-counselling-for-bds-graduates`, `career-counselling-for-college-students`, `career-counselling-for-dropouts`, `career-counselling-for-engineering-students`, `career-counselling-for-first-generation-graduates`, `career-counselling-for-freshers`, `career-counselling-for-government-exam-aspirants`, `career-counselling-for-government-jobs`, `career-counselling-for-low-cgpa-students`, `career-counselling-for-mba-graduates`, `career-counselling-for-mba-students`, `career-counselling-for-nri-students`, `career-counselling-for-students-with-backlogs`, `career-counselling-for-study-abroad`, `career-counselling-for-tier-2-college-students`, `career-counselling-for-upsc-aspirants`, `career-guidance-after-b-tech-ece`, `career-guidance-after-bba`, `career-guidance-after-bcom`, `career-guidance-after-bsc`, `career-guidance-after-engineering-without-placement`, `career-guidance-after-gap-year`

#### `hero-online-session` (26 pages)
- Used for: Session, program, package, consultation, online, virtual, coach-near-me pages
- Prompt: A counsellor and a client on a video call on a laptop, notebook beside it, calm home-office setting, warm light
- Pages: `career-coach-near-me`, `career-coach-online`, `career-counselling-consultation`, `career-counselling-online`, `career-counselling-package`, `career-counselling-program`, `career-counselling-service`, `career-counselling-session`, `career-counselling-subscription`, `career-counselling-workshop`, `career-development-workshop-online`, `career-guidance-counselor`, `career-guidance-expert-online`, `career-guidance-online`, `career-guidance-service`, `career-guidance-session`, `career-mentoring-program`, `career-planning-session-online`, `counselling-for-career-planning`, `free-career-counselling-session`, `group-career-counselling-session`, `hire-a-career-coach`, `one-on-one-career-coaching-session`, `online-career-counselling-services`, `trial-career-counselling-session`, `virtual-career-counselling`

#### `hero-school-students-parents` (13 pages)
- Used for: Class 10 and school students, parents, after-10th pages (incl. Delhi and Mumbai after-10th)
- Prompt: An Indian school student and a parent at a table with a laptop, report card and notebook, hopeful mood, daylight
- Pages: `career-counselling-after-10th`, `career-counselling-benefits`, `career-counselling-benefits-for-students`, `career-counselling-for-class-10-students`, `career-counselling-for-parents`, `career-counselling-for-school-students`, `career-counselling-for-students`, `career-counselling-in-delhi-after-10th`, `career-counselling-in-mumbai-after-10th`, `career-guidance-after-10th`, `career-guidance-for-confused-students`, `career-guidance-for-low-board-scores`, `student-career-guidance`

#### `hero-working-professionals` (19 pages)
- Used for: Working professionals, career change, executive, women, seniors, adults
- Prompt: A professional at a desk at dusk with a laptop and notebook, deciding the next move, calm and thoughtful, teal and gold highlights
- Pages: `career-coaching-for-career-change`, `career-coaching-for-entrepreneurs`, `career-coaching-for-it-professionals`, `career-coaching-for-layoff-recovery`, `career-coaching-for-mid-career-professionals`, `career-coaching-for-professionals`, `career-coaching-for-women`, `career-counselling-for-adults`, `career-counselling-for-adults-online`, `career-counselling-for-it-professionals`, `career-counselling-for-seniors`, `career-counselling-for-women`, `career-counselling-for-working-professionals`, `career-guidance-for-30-year-olds`, `career-guidance-for-women-returning-to-work`, `executive-career-coaching`, `professional-career-counselling`, `professional-career-guidance`, `working-professional-career-guidance`


### Phase 2 - next

#### `hero-assessment` (3 pages)
- Used for: Psychometric, aptitude, assessment-platform pages
- Prompt: A student completing an online assessment on a tablet, abstract result chart behind, no readable text
- Pages: `best-career-aptitude-test`, `best-career-assessment-platform`, `career-counselling-psychometric-test`

#### `hero-career-counselling` (1 page)
- Used for: career-counselling page (primary keyword)
- Prompt: A counsellor and client reviewing a decision on a shared notebook, close and calm
- Pages: `career-counselling`

#### `hero-career-guidance` (1 page)
- Used for: career-guidance page (primary keyword)
- Prompt: A roadmap from many options to one skill-first plan, clean flat illustration
- Pages: `career-guidance`

#### `hero-class-11-12` (6 pages)
- Used for: Class 11-12, after-12th and class 11/12 pages
- Prompt: A Class 11-12 student standing at a school corridor with three signboards: Science, Commerce, Arts
- Pages: `career-counselling-after-12th`, `career-counselling-for-11th-class-students`, `career-counselling-for-12th-students`, `career-guidance-after-12th`, `career-guidance-after-12th-computer-science`, `career-guidance-after-12th-online`

#### `hero-evaluation` (13 pages)
- Used for: Best / top / compare / platform-review / vs / where-to-get pages
- Prompt: A four-point checklist on a clipboard beside a laptop and magnifying glass, neutral and trustworthy, dark navy background
- Pages: `best-career-counselling-for-students`, `best-career-counselling-online`, `best-career-counselling-platform`, `best-career-counsellor`, `best-career-guidance-website`, `best-online-career-guidance`, `best-skill-development-platform`, `career-counselling-questions-for-students`, `career-counselling-vs-career-coaching`, `career-guidance-platform-review`, `compare-career-counselling-services`, `top-career-coaching-services`, `where-to-get-career-counselling`

#### `hero-hub` (1 page)
- Used for: The main service hub page
- Prompt: A path splitting from one confused point into three clear next steps, minimal illustration
- Pages: `hub`

#### `hero-pricing` (3 pages)
- Used for: Cost, fees, affordable pages
- Prompt: Three simple plan cards and a calculator beside a notebook, restrained palette, no currency symbols, no numbers
- Pages: `affordable-career-counselling`, `career-counselling-cost`, `career-counselling-fees`

#### `hero-stream-specific` (6 pages)
- Used for: PCM, PCB, Commerce, Arts, NEET, CA aspirants
- Prompt: Split scene: lab coat and microscope, calculator and formulas, ledger and charts, books and canvas, flat illustration
- Pages: `career-counselling-for-arts-students`, `career-counselling-for-ca-aspirants`, `career-counselling-for-commerce-students`, `career-counselling-for-neet-aspirants`, `career-counselling-for-pcb-students`, `career-counselling-for-pcm-students`


### Phase 3 - last (cities and locations)

#### `city-ahmedabad` (1 page)
- Used for: Ahmedabad page
- Prompt: One clean skyline or landmark illustration of Ahmedabad in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-ahmedabad`

#### `city-bangalore` (1 page)
- Used for: Bangalore page
- Prompt: One clean skyline or landmark illustration of Bangalore in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-bangalore`

#### `city-chennai` (1 page)
- Used for: Chennai page
- Prompt: One clean skyline or landmark illustration of Chennai in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-chennai`

#### `city-delhi` (6 pages)
- Used for: Delhi page and its nearby-area pages
- Prompt: One clean skyline or landmark illustration of Delhi in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-delhi`, `locations/career-counselling-in-greater-noida`, `locations/career-counselling-in-gurgaon`, `locations/career-counselling-in-noida`, `locations/career-counselling-in-paschim-vihar`, `locations/career-counselling-in-pitampura`

#### `city-hyderabad` (1 page)
- Used for: Hyderabad page
- Prompt: One clean skyline or landmark illustration of Hyderabad in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-hyderabad`

#### `city-kolkata` (1 page)
- Used for: Kolkata page
- Prompt: One clean skyline or landmark illustration of Kolkata in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-kolkata`

#### `city-mumbai` (7 pages)
- Used for: Mumbai page and its nearby-area pages
- Prompt: One clean skyline or landmark illustration of Mumbai in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-chembur`, `locations/career-counselling-in-dadar`, `locations/career-counselling-in-kalyan`, `locations/career-counselling-in-kandivali`, `locations/career-counselling-in-mumbai`, `locations/career-counselling-in-navi-mumbai`, `locations/career-counselling-in-thane`

#### `city-pune` (1 page)
- Used for: Pune page
- Prompt: One clean skyline or landmark illustration of Pune in a consistent flat style, dark navy sky, gold and teal accents
- Pages: `locations/career-counselling-in-pune`

#### `hero-helpline-whatsapp` (1 page)
- Used for: career-counselling-helpline page
- Prompt: A phone showing a generic chat bubble thread with a counsellor, no real app logos, no readable text
- Pages: `career-counselling-helpline`

#### `hero-locations-hub` (1 page)
- Used for: Locations hub
- Prompt: A stylised map of India with city pins joined by thin lines to a single online hub
- Pages: `locations`

#### `region-central` (4 pages)
- Used for: Central India city pages: Bhopal, Jabalpur, Nagpur, Raipur
- Prompt: A generic central India regional skyline with no named landmark, same flat style as the city images
- Pages: `locations/career-counselling-in-bhopal`, `locations/career-counselling-in-jabalpur`, `locations/career-counselling-in-nagpur`, `locations/career-counselling-in-raipur`

#### `region-east` (4 pages)
- Used for: East India city pages: Bhubaneswar, Ranchi, Siliguri, Guwahati
- Prompt: A generic east India regional skyline with no named landmark, same flat style as the city images
- Pages: `locations/career-counselling-in-bhubaneswar`, `locations/career-counselling-in-guwahati`, `locations/career-counselling-in-ranchi`, `locations/career-counselling-in-siliguri`

#### `region-north` (9 pages)
- Used for: North India city pages: Agra, Chandigarh, Jaipur, Jalandhar, Kanpur, Kota, Lucknow, Ludhiana, Panchkula
- Prompt: A generic north India regional skyline with no named landmark, same flat style as the city images
- Pages: `locations/career-counselling-in-agra`, `locations/career-counselling-in-chandigarh`, `locations/career-counselling-in-jaipur`, `locations/career-counselling-in-jalandhar`, `locations/career-counselling-in-kanpur`, `locations/career-counselling-in-kota`, `locations/career-counselling-in-lucknow`, `locations/career-counselling-in-ludhiana`, `locations/career-counselling-in-panchkula`

#### `region-south` (3 pages)
- Used for: South India city pages: Coimbatore, Trivandrum, Visakhapatnam
- Prompt: A generic south India regional skyline with no named landmark, same flat style as the city images
- Pages: `locations/career-counselling-in-coimbatore`, `locations/career-counselling-in-trivandrum`, `locations/career-counselling-in-visakhapatnam`

#### `region-west` (8 pages)
- Used for: West India city pages: Aurangabad, Goa, Jalgaon, Kolhapur, Nashik, Rajkot, Surat, Vadodara
- Prompt: A generic west India regional skyline with no named landmark, same flat style as the city images
- Pages: `locations/career-counselling-in-aurangabad`, `locations/career-counselling-in-goa`, `locations/career-counselling-in-jalgaon`, `locations/career-counselling-in-kolhapur`, `locations/career-counselling-in-nashik`, `locations/career-counselling-in-rajkot`, `locations/career-counselling-in-surat`, `locations/career-counselling-in-vadodara`
