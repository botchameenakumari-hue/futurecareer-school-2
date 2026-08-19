# Assessment Results and PDF Code Analysis

## Scope

This document describes the current implementation of all 13 result-producing assessments in the local project. It covers answer storage, scoring, derived indicators, result rendering, PDF generation, pagination, download behavior, links, responsive behavior, and retake behavior. It is a description of the current code, not an inconsistency review.

The 13 canonical assessments are:

1. Class 10 and Below
2. Class 11 to 12
3. Graduates and Early Professionals
4. Working Professionals and Career Changers
5. Stream Selector After 10th
6. Stream Selector After 12th
7. Career Aptitude After 10th
8. Career Aptitude After 12th
9. Placement Aptitude
10. Numerical Reasoning
11. Verbal Reasoning
12. Career Preference Type
13. Big Five Career Personality

Seven additional assessment-folder routes are redirects. The assessment index and dynamic slug route are discovery/information pages. They do not calculate assessment results.

## Result implementation families

### Detailed profile assessments

These use `#results-container`, build large HTML reports with `showResults()`, and calculate multiple profile layers:

- Class 10 and Below: 25 questions
- Class 11 to 12: 25 questions
- Graduates and Early Professionals: 26 questions
- Working Professionals and Career Changers: 32 questions

### Focused selector assessments

These use `#results-container`, contain 15 questions each, increment one category for each selected option, rank the categories, and report the top and second result:

- Stream Selector After 10th
- Stream Selector After 12th
- Career Aptitude After 10th
- Career Aptitude After 12th

### Evidence-heavy assessments

These use `#result-shell`, track time per question, preserve complete response reviews, track answer changes, and expose a custom bottom PDF button:

- Placement Aptitude: 20 questions
- Numerical Reasoning: 24 questions
- Verbal Reasoning: 24 questions
- Career Preference Type: 32 questions
- Big Five Career Personality: 40 statements

## Shared result-page behavior

Every assessment mounts `AssessmentReportTools.astro` with a title, PDF filename, report kicker, guidance label, and guidance URL. The component defaults to `#results-container`; the five evidence-heavy assessments explicitly configure `#result-shell` and `download-button`.

The shared component performs the following work:

1. Stores report configuration in a hidden `#assessment-report-config` element.
2. Finds the configured result container.
3. Adds the `assessment-report-results` class.
4. Watches the container with `MutationObserver` because most results are built later with `innerHTML`.
5. Inserts the shared top download panel after result content appears.
6. Converts result tables into responsive mobile cards by adding column labels to cells.
7. Exposes `window.downloadAssessmentReportPdf` for page-specific download functions.

The shared top result panel contains:

- `Your results are ready`
- `Save a copy before you continue`
- `Download PDF`
- `Downloads directly as a PDF file. No print screen needed.`

The direct-PDF status flow is:

- Preparing: `Preparing PDF...`
- Preparing status: `Creating your PDF. This may take a few seconds.`
- Detailed preparing status: `Creating your detailed PDF. This may take a few seconds.`
- Success: `PDF downloaded`
- Success status: `Your report has been downloaded as a PDF file.`
- Failure: `The PDF could not be created. Please try again.`

No assessment uses `window.print()` for the active PDF flow.

## Shared PDF extraction pipeline

The active PDF pipeline is implemented by `AssessmentReportTools.astro` and `assessmentPdfRenderer.ts`.

### Result collection

`collectReportLines(container)` performs these steps:

1. Reads all `h1` through `h6` headings and builds a heading-level map.
2. Treats `h1` through `h3` as major PDF sections.
3. Promotes `h4` to a major section when the result contains no more than two higher-level headings; otherwise it becomes a subheading.
4. Treats `h5` and `h6` as smaller subheadings.
5. Records every list-item string so it can be rendered as a bullet.
6. Clones the complete result container.
7. Removes `.result-actions`, `.report-actions`, and `[data-result-actions]` from the clone.
8. Opens every `details` element, including complete answer/response reviews.
9. Places the clone off-screen at a fixed 900-pixel width and reads `innerText`.
10. Splits the text into individual lines, removes empty and consecutive duplicate lines, and classifies each line as a heading, bullet, or body line.

The text cleaner:

