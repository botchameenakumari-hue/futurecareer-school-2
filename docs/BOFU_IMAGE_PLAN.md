# BOFU Page Image Plan

How many images: about 28. Not one per page. Most pages share a group hero.

| Group | Pages | Image file | Count |
|---|---|---|---|
| H01 Class 10 and school students, parents | 11 | `hero-school-students-parents` | 1 |
| H02 Class 11-12 and after 12th | 6 | `hero-class-11-12-stream` | 1 |
| H03 Stream-specific school students (PCM, PCB, Commerce, Arts) | 6 | `hero-stream-specific` | 1 |
| H04 Graduates, freshers and college stage | 27 | `hero-college-graduates-freshers` | 1 |
| H05 Working professionals and career changers | 19 | `hero-working-professionals` | 1 |
| H06 Session / program / format pages | 29 | `hero-online-session` | 1 |
| H07 Cost and pricing pages | 3 | `hero-pricing` | 1 |
| H08 Evaluation / comparison / "best" pages | 13 | `hero-evaluation-checklist` | 1 |
| H09 Assessment-intent pages | 3 | `hero-assessment` | 1 |
| H11 Locations hub + city-after-10th | 3 | `hero-locations-hub` | 1 |
| H12 Locations: top metros | 8 | `city-<name>-hero` | 8 |
| H13 Locations: other cities | 39 | `region-<north|west|south|east|central|northeast>-hero` | 6 |
| Shared diagrams (S1-S4) | all pages | see below | 4 |

Total: 28 images.

## Shared images (use on many pages, generate once)

- S1 `diagram-session-flow`: 4-step 1-on-1 session flow (share situation, review, recommendation, next steps). Used on session, program, package, consultation, online and helpline pages, and as a secondary image on audience pages.
- S2 `diagram-skill-portfolio-chain`: right skill portfolio -> better decisions -> high income opportunities -> earlier financial freedom. Used in the positioning section of every page.
- S3 `diagram-student-vs-professional-plans`: the two plan cards side by side. Used above the plans section on every page that shows plans.
- S4 `map-online-across-india`: India map showing online delivery, no office needed. Used on helpline, online, virtual and all location pages.

## Image specs

- 1600x900, WebP, under 150 KB, first image above the fold with `loading="eager"` and `fetchpriority="high"`, others lazy.
- Alt text names the page's own topic (not the keyword repeated): for example "Class 10 student and parent comparing stream options".
- No real people's faces, no logos, no readable text inside the picture, no job-guarantee imagery.
- Store under `public/images/bofu/<file>.webp`.

## Keywords and pages per image

### H01: Class 10 and school students, parents -> `hero-school-students-parents`
Prompt: Indian school student and parent at a desk with a laptop, report card and notebook, warm daylight, hopeful mood
Target keyword family: career counselling after 10th students parents

Pages (11):
- `career-counselling-after-10th`
- `career-counselling-benefits`
- `career-counselling-benefits-for-students`
- `career-counselling-for-class-10-students`
- `career-counselling-for-parents`
- `career-counselling-for-school-students`
- `career-counselling-for-students`
- `career-guidance-after-10th`
- `career-guidance-for-confused-students`
- `career-guidance-for-low-board-scores`
- `student-career-guidance`

### H02: Class 11-12 and after 12th -> `hero-class-11-12-stream`
Prompt: Class 11-12 student between three paths (Science, Commerce, Arts) shown as signboards, school corridor
Target keyword family: career guidance after 12th stream selection

Pages (6):
- `career-counselling-after-12th`
- `career-counselling-for-11th-class-students`
- `career-counselling-for-12th-students`
- `career-guidance-after-12th`
- `career-guidance-after-12th-computer-science`
- `career-guidance-after-12th-online`

### H03: Stream-specific school students (PCM, PCB, Commerce, Arts) -> `hero-stream-specific`
Prompt: Split scene: lab coat and microscope (PCB), calculator and formulas (PCM), ledger and charts (Commerce), books and canvas (Arts)
Target keyword family: career counselling PCM PCB commerce arts