- Converts the rupee symbol to `Rs. `.
- Converts typographic dashes and minus signs to `-`.
- Converts curly quotes to straight quotes.
- Converts bullet characters to `-`.
- Removes combining marks and unsupported non-ASCII characters.
- Collapses repeated whitespace.

Action labels, download statuses, and retake labels are explicitly excluded from PDF result content. The final PDF CTA page is generated separately.

### PDF creation

The component dynamically imports `jsPDF` only when a download is requested. It sends the classified result lines and report configuration to `createVisualAssessmentPdf()` and saves the returned document with `pdf.save(filename)`.

This means the PDF is:

- Generated locally in the browser.
- Text-based rather than a screenshot.
- Searchable/selectable where supported by the PDF viewer.
- Reorganized into a standard report design rather than preserving the exact HTML card layout.
- Independent of a server-side PDF service.

### PDF visual structure

The renderer creates:

1. A dark branded cover page with report kicker, title, first result heading, a short summary, preparation date, phone number, and website.
2. Light content pages with a dark header, gold divider, assessment title, numbered insight sections, and page footer.
3. A dark final action page with guidance, WhatsApp, telephone, and website actions.

Body content is rendered as:

- Major numbered section headers.
- Gold or teal subheading markers.
- Percentage metric cards with progress bars when a short line contains a percentage.
- Teal bullet cards for list items.
- Gold callout cards for short action/strength/risk/readiness statements.
- Standard body paragraphs for longer content.
- Numbered response cards for complete question/answer reviews.

### PDF pagination

- Content pages use A4 dimensions in millimetres.
- New pages are added before a block would cross the content footer.
- A section containing at least 10 numbered records starts on a fresh page when the current page is already substantially used.
- A response card is measured before rendering and is not intentionally split across pages.
- If only two or three response cards remain and they fit together on a fresh page, the renderer moves the group together.
- The final CTA is always a separate page.
- Every page receives `Page X of Y` numbering.
- Content-page footers display `+91 78159 27259`.

### PDF links

Each PDF contains five clickable link areas:

1. Website on the cover: https://futurecareerschool.com
2. Assessment-specific guidance action.
3. WhatsApp: https://wa.me/917815927259?text=Hi%2C%20I%27d%20like%20to%20get%20career%20guidance
4. Telephone: `tel:+917815927259`
5. Website on the final page: https://futurecareerschool.com

The shared final-page copy is:

- Kicker: `YOUR NEXT MOVE`
- Heading: `Turn insight into a clear career plan.`
- Intro: `Use this report as a starting point. Personalised guidance can help you compare realistic options, prioritise the right skills, and convert your results into a practical action plan.`
- Guidance detail: `Review guidance options and choose the support that fits your stage.`
- WhatsApp label: `Chat on WhatsApp`
- WhatsApp detail: `+91 78159 27259 - ask a question or request a guidance session.`
- Call label: `Call Future Career School`
- Call detail: `+91 78159 27259 - tap here from a phone to call directly.`
- Footer: `Online guidance available across India | Keep this report for your next review.`

## Assessment details

### 1. Class 10 and Below