Pages (6):
- `career-counselling-for-arts-students`
- `career-counselling-for-commerce-students`
- `career-counselling-for-pcb-students`
- `career-counselling-for-pcm-students`
- `career-counselling-for-neet-aspirants`
- `career-counselling-for-ca-aspirants`

### H04: Graduates, freshers and college stage -> `hero-college-graduates-freshers`
Prompt: Young graduate with laptop and resume on a campus bench, laptop showing a skill roadmap, bright and modern
Target keyword family: career counselling for graduates freshers engineering MBA

Pages (27):
- `career-coaching-for-engineering-students`
- `career-coaching-for-freshers`
- `career-coaching-for-science-students`
- `career-counselling-after-engineering`
- `career-counselling-after-graduation`
- `career-counselling-for-bds-graduates`
- `career-counselling-for-college-students`
- `career-counselling-for-dropouts`
- `career-counselling-for-engineering-students`
- `career-counselling-for-first-generation-graduates`
- `career-counselling-for-freshers`
- `career-counselling-for-government-exam-aspirants`
- `career-counselling-for-government-jobs`
- `career-counselling-for-low-cgpa-students`
- `career-counselling-for-mba-graduates`
- `career-counselling-for-mba-students`
- `career-counselling-for-nri-students`
- `career-counselling-for-students-with-backlogs`
- `career-counselling-for-study-abroad`
- `career-counselling-for-tier-2-college-students`
- `career-counselling-for-upsc-aspirants`
- `career-guidance-after-b-tech-ece`
- `career-guidance-after-bba`
- `career-guidance-after-bcom`
- `career-guidance-after-bsc`
- `career-guidance-after-engineering-without-placement`
- `career-guidance-after-gap-year`

### H05: Working professionals and career changers -> `hero-working-professionals`
Prompt: Working professional at a desk at dusk with a laptop and notebook, deciding the next move, calm tone
Target keyword family: career coaching for professionals career change

Pages (19):
- `career-coaching-for-career-change`
- `career-coaching-for-entrepreneurs`
- `career-coaching-for-it-professionals`
- `career-coaching-for-layoff-recovery`
- `career-coaching-for-mid-career-professionals`
- `career-coaching-for-professionals`
- `career-coaching-for-women`
- `career-counselling-for-adults`
- `career-counselling-for-it-professionals`
- `career-counselling-for-seniors`
- `career-counselling-for-women`
- `career-counselling-for-working-professionals`
- `career-guidance-for-30-year-olds`
- `career-guidance-for-women-returning-to-work`
- `executive-career-coaching`
- `professional-career-counselling`
- `professional-career-guidance`
- `working-professional-career-guidance`
- `career-counselling-for-adults-online`

### H06: Session / program / format pages -> `hero-online-session`
Prompt: Video call between a counsellor and a client on a laptop, headset, notes on screen, home or office setting
Target keyword family: online career counselling session consultation program

Pages (29):
- `career-coach-near-me`
- `career-coach-online`
- `career-counselling`
- `career-counselling-consultation`
- `career-counselling-helpline`
- `career-counselling-online`
- `career-counselling-package`
- `career-counselling-program`
- `career-counselling-service`
- `career-counselling-session`
- `career-counselling-subscription`
- `career-counselling-workshop`
- `career-development-workshop-online`
- `career-guidance`
- `career-guidance-counselor`
- `career-guidance-expert-online`
- `career-guidance-online`
- `career-guidance-service`
- `career-guidance-session`
- `career-mentoring-program`
- `career-planning-session-online`
- `counselling-for-career-planning`
- `free-career-counselling-session`
- `group-career-counselling-session`
- `hire-a-career-coach`
- `one-on-one-career-coaching-session`
- `online-career-counselling-services`
- `trial-career-counselling-session`
- `virtual-career-counselling`

### H07: Cost and pricing pages -> `hero-pricing`
Prompt: Simple price cards and a calculator beside a notebook, restrained palette, no currency symbols required
Target keyword family: career counselling cost fees affordable

Pages (3):
- `affordable-career-counselling`
- `career-counselling-cost`
- `career-counselling-fees`