- Questions: 25
- Result container: `#results-container`
- Main scoring: each option contributes to several stored dimensions.
- Career-interest dimensions: R, I, A, S, E, C (RIASEC).
- Stream dimensions: PCM, PCB, Commerce, Humanities.
- Multiple-intelligence dimensions: linguistic, logical, spatial, bodily-kinaesthetic, interpersonal, intrapersonal, musical, naturalistic.
- Learning-style dimensions: visual, auditory, kinaesthetic.
- Aptitude dimensions: numerical, verbal, logical.
- Primary result: highest RIASEC dimension; second-highest becomes the secondary profile.
- Stream result: direct stream scores are adjusted with defined boosts from the primary and secondary RIASEC profiles, then ranked.
- Derived indicators: relative percentage scores, strength bands, response patterns, dimension interactions, profile conflicts, cognitive balance, conflict intensity, career readiness, learning-style alignment, aptitude profile, and adaptability index.
- Additional content: four-stream comparison, career matches, AI readiness, skill roadmap, exploration plan, parent conversation guide, high-income/deep skills, earning models, financial-freedom framework, proof of work, Rule of 3, and six-month retake guidance.
- PDF: shared DOM-to-visual-PDF pipeline.
- Filename: `class-10-career-assessment-report.pdf`
- PDF guidance: `Explore Student Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-for-class-10-students/
- Retake: resets answers/current question, hides results, shows the quiz, and renders question one.

Result section headings include: How Clear Are You About Your Direction; Your Aptitude Strengths; Your Profile Has Built-In Tensions; Your 6 Career Interest Scores; Your Thinking Style; How Your Brain Is Wired; Your Flow State; Which Stream Fits You; Your 8 Intelligences; How You Learn Best; Careers That Fit Your Profile; 5 Things You Can Start Today; Your Free Skill Roadmap; Your AI Readiness Signal; Advanced Insights; Your Freedom Number; Skill Sampling; Your 6-Month Exploration Roadmap; Talking with Your Parents; High-Income Skills; Deep Skills; Business Paths; Proof of Work; Rule of 3; Retake Every 6 Months; Want to Go Deeper.

### 2. Class 11 to 12

- Questions: 25
- Result container: `#results-container`
- Core dimensions: RIASEC, PCM/PCB/Commerce/Humanities, eight intelligences, visual/auditory/kinaesthetic learning style, and numerical/verbal/logical aptitude.
- Primary result: top two RIASEC dimensions.
- Stream signal: highest direct stream score.
- Relative percentages: RIASEC, aptitude, and stream values are normalized against the highest score in their respective group; they are not external population percentiles.
- Derived indicators: response patterns, academic stage, entrance-exam fit, dimension interactions, profile conflicts, cognitive balance, career readiness, learning alignment, aptitude profile, adaptability, college targets, exam roadmap, and backup path.
- Additional content: T-shaped skills, high-income skills, business paths, career matches, AI readiness, college/career decision questions, entrance readiness, college targets, action plan, and advanced insights.
- PDF filename: `class-11-12-career-assessment-report.pdf`
- PDF guidance: `Explore Guidance After Class 12`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-after-12th/
- Retake: resets the assessment state and returns to the first question.

Result section headings include: How Clear Is Your Direction; Your Aptitude Strengths; Built-In Tensions; 6 Career Interest Scores; Thinking Style; Brain Wiring; Flow State; 8 Intelligences; Aptitude Signals; Learning Style; T-Shaped Skills; High-Income Skills; Business Paths; Career Matches; Skill Roadmap; AI Readiness; Career Ambition Framework; College/Career Questions; Entrance Exam Readiness; College Targets; Backup Path; Action Plan; Advanced Insights; Want to Go Deeper.

### 3. Graduates and Early Professionals

- Questions: 26
- Result container: `#results-container`
- Core dimensions: RIASEC; technology, business, creative, science, and human-service domains; eight intelligences; three learning styles; numerical, verbal, and logical aptitude.
- Primary result: top two RIASEC dimensions.
- Domain result: highest of technology/business/creative/science/human-service.
- Derived indicators: relative scores and strength bands, dimension interactions, conflicts, response patterns, inferred months-since-graduation stage, cognitive balance, career readiness, learning alignment, aptitude profile, adaptability, job-search readiness, skill roadmap, and portfolio strategy.
- Additional content: plan-path models, immediate career moves, role matches, AI readiness, T-shaped skills, IMS test, scalability check, AI leverage, freedom number, proof of work, high-income skills, next-move questions, job-search strategies, 12-month roadmap, income trajectory, portfolio/network strategy, and 30-day actions.
- PDF filename: `graduate-career-assessment-report.pdf`
- PDF guidance: `Explore Early Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/
- Retake: clears answer state and returns to the assessment.

### 4. Working Professionals and Career Changers

- Questions: 32
- Result container: `#results-container`
- Six scoring dimensions: pivot readiness, income growth, leadership, remote-work fit, AI readiness, and startup/entrepreneurship.
- Primary result: dimensions are sorted by score; the highest and second-highest become primary and secondary profiles.
- Relative percentage calculation: each dimension is converted using its configured minimum and maximum range.
- Derived indicators: archetype, estimated transition timeline, dimension interaction, profile conflicts, response patterns, cognitive balance, career readiness, adaptability, aptitude profile, inferred career stage, motivation type, readiness scores, AI risk, role recommendations, income pathways, transition roadmap, and radar visualization.
- Financial framework stored in the result profile: Rs. 3,00,000 monthly baseline, Rs. 36,00,000 annual baseline, Rs. 10.8 Crore freedom number, multiplier 30, and 12% inflation assumption.
- Additional content: survival/pivot check, top-dimension deep dive, career moves, income optimization, AI risk, human skills, scenario explorer, skill-gap analysis, mentoring/networking, 30/90-day actions, T-shaped career architecture, validation checkpoints, financial-independence paths, career ladder, proof of work, business types, Rule of 30, and final strategy CTA.
- PDF filename: `working-professional-career-assessment-report.pdf`
- PDF guidance: `Explore Working Professional Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/working-professional-career-guidance/
- Retake: resets answers, scores, current question, and result visibility.

### 5. Stream Selector After 10th

- Questions: 15
- Categories: Science (PCM), Science (PCB), Commerce, Arts/Humanities.
- Scoring: each selected option identifies one category and increments it by one.
- Result: categories are sorted by score; the first becomes `Your Best-Fit Stream`, and the second is shown as the alternative.
- Bars: each category is displayed against the 15-question total.
- Result content: fit explanation, personal interpretation, subjects, careers, exams/pathways, next steps, second-best stream, Biology warning where relevant, student advice, and decision reminder.
- PDF filename: `stream-selector-test-after-10th-report.pdf`
- PDF guidance: `Explore Class 10 Stream Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-for-class-10-students/

### 6. Stream Selector After 12th

- Questions: 15
- Categories: Engineering and Technology, Medical and Health, Business and Commerce, Creative and Design, Humanities and Service, Science and Research.
- Scoring: one category increment per selected option; categories are sorted descending.
- Result: highest category becomes `Your Best-Fit Career Path`; second-highest is shown separately.
- Result content: fit explanation, personal interpretation, degrees, entrance exams, jobs, skills, scope/future, second-best path, general advice, and decision reminder.
- PDF filename: `career-test-after-12th-report.pdf`
- PDF guidance: `Explore Guidance After Class 12`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-after-12th/

### 7. Career Aptitude After 10th

- Questions: 15
- Categories: Number Skill, Word Skill, Thinking Skill, Hands-On Skill, People Skill, Creative Skill.
- Scoring: one skill category increment per selected option; categories are sorted descending.
- Result: highest category becomes `Your Strongest Skill`; the top two are interpreted together.
- Result content: natural strength, matching subjects, jobs, streams, skill-building advice, top-two interaction, stream-choice guidance, exploration advice, and reminder.
- PDF filename: `career-aptitude-test-after-10th-report.pdf`
- PDF guidance: `Explore Class 10 Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-for-class-10-students/

### 8. Career Aptitude After 12th

- Questions: 15
- Categories: Number Skill, Word Skill, Thinking Skill, Hands-On Skill, People Skill, Creative Skill.
- Scoring: one skill increment per selected option; categories are ranked.
- Result: strongest and second skill, degree directions, careers, post-Class-12 paths, improvement actions, top-two interaction, degree-choice guidance, proof-building action, and reminder.
- PDF filename: `career-aptitude-test-after-12th-report.pdf`
- PDF guidance: `Explore Guidance After Class 12`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-after-12th/

### 9. Placement Aptitude

- Questions: 20, with four questions in each of five domains.
- Domains: Numerical Reasoning, Logical Reasoning, Verbal Ability, Data Interpretation, Workplace Judgement.
- Stored evidence: selected answer, first answer, number of answer changes, time per question, and total active time.
- Overall score: correct answers divided by 20 and rounded to a percentage.
- Domain score: 0-4; displayed accuracy is score multiplied by 25.
- Pace thresholds: faster than 65% of the user's median time is treated as fast; slower than 150% of the median is treated as slow.
- Behaviour indicators: rushed misses, slow misses, slow correct answers, beneficial changes, harmful changes, first-half score, and second-half score.
- Composite indicators: quantitative core, problem solving, communication, workplace execution, and cross-domain consistency.
- Practice allocation: a weighted 10-hour split based on score gaps and relative time.
- Complete review: all 20 questions, chosen answer, correct answer, explanation/calculation, timing, and answer-change evidence.
- Result sections: accuracy/pacing by domain; assessment handling; answer revision; first priorities; 10-hour allocation; placement interpretation; pace use; 14-day plan; practical interpretation; score limits; employer-test checks; fuller career clarity; complete review.
- PDF filename: `future-career-school-placement-aptitude-report.pdf`
- PDF guidance: `Explore Personalised Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/