### H08: Evaluation / comparison / "best" pages -> `hero-evaluation-checklist`
Prompt: Checklist on a clipboard with four ticks beside a magnifying glass and a laptop, neutral and trustworthy
Target keyword family: best career counselling platform comparison

Pages (13):
- `best-career-counselling-for-students`
- `best-career-counselling-online`
- `best-career-counselling-platform`
- `best-career-counsellor`
- `best-career-guidance-website`
- `best-online-career-guidance`
- `best-skill-development-platform`
- `career-counselling-questions-for-students`
- `career-counselling-vs-career-coaching`
- `career-guidance-platform-review`
- `compare-career-counselling-services`
- `top-career-coaching-services`
- `where-to-get-career-counselling`

### H09: Assessment-intent pages -> `hero-assessment`
Prompt: Student completing an online assessment on a tablet, abstract result chart in background
Target keyword family: career psychometric aptitude test

Pages (3):
- `best-career-aptitude-test`
- `best-career-assessment-platform`
- `career-counselling-psychometric-test`

### H11: Locations hub + city-after-10th -> `hero-locations-hub`
Prompt: Stylised map of India with city pins connected by thin lines to one online hub
Target keyword family: career counselling in india by city

Pages (3):
- `career-counselling-in-delhi-after-10th`
- `career-counselling-in-mumbai-after-10th`
- `locations`

### H12: Locations: top metros -> `city-<name>-hero`
Prompt: One skyline or landmark illustration per metro (Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad), consistent illustration style
Target keyword family: career counselling in <city>

Pages (8):
- `locations/career-counselling-in-ahmedabad`
- `locations/career-counselling-in-bangalore`
- `locations/career-counselling-in-chennai`
- `locations/career-counselling-in-delhi`
- `locations/career-counselling-in-hyderabad`
- `locations/career-counselling-in-kolkata`
- `locations/career-counselling-in-mumbai`
- `locations/career-counselling-in-pune`

### H13: Locations: other cities -> `region-<north|west|south|east|central|northeast>-hero`
Prompt: Six regional images (not one per city): north, west, south, east, central, northeast, each showing generic regional skyline or culture without claiming a specific landmark per page
Target keyword family: career counselling in <city>

Pages (39):
- `locations/career-counselling-in-agra`
- `locations/career-counselling-in-aurangabad`
- `locations/career-counselling-in-bhopal`
- `locations/career-counselling-in-bhubaneswar`
- `locations/career-counselling-in-chandigarh`
- `locations/career-counselling-in-chembur`
- `locations/career-counselling-in-coimbatore`
- `locations/career-counselling-in-dadar`
- `locations/career-counselling-in-goa`
- `locations/career-counselling-in-greater-noida`
- `locations/career-counselling-in-gurgaon`
- `locations/career-counselling-in-guwahati`
- `locations/career-counselling-in-jabalpur`
- `locations/career-counselling-in-jaipur`
- `locations/career-counselling-in-jalandhar`
- `locations/career-counselling-in-jalgaon`
- `locations/career-counselling-in-kalyan`
- `locations/career-counselling-in-kandivali`
- `locations/career-counselling-in-kanpur`
- `locations/career-counselling-in-kolhapur`
- `locations/career-counselling-in-kota`
- `locations/career-counselling-in-lucknow`
- `locations/career-counselling-in-ludhiana`
- `locations/career-counselling-in-nagpur`
- `locations/career-counselling-in-nashik`
- `locations/career-counselling-in-navi-mumbai`
- `locations/career-counselling-in-noida`
- `locations/career-counselling-in-panchkula`
- `locations/career-counselling-in-paschim-vihar`
- `locations/career-counselling-in-pitampura`
- `locations/career-counselling-in-raipur`
- `locations/career-counselling-in-rajkot`
- `locations/career-counselling-in-ranchi`
- `locations/career-counselling-in-siliguri`
- `locations/career-counselling-in-surat`
- `locations/career-counselling-in-thane`
- `locations/career-counselling-in-trivandrum`
- `locations/career-counselling-in-vadodara`
- `locations/career-counselling-in-visakhapatnam`