### 10. Numerical Reasoning

- Questions: 24, with four questions in each of six domains.
- Domains: Percentages and Commercial Arithmetic; Ratios and Proportions; Rates and Applied Maths; Number Logic; Data Interpretation; Estimation and Decisions.
- Difficulty layers: foundation, applied, advanced.
- Error tags: percentage-base confusion, setup/relationship error, arithmetic accuracy, unit/rate mismatch, data-reading error, number-pattern error, weak reasonableness check.
- Stored evidence: first/final answer, answer changes, time per question, correctness, explanation, difficulty, domain, and error tag.
- Pace thresholds: 65% and 150% of personal median time.
- Derived indicators: overall band, six domain diagnostics, three broader composites, foundation/applied/advanced transfer, consistency, focus domains, strongest domains, top three errors, concept/translation/execution error families, verification-sensitive misses, review ceiling, revision quality, and first actions.
- Practice allocation: weighted 12-hour split using accuracy gaps, repeated misses, and relative slowness.
- Complete review: all 24 worked calculations, answers, explanations, timings, and revisions.
- PDF filename: `future-career-school-numerical-reasoning-report.pdf`
- PDF guidance: `Explore Personalised Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/

### 11. Verbal Reasoning

- Questions: 24, with four questions in each of six domains.
- Domains: Vocabulary in Context; Grammar and Sentence Precision; Reading Comprehension; Inference and Evidence; Verbal Relationships; Communication Judgement.
- Difficulty layers: foundation, applied, advanced.
- Error tags: context clue, grammar, relevant detail, unsupported inference, overreach, relationship, tone/audience, sentence structure, qualifier, ambiguity.
- Stored evidence: first/final answer, answer changes, time, correctness, explanation, domain, difficulty, and error classification.
- Derived indicators: overall score/band, six domain diagnostics, language precision, comprehension/evidence, relationships/communication, literal-versus-interpretive balance, cross-domain bottleneck, difficulty transfer, consistency, revision quality, rushed/slow patterns, error families, reading-sensitive misses, review ceiling, audience interpretation, AI-assisted-work safeguards, practice stage, and first actions.
- Practice allocation: weighted 12-hour practice plan.
- Complete review: all 24 answers, timings, correct answers, explanations, and revision evidence.
- PDF filename: `future-career-school-verbal-reasoning-report.pdf`
- PDF guidance: `Explore Personalised Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/

### 12. Career Preference Type

- Questions: 32; eight questions for each of four preference pairs.
- Audience modes: school student, college student, job seeker, working professional.
- Pairs: E/I engagement-reflection, S/N information-possibility, T/F analytical-values decisions, J/P structure-adaptability.
- Response scale: five positions from strongly left to neutral to strongly right.
- Scoring: for response value 1-5, left receives `5 - value` points and right receives `value - 1` points.
- Axis result: side percentages, preferred letter, separation strength, preference band, average time, and first-half versus second-half consistency.
- Profile result: four-letter code, or `MIXED`/dual-letter working code when response support is weak.
- Derived indicators: clarity, balance, consistency, neutral count, strong-choice count, changed answers, context-sensitive axes, nearby alternative profiles, response support, combined working patterns, matching/counter evidence, operating manual, AI safeguards, practical experiments, opposite-side skills, friction signals, research questions, five career-decision filters, and meaningful retest plan.
- Complete review: all 32 prompt pairs, selected scale position, timing, and answer changes.
- Important result statement: this is an independent original preference assessment, not the official MBTI assessment, and it does not measure aptitude or performance.
- PDF filename: `future-career-school-career-preference-evidence-report.pdf`
- PDF guidance: `Explore Personalised Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/

### 13. Big Five Career Personality

- Statements: 40.
- Audience modes: school student, college student, job seeker, working professional.
- Traits: Openness, Conscientiousness, Extraversion, Agreeableness, Emotional Sensitivity.
- Facets: 20 total, four per trait, with two statements per facet.
- Response scale: Strongly Disagree to Strongly Agree, values 1-5.
- Item score: `(value - 1) x 25`; reverse-scored statements use `100 - raw`.
- Trait score: average of eight scored statements.
- Facet score: average of its two statements.
- Trait bands: below 35 low, 35-65 context-dependent/mid, above 65 high.
- Coherence: for each facet pair, `100 - absolute difference`; trait coherence is the average of its four facet-pair coherences.
- Derived indicators: distance from midpoint, most distinctive traits, most contextual trait, 20 facets, response support, evidence pulling each trait upward/downward, four cross-trait indicators, four trait-combination patterns, work-environment dials, work-mode map, support priorities, overuse risks, collaboration manual, feedback protocol, contribution/leadership modes, learning playbook, skill-friction priorities, career-transition safeguards, role interview questions, six-part role scorecard, seven-day field test, proof projects, career-capital plan, pressure plan, decision journal, and 90-day roadmap.
- Response-quality context: neutral count, extreme-response count, longest same-answer run, changed statements, total time, average time, and average paired-item coherence.
- Complete review: all 40 statements, selected response, scored direction, time, and answer changes.
- Important result statement: scores are question-set scores rather than percentiles; the report is not a diagnosis and does not measure intelligence, skill, leadership, employability, or salary.
- PDF filename: `future-career-school-big-5-career-personality-report.pdf`
- PDF guidance: `Explore Personalised Career Guidance`
- Guidance URL: https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/

## Download binding by assessment family

### Detailed profile reports

Class 10, Class 11-12, Graduates, and Working Professionals expose `downloadResultsAsPDF()`. That function calls `window.downloadAssessmentReportPdf` with the populated result container. Their bottom download buttons and the shared top download button therefore use the visual renderer.

### Focused 15-question reports

The four focused assessments do not define a separate bottom download button. Their result containers are observed by the shared component, which inserts the top `Download PDF` action and exports the completed result.

### Evidence-heavy reports

The five evidence-heavy assessments configure `downloadButtonId="download-button"`. The shared top action triggers that existing detailed-download button. The active bottom buttons call `downloadVisualReport()` and pass the current `#result-shell` to the same visual PDF pipeline. Verbal Reasoning assigns its active `downloadPdf` reference to `downloadVisualReport` after defining the older function.

Some assessment source files retain older jsPDF functions. They remain in source but are not the active visual-download path used by the live result buttons.

## Responsive result behavior

The shared result styles apply to all 13 result containers:

- Result grids and inline `display:grid` structures collapse to one column at 760 pixels and below.
- Known assessment grid classes are explicitly included.
- Cards and stages become full width.
- Text uses normal word breaking and break-word overflow handling.
- Tables become stacked records: headers are visually hidden, and each cell displays its column label through `data-label`.
- At 420 pixels and below, table cells switch from two-column label/value layout to block layout.
- Result section padding is reduced.
- The shared download panel becomes one column, and its button becomes full width.
- Hero and assessment spacing are reduced for mobile.

Evidence-heavy result shells also focus and reposition the result panel after completion. Their `revealPanel()` accounts for the fixed header and repeats positioning after animation frames/timeouts so the result starts near the top of the viewport.

## Result data retained in PDFs

The PDF receives all text exposed by the populated result container, including content inside collapsed `details` elements. Therefore:

- All main result interpretations are included.
- All action plans and caution statements are included.
- Placement includes all 20 reviewed answers.
- Numerical includes all 24 calculations and explanations.
- Verbal includes all 24 answer explanations.
- Career Preference includes all 32 response records.
- Big Five includes all 40 response records and scoring direction.

The PDF does not reproduce the page CSS, interactive controls, HTML tables, SVG charts, or exact card geometry. It converts their visible text into the standardized branded PDF components described above.

## Main code locations

- Shared result/PDF controller: `src/components/AssessmentReportTools.astro`
- Visual PDF renderer: `src/scripts/assessmentPdfRenderer.ts`
- Contact and website links: `src/config/site.ts`
- Canonical assessment mapping: `src/config/assessmentPages.ts`
- Source contract tests: `tests/assessment-source-contract.spec.js`
- Result integrity tests: `tests/assessment-result-integrity.spec.js`
- Narrow-mobile/retake tests: `tests/assessment-retake-narrow-mobile.spec.js`
- PDF tests: `tests/assessment-pdf-batch-one.spec.js` through `assessment-pdf-batch-four.spec.js`

The separate `ASSESSMENT_CTA_INVENTORY.md` contains the complete result-page and PDF CTA wording and destinations.
