/* Round 11 source-driven visual generator. Hero artwork remains raster; explanatory
 * visuals also carry structured content so the site can render them as live cards. */
import { readFile, readdir, mkdir, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'parse5';
import sharp from '../node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/index.js';

sharp.concurrency(8);
const DIST = 'dist';
const OUT = 'public/images/blog/generated-r11';
const plainLanguageEdits = new Map(Object.entries({
  '/career-skills-compass/direction/': [['entry route', 'qualification path']],
  '/blog/career-change/mid-career-strategies-india/': [['What energizes you', 'What energizes you?']],
  '/blog/freelancing-business/how-to-start-freelancing/': [['GATE', 'Stage']],
  '/blog/career-options/library-and-information-science-career-options/': [['UGC-NET for Library Science: the Real GATE', 'UGC-NET for Library Science: the Main Qualification']],
  '/blog/career-options/safe-career-options-for-girls-in-india/': [['The two-GATE trap (government, banking, civil services).', 'Government, banking and civil-service exams can narrow choices.']],
  '/blog/freelancing-business/business-ideas-for-students/': [['Age and Rules GATE, Before Any Idea', 'Check age rules before choosing a business idea.']],
  '/blog/career-options/career-in-finance-vs-accounting-india/': [['Finance roles (financial analyst, investment banking, corporate finance, equity research) have no licensing exam GATE; entry depends on skill, resume, and interview performance.', 'Finance roles (financial analyst, investment banking, corporate finance, equity research) do not require a licensing exam; entry depends on skill, resume, and interview performance.']],
  '/blog/career-options/career-options-after-12th-except-medical/': [['entry gate for each', 'entry requirement for each'], ['GATE for', 'Entry requirement for'], ['opposite gate.', 'different entry requirement.'], ['opposite gates', 'different entry requirements']],
  '/blog/career-options/is-psychology-a-good-career-in-india/': [['The four questions tells you whether psychology fits on paper.', 'The four questions tell you whether psychology fits on paper.']],
  '/blog/career-options/mathematics-career-options/': [['Read the GATE before the glamour.', 'Check the entry requirements before the glamour.']],
  '/blog/career-options/biology-career-options-after-12th/': [['Ask for the second GATE, not only the first.', 'Ask what comes after the first entrance exam.'], ['GATE', 'Entrance Exam']],
  '/blog/career-options/career-options-after-12th-humanities/': [['GATE Many Humanities Students Discover Too Late', 'Maths Requirement Many Humanities Students Discover Too Late']],
  '/blog/career-options/physical-education-career-options/': [['Subject, not a GATE', 'A subject, not an entrance test']],
  '/blog/career-options/is-astronomy-a-good-career-in-india/': [['The path is a funnel: degree, PhD GATE, funded PhD, postdoc, permanent post.', 'The path narrows from degree to PhD admission, funded research, postdoc and a permanent post.']],
  '/blog/skill-roadmaps/machine-learning-roadmap-india/': [['Treat calculus as a later unlock, not a GATE.', 'Treat calculus as a later skill, not a starting barrier.']],
  '/blog/career-options/cybersecurity-roadmap-india/': [['Realistic starting GATE for almost everyone', 'A realistic first step for most people']],
  '/blog/college-degrees/how-to-compare-colleges-for-career-outcome-india/': [['Add a ninth GATE: budget resilience.', 'Add a ninth check: budget resilience.']],
  '/blog/stream-selection/coding-vs-pcm-for-future-engineers/': [['A coding certificate never replaces the stream at the seat GATE.', 'A coding certificate never replaces the stream requirement for admission.']],
  '/blog/career-options/mortuary-science-careers-india/': [['This Route Is a Genuine Two-GATE Competition', 'This Route Has Two Competitive Entry Stages'], ['a genuine two-GATE competitive path.', 'a competitive path with two entry stages.'], ["That is not a gap in this article's research. It is the actual, current state of the field.", 'India has no equivalent credentialed mortuary-science profession today.'], ["That is not a gap in this article&#39;s research. It is the actual, current state of the field.", 'India has no equivalent credentialed mortuary-science profession today.']],
  '/blog/career-options/law-career-options/': [['Entry Rules At Each GATE', 'Entry Rules at Each Stage'], ['Stage Decides Your Next Legal GATE', 'Your Stage Determines the Next Legal Requirement'], ['Your stage decides your next legal GATE.', 'Your stage determines the next legal requirement.'], ['Same AIBE gate.', 'The AIBE requirement is the same.'], ['No further licence. The next gates are a chamber seat, a firm interview, a state judicial notification or a client.', 'No further licence. Next steps include a chamber seat, a firm interview, a state judicial notice or finding clients.'], ['Gate and entry rule', 'Entry route and requirement']],
  '/blog/career-options/is-forensic-science-a-good-career/': [['The real GATE is a competitive government recruitment exam, not a licence.', 'The real hurdle is a competitive government recruitment exam, not a licence.'], ['A second, separate competitive GATE sits further down the road, not just at entry.', 'A second competitive exam comes later, not just at entry.']],
  '/blog/career-options/career-chart-after-12th/': [['Write the real entry GATE and date for each.', 'Write the entry requirement and date for each.'], ['Entry GATE', 'Entry Requirement']],
  '/blog/career-options/is-optometry-a-good-career/': [['B.Optom admission runs on 12th marks or a college entrance test, not NEET, a genuinely lighter and cheaper entry GATE than MBBS, BDS, or BVSc.', 'B.Optom admission runs on 12th marks or a college entrance test, not NEET; it is a lighter, cheaper route than MBBS, BDS, or BVSc.']],
  '/blog/career-options/is-food-technology-a-good-career-in-india/': [['This is a two-stage competitive GATE, not one.', 'Competition runs through two stages, not one.']],
  '/blog/career-options/is-project-management-a-good-career-in-india/': [['There is no single legal GATE.', 'There is no single legal requirement.']],
  '/blog/career-options/career-options-for-average-students-india/': [['Marks genuinely GATE entry into specific', 'Marks genuinely limit entry to specific']],
  '/blog/career-options/msc-biotechnology-career-options/': [['Named Institutes and the Real Admission GATE', 'Named Institutes and Real Admission Requirements'], ['Three exams GATE the funded-PhD door for an MSc Biotechnology graduate.', 'Three exams open the funded-PhD route for an MSc Biotechnology graduate.']],
  '/blog/career-options/career-after-ba-english-literature-india/': [['Do you want a government-gated door or a private-sector door.', 'Do you want a government-exam route or a private-sector route.']],
  '/blog/career-options/career-after-ba-history-india/': [['Do you want a government-gated door or a private-sector door.', 'Do you want a government-exam route or a private-sector route.']],
  '/blog/college-degrees/career-without-degree-after-12th-india/': [['some routes remain degree-gated', 'some roles still require a degree']],
  '/blog/career-options/is-physiotherapy-a-good-career-in-india/': [['This field gates you twice, not once.', 'This field requires both professional registration and continued specialization.']],
  '/blog/career-options/is-corporate-law-a-good-career-in-india/': [['The same degree leads to six corporate routes with different gates.', 'The same degree leads to six corporate routes with different entry requirements.']],
  '/blog/career-options/is-salesforce-a-good-career/': [['Unlike a CS-degree-gated software engineering role, Salesforce has a genuinely open front door.', 'Unlike software engineering roles that require a CS degree, Salesforce has a more open entry route.']],
  '/blog/career-guidance/myths-about-choosing-a-career-india/': [['Marks matter for some gates', 'Marks matter for some exam eligibility rules']],
  '/blog/career-options/is-aviation-a-good-career-in-india/': [['are gated and rank-bound', 'require competitive exams and rank-based selection']],
  '/blog/career-options/is-lawyer-a-good-career-in-india/': [['The All India Bar Examination (AIBE) is the licence-to-practice GATE.', 'The All India Bar Examination (AIBE) is required to practise law.'], ['AIBE and State Bar Council enrolment are real gates, not paperwork.', 'AIBE and State Bar Council enrolment are required steps, not paperwork.']],
  '/blog/career-options/is-youtube-a-good-career-in-india/': [['The Partner Programme is the GATE to ad money.', 'The Partner Programme opens the route to ad revenue.'], ['Career or Lottery: the Short Answer', 'YouTube Earnings Depend on the Audience']],
  '/blog/career-options/is-business-analyst-a-good-career-in-india/': [['MBA-entry route', 'MBA pathway']],
  '/blog/career-options/career-after-phd-political-science/': [['The entry route is rarely a cold pitch straight after the viva.', 'First roles rarely come from a cold pitch after the viva.']],
  '/blog/career-options/how-to-get-into-event-management-india/': [['Top freelancers in metro cities charge ₹30,000-50,000 per day for high-profile events; income is project-based and not monthly.', 'Metro freelancers: ₹30,000–50,000 per day.']],
  '/blog/career-options/is-international-business-a-good-career-in-india/': [['Graduate who builds sourcing or market research skill for one product', 'Product-specific market research'], ['Student who pays for an international business diploma with a job promise', 'Job-promise business diploma']],
  '/blog/college-degrees/best-mba-specializations-india/': [['Communication-strong graduates who enjoy consumer psychology', 'Graduates who enjoy consumer psychology']],
  '/blog/college-degrees/job-oriented-courses-for-ece-students/': [['Software that runs on devices: sensors, controllers, vehicles, industrial equipment', 'Firmware for sensors and devices']],
  '/blog/career-guidance/emcee-script-and-invitation-for-a-career-guidance-programme-india/': [['Please write one question you would like the speaker to answer.', 'Prepare one question for the speaker.']],
  '/blog/career-options/social-science-career-options/': [['Clear postgraduate plan and a quantitative foundation', 'A clear quantitative plan for postgraduate study']],
  '/blog/career-options/iti-career-options/': [['Many popular trades ask for Class 10 pass', 'Many trades require Class 10']],
  '/blog/stream-selection/engineering-vs-other-streams-which-is-better-career-india/': [['Roughly 67,323 combined seats across IITs, NITs, IIITs and GFTIs through JoSAA, against lakhs of JEE Main registrations each year', '67,323 seats across four institute groups'], ['Do you enjoy this type of work?', 'Would you enjoy this kind of work?']],
  '/blog/career-options/career-options-in-commerce/': [['Do you enjoy this type of work?', 'Would you enjoy this kind of work?']],
  '/blog/parents/how-to-support-child-during-career-confusion/': [['Name what you notice ("you seem stuck on this"), let your child describe the confusion in their own words without you correcting or redirecting, and', 'Name what you notice, then let your child describe the confusion in their own words.']],
  '/blog/parents/how-to-guide-child-in-career-selection-india/': [['Start conversations early (class 8-9 is not too soon), ask open questions instead of stating conclusions, use a free assessment as one input rather than the final word, a', 'Start early, ask open questions, and treat assessments as one input.']],
  '/blog/career-options/career-in-home-science/': [['Use the same four steps every time you compare two serious tracks from .', 'Use four questions to compare serious home science career tracks.']],
  '/blog/career-change/career-switch-from-it-to-management-india/': [['Pure coding depth without a advantage skill on top', 'Pure coding depth without a complementary skill on top']],
  '/blog/college-degrees/best-courses-after-bcom-for-high-salary/': [['The four questions narrows it down fast.', 'Four questions narrow BCom course choices.']],
  '/blog/college-degrees/best-courses-after-ba-for-good-salary-india/': [['The four questions narrows it down fast.', 'Four questions narrow BA course choices.']],
  '/blog/college-degrees/best-courses-for-bba-students/': [
    ['NISM certification (for example, mutual fund distributor)', 'NISM mutual fund distributor exam'],
    ['Graduation in any discipline other than Fine Arts allows direct registration for Intermediate', 'Any degree except Fine Arts'],
  ],
}));
const topicOverrides = new Map([
  ['/blog/career-options/career-options-for-people-good-at-communication-india/', 'Communication Career Paths'],
  ['/blog/career-options/is-engineering-still-a-good-career-in-india/', 'Engineering Career Outlook'],
  ['/blog/career-options/good-career-options-in-india/', 'Career Options in India'],
  ['/blog/career-guidance/how-to-choose-a-career-after-12th/', 'Career Choice After 12th'],
]);
const heroTopicOverrides = new Map([
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', 'Career Paths for the Next Decade'],
  ['/blog/career-options/career-options-after-12th-pcm-other-than-engineering/', 'PCM Careers Beyond Engineering'],
  ['/blog/medical-careers/career-options-in-medical-field-other-than-doctor-india/', 'Non-Doctor Medical Careers'],
  ['/blog/career-change/starting-a-new-career-after-50-and-60-india/', 'Career Change After 50 and 60'],
  ['/blog/career-guidance/how-to-choose-a-career-after-12th/', 'Career Choice After 12th'],
  ['/blog/career-guidance/choosing-a-career-path-during-college-india/', 'Career Choices During College'],
  ['/blog/career-options/bca-career-options/', 'BCA Career Options'],
  ['/career-resources/tarzan-rule-the-exact-moment-to-quit-your-job/', 'When to Leave a Job'],
  ['/career-resources/are-you-a-people-thinker-or-systems-thinker/', 'People or Systems Thinker'],
  ['/career-resources/salary-negotiation-what-to-say-and-what-never-to-say/', 'Salary Negotiation: What to Say'],
  ['/career-resources/tech-leverage-automate-80-percent-of-your-work-reclaim-4-hours/', 'Automate Routine Work'],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-women-returning-to-work/', 'Returning to Work'],
]);
const needHeadingOverrides = new Map([
  ['/blog/career-options/is-hr-a-good-career-in-india/', { 'entry-pay': 'HR Pay by Career Entry Path' }],
  ['/blog/career-options/career-in-space-science-india/', { 'entry-routes': 'Space Science Study and Research Routes' }],
  ['/blog/freelancing-business/consulting-as-a-career-india-how-to-get-into-consulting/', { 'entry-routes': 'MBA or Direct Consulting Path' }],
  ['/blog/career-options/career-options-for-people-good-at-communication-india/', { currencies: 'Four Communication Skill Currencies', lanes: 'Five Communication Career Lanes', demand: 'Communication Industry Growth and Size' }],
  ['/blog/career-options/is-engineering-still-a-good-career-in-india/', { 'why-asking': 'Engineering Graduates and New Demand', 'ai-impact': 'Engineering Tasks AI Is Changing', parents: 'Questions Engineering Families Should Ask' }],
  ['/blog/career-options/good-career-options-in-india/', { paths: 'Thirteen Career Paths', 'what-makes-good': 'How to Judge Career Fit' }],
]);
const visualHeadingOverrides = new Map([
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', { hero: 'Career Paths for the Next Decade' }],
  ['/blog/career-options/career-options-after-12th-pcm-other-than-engineering/', { hero: 'PCM Careers Beyond Engineering' }],
  ['/blog/medical-careers/career-options-in-medical-field-other-than-doctor-india/', { hero: 'Non-Doctor Medical Careers' }],
  ['/blog/career-change/starting-a-new-career-after-50-and-60-india/', { hero: 'Career Change After 50 and 60' }],
  ['/blog/interviews/why-did-you-choose-accounting-as-a-career-interview-answer-india/', { detail: 'A Reliable Month-End Accounting Rhythm' }],
  ['/career-resources/', { detail: 'Arts and Humanities Career Options' }],
  ['/blog/career-options/what-comes-after-business-analyst-product-consulting-or-management-india/', { matrix: 'Delivery Manager Role Paths' }],
  ['/blog/career-change/career-switch-from-it-to-management-india/', { matrix: 'IT Management Market Signals' }],
  ['/blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/', { summary: 'SSC vs Bank Exams' }],
  ['/blog/career-options/commerce-career-options-with-salary/', { hero: 'Commerce Career Pay' }],
  ['/blog/career-options/is-hr-a-good-career-in-india/', { matrix: 'HR Pay by Career Entry Path' }],
  ['/blog/career-options/career-in-space-science-india/', { summary: 'Space Science Career at a Glance', matrix: 'Space Science Career Paths' }],
  ['/blog/career-guidance/choosing-a-career-path-during-college-india/', { summary: 'How to Test Career Options' }],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-ca-aspirants/', { summary: 'Career Counselling for CA Aspirants' }],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-women/', { summary: 'Career Counselling for Women' }],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-neet-aspirants/', { summary: 'Career Counselling for NEET Aspirants' }],
  ['/blog/career-options/jewellery-design-and-gemology-careers-india/', { summary: 'Choose Your Jewellery Career Lane', matrix: 'Jewellery Roles and Core Skills' }],
  ['/blog/college-degrees/lateral-entry-mba-india/', { matrix: 'Lateral MBA Compared with Regular MBA' }],
  ['/blog/college-degrees/best-courses-for-bba-students/', { summary: 'Excel, SQL and Power BI First', matrix: 'BBA Courses by Timing and Cost', proof: 'BBA Course Costs and Returns' }],
  ['/blog/parents/how-much-to-spend-on-child-education-india/', { matrix: 'Education Costs by Stage', detail: 'How Much to Spend on Education' }],
  ['/blog/career-options/finance-business-partner-career-path-india/', { summary: 'What an FBP Does Across a Month', matrix: 'Finance Partner Monthly Review Cycle' }],
  ['/blog/career-options/career-options-after-graduation/', { matrix: 'Career Routes by Time and Proof' }],
  ['/blog/college-degrees/best-courses-after-bcom-for-high-salary/', { matrix: 'BCom Courses Ranked by Real ROI' }],
  ['/blog/career-options/career-options-for-people-good-at-communication-india/', { matrix: 'Communication Skills and Career Lanes', proof: 'Communication Career Market Figures', chain: 'Mistakes to Avoid When Choosing a Lane' }],
  ['/blog/career-options/is-engineering-still-a-good-career-in-india/', { matrix: 'Engineering Seats and Enrolment', checklist: 'Check Your Engineering Career Fit' }],
  ['/blog/career-options/good-career-options-in-india/', { proof: 'Career Route Figures', checklist: 'Questions for Comparing Career Routes' }],
  ['/blog/career-change/career-switch-from-it-to-management-india/', { matrix: 'IT Management Market Signals' }],
  ['/blog/career-options/career-options-after-12th-except-engineering/', { matrix: 'Career Routes Beyond Engineering' }],
]);
const heroAnswerOverrides = new Map([
  ['/services/career-counselling-and-career-guidance/', 'Make a clear career decision, then build skills and evidence for the next step.'],
  ['/services/career-counselling-and-career-guidance/career-guidance-service/', 'Turn uncertainty into a practical direction, skill plan, and next step.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-session/', 'Use one session to make a specific career decision with evidence.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-study-abroad/', 'Compare country, cost, career outcomes, and return-versus-stay plans.'],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-low-board-scores/', 'Choose a course or skill path with your board score in context.'],
  ['/services/career-counselling-and-career-guidance/career-guidance-expert-online/', 'Check an expert’s method, background, and practical career guidance.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-online/', 'Online guidance should lead to a clear decision and next-step plan.'],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-confused-students/', 'Compare options by fit, cost, skills, and realistic job paths.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-adults-online/', 'Map career options around your current work and income constraints.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-11th-class-students/', 'Choose a stream using subject fit, interests, and future options.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-freshers/', 'Turn first-job experience into stronger skills and a clear next move.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-after-engineering/', 'Compare your first role, skill gaps, and next career options.'],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-layoff-recovery/', 'Plan the job search and skill direction around immediate income needs.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-dropouts/', 'Compare returning to study, building skills, and entering work.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-bds-graduates/', 'Compare clinical work, specialization, and non-clinical career routes.'],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-engineering-students/', 'Test engineering roles through projects, internships, and employer evidence.'],
  ['/services/career-counselling-and-career-guidance/virtual-career-counselling/', 'Compare career paths, skill priorities, and next steps online.'],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-freshers/', 'Build a weekly plan for skills, work samples, and job applications.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-nri-students/', 'Compare study and career routes across countries, costs, and work rules.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-upsc-aspirants/', 'Check exam fit, preparation runway, and parallel career options.'],
  ['/services/career-counselling-and-career-guidance/career-planning-session-online/', 'Leave with a career plan, skill priorities, and specific next actions.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-it-professionals/', 'Choose whether to grow, specialize, or pivot using skills and market evidence.'],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-30-year-olds/', 'Compare a career pivot with your income, transferable skills, and responsibilities.'],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-entrepreneurs/', 'Turn startup experience into credible work evidence and a next role.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-school-students/', 'Align student interests and family priorities around a practical next choice.'],
  ['/blog/career-guidance/choosing-a-career-path-during-college-india/', 'Test each option with a low-cost task before choosing.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-ca-aspirants/', 'Weigh another attempt against a finance career pivot.'],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-college-students/', 'Use internships and specialization to build real proof before graduation.'],
  ['/blog/career-options/how-to-get-into-event-management-india/', 'Start with an event role; build proof before working independently.'],
  ['/blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/', 'Compare both fits.'],
  ['/blog/career-options/commerce-career-options-with-salary/', 'Pay varies by route and experience.'],
  ['/blog/career-options/career-options-for-people-good-at-communication-india/', 'Name your strongest currency and build one visible proof inside the matching lane.'],
]);
const heroRouteFigureOverrides = new Map([
  ['/blog/career-guidance/how-to-choose-a-career-after-12th/', [
    { value: '42.6%', label: 'Mercer 2024 Employability', sourceIncludes: 'Mercer Mettl India Graduate Skill Index put overall graduate employability at just 42.6%' },
    { value: '46.2%', label: 'Employability in 2022', sourceIncludes: 'employability climbing from 46.2% in 2022' },
    { value: '20 to 30', label: 'Job Descriptions to Review', sourceIncludes: 'Read 20 to 30 job descriptions for the role you want.' },
  ]],
  ['/blog/career-change/career-change-after-5-years-india/', [
    { value: '5 years', label: 'Career Transition Timing', sourceIncludes: 'A career change after 5 years in India' },
    { value: '0-2 years', label: 'Entry-Level Experience Band', sourceIncludes: 'Built for 0-2 years' },
    { value: '2-3 years', label: 'Typical Job-Change Interval', sourceIncludes: 'Switching jobs every 2-3 years' },
  ]],
  ['/blog/career-options/video-editing-career-india-how-to-become-a-video-editor/', [
    { value: '₹1.8L', label: 'Fresher Annual Pay', sourceIncludes: '₹1.8L a year for a fresher' },
    { value: '₹10L+', label: 'Senior Annual Pay', sourceIncludes: 'up to ₹10L-plus for a senior editor' },
  ]],
  ['/blog/career-options/political-science-career-options/', [
    { value: '₹3-5L', label: 'Entry Pay Range', sourceIncludes: 'Entry ~₹3-5L Feeds Tracks 1, 2 and 6' },
    { value: '₹29 lakh', label: 'Average Annual Pay', sourceIncludes: 'average total pay for a Public Policy Manager role at roughly ₹29 lakh a year' },
    { value: '₹30-60 lakh', label: 'Total Pay Range', sourceIncludes: 'total pay range around ₹30-60 lakh' },
  ]],
  ['/blog/career-options/career-options-after-12th-except-engineering/', [
    { value: '110 days', label: 'Days Until Exam Deadlines', sourceIncludes: 'dates inside 110 days' },
    { value: '2,343', label: 'Available Course Seats' },
    { value: '257', label: 'Available Course Seats' },
  ]],
  ['/blog/career-change/career-switch-from-it-to-management-india/', [
    { value: '$300 billion', label: 'Annual Industry Revenue', sourceIncludes: 'cross $300 billion in revenue' },
    { value: '16-20%', label: 'Reported Pay Premium', sourceIncludes: 'PMP for delivery/project management' },
    { value: '6-18 months', label: 'Income Transition Period', sourceIncludes: 'first 6-18 months of a lane change' },
  ]],
  ['/blog/career-options/commerce-career-options-with-salary/', [
    { value: '₹25,000', label: 'Monthly Pay After 3+ Years', sourceIncludes: 'median of ₹18,000 a month at entry and ₹25,000' },
    { value: '₹50,000', label: 'Monthly Pay Threshold', sourceIncludes: 'only 9.6% of those formal workers' },
    { value: '₹5.53 lakh', label: 'PayScale BCom Average', sourceIncludes: 'PayScale prints ₹5.53 lakh for BCom' },
  ]],
  ['/blog/career-options/career-options-after-graduation/', [
    { value: '10%', label: 'Education Budget Share', sourceIncludes: 'total education budget' },
    { sourceValue: '15 to 29 year', value: '15–29 years', label: 'Age Group' },
    { value: '20%', label: 'Graduate Unemployment, Ages 25–29', sourceIncludes: 'those aged 25 to 29' },
  ]],
  ['/blog/college-degrees/lateral-entry-mba-india/', [
    { value: '50%', label: 'Minimum Exam Marks' },
    { value: '2 to 5 years', label: 'Relevant Experience Window' },
  ]],
  ['/blog/career-options/career-options-for-people-good-at-communication-india/', [
    { value: '₹3,230 crore', label: 'PR Industry Revenue' },
    { value: '11%', label: 'PR Industry Growth' },
    { value: '12.6%', label: 'Regional Market Share' },
  ]],
]);
const heroRouteLabelOverrides = new Map([
  ['/services/career-counselling-and-career-guidance/', ['Compare Career Options', 'Build High-Value Skills', 'Show Work Evidence']],
  ['/services/career-counselling-and-career-guidance/career-guidance-service/', ['Clarify Your Goal', 'Compare Career Options', 'Set Next Steps']],
  ['/services/career-counselling-and-career-guidance/career-counselling-session/', ['Name One Decision', 'Compare Evidence', 'Choose a Next Step']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-study-abroad/', ['Compare Countries', 'Model Total Costs', 'Plan Career After Study']],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-low-board-scores/', ['Review Subject Strengths', 'Compare Course Options', 'Plan Skill Proof']],
  ['/services/career-counselling-and-career-guidance/career-guidance-expert-online/', ['Review Expertise', 'Check the Method', 'Test the Advice']],
  ['/services/career-counselling-and-career-guidance/career-counselling-online/', ['Clarify the Decision', 'Compare Options', 'Plan the Next Step']],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-confused-students/', ['List Real Options', 'Compare Fit and Cost', 'Test One Path']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-adults-online/', ['Map Current Skills', 'Compare Next Roles', 'Plan Income-Aware Steps']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-11th-class-students/', ['Review Subject Fit', 'Compare Stream Routes', 'Keep Options Open']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-freshers/', ['Review First Work', 'Choose a Skill Gap', 'Build New Proof']],
  ['/services/career-counselling-and-career-guidance/career-counselling-after-engineering/', ['Assess Current Role', 'Map Skill Gaps', 'Choose a Next Path']],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-layoff-recovery/', ['Stabilize Income', 'Target Suitable Roles', 'Build Work Proof']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-dropouts/', ['Assess Your Constraints', 'Compare Study and Work', 'Plan One Next Step']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-bds-graduates/', ['Clinical Practice', 'Specialist Study', 'Non-Clinical Roles']],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-engineering-students/', ['Test a Role', 'Build Project Proof', 'Compare Employer Needs']],
  ['/services/career-counselling-and-career-guidance/virtual-career-counselling/', ['Set a Career Goal', 'Compare Routes', 'Choose a Next Step']],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-freshers/', ['Choose a Role', 'Build Target Skills', 'Track Applications']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-nri-students/', ['Compare Countries', 'Review Costs and Rules', 'Plan a Career Route']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-upsc-aspirants/', ['Test Exam Fit', 'Plan Study Runway', 'Keep Parallel Options']],
  ['/services/career-counselling-and-career-guidance/career-planning-session-online/', ['Name Your Goal', 'Prioritize Skills', 'Set Next Actions']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-it-professionals/', ['Grow in Current Role', 'Specialize Your Skills', 'Plan a Pivot']],
  ['/services/career-counselling-and-career-guidance/career-guidance-for-30-year-olds/', ['Map Transferable Skills', 'Compare Income Impact', 'Choose a Route']],
  ['/services/career-counselling-and-career-guidance/career-coaching-for-entrepreneurs/', ['Translate Founder Skills', 'Build Work Evidence', 'Plan a Next Role']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-school-students/', ['Student Interests', 'Parent Priorities', 'Shared Next Steps']],
  ['/services/career-counselling-and-career-guidance/career-counselling-for-ca-aspirants/', ['Another Attempt', 'Articleship Balance', 'Finance Career Pivot']],
  ['/blog/career-options/bca-career-options/', ['BCA Foundations', 'Career Options', 'High-Demand Tracks']],
  ['/blog/career-guidance/choosing-a-career-path-during-college-india/', ['Test Options', 'Compare Evidence', 'Check Course Costs']],
  ['/blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/', ['SSC has one main annual cycle', 'IBPS and SBI run separate PO cycles', 'Check each notice’s age cutoff']],
  ['/services/career-counselling-and-career-guidance/locations/career-counselling-in-raipur/', ['Young State Context', 'Steel Power Mining', 'AIIMS and IIM Paths']],
  ['/blog/career-change/career-switch-tips-for-it-professionals-india/', ['Company Switch', 'Tech Stack Change', 'Move to Management']],
  ['/blog/career-change/second-career-at-40-india/', ['Consulting Path', 'Return to Work', 'Income Transition']],
  ['/blog/career-options/hr-career-path-in-india-salary-growth/', ['Executive Route', 'People Operations', 'Pay Progression']],
  ['/blog/career-change/career-switch-from-it-to-management-india/', ['Engineering Delivery', 'Team Leadership', 'Management Track']],
  ['/blog/career-options/is-investment-banking-a-good-career/', ['Analyst to Director', 'Deal Hours', 'AI Workflow Shift']],
]);
// A number belongs on a hero only when its source and meaning are clearly
// tied to the page topic. This article's extracted 20% figure is an event
// budget share, not a career outcome, so its hero must not turn it into one.
const heroWithoutFigures = new Set([
  '/blog/career-options/how-to-get-into-event-management-india/',
  '/blog/career-options/bca-career-options/',
  '/blog/skills/how-long-does-it-take-to-learn-digital-marketing-india/',
  '/blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/',
  '/services/career-counselling-and-career-guidance/career-guidance-for-confused-students/',
]);
const needsFile = process.argv.find((arg) => arg.startsWith('--needs-csv='))?.slice(12) || 'C:\\Users\\Jack Sparrow\\Downloads\\infographic_needs_v11.csv';
const metadataOnly = process.argv.includes('--metadata-only');
const allServicePages = process.argv.includes('--all-service-pages');
const shard = Number(process.argv.find((arg) => arg.startsWith('--shard='))?.slice(8) || 0);
const shards = Number(process.argv.find((arg) => arg.startsWith('--shards='))?.slice(9) || 1);
const routeFilter = process.argv.find((arg) => arg.startsWith('--route='))?.slice(8);
const routeFile = process.argv.find((arg) => arg.startsWith('--routes-file='))?.slice(14);
const routeFilters = new Set([
  ...(process.argv.find((arg) => arg.startsWith('--routes='))?.slice(9) || '').split(','),
  ...(routeFile ? (await readFile(routeFile, 'utf8')).split(/\r?\n/) : []),
].map((value) => value.trim()).filter(Boolean));
const onlyHero = process.argv.includes('--only-hero');
const preserveHero = process.argv.includes('--preserve-hero');
const excludeReportPages = process.argv.includes('--exclude-report-exclusions');
const excludeAssessmentPages = process.argv.includes('--exclude-assessments');
const excludedBlogRoutes = new Set();
if (excludeReportPages) {
  const report = await readFile('docs/image-audit/blog-summary.csv', 'utf8').catch(() => '');
  for (const line of report.split(/\r?\n/).slice(1)) {
    const [excluded, route] = line.split(',', 2);
    if (excluded === '1' && route) excludedBlogRoutes.add(route.trim());
  }
}
const PHONE = { width: 900, height: 1350 };
const DESKTOP = { width: 1000, height: 1500 };
async function writeManifest(file, content) { for (let attempt = 0; ; attempt += 1) { try { await writeFile(file, content); return; } catch (error) { if (attempt >= 5 || !['UNKNOWN', 'EPERM', 'EBUSY'].includes(error.code)) throw error; await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1))); } } }
const palettes = [
  ['#f5efe3', '#17324d', '#c45e48', '#718763', '#d5aa59'],
  ['#eef1e8', '#203b3b', '#b95b4d', '#788c67', '#d7ae57'],
  ['#f3e9df', '#2a2c40', '#c87151', '#668c8b', '#e1b55d'],
  ['#edf0ed', '#203949', '#c66d53', '#718a6e', '#d7b05f'],
];
const esc = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function applyPlainLanguageEdits(value, edits) {
  if (!edits?.length) return value;
  const rewrite = (text) => edits.reduce((result, [before, after]) => result.replace(new RegExp(before.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), after), text);
  if (typeof value === 'string') return rewrite(value);
  if (Array.isArray(value)) return value.map((item) => applyPlainLanguageEdits(item, edits));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, applyPlainLanguageEdits(item, edits)]));
  return value;
}
const hash = (value) => { let n = 0; for (const c of value) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; };
const badEnd = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'without', 'can', 'cannot', "can't", 'won\'t', 'don\'t', 'doesn\'t', 'didn\'t', 'hasn\'t', 'haven\'t', 'hadn\'t', 'aren\'t', 'isn\'t', 'wasn\'t', 'weren\'t', 'you', 'how', 'what', 'who', 'which', 'whether', 'whose', 'is', 'are', 'not', 'just', 'only', 'usually', 'actually', 'like', 'according', 'at', 'by', 'or', 'we', 'it', 'as', 'if', 'that', 'from', 'while', 'when', 'where', 'about', 'during', 'after', 'before', 'into', 'good', 'make', 'makes', 'should', 'between', 'are', 'still', 'shows', 'suggests', 'reveals', 'means', 'matters', 'includes', 'involves']);
badEnd.add('even');
const badStart = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'can', 'you', 'how', 'is', 'at', 'by', 'or', 'off', 'into', 'from', 'after', 'before', 'during', 'through', 'while', 'because', 'if', 'when', 'where', 'that', 'which', 'who', 'what', 'your', 'their', 'its', 'they', 'we', 'our', 'he', 'she', 'but', 'usually', 'often', 'sometimes', 'generally', 'mostly', 'simply', 'really', 'problem', 'as']);
const clean = (value) => String(value ?? '')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;|&#34;/g, '"').replace(/&#39;|&apos;|&rsquo;|&lsquo;|&#8216;|&#8217;/gi, "'").replace(/&ldquo;|&rdquo;|&#8220;|&#8221;/gi, '"').replace(/&nbsp;/g, ' ')
  .replace(/[“”‘’]/g, "'").replace(/…|\.\.\./g, '')
  .replace(/(?:growth:\s*the decisions that unlock|our scalability view|short answer:|what to verify:|this is our scalability view|this point needs evidence before choosing|point [123]|test the path with one project|check realistic pay before choosing|compare options before you commit|in short 01 02|article-specific career decision map|article-specific|what this article covers)/gi, '')
  .replace(/\b(undefined|tbd|lorem)\b/gi, '')
  .replace(/\bbiology[- ]gate\b/gi, 'biology eligibility').replace(/\bentry gate\b/gi, 'entry requirement').replace(/\bgates?\b/gi, (match) => match === match.toUpperCase() ? match : match.toLowerCase() === 'gates' ? 'steps' : 'entry requirement').replace(/\bcheckpoints\b/gi, 'steps').replace(/\bcheckpoint\b/gi, 'step').replace(/\bleveraging\b/gi, 'using').replace(/\bleveraged\b/gi, 'used').replace(/\bleverage\b/gi, 'use').replace(/\bcohorts\b/gi, 'groups').replace(/\bcohort\b/gi, 'group').replace(/\bheuristics\b/gi, 'rules of thumb').replace(/\bheuristic\b/gi, 'rule of thumb').replace(/\bscalability\b/gi, 'growth')
  .replace(/\s+([,.;:!?])/g, '$1').replace(/\s+/g, ' ').trim();
function isSharedPromoCopy(value) { const normalized = clean(value).toLowerCase().replace(/[’']/g, "'"); return ['a low-friction first step before the wrong path costs more time and money', 'wrong streams, outdated degrees, and low-value skills that waste years and money', 'useful skills, future readiness, and a clearer next decision', 'real student growth comes from a series of better decisions', 'practical student career guidance before the wrong path wastes years, money, and future readiness', 'practical student career counselling before the wrong path wastes years, money, and future readiness', 'practical student before the wrong path wastes years, money, and future readiness', 'includes the 1-on-1 and up to 24 small-group sessions across the year', 'see broader student guidance and useful reading before you decide', 'see the result-week admission decision, the earlier stream conversation, broader student guidance', 'move to a grade-specific page once the exact decision is clear', 'that calculation broke but it broke in a specific and slightly strange way', 'the ratings are judgement, not statistics'].some((phrase) => normalized.includes(phrase)); }
const words = (value) => clean(value).split(/\s+/).filter(Boolean);
const lastWord = (value) => words(value).at(-1)?.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
const titleCase = (value) => words(value).map((word, index) => {
  const prefix = word.match(/^[^a-z0-9]*/i)?.[0] || ''; const core = word.slice(prefix.length); const lower = core.toLowerCase();
  if (core.length > 1 && core === core.toUpperCase() && /[A-Z]/.test(core)) return prefix + core;
  if (lower === 'bsc') return prefix + 'BSc';
  if (lower === 'btech') return prefix + 'BTech';
  if (lower === 'bcom') return prefix + 'BCom';
  if (/^(ai|bca|bba|mba|bipc|pcm|pcb|aiims|neet|upsc|ssc|ca|cs|ui|ux|hr|wef|bls|upi|gdp|gw|ev|lpa|nasscom|esg|soc|grc|gate|ncsm|ios)$/.test(lower)) return prefix + lower.toUpperCase();
  if (core.includes('-')) return prefix + core.split('-').map((part) => /^(ai|bca|bba|mba|bipc|pcm|pcb|aiims|neet|upsc|ssc|ca|cs|ui|ux|hr|wef|bls|upi|gdp|gw|ev|lpa|nasscom|esg|soc|grc|gate|ncsm|ios)$/i.test(part) ? part.toUpperCase() : part.toLowerCase().replace(/^([a-z])/, (_, c) => c.toUpperCase())).join('-');
  if (core.includes('/')) return prefix + core.split('/').map((part) => /^(bsc|btech|bcom|bca|bba|mba|bipc|pcm|pcb|ai|it|ca|cs)$/i.test(part) ? part.toUpperCase().replace(/^BSC$/, 'BSc').replace(/^BTECH$/, 'BTech').replace(/^BCOM$/, 'BCom') : part.toLowerCase().replace(/^([a-z])/, (_, c) => c.toUpperCase())).join('/');
  if (index && /^(and|or|of|for|in|on|to|with|the|a|an)$/.test(lower)) return prefix + lower;
  return prefix + lower.charAt(0).toUpperCase() + lower.slice(1);
}).join(' ');
function sentenceParts(value) { const source = clean(value).replace(/\b(Rs|Dr|Mr|Ms)\.\s/gi, '$1 '); return source.split(/(?<=[!?])\s+|(?<=\.)\s+(?=[A-Z0-9₹$"'(])/).map((part) => part.trim()).filter(Boolean); }
function sentence(value, max = 9) { const exact = sentenceParts(value).find((part) => /[.!?]$/.test(part) && words(part).length <= max && !badEnd.has(lastWord(part))); return exact ? `${exact.replace(/[.!?]+$/, '')}.`.replace(/^([a-z])/, (_, c) => c.toUpperCase()) : ''; }
function shortSentence(value, max = 14) { return sentenceParts(value).find((part) => /[.!?]$/.test(part) && words(part).length <= max && !badEnd.has(lastWord(part))) || ''; }
function phrase(value, max = 8) { const picked = words(clean(value).split(/[.!?]/)[0]).slice(0, max); while (picked.length && badEnd.has(lastWord(picked.join(' ')))) picked.pop(); return picked.join(' '); }
function wrap(value, maxChars) { const out = []; let line = ''; for (const word of words(value)) { if (line && `${line} ${word}`.length > maxChars) { out.push(line); line = word; } else line = `${line} ${word}`.trim(); } if (line) out.push(line); return out; }
function visualWordCount(value) { const normalized = String(value || '').replace(/(?<=\p{L})\.(?=\p{L})/gu, '').replace(/(?:₹|\$|\bRs\.?\s*|\bINR\s*)?\d[\d,]*(?:\.\d+)?(?:\s*[-–—]\s*(?:₹|\$)?\d[\d,]*(?:\.\d+)?)?/gi, ' NUM '); return (normalized.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*(?:&[\p{L}\p{N}]+)*/gu) || []).length; }
function textLines(value, x, y, size, maxChars, fill, maxLines = 4, weight = 600, anchor = 'start', maxWidth = Infinity) { const lines = wrap(value, maxChars); if (lines.length > maxLines) return ''; const longest = Math.max(1, ...lines.map((line) => line.length)); const fittedSize = Math.min(size, Number.isFinite(maxWidth) ? maxWidth / (longest * 0.55) : size); return lines.map((line, i) => `<text x="${x}" y="${y + (i * fittedSize * 1.16)}" text-anchor="${anchor}" font-family="Arial,Helvetica,sans-serif" font-size="${fittedSize}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`).join(''); }
function shortCell(value, maxWords = 10) {
  const source = clean(value).replace(/[\s,;:]+$/, '').replace(/^(?:is|are|was|were)\s+(?:this|that)\s+/i, '').replace(/^(?:the|a|an)\s+/i, '');
  const capitalize = (text) => text.replace(/^([a-z])/, (_, c) => c.toUpperCase());
  const danglingVerb = /^(?:charges?|pays|needs?|requires?|wants?|builds?|chooses?|offers?|opens?|leads?|gives?|provides?|covers?|includes?|teaches?|shows?|means?|creates?|makes?|delivers?|supports?|connects?|depends?|asks?|allows?|helps?)$/i;
  const incomplete = (text) => { const last = lastWord(text); return badEnd.has(last) || danglingVerb.test(last || '') || /\b(?:a|an|the)\s+[\p{L}-]+$/iu.test(text) || /\b(?:and|or)\s+[\p{L}-]+$/iu.test(text); };
  const finish = (text, minimum = 2) => { const picked = words(text); while (picked.length && badStart.has(picked[0].toLowerCase().replace(/[^a-z]/g, ''))) picked.shift(); while (picked.length && incomplete(picked.join(' '))) picked.pop(); const result = picked.join(' ').replace(/[,;:]+$/, ''); return visualWordCount(result) >= minimum && visualWordCount(result) <= maxWords && !incomplete(result) ? capitalize(result) : ''; };
  const firstSentence = sentenceParts(source)[0] || '';
  if (/[.!?]$/.test(firstSentence) && visualWordCount(firstSentence) <= maxWords && !incomplete(firstSentence)) return capitalize(firstSentence.replace(/[.!?]+$/, ''));
  if (visualWordCount(source) <= maxWords && !incomplete(source)) return capitalize(source);
  const normalized = source.replace(/^\d+[.)]\s*/, '').replace(/\(([^)]*)\)/g, (_, inner) => ` ${inner.replace(/\s+\/\s+/g, ' or ')} `).replace(/\s*\([^)]*$/, '').replace(/^Then\s+/i, '').trim();
  if (visualWordCount(normalized) <= maxWords && !incomplete(normalized)) return capitalize(normalized);
  const mainClause = normalized.split(/(?<=[.!?])\s+|\s*;\s*/)[0];
  // Do not treat thousands separators such as ₹30,000 as phrase boundaries.
  const chunks = mainClause.split(/,\s+/).map(clean).filter(Boolean);
  const shortList = chunks.length >= 3 && chunks.slice(0, 4).every((part) => visualWordCount(part) <= 2);
  if (shortList) return finish(phrase(mainClause, maxWords));
  for (const chunk of chunks) { const selected = visualWordCount(chunk) <= maxWords ? chunk : phrase(chunk, maxWords); const result = finish(selected); if (result) return result; }
  return finish(phrase(mainClause, maxWords));
}
function safeTableCell(value) {
  const source = clean(value);
  if (!source) return '';
  const last = lastWord(source);
  const opens = (source.match(/[([{]/g) || []).length;
  const closes = (source.match(/[)\]}]/g) || []).length;
  const danglingTableEnd = /^(?:they|them|their|this|these|those|some|many|keep|find|run|make|take|use|build|work|require|requires|include|includes|offer|offers|lead|leads|need|needs|want|wants|show|shows|see|sees|choose|chooses|earn|earns|pays|apply|applies|follow|follows|grow|grows|help|helps|serve|serves|start|starts|support|supports|handle|handles|manage|manages|deliver|delivers|improve|improves|change|changes|create|creates|provide|provides|cover|covers|connect|connects|depend|depends|matter|matters|decide|decides|consider|considers|compare|compares|ask|asks|hold|holds|design|designs|write|writes|teach|teaches|learn|learns|carry|carries|allow|allows|prevent|prevents|protect|protects|prepare|prepares|focus|focuses|acquire|acquires|demonstrate|demonstrates|verify|verifies|check|checks|reduce|reduces|increase|increases|fall|falls|rise|rises)$/i;
  const complete = !badEnd.has(last) && !danglingTableEnd.test(last || '') && !/[,;:/\-–—]$/.test(source) && opens <= closes;
  // Preserve the article wording. Long cells are deferred to the expandable
  // full table instead of being shortened into potentially misleading text.
  return complete && visualWordCount(source) <= 10 ? titleCase(source) : '';
}
function csvRows(text) { const rows = []; let row = []; let cell = ''; let quote = false; for (let i = 0; i < text.length; i += 1) { const c = text[i]; if (c === '"' && text[i + 1] === '"' && quote) { cell += '"'; i += 1; continue; } if (c === '"') { quote = !quote; continue; } if (c === ',' && !quote) { row.push(cell); cell = ''; continue; } if ((c === '\n' || c === '\r') && !quote) { if (c === '\r' && text[i + 1] === '\n') i += 1; row.push(cell); if (row.some(Boolean)) rows.push(row); row = []; cell = ''; continue; } cell += c; } if (cell || row.length) { row.push(cell); rows.push(row); } return rows; }
async function loadNeeds() { try { const rows = csvRows(await readFile(needsFile, 'utf8')); const header = rows.shift(); const map = new Map(); for (const row of rows) { const item = Object.fromEntries(header.map((key, i) => [key, row[i] || ''])); if (!item.page) continue; const normalizedTitle = clean(item.section_title).toLowerCase(); const sharedBlogCtaFigure = item.page.startsWith('/blog/') && !item.section_id && normalizedTitle === 'career guidance pricing' && clean(item.exact_page_content_to_use) === '₹3000 | ₹250 | ₹29000 | ₹12000'; const repeatedCabinCrewCriteria = item.page === '/blog/career-options/is-cabin-crew-a-good-career-in-india/' && item.section_id === 'evidence'; const repeatedFiveYearCareerPoint = item.page === '/blog/career-change/career-change-after-5-years-india/' && item.section_id === 'senior-fresher-trap'; if (sharedBlogCtaFigure || repeatedCabinCrewCriteria || repeatedFiveYearCareerPoint) continue; const type = item.infographic_needed.startsWith('COMPARISON') ? 'matrix' : item.infographic_needed.startsWith('NUMBERS') ? 'proof' : item.infographic_needed.startsWith('CHECKLIST') ? 'checklist' : item.infographic_needed.startsWith('STEP') ? 'chain' : item.infographic_needed.startsWith('TEXT') ? 'detail' : ''; if (!type) continue; if (!map.has(item.page)) map.set(item.page, []); map.get(item.page).push({ ...item, type }); } return map; } catch { return new Map(); } }
function nodeText(node) { return (node.childNodes || []).map((child) => child.nodeName === '#text' ? child.value : nodeText(child)).join(' '); }
function collapseRepeatedOpening(value) { const parts = String(value || '').split(/\s+/); const key = (items) => items.join(' ').toLowerCase().replace(/[^a-z0-9₹$%]+/g, ' ').trim(); for (let length = Math.min(8, Math.floor(parts.length / 2)); length >= 3; length -= 1) { if (key(parts.slice(0, length)) && key(parts.slice(0, length)) === key(parts.slice(length, length * 2))) return [...parts.slice(length), ...parts.slice(length * 2)].join(' '); } return value; }
function walk(node, fn, blocked = false) { if (!node || blocked) return; fn(node); const className = (node.attrs || []).find((attribute) => attribute.name === 'class')?.value || ''; const stop = ['aside', 'nav', 'header', 'footer'].includes(node.tagName) || /(?:article-live-visual|bofu-live-diagram)/.test(className); for (const child of node.childNodes || []) walk(child, fn, stop); }
function pageData(html, isBlog = false) { const doc = parse(html); let main = null; let description = ''; let bestArticle = null; let bestArticleLength = 0; walk(doc, (node) => { if (node.tagName === 'main' && !main) main = node; if (node.tagName === 'meta') { const attrs = Object.fromEntries((node.attrs || []).map((attribute) => [attribute.name, attribute.value])); if (attrs.name?.toLowerCase() === 'description') description = clean(attrs.content || ''); } if (node.tagName === 'article') { const length = nodeText(node).length; if (length > bestArticleLength) { bestArticle = node; bestArticleLength = length; } } }); const root = main || (isBlog ? bestArticle : null) || doc; const headings = []; const facts = []; const lists = []; const sections = []; let current = null; let currentSubheading = ''; const hasSourceDescendant = (node) => (node.childNodes || []).some((child) => child.tagName && (['p', 'li', 'dt', 'dd', 'td'].includes(child.tagName) || hasSourceDescendant(child))); walk(root, (node) => { if (!node.tagName) return; const raw = collapseRepeatedOpening(clean(nodeText(node))); if ((node.tagName === 'h2' || node.tagName === 'h3') && raw) { const h = titleCase(raw); if (!headings.includes(h)) headings.push(h); if (node.tagName === 'h2') { current = { title: h, facts: [] }; currentSubheading = ''; sections.push(current); } else if (node.tagName === 'h3') currentSubheading = h; } const className = (node.attrs || []).find((attribute) => attribute.name === 'class')?.value || ''; const faqAnswer = /(?:^|\s)faq-a(?:\s|$)/.test(className); const faqQuestion = node.tagName === 'summary' && node.parentNode?.tagName === 'details'; const structuredEvidence = /(?:^|\s)(?:checkpoint__note|lane-row--(?:layer|fit|watch))(?:\s|$)/.test(className); const isCrossoverCard = /(?:^|\s)(?:crossover-card|switcher-card)(?:\s|$)/.test(className); const structuredCard = node.tagName === 'div' && (/(?:career|salary|role|path|feature|option|pay|market|figure|proof|skill|industry|crossover).*(?:card|tile|row|item|range)|(?:card|tile|row|item|range).*(?:career|salary|role|path|feature|option|pay|market|figure|proof|skill|industry|crossover)/i.test(className) || /(?:salary|pay-range|compensation|figure-card|metric-card)/i.test(className) || isCrossoverCard) && (!hasSourceDescendant(node) || isCrossoverCard); const sourceTag = ['p', 'li', 'dt', 'dd', 'td'].includes(node.tagName) || faqAnswer || faqQuestion || structuredEvidence || structuredCard; if (sourceTag && raw.length > 24 && !isSharedPromoCopy(raw) && !/read is [^.!?]+|want a second opinion on this decision|want to talk to (?:a )?counsellor|book (?:a )?session|call now|contact us|read next|related posts?|you may also like|share this article/i.test(raw)) { const text = sentence(raw, 100) || raw; const item = { text, raw, heading: currentSubheading || current?.title || '' }; if (!facts.some((fact) => fact.raw === raw)) facts.push(item); if (node.tagName === 'li') lists.push(item); if (current && !current.facts.some((fact) => fact.raw === raw)) current.facts.push(item); } }); const numberFacts = facts.filter((fact) => /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)/i.test(fact.raw)); return { description, headings: headings.slice(0, 20), facts: facts.slice(0, 100), lists: lists.slice(0, 30), numberFacts, sections: sections.slice(0, 50) }; }
function attachSectionIds(data, html) {
  const doc = parse(html);
  const normalize = (value) => clean(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const idsByTitle = new Map();
  walk(doc, (node) => {
    if (node.tagName !== 'h2' && node.tagName !== 'h3') return;
    const id = (node.attrs || []).find((attribute) => attribute.name === 'id')?.value || '';
    if (!id) return;
    const title = normalize(titleCase(collapseRepeatedOpening(clean(nodeText(node)))));
    if (title && !idsByTitle.has(title)) idsByTitle.set(title, id);
  });
  for (const section of data.sections) {
    const key = normalize(section.title);
    section.id = idsByTitle.get(key) || '';
  }
}
function topicFrom(title, slug = '') {
  const cleanTitle = clean(title);
  const slugWords = words(String(slug).replace(/\bgate\b/gi, 'GATE').replaceAll('-', ' '));
  const fallbackWords = slugWords.slice(0, 7);
  while (fallbackWords.length > 3 && badEnd.has(lastWord(fallbackWords.join(' ')))) fallbackWords.pop();
  const fallback = fallbackWords.join(' ') || cleanTitle;
  const lead = cleanTitle.split(/\s*:\s*/)[0];
  const candidate = words(lead).length >= 3 && words(lead).length <= 7 && !isGenericVisualHeading(lead) && !badEnd.has(lastWord(lead)) ? lead : fallback;
  return titleCase(candidate).replace(/\bIndia\b$/i, 'India') || 'Career Path';
}
function balancedHeading(value) {
  const chars = [...String(value || '')];
  let depth = 0;
  let unmatchedClose = false;
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === '(') depth += 1;
    if (chars[i] === ')') { if (depth) depth -= 1; else { chars[i] = ''; unmatchedClose = true; } }
  }
  if (depth) {
    let open = -1;
    depth = 0;
    for (let i = 0; i < chars.length; i += 1) {
      if (chars[i] === '(') { if (!depth) open = i; depth += 1; }
      if (chars[i] === ')') depth -= 1;
    }
    if (open >= 0) chars.splice(open);
  }
  let straightOpen = false;
  for (let i = 0; i < chars.length; i += 1) if (chars[i] === '"') { if (straightOpen) straightOpen = false; else straightOpen = i + 1; }
  if (straightOpen) chars[straightOpen - 1] = '';
  const opens = chars.filter((char) => char === '“').length;
  const closes = chars.filter((char) => char === '”').length;
  if (opens > closes) {
    for (let i = chars.length - 1; i >= 0; i -= 1) if (chars[i] === '“') { chars[i] = ''; break; }
  } else if (closes > opens) {
    for (let i = chars.length - 1; i >= 0; i -= 1) if (chars[i] === '”') { chars[i] = ''; break; }
  }
  return chars.join('').replace(/\s+\+$/, '').replace(/\s+/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();
}
function shortHeading(value, fallback) { const rawSource = balancedHeading(clean(value || fallback).replace(/[\s,;:]+$/, '').replace(/[.!?]+$/, '')) || 'Career Evidence'; const dashTail = rawSource.split(/\s*[—–]\s*/).at(-1); const source = rawSource !== dashTail && visualWordCount(dashTail) >= 3 && visualWordCount(dashTail) <= 7 && !badEnd.has(lastWord(dashTail)) ? dashTail : rawSource; if (/^Mobile Apps\s*→/i.test(source)) return 'Mobile App Development'; if (/^\d+(?:\.\d+)?\s*(?:to|[–-])\s*\d+(?:\.\d+)?\s*(?:years?|months?)/i.test(source)) return 'Course Duration by Route'; if (/\bask a specific person a specific small question\b/i.test(source)) return 'Ask One Person One Question'; const fallbackTopic = compactTopic(fallback) || 'Career Guidance'; const safeFallback = words(fallback).length >= 3 && words(fallback).length <= 7 && !badEnd.has(lastWord(fallback)) ? balancedHeading(clean(fallback)) : (visualWordCount(fallbackTopic) >= 3 ? fallbackTopic : 'Career Guidance Overview'); const valid = (text) => { const count = visualWordCount(text); const first = words(text)[0]?.toLowerCase(); return count >= 3 && count <= 7 && (!badStart.has(first) || ['what', 'who', 'how', 'why', 'is'].includes(first)) && (!badEnd.has(lastWord(text)) || /\bIT[\s"'”’)!?]*$/u.test(text)) && !/[()]\s*$/.test(text); }; if (visualWordCount(source) <= 7 && valid(source)) return titleCase(source); const punctuated = source.split(/\s*(?::|;|,(?!\d)|[–—])\s*/).map((part) => clean(part)).filter(valid); if (punctuated.length) return titleCase(punctuated.sort((a, b) => visualWordCount(b) - visualWordCount(a))[0]); const incompleteSource = badEnd.has(lastWord(source)) || /\b(?:only|just|what|who|which|whether)$/i.test(source); if (!incompleteSource) { const tokens = words(source); const connectors = new Set(['a', 'an', 'the', 'to', 'of', 'for', 'in', 'on', 'with', 'before', 'after', 'than', 'through', 'during', 'from', 'into', 'around', 'across', 'between', 'without', 'by']); const auxiliaries = new Set(['has', 'have', 'had', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'does', 'do', 'did', 'can', 'could', 'should', 'would', 'will', 'may', 'might']); const candidates = []; for (let length = Math.min(7, tokens.length); length >= 3; length -= 1) for (let start = 0; start + length <= tokens.length; start += 1) { const option = tokens.slice(start, start + length).join(' '); if (!valid(option)) continue; const first = words(option)[0].toLowerCase(); const score = length * 2 + (start + length === tokens.length ? 5 : 0) + (start > 0 && connectors.has(tokens[start - 1].toLowerCase()) ? 3 : 0) - (auxiliaries.has(first) ? 4 : 0); candidates.push({ option, score }); } if (candidates.length) return titleCase(candidates.sort((a, b) => b.score - a.score)[0].option); } return titleCase(safeFallback || 'Career Evidence'); }
function completeShortHeading(value, fallback) { const tokens = words(value); const incomplete = new Set(['any', 'each', 'every', 'your', 'their', 'these', 'those', 'whose']); while (tokens.length >= 3 && (badEnd.has(tokens.at(-1).toLowerCase()) || incomplete.has(tokens.at(-1).toLowerCase()))) tokens.pop(); return tokens.length >= 3 ? titleCase(tokens.join(' ')) : shortHeading('', fallback); }
function isGenericVisualHeading(value) { return /^(?:according to\b|evidence from|key ideas from|entry routes?\b|pay and cost\b|market signal\b|career evidence\b|(?:the )?short answer\b|the verdict\b|explore related help\b|an illustration(?:,|\s)+not a real|best if you are dealing|best if you need|these are rated|the ratings are judgement|evidence card|key figures?|limited|for the first|a low|wrong streams|useful skills|continuous career guidance|where people add value|organisational change is harder than)|\bmarket signal check\b|\s+detail$/i.test(clean(value).replace(/[.:]+$/, '')); }
function contentHeading(item, fallback) { const raw = clean(item?.raw || item?.text || ''); const section = clean(item?.heading || ''); const candidate = section || sentence(raw, 8) || clean(fallback); const result = shortHeading(candidate, fallback); return isGenericVisualHeading(result) ? shortHeading(fallback, fallback) : result; }
function compactTopic(topic) { const parts = words(topic).slice(0, 5); while (parts.length && badEnd.has(lastWord(parts.join(' ')))) parts.pop(); return titleCase(parts.join(' ')) || 'Career Guidance'; }
function heroTopic(topic, route = '') { const override = heroTopicOverrides.get(route); if (override) return override; const stop = new Set(['a', 'an', 'the', 'after', 'before', 'for', 'from', 'in', 'india', 'is', 'of', 'or', 'to', 'and', 'career', 'careers', 'options', 'option', 'good', 'best', 'how']); const selected = words(clean(topic)).filter((word) => !stop.has(word.toLowerCase())).slice(0, 4); return titleCase(selected.join(' ') || words(topic).slice(0, 4).join(' ')) || 'Career Direction'; }
function pageContextHeading(value, topic, slug) { return shortHeading(clean(value) || compactTopic(topic), compactTopic(topic)); }
function proofHeading(items, fallback, topic) { const figures = items.map(figureFromItem).filter(Boolean); const labels = [...new Set(figures.map((figure) => figure.label).filter(Boolean))]; const context = compactTopic(topic); return `${labels.slice(0, 2).join(' & ') || 'Key Figures'} for ${context}`; }
function heroEditorialLabel(topic) { const value = String(topic || '').toLowerCase(); if (/salary|pay|fee|cost|income|budget|earn/.test(value)) return 'Work and Pay'; if (/course|college|degree|exam|admission|study|stream|school|mba/.test(value)) return 'Study Choices'; if (/skill|portfolio|resume|interview|job search|freelanc|business/.test(value)) return 'Skills in Practice'; if (/guidance|counsel|confusion|choose|choice|decision/.test(value)) return 'Career Decisions'; return 'Career Routes'; }function typeTopLabel(type) { return ({ hero: 'Career Snapshot', summary: 'Key Ideas', matrix: 'Compare Clearly', chain: 'Try The Path', checklist: 'Check First', proof: 'Numbers In Context', detail: 'Read The Evidence' })[type] || 'Career Evidence'; }
function visualTitle(type, heading, topic, pageTitle) { return type === 'hero' ? clean(pageTitle) || `${compactTopic(topic)} career overview` : shortHeading(heading, topic); }
function visualAlt(type, heading, topic) { const subject = clean(heading || compactTopic(topic)); return ({ summary: `Key takeaways: ${subject}.`, matrix: `Comparison table: ${subject}.`, chain: `Step sequence: ${subject}.`, checklist: `Checklist: ${subject}.`, proof: `Figures and labels: ${subject}.`, detail: `Evidence notes: ${subject}.` })[type] || `Career decision: ${subject}.`; }
function heroAlt(topic, answer, pageTitle, route = '') { if (route === '/blog/career-guidance/how-to-choose-a-career-after-12th/') return 'Career choice after 12th: a role-first plan, employability context, and job-description review.'; const subjectWords = words(heroTopic(topic, route)); let answerSentence = sentence(answer, 14); if (!answerSentence) { subjectWords.splice(2); answerSentence = sentence(answer, 16); } const subject = subjectWords.join(' ') || compactTopic(topic); return answerSentence ? `Overview of ${subject}: ${answerSentence}` : `Overview of ${subject}: career routes and supporting evidence.`; }
function threeWordFigureLabel(label, source = '', value = '') {
  const original = clean(label).replace(/\s+/g, ' ');
  const key = original.toLowerCase();
  const context = clean(source).toLowerCase();
  if (!original) return '';
  if (/what if i get guidance and i am still not 100% sure afterward/.test(context)) return '';
  const exact = new Map([
    ['main course fee allocation', 'Course Fee Allocation'],
    ['entry level newsroom pay', 'Newsroom Entry Pay'],
    ['presumptive taxable income share', 'Taxable Income Share'],
    ['projected pr industry revenue by 2030', 'PR Revenue 2030'],
    ['civil services starting basic pay', 'Starting Basic Pay'],
    ['civil services pay ceiling', 'Civil Service Ceiling'],
    ['entry pay: roughly a month in india', 'Monthly Entry Pay'],
    ['projected approved seat capacity', 'Projected Seat Capacity'],
    ['standalone medico-legal consultant roles pay roughly', 'Medico-Legal Consultant Pay'],
    ['its median of about reflects tech-company pay', 'Tech Median Pay'],
    ['projected industry revenue by 2026', 'Industry Revenue 2026'],
    ['another lists for the same title', 'Alternative Salary Range'],
    ['roughly in larger private hospitals', 'Private Hospital Pay'],
    ['pr industry market size', 'PR Industry Size'],
    ['mcom alone rarely clears', 'MCom Salary Range'],
    ['entry; grows with seniority and sector', 'Entry Level Pay'],
    ['entry; self-employed experienced plumbers in metros earn', 'Experienced Plumber Pay'],
    ['data analyst fresher pay averages about', 'Data Analyst Pay'],
    ['digital advertising spend forecast', 'Digital Ad Spend'],
    ['interest or allowance rate', 'Annual Pay Growth'],
    ['product development roles specifically average close to', 'Product Development Pay'],
    ['grc analyst (governance, risk, compliance)', 'GRC Analyst Pay'],
    ['soc analyst (tier 1–2)', 'SOC Analyst Pay'],
    ['penetration tester / ethical hacker', 'Penetration Tester Pay'],
    ['devops / site reliability engineer', 'DevOps Engineer Pay'],
    ['entry; mba is the real lever', 'Entry Level Pay'],
    ['candidates assessed', 'Assessed Candidate Count'],
    ['eligibility threshold', 'Minimum Marks Threshold'],
    ['btech enrolment', 'BTech Student Enrolment'],
    ['promotion timeline', 'Promotion Review Timeline'],
    ['selection rate', 'Geography Selection Rate'],
    ['notice period', 'Company Notice Period'],
    ['growth rate', 'Industry Growth Rate'],
    ['share earning a month or more', 'Monthly Income Share'],
    ['vacancy rate', /faculty/i.test(context) ? 'Faculty Vacancy Rate' : 'Job Vacancy Rate'],
    ['telemedicine coordinator', 'Telemedicine Coordinator Pay'],
    ['blockchain developer', 'Blockchain Developer Pay'],
    ['school counsellor', 'School Counsellor Pay'],
    ['course fee', /mba/i.test(context) ? 'MBA Degree Cost' : 'Course Tuition Fee'],
  ]);
  if (key === 'growth rate' && /united states bureau of labor statistics|project management specialists/i.test(context)) return 'Specialist Job Growth';
  if (key === 'reported percentage') {
    if (/skill sets?[^.]{0,100}(?:transformed|outdated)|future of jobs[^.]{0,100}(?:transformed|outdated)/i.test(context)) return 'Skills Change Forecast';
    if (/\bcbse\b[^.]*\b(?:appeared|passed|pass rate)\b/i.test(context)) return 'CBSE Pass Rate';
    if (/\bdiamonds?\b[^.]*\bcut and polished\b[^.]*\bsurat\b/i.test(context)) return 'Surat Diamond Share';
    if (/\bselection rate\b|\bselected\b/i.test(context) && /upsc|geography/i.test(context)) return 'Geography Selection Rate';
  }
  if (key === 'growth rate' && /ai spending|communication teams/.test(context)) return 'AI Spend Share';
  if (key === 'regional market share' && /ai job postings surged/.test(context)) return 'AI Posting Surge';
  if (key === 'regional market share' && /cloud projected at/.test(context)) return 'Cloud GDP Share';
  if (key === 'reported percentage') return '';
  if (exact.has(key)) return exact.get(key);
  if (original.split(/\s+/).filter(Boolean).length === 3) return original;
  if (/\b(?:lpa|salary|pay|earns?|income)\b/i.test(context) && /\b(?:entry|fresher|starting)\b/i.test(context)) return 'Entry Level Pay';
  if (/\b(?:lpa|salary|pay|earns?|income)\b/i.test(context) && /\b(?:hospital|clinic)\b/i.test(context)) return 'Hospital Salary Range';
  if (/\b(?:lpa|salary|pay|earns?|income)\b/i.test(context)) return 'Typical Salary Range';
  if (/\b(?:years?|months?|weeks?|days?)\b/i.test(value)) return 'Reported Time Period';
  if (/%|percent/i.test(value)) return 'Reported Rate Share';
  return '';
}

function figureFromItem(item, matchIndex = 0) {
  const raw = clean(item?.raw || item?.text || '');
  if (/\b(?:F|J)-\d+\s+students?\b/i.test(raw)) return null;
  if (/^[^:]{1,100}:\s.+\((?:primary|secondary|official) source\)$/i.test(raw)) return null;
  const selectionOdds = raw.match(/\b1\s+in\s+(\d+(?:,\d{3})*)\s*[-–—]\s*(\d+(?:,\d{3})*)\s+applicants?\b/i);
  if (selectionOdds) return { value: `1 in ${selectionOdds[1]}–${selectionOdds[2]}`, label: 'Selection Odds Range', source: raw, text: raw };
  const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
  const pattern = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)\s*${number}(?:\s*(?:[–—-]|\bto\b)\s*${number})?(?:\s*\+)?(?:\s*(?:lakh|crore|lpa|l|k|billion|million))?|${number}\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|employees?|jobs?|applicants?|seats?)`, 'gi');
  const matches = [...raw.matchAll(pattern)];
  const match = matches[matchIndex];
  if (!match) return null;
  let value = expandFigureValue(match[0], raw).replace(/\s+/g, ' ').trim().replace(/\s+(?:vacancies|students?|employees?|jobs?|applicants?|seats?)$/i, '').replace(/^rs\.?\s*/i, '₹').replace(/^inr\s*/i, '₹').replace(/[.,]+$/, '');
  const evidenceLine = sentenceParts(raw).find((part) => part.toLowerCase().includes(match[0].toLowerCase())) || raw;
  const matchInLine = Math.max(0, evidenceLine.toLowerCase().indexOf(match[0].toLowerCase()));
  const contextStart = Math.max(0, matchInLine - 72);
  const contextEnd = Math.min(evidenceLine.length, matchInLine + match[0].length + 72);
  const local = evidenceLine.slice(contextStart, contextEnd).toLowerCase();
  const localAfter = evidenceLine.slice(matchInLine + match[0].length, matchInLine + match[0].length + 42).toLowerCase();
  const nearbyBefore = evidenceLine.slice(Math.max(0, matchInLine - 42), matchInLine).toLowerCase();
  const nearbyAfter = evidenceLine.slice(matchInLine + match[0].length, matchInLine + match[0].length + 24).toLowerCase();
  const directNounContext = `${match[0]} ${nearbyBefore.slice(-18)} ${nearbyAfter.slice(0, 18)}`.toLowerCase();
  const lineMatches = [...evidenceLine.matchAll(pattern)];
  const matchingIndex = lineMatches.findIndex((candidate, index) => index === matchIndex && candidate[0].toLowerCase() === match[0].toLowerCase());
  const previousNumberEnd = matchingIndex > 0 ? lineMatches[matchingIndex - 1].index + lineMatches[matchingIndex - 1][0].length : Math.max(0, matchInLine - 48);
  const nextNumberStart = matchingIndex >= 0 && matchingIndex < lineMatches.length - 1 ? lineMatches[matchingIndex + 1].index : Math.min(evidenceLine.length, matchInLine + match[0].length + 48);
  const stagePrefix = evidenceLine.slice(previousNumberEnd, matchInLine).toLowerCase();
  const stageSuffix = evidenceLine.slice(matchInLine + match[0].length, nextNumberStart).toLowerCase();
  const figureStageContext = `${stagePrefix} ${stageSuffix}`;
  const organization = evidenceLine.slice(0, matchInLine).match(/\b(TCS|Infosys|Wipro|HCLTech|Accenture|Cognizant|Capgemini|Tech Mahindra)\b/gi)?.at(-1);
  if (/^\s+on year\b/.test(nearbyAfter) && /\b(?:down|reduction|declin\w*|fell|drop\w*)\b/i.test(nearbyBefore)) value = value.replace(/\s+years?$/i, '');
  const heading = clean(item?.heading || '').toLowerCase();
  // Do not turn the age/history of a place or institution into a career
  // timeline. It is a contextual fact, not a duration a reader must plan for.
  if (/(?:\bstate\b|\bcity\b|\btown\b|\bcountry\b|\binstitution\b|\buniversity\b).{0,70}\b(?:existed|was founded|was formed|was established|is\s+\d+\s+years?\s+old|years? ago)\b|\b\d+(?:\.\d+)?\s+years?\s+(?:ago|old)\b/i.test(local)) return null;
  const hasMoney = /(?:₹|\b(?:rs\.?|inr)\b|\$|\blpa\b|\blakh\b|\bcrore\b)/i.test(value);
  const hasCurrencyMarker = /(?:₹|\b(?:rs\.?|inr)\b|\$|\blpa\b)/i.test(value);
  const isPercent = /%|percent/i.test(value);
  const isDuration = /\b(?:years?|months?|weeks?|days?|hours?)\b/i.test(value);
  let label = '';
  // Classify the value's form before broad surrounding prose. A percentage,
  // duration, or currency amount cannot become an applicant/employee count
  // just because that noun appears elsewhere in the same long sentence.
  if (isPercent) {
    const immediatePercentContext = `${nearbyBefore} ${nearbyAfter}`;
    const beforeValue = evidenceLine.slice(0, matchInLine).toLowerCase();
    if (/ca\s+final/i.test(immediatePercentContext) && /pass|clear/i.test(local)) label = 'CA Final Pass Rate';
    else if (/upsc civil services/i.test(immediatePercentContext) && /select/i.test(local)) label = 'UPSC Selection Rate';
    else if (/employers?\s+(?:reported|reporting)|difficulty finding skilled/i.test(immediatePercentContext) && /workers?|talent|skilled/i.test(local)) label = 'Employers Reporting Hiring Difficulty';
    else if (/ai.{0,45}tasks|tasks.{0,45}ai/i.test(local)) label = 'Engineering Tasks Touched by AI';
    else if (/btech enrolment/i.test(local) && /jump|growth|increase/i.test(local)) label = 'BTech Enrolment Growth';
    else if (/engineering graduates/i.test(immediatePercentContext) && /left college without|no relevant job|no relevant internship/i.test(local)) label = 'Graduates Without Relevant Work';
    else if (/education budget/i.test(evidenceLine) && /spending above/i.test(beforeValue) && /red flag/i.test(evidenceLine)) label = 'Budget Warning Threshold';
    else if (/vacanc/i.test(immediatePercentContext)) label = /(?:down|declin|fell|drop|decreas)/i.test(local) && !/vacancy rate/i.test(local) ? 'Hiring Demand Decline' : /reserves?|reservation|quota|fill/i.test(local) ? 'Reserved Vacancy Share' : 'Vacancy Rate';
    else if (/seat/i.test(immediatePercentContext)) label = 'Course Seat Share';
    else if (/interest|concession|subsid/i.test(immediatePercentContext)) label = 'Interest Rate Concession';
    else if (/budget/i.test(local) && /caution|warning|red flag|spending above|above roughly/i.test(nearbyAfter)) label = 'Budget Warning Threshold';
    else if (/budget|allocation|allocated|share/i.test(immediatePercentContext) || (/budget/i.test(local) && /percent|%/i.test(value))) label = 'Education Budget Share';
    else if (/eligib|qualif|benchmark|minimum|threshold|marks|score|aggregate/i.test(immediatePercentContext)) label = /exam|marks|score|aggregate/i.test(local) ? 'Minimum Exam Marks' : 'Benchmark Eligibility Threshold';
    else if (/employab/i.test(figureStageContext + ' ' + nearbyBefore + ' ' + nearbyAfter)) label = 'Graduate Employability Rate';
    else if (/attrition/i.test(figureStageContext + ' ' + nearbyBefore + ' ' + nearbyAfter)) label = 'Annual Staff Attrition';
    else if (/market/i.test(local) && /accounts for|share of|fraction of/i.test(local)) label = 'Regional Market Share';
    else if (/growth|grow\w*|increase|rise|projected/i.test(local)) label = /market/i.test(local) ? 'Regional Market Share' : 'Industry Growth Rate';
    else if (/funnel|selection odds/i.test(local)) label = 'Selection Funnel Rate';
    else if (/pass rates?|passed per group|cleared per group/i.test(local)) label = 'Exam Pass Rate';
    else if (/survey|poll|respondents?|said|reported|rated|consider/i.test(local)) label = 'Survey Response Share';
    else if (/entry.level|commerce jobs/i.test(local)) label = 'Entry Level Share';
    else if (/demand[ -]supply gap|skills gap/i.test(local)) label = 'Skills Demand Gap';
    else if (/traffic|passengers/i.test(local)) label = 'Annual Traffic Growth';
    else label = 'Reported Percentage';
  } else if (isDuration) {
    if (/\bage\s+(?:limit|range|band|bands|criteria)|\bage\s+of\b|age limits?\b|candidates?\s+aged|aged\s+\d/i.test(local)) {
      const immediateAgeContext = nearbyBefore + ' ' + nearbyAfter;
      label = /age groups?|year olds/i.test(local) || /age bands?/i.test(local) && /statistics|distribution|respondent/i.test(local) ? 'Age Group' : /survey|respondent|participant/i.test(immediateAgeContext) ? 'Survey Age Range' : /experienced crew/i.test(immediateAgeContext) ? 'Experienced Age Limit' : /freshers?/i.test(immediateAgeContext) ? 'Fresher Age Limit' : 'Age Limit';
    }
    else if (/notice period|notice policy|notice requirement|shortfall|buyout/i.test(local)) label = 'Notice Period';
    else if (/service commitment|service term|enlistment|retained afterward|\bbonds?\b/i.test(local)) label = 'Service Commitment Period';
    else if (/experience|work history|years? of depth|years?\s+(?:of\s+)?(?:leading|managing|working|building|in\b)/i.test(local)) label = 'Relevant Experience Window';
    else if (/pension/i.test(local) && /eligible service|qualify|qualifying/i.test(local)) label = 'Pension Eligibility Period';
    else if (/watch hours|shorts views|partner program|opt window/i.test(local)) label = /watch hours|shorts views|partner program/i.test(local) ? 'Platform Eligibility Window' : 'Post Study Work';
    else if (/start earning|need to earn|earning within|income within/i.test(local)) label = 'Earning Decision Window';
    else if (/from bootcamp finish to hire|finish to hire|time to hire/i.test(local)) label = 'Hiring Transition Window';
    else if (/qualification path|qualification runway|through .*? exams|articleship|full route/i.test(local)) label = 'Qualification Time Window';
    else if (/course|degree|program|programme|duration|diploma|qualification|training|bootcamp|articleship/i.test(local)) label = 'Total Course Duration';
    else if (/offshore cycle|cycle from|licen[cs]e to production/i.test(local)) label = 'Typical Project Cycle';
    else if (/shift/i.test(local)) label = 'Typical Work Shift';
    else if (/lane change/i.test(local) && /(?:flat pay|lateral move|step down|pay cut|income)/i.test(local)) label = 'Income Transition Period';
    else if (/\b(?:show|build|publish|complete|finish|produce)\b.{0,35}\b(?:proof|portfolio|project|showcase)\b|\b(?:proof|portfolio|project|showcase)\b.{0,35}\b(?:within|in|by)\b/i.test(local)) label = 'Proof Milestone Window';
    else if (/project/i.test(local) && /hour/i.test(local)) label = 'Example Project Duration';
    else label = 'Estimated Time Required';
  } else if (!hasCurrencyMarker && !isDuration && /btech enrolment|enrolment (?:hit|reached)/i.test(directNounContext)) {
    label = 'BTech Enrolment';
  } else if (!hasCurrencyMarker && !isDuration && /approved intake capacity|intake capacity/i.test(local)) {
    label = /projected/i.test(local) ? 'Projected Approved Seat Capacity' : 'Approved Seat Capacity';
  } else if (hasCurrencyMarker && /\bemployees?\b(?!['’])|\bstaff\b|\bheadcount\b/i.test(local)) {
    label = '';
  } else if (!hasCurrencyMarker && (!hasMoney || /\bemployees?\b|\bstaff\b|\bheadcount\b/i.test(match[0])) && /\bemployees?\b(?!['’])|\bstaff\b|\bheadcount\b/i.test(directNounContext)) {
    const subject = organization;
    if (/training|reskilling|upskilling/i.test(local)) label = 'Employees in Reskilling';
    else if (/\b(?:reduction|down|declin\w*|fell|drop\w*)\b/i.test(nearbyBefore)) label = subject ? `${subject} Staff Change` : 'Staff Change Reported';
    else label = subject ? `${subject} Employee Count` : 'Employee Count Reported';
  }
  else if (isPercent && /funnel|selection odds/i.test(local)) label = 'Selection Funnel Rate';
  else if (isPercent && /pass rates?|passed per group|cleared per group/i.test(local)) label = 'Exam Pass Rate';
  else if (isPercent && /employab/i.test(local)) label = 'Graduate Employability Rate';
  else if (isPercent && /freshers?|fresher share/i.test(local) && /batch|cohort|accept/i.test(local)) label = 'Fresher Share';
  else if (isPercent && /\b(?:gmac|mba applicants?)\b.{0,70}\b(?:intent|pivot|switch|change careers?)\b|\b(?:survey|poll)\b.{0,70}\b(?:intent|said|reported|rated|consider|respondents?)\b/i.test(local)) label = /\b(?:gmac|mba applicants?)\b/i.test(local) ? 'MBA Pivot Intent' : 'Survey Response Share';
  else if (isPercent && /(?:survey|poll|respondents?|hiring managers?)/i.test(local) && /said|reported|rated|consider/i.test(local)) label = 'Survey Response Share';
  else if (isPercent && /(?:qualified|cleared|passed|selection rate)/i.test(local)) label = 'Qualification Success Rate';
  else if (isPercent && /(?:passengers?|air traffic|traffic growth)/i.test(local) && /(?:up|growth|grew|increase)/i.test(local)) label = 'Annual Traffic Growth';
  else if (isPercent && /(?:postings?|hiring|employment|vacancies)/i.test(local) && /(?:down|declin|fell|drop|decreas)/i.test(local)) label = 'Hiring Demand Decline';
  else if (isPercent && /seats/i.test(local) && /(?:fills?|share|quota|allocated|allocation)/i.test(local)) label = 'Course Seat Share';
  else if (!hasCurrencyMarker && /(?:msme|enterprise|businesses registered)/i.test(local)) label = 'Registered Enterprise Count';
  else if (!isPercent && !hasCurrencyMarker && !isDuration && /(?:candidates?|applicants?|takers?|appeared|people applied|applied for|registered for (?:the )?(?:exam|examination|test))/i.test(directNounContext)) label = 'Exam Candidate Count';
  else if (hasMoney && /exports?/i.test(local)) label = 'Annual Export Value';
  else if (hasMoney && /(?:entry.level|reporters?|journalists?|newsrooms?)/i.test(nearbyBefore) && /(?:entry pay|pay|salary|month)/i.test(nearbyAfter + nearbyBefore)) label = 'Entry Level Newsroom Pay';
  else if (hasMoney && /civil services|upsc/i.test(evidenceLine) && /starts? near|starting/i.test(nearbyBefore) && /pay level/i.test(nearbyAfter)) label = 'Civil Services Starting Basic Pay';
  else if (hasMoney && /pay levels?\s+10\s*[-–]\s*17/i.test(local) && /rising to/i.test(nearbyBefore)) label = 'Civil Services Pay Ceiling';
  else if (hasMoney && /(?:advertising|groupm|dentsu)/i.test(local) && /(?:market|economy|industry|spend|estimate)/i.test(local)) label = 'Advertising Market Size';
  else if (hasMoney && /public relations|\bpr industry\b/i.test(local) && /projected/i.test(nearbyBefore)) { const year = evidenceLine.match(/\bby\s+(20\d{2})\b/i)?.[1]; label = year ? `Projected PR Industry Revenue by ${year}` : 'Projected PR Industry Revenue'; }
  else if (hasMoney && /public relations|\bpr industry\b/i.test(local) && /(?:revenue|crossed|reach(?:ed)?|grew|industry alone)/i.test(local)) label = 'PR Industry Revenue';
  else if (hasMoney && /(?:industry|market|sector|business|public relations|pr industry)/i.test(local) && /(?:projected to (?:touch|reach|hit|exceed)|forecast to (?:reach|hit|exceed))/i.test(nearbyBefore)) { const year = evidenceLine.match(/\bby\s+(20\d{2})\b/i)?.[1]; label = year ? `Projected Industry Revenue by ${year}` : 'Projected Industry Revenue'; }
  else if (hasMoney && /(?:industry|market|sector|business|public relations|pr industry)/i.test(local) && /(?:revenue|crossed|reached|industry alone|values? near|puts the industry at)/i.test(local)) label = 'Annual Industry Revenue';
  else if (hasMoney && /(?:deal|contract)\w*.{0,30}(?:worth|value)|(?:worth|value).{0,30}(?:deal|contract)/i.test(local)) label = 'Typical Deal Value';
  else if (hasMoney && /extra income|additional income/i.test(local)) label = 'Additional Annual Income';
  else if (hasMoney && /education loan/i.test(local)) label = 'Education Loan Principal';
  else if (hasMoney && /(?:national target|2030 goal|government.?s own goal)/i.test(local)) label = 'National 2030 Goal';
  else if (hasMoney && /(?:illustration,? not a real fee|education budget example|worked example|education budget|rupee budget)/i.test(local)) {
    if (/caution|warning|red flag/i.test(stageSuffix)) label = 'Budget Warning Threshold';
    else if (/\b(?:a fifth|one fifth|20\s*%|20 percent)\b/i.test(stagePrefix)) label = 'One-Fifth Budget Share';
    else if (/main course|degree fee|course fee|for the degree|for the credential/i.test(stageSuffix)) label = 'Main Course Fee Allocation';
    else if (/the rest|remaining|living costs|tools,? practice|future learning|reserve/i.test(stageSuffix)) label = 'Remaining Education Budget';
    else if (/budget/i.test(stageSuffix) || /budget/i.test(stagePrefix)) label = 'Education Budget Amount';
    else label = 'Education Budget Amount';
  }
  else if (hasMoney && /(?:illustration,? not a real fee|education budget example|worked example)/i.test(local) && /main course/i.test(nearbyAfter)) label = 'Main Course Fee Allocation';
  else if (hasMoney && /(?:illustration,? not a real fee|education budget example|worked example)/i.test(local) && /serious caution/i.test(nearbyAfter)) label = 'Caution Threshold';
  else if (hasMoney && /(?:illustration,? not a real fee|education budget example|worked example)/i.test(local)) label = 'Illustrative Education Budget';
  else if (hasMoney && /\blpa\b/i.test(match[0]) && /(?:entry[- ]level|fresher|starting|roles? start(?:s)? around|start(?:s)? around|begin(?:s)? at)/i.test(stageSuffix + (matchingIndex === 0 ? ` ${stagePrefix}` : ''))) label = 'Entry Level Pay';
  else if (hasMoney && /\blpa\b/i.test(match[0]) && /post[ -]?mba/i.test(local)) label = 'Post MBA Pay';
  else if (hasMoney && /\blpa\b/i.test(match[0])) label = 'Typical Salary Range';
  else if (hasMoney && /outlay/i.test(local) && /government|scheme|programme|program/i.test(local)) label = 'Programme Scheme Outlay';
  else if (hasMoney && /(?:budget|allocation|allocated)/i.test(local) && /education|course|tuition|family|student|college/i.test(local) && !/exam|registration|certification/i.test(local)) label = /(?:allocation|allocated)/i.test(local) ? 'Programme Scheme Outlay' : 'Education Budget Example';
  else if (hasMoney && /(?:billion|million|trillion)/i.test(value) && /(?:market|industry|sector|segment|bioeconomy|workforce|employ|revenue|worth|target|projected)/i.test(local)) label = /revenue/i.test(local) ? 'Annual Industry Revenue' : 'Total Market Size';
  else if (isPercent && /(?:entry-level|commerce jobs|share|allocation|allocated|budget)/i.test(local)) label = 'Allocated Budget Share';
  else if (isPercent && /(?:minimum|at least|marks|score|aggregate|eligib|qualif|how you enter|entry requirement)/i.test(local) && /(?:mark|score|aggregate|eligib|qualif|degree|class|exam|admission|how you enter|entry requirement)/i.test(local)) label = 'Minimum Exam Marks';
  else if (hasMoney && /family income/i.test(local)) label = 'Family Income Eligibility';
  else if (hasMoney && /(?:session|counselling|counseling|consultation)/i.test(`${raw} ${heading}`)) label = 'Counselling Session Fee';
  else if (/(?:per day|day rate)/i.test(local)) label = 'Freelance Day Rate';
  else if (/(?:stipend|internship)/i.test(local) && /(?:month|monthly)/i.test(local)) {
    if (/\b(?:jrf|srf|fellowship|phd scholar|doctoral scholar)\b/i.test(local)) label = 'Monthly Fellowship Stipend';
    else if (/articleship/i.test(local)) label = 'Monthly Articleship Stipend';
    else if (/internship/i.test(local)) label = 'Monthly Internship Stipend';
    else if (/training/i.test(local)) label = 'Monthly Training Stipend';
    else label = 'Monthly Stipend';
  }
  else if (/allowance/i.test(local)) label = /(?:month|monthly)/i.test(local) ? 'Monthly Pay Allowance' : 'Allowance Amount Reported';
  else if (/scholarship/i.test(local) || /scholarship/i.test(heading)) label = 'Scholarship Funding Support';
  else if (hasMoney && /per paper|same subject through/i.test(local)) label = 'Exam Paper Fee';
  else if (hasMoney && /(?:exam|examination|registration|certification|application)\s+(?:registration\s+)?fee|registration\s+fee|certification\s+fee|application\s+fee|per\s+paper/i.test(local)) label = 'Exam Registration Fee';
  else if (hasMoney && /(?:education|course|tuition|college|study)\s+(?:budget|cost|fee)|(?:budget|cost|fee)\s+(?:for|of)\s+(?:education|course|tuition|college|study)|tuition/i.test(local)) label = 'Total Education Cost';
  else if (hasMoney && /post[ -]?mba/i.test(local)) label = 'Post MBA Pay';
  else if (hasMoney && /(?:salary|pay|income|earn|remuneration|compensation)/i.test(local)) label = 'Typical Salary Range';
  else if (isPercent && /(?:demand[ -]supply gap|skills gap)/i.test(local)) label = 'Skills Demand Gap';
  else if (isPercent && /(?:attrition)/i.test(local)) label = 'Annual Staff Attrition';
  else if (isPercent && /(?:growth|increase|rise)/i.test(local)) label = 'Role Growth Rate';
  else if (isPercent && /(?:minimum|at least|marks|score)/i.test(local)) label = 'Minimum Exam Marks';
  else if (isPercent && /(?:entry.level|commerce jobs)/i.test(local)) label = 'Entry Level Share';
  else if (isPercent && /(?:budget|share|allocation|allocated)/i.test(local)) label = 'Allocated Budget Share';
  else if (isPercent && /(?:advance|deposit|upfront)/i.test(local)) label = 'Upfront Payment Advance';
  else if (hasMoney && /(?:test ad|ad campaign|advertising budget)/i.test(local)) label = 'Test Ad Budget';
  else if (hasMoney && /(?:salary|pay|income|earn|remuneration|compensation|package|wage)/i.test(local)) label = 'Typical Salary Range';
  else if (hasMoney && /(?:exam|examination|registration|certification|application)\s+(?:registration\s+)?fee|registration\s+fee|certification\s+fee|application\s+fee|per\s+paper/i.test(local)) label = 'Exam Registration Fee';
  else if (hasMoney && /(?:tuition|fee|cost|education budget|course budget|course fee)/i.test(local)) label = 'Total Education Cost';
  else if (!hasCurrencyMarker && !hasMoney && /vacanc/i.test(directNounContext)) label = 'Available Job Vacancies';
  else if (!hasCurrencyMarker && !hasMoney && /applicant/i.test(directNounContext)) label = 'Total Exam Applicants';
  else if (!hasCurrencyMarker && !hasMoney && /seat/i.test(directNounContext)) label = 'Available Course Seats';
  else if (!hasCurrencyMarker && !hasMoney && /student/i.test(directNounContext)) label = 'Total Student Count';
  else if (!hasCurrencyMarker && !hasMoney && /job/i.test(directNounContext)) label = 'Total Job Count';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:offshore cycle|cycle from|licen[cs]e to production)/i.test(local)) label = 'Typical Project Cycle';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /shift/i.test(local)) label = 'Typical Work Shift';
  else if (/(?:day|week|month|year)/i.test(match[0]) && /notice period|notice policy|notice requirement|shortfall|buyout/i.test(local)) label = 'Notice Period';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /service commitment|service term|enlistment|retained afterward|\bbonds?\b/i.test(local)) label = 'Service Commitment Period';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:\d+\s+years? of experience|experience of \d+\s+years?|work history of \d+\s+years?|\d+[-–—]\d+\s+years? of depth|carry \d+[-–—\d]+\s+years? of depth)/i.test(local)) label = 'Relevant Experience Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /pension/i.test(local) && /eligible service|qualify|qualifying/i.test(local)) label = 'Pension Eligibility Period';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:watch hours|shorts views|partner program|opt window)/i.test(local)) label = /watch hours|shorts views|partner program/i.test(local) ? 'Platform Eligibility Window' : 'Post Study Work';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:start earning|need to earn|earning within|income within)/i.test(local)) label = 'Earning Decision Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:from bootcamp finish to hire|finish to hire|time to hire)/i.test(local)) label = 'Hiring Transition Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:qualification path|qualification runway|through .*? exams|articleship|full route)/i.test(local)) label = 'Qualification Time Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:course|degree|program|programme|duration|diploma|qualification|training|bootcamp|articleship)/i.test(local)) label = 'Total Course Duration';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:pay gap|years?\s+mark|timeline|path takes|takes around)/i.test(local)) label = 'Estimated Time Required';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:within|deadline|by\s+\w+|publish|show)/i.test(local) && /proof|portfolio|project|publish|showcase/i.test(local)) label = 'Proof Milestone Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:duration|timeline|preparation|study|period|path|commitment)/i.test(local)) label = 'Estimated Time Required';
  if (isPercent) {
    const clientLabel = clientMixShareLabel(evidenceLine, matchInLine);
    const specificPercentageLabel = clientLabel || percentageContextLabel(`${nearbyBefore} ${nearbyAfter} ${local}`, value);
    if (specificPercentageLabel === '__OMIT__') return null;
    if (specificPercentageLabel) label = specificPercentageLabel;
    else if (/engineering graduates/i.test(local) && /left college without|no relevant job|no relevant internship/i.test(local)) label = 'Graduates Without Relevant Work';
    else if (/ca\s+final/i.test(local) && /pass|clear/i.test(local)) label = 'CA Final Pass Rate';
    else if (/upsc civil services/i.test(local) && /select/i.test(local)) label = 'UPSC Selection Rate';
    else if (/employers?\s+(?:reported|reporting)|difficulty finding skilled/i.test(local) && /workers?|talent|skilled/i.test(local)) label = 'Employers Reporting Hiring Difficulty';
    if (label === 'Reported Percentage') return null;
  }
  if (!hasCurrencyMarker && /candidates?\s+(?:tested|assessed|surveyed)/i.test(local)) label = 'Candidates Assessed';
  if (!label) return null;
  const source = evidenceLine.replace(/\bRs\.?\s*/gi, '₹');
  label = threeWordFigureLabel(label, source, value);
  if (!label) return null;
  return { value, label, source, text: source };
}
function figuresFromItem(item) {
  const raw = clean(item?.raw || item?.text || '');
  const output = [];
  const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
  for (const part of sentenceParts(raw)) {
    const pattern = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)\s*${number}(?:\s*(?:[–—-]|\bto\b)\s*${number})?(?:\s*\+)?(?:\s*(?:lakh|crore|lpa|l|k|billion|million))?|${number}\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|employees?|jobs?|applicants?|seats?)`, 'gi');
    const matches = [...part.matchAll(pattern)];
    for (let index = 0; index < matches.length; index += 1) {
      const figure = figureFromItem({ ...item, raw: part, text: part }, index);
      if (figure) output.push(figure);
    }
    if (/employees?|headcount/i.test(part)) {
      const numberToken = String.raw`\d+(?:,\d{3})*(?:\.\d+)?`;
      const reductions = new RegExp(String.raw`\b(?:reduction|down|declin\w*|fell|drop\w*)\b(?:\s+of)?(?:\s+(?:around|roughly|about|nearly))?\s+(${numberToken})\b`, 'gi');
      for (const match of part.matchAll(reductions)) {
        const entity = part.slice(0, match.index).match(/\b(TCS|Infosys|Wipro|HCLTech|Accenture|Cognizant|Capgemini|Tech Mahindra)\b/gi)?.at(-1) || 'Staff';
        output.push({ value: match[1], label: `${entity} Staff Change`, source: part, text: part });
      }
    }
  }
  const seen = new Set();
  return output.filter((figure) => {
    const key = `${figure.value.toLowerCase()}|${figure.label.toLowerCase()}|${figure.source.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function topicIconLegacy(topic, palette, x, y, scale) { const value = topic.toLowerCase(); const stroke = palette[2]; const frame = (svg) => `<g transform="translate(${x} ${y}) scale(${scale})">${svg}</g>`; if (/medicine|medical|health|doctor|nursing|clinical|pharmacy/.test(value)) return frame(`<path d="M300 90c-35 0-55 24-55 55v75h-75v55h75v75c0 35 20 55 55 55s55-20 55-55v-75h75v-55h-75v-75c0-31-20-55-55-55z" fill="none" stroke="${stroke}" stroke-width="18"/><circle cx="300" cy="245" r="170" fill="none" stroke="${palette[3]}" stroke-width="13"/>`); if (/law|legal|advocate|court/.test(value)) return frame(`<path d="M300 80v340M160 140h280M200 140l-80 170h160l-80-170zm200 0-80 170h160l-80-170zM150 470h300" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round"/>`); if (/literature|writing|journalism|language|english|humanities|publishing|education|teaching/.test(value)) return frame(`<path d="M90 120c90-30 155-14 210 28v310c-55-42-120-58-210-28V120zm420 0c-90-30-155-14-210 28v310c55-42 120-58 210-28V120z" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><path d="M145 195h95m-95 65h95m220-65h-95m95 65h-95" stroke="${palette[3]}" stroke-width="14" stroke-linecap="round"/>`); if (/abroad|overseas|foreign|study/.test(value)) return frame(`<path d="M120 310l360-155-155 360-65-140-140-65z" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M245 365l-115 115m205-150 115-115" stroke="${palette[3]}" stroke-width="16" stroke-linecap="round"/>`); if (/bank|finance|insurance|account|commerce|economics|investment/.test(value)) return frame(`<path d="M100 170l200-110 200 110M140 195h320M170 225v190m85-190v190m90-190v190m85-190v190M100 465h400" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round"/>`); if (/\bit\b|software|data|ai|technology|coding|developer|computer|engineering/.test(value)) return frame(`<path d="M185 135L60 250l125 115M415 135L540 250 415 365M350 105L250 395" fill="none" stroke="${stroke}" stroke-width="22" stroke-linecap="round"/>`); return frame(`<circle cx="300" cy="250" r="170" fill="none" stroke="${stroke}" stroke-width="16"/><path d="M300 80v340M130 250h340M185 135l230 230M415 135L185 365" stroke="${palette[3]}" stroke-width="14"/>`); }
function topicIcon(topic, palette, x, y, scale) {
  const value = topic.toLowerCase();
  const stroke = palette[2];
  const frame = (svg) => `<g transform="translate(${x} ${y}) scale(${scale})">${svg}</g>`;
  if (/\bca aspirants?\b|chartered accountant/.test(value)) return frame(`<path d="M115 125h260q45 0 45 45v285H160q-45 0-45-45V125zm90 0v330m-45-255h210m-210 70h210m-210 70h130" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><rect x="330" y="300" width="155" height="155" rx="20" fill="#fffaf0" stroke="${palette[3]}" stroke-width="16"/><circle cx="370" cy="345" r="10" fill="${palette[4]}"/><circle cx="445" cy="345" r="10" fill="${palette[4]}"/><circle cx="370" cy="405" r="10" fill="${palette[4]}"/><circle cx="445" cy="405" r="10" fill="${palette[4]}"/>`);
  if (/\bbca\b/.test(value)) return topicIconLegacy('computer programming', palette, x, y, scale);
  if (/\bmba\b|business|management|entrepreneur|marketing|startup/.test(value)) return frame(`<rect x="115" y="185" width="370" height="260" rx="24" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M220 185v-55q0-35 35-35h90q35 0 35 35v55M115 270h370M230 330h140m-115-32v64m90-64v64" fill="none" stroke="${palette[3]}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><circle cx="185" cy="380" r="18" fill="${palette[4]}"/><circle cx="300" cy="380" r="18" fill="${palette[3]}"/><circle cx="415" cy="380" r="18" fill="${palette[2]}"/>`);  if (/event|conference|festival|wedding|exhibition/.test(value)) return frame(`<rect x="115" y="105" width="370" height="330" rx="24" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M115 190h370M180 70v75m240-75v75M180 255h85m45 0h85M180 325h85m45 0h85" fill="none" stroke="${palette[3]}" stroke-width="18" stroke-linecap="round"/><circle cx="405" cy="290" r="45" fill="${palette[4]}"/>`);
  if (/aviation|airline|aircraft|cabin crew|pilot|airport|flight/.test(value)) return frame(`<path d="M88 285l180-46 67-161c12-29 57-23 54 12l-15 132 103 54c35 18 23 62-16 55l-118-25-87 143c-18 29-60 13-47-22l42-143-147 33c-36 8-49-23-16-32z" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/>`);
  if (/agriculture|farming|horticulture|forestry|environment|ecology/.test(value)) return frame(`<path d="M300 435V165m0 128c-100 0-155-56-155-150 95 0 155 55 155 150zm0-70c0-93 58-150 155-150 0 95-57 150-155 150zm-8 172H175m125 0h125" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><path d="M300 250l-82-77m82 28 84-77" stroke="${palette[3]}" stroke-width="14"/>`);
  if (/science|chemistry|biology|laboratory|lab research|research science/.test(value)) return frame(`<path d="M230 90h140M265 90v150L145 425q-15 28 20 28h270q35 0 20-28L335 240V90M205 350h190" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><circle cx="270" cy="390" r="16" fill="${palette[3]}"/><circle cx="345" cy="390" r="16" fill="${palette[4]}"/>`);
  if (/hospitality|hotel|tourism|travel|culinary|chef|restaurant/.test(value)) return frame(`<path d="M105 440V190l195-100 195 100v250M160 230h70v72h-70zm210 0h70v72h-70zM265 440V315h70v125M90 440h420" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><path d="M250 165h100" stroke="${palette[3]}" stroke-width="16" stroke-linecap="round"/>`);
  if (/career (?:counsel|guidance|coach|decisions?)|counselling/.test(value)) return frame(`<circle cx="300" cy="125" r="44" fill="none" stroke="${palette[4]}" stroke-width="17"/><path d="M300 169v68m0 0-150 105m150-105 150 105" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round"/><rect x="82" y="342" width="150" height="115" rx="16" fill="#fffaf0" stroke="${palette[3]}" stroke-width="15"/><rect x="368" y="342" width="150" height="115" rx="16" fill="#fffaf0" stroke="${palette[2]}" stroke-width="15"/><path d="M112 382h90m-90 35h64m132-35h90m-90 35h64" stroke="${palette[1]}" stroke-width="13" stroke-linecap="round"/>`);
  if (/psychology|counsel|social work|therapy|mental health|human resources|hr career/.test(value)) return frame(`<path d="M160 405V275q0-55 55-55h45v-70q0-60 60-60h90q60 0 60 60v30" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round"/><circle cx="160" cy="430" r="32" fill="${palette[3]}"/><circle cx="415" cy="150" r="32" fill="${palette[4]}"/><rect x="285" y="250" width="205" height="170" rx="18" fill="#fffaf0" stroke="${palette[2]}" stroke-width="16"/><path d="M325 305h125m-125 52h90" stroke="${palette[1]}" stroke-width="14" stroke-linecap="round"/>`);
  if (/design|animation|illustration|fashion|creative|media|photography|visual arts|graphic/.test(value)) return frame(`<path d="M145 390l245-245 75 75-245 245-90 25zM365 170l75 75M175 360l75 75" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><circle cx="190" cy="160" r="42" fill="none" stroke="${palette[3]}" stroke-width="16"/><path d="M330 105l16-35m75 90 35-16" stroke="${palette[4]}" stroke-width="15" stroke-linecap="round"/>`);
  if (/sport|fitness|athlete|physical education/.test(value)) return frame(`<circle cx="300" cy="260" r="190" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M245 80l-45 110 100 70 100-70-45-110M200 190L110 300l105 120m185-230 90 110-105 120m-190-120h190l70 120H225z" fill="none" stroke="${palette[3]}" stroke-width="16" stroke-linejoin="round"/>`);
  if (/^(?:medicine|medical|health|doctor|nursing|clinical|pharmacy|law|legal|advocate|court|literature|writing|journalism|language|english|humanities|publishing|education|teaching|abroad|overseas|foreign|study|bank|finance|insurance|account|commerce|economics|investment|it|software|data|ai|technology|coding|developer|computer|engineering)\b/.test(value)) return topicIconLegacy(topic, palette, x, y, scale);
  return frame(`<rect x="120" y="130" width="260" height="320" rx="18" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M180 210h140m-140 65h100m-100 65h75M400 355l48 48 80-100" fill="none" stroke="${palette[3]}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><circle cx="450" cy="235" r="36" fill="${palette[4]}"/>`);
}
function normalizeHeroAnswer(text) { return clean(text).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim(); }
function heroAnswerFromFacts(facts, topic, usedAnswers = new Set(), reservedPhrases = new Set()) {
  const topicLead = words(topic).slice(0, Math.min(4, words(topic).length)).join(' ').toLowerCase();
  const candidates = facts.flatMap((item) => sentenceParts(clean(item.raw || item.text))
    .filter((part) => /[.!]$/.test(part) && words(part).length >= 5 && words(part).length <= 14 && !badEnd.has(lastWord(part)) && !isSharedPromoCopy(part))
    .map((text) => ({ item, text: text.replace(/["“”]/g, '').trim() })))
    .filter(({ text }) => words(text).slice(0, Math.min(4, words(text).length)).join(' ').toLowerCase() !== topicLead)
    .filter(({ text }) => !phraseKeys(text).some((key) => reservedPhrases.has(key)));
  return candidates.find(({ text }) => !usedAnswers.has(normalizeHeroAnswer(text))) || { item: null, text: '' };
}
function heroRouteLabels(sections, topic, answer, supporting, route = '') {
  const override = heroRouteLabelOverrides.get(route);
  if (override) return override;
  if (/^\/services\/career-counselling-and-career-guidance\/locations\/career-counselling-in-[^/]+\/$/.test(route)) return ['Local Study Options', 'Course Costs', 'Hiring Evidence'];
  // Article section headings are not dependable pathway steps. Turning them
  // into two-word labels produced false sequences such as “Week Route / At
  // Not / Paying Money”. Keep only the route labels explicitly curated above.
  return [];
  const seen = new Set();
  const labels = [];
  const topicWords = new Set(words(topic).map((word) => word.toLowerCase()));
  const stopWords = new Set(['a','an','the','and','or','of','to','for','from','in','on','by','with','if','you','your','who','what','where','when','which','why','how','actually','genuinely','really','right','now','here','there','this','that','it','is','are','was','were','be','been','being','do','does','did','can','could','will','would','should','may','might','looks','look','like','works','work','means','mean','before','after','into','about','side','offer','offers','colleges','version','real','short','answer','route','path','career','guide','guidance','choices','choice','options','option','india','best','good','more','less','much','same','different','through','actually','meaning']);
  const singleWordLabel = new Map([['btech','BTech Route'],['eligibility','Entry Rules'],['recognition','Recognition Check'],['demand','Demand Signal'],['salary','Pay Range'],['fees','Cost Check'],['risk','Risk Check'],['admission','Entry Rules'],['duration','Time Required'],['proof','Proof to Build'],['questions','Questions to Ask']]);
  for (const section of sections) {
    const source = clean(section.title || '');
    if (!source || isGenericVisualHeading(source) || headingsSharePhrase(source, topic)) continue;
    const seed = source.split(/[,:;]/, 1)[0].replace(/^(?:if you actually meant|if you meant|what happens when|how to|how|what|where|when|which|who|why|use|pass|check)\s+/i, '').trim();
    const candidates = words(seed).map((word) => word.toLowerCase()).filter((word) => !topicWords.has(word) && !stopWords.has(word));
    if (!candidates.length) continue;
    let label;
    if (candidates.length === 1) label = singleWordLabel.get(candidates[0]) || `${titleCase(candidates[0])} Route`;
    else label = titleCase(candidates.slice(0, 2).join(' '));
    if (/\band\b/i.test(seed) && candidates.length >= 2 && /regular|executive|full.time|part.time/i.test(seed)) label = `${titleCase(candidates[0])} vs ${titleCase(candidates[1])}`;
    const weakLabel = /(?:^vs\b|\bvs$|^versus\b|\bversus$|\balready\b|\bgeneric\b|\bactually\b|\breally\b)|[&/]\s*$|^\d+(?:[-–]\d+)?\s*(?:hour|hours|day|days|week|weeks|month|months|year|years)\b/i.test(label);
    if (visualWordCount(label) > 3 || weakLabel || isGenericVisualHeading(label) || headingsSharePhrase(label, answer) || supporting.some((item) => headingsSharePhrase(label, item.text))) continue;
    const key = label.toLowerCase().replace(/[^a-z0-9]+/gi, ' ').trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    labels.push(label);
    if (labels.length === 3) break;
  }
  return labels;
}
function headingsSharePhrase(left, right) { const a = String(left || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; const b = String(right || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; if (a.join(' ') === b.join(' ')) return true; if (Math.min(a.length, b.length) < 4) return false; const set = new Set(); for (let i = 0; i <= a.length - 4; i += 1) set.add(a.slice(i, i + 4).join(' ')); for (let i = 0; i <= b.length - 4; i += 1) if (set.has(b.slice(i, i + 4).join(' '))) return true; return false; }
function uniqueVisualHeading(candidate, item, topic, type, manifest, usedPhrases = new Set()) { const candidateHeading = type === "matrix" ? shortHeading(candidate, compactTopic(topic)) : ""; if (candidateHeading && !manifest.some((visual) => headingsSharePhrase(candidateHeading, visual.heading)) && !phraseKeys(candidateHeading).some((key) => usedPhrases.has(key))) return candidateHeading; const previous = manifest.map((visual) => visual.heading).filter(Boolean); const source = clean(item?.text || item?.raw || ''); const priorContent = manifest.map((visual) => [visual.heading, visual.alt, ...(visual.content?.answer ? [visual.content.answer] : []), ...(visual.content?.items || []).flatMap((entry) => [entry.heading, entry.text]), ...(visual.content?.columns || []), ...(visual.content?.rows || []).flat(), ...(visual.content?.figures || []).flatMap((figure) => [figure.value, figure.label, figure.source]), ...(visual.content?.steps || []), ...(visual.content?.steps || [])].join(' ')); const repeatsFiveWords = (value) => { const keys = phraseKeys(value); return priorContent.some((text) => keys.some((key) => phraseKeys(text).includes(key))); }; const incomplete = (value) => /[,;:]\s*$/.test(value) || (badEnd.has(lastWord(value)) && !/\bIT[\s"'”’)!?]*$/u.test(value)) || /\b(?:can|could|may|might|will|would|should)\s+\w+ly$/i.test(value); const isUsable = (value) => value && !incomplete(value) && !isGenericVisualHeading(value) && !previous.some((heading) => headingsSharePhrase(value, heading)) && !repeatsFiveWords(value); if (isUsable(candidate)) { const bounded = shortHeading(candidate, compactTopic(topic)); if (!previous.some((heading) => headingsSharePhrase(bounded, heading))) return bounded; } const alternatives = [quotedLead(source), groundedHeading(source), item?.heading, sentence(source, 8), phrase(source, 7), words(source).slice(0, 5).join(' ')]; for (const value of alternatives) { const option = shortHeading(value, compactTopic(topic)); if (isUsable(option)) return option; } const sourceWords = words(source); for (let length = 4; length >= 3; length -= 1) for (let start = 0; start <= sourceWords.length - length; start += 1) { const option = titleCase(sourceWords.slice(start, start + length).map((word) => word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')).join(' ')); if (!incomplete(option) && !badStart.has(words(option)[0]?.toLowerCase()) && !badEnd.has(lastWord(option)) && !/\b(?:and|or|to|for|with)\s+(?:a|an|the)\b/i.test(option) && !isGenericVisualHeading(option) && !previous.some((heading) => headingsSharePhrase(option, heading))) return option; } const fallback = ({ summary: 'What Matters Before Choosing', matrix: 'Compare the Practical Paths', chain: 'A Sequence to Try', checklist: 'Questions to Check First', proof: 'Numbers in Context', detail: 'What the Evidence Shows' })[type] || 'A Clear Next Step'; return !repeatsFiveWords(fallback) && !previous.some((heading) => headingsSharePhrase(fallback, heading)) ? fallback : `${titleCase(type)} Evidence`; }
function baseSvg(body, palette, topLabel, heading, size, isHero = false, route = '') {
  const { width, height } = size;
  const margin = 72;
  const heroHeading = isHero ? heroTopic(heading, route) : heading;
  const headingLines = wrap(titleCase(heroHeading), isHero ? 22 : 15);
  const headingSize = isHero ? (width === PHONE.width ? 52 : 58) : (width === PHONE.width ? 56 : 62);
  const lineHeight = headingSize * 1.08;
  const labelY = width === PHONE.width ? 96 : 101;
  const lineY = width === PHONE.width ? 116 : 123;
  const headingY = width === PHONE.width ? 166 : 182;
  const labelSize = width === PHONE.width ? 38 : 38;
  const headingSvg = headingLines.map((line, i) => `<text x="${margin}" y="${headingY + i * lineHeight}" font-family="Georgia,Times New Roman,serif" font-size="${headingSize}" font-weight="700" fill="${palette[1]}">${esc(line)}</text>`).join('');
  const bodyShift = isHero ? 0 : Math.max(0, (headingLines.length - 2) * 58);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${palette[0]}"/><path d="M0 ${lineY}H${width}" stroke="${palette[4]}" stroke-width="7"/><text x="${margin}" y="${labelY}" font-family="Arial,Helvetica,sans-serif" font-size="${labelSize}" font-weight="700" letter-spacing="1" fill="${palette[1]}">${esc(titleCase(topLabel))}</text>${headingSvg}<g transform="translate(0 ${bodyShift})">${body}</g></svg>`;
}
function cardVisual(items, palette, type, heading, size) { const { width, height } = size; const accent = [palette[2], palette[3], palette[4]]; const bodyTop = 285; const gap = 24; const columns = 1; const cardW = width - 144; const font = width === PHONE.width ? 44 : 48; const maxChars = 34; const headingLines = wrap(titleCase(heading), 15); const bodyShift = Math.max(0, (headingLines.length - 2) * 58); const cardHeight = Math.floor((height - bodyTop - bodyShift - 80 - gap * (Math.min(items.length, 4) - 1)) / Math.min(items.length, 4)); let body = ''; items.slice(0, 4).forEach((item, index) => { const x = 72; const y = bodyTop + index * (cardHeight + gap); body += `<rect x="${x}" y="${y}" width="${cardW}" height="${cardHeight}" rx="22" fill="#fffaf0" stroke="${accent[index % accent.length]}" stroke-width="5"/>`; body += `<circle cx="${x + 48}" cy="${y + 50}" r="30" fill="${accent[index % accent.length]}"/><text x="${x + 48}" y="${y + 61}" text-anchor="middle" font-family="Arial" font-size="38" font-weight="700" fill="#fffaf0">${String(index + 1).padStart(2, '0')}</text>`; const lines = wrap(item.text, maxChars); const textY = y + cardHeight / 2 - ((lines.length - 1) * font * 1.16) / 2; body += textLines(item.text, x + 28, textY, font, maxChars, palette[1], 6, 600); }); return baseSvg(body, palette, typeTopLabel(type), heading, size); }
function tableColumns(content, limit = 3) { const values = (content.match(/^Columns:\s*([^|]+(?:\|[^|]+)*)\s*\|\|/i)?.[1] || '').split('|').map((value) => clean(value)).filter(Boolean); return Number.isFinite(limit) ? values.slice(0, limit) : values; }
function fullTableRows(content, limit = 3) { const columns = tableColumns(content, limit); const part = content.split(/\|\|\s*Rows:\s*/i)[1] || ''; return part.split(/\s*##\s*/).map((raw) => { const normalized = raw.replace(/\(([^()]*)\)/g, (_, inner) => `(${inner.replace(/\s+\/\s+/g, ' or ')})`).replace(/\b(BMLT|B\.MLS?|BSc|BTech|MSc|MTech|MBA|BBA|BCA|BCom|LLB|BA|PhD)\s+\/\s+(?=(?:BMLT|B\.MLS?|BSc|BTech|MSc|MTech|MBA|BBA|BCA|BCom|LLB|BA|PhD)\b)/gi, '$1 or ').replace(/(\b\d[\d,.]*\s*)\/\s*(?=\d[\d,.]*\s*=)/g, '$1÷ '); const cells = normalized.split(/\s+\/\s+/).map((value) => clean(value).replace(/[:;,]+\s*$/, '').trim()); if (!columns.length) return cells.filter(Boolean); const expected = columns.length; while (cells.length > expected) cells[0] = `${cells[0]} / ${cells.splice(1, 1)[0]}`; const aligned = [...cells]; while (aligned.length < expected) aligned.push(''); return aligned.slice(0, expected); }).filter((row) => row.some(Boolean)); }
function tableRows(content, rowLimit = 2) { const columns = tableColumns(content); const rows = fullTableRows(content).map((row) => row.map((cell) => shortCell(cell))).slice(0, rowLimit); return { columns, rows }; }
function compactTableHeader(value, index) {
  let source = clean(value).replace(/\s*\([^)]*\)/g, '').replace(/[,:;]+$/, '');
  source = source.replace(/^(?:the\s+|a\s+(?=\S+\s+\S+)|an\s+(?=\S+\s+\S+))/i, '').trim();
  const key = source.toLowerCase().replace(/\s+/g, ' ').trim();
  if (/^basic plus 60% da,? per month$/i.test(source)) return 'Monthly Basic + DA';
  if (/^job can be enough for\b/i.test(source)) return 'Job Route';
  if (/^small ladder\b/i.test(source)) return 'Career Ladder';
  if (/^typical week\b/i.test(source)) return 'Typical Week';
  if (/^good answer\b/i.test(source)) return 'Good Answer';
  if (/^small output\b/i.test(source)) return 'Small Output';
  if (/^five-question check\b/i.test(source)) return 'Decision Check';
  if (/^small trial\b/i.test(source)) return 'Small Trial';
  if (/^by end of\b/i.test(source)) return 'Deadline';
  if (/^in plain words\b/i.test(source)) return 'Plain-Language Takeaway';
  if (/^with\s+\d/i.test(source)) return 'After Experience';
  if (/^at most,? share of\b/i.test(source)) return 'Share at Median+';
  if (/^leans to$/i.test(source)) return 'Likely Fit';
  if (/^instead of$/i.test(source)) return 'Alternative';
  if (/^look for$/i.test(source)) return 'Check';
  if (/^compare with$/i.test(source)) return 'Comparison';
  if (/^test by$/i.test(source)) return 'Test Source';
  if (/^issued by$/i.test(source)) return 'Issuer';
  if (/^leads to$/i.test(source)) return 'Outcome';
  if (/^door in$/i.test(source)) return 'Where to Start';
  if (/^share of$/i.test(source)) return 'Share';
  if (/^median of$/i.test(source)) return 'Median';
  if (/^skills to$/i.test(source)) return 'Skills';
  if (/^ways to$/i.test(source)) return 'Methods';
  if (/^track and$/i.test(source)) return 'Career Track';
  if (/^seats and$/i.test(source)) return 'Available Seats';
  if (/^risk\s*\/\s*reality$/i.test(source)) return 'Risk';
  if (/^entry\s+(?:entry\s+)?(?:gate|requirement)$/i.test(source)) return 'Entry Requirement';
  if (/^entry\s*[-–—]\s*$/i.test(source)) return 'Entry';
  if (source.includes('/')) return titleCase(source.split('/')[0].trim());
  if (/[-–—]\s*$/.test(source)) return titleCase(source.replace(/\s*[-–—]\s*$/, '').trim());
  const fixed = new Map([
    ['type of', 'Candidate'], ['type of entrant', 'Candidate'], ['type of graduate', 'Candidate'], ['type of trainee', 'Candidate'],
    ['what you', 'Main Task'], ['what to', 'Next Step'], ['how we', 'Our View'], ['what it', 'Main Work'], ['what a', 'Requirement'],
    ['what the', 'Key Detail'], ['what this', 'Cost Details'], ['who can', 'Who Qualifies'], ['where to', 'Where to Check'],
    ['proof to', 'Proof to Keep'], ['proof or', 'Evidence'], ['why the', 'Why It Matters'], ['what usually', 'Usual Route'],
    ['typical annual', 'Annual Cost'], ['typical entry-level', 'Starting Pay'], ['realistic salary', 'Salary Range'],
    ['duration &', 'Duration'], ['how this', 'How It Works'], ['how to', 'Next Step'],
    ['what it actually involves', 'Main Work'], ['what it involves', 'Main Work'], ['what it opens', 'Opportunities'],
    ['what it closes', 'Limits'], ['what the goal needs', 'Skill Needed'], ['skill the goal needs', 'Skill Needed'],
    ['evidence you will collect', 'Proof to Keep'], ['what you will collect', 'Proof to Keep'], ['what you need to show', 'Proof to Show'],
    ['what it changes', 'Outcome'], ['why it matters', 'Why It Matters'], ['why it works', 'Why It Works'],
    ['what it costs', 'Cost'], ['what it means', 'Meaning'], ['what it takes', 'Requirements'], ['what to do', 'Next Step'],
    ['how far', 'Limits'], ['how it works', 'Process'], ['the real fit', 'Best Fit'], ['what actually differs', 'Main Difference'],
    ['best for', 'Best Fit'], ['good for', 'Best Fit'], ['watch for', 'Risks'], ['useful for', 'Useful When'],
    ['source and', 'Source'], ['exam or', 'Exam'], ['entrance and', 'Entrance Exams'], ['can it', 'Does It Work'],
    ['mba in', 'MBA Route'], ['without a', 'Without Maths'], ['does a', 'Degree Needed'], ['mix of', 'Typical Mix'],
    ['question to', 'Question'], ['way of', 'Approach'], ['fits you', 'Best Fit'], ['three or', 'Program Length'],
    ['gap to', 'Skill Gap'], ['fix to', 'Next Step'], ['who is', 'Eligibility'], ['post and', 'Post Details'],
    ['institute and', 'Institute'], ['starting a', 'Starting Point'], ['limit to', 'Main Limit'],
    ['situation at', 'Situation'], ['roles it', 'Role Fit'], ['route and', 'Route Details'],
  ]);
  if (fixed.has(key)) return fixed.get(key);
  if (source.toLowerCase().startsWith('option a')) return 'Option A'; if (source.toLowerCase().startsWith('option b')) return 'Option B'; if (/^type of\b/i.test(source)) return 'Candidate';
  if (/^source and\b/i.test(source)) return 'Source';
  if (/^exam or\b/i.test(source)) return 'Exam';
  if (/^can it\b/i.test(source)) return 'Does It Work';
  if (/^mba in\b/i.test(source)) return 'MBA Route';
  if (/^entrance and\b/i.test(source)) return 'Entrance Exams';
  if (/^without a\b/i.test(source)) return 'Without Maths';
  if (/^does a\b/i.test(source)) return 'Degree Needed';
  if (/^mix of\b/i.test(source)) return 'Typical Mix';
  if (/^question to\b/i.test(source)) return 'Question';
  if (/^way of\b/i.test(source)) return 'Approach';
  if (/^fits you\b/i.test(source)) return 'Best Fit';
  if (/^three or\b/i.test(source)) return 'Program Length';
  if (/^gap to\b/i.test(source)) return 'Skill Gap';
  if (/^fix to\b/i.test(source)) return 'Next Step';
  if (/^who is\b/i.test(source)) return 'Eligibility';
  if (/^post and\b/i.test(source)) return 'Post Details';
  if (/^institute and\b/i.test(source)) return 'Institute';
  if (/^starting a\b/i.test(source)) return 'Starting Point';
  if (/^limit to\b/i.test(source)) return 'Main Limit';
  if (/^situation at\b/i.test(source)) return 'Situation';
  if (/^roles it\b/i.test(source)) return 'Role Fit';
  if (/^route and\b/i.test(source)) return 'Route Details';
  if (/^domain to\b/i.test(source)) return 'Next Domain';
  if (/^advice you\b/i.test(source)) return 'Advice Heard';
  if (/^question it\b/i.test(source)) return 'Question';
  if (/^if you\b/i.test(source)) return 'Goal';
  if (/^example in\b/i.test(source)) return 'Example';
  if (/^record to\b/i.test(source)) return 'Record';
  if (/^roles to\b/i.test(source)) return 'Target Roles';
  if (/^claim you\b/i.test(source)) return 'Claim';
  if (/^rules to\b/i.test(source)) return 'Rules';
  if (/^area of\b/i.test(source)) return 'Job Area';
  if (/^who it\b/i.test(source)) return 'Audience';
  if (/^duration and\b/i.test(source)) return 'Duration';
  if (/^document or\b/i.test(source)) return 'Document Check';
  if (/^time and\b/i.test(source)) return 'Time and Pay';
  if (/^time to\b/i.test(source)) return 'Time to Qualify';
  if (/^start with\b/i.test(source)) return 'Starting Point';
  if (/^offer in\b/i.test(source)) return 'Offer Level';
  if (/^stance on\b/i.test(source)) return 'View on Freshers';
  if (/^routes to\b/i.test(source)) return 'Route Options';
  if (/^pros and\b/i.test(source)) return 'Pros and Risks';
  if (/^when it\b/i.test(source)) return 'Best When';
  if (/^degree and\b/i.test(source)) return 'Degree Rule';
  if (/^resume or\b/i.test(source)) return 'Channel';
  if (/^course or\b/i.test(source)) return 'Course Option';
  if (/^helps with\b/i.test(source)) return 'Use';
  if (/^practice in\b/i.test(source)) return 'Course Practice';
  if (/^tool or\b/i.test(source)) return 'Tool';
  if (/^ms in\b/i.test(source)) return 'MSCS';
  if (/lateral\s+entry\s+mba/i.test(source)) return 'Lateral MBA';
  if (/regular\s+2[- ]year\s+mba/i.test(source)) return 'Regular MBA';
  if (/^entry\s+route$/i.test(source)) return 'Typical First Step';
  if (/^market\s+signal$/i.test(source)) return 'What Employers Value';
  if (words(source).length <= 2) return titleCase(source);
  if (/\b(?:why|reason|rationale)\b/i.test(source)) return 'Why It Matters';
  if (/\b(?:work|involv|role|task|responsib)\b/i.test(source)) return 'Main Work';
  if (/\b(?:skill|ability|strength)\b/i.test(source)) return 'Skill Needed';
  if (/\b(?:evidence|proof|sample)\b/i.test(source)) return 'Proof to Keep';
  if (/\b(?:cost|fee|budget|price)\b/i.test(source)) return 'Cost';
  if (/\b(?:pay|salary|range|income)\b/i.test(source)) return 'Typical Salary Range';
  if (/\b(?:step|action|next|do)\b/i.test(source)) return 'Next Step';
  if (/\b(?:how|process|method|approach)\b/i.test(source)) return 'Approach';
  if (/\bwhat\b/i.test(source)) return 'Key Detail';
  if (/\bwhere\b/i.test(source)) return 'Where It Fits';
  const lead = words(source).slice(0, 2).join(' ');
  const unfinished = new Map([
    ['track and', 'Career Track'], ['seats and', 'Available Seats'], ['share of', 'Share'], ['median of', 'Median'],
    ['skills to', 'Skills'], ['ways to', 'Methods'], ['instead of', 'Alternative'], ['closed or', 'Access Status'],
    ['leads to', 'Outcome'], ['part of', 'Category'], ['leans to', 'Recommendation'], ['physics plus', 'Physics'],
    ['growth and', 'Growth'], ['vacant on', 'Open Roles'], ['test or', 'Assessment'], ['body or', 'Credential'],
    ['rule for', 'Rule'], ['fork and', 'Career Track'], ['result to', 'Outcome'], ['job from', 'Role'],
    ['entry and', 'Where to Start'], ['test by', 'Assessment'], ['quadrant and', 'Quadrant'], ['issued by', 'Issuer'],
    ['money and', 'Cost'], ['pressure from', 'Pressure'], ['example of', 'Example'], ['dates and', 'Dates'],
    ['package for', 'Pay Package'], ['column to', 'Comparison'], ['focus on', 'Focus'], ['years to', 'Time Horizon'],
    ['pcm or', 'Stream'], ['rule and', 'Rule'], ['link to', 'Next Step'], ['level and', 'Level'],
    ['compare with', 'Comparison'], ['stayed in', 'Status'], ['stage and', 'Stage'], ['left for', 'Remaining Path'],
    ['branches with', 'Branches'], ['ai or', 'AI'], ['good to', 'Career Fit'],
  ]);
  const leadWords = words(lead);
  const completeLead = badEnd.has(lastWord(lead)) ? leadWords.slice(0, -1).join(' ') : lead;
  return unfinished.get(lead.toLowerCase()) || titleCase(completeLead) || `Option ${index + 1}`;
}
function tableVisual(table, palette, heading, size) { const { width, height } = size; const { columns, rows } = table; const cols = Math.min(3, Math.max(2, columns.length)); const left = 72; const total = width - 144; const colW = total / cols; const headerSize = width === PHONE.width ? 42 : 46; const cellSize = width === PHONE.width ? 40 : 42; const cellChars = Math.max(8, Math.floor(colW / (cellSize * 0.56)) - 1); const headingLines = wrap(titleCase(heading), 15); const bodyShift = Math.max(0, (headingLines.length - 2) * 58); const rowGap = 20; const rowStart = 415 + bodyShift; const rowH = Math.max(180, Math.floor((height - 72 - rowStart - rowGap * Math.max(0, rows.length - 1)) / Math.max(1, rows.length))); let y = 285; let body = `<rect x="${left}" y="${y}" width="${total}" height="110" rx="18" fill="${palette[1]}"/>`; for (let i = 0; i < cols; i += 1) { const lines = wrap(columns[i] || `Option ${i + 1}`, cellChars); const headerY = y + 55 - ((lines.length - 1) * headerSize * 1.16) / 2 + headerSize * 0.36; body += textLines(columns[i] || `Option ${i + 1}`, left + i * colW + 14, headerY, headerSize, cellChars, '#fffaf0', 2, 700); } y += 130; rows.forEach((row, rowIndex) => { body += `<rect x="${left}" y="${y}" width="${total}" height="${rowH}" rx="14" fill="#fffaf0" stroke="${[palette[2], palette[3], palette[4]][rowIndex % 3]}" stroke-width="4"/>`; for (let i = 0; i < cols; i += 1) { const cell = row[i] || ''; const lines = wrap(cell, cellChars); const textY = y + rowH / 2 - ((lines.length - 1) * cellSize * 1.16) / 2 + cellSize * 0.36; body += `<path d="M${left + i * colW} ${y}v${rowH}" stroke="${palette[3]}" stroke-width="2"/>`; body += textLines(cell, left + i * colW + 14, textY, cellSize, cellChars, palette[1], 6, 600); } y += rowH + rowGap; }); return baseSvg(body, palette, typeTopLabel('matrix'), heading, size); }
function selectMatrix(content, heading, usedPhrases = new Set()) {
  const allColumns = tableColumns(content);
  const allRows = fullTableRows(content);
  if (allColumns.length < 2 || allRows.length < 1) return null;
  const count = (values) => visualWordCount(values.join(' '));
  const columnSets = allColumns.length >= 3 ? [allColumns.slice(0, 3).map(compactTableHeader)] : [allColumns.slice(0, 2).map(compactTableHeader)];
  let best = null;
  for (const columns of columnSets) {
    const cols = columns.length;
    const headerChars = Math.max(8, Math.floor((PHONE.width - 144) / cols / (42 * 0.56)));
    const cellChars = Math.max(8, Math.floor((PHONE.width - 144) / cols / (40 * 0.56)) - 1);
    if (columns.some((cell) => !cell || wrap(cell, headerChars).length > 2)) continue;
    const rows = allRows.map((row, sourceIndex) => {
      const source = row.slice(0, cols);
      return { source, rendered: source.map((cell) => shortCell(cell || '')), sourceIndex };
    }).filter(({ rendered }) => rendered.length === cols && rendered.every((cell) => cell && !badEnd.has(lastWord(cell)) && wrap(cell, cellChars).length <= 6))
      .filter(({ source, rendered }) => !phraseKeys([...source, ...rendered].join(' ')).some((key) => usedPhrases.has(key)));
    for (let limit = 1; limit <= Math.min(2, rows.length); limit += 1) {
      const selected = rows.slice(0, limit);
      const rendered = selected.map((row) => row.rendered);
      if (count([heading, typeTopLabel('matrix'), ...columns, ...rendered.flat()]) > 40) continue;
      const score = limit * 10 + (cols === 3 ? 6 : 0) - rendered.reduce((sum, row) => sum + row.reduce((n, cell) => n + visualWordCount(cell), 0), 0) / 50;
      if (!best || score > best.score) best = { score, columns, rows: rendered, sourceRows: selected.map((row) => row.source) };
    }
  }
  return best;
}
function figureTiles(figures, palette, size, tileY, tileHeight, includeSource = false, valuePosition = null, labelPosition = null, sourcePosition = null) {
  const { width } = size;
  const isSocial = width === 1200;
  const count = Math.max(1, Math.min(3, figures.length));
  const accents = [palette[2], palette[3], palette[4]];
  let body = '';
  if (!includeSource && !isSocial) {
    const gap = 12;
    const rowHeight = (tileHeight - gap * (count - 1)) / count;
    const cardWidth = width - 144;
    const valueColumn = cardWidth * 0.62;
      const valueFont = count === 3 ? 64 : width === PHONE.width ? 80 : 88;
      const labelFont = width === PHONE.width ? 38 : 38;
    figures.slice(0, count).forEach((item, index) => {
      const y = tileY + index * (rowHeight + gap);
      const x = 72;
      let value = String(item.value || '').replace(/\s*[-–]\s*/g, ' – ');
      let label = String(item.label || '');
      const valueChars = Math.max(6, Math.floor((valueColumn - 44) / (valueFont * 0.55)));
      const labelChars = Math.max(10, Math.floor((cardWidth - valueColumn - 36) / (labelFont * 0.55)));
      const valueLines = wrap(value, valueChars);
      const labelLines = wrap(label, labelChars);
      const valueY = y + rowHeight / 2 - ((valueLines.length - 1) * valueFont * 1.12) / 2;
      const labelY = y + rowHeight / 2 - ((labelLines.length - 1) * labelFont * 1.16) / 2;
      body += `<rect x="${x}" y="${y}" width="${cardWidth}" height="${rowHeight}" rx="8" fill="#fffaf0" stroke="#d7cdb8" stroke-width="3"/><path d="M${x + 4} ${y + 16}v${rowHeight - 32}" stroke="${accents[index]}" stroke-width="8" stroke-linecap="round"/>`;
      body += textLines(value, x + 30, valueY, valueFont, valueChars, palette[1], 2, 700, 'start', valueColumn - 44);
      body += textLines(label, x + valueColumn, labelY, labelFont, labelChars, palette[1], 3, 600, 'start', cardWidth - valueColumn - 28);
    });
    return body;
  }
  const gap = isSocial ? 24 : 20;
  const tileW = (width - 144 - gap * (count - 1)) / count;
  const start = (width - (tileW * count + gap * (count - 1))) / 2;
  const valueRatio = valuePosition ?? (includeSource ? 0.16 : 0.22);
  const labelRatio = labelPosition ?? (includeSource ? 0.37 : 0.50);
  const sourceRatio = sourcePosition ?? 0.56;
  figures.slice(0, count).forEach((item, i) => {
    const x = start + i * (tileW + gap);
    const value = String(item.value || '').replace(/\s*[-–]\s*/g, ' – ');
    const valueChars = Math.max(7, Math.floor((tileW - 44) / (isSocial ? 25 : 32)));
    const labelChars = Math.max(9, Math.floor(tileW / (isSocial ? 18 : 26)));
    const valueFont = isSocial ? 48 : size.width === PHONE.width ? 80 : 88;
    const labelFont = isSocial ? 32 : size.width === PHONE.width ? 38 : 38;
    body += `<rect x="${x}" y="${tileY}" width="${tileW}" height="${tileHeight}" rx="${isSocial ? 14 : 8}" fill="#fffaf0" stroke="${accents[i]}" stroke-width="4"/>`;
    body += textLines(value, x + tileW / 2, tileY + tileHeight * valueRatio, valueFont, valueChars, palette[1], 3, 700, 'middle', tileW - 48);
    body += textLines(item.label, x + tileW / 2, tileY + tileHeight * labelRatio, labelFont, labelChars, palette[1], 3, 700, 'middle', tileW - 48);
    if (includeSource) body += textLines(item.source || item.text, x + tileW / 2, tileY + tileHeight * sourceRatio, size.width === PHONE.width ? 36 : 40, Math.max(10, Math.floor(tileW / 23)), palette[1], 6, 600, 'middle', tileW - 48);
  });
  return body;
}
function heroRouteMap(labels, palette, size, y) {
  const { width } = size;
  const count = Math.min(3, labels.length);
  if (count < 2) return '';
  const margin = 72;
  const cardWidth = width - margin * 2;
  const cardHeight = 120;
  const gap = 12;
  const font = width === PHONE.width ? 38 : 42;
  let body = '';
  for (let i = 0; i < count; i += 1) {
    const x = margin;
    const cardY = y + i * (cardHeight + gap);
    const color = [palette[2], palette[3], palette[4]][i % 3];
    const maxChars = Math.max(18, Math.floor((cardWidth - 142) / (font * 0.58)));
    body += `<rect x="${x}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="18" fill="#fffaf0" stroke="${color}" stroke-width="4"/><circle cx="${x + 42}" cy="${cardY + 60}" r="28" fill="${color}"/><text x="${x + 42}" y="${cardY + 69}" text-anchor="middle" font-family="Arial" font-size="${width === PHONE.width ? 36 : 40}" font-weight="700" fill="#fffaf0">${String(i + 1).padStart(2, '0')}</text>${textLines(labels[i], x + 92, cardY + 47, font, maxChars, palette[1], 2, 650)}`;
  }
  return body;
}
function heroVisual(answer, figures, topic, palette, size, supporting = [], routeLabels = [], route = '') {
  const { width, height } = size;
  const font = width === PHONE.width ? 60 : 66;
  const answerLines = wrap(answer, 17);
  const answerY = 315;
  const answerEnd = answerY + (answerLines.length - 1) * font * 1.12 + font;
  let body = `<text x="72" y="${answerY}" font-family="Georgia,Times New Roman,serif" font-size="${font}" font-weight="700" fill="${palette[1]}">${answerLines.map((line, i) => `<tspan x="72" dy="${i ? font * 1.12 : 0}">${esc(line)}</tspan>`).join('')}</text>`;
  const labels = routeLabels.slice(0, 3);
  const hasLowerStructure = figures.length > 0 || labels.length >= 2;
  const iconScale = width === PHONE.width ? 0.38 : 0.42;
  const iconY = 310;
  const iconX = width - 280;
  if (hasLowerStructure) body += topicIcon(topic, palette, iconX, iconY, iconScale);
  let contentBottom = answerEnd;
  if (figures.length) {
    const tileY = Math.max(765, answerEnd + 48);
    const tileHeight = Math.max(360, height - tileY - 64);
    body += figureTiles(figures, palette, size, tileY, tileHeight, false, 0.24, 0.64);
    contentBottom = tileY + tileHeight;
  } else {
    while (labels.length >= 2 && answerEnd + 48 + labels.length * 120 + (labels.length - 1) * 12 > height - 64) labels.pop();
    if (labels.length >= 2) {
      const routeY = Math.max(650, answerEnd + 48);
      body += heroRouteMap(labels, palette, size, routeY);
      contentBottom = routeY + labels.length * 120 + (labels.length - 1) * 12;
    } else if (supporting.length) {
      const fontSize = width === PHONE.width ? 40 : 42;
      const chars = width === PHONE.width ? 28 : 32;
      const lines = wrap(supporting[0].text, chars);
      const supportY = answerEnd + 100;
      if (supportY + lines.length * fontSize * 1.16 <= height - 72) {
        body += `<path d="M72 ${supportY - 38}h${width - 144}" stroke="${palette[2]}" stroke-width="7"/>${textLines(supporting[0].text, 76, supportY, fontSize, chars, palette[1], 4, 600)}`;
        contentBottom = supportY + lines.length * fontSize * 1.16;
      }
    }
    if (!hasLowerStructure) {
      const largeIconScale = Math.min(width === PHONE.width ? 0.76 : 0.9, (height - contentBottom - 116) / 480);
      const largeIconY = Math.max(contentBottom + 44, height - 480 * largeIconScale - 72);
      const largeIconX = (width - 480 * largeIconScale) / 2;
      body += topicIcon(topic, palette, largeIconX, largeIconY, largeIconScale);
    }
  }
  return baseSvg(body, palette, heroEditorialLabel(topic), heroTopic(topic, route), size, true, route);
}
function socialHeroVisual(answer, figures, topic, palette, supporting = [], route = '') { const size = { width: 1200, height: 630 }; const t = heroTopic(topic, route); const titleLines = wrap(t, 24); const answerLines = wrap(answer, 40); let body = `<rect width="1200" height="630" fill="${palette[0]}"/><path d="M0 106H1200" stroke="${palette[4]}" stroke-width="7"/><text x="64" y="90" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="700" letter-spacing="1" fill="${palette[1]}">${esc(heroEditorialLabel(topic).toUpperCase())}</text>${titleLines.map((line,i)=>`<text x="64" y="${148+i*55}" font-family="Georgia,Times New Roman,serif" font-size="48" font-weight="600" fill="${palette[1]}">${esc(line)}</text>`).join('')}${answerLines.map((line,i)=>`<text x="64" y="${248+i*40}" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="700" fill="${palette[1]}">${esc(line)}</text>`).join('')}`; body += topicIcon(topic,palette,865,118,0.48); if(figures.length){body+=figureTiles(figures,palette,size,420,160,false,0.22,0.75)}else if(supporting.length){const lines=wrap(supporting[0].text,68).slice(0,2);body+=lines.map((line,i)=>`<text x="64" y="${Math.min(570,330+i*32)}" font-family="Arial,Helvetica,sans-serif" font-size="25" fill="${palette[1]}">${esc(line)}</text>`).join('')} return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">${body}</svg>`; }
function proofVisual(items, palette, heading, size) { const figures = items.map(figureFromItem).filter(Boolean); let body = topicIcon(heading, palette, size.width === PHONE.width ? 540 : 570, 145, size.width === PHONE.width ? 0.58 : 0.66); body += figureTiles(figures, palette, size, 300, 950, true); return baseSvg(body, palette, typeTopLabel('proof'), heading, size); }
function keyFor(item) { return clean(item?.text || item?.raw || item || '').toLowerCase().replace(/\W+/g, ' ').trim(); }
function phraseKeys(value) { const tokens = String(value || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; const keys = []; for (let i = 0; i <= tokens.length - 5; i += 1) keys.push(tokens.slice(i, i + 5).join(' ')); return keys; }
function numericTokens(value) { return (String(value || '').match(/(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?/g) || []).map((token) => Number(token.replaceAll(',', ''))); }
function normalizeFigureKey(value) { return String(value || '').toLowerCase().replace(/(?:₹|\b(?:rs\.?|inr)\b|\$)/gi, '').replace(/,/g, '').replace(/[–—−]/g, '-').replace(/\b(lakhs?|crores?|years?|months?|weeks?|days?|hours?)\b/g, (unit) => unit.replace(/s$/, '').replace(/^lakh$/, 'lakh').replace(/^crore$/, 'crore')).replace(/\bpercent\b/g, '%').replace(/\s+/g, '').trim(); }
const routeDurationLabelCorrections = [
  ['/blog/government-jobs/government-exam-preparation-while-working-india/', '8-10 hours', /8-10 hours a day full-time aspirants describe/i, 'Daily Study Hours'],
  ['/blog/career-guidance/i-am-confused-about-my-career-after-10th/', '24 hours', /open 24 hours a day/i, 'Helpline Availability'],
  ['/blog/career-options/careers-for-people-who-dont-like-desk-jobs-india/', '10 hours', /people sitting around 10 hours a day/i, 'Daily Sitting Time'],
  ['/blog/career-options/careers-for-people-who-dont-like-desk-jobs-india/', '1 hour', /those sitting about 1 hour a day/i, 'Daily Sitting Time'],
  ['/blog/career-options/is-ethical-hacking-a-good-career-in-india/', '1 hour', /limits the attack machine to 1 hour a day/i, 'Daily Free-Plan Limit'],
  ['/blog/career-options/pcb-career-options-with-salary/', '₹1.8-3 LPA', /roughly rs 1\.8-3 lpa to start/i, 'Entry Level Pay'],
  ['/blog/career-options/pcb-career-options-with-salary/', '₹4-6 LPA', /roughly rs 4-6 lpa with allowances/i, 'Salary Range Including Allowances'],
  ['/blog/career-options/pcb-career-options-with-salary/', '₹3-6 LPA', /roughly.*\bentry\b.*\bsenior\b/i, 'Entry Level Pay'],
  ['/blog/career-options/pcb-career-options-with-salary/', '₹18-30 LPA', /roughly.*\bentry\b.*\bsenior\b/i, 'Senior-Level Salary Range'],
  ['/blog/college-degrees/education-loan-worth-it-india-private-college/', '5-15 years', /repayment tenures typically run 5-15 years/i, 'Loan Repayment Tenure'],
  ['/blog/college-degrees/education-loan-worth-it-india-private-college/', '7-10 year', /total repayment \(principal plus interest\)/i, 'Loan Repayment Period'],
  ['/blog/career-change/how-to-switch-from-service-company-to-product-company/', '3-6 months', /consistent dsa and system-design preparation/i, 'Preparation Window'],
  ['/blog/freelancing-business/freelancing-vs-job-india-which-is-better/', '6-12 months', /covering 6-12 months of essential expenses/i, 'Living Expense Runway'],
  ['/blog/freelancing-business/freelancing-vs-job-india-which-is-better/', '6-12 months', /freelancing usually suits someone with 6-12 months of runway/i, 'Freelance Entry Runway'],
  ['/blog/skills/what-are-life-skills-examples-and-how-to-build-them-india/', '30 days', /track expenses for 30 days/i, 'Expense Tracking Period'],
  ['/blog/career-options/is-software-testing-a-good-career/', '4-6 years', /pay gap: manual testers plateau/i, 'Experience Pay Comparison'],
  ['/blog/career-change/it-to-non-it-career-switch-india/', '6-12 months', /emergency fund covering at least 6-12 months/i, 'Emergency Fund Coverage'],
  ['/blog/career-change/it-to-non-it-career-switch-india/', '6-12 month', /a 6-12 month emergency fund/i, 'Emergency Fund Coverage'],
  ['/blog/career-options/is-trading-a-good-career-in-india/', '6-12 months', /6-12 months of full living expenses set aside/i, 'Living Expense Runway'],
  ['/blog/freelancing-business/starting-a-business-vs-job-india-which-is-better/', '12-18 months', /12-18 months of personal living expenses saved/i, 'Personal Savings Runway'],
  ['/blog/freelancing-business/starting-a-business-vs-job-india-which-is-better/', '12 months', /at least 12 months of personal living expenses/i, 'Personal Savings Runway'],
  ['/blog/freelancing-business/starting-a-business-vs-job-india-which-is-better/', '18 months', /ideally 18 months/i, 'Personal Savings Runway'],
  ['/blog/freelancing-business/starting-a-business-vs-job-india-which-is-better/', '3-6 months', /3-6 months commonly suggested for ordinary job loss/i, 'Job-Loss Fund Baseline'],
  ['/blog/career-options/is-merchant-navy-a-good-career/', '4-9 month', /continuous stretches at sea/i, 'Sea Assignment Length'],
  ['/blog/resume/resume-tips-for-freshers-india/', '6 weeks', /managed the company.s instagram content calendar for 6 weeks/i, 'Example Project Duration'],
  ['/blog/career-change/career-change-at-30-india/', '3-6 month', /3-6 month emergency fund minimum/i, 'Emergency Fund Coverage'],
  ['/blog/career-change/career-change-at-30-india/', '3-6 months', /baseline emergency fund, rising to 6-9 months/i, 'Emergency Fund Baseline'],
  ['/blog/career-change/career-change-at-30-india/', '12 months', /12 months if you are moving toward freelancing/i, 'Variable-Income Runway'],
  ['/blog/career-change/career-change-after-5-years-india/', '6 months', /budget for at least 6 months of expenses/i, 'Transition Runway Minimum'],
  ['/blog/government-jobs/banking-sector-career-india/', '3-5 years', /move into a senior relationship or branch-head role in 3-5 years/i, 'Promotion Timeline'],
  ['/blog/government-jobs/defence-services-career-india/', '4 years', /tenure is fixed at 4 years rather than an open-ended career/i, 'Agnipath Service Tenure'],
  ['/blog/government-jobs/defence-services-career-india/', '10-14 years', /fixed tenure, commonly 10-14 years/i, 'Service Tenure Range'],
  ['/blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/', '1-2 years', /financial runway cannot absorb 1-2 years of exam-focused prep/i, 'Exam Preparation Runway'],
  ['/blog/career-options/is-doctor-a-good-career-in-india/', '3 years', /further NEET-SS exam and 3-year super-specialisation/i, 'Super-Specialty Training'],
  ['/blog/career-options/is-doctor-a-good-career-in-india/', '8.5-9.5 years', /still not reached a settled, specialist-level income/i, 'Time to Specialist Income'],
  ['/blog/career-options/is-doctor-a-good-career-in-india/', '9-10 years', /settled, specialist-level income roughly 9-10 years/i, 'Time to Specialist Income'],
  ['/blog/career-options/is-doctor-a-good-career-in-india/', '12-13 years', /stretches the total timeline past 12-13 years from Class 12/i, 'Specialist Path Duration'],
  ['/blog/career-options/is-doctor-a-good-career-in-india/', '10 years', /realistic income timeline that can stretch past 10 years/i, 'Income Timeline Estimate'],
  ['/blog/career-options/career-in-navy-after-12th-science/', '16.5 to 19.5 years', /age eligibility mirrors NDA/i, 'Age Eligibility Range'],
  ['/blog/career-options/career-in-navy-after-12th-science/', '5 days', /SSB.*runs over roughly 5 days/i, 'SSB Assessment Length'],
  ['/blog/career-options/career-in-navy-after-12th-science/', '3 years', /Selected cadets train for 3 years at NDA Khadakwasla/i, 'NDA Training Period'],
  ['/blog/career-options/career-options-after-12th-for-girls-in-india/', '4-5 year', /commit to a 4-5 year runway with a demanding exam structure/i, 'Exam Preparation Runway'],
  ['/blog/career-options/career-options-after-12th-for-girls-in-india/', '4-6 year', /Compressing a 4-6 year path into an unrealistic timeline/i, 'Route Duration Range'],
  ['/blog/career-options/is-service-company-job-worth-it-for-freshers/', '35 days', /effectively caps it near 35 days a year/i, 'Annual Bench-Time Cap'],
  ['/blog/career-options/is-service-company-job-worth-it-for-freshers/', '1.5-2.5 year', /first serious external job search around the 1.5-2.5 year mark/i, 'External Job-Search Window'],
  ['/blog/career-options/is-service-company-job-worth-it-for-freshers/', '2-3 month', /structured onboarding program/i, 'Onboarding Program Length'],
  ['/blog/career-options/is-service-company-job-worth-it-for-freshers/', '1-3 year', /treat this as a 1-3 year runway, not a destination/i, 'First-Role Time Box'],
  ['/blog/career-options/is-service-company-job-worth-it-for-freshers/', '2-3 years', /move toward client-facing, architecture, or AI-oversight work within their first 2-3 years/i, 'Skills Transition Window'],
  ['/blog/career-options/sales-career-growth-path-india/', '2-3 years', /income that moves month to month.*first 2-3 years/i, 'Early Sales Income Window'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '12–18 months', /adjacent crossover path is often achievable in 12–18 months/i, 'Skill-Building Window'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '6–18 months', /Realistic switch timeline 6–18 months/i, 'Career Switch Timeline'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '8–16 months', /Realistic switch timeline 8–16 months/i, 'Career Switch Timeline'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '3 months', /Learn SQL and Python basics \(3 months\)/i, 'SQL Learning Window'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '12–24 months', /while still employed, learning evenings and weekends, typically takes 12–24 months/i, 'Employed Switch Timeline'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '8–18 months', /Realistic switch timeline 8–18 months/i, 'Career Switch Timeline'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '3–5 year', /fastest income jumps happen at the 3–5 year mark/i, 'Experience Pay Window'],
  ['/blog/ai-future/best-career-paths-for-the-next-10-years/', '10 years', /best career paths for the next 10 years/i, 'Career Planning Horizon'],
  ['/blog/career-options/career-in-investment-banking-india-how-to-start/', '2-5 years', /other three realistically take 2-5 years/i, 'Route Entry Timeline'],
  ['/blog/career-options/career-in-investment-banking-india-how-to-start/', '1-2 year', /fund or get aid for a 1-2 year program/i, 'Program Duration Range'],
  ['/blog/career-options/career-in-investment-banking-india-how-to-start/', '2-4 years', /making the jump within 2-4 years before the profile ages out/i, 'Lateral Entry Window'],
  ['/blog/career-options/career-in-investment-banking-india-how-to-start/', '3 years', /loans that eat your first 3 years of salary/i, 'Debt Payback Burden'],
  ['/blog/career-options/career-in-investment-banking-india-how-to-start/', '2-3 year', /2-3 year credential-building stop/i, 'Credential-Building Window'],
  ['/blog/government-jobs/government-jobs-after-engineering-india/', '12-18 months', /12-18 months of ESE-level prep with uncertain income/i, 'Exam Preparation Runway'],
  ['/blog/government-jobs/government-jobs-after-engineering-india/', '3 months', /forums love a .*cleared it in 3 months.* success story/i, 'Unverified Forum Claim'],
  ['/blog/career-options/best-mba-specialization-for-engineers/', '2-4 years', /spent 2-4 years first as an engineer, analyst/i, 'Pre-MBA Role Experience'],
  ['/blog/career-options/best-mba-specialization-for-engineers/', '2-4 years', /ideal work-experience range for flagship MBA programs/i, 'MBA Applicant Experience'],
  ['/blog/career-options/best-mba-specialization-for-engineers/', '30-36 month', /30-36 month window, as the ideal work-experience range/i, 'MBA Applicant Experience'],
  ['/blog/freelancing-business/content-creator-income-india/', '12 months', /valid public watch hours in the last 12 months/i, 'Platform Eligibility Window'],
  ['/blog/career-options/career-after-civil-engineering-in-india/', '8-12 months', /score takes real, structured preparation, usually 8-12 months/i, 'GATE Preparation Window'],
  ['/blog/career-options/career-after-civil-engineering-in-india/', '8-12 month', /same 8-12 month structured window as GATE-PSU prep/i, 'GATE Preparation Window'],
  ['/blog/college-degrees/best-mba-specializations-india/', '5-10 year', /earning Rs 15-35 LPA at the 5-10 year mark/i, 'Mid-Career Experience Band'],
  ['/blog/college-degrees/best-diploma-courses-after-12th/', '5-8 year', /5-8 year climb through operations into management/i, 'Management Progression Window'],
  ['/blog/college-degrees/best-diploma-courses-after-12th/', '1-3 years', /diploma commits you to a specific daily rhythm for 1-3 years/i, 'Study Routine Commitment'],
  ['/blog/resume/good-career-objective-for-resume/', '6 years', /6 years of classroom experience/i, 'Classroom Experience'],
  ['/blog/resume/good-career-objective-for-resume/', '2 years', /Content writer with 2 years producing SEO-optimised articles/i, 'Content Writing Experience'],
  ['/blog/career-options/mba-after-bcom-worth-it-in-india/', '3-5 years', /3-5 years of salary just to break even/i, 'Salary Payback Period'],
  ['/blog/career-options/mba-after-bcom-worth-it-in-india/', '10-16 months', /payback period of roughly 10-16 months/i, 'MBA ROI Payback Period'],
  ['/blog/college-degrees/diploma-and-certificate-courses-for-commerce-students-india/', '3 years', /certificates are valid for 3 years/i, 'Certificate Validity Period'],
  ['/blog/medical-careers/health-information-management-career-india/', '6-12 month', /6-12 month HIM diploma/i, 'HIM Diploma Duration'],
  ['/blog/college-degrees/best-mba-specializations-india/', '5-10 year', /at the 5-10 year mark/i, 'Mid-Career Experience Band'],
  ['/blog/college-degrees/professional-courses-for-commerce-students/', '4 years', /Foundation registration is valid for 4 years/i, 'Foundation Validity Period'],
  ['/blog/college-degrees/professional-courses-for-commerce-students/', '5 years', /Intermediate is valid for 5 years/i, 'Intermediate Validity Period'],
  ['/blog/college-degrees/professional-courses-for-commerce-students/', '10 years', /Final is valid for 10 years/i, 'Final Validity Period'],
  ['/blog/college-degrees/professional-courses-for-commerce-students/', '4,000 hours', /4,000 hours of work over at least 36 months/i, 'Required Work Experience'],
  ['/blog/study-abroad/canada-vs-germany-for-masters-india/', '21 months', /21 months with B1 German under the EU Blue Card route/i, 'PR Eligibility Timeline'],
  ['/blog/study-abroad/canada-vs-germany-for-masters-india/', '18-24 months', /first 18-24 months in either country as a real test period/i, 'Study-Abroad Test Period'],
  ['/blog/study-abroad/canada-vs-germany-for-masters-india/', '1-2 years', /reaching B1 German while also studying and job-hunting/i, 'German Learning Window'],
  ['/blog/study-abroad/canada-vs-germany-for-masters-india/', '12-24 months', /12-24 months of actual living costs/i, 'Living-Cost Coverage Period'],
  ['/blog/career-options/career-after-12th-maths-without-engineering/', '3 years', /CS Executive and CS Professional stages over roughly 3 years/i, 'CS Qualification Timeline'],
  ['/blog/career-options/career-after-12th-maths-without-engineering/', '4-5 years', /4-5 years total if cleared on schedule/i, 'Qualification Timeline'],
  ['/blog/career-options/career-after-12th-maths-without-engineering/', '2-4 years', /first 2-4 years are trainee pay while you clear exams/i, 'Trainee Pay Window'],
  ['/blog/career-options/career-after-12th-maths-without-engineering/', '5 to 8 years', /Full qualification typically takes 5 to 8 years/i, 'Qualification Timeline'],
  ['/blog/college-degrees/certificate-courses-for-bcom-students/', '12 months', /renew the certificate free every 12 months/i, 'Certificate Renewal Cycle'],
  ['/blog/college-degrees/certificate-courses-for-bcom-students/', '2 years', /SEBI Investor Awareness Test.*valid for only 2 years/i, 'SEBI Test Validity'],
  ['/blog/college-degrees/certificate-courses-for-bcom-students/', '3 years', /NISM certificate lasts 3 years/i, 'NISM Certificate Validity'],
  ['/blog/career-options/is-hotel-management-a-good-career-in-india/', '1-3 years', /modest starting salary.*first 1-3 years/i, 'Early-Career Pay Window'],
  ['/blog/career-options/is-physiotherapy-a-good-career-in-india/', '1-3 years', /modest starting salary.*first 1-3 years/i, 'Early-Career Pay Window'],
  ['/blog/career-options/best-paying-jobs-for-humanities-students-india/', '5 years', /CLAT rank plus college tier decides almost everything for the first 5 years/i, 'Early-Career Outcome Window'],
  ['/blog/career-options/best-paying-jobs-for-humanities-students-india/', '8-10 years', /path you cannot sustain for 8-10 years/i, 'Career Sustainability Window'],
  ['/blog/career-options/best-paying-jobs-for-humanities-students-india/', '2-3 years', /plan your first 2-3 years around the entry band/i, 'Entry-Level Experience Window'],
  ['/blog/career-options/best-paying-jobs-for-humanities-students-india/', '5-7 years', /even after 5-7 years without a deliberate pivot/i, 'Experience Pay Window'],
  ['/blog/career-options/best-paying-jobs-for-humanities-students-india/', '8-15 years', /within 8-15 years/i, 'Time to Senior Pay Ceiling'],
  ['/blog/career-options/btech-biotechnology-career-options/', '4 years', /BTech Biotechnology \(JEE-admitted, 4 years/i, 'BTech Degree Duration'],
  ['/blog/career-options/btech-biotechnology-career-options/', '3 years', /BSc Biotechnology \(3 years, pure science\)/i, 'BSc Degree Duration'],
  ['/blog/career-options/actuarial-science-careers/', '4 to 6 years', /get through the examinations in 4 to 6 years on average/i, 'Exam Completion Window'],
  ['/blog/career-options/actuarial-science-careers/', '7-10 years', /7-10 years from your first exam to Fellowship/i, 'Fellowship Qualification Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '1 to 3 years', /Work-first routes \(ITI and diploma\) reach full-time work in 1 to 3 years/i, 'Time to First Work'],
  ['/blog/stream-selection/career-chart-after-10th/', '1 to 2 years', /ITI trade course 1 to 2 years to work/i, 'ITI-to-Work Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '1 to 3 years', /Skill-first stack beside school 1 to 3 years to work/i, 'Skill-to-Work Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '2 to 3 years', /Open schooling \(NIOS and state open schools\) 2 to 3 years to work/i, 'Open-School-to-Work Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '5 to 6 years', /5 to 6 years to first full-time work/i, 'Education-to-Work Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '5 to 7 years', /5 to 7 years to first full-time work/i, 'Education-to-Work Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '3 years', /usually 3 years.*about 3 years to first full-time work/i, 'Degree-to-Work Timeline'],
  ['/blog/stream-selection/career-chart-after-10th/', '1 to 2 years', /1 or 2 years, depending on the trade.*first full-time work/i, 'Trade-to-Work Timeline'],
  ['/blog/career-options/is-food-technology-a-good-career-in-india/', '2-3 years', /modest starting salary.*first 2-3 years/i, 'Early-Career Pay Window'],
  ['/blog/study-abroad/opt-after-ms-in-usa-for-indian-students/', '12 months', /standard post-completion OPT/i, 'Standard OPT Duration'],
  ['/blog/study-abroad/opt-after-ms-in-usa-for-indian-students/', '36 months', /total work authorization to up to 36 months/i, 'STEM OPT Maximum Duration'],
  ['/blog/study-abroad/opt-after-ms-in-usa-for-indian-students/', '12 months', /Most explanations of OPT stop at/i, 'Standard OPT Duration'],
  ['/blog/career-options/career-options-after-ma-in-india/', '3-6 years', /A PhD typically runs 3-6 years/i, 'PhD Program Duration'],
  ['/blog/career-guidance/first-job-vs-higher-studies-india/', '24 to 36 months', /24 to 36 months considered close to ideal/i, 'MBA Work-Experience Window'],
  ['/blog/career-guidance/first-job-vs-higher-studies-india/', '6 months', /under 6 months usually gets zero points/i, 'Minimum Work-Experience Threshold'],
  ['/blog/career-guidance/first-job-vs-higher-studies-india/', '1-2 years', /1-2 years of directly related work/i, 'Relevant Work-Experience Window'],
  ['/blog/career-options/dairy-science-career-options/', '2-3 years', /first 2-3 years while you build the specialisation/i, 'Early-Career Pay Window'],
  ['/blog/career-options/dairy-science-career-options/', '12-18 years', /senior plant leadership or R&D specialists reach/i, 'Time to Senior Compensation'],
  ['/blog/career-change/career-change-at-30-india/', '6-9 month', /funded 6-9 month runway/i, 'Funded Transition Runway'],
  ['/blog/career-options/project-manager-career-india-pmp-certification-worth-it/', '36 months', /PMP requires 36 months of documented project-leading experience/i, 'PMP Experience Requirement'],
  ['/blog/career-options/project-manager-career-india-pmp-certification-worth-it/', '60 months', /PMP requires 36 months of documented project-leading experience/i, 'PMP Experience Requirement'],
  ['/blog/college-degrees/certificate-courses-for-bcom-students/', '3 years', /NISM exams\. Valid for 3 years from the exam date/i, 'NISM Certificate Validity'],
  ['/blog/career-change/career-change-at-30-india/', '6-9 months', /up to 6-9 months if you are moving into freelancing/i, 'Variable-Income Runway'],
  ['/blog/career-change/career-change-at-30-india/', '6-9 months', /rising to 6-9 months if you are about to take a pay cut or gap/i, 'Pay-Dip Transition Runway'],
  ['/blog/career-options/best-paying-jobs-for-humanities-students-india/', '8-15 years', /ceiling numbers in this article take 8-15 years to reach/i, 'Time to Senior Pay Ceiling'],
  ['/blog/study-abroad/is-ms-in-usa-worth-it-india/', '12 months', /Optional Practical Training gives 12 months of work authorization/i, 'OPT Work Authorization'],
  ['/blog/study-abroad/postgraduate-diploma-courses-in-canada-for-international-students/', '24 hours', /24 hours a week off campus/i, 'Weekly Work-Hour Limit'],
  ['/blog/career-options/hotel-management-career-india-scope-and-salary/', '2-3 years', /first 2-3 years involve modest pay and genuinely long/i, 'Early-Career Pay Window'],
  ['/blog/career-options/hotel-management-career-india-scope-and-salary/', '2-3 years', /first 2-3 years will be physically and socially demanding/i, 'Early-Career Pay Window'],
  ['/blog/career-options/hotel-management-career-india-scope-and-salary/', '15 years', /GM-level pay after roughly 15 years/i, 'GM-Level Pay Timeline'],
  ['/blog/career-options/hotel-management-career-india-scope-and-salary/', '22-26 weeks', /mandatory industry internship \(usually 22-26 weeks\)/i, 'Industry Internship Duration'],
  ['/blog/government-jobs/defence-services-career-india/', '16.5 to 19.5 years', /roughly 16.5 to 19.5 years old/i, 'Age Eligibility Range'],
  ['/blog/government-jobs/defence-services-career-india/', '17.5 to 21 years', /roughly 17.5 to 21 years old/i, 'Age Eligibility Range'],
  ['/blog/government-jobs/defence-services-career-india/', '13 years', /13 years of commissioned service move to the Lieutenant Colonel rank/i, 'Promotion Timeline'],
  ['/blog/government-jobs/defence-services-career-india/', '16 years', /Colonel rank \(roughly 16 years of service/i, 'Selection-Based Promotion Mark'],
  ['/blog/government-jobs/defence-services-career-india/', '3 years', /Selected cadets train for 3 years at NDA Khadakwasla across all three services together/i, 'NDA Training Period'],
];
function applyRouteDurationLabelCorrection(route, figure) {
  const valueKey = normalizeFigureKey(figure.value);
  const source = String(figure.source || '');
  if (/^(?:budget warning threshold|one-fifth budget share)$/i.test(figure.label || '')) {
    const fifthAmount = source.match(/\b(?:a fifth|one fifth) is\s*((?:₹|rs\.?\s*)?\s*[\d,.]+\s*(?:lakh|crore)?)/i)?.[1]?.trim().replace(/[.,]+$/, '');
    if (fifthAmount && valueKey === normalizeFigureKey(fifthAmount)) figure.label = /(?:serious caution|warning threshold|red flag)/i.test(source) ? 'Budget Warning Threshold' : 'One-Fifth Budget Share';
    else if (/(?:programme|program|course).{0,80}far above that fifth|far above that fifth.{0,80}(?:programme|program|course)/i.test(source)) figure.label = 'Course Fee Above Budget Share';
  }
  const correction = routeDurationLabelCorrections.find(([targetRoute, targetValue, sourcePattern]) => route === targetRoute && valueKey === normalizeFigureKey(targetValue) && sourcePattern.test(source));
  if (correction) figure.label = correction[3];
  return figure;
}
function figureFamily(label) {
  const normalized = clean(label).toLowerCase().replace(/\s+by\s+20\d{2}\b/g, '').replace(/^projected\s+/, '');
  if (/^(?:annual industry revenue|pr industry revenue)$/.test(normalized)) return 'industry revenue';
  if (/^(?:education budget example|illustrative education budget)$/.test(normalized)) return 'education budget example';
  return normalized;
}
function expandFigureValue(value, raw) {
  const targets = numericTokens(value);
  if (targets.length !== 1) return value;
  const requestedUnit = String(value || '').match(/(?:lpa|lakhs?|crores?|l|thousand|million|billion|k|%|percent|years?|months?|weeks?|days?|hours?)\s*$/i)?.[0]?.trim();
  const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
  const range = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)?\s*(${number})\s*(?:[-–—]|\bto\b)\s*(${number})(?:\s*(lpa|lakhs?|crores?|l|%|percent|years?|months?|weeks?|days?|hours?))?`, 'gi');
  for (const match of String(raw || '').matchAll(range)) {
    if (requestedUnit && normalizeFigureKey(requestedUnit) !== normalizeFigureKey(match[3] || '')) continue;
    const yearPercentMismatch = /%|percent/i.test(match[3] || '') && Number(match[1]) >= 1900 && Number(match[1]) <= 2100;
    if (!yearPercentMismatch && [match[1], match[2]].some((endpoint) => Number(endpoint.replaceAll(',', '')) === targets[0])) return match[0].trim();
  }
  const amount = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)?\s*(${number})\s*(lpa|lakhs?|crores?|l|thousand|million|billion|k|%|percent|years?|months?|weeks?|days?|hours?)?`, 'gi');
  for (const match of String(raw || '').matchAll(amount)) {
    if (Number(match[1].replaceAll(',', '')) !== targets[0] || !match[2]) continue;
    if (requestedUnit && normalizeFigureKey(requestedUnit) !== normalizeFigureKey(match[2])) continue;
    return match[0].trim().replace(/^rs\.?\s*/i, '₹').replace(/^inr\s*/i, '₹');
  }
  return value;
}
function percentageContextLabel(context, value = '') {
  const text = clean(context).toLowerCase();
  const number = String(value || '').toLowerCase();
  if (/100\s*%\s*(?:safe|guaranteed)|\b100 percent safe\b/.test(text)) return '__OMIT__';
  if (/government/.test(text) && /share/.test(text)) return 'Government PR Client Share';
  if (/start.?ups?/.test(text) && /share/.test(text)) return 'Start-up PR Client Share';
  if (/government/.test(text) && /client categor|client mix|client share/.test(text)) return 'Government PR Client Share';
  if (/start.?ups?/.test(text) && /client categor|client mix|client share/.test(text)) return 'Start-up PR Client Share';
  if (/education budget|paid course|course fee|degree fee|college seat.*budget/.test(text)) {
    const valueIndex = text.indexOf(number);
    const numericToken = number.match(/\d+(?:\.\d+)?/)?.[0];
    const percentMatch = numericToken ? text.match(new RegExp(`${numericToken}\\s*(?:%|percent)`)) : null;
    const numericIndex = valueIndex >= 0 ? valueIndex : percentMatch?.index ?? text.search(/\d+(?:\.\d+)?\s*%?/);
    const nearbyBefore = numericIndex >= 0 ? text.slice(Math.max(0, numericIndex - 28), numericIndex) : text;
    const nearbyAfter = numericIndex >= 0 ? text.slice(numericIndex + number.length, numericIndex + number.length + 36) : text;
    const nearby = `${nearbyBefore} ${nearbyAfter}`;
    if (/caution|warning|red flag|spending above|above roughly|serious caution/.test(nearby)) return 'Budget Warning Threshold';
    return 'Education Budget Share';
  }
  if (/upsc civil services/.test(text) && /select|selected|recommended/.test(text)) return 'UPSC Selection Rate';
  if (/ca\s+final/.test(text) && /pass|passed|clear|cleared/.test(text)) return 'CA Final Pass Rate';
  if (/\b44ada\b|presumptive scheme|taxable profit/.test(text)) return 'Presumptive Taxable Income Share';
  if (/disability.{0,50}(?:bar|eligib|percent)|(?:eligib|bar).{0,50}disability/.test(text)) return 'Disability Eligibility Threshold';
  if (/\bunemployment\b/.test(text)) return /young people|aged 15|youth/.test(text) ? 'Youth Unemployment Rate' : 'Unemployment Rate';
  if (/graduate employability|employability rate|job-ready/.test(text)) return 'Graduate Employability Rate';
  if (/placement/.test(text)) return /banner|claim|says so|advertis|guarantee/.test(text) ? 'Advertised Placement Claim' : 'Placement Rate';
  if (/pay jump|salary premium|pay premium|pay gap|pay rise|salary increase|earnings increase|compensation.*(?:rise|increase|jump)/.test(text)) return 'Pay Increase';
  if (/credit card/.test(text) && /compounding|interest|balance/.test(text)) return 'Credit Card Interest Rate';
  if (/home loan/.test(text) && /interest|loan/.test(text)) return 'Home Loan Interest Rate';
  if (/advance before you start|advance payment|upfront payment/.test(text)) return 'Upfront Payment Advance';
  if (/revenue-cycle|outsourc/.test(text) && /adoption/.test(text)) return 'Outsourcing Adoption Rate';
  if (/ai skill penetration|skill penetration/.test(text)) return 'AI Skill Penetration';
  if (/skill sets?.{0,65}(?:transformed|outdated)|workers? will need.{0,40}reskilling/.test(text)) return 'Workforce Reskilling Forecast';
  if (/skills? gap|difficulty finding (?:skilled|talent)|struggle to find candidates|hard to find skilled/.test(text)) return 'Employers Reporting Skills Shortage';
  if (/startup/.test(text) && /do not survive|failure|fail to survive/.test(text)) return 'Startup Five-Year Failure Rate';
  if (/creators?/.test(text) && /monetiz/.test(text)) return 'Creator Monetization Rate';
  if (/conversion/.test(text) && /walk in|buy|purchase|bills/.test(text)) return 'Customer Conversion Rate';
  if (/world output|global output|world production/.test(text)) return 'Global Production Share';
  if (/reservation|national quota|quota/.test(text)) return 'Reservation Share';
  if (/interest rate|compounding|dearness allowance/.test(text)) return 'Interest or Allowance Rate';
  if (/minimum|at least/.test(text) && /marks|eligib|qualif|admission|pass to/.test(text)) return 'Eligibility Threshold';
  if (/passed|pass rate|cleared|qualified|appeared/.test(text) && /exam|group|ca\s+intermediate|barc|aicte/.test(text)) return 'Exam Pass Rate';
  if (/selected|selection|got a seat|secured a seat/.test(text)) return 'Selection Rate';
  if (/adoption/.test(text)) return 'Adoption Rate';
  if (/walk in|bills/.test(text)) return 'Customer Conversion Rate';
  if (/fell|drop|declin|reduc|cut/.test(text)) {
    if (/job|hiring|posting/.test(text)) return 'Hiring Demand Decline';
    if (/register|registration|licen[cs]e|cpl/.test(text)) return 'Professional Registration Decline';
    if (/turnaround|time|fulfilment/.test(text)) return 'Process Time Reduction';
    if (/layoffs?|job cuts/.test(text)) return 'Job Cut Increase';
  }
  if (/accounts for.{0,55}(?:market|output)|(?:market|output).{0,55}accounts for|market share|share of (?:the )?(?:market|earnings|creator)/.test(text)) return 'Regional Market Share';
  if (/(?:survey|poll|respondents?)/.test(text) && /(?:said|reported|rated|consider|response|responded)/.test(text)) return 'Survey Response Share';
  if (/public relations|\bpr industry\b/.test(text) && /grow|growth|grew|increase/.test(text)) return 'PR Industry Growth';
  if (/advertising|groupm|dentsu/.test(text) && /grow|growth|grew|increase/.test(text)) return 'Advertising Spend Growth';
  if (/grow|growth|increased|increase|rising/.test(text) && /revenue|jobs|adoption|market|sector|industry/.test(text)) return 'Growth Rate';
  return '';
}
function clientMixShareLabel(source, numberIndex) {
  const line = String(source || '');
  const anchors = [...line.matchAll(/\bgovernment(?:'s)?\b|\bstart[\s-]?ups?\b/gi)];
  const anchor = anchors.filter((match) => match.index <= numberIndex).at(-1);
  if (!anchor) return '';
  const nextAnchor = anchors.find((match) => match.index > anchor.index);
  const segment = line.slice(anchor.index, nextAnchor?.index ?? line.length).toLowerCase();
  if (!/share|client categor|client mix/.test(segment)) return '';
  return /^government/i.test(anchor[0]) ? 'Government PR Client Share' : 'Start-up PR Client Share';
}
function figureValueSupported(value, raw) {
  const canonical = (input) => String(input || '').toLowerCase().replace(/\brs\.?\s*/g, '₹').replace(/\binr\s*/g, '₹').replace(/[–—−]/g, '-').replaceAll(',', '').replace(/\bpercent\b/g, '%').replace(/\blakhs?\b/g, 'lakh').replace(/\bcrores?\b/g, 'crore').replace(/\byears?\b/g, 'year').replace(/\bmonths?\b/g, 'month').replace(/\s+/g, '');
  const targetText = canonical(value);
  const sourceText = canonical(raw);
  if (targetText && /₹|\$|%|lpa|lakh|crore|year|month|week|day|hour|vacanc|student|job|applicant|seat/i.test(targetText) && !sourceText.includes(targetText)) return false;
  const target = numericTokens(value);
  const source = numericTokens(raw);
  if (target.length === 1) {
    const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
    const range = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)?\s*(${number})\s*(?:[-–—]|\bto\b)\s*(${number})(?:\s*(lpa|lakhs?|crores?|l|%|percent|years?|months?|weeks?|days?|hours?))?`, 'gi');
    for (const match of String(raw || '').matchAll(range)) {
      const values = [Number(match[1].replaceAll(',', '')), Number(match[2].replaceAll(',', ''))];
      if (values.includes(target[0])) return false;
    }
  }
  const hasContiguousNumbers = target.length > 0 && source.some((_, index) => target.every((number, offset) => source[index + offset] === number));
  if (!hasContiguousNumbers) return false;
  const unit = String(value || '').match(/%|\bpercent\b|\blpa\b|\bl\b|\blakhs?\b|\bcrores?\b|\byears?\b|\bmonths?\b|\bweeks?\b|\bdays?\b|\bhours?\b|\bvacancies\b|\bstudents?\b|\bjobs?\b|\bapplicants?\b|\bseats?\b/i)?.[0]?.toLowerCase();
  if (unit) {
    const unitPattern = unit === '%' || unit === 'percent' ? /%|\bpercent\b/i
      : unit === 'lpa' || unit.startsWith('lakh') ? /\blpa\b|\blakhs?\b|\blakh\s+per\s+annum\b/i
        : unit.startsWith('crore') ? /\bcrores?\b/i
          : new RegExp(`\\b${unit.replace(/s$/, '')}s?\\b`, 'i');
    if (!unitPattern.test(String(raw || ''))) return false;
  }
  if (/(?:₹|\b(?:rs\.?|inr)\b|\$)/i.test(String(value || '')) && !/(?:₹|\b(?:rs\.?|inr)\b|\$)/i.test(String(raw || ''))) return false;
  return true;
}
function quotedLead(value) { return String(value || '').match(/^['"]([^'"]{3,40})['"]/u)?.[1] || ''; }
function groundedHeading(value) { return /\bfit\b.{0,60}\b(?:checkable|problem|question)\b/i.test(value) ? 'Check the Fit' : ''; }
function itemsFromNeed(need, data) { if (need.type === 'matrix') { const table = tableRows(need.exact_page_content_to_use); return table.rows.map((row) => ({ text: row.join(' — '), raw: row.join(' — '), heading: row[0] })); } if (need.type === 'proof') { const section = sectionForNeed(need, data); const sectionFacts = section?.facts || []; const used = new Set(); return need.exact_page_content_to_use.split('|').map((value) => clean(value)).filter(Boolean).map((value) => { const target = numericTokens(value); const match = sectionFacts.find((fact) => { if (used.has(keyFor(fact))) return false; const raw = clean(fact.raw); if (raw.toLowerCase().includes(value.toLowerCase()) && (!target.length || figureValueSupported(value, raw))) return true; return target.length > 0 && figureValueSupported(value, raw); }); if (match) used.add(keyFor(match)); return match; }).filter(Boolean); } if (need.type === 'detail') { const section = sectionForNeed(need, data); if (section?.facts?.length) return section.facts.slice(0, 3); const raw = clean(need.exact_page_content_to_use).replace(/^(?:Three practical points about .*?:|Key facts from .*? section \d+|Evidence from .*?:|Key ideas from .*?:)\s*/i, '').trim(); return raw.split(/(?<=[.!?])\s+|\s*##\s*/).map((value) => ({ raw: value, text: sentence(value, 100) || value, heading: need.section_title })).filter((item) => item.text); } const raw = clean(need.exact_page_content_to_use).replace(/^(?:Evidence from .*?:|Key ideas from .*?:)\s*/i, '').trim(); return raw.split(/\s*##\s*/).map((value) => ({ raw: value, text: sentence(value, 100) || value, heading: need.section_title })).filter((item) => item.text); }
function sectionForNeed(need, data) {
  const normalize = (value) => clean(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const byId = data.sections.find((item) => item.id && item.id === need.section_id);
  if (byId) return byId;
  const key = normalize(need.section_title);
  const exact = data.sections.find((item) => normalize(item.title) === key);
  if (exact) return exact;
  const keyWords = new Set(key.split(/\s+/).filter((word) => word.length > 2));
  if (keyWords.size < 2) return null;
  const ranked = data.sections.map((section) => {
    const words = new Set(normalize(section.title).split(/\s+/).filter((word) => word.length > 2));
    const shared = [...keyWords].filter((word) => words.has(word)).length;
    const score = shared / Math.max(1, Math.min(keyWords.size, words.size));
    return { section, shared, score };
  }).sort((a, b) => b.score - a.score || b.shared - a.shared);
  return ranked[0]?.shared >= 2 && ranked[0].score >= 0.5 ? ranked[0].section : null;
}
function needBlock(need, data, topic = 'Career Guidance') {
  const sourceHeading = clean(need.section_title) || 'Article section';
  const heading = completeShortHeading(shortHeading(sourceHeading, compactTopic(topic)), compactTopic(topic));
  if (need.type === 'matrix') {
    const raw = need.exact_page_content_to_use;
    const sourceColumns = tableColumns(raw, Infinity).map(compactTableHeader);
    const context = `${sourceHeading} ${topic}`.toLowerCase();
    const sourceRows = fullTableRows(raw, Infinity).map((row) => row.map((cell) => {
      const value = clean(cell);
      if (!/^entry route$/i.test(value)) return value;
      if (/bank|recruit|public sector/i.test(context)) return 'Hiring route';
      if (/psychology|psychiatry|mortuary|forensic|clinical/i.test(context)) return 'Training path';
      return 'Entry requirements';
    }));
    const columnGroups = [];
    if (sourceColumns.length <= 3) columnGroups.push(sourceColumns.map((_, index) => index));
    else {
      columnGroups.push([0, 1, 2]);
      for (let start = 3; start < sourceColumns.length; start += 2) columnGroups.push([0, ...Array.from({ length: Math.min(2, sourceColumns.length - start) }, (_, offset) => start + offset)]);
    }
    const tables = [];
    const sourceTables = [];
    for (const indexes of columnGroups) {
      const columns = indexes.map((index) => sourceColumns[index]);
      const compactCandidates = sourceRows.map((row, sourceIndex) => ({
        sourceIndex,
        row: indexes.map((index) => {
        const cell = clean(row[index] || '');
        if (!cell) return '';
        return safeTableCell(cell);
        }),
      }));
      const compactRows = compactCandidates.filter(({ row }) => row.length === columns.length && row.every((cell) => cell));
      const compactIndexes = new Set(compactRows.map(({ sourceIndex }) => sourceIndex));
      const omittedRows = sourceRows
        .map((row, sourceIndex) => ({ sourceIndex, row: indexes.map((index) => clean(row[index] || '')) }))
        .filter(({ sourceIndex, row }) => !compactIndexes.has(sourceIndex) && row.every((cell) => cell));
      for (let index = 0; index < compactRows.length; index += 4) {
        tables.push({ columns, rows: compactRows.slice(index, index + 4).map(({ row }) => row) });
      }
      for (let index = 0; index < omittedRows.length; index += 4) {
        sourceTables.push({ columns, rows: omittedRows.slice(index, index + 4).map(({ row }) => row) });
      }
    }

    const primary = tables[0];
    return primary
      ? { needId: need.section_id, type: need.type, heading, sourceSectionTitle: sourceHeading, kind: 'table', columns: primary.columns, rows: primary.rows, tables, ...(sourceTables.length ? { sourceTables } : {}) }
      : sourceTables.length
        ? { needId: need.section_id, type: need.type, heading, sourceSectionTitle: sourceHeading, kind: 'table', columns: sourceTables[0].columns, rows: [], tables: [], sourceTables }
        : { needId: need.section_id, type: need.type, heading, items: [{ heading: '', text: clean(raw) }] };
  }
  if (need.type === 'proof') {
    let facts = itemsFromNeed(need, data);
    if (!facts.length) { const sectionFacts = sectionForNeed(need, data)?.facts || []; const localNumberFacts = sectionFacts.filter((item) => /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)/i.test(item.raw)); const sources = localNumberFacts; facts = sources.filter((item) => /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)/i.test(item.raw)); }
    const sectionEvidence = sectionForNeed(need, data)?.facts || [];
    const pageEvidence = (data.facts || []).filter((fact) => fact && clean(fact.raw || fact.text));
    const evidence = [...sectionEvidence, ...pageEvidence.filter((fact) => !sectionEvidence.some((sectionFact) => keyFor(sectionFact) === keyFor(fact)))];
    const requestedFigures = need.exact_page_content_to_use.split('|').map((value) => clean(value)).filter((value) => numericTokens(value).length);
    const figuresFromExactContent = requestedFigures.map((value) => {
      const sourceFact = evidence.find((fact) => {
        const completeValue = expandFigureValue(value, fact.raw);
        return figureValueSupported(completeValue, fact.raw);
      });
      if (!sourceFact) return null;
      const source = clean(sourceFact.raw);
      const completeValue = expandFigureValue(value, source);
      const targets = numericTokens(completeValue);
      const firstTarget = targets[0];
      const sourceNumbers = [...source.matchAll(/(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?/g)];
      const sourceNumberMatch = sourceNumbers.find((match) => Number(match[0].replaceAll(',', '')) === firstTarget);
      const index = sourceNumberMatch?.index ?? 0;
      const local = source.slice(Math.max(0, index - 65), Math.min(source.length, index + completeValue.length + 65)).toLowerCase();
      const immediate = source.slice(Math.max(0, index - 28), Math.min(source.length, index + completeValue.length + 34)).toLowerCase();
      const previousSourceNumber = sourceNumbers.filter((match) => match.index < index).at(-1);
      const nextSourceNumber = sourceNumbers.find((match) => match.index > index);
      const numberEnd = index + (sourceNumberMatch?.[0].length || 0);
      const immediateBefore = source.slice(previousSourceNumber ? previousSourceNumber.index + previousSourceNumber[0].length : Math.max(0, index - 100), index).toLowerCase();
      const immediateAfter = source.slice(numberEnd, nextSourceNumber?.index ?? Math.min(source.length, numberEnd + 120)).toLowerCase();
      const beforeNumber = source.slice(Math.max(0, index - 130), index).toLowerCase();
      const afterNumber = source.slice(index + completeValue.length, Math.min(source.length, index + completeValue.length + 100)).toLowerCase();
      const figureContext = `${beforeNumber} ${completeValue} ${afterNumber}`;
      const requestedFigureKey = normalizeFigureKey(completeValue);
      const guessed = figuresFromItem({ ...sourceFact, heading: need.section_title })
        .find((figure) => normalizeFigureKey(figure.value) === requestedFigureKey) || null;
      let label = guessed?.label || '';
      const percentValue = /%|percent/i.test(completeValue);
      const durationValue = /\b(?:years?|months?|weeks?|days?|hours?)\b/i.test(completeValue);
      const currencyValue = /[₹$]|\b(?:rs\.?|inr|lpa)\b/i.test(completeValue);
      const clientLabel = percentValue ? clientMixShareLabel(source, index) : '';
      if (currencyValue && /(?:entry.level reporters?|journalists?|newsrooms?)/i.test(immediateBefore) && /(?:entry pay|pay|salary|month)/i.test(immediateAfter + immediateBefore) && /month/i.test(immediateAfter)) label = 'Entry Level Newsroom Pay';
      else if (currencyValue && /civil services|upsc/i.test(source) && /starts? near|starting/i.test(immediateBefore) && /pay level/i.test(immediateAfter)) label = 'Civil Services Starting Basic Pay';
      else if (currencyValue && /pay levels?\s+10\s*[-–]\s*17/i.test(local) && /rising to/i.test(immediateBefore)) label = 'Civil Services Pay Ceiling';
      else if (currencyValue && /birac.{0,50}innovation fund|innovation fund.{0,50}birac/i.test(figureContext)) label = 'BIRAC Innovation Fund';
      else if (currencyValue && /advertising|groupm|dentsu|digital ad(?:vertising)? market/i.test(figureContext) && /market|economy|industry|spend|estimate/i.test(figureContext)) label = 'Advertising Market Size';
      if (currencyValue && /illustration,? not a real fee|education budget example|worked example/i.test(source)) {
        if (/main course/i.test(immediateAfter)) label = 'Main Course Fee Allocation';
        else if (/serious caution/i.test(immediateAfter)) label = 'Caution Threshold';
        else if (/education budget/i.test(immediateAfter)) label = 'Illustrative Education Budget';
      }
      else if (currencyValue && /public relations|\bpr industry\b/i.test(figureContext) && /projected to (?:touch|reach|hit|exceed)|forecast to (?:reach|hit|exceed)/i.test(beforeNumber)) {
        const year = afterNumber.match(/\bby\s+(20\d{2})\b/i)?.[1] || source.match(/\bby\s+(20\d{2})\b/i)?.[1];
        label = year ? `Projected PR Industry Revenue by ${year}` : 'Projected PR Industry Revenue';
      } else if (currencyValue && /public relations|\bpr industry\b/i.test(figureContext) && /revenue|crossed|reach(?:ed)?|grew|industry alone/i.test(figureContext)) label = 'PR Industry Revenue';
      if (currencyValue && /\bbudget\b/i.test(source)) {
        if (/caution|warning|red flag/i.test(immediateAfter)) label = 'Budget Warning Threshold';
        else if (/\b(?:a fifth|one fifth|20\s*%|20 percent)\b/i.test(immediateBefore)) label = 'One-Fifth Budget Share';
        else if (/main course|degree fee|course fee|for the degree|for the credential/i.test(immediateAfter)) label = 'Main Course Fee Allocation';
        else if (/the rest|remaining|living costs|tools,? practice|future learning|reserve/i.test(immediateAfter)) label = 'Remaining Education Budget';
        else if (/education budget|rupee budget/i.test(immediateAfter) || /education budget/i.test(immediateBefore)) label = 'Education Budget Amount';
      }
      if (currencyValue && label) {
        // Keep the meaning inferred from the exact matching figure sentence.
      } else if (percentValue) {
        const specificPercentageLabel = clientLabel || percentageContextLabel(`${immediate} ${local}`, completeValue);
        if (specificPercentageLabel === '__OMIT__') return null;
        if (specificPercentageLabel) label = specificPercentageLabel;
        else if (/ca\s+final/i.test(immediate) && /pass|clear/i.test(local)) label = 'CA Final Pass Rate';
        else if (/upsc civil services/i.test(immediate) && /select/i.test(local)) label = 'UPSC Selection Rate';
        else if (/employers?\s+(?:reported|reporting)|difficulty finding skilled/i.test(immediate) && /workers?|talent|skilled/i.test(local)) label = 'Employers Reporting Hiring Difficulty';
        else if (/ai.{0,45}tasks|tasks.{0,45}ai/i.test(local)) label = 'Engineering Tasks Touched by AI';
        else if (/btech enrolment/i.test(local) && /jump|growth|increase/i.test(local)) label = 'BTech Enrolment Growth';
        else if (/engineering graduates/i.test(immediate) && /left college without|no relevant job|no relevant internship/i.test(local)) label = 'Graduates Without Relevant Work';
        else if (/education budget/i.test(source) && /spending above/i.test(source.slice(0, index).toLowerCase()) && /red flag/i.test(source)) label = 'Budget Warning Threshold';
        else if (/\bbudget\b/i.test(source) && /caution|warning|red flag|spending above|above roughly/i.test(immediateAfter)) label = 'Budget Warning Threshold';
        else if (/education budget/i.test(source) && /spending above|budget share|percentage of (?:the )?budget/i.test(source)) label = 'Education Budget Share';
        else if (/vacanc/i.test(immediate) && /reserves?|reservation|quota/i.test(source)) label = 'Reserved Vacancy Share';
        else if (/vacanc/i.test(immediate)) label = /(?:down|declin|fell|drop|decreas)/i.test(local) && !/vacancy rate/i.test(local) ? 'Hiring Demand Decline' : 'Vacancy Rate';
        else if (/seats?/i.test(immediate)) label = 'Course Seat Share';
        else if (/eligib|qualif|benchmark|minimum|threshold/i.test(immediate)) label = 'Benchmark Eligibility Threshold';
        else if (/interest|concession|subsid/i.test(source)) label = 'Interest Rate Concession';
        else if (/budget|allocation|allocated/i.test(immediate)) label = 'Education Budget Share';
        else if (/pass rates?/i.test(source)) label = 'Exam Pass Rate';
        else if (/employab/i.test(source)) label = 'Graduate Employability Rate';
        else if (/vacanc/i.test(source)) label = /(?:down|declin|fell|drop|decreas)/i.test(source) ? 'Hiring Demand Decline' : 'Vacancy Rate';
        else label = guessed?.label && !/count|pay|cost|fee|salary|budget example|reported percentage/i.test(guessed.label) ? guessed.label : 'Reported Percentage';
        if (/\bbudget\b/i.test(source) && /20\s*%|20 percent/i.test(completeValue) && /caution|warning|spending above|red flag/i.test(immediateAfter)) label = 'Budget Warning Threshold';
      } else if (durationValue) {
        if (/qualification path|qualification runway|through .*? exams|articleship|full route/i.test(source)) label = 'Qualification Time Window';
        else if (/notice period|notice policy|notice requirement|shortfall|buyout/i.test(source)) label = 'Notice Period';
        else if (/promotion|advance|officer cadre|career ladder/i.test(source)) label = 'Promotion Timeline';
        else if (/course|degree|program|programme|duration|diploma|qualification|training|bootcamp/i.test(source)) label = 'Total Course Duration';
        else if (/experience|work history/i.test(source)) label = 'Relevant Experience Window';
        else label = guessed?.label && /window|period|duration|time|experience|shift|commitment/i.test(guessed.label) ? guessed.label : 'Estimated Time Required';
      } else if ((currencyValue || /\b(?:lakh|crore|million|billion)\b/i.test(completeValue)) && /illustration,? not a real fee|education budget example|worked example/i.test(source) && /main course/i.test(immediateAfter)) label = 'Main Course Fee Allocation';
      else if ((currencyValue || /\b(?:lakh|crore|million|billion)\b/i.test(completeValue)) && /illustration,? not a real fee|education budget example|worked example/i.test(source) && /serious caution/i.test(immediateAfter)) label = 'Caution Threshold';
      else if ((currencyValue || /\b(?:lakh|crore|million|billion)\b/i.test(completeValue)) && /illustration,? not a real fee|education budget example|worked example/i.test(source) && /budget/i.test(source)) label = 'Illustrative Education Budget';
      else if ((currencyValue || /\b(?:lakh|crore|million|billion)\b/i.test(completeValue)) && /toward the credential itself|toward credential|main course fee|degree fee/i.test(immediate)) label = 'Suggested Credential Budget';
      else if ((currencyValue || /\b(?:lakh|crore|million|billion)\b/i.test(completeValue)) && /education budget/i.test(local)) label = 'Education Budget Amount';
      else if (currencyValue && /total spend|total cost|overall cost|cost commonly runs/i.test(source) && /abroad|tuition|living costs/i.test(source)) label = 'Study Abroad Cost';
      else if (currencyValue && /(?:private college|college|tuition|course|degree).{0,40}(?:fee|cost|seat running)|(?:fee|cost|tuition).{0,40}(?:college|course|degree)|four years/i.test(immediate) && !/(?:salary|pay|income|earn|education budget)/i.test(immediate)) label = /four years/i.test(immediate) ? 'Four-Year College Fee' : 'Course Fee';
      else if (!label && currencyValue && /projected to (?:touch|reach|hit|exceed)|forecast to (?:reach|hit|exceed)/i.test(immediate) && /industry|market|sector|public relations|advertising/i.test(immediate)) {
        const year = source.match(/\bby\s+(20\d{2})\b/i)?.[1];
        label = year ? 'Projected Industry Revenue by ' + year : 'Projected Industry Revenue';
      } else if (currencyValue && /(?:fresher|entry[- ]level|starting|starts? around|salary|pay|earns?|earning)/i.test(immediate)) label = /fresher|entry[- ]level|starting|starts? around/i.test(immediate) ? 'Entry Level Pay' : 'Typical Salary Range';
      else if (/outlay|allocation/i.test(local) && currencyValue) label = 'Programme Scheme Outlay';
      else if (/investment|invested/i.test(local) && currencyValue) label = 'Total Investment Value';
      else if (/btech enrolment|enrolment (?:hit|reached)/i.test(immediate)) label = 'BTech Enrolment';
      else if (/approved intake capacity|intake capacity/i.test(local)) label = /projected/i.test(local) ? 'Projected Approved Seat Capacity' : 'Approved Seat Capacity';
      else if (/capacity/i.test(local)) label = 'Annual Production Capacity';
      else if (/wild|traded medicinal species/i.test(local) && percentValue) label = 'Wild-Sourced Supply Share';
      else if (currencyValue && /(?:starting gross salary|starting salary|salary range|salary curve|average total pay|average agent income|fresher pay|entry-level pay|adds roughly .*?lpa)/i.test(source)) label = /entry-level pay|fresher pay/i.test(source) ? 'Entry Level Pay' : 'Typical Salary Range';
      else if (currencyValue && /per paper|same subject through/i.test(source)) label = 'Exam Paper Fee';
      else if (currencyValue && /(?:national target|2030 goal|government.?s own goal)/i.test(source)) label = 'National 2030 Goal';
      else if (currencyValue && /extra income|additional income/i.test(source) && /\b(?:year|annual|per year)\b/i.test(source)) label = 'Additional Annual Income';
      else if (!percentValue && !durationValue && !currencyValue && /\bcandidates?\s+(?:tested|assessed|surveyed)\b|\b(?:tested|assessed|surveyed)\s+(?:a\s+)?(?:sample\s+of\s+)?[\d,.]+\s*(?:lakh|million|thousand)?\s*candidates?\b/i.test(source)) label = 'Candidates Assessed';
      else if (!percentValue && !durationValue && !currencyValue && /\bpeople applied\b|\bcandidates? appeared\b|\bapplicants?\b/i.test(source)) label = 'Exam Candidate Count';
      else if (!percentValue && !durationValue && !currencyValue && /\b(?:msme|enterprises?)\b/i.test(source) && /registered/i.test(source)) label = 'Registered Enterprise Count';
      else if (!percentValue && !durationValue && /budget/i.test(source) && /\b(?:lakh|crore|million|billion)\b/i.test(completeValue)) label = 'Education Budget Amount';
      else if (durationValue && /(?:start earning|need to earn|earning within|income within)/i.test(source)) label = 'Earning Decision Window';
      else if (durationValue && /(?:from bootcamp finish to hire|finish to hire|time to hire)/i.test(source)) label = 'Hiring Transition Window';
      if (percentValue) {
        if (/ca\s+final/i.test(local) && /pass|clear/i.test(local)) label = 'CA Final Pass Rate';
        else if (/upsc civil services/i.test(local) && /select/i.test(local)) label = 'UPSC Selection Rate';
        else if (/ai.{0,45}tasks|tasks.{0,45}ai/i.test(local)) label = 'Engineering Tasks Touched by AI';
    else if (/btech enrolment/i.test(local) && /jump|growth|increase/i.test(local)) label = 'BTech Enrolment Growth';
    else if (/engineering graduates/i.test(local) && /left college without|no relevant job|no relevant internship/i.test(local)) label = 'Graduates Without Relevant Work';
        else if (/employers?\s+(?:reported|reporting)|difficulty finding skilled/i.test(local) && /workers?|talent|skilled/i.test(local)) label = 'Employers Reporting Hiring Difficulty';
        if (label === 'Reported Percentage') return null;
      }
      if (!currencyValue && /candidates?\s+(?:tested|assessed|surveyed)/i.test(local)) label = 'Candidates Assessed';
      if (currencyValue && !label) label = 'Reported Amount';
      if (label === 'Reported Amount' && currencyValue && /digital ad spend|digital advertising spend/i.test(source)) label = 'Digital Advertising Spend Forecast';
      else if (label === 'Reported Amount' && currencyValue && /public relations|\bpr market\b|\bpr industry\b/i.test(source)) {
        if (/projected/i.test(immediateBefore)) {
          const year = immediateAfter.match(/\bby\s+(20\d{2})\b/i)?.[1] || source.match(/\bby\s+(20\d{2})\b/i)?.[1];
          label = year ? `Projected PR Industry Revenue by ${year}` : 'Projected PR Industry Revenue';
        } else if (/revenue|crossed|reach(?:ed)?|grew/i.test(`${immediateBefore} ${immediateAfter}`)) label = 'PR Industry Revenue';
        else label = 'PR Industry Market Size';
      }
      else if (label === 'Reported Amount' && currencyValue && /certificate course|certificate spend|recorded course/i.test(source)) label = 'Certificate Course Price';
      if (!label || label === 'Reported Percentage' || label === 'Reported Amount') return null;
      return { value: completeValue.replace(/^rs\.?\s*/i, '₹').replace(/^inr\s*/i, '₹').replace(/[.,]+$/, ''), label, source, text: source };
    }).filter(Boolean);
    const requestedNumbers = numericTokens(need.exact_page_content_to_use || '');
    const sourceDerivedFigures = sectionEvidence
      .flatMap((fact) => figuresFromItem(fact))
      .filter((figure) => figure.source && figureValueSupported(figure.value, figure.source))
      .filter((figure) => requestedNumbers.some((number) => numericTokens(figure.value).includes(number)))
      .map((figure) => {
        if (!/^(?:typical salary range|reported amount|total job count)$/i.test(figure.label || '')) return figure;
        const contextLabel = clean(figure.source
          .replace(/(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+(?:\s*[-–—]\s*[\d,.]+)?\s*(?:lpa|lakhs?|crores?|l|thousand|million|billion)?/gi, ' ')
          .replace(/\s+/g, ' ')
          .replace(/^[,.:;\s]+|[,.:;\s]+$/g, ''));
        return words(contextLabel).length > 0 && words(contextLabel).length <= 7
          ? { ...figure, label: contextLabel }
          : figure;
      });
    const figures = (requestedFigures.length ? [...figuresFromExactContent, ...sourceDerivedFigures] : facts.map(figureFromItem).filter(Boolean))
      .filter((item) => item.source && figureValueSupported(item.value, item.source))
      .filter((item) => item.label !== 'Reported Percentage' && item.label !== 'Reported Amount')
      .filter((item, index, all) => {
        const genericLabel = /^(?:typical salary range|india salary range|reported amount|total job count)$/i;
        if (!genericLabel.test(item.label || '')) return true;
        const valueKey = normalizeFigureKey(item.value);
        return !all.slice(0, index).some((prior) => normalizeFigureKey(prior.value) === valueKey && genericLabel.test(prior.label || ''));
      })
      .filter((item, index, all) => all.findIndex((other) => other.value === item.value && other.label === item.label) === index)
      .map((figure) => {
        if (!/^(?:typical salary range|reported amount|total job count)$/i.test(figure.label || '')) return figure;
        const contextLabel = clean(figure.source
          .replace(/(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+(?:\s*[-–—]\s*[\d,.]+)?\s*(?:lpa|lakhs?|crores?|l|thousand|million|billion)?/gi, ' ')
          .replace(/\s+/g, ' ')
          .replace(/^[,.:;\s]+|[,.:;\s]+$/g, ''));
        return words(contextLabel).length > 0 && words(contextLabel).length <= 7
          ? { ...figure, label: contextLabel }
          : figure;
      });
    if (figures.length) return { needId: need.section_id, type: need.type, heading, kind: 'figures', figures };
    const items = facts.slice(0, 3).map((item) => ({ heading: '', text: item.text || item.raw }));
    return { needId: need.section_id, type: need.type, heading, kind: 'items', items: items.length ? items : [{ heading: '', text: clean(need.exact_page_content_to_use) }] };
  }
  const items = itemsFromNeed(need, data);
  const selected = need.type === 'detail' ? items.slice(0, 3) : items;
  const contentItems = selected.map((item) => ({ heading: '', text: item.text || item.raw }));
  return { needId: need.section_id, type: need.type, heading, kind: 'items', items: contentItems.length ? contentItems : [{ heading: '', text: clean(need.exact_page_content_to_use) }] };
}
function visualCaption(type, index) {
  const options = {
    hero: ['A starting point for comparing routes.'],
    summary: ['Key points at a glance.'],
    matrix: ['Compare the listed options.', 'Compare another set of options.'],
    proof: ['Figures and their source notes.', 'Additional figures and sources.'],
    checklist: ['Questions to use before deciding.', 'Further questions to consider.'],
    chain: ['Steps in the order they happen.', 'The next steps in sequence.'],
    detail: ['More context from the article.', 'Further context for this section.', 'Another useful detail from the source.'],
  };
  const captions = options[type] || ['Context from the article.'];
  return captions[index % captions.length];
}
function dedupeVisualContent(visuals, fallbackText = []) {
  const priority = { hero: 0, matrix: 1, proof: 2, checklist: 3, chain: 3, detail: 4, summary: 5 };
  const seen = new Set();
  const seenPhrases = new Set();
  const seenFigures = new Map();
  const seenFigureValues = new Set();
  const normalize = (text) => text.toLowerCase().replace(/(?:₹|\b(?:rs\.?|inr)\b|\$)/gi, ' ').replace(/[^\p{L}\p{N}%]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const phraseNormalize = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}₹%]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const figureValueKey = (value) => normalizeFigureKey(value);
  const figureContentKey = (figure) => `${figureValueKey(figure?.value)}|${figureFamily(figure?.label)}`;
  const fiveWordPhrases = (normalized) => {
    const tokens = normalized.split(' ').filter(Boolean);
    const phrases = [];
    for (let i = 0; i <= tokens.length - 5; i += 1) phrases.push(tokens.slice(i, i + 5).join(' '));
    return phrases;
  };
  const reserve = (text) => {
    const normalized = normalize(text);
    if (normalized.split(' ').length >= 5) {
      seen.add(normalized);
      for (const phrase of fiveWordPhrases(phraseNormalize(text))) seenPhrases.add(phrase);
    }
  };
  const figureNumbers = (value) => (String(value || '').match(/\d+(?:,\d{3})*(?:\.\d+)?/g) || []).map((item) => Number(item.replaceAll(',', '')));
  const rememberFigure = (figure) => {
    const label = normalize(figure?.label || '');
    const values = figureNumbers(figure?.value);
    if (!label || !values.length) return;
    seenFigureValues.add(figureContentKey(figure));
    if (!seenFigures.has(label)) seenFigures.set(label, new Set());
    for (const value of values) seenFigures.get(label).add(value);
  };
  const hasBody = (value, key = '') => {
    if (typeof value === 'string') return Boolean(value.trim()) && !['sourceSectionId', 'needId', 'sourceNeedIndex', 'kind', 'heading', 'caption', 'alt', 'title'].includes(key);
    if (Array.isArray(value)) return value.some((item) => hasBody(item, key));
    if (value && typeof value === 'object') return Object.entries(value).some(([childKey, child]) => hasBody(child, childKey));
    return false;
  };
  const visit = (value, key = '') => {
    if (typeof value === 'string') {
      if (key === 'heading') {
        const phrases = fiveWordPhrases(phraseNormalize(value));
        if (phrases.some((phrase) => seenPhrases.has(phrase))) return null;
        reserve(value);
        return value;
      }
     if (['heading', 'caption', 'alt', 'title', 'label', 'columns', 'source', 'sourceSectionId', 'sourceSectionTitle', 'needId', 'sourceNeedIndex'].includes(key)) return value;
      const uniqueParts = [];
      for (const part of sentenceParts(value)) {
        const normalized = normalize(part);
        const wordCount = normalized ? normalized.split(' ').length : 0;
        if (wordCount < 5) { uniqueParts.push(part); continue; }
        const phrases = fiveWordPhrases(phraseNormalize(part));
        const repeatedPhrases = phrases.filter((phrase) => seenPhrases.has(phrase)).length;
        const duplicate = seen.has(normalized) || repeatedPhrases > 0;
        if (!duplicate) {
          uniqueParts.push(part);
          reserve(part);
        }
      }
      return uniqueParts.length ? uniqueParts.join(' ') : null;
    }
    if (Array.isArray(value)) {
      // Preserve complete table data, but reserve it before later cards so
      // their prose cannot repeat phrases already shown in a comparison table.
      if (key === 'rows') {
        for (const row of value) for (const cell of row || []) reserve(cell || '');
        return value;
      }
      if (key === 'columns') {
        for (const column of value) reserve(column || '');
        return value;
      }
      if (key === 'figures') {
        return value.filter((figure) => {
          const label = normalize(figure?.label || '');
          const values = figureNumbers(figure?.value);
          const known = seenFigures.get(label);
          const valueKey = figureContentKey(figure);
          if ((valueKey && seenFigureValues.has(valueKey)) || (known && values.length && values.every((number) => known.has(number)))) return false;
          rememberFigure(figure);
          return true;
        }).map((figure) => visit(figure, 'figure')).filter((item) => item !== null);
      }
      const result = value.map((item) => {
        const next = visit(item, key);
        return next;
      }).filter((item) => item !== null);
      if (key === 'items') {
        return result.filter((item) => item?.text?.trim() || item?.heading?.trim());
      }
      if (key === 'blocks') {
        return result.filter((block) => block.items?.length
          || block.rows?.length
          || block.tables?.some((table) => table?.rows?.length)
          || block.sourceTables?.some((table) => table?.rows?.length)
          || block.figures?.length
          || block.steps?.length);
      }
      return result;
    }
    if (!value || typeof value !== 'object') return value;
    const result = {};
    for (const [childKey, child] of Object.entries(value)) {
      const next = visit(child, childKey);
      if (next !== null) result[childKey] = next;
    }
    if (key === 'items' && !result.text && !result.heading) return null;
    return result;
  };
  const ordered = [...visuals].sort((a, b) => (priority[a.type] ?? 6) - (priority[b.type] ?? 6));
  const headingAlternatives = {
    summary: ['Key Ideas at a Glance', 'Decision Points to Weigh', 'What Matters Before Choosing'],
    matrix: ['Compare the Practical Routes', 'Route Comparison at a Glance', 'Options Side by Side'],
    proof: ['Figures in Context', 'Evidence Behind the Numbers', 'Numbers to Keep in View'],
    checklist: ['Questions Before Choosing', 'A Short Self Check', 'Decision Questions to Ask'],
    chain: ['Steps in Sequence', 'A Practical Route', 'The Next Steps'],
    detail: ['Evidence to Keep in View', 'Context Behind the Choice', 'Useful Details to Weigh'],
  };
  for (const visual of ordered) {
    if (visual.type !== 'hero') {
      const headingPhrases = fiveWordPhrases(phraseNormalize(visual.heading || ''));
      if (headingPhrases.some((phrase) => seenPhrases.has(phrase))) {
        const replacement = (headingAlternatives[visual.type] || ['Useful Details to Weigh'])
          .find((candidate) => !fiveWordPhrases(phraseNormalize(candidate)).some((phrase) => seenPhrases.has(phrase)));
        if (replacement) visual.heading = replacement;
      }
      reserve(visual.heading || '');
    }
    if (!visual.content) continue;
    const original = visual.content;
    // The hero's figure source notes are not shown in the artwork. Reserve only
    // complete phrases actually drawn there; overlapping topic words are not
    // enough to discard a different article fact from a later visual.
    if (visual.type === 'hero') {
      reserve(visual.heading || '');
      reserve(original.answer || '');
      for (const line of original.supporting || []) reserve(line);
      for (const figure of original.figures || []) { reserve(figure.value || ''); reserve(figure.label || ''); rememberFigure(figure); }
      for (const item of original.items || []) { reserve(item.heading || ''); reserve(item.text || ''); }
      for (const row of original.rows || []) for (const cell of row || []) reserve(cell || '');
      for (const step of original.steps || []) reserve(step);
      continue;
    }
    const next = visit(original, 'content');
    visual.content = hasBody(next) ? next : null;
  }
  const kept = visuals.filter((visual) => visual.type === 'hero' || visual.content);
  const fallbackPool = [...new Set(fallbackText.flatMap((value) => sentenceParts(value)).map((part) => part.trim()).filter((part) => {
    const normalized = normalize(part);
    return normalized.split(' ').length >= 5 && !seen.has(normalized) && !isSharedPromoCopy(part);
  }))];
  if (kept.length < 4) {
    for (const visual of ordered) {
      if (kept.length >= 4) break;
      if (kept.includes(visual)) continue;
      const items = [];
      while (fallbackPool.length && items.length < 3) {
        const text = fallbackPool.shift();
        const normalized = normalize(text);
        if (seen.has(normalized)) continue;
        reserve(text);
        items.push({ heading: '', text });
      }
      // Keep the unique card slot only when it has a page-sourced fact. Never
      // restore duplicated copy just to satisfy the visual-count target.
      if (!items.length) continue;
      visual.content = { kind: 'items', items };
      kept.push(visual);
    }
  }
  visuals.splice(0, visuals.length, ...kept.slice(0, 5));
}
async function writeVisual(dir, slug, type, index, desktop, mobile, meta, social = null) {
  const suffix = index ? `-${String(index).padStart(2, '0')}` : '';
  const base = `${slug}-${type}${suffix}`;
  if (!metadataOnly && (type === 'hero' || !meta.content)) {
    await sharp(Buffer.from(desktop)).webp({ quality: 62, effort: 6 }).toFile(join(dir, `${base}.webp`));
    await sharp(Buffer.from(mobile)).webp({ quality: 60, effort: 6 }).toFile(join(dir, `${base}-mobile.webp`));
    if (social) await sharp(Buffer.from(social)).resize(1200, 630, { fit: 'fill' }).jpeg({ quality: 72, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
  }
  return { file: `${base}.webp`, mobile: `${base}-mobile.webp`, ...meta, caption: meta.caption || visualCaption(type, index, meta.heading) };
}
function altSentence(value) { const source = clean(value); const parts = sentenceParts(source); const chosen = []; let count = 0; for (const part of parts) { if (!/[.!?]$/.test(part)) continue; const size = visualWordCount(part); if (!size || size > 20 || count + size > 20) break; chosen.push(part); count += size; } const result = chosen.join(' ') || parts.find((part) => /[.!?]$/.test(part) && visualWordCount(part) <= 20) || ''; return result || 'Career planning visual with page-specific evidence.'; }
function uniqueAlt(value, used) { const base = altSentence(value).replace(/[.!?]+$/, '') || 'Editorial career visual'; let result = `${base}.`; let i = 2; while (used.has(result.toLowerCase())) result = `${base} (${i++}).`; used.add(result.toLowerCase()); return result; }
function liveSentence(value) { const source = clean(value).replace(/[:;,]+\s*$/, '').trim(); if (!source) return ''; return /[.!?]$/.test(source) ? source : `${source}.`; }

const needs = await loadNeeds(); const files = []; async function walkFiles(dir) { for (const entry of await readdir(dir, { withFileTypes: true })) { const full = join(dir, entry.name); if (entry.isDirectory()) await walkFiles(full); else if (entry.name === 'index.html') files.push(full); } } await walkFiles(DIST);
const selected = files.sort().filter((_, i) => i % shards === shard); let generated = 0; let visualCount = 0; const usedHeroAnswers = new Set();
for (const file of selected) {
  const route = `/${file.slice(DIST.length + 1).replaceAll('\\', '/').replace(/index\.html$/, '')}`; if (routeFilter && route !== routeFilter) continue; if (routeFilters.size && !routeFilters.has(route)) continue; const isBlog = /^\/blog\/[^/]+\/[^/]+\/$/.test(route); if (isBlog && excludedBlogRoutes.has(route)) continue; if (excludeAssessmentPages && route.startsWith('/services/assessments/')) continue; const isService = route.startsWith('/services/'); const isOther = route.startsWith('/career-resources/') || route.startsWith('/career-skills-compass/'); if (!isBlog && !(allServicePages && (isService || isOther))) continue;
  const html = await readFile(file, 'utf8'); if (html.includes('Redirecting from <code>') && html.includes('</body>')) continue; const parts = route.split('/').filter(Boolean); const slug = parts.at(-1); const category = isBlog ? parts[1] : parts.slice(0, -1).join('-'); const title = clean((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [, 'Career guide'])[1]); const edits = plainLanguageEdits.get(route) || []; const data = applyPlainLanguageEdits(pageData(html, isBlog), edits); attachSectionIds(data, html); const palette = palettes[hash(slug) % palettes.length]; const topic = topicOverrides.get(route) || topicFrom(title, slug); const dir = join(OUT, String(hash(`${category}/${slug}`)).padStart(10, '0'));
  await mkdir(dir, { recursive: true });
const pageNeeds = applyPlainLanguageEdits(needs.get(route) || [], edits); const used = new Set(); const usedPhrases = new Set(); const manifest = []; const altUsed = new Set(); const phraseKeysFor = (item) => [...phraseKeys(item?.text || item), ...phraseKeys(item?.raw || '')]; const markUsed = (item) => { used.add(keyFor(item)); for (const key of phraseKeysFor(item)) usedPhrases.add(key); }; for (const need of pageNeeds.filter((item) => item.type === 'matrix')) for (const row of fullTableRows(need.exact_page_content_to_use || '', Infinity)) for (const cell of row) for (const key of phraseKeys(cell)) usedPhrases.add(key); const take = (values, limit = 1, maxWords = 24) => values.map((value) => typeof value === 'string' ? { text: value, raw: value } : value).map((value) => ({ ...value, text: shortSentence(value.raw || value.text, maxWords) })).filter((value) => value?.text && words(value.text).length >= 5 && !isSharedPromoCopy(value.raw || value.text) && !used.has(keyFor(value)) && !phraseKeysFor(value).some((key) => usedPhrases.has(key))).filter((value, i, arr) => arr.findIndex((other) => keyFor(other) === keyFor(value)) === i).slice(0, limit).map((value) => { markUsed(value); return value; });
  const add = async (type, body, meta) => {
    const index = manifest.filter((item) => item.type === type).length;
    const headingOverride = visualHeadingOverrides.get(route)?.[type];
    const displayHeading = type === 'hero' ? headingOverride || heroTopic(meta.heading || topic, route) : headingOverride || completeShortHeading(shortHeading(balancedHeading(meta.heading || ''), compactTopic(topic)), compactTopic(topic));
    const captions = {
      summary: `Summary of ${displayHeading}.`,
      matrix: `Comparison of options covered in ${displayHeading}.`,
      chain: `Sequence of steps for ${displayHeading}.`,
      checklist: `Questions to check for ${displayHeading}.`,
      proof: `Figures cited in ${displayHeading}.`,
      detail: `Focused evidence about ${displayHeading}.`,
    };
    const displayMeta = { ...meta, heading: displayHeading, ...(captions[type] ? { caption: captions[type] } : {}) };
    const result = await writeVisual(dir, slug, type, index, body.desktop, body.mobile, { ...displayMeta, type, alt: uniqueAlt(displayMeta.alt || visualAlt(type, displayHeading, topic), altUsed), title: displayMeta.title || visualTitle(type, displayHeading, topic, title), ...(displayMeta.content ? { content: displayMeta.content } : {}) }, body.social || null);
    manifest.push(result);
    for (const key of phraseKeys(displayHeading || '')) usedPhrases.add(key);
  };
  const heroFacts = [...data.facts, ...data.sections.flatMap((section) => section.facts)];
  const heroAnswer = heroAnswerFromFacts(heroFacts, topic, usedHeroAnswers, usedPhrases);
  const shortAnswer = [...data.facts, ...data.sections.flatMap((section) => section.facts)]
    .map((item) => ({ item, text: sentenceParts(clean(item.raw || item.text)).find((part) => /[.!]$/.test(part) && words(part).length >= 5 && words(part).length <= 14 && !badEnd.has(lastWord(part))) || '' }))
    .find(({ item, text }) => text && item !== heroAnswer.item && !isSharedPromoCopy(text) && !phraseKeys(text).some((key) => usedPhrases.has(key)));
  const answerItem = heroAnswer.text && words(heroAnswer.text).length <= 14 ? heroAnswer.item : shortAnswer?.item || null;
  const locationSlug = route.match(/^\/services\/career-counselling-and-career-guidance\/locations\/career-counselling-in-([^/]+)\/$/)?.[1];
  const locationName = locationSlug ? titleCase(locationSlug.replaceAll('-', ' ')) : '';
  const locationAnswer = locationName ? `Compare ${locationName} options using course costs and hiring evidence.` : '';
  const answer = heroAnswerOverrides.get(route) || locationAnswer || (heroAnswer.text && words(heroAnswer.text).length <= 14 ? heroAnswer.text : shortAnswer?.text || '');
  if (answer) usedHeroAnswers.add(normalizeHeroAnswer(answer));
  if (answerItem && answer) markUsed({ ...answerItem, text: answer });
const supportedHeroFigureLabels = new Set(['Entry Level Pay', 'Senior-Level Salary Range', 'Salary Range Including Allowances', 'Daily Study Hours', 'Daily Sitting Time', 'Helpline Availability', 'Daily Free-Plan Limit', 'Post MBA Pay', 'Typical Salary Range', 'Freelance Day Rate', 'Monthly Internship Stipend', 'Monthly Fellowship Stipend', 'Monthly Articleship Stipend', 'Monthly Training Stipend', 'Monthly Stipend', 'Total Education Cost', 'Education Budget Example', 'Illustrative Education Budget', 'Education Budget Amount', 'Education Budget Share', 'One-Fifth Budget Share', 'Course Fee Above Budget Share', 'Budget Warning Threshold', 'Exam Registration Fee', 'Exam Paper Fee', 'Total Course Duration', 'Qualification Time Window', 'Estimated Time Required', 'Relevant Experience Window', 'Age Limit', 'Age Group', 'Fresher Age Limit', 'Experienced Age Limit', 'Survey Age Range', 'Proof Milestone Window', 'Income Transition Period', 'Example Project Duration', 'Platform Eligibility Window', 'Service Commitment Period', 'Notice Period', 'Pension Eligibility Period', 'MBA Pivot Intent', 'Post Study Work', 'Earning Decision Window', 'Hiring Transition Window', 'Available Course Seats', 'Course Seat Share', 'Reserved Vacancy Share', 'Vacancy Rate', 'Benchmark Eligibility Threshold', 'Interest Rate Concession', 'Education Loan Interest Rate', 'Reported Percentage', 'Total Exam Applicants', 'Exam Candidate Count', 'Registered Enterprise Count', 'Available Job Vacancies', 'Total Job Count', 'Annual Industry Revenue', 'PR Industry Revenue', 'Annual Export Value', 'Total Market Size', 'National 2030 Goal', 'Minimum Exam Marks', 'Exam Pass Rate', 'Graduate Employability Rate', 'Qualification Success Rate', 'Selection Funnel Rate', 'Fresher Share', 'Survey Response Share', 'Annual Traffic Growth', 'Hiring Demand Decline', 'Role Growth Rate', 'Industry Growth Rate', 'PR Industry Growth', 'Regional Market Share', 'Annual Staff Attrition', 'Skills Demand Gap', 'Additional Annual Income', 'Typical Deal Value', 'Education Loan Principal']);
const heroFigureIsSupported = (figure) => supportedHeroFigureLabels.has(figure.label) || /^(?:(?:TCS|Infosys|Wipro|HCLTech|Accenture|Cognizant|Capgemini|Tech Mahindra) (?:Employee Count|Staff Change)|Employees in Reskilling|Employee Count Reported|Staff Change Reported)$/.test(figure.label);
const budgetFigureTopic = `${title} ${slug}`;
const educationSpendContext = /education|course|college|degree|tuition|study abroad|mba|professional course|after graduation/i.test(budgetFigureTopic);
const explicitSpendTopic = /\b(?:cost|fees?|tuition|loan|budget|afford(?:ability)?|scholarships?|price|spending|spend|expensive)\b/i.test(budgetFigureTopic);
const budgetTopicExplicitlyExcludesFees = /not (?:a |the )?course fee|course fees? (?:are )?not/i.test(budgetFigureTopic);
const genericBudgetFigureLabel = (figure) => /\ban illustration,? not a real fee\b/i.test(figure.source || '')
  || /^(?:Education Budget Example|Illustrative Education Budget|Education Loan Principal|Education Budget Amount|Education Budget Share|Budget Warning Threshold|Remaining Education Budget|Main Course Fee Allocation|Caution Threshold)$/i.test(figure.label)
  || (figure.label === 'Course Fee Allocation' && /(?:total|full) education budget/i.test(figure.source || '') && /(?:₹|rs\.?\s*)\s*10\s*lakh/i.test(figure.source || '') && /(?:₹|rs\.?\s*)\s*1\s*lakh/i.test(figure.source || ''))
  || (figure.label === 'Total Education Cost' && /education budget|illustration,? not a real fee|education budget example|worked example/i.test(figure.source || ''));
const budgetFigureFitsTopic = (figure) => !genericBudgetFigureLabel(figure) || (educationSpendContext && explicitSpendTopic && !budgetTopicExplicitlyExcludesFees);
const heroFigurePool = [...data.numberFacts, ...data.facts, ...data.sections.flatMap((section) => section.facts)].flatMap(figuresFromItem);
const heroNumberFacts = heroFigurePool.filter((figure) => figure?.source && heroFigureIsSupported(figure) && budgetFigureFitsTopic(figure)).filter((figure, index, all) => all.findIndex((other) => other.value.replace(/[\s,]/g, '').toLowerCase() === figure.value.replace(/[\s,]/g, '').toLowerCase()) === index);
const routeHeroFigures = heroRouteFigureOverrides.get(route)?.map((override) => {
  const expectedNumbers = numericTokens(override.sourceValue || override.value).join('|');
  const normalizeSourceMatch = (value) => String(value || '').toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const phrase = normalizeSourceMatch(override.sourceIncludes);
  const sourceMatch = heroFigurePool.find((candidate) => candidate.source && (!phrase || normalizeSourceMatch(candidate.source).includes(phrase)) && expectedNumbers.split('|').every((token) => numericTokens(candidate.source).includes(Number(token))));
  const figure = heroFigurePool.find((candidate) => numericTokens(candidate.value).join('|') === expectedNumbers && candidate.source && (!phrase || normalizeSourceMatch(candidate.source).includes(phrase)));
  const source = figure?.source || sourceMatch?.source;
  return source ? { ...(figure || {}), value: override.value, label: override.label, source, text: source } : null;
}).filter(Boolean).filter(budgetFigureFitsTopic) || null;
const selectedHeroFigures = heroWithoutFigures.has(route) ? [] : routeHeroFigures || heroNumberFacts.filter((figure) => figure.source !== clean(answerItem?.raw || answerItem?.text || '') && ![figure.value, figure.label, figure.source].some((text) => phraseKeys(text).some((key) => usedPhrases.has(key)))).slice(0, 3);
  const figures = selectedHeroFigures.filter((figure) => {
    const source = String(figure.source || '');
    if (route === '/blog/career-options/career-after-civil-engineering-in-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('8-12 month') && /same 8-12 month structured window as GATE-PSU prep/i.test(source)) return false;
    if (route === '/blog/government-jobs/government-jobs-after-engineering-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('3 months') && /forums love a .*cleared it in 3 months.* success story/i.test(source)) return false;
    return true;
  });
  for (const figure of figures) {
    applyRouteDurationLabelCorrection(route, figure);
    markUsed({ raw: figure.source, text: figure.source });
  }
  let heroSupport = take(data.facts.filter((item) => item !== answerItem && !/[?]/.test(item.raw || item.text || '') && !/^(?:the focus here is on how to decide|real decisions are more specific)\.?$/i.test(clean(item.text || item.raw || '')) && !figures.some((figure) => figure.text && item.raw.includes(figure.text))), 1, 9);
  // heroRouteLabels already removes generic headings and labels that duplicate
  // the topic, answer, or support sentence. Filtering against every source
  // heading here rejected the very labels generated from those headings and
  // left most hero canvases with an unused lower half.
  const routeLabels = heroRouteLabels(data.headings.map((title) => ({ title })), topic, answer, heroSupport, route);
  const heroWordCount = () => visualWordCount([typeTopLabel('hero'), topic, answer, ...figures.flatMap((figure) => [figure.value, figure.label]), ...heroSupport.map((item) => item.text), ...(figures.length ? [] : routeLabels)].join(' '));
  while (heroWordCount() > 40 && heroSupport.length) heroSupport.pop();
  while (heroWordCount() > 40 && routeLabels.length) routeLabels.pop();
  while (heroWordCount() > 40 && figures.length > 1) figures.pop();
  if (answer) {
    for (const label of routeLabels) for (const key of phraseKeys(label)) usedPhrases.add(key);
    for (const key of phraseKeys(answer)) usedPhrases.add(key);
    for (const figure of figures) for (const value of [figure.value, figure.label]) {
      for (const key of phraseKeys(value || '')) usedPhrases.add(key);
    }
    const heroContent = figures.length ? { kind: 'figures', answer, figures, steps: routeLabels, supporting: [] } : routeLabels.length ? { kind: 'items', answer, items: [], steps: routeLabels, supporting: heroSupport.map((item) => item.text) } : { kind: 'items', answer, items: [], steps: [], supporting: heroSupport.map((item) => item.text) };
    if (preserveHero) {
      const previous = JSON.parse(await readFile(join(dir, 'index.json'), 'utf8'));
      const previousHero = (previous.visuals || []).find((visual) => visual.type === 'hero');
      if (previousHero) manifest.push(previousHero);
      else await add('hero', { desktop: heroVisual(answer, figures, topic, palette, DESKTOP, heroSupport, routeLabels, route), mobile: heroVisual(answer, figures, topic, palette, PHONE, heroSupport, routeLabels, route), social: socialHeroVisual(answer, figures, topic, palette, heroSupport, route) }, { alt: heroAlt(topic, answer, title, route), caption: `Career direction at a glance for ${compactTopic(topic)}.`, heading: topic, ...(heroContent ? { content: heroContent } : {}) });
    } else await add('hero', { desktop: heroVisual(answer, figures, topic, palette, DESKTOP, heroSupport, routeLabels, route), mobile: heroVisual(answer, figures, topic, palette, PHONE, heroSupport, routeLabels, route), social: socialHeroVisual(answer, figures, topic, palette, heroSupport, route) }, { alt: heroAlt(topic, answer, title, route), caption: `Career direction at a glance for ${compactTopic(topic)}.`, heading: topic, ...(heroContent ? { content: heroContent } : {}) });
    if (onlyHero) {
      const manifestPath = join(dir, 'index.json');
      const previous = JSON.parse(await readFile(manifestPath, 'utf8'));
      manifest.push(...(previous.visuals || []).filter((visual) => visual.type !== 'hero'));
      await writeManifest(manifestPath, JSON.stringify({ ...previous, visuals: manifest }, null, 2));
      visualCount += manifest.length;
      generated += 1;
      continue;
    }
  }
  const sectionItems = data.sections.slice(0, 3).flatMap((section) => section.facts.slice(0, 1)); let summaryItems = take(sectionItems.length ? sectionItems : data.facts, 3, 14); if (!summaryItems.length) { const fact = data.facts.map((source) => ({ source, text: sentenceParts(source.raw || source.text).find((part) => /[.!?]$/.test(part) && words(part).length >= 5 && words(part).length <= 26) || '' })).find(({ text }) => text && !phraseKeys(text).some((key) => usedPhrases.has(key))); const description = sentenceParts(data.description).find((part) => /[.!?]$/.test(part) && words(part).length >= 5 && words(part).length <= 26 && !phraseKeys(part).some((key) => usedPhrases.has(key))) || ''; const fallback = fact?.text || description; if (fallback) { const item = { text: fallback, raw: fallback }; summaryItems = [item]; markUsed(item); } } if (summaryItems.length < 3) summaryItems = [...summaryItems, ...take(data.facts, 3 - summaryItems.length, 14)]; if (summaryItems.length) { const summaryBase = shortHeading(isBlog ? contentHeading(summaryItems[0], topic) : pageContextHeading(contentHeading(summaryItems[0], topic), topic, slug), compactTopic(topic)); const summaryBasePhrases = new Set(phraseKeys(summaryBase)); const summaryRepeatsSource = phraseKeys(summaryItems[0].text).some((key) => summaryBasePhrases.has(key)); const alternateSummaryBase = data.headings.find((value) => value.toLowerCase() !== summaryBase.toLowerCase() && !isGenericVisualHeading(value) && !summaryItems.some((item) => phraseKeys(value).some((key) => phraseKeys(item.text).includes(key))) && !manifest.some((visual) => headingsSharePhrase(value, visual.heading))); const summaryNeedsAlternate = summaryRepeatsSource || manifest.some((visual) => headingsSharePhrase(summaryBase, visual.heading)); const distinctSummaryBase = summaryNeedsAlternate ? (alternateSummaryBase || ('Key ideas about ' + compactTopic(topic))) : summaryBase; let heading = uniqueVisualHeading(distinctSummaryBase, summaryItems[0], topic, 'summary', manifest); if (summaryItems.some((item) => phraseKeys(heading).some((key) => phraseKeys(item.text).includes(key)))) { const replacement = data.headings.find((value) => !isGenericVisualHeading(value) && !summaryItems.some((item) => headingsSharePhrase(value, item.text)) && !manifest.some((visual) => headingsSharePhrase(value, visual.heading))); heading = uniqueVisualHeading(shortHeading(replacement || 'What This Decision Changes', compactTopic(topic)), summaryItems[0], topic, 'summary', manifest); } const cardWords = () => visualWordCount([typeTopLabel('summary'), heading, 'Key ideas.', ...summaryItems.map((item) => item.text)].join(' ')); while (summaryItems.length > 1 && cardWords() > 40) summaryItems.pop(); await add('summary', { desktop: cardVisual(summaryItems, palette, 'summary', heading, DESKTOP), mobile: cardVisual(summaryItems, palette, 'summary', heading, PHONE) }, { alt: `Career decision summary for ${heading}, drawn from the article.`, caption: `Key ideas about ${heading}.`, heading, content: { kind: 'items', items: summaryItems.map((item) => ({ heading: '', text: item.text })) } }); }
  const firstNeed = (type) => pageNeeds.find((need) => need.type === type); const chosen = []; const matrixCandidate = firstNeed('matrix'); const matrixHeading = shortHeading(matrixCandidate?.section_title, data.headings[0] || topic); const matrix = matrixCandidate ? selectMatrix(matrixCandidate.exact_page_content_to_use, matrixHeading, usedPhrases) : null; if (matrix) chosen.push(matrixCandidate); const chain = firstNeed('chain'); const detail = firstNeed('detail'); if (chain) chosen.push(chain); else if (detail) chosen.push(detail); const checklist = firstNeed('checklist'); const proof = firstNeed('proof'); if (checklist && proof) chosen.push(pageNeeds.indexOf(checklist) <= pageNeeds.indexOf(proof) ? checklist : proof); else if (checklist || proof) chosen.push(checklist || proof); else if (detail && !chosen.includes(detail)) chosen.push(detail);
  for (const need of chosen.slice(0, 3)) { const items = take(itemsFromNeed(need, data), need.type === 'proof' ? 1 : 2, need.type === 'proof' ? 14 : 10); const figures = need.type === 'proof' ? items.map(figureFromItem).filter(Boolean).filter((figure) => figure.source && figureValueSupported(figure.value, figure.source)).slice(0, 2) : []; if ((!items.length && need.type !== 'matrix') || (need.type === 'proof' && !figures.length)) continue; const rawSectionHeading = shortHeading(need.section_title, data.headings[0] || topic); const sectionHeading = isGenericVisualHeading(rawSectionHeading) ? shortHeading(topic, topic) : rawSectionHeading; const coreHeading = need.type === 'proof' ? proofHeading(items, rawSectionHeading, topic) : need.type === 'matrix' ? (!isGenericVisualHeading(sectionHeading) ? sectionHeading : contentHeading(items[0], topic)) : contentHeading(items[0], sectionHeading); const heading = visualHeadingOverrides.get(route)?.[need.type] || uniqueVisualHeading(shortHeading(isBlog ? coreHeading : pageContextHeading(coreHeading, topic, slug), compactTopic(topic)), items[0] || { text: (matrix?.rows || []).flat().join(' ') }, topic, need.type, manifest, usedPhrases); if (need.type === 'matrix') { while (matrix.rows.length > 1 && visualWordCount([typeTopLabel('matrix'), heading, ...matrix.columns, ...matrix.rows.flat(), 'Source comparison'].join(' ')) > 40) matrix.rows.pop(); if (visualWordCount([typeTopLabel('matrix'), heading, ...matrix.columns, ...matrix.rows.flat(), 'Source comparison'].join(' ')) > 40) continue; } let body; let content; if (need.type === 'matrix') { const table = matrix; table.sourceRows.forEach((row) => row.forEach((cell) => markUsed({ text: cell, raw: cell }))); body = { desktop: tableVisual(table, palette, heading, DESKTOP), mobile: tableVisual(table, palette, heading, PHONE) }; content = { kind: 'table', columns: table.columns, rows: table.rows }; } else if (need.type === 'proof') { body = { desktop: proofVisual(items, palette, heading, DESKTOP), mobile: proofVisual(items, palette, heading, PHONE) }; content = { kind: 'figures', figures }; } else { body = { desktop: cardVisual(items, palette, need.type, heading, DESKTOP), mobile: cardVisual(items, palette, need.type, heading, PHONE) }; content = { kind: 'items', items: items.map((item) => ({ heading: '', text: item.text })) }; } const description = need.type === 'matrix' ? `Comparison table showing ${heading}.` : need.type === 'proof' ? `Figure tiles showing ${heading}: ${figures.map((item) => item.label).join(', ')}.` : need.type === 'checklist' ? `A checklist highlights ${heading}.` : need.type === 'chain' ? `A sequence outlines ${heading}.` : `An evidence card explains ${heading}.`; await add(need.type, body, { alt: description, caption: need.type === 'matrix' ? `Comparison table for ${heading}.` : need.type === 'proof' ? `Article figures about ${heading}.` : need.type === 'checklist' ? `Checklist for ${heading}.` : need.type === 'chain' ? `Steps for ${heading}.` : `Evidence about ${heading}.`, heading, content }); }
  if (manifest.length < 4) { const candidates = data.sections.filter((section) => section.facts.length); for (const section of candidates) { if (manifest.length >= 4) break; const items = take(section.facts, 2, 14); if (!items.length) continue; const coreHeading = contentHeading(items[0], isGenericVisualHeading(section.title) ? topic : section.title); const heading = uniqueVisualHeading(shortHeading(isBlog ? coreHeading : pageContextHeading(coreHeading, topic, slug), compactTopic(topic)), items[0], topic, 'detail', manifest); while (items.length > 1 && visualWordCount([typeTopLabel('detail'), heading, ...items.map((item) => item.text)].join(' ')) > 40) items.pop(); await add('detail', { desktop: cardVisual(items, palette, 'detail', heading, DESKTOP), mobile: cardVisual(items, palette, 'detail', heading, PHONE) }, { alt: `An evidence card explains ${heading}.`, caption: `Focused evidence: ${heading}.`, heading, content: { kind: 'items', items: items.map((item) => ({ heading: '', text: item.text })) } }); } }
  if (manifest.length < 4) { const pool = [...data.lists, ...data.facts]; while (manifest.length < 4) { const item = take(pool, 1)[0]; if (!item) break; const heading = uniqueVisualHeading(shortHeading(contentHeading(item, topic), compactTopic(topic)), item, topic, 'detail', manifest); await add('detail', { desktop: cardVisual([item], palette, 'detail', heading, DESKTOP), mobile: cardVisual([item], palette, 'detail', heading, PHONE) }, { alt: `An evidence card explains ${heading}.`, caption: `Evidence card: ${heading}.`, heading, content: { kind: 'items', items: [{ heading: '', text: item.text }] } }); } }
  let needBlocks = pageNeeds.map((need, index) => ({ ...needBlock(need, data, topic), needId: `${need.type}:${index + 1}`, sourceSectionId: need.section_id || '', sourceNeedIndex: index + 1 }));
  const nonTopicBudgetNeedIndexes = new Set();
  for (const block of needBlocks) {
    if (block.type !== 'proof' || !Array.isArray(block.figures) || !block.figures.length) continue;
    const originalFigures = block.figures;
    block.figures = originalFigures.filter(budgetFigureFitsTopic);
    if (!block.figures.length && originalFigures.every(genericBudgetFigureLabel)
      && ![...originalFigures].some((figure) => budgetFigureFitsTopic(figure))) {
      nonTopicBudgetNeedIndexes.add(String(block.sourceNeedIndex));
    }
  }
  if (nonTopicBudgetNeedIndexes.size) {
    needBlocks = needBlocks.filter((block) => !nonTopicBudgetNeedIndexes.has(String(block.sourceNeedIndex)));
    console.info(`[visual-needs] omitted ${nonTopicBudgetNeedIndexes.size} non-topic generic budget sections on ${route}`);
  }
  const needFigureKey = (figure) => `${normalizeFigureKey(figure?.value)}|${figureFamily(figure?.label)}`;
  const normalizeFigureSource = (value) => clean(value).toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const heroFigureSources = new Set(selectedHeroFigures.map((figure) => normalizeFigureSource(figure.source || figure.text)).filter(Boolean));
  const seenNeedFigures = new Set(selectedHeroFigures.map(needFigureKey));
  const redundantFigureNeedIndexes = new Set();
  for (const block of needBlocks) {
    if (block.type !== 'proof' || !Array.isArray(block.figures) || !block.figures.length) continue;
    const originalFigures = block.figures;
    const uniqueFigures = originalFigures.filter((figure) => {
      const key = needFigureKey(figure);
      const sourceKey = normalizeFigureSource(figure.source || figure.text);
      if (sourceKey && heroFigureSources.has(sourceKey)) return false;
      if (!key || seenNeedFigures.has(key)) return false;
      seenNeedFigures.add(key);
      return true;
    });
    if (uniqueFigures.length) {
      block.figures = uniqueFigures;
      continue;
    }
    const groundedSentence = originalFigures.flatMap((figure) => sentenceParts(figure.source || figure.text || ''))
      .map((text) => clean(text))
      .find((text) => words(text).length >= 6 && !/\d|[₹$]|\b(?:rs\.?|inr|percent|lpa|lakhs?|crores?)\b/i.test(text));
    if (groundedSentence) {
      block.kind = 'items';
      block.figures = undefined;
      block.items = [{ heading: '', text: groundedSentence }];
    } else {
      block.figures = [];
      redundantFigureNeedIndexes.add(String(block.sourceNeedIndex));
    }
  }
  if (redundantFigureNeedIndexes.size) {
    const heroVisualForCoverage = manifest.find((visual) => visual.type === 'hero');
    if (heroVisualForCoverage?.content) heroVisualForCoverage.content.coveredNeedIndexes = [...redundantFigureNeedIndexes].map(Number).sort((a, b) => a - b);
  }
  if (route === '/blog/career-options/mortuary-science-careers-india/') for (const block of needBlocks) {
    block.items = block.items?.map((item) => item.text === "That is not a gap in this article's research."
      ? { ...item, text: 'India has no equivalent credentialed mortuary-science profession today.', raw: 'India has no equivalent credentialed mortuary-science profession today.' }
      : item);
  }
  // Need-based cards render their section headings visibly. Keep each heading
  // distinct from this page's hero, summary, selected cards, and earlier need
  // cards so the visual set does not repeat the same five-word line.
  const visibleNeedCards = [...manifest];
  for (const block of needBlocks) {
    const sourceItem = block.items?.[0] || (block.figures?.[0] ? { text: block.figures[0].source || block.figures[0].label } : { text: (block.rows || []).flat().join(' ') });
    const currentHeading = clean(block.heading || '');
    const preferredMatrixHeading = block.type === 'matrix' && block.sourceSectionTitle
      ? completeShortHeading(shortHeading(block.sourceSectionTitle, compactTopic(topic)), compactTopic(topic))
      : '';
    const contextualBudgetHeading = block.type === 'proof' && (block.figures || []).some((figure) => /An illustration, not a real fee/i.test(figure.source || ''))
      ? `Budget Check: ${heroTopic(topic)}`
      : '';
    const needHeadingOverride = needHeadingOverrides.get(route)?.[block.sourceSectionId] || contextualBudgetHeading;
    const preferredMatrixIsDistinct = preferredMatrixHeading
      && !visibleNeedCards.some((visual) => headingsSharePhrase(preferredMatrixHeading, visual.heading))
      && !phraseKeys(preferredMatrixHeading).some((key) => usedPhrases.has(key));
    const distinctHeading = needHeadingOverride || (preferredMatrixIsDistinct ? preferredMatrixHeading : uniqueVisualHeading(currentHeading, sourceItem, topic, block.type || 'detail', visibleNeedCards, usedPhrases));
    block.heading = needHeadingOverride || completeShortHeading(shortHeading(distinctHeading, compactTopic(topic)), compactTopic(topic));
    visibleNeedCards.push({ heading: block.heading, content: { items: block.items || [], rows: block.rows || [], figures: block.figures || [] } });
  }
  const matrixBlocks = needBlocks.filter((block) => block.type === 'matrix');
  const proofBlocks = needBlocks.filter((block) => block.type === 'proof');
  const actionBlocks = needBlocks.filter((block) => block.type === 'checklist' || block.type === 'chain');
  const textBlocks = needBlocks.filter((block) => block.type === 'detail');
  const summaryVisual = manifest.find((visual) => visual.type === 'summary');
  if (summaryVisual && textBlocks.length) {
    const baseItems = summaryVisual.content?.items || [];
    summaryVisual.content = { kind: 'bundle', sourceNeedCount: textBlocks.length, blocks: [
      ...(baseItems.length ? [{ type: 'summary', heading: 'Key ideas from this article', kind: 'items', items: baseItems }] : []),
      ...textBlocks,
    ] };
  }
  let matrixVisual = manifest.find((visual) => visual.type === 'matrix');
  if (matrixBlocks.length) {
    const blocks = matrixBlocks;
    if (!matrixVisual) {
      const first = blocks[0]; const heading = shortHeading(first.heading, topic);
      const preview = first.kind === 'table' ? { desktop: tableVisual({ columns: first.columns.slice(0, 3), rows: first.rows.slice(0, 2) }, palette, heading, DESKTOP), mobile: tableVisual({ columns: first.columns.slice(0, 3), rows: first.rows.slice(0, 2) }, palette, heading, PHONE) } : { desktop: cardVisual(first.items || [], palette, 'detail', heading, DESKTOP), mobile: cardVisual(first.items || [], palette, 'detail', heading, PHONE) };
      await add('matrix', preview, { alt: `Comparison tables for ${compactTopic(topic)}.`, caption: `Article comparisons for ${compactTopic(topic)}.`, heading, content: { kind: 'bundle', sourceNeedCount: blocks.length, blocks } });
      matrixVisual = manifest.at(-1);
    } else { matrixVisual.content = { kind: 'bundle', sourceNeedCount: blocks.length, blocks }; }
  }
  let proofVisualEntry = manifest.find((visual) => visual.type === 'proof');
  if (proofBlocks.length) {
    const blocks = proofBlocks;
    if (!proofVisualEntry) {
      const firstNeed = pageNeeds.find((need) => need.type === 'proof'); const firstFacts = itemsFromNeed(firstNeed, data);
      const heading = shortHeading(firstNeed?.section_title, topic);
      const body = firstFacts.length ? { desktop: proofVisual(firstFacts.slice(0, 3), palette, heading, DESKTOP), mobile: proofVisual(firstFacts.slice(0, 3), palette, heading, PHONE) } : { desktop: cardVisual([{ text: heading }], palette, 'detail', heading, DESKTOP), mobile: cardVisual([{ text: heading }], palette, 'detail', heading, PHONE) };
      await add('proof', body, { alt: `Article figures for ${compactTopic(topic)}.`, caption: `Figures and evidence for ${compactTopic(topic)}.`, heading, content: { kind: 'bundle', sourceNeedCount: blocks.length, blocks } });
      proofVisualEntry = manifest.at(-1);
    } else { proofVisualEntry.content = { kind: 'bundle', sourceNeedCount: blocks.length, blocks }; }
  }
  let actionVisual = manifest.find((visual) => visual.type === 'checklist' || visual.type === 'chain');
  if (actionBlocks.length) {
    const blocks = actionBlocks;
    if (!actionVisual) {
      const firstNeed = pageNeeds.find((need) => need.type === 'checklist' || need.type === 'chain'); const heading = shortHeading(firstNeed?.section_title, topic); const type = firstNeed?.type || 'checklist'; const items = itemsFromNeed(firstNeed, data).slice(0, 4);
      await add(type, { desktop: cardVisual(items, palette, type, heading, DESKTOP), mobile: cardVisual(items, palette, type, heading, PHONE) }, { alt: `Decision checks and steps for ${compactTopic(topic)}.`, caption: `Practical checks for ${compactTopic(topic)}.`, heading, content: { kind: 'bundle', sourceNeedCount: blocks.length, blocks } });
      actionVisual = manifest.at(-1);
    } else { actionVisual.content = { kind: 'bundle', sourceNeedCount: blocks.length, blocks }; }
  }
  const detailItemKeys = new Set(textBlocks.flatMap((block) => (block.items || []).map((item) => keyFor(item))));
  const existingDetails = manifest.filter((visual) => visual.type === 'detail' && !(visual.content?.items || []).some((item) => detailItemKeys.has(keyFor(item))));
  const selectedVisuals = [manifest.find((visual) => visual.type === 'hero'), summaryVisual, matrixVisual, proofVisualEntry, actionVisual].filter(Boolean);
  for (const visual of existingDetails) if (selectedVisuals.length < 5 && !selectedVisuals.includes(visual)) selectedVisuals.push(visual);
  for (const visual of manifest) if (selectedVisuals.length < 4 && !selectedVisuals.includes(visual)) selectedVisuals.push(visual);
  manifest.splice(0, manifest.length, ...selectedVisuals.slice(0, 5));
  const uniqueFallbackText = [
    ...data.facts,
    ...data.sections.flatMap((section) => section.facts),
    ...data.lists,
  ].map((item) => typeof item === 'string' ? item : item?.raw || item?.text || '').filter(Boolean);
  dedupeVisualContent(manifest, uniqueFallbackText);
  const contextualBudgetLabel = (figure) => {
    const source = String(figure?.source || '');
    if (!/\bbudget\b/i.test(source)) return '';
    const rawValue = String(figure?.value || '');
    if (!/(?:[₹$]|\b(?:rs\.?|inr)\b|\b(?:lpa|lakhs?|crores?)\b|%|percent)/i.test(rawValue)) return '';
    const numeric = numericTokens(rawValue)[0];
    if (!Number.isFinite(numeric)) return '';
    const numberText = String(numeric).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const candidates = [...source.matchAll(new RegExp(`(?<![\\d,.])${numberText}(?![\\d,.])`, 'g'))];
    const unit = rawValue.match(/%|percent|lpa|lakhs?|crores?|years?|months?/i)?.[0] || '';
    const match = candidates.find((candidate) => {
      const following = source.slice(candidate.index + candidate[0].length, candidate.index + candidate[0].length + 18);
      return !unit || (/%|percent/i.test(unit) ? /%|percent/i.test(following) : new RegExp(`\\b${unit.replace(/s$/i, 's?')}\\b`, 'i').test(following));
    });
    if (!match) return '';
    const before = source.slice(Math.max(0, match.index - 60), match.index).toLowerCase();
    const nextNumber = [...source.matchAll(/\d+(?:,\d{3})*(?:\.\d+)?/g)].find((candidate) => candidate.index > match.index);
    const after = source.slice(match.index + match[0].length, nextNumber?.index ?? match.index + match[0].length + 78).toLowerCase();
    if (/%|percent/i.test(rawValue)) {
      const nearby = `${before.slice(-36)} ${after}`;
      if (/starting benchmark|suggestion|recommended|keep.{0,28}(?:near|under|within)|target share/.test(nearby)) return 'Education Budget Share';
      return /caution|warning|red flag|spending above|above roughly|serious caution/.test(nearby) ? 'Budget Warning Threshold' : 'Education Budget Share';
    }
    if (/caution|warning|red flag/.test(after)) return 'Budget Warning Threshold';
    if (/\ba fifth\b|\bone fifth\b/.test(before)) return 'One-Fifth Budget Share';
    if (/main course|degree fee|course fee|for the degree|for the credential/.test(after)) return 'Main Course Fee Allocation';
    if (/the rest|remaining|living costs|tools,? practice|future learning|reserve/.test(after)) return 'Remaining Education Budget';
    if (/education budget|rupee budget/.test(after)) return 'Education Budget Amount';
    return '';
  };
  const validateFigureTree = (node) => {
    if (Array.isArray(node)) { for (const item of node) validateFigureTree(item); return; }
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node.figures) && route === '/blog/freelancing-business/starting-a-business-vs-job-india-which-is-better/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('3-6 months') && /Most people underestimate how much runway a business needs/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/career-change/career-change-at-30-india/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('12 month') && /Finnovate: Emergency Fund in India, the 3-6-12 Rule/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/career-options/best-mba-specialization-for-engineers/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('2-4 years') && /ideal work-experience range for flagship MBA programs/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/ai-future/best-career-paths-for-the-next-10-years/') {
      node.figures = node.figures.filter((figure) => {
        const source = String(figure.source || '');
        const questionOnlyHorizon = normalizeFigureKey(figure.value) === normalizeFigureKey('10 years') && /^Does the degree I choose now limit my options for the next 10 years\?$/i.test(source);
        const negatedTransition = normalizeFigureKey(figure.value) === normalizeFigureKey('4 years') && /not 4 years/i.test(source);
        return !questionOnlyHorizon && !negatedTransition;
      });
    }
    if (Array.isArray(node.figures) && route === '/blog/career-options/career-after-civil-engineering-in-india/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('8-12 month') && /same 8-12 month structured window as GATE-PSU prep/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/career-options/career-in-navy-after-12th-science/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('3 years') && /Selected cadets train for 3 years at NDA Khadakwasla alongside Army and Air Force cadets, then move to the Indian Naval Academy, Ezhimala for 1 more year of specialised naval training before commissioning as Sub-Lieutenant\.$/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/government-jobs/defence-services-career-india/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('3 years') && /Selected cadets train for 3 years at NDA Khadakwasla across all three services together, then move to their respective service academy for 1 more year of specialised training before commissioning as an officer\.$/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/career-options/hotel-management-career-india-scope-and-salary/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('2-3 years') && /Graduates who know the first 2-3 years will be physically and socially demanding/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/government-jobs/government-jobs-after-engineering-india/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('3 months') && /forums love a .*cleared it in 3 months.* success story/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && route === '/blog/study-abroad/canada-vs-germany-for-masters-india/') {
      node.figures = node.figures.filter((figure) => !(normalizeFigureKey(figure.value) === normalizeFigureKey('21 months') && /Canada has the clearer, faster path on paper/i.test(String(figure.source || ''))));
    }
    if (Array.isArray(node.figures) && ['/blog/career-options/is-physiotherapy-a-good-career-in-india/', '/blog/career-options/is-food-technology-a-good-career-in-india/'].includes(route)) {
      const seenEarlyPayWindow = new Set();
      node.figures = node.figures.filter((figure) => {
        if (!/early.career pay window/i.test(String(figure.label || ''))) return true;
        const key = normalizeFigureKey(figure.value);
        if (seenEarlyPayWindow.has(key)) return false;
        seenEarlyPayWindow.add(key);
        return true;
      });
    }
    if (Array.isArray(node.figures)) {
      node.figures = node.figures.map((figure) => {
        const contextual = contextualBudgetLabel(figure);
        const normalizedSource = (value) => String(value || '').toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
        const curated = (heroRouteFigureOverrides.get(route) || []).find((override) => numericTokens(override.sourceValue || override.value).join('|') === numericTokens(figure.value).join('|') && (!override.sourceIncludes || normalizedSource(figure.source || figure.text).includes(normalizedSource(override.sourceIncludes))));
        const label = curated?.label || threeWordFigureLabel(contextual || figure.label, figure.source || figure.text, figure.value);
        return label ? { ...figure, ...(curated?.value ? { value: curated.value } : {}), label } : null;
      }).filter(Boolean);
      // The repeated education-budget example is useful only on pages whose
      // subject is explicitly about education spending. Keep it out of proof
      // cards for unrelated career topics even when a shared article paragraph
      // happens to contain those figures.
      const valid = node.figures.filter((figure) => budgetFigureFitsTopic(figure) && String(figure.value || '').trim() && figure.source && figureValueSupported(figure.value, figure.source));
      node.figures = valid;
      if (!valid.length && node.kind === 'figures') { node.kind = 'items'; node.items = []; }
    }
    for (const value of Object.values(node)) if (value && typeof value === 'object') validateFigureTree(value);
    if (Array.isArray(node.blocks)) {
      node.blocks = node.blocks.filter((block) => {
        const hasContent = block.items?.length || block.rows?.length || block.tables?.some((table) => table?.rows?.length) || block.sourceTables?.some((table) => table?.rows?.length) || block.figures?.length || block.steps?.length;
        return hasContent;
      });
    }
  };
  for (const visual of manifest) validateFigureTree(visual.content);
  if (route === '/blog/career-options/sales-career-growth-path-india/' && manifest.length > 4) {
    const repeatedLadderDetail = manifest.findIndex((visual) => visual.type === 'detail');
    if (repeatedLadderDetail >= 0) manifest.splice(repeatedLadderDetail, 1);
  }
  if (route === '/blog/career-options/sales-career-growth-path-india/') {
    const detail = manifest.find((visual) => visual.type === 'detail');
    if (detail?.content?.items) detail.content.items = detail.content.items.filter((item) => !/sales career growth path|senior ae|key account manager|regional sales manager|national sales head|vp sales/i.test(item.text || ''));
  }
  if (route === '/blog/government-jobs/rbi-and-sbi-career-growth-india/') {
    const normalizeClaim = (value) => String(value || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
    const repeatedHeroClaim = normalizeClaim(manifest.find((visual) => visual.type === 'hero')?.content?.answer || '');
    const proof = manifest.find((visual) => visual.type === 'proof');
    if (Array.isArray(proof?.content?.items)) proof.content.items = proof.content.items.filter((item) => !normalizeClaim(item.text).includes(repeatedHeroClaim) && !normalizeClaim(item.text).includes('sbi is a commercial bank'));
    for (const block of proof?.content?.blocks || []) {
      if (Array.isArray(block.items)) block.items = block.items.filter((item) => !normalizeClaim(item.text).includes(repeatedHeroClaim));
    }
    const promotionNeed = needBlocks.find((block) => block.sourceSectionId === 'promotion-ladders');
    const promotionVisual = proof || manifest.find((visual) => visual.type === 'detail');
    if (promotionVisual && promotionNeed) {
      const priorBlocks = promotionVisual.content?.kind === 'bundle' ? promotionVisual.content.blocks || [] : promotionVisual.content?.items?.length ? [{ type: 'detail', heading: promotionVisual.heading, kind: 'items', items: promotionVisual.content.items }] : [];
      promotionVisual.content = { kind: 'bundle', sourceNeedCount: priorBlocks.length + 1, blocks: [...priorBlocks, promotionNeed] };
    }
  }
  // Re-run after route-specific adjustments so special additions obey the same cross-card dedupe rules.
  dedupeVisualContent(manifest, uniqueFallbackText);
  const hasNeedContent = (block) => Boolean(
    block?.items?.some((item) => item?.text?.trim() || item?.heading?.trim())
    || block?.rows?.some((row) => row?.some((cell) => String(cell || '').trim()))
    || block?.tables?.some((table) => table?.rows?.some((row) => row?.some((cell) => String(cell || '').trim())))
    || block?.sourceTables?.some((table) => table?.rows?.some((row) => row?.some((cell) => String(cell || '').trim())))
    || block?.figures?.length
    || block?.steps?.some((step) => String(step || '').trim())
    || block?.supporting?.some((text) => String(text || '').trim())
  );
  const representedNeedKeys = new Set(redundantFigureNeedIndexes);
  const collectRenderableNeeds = (node) => {
    if (Array.isArray(node)) { for (const value of node) collectRenderableNeeds(value); return; }
    if (!node || typeof node !== 'object') return;
    if (node.sourceNeedIndex && hasNeedContent(node)) representedNeedKeys.add(String(node.sourceNeedIndex));
    for (const coveredIndex of node.coveredNeedIndexes || []) representedNeedKeys.add(String(coveredIndex));
    for (const value of Object.values(node)) if (value && typeof value === 'object') collectRenderableNeeds(value);
  };
  for (const visual of manifest) collectRenderableNeeds(visual.content);
  const missingRenderableNeeds = needBlocks.filter((block) => block.sourceNeedIndex && !representedNeedKeys.has(String(block.sourceNeedIndex)));
  for (const original of missingRenderableNeeds) {
    const block = structuredClone(original);
    if (Array.isArray(block.figures)) {
      block.figures = block.figures.filter(budgetFigureFitsTopic);
      if (!block.figures.length) { block.figures = undefined; block.kind = 'items'; block.items = []; }
    }
    if (!hasNeedContent(block)) {
      const sourceSection = sectionForNeed(original, data);
      const groundedItems = (sourceSection?.facts || [])
        .map((fact) => clean(fact.raw || fact.text))
        .filter((text) => text
          && (!/\ban illustration,? not a real fee\b/i.test(text) || (educationSpendContext && explicitSpendTopic && !budgetTopicExplicitlyExcludesFees))
          && (original.type !== 'proof' || /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?)/i.test(text)))
        .slice(0, 3);
      if (groundedItems.length) {
        block.kind = 'items';
        block.figures = undefined;
        block.rows = undefined;
        block.items = groundedItems.map((text) => ({ heading: '', text }));
      }
    }
    if (!hasNeedContent(block)) continue;
    const preferredType = original.type === 'proof' ? 'proof' : original.type === 'matrix' ? 'matrix' : original.type === 'chain' || original.type === 'checklist' ? original.type : 'detail';
    const target = manifest.find((visual) => visual.type === preferredType)
      || manifest.find((visual) => visual.type === 'checklist' || visual.type === 'chain')
      || manifest.find((visual) => visual.type !== 'hero');
    if (!target) continue;
    const current = target.content;
    const blocks = current?.kind === 'bundle' ? current.blocks || [] : current ? [{ ...current, heading: target.heading }] : [];
    if (!blocks.some((candidate) => candidate.sourceNeedIndex === block.sourceNeedIndex)) {
      target.content = { kind: 'bundle', sourceNeedCount: blocks.length + 1, blocks: [...blocks, block] };
      representedNeedKeys.add(String(block.sourceNeedIndex));
    }
  }
  // Coverage restoration can reintroduce a paragraph that was removed as a
  // duplicate of a higher-priority visual. Run the page-level uniqueness pass
  // once more, then record those redundant sections as covered by their
  // already-visible source content instead of restoring the repeated copy.
  dedupeVisualContent(manifest, uniqueFallbackText);
  representedNeedKeys.clear();
  for (const key of redundantFigureNeedIndexes) representedNeedKeys.add(String(key));
  for (const visual of manifest) collectRenderableNeeds(visual.content);
  // Restore section content that page-level deduplication removed. Keep the
  // sourced explanation inside the expandable visual bundle; never substitute
  // a coverage marker for missing content.
  for (const original of needBlocks) {
    const key = String(original.sourceNeedIndex || '');
    if (!key || representedNeedKeys.has(key)) continue;
    const block = structuredClone(original);
    if (!hasNeedContent(block)) {
      const sourceFacts = (sectionForNeed(original, data)?.facts || [])
        .filter((fact) => fact && clean(fact.raw || fact.text))
        .map((fact) => ({ heading: '', text: clean(fact.raw || fact.text) }));
      if (original.type === 'proof') {
        const requestedValues = numericTokens(original.exact_page_content_to_use || '');
        const pageFacts = (data.facts || [])
          .filter((fact) => fact && clean(fact.raw || fact.text))
          .map((fact) => ({ heading: '', text: clean(fact.raw || fact.text) }));
        const evidenceFacts = [...sourceFacts, ...pageFacts.filter((item) => !sourceFacts.some((sectionFact) => sectionFact.text === item.text))];
        const grounded = requestedValues.map((number) => evidenceFacts.find((item) => numericTokens(item.text).includes(number)))
          .filter((item, index, all) => item && all.findIndex((other) => other?.text === item.text) === index)
          .slice(0, 6);
        block.kind = 'items';
        block.figures = undefined;
        block.items = grounded;
      } else {
        block.kind = 'items';
        block.items = sourceFacts.slice(0, 3);
      }
    }
    if (!hasNeedContent(block)) continue;
    const target = manifest.find((visual) => visual.type === (block.type === 'detail' ? 'summary' : block.type))
      || manifest.find((visual) => visual.type !== 'hero');
    if (!target) continue;
    const existingBlocks = target.content?.kind === 'bundle'
      ? target.content.blocks || []
      : target.content ? [{ ...target.content, heading: target.heading }] : [];
    target.content = { kind: 'bundle', sourceNeedCount: existingBlocks.length + 1, blocks: [...existingBlocks, block] };
    representedNeedKeys.add(key);
  }
  representedNeedKeys.clear();
  for (const key of redundantFigureNeedIndexes) representedNeedKeys.add(String(key));
  for (const visual of manifest) collectRenderableNeeds(visual.content);
  const findNeedNode = (node, index) => {
    if (Array.isArray(node)) { for (const value of node) { const found = findNeedNode(value, index); if (found) return found; } return null; }
    if (!node || typeof node !== 'object') return null;
    if (Number(node.sourceNeedIndex) === Number(index)) return node;
    for (const value of Object.values(node)) { const found = findNeedNode(value, index); if (found) return found; }
    return null;
  };
  // Keep every requested key figure in its section visual. If the figure
  // extractor cannot safely label a value, retain the original article
  // sentence as supporting copy rather than dropping the fact or guessing.
  for (const original of needBlocks.filter((block) => block.type === 'proof')) {
    const live = findNeedNode(manifest, original.sourceNeedIndex);
    if (!live) continue;
    const sourceNeed = pageNeeds[Number(original.sourceNeedIndex) - 1];
    if (!sourceNeed) continue;
    const displayedFigures = numericTokens((live.figures || []).map((figure) => figure.value).join(' '));
    const wanted = [...new Set(numericTokens(sourceNeed.exact_page_content_to_use || ''))];
    const missingValues = wanted.filter((number) => !displayedFigures.includes(number));
    if (!missingValues.length) continue;
    const evidence = sectionForNeed(sourceNeed, data)?.facts || [];
    const support = missingValues
      .map((number) => evidence.find((fact) => numericTokens(fact.raw || fact.text).includes(number)))
      .filter(Boolean)
      .map((fact) => clean(fact.raw || fact.text))
      .filter((text, index, all) => text && all.indexOf(text) === index);
    if (support.length) live.supporting = [...new Set([...(live.supporting || []), ...support])];
  }
  // Do not mark a section covered just because a destination visual exists.
  // Coverage is counted only when renderable section content survived, or
  // when the exact figure was already represented by an earlier visual.
  const hasRenderableContent = (content) => {
    if (!content) return false;
    const blocks = content.kind === 'bundle' ? content.blocks || [] : [content];
    return blocks.some((block) => Boolean(
      block.items?.some((item) => item.text?.trim() || item.heading?.trim())
      || block.rows?.some((row) => row?.some((cell) => String(cell || '').trim()))
      || block.tables?.some((table) => table?.rows?.some((row) => row?.some((cell) => String(cell || '').trim())))
      || block.sourceTables?.some((table) => table?.rows?.some((row) => row?.some((cell) => String(cell || '').trim())))
      || block.figures?.length
      || block.steps?.some((step) => String(step || '').trim())
      || block.supporting?.some((text) => String(text || '').trim())
    ));
  };
  manifest.splice(0, manifest.length, ...manifest.filter((visual) => visual.type === 'hero' || hasRenderableContent(visual.content)));
  const missingNeedCount = needBlocks.filter((block) => block.sourceNeedIndex && !representedNeedKeys.has(String(block.sourceNeedIndex))).length;
  if (missingNeedCount) console.error(`Image content gap ${route}: ${missingNeedCount} required section(s) have no renderable content.`);
  const replaceLegacyTableLabels = (node) => {
    if (Array.isArray(node)) { for (const value of node) replaceLegacyTableLabels(value); return; }
    if (!node || typeof node !== 'object') return;
    delete node.coveredNeedSections;
    if (Array.isArray(node.columns)) node.columns = node.columns.map((label) => /^entry route$/i.test(String(label).trim()) ? 'Starting path' : label);
    for (const value of Object.values(node)) if (value && typeof value === 'object') replaceLegacyTableLabels(value);
  };
  for (const visual of manifest) replaceLegacyTableLabels(visual.content);
  const headingKeys = new Set();
  const uniqueHeadingFor = (visual) => {
    const lead = ({ summary: 'Key Ideas About', matrix: 'Compare Options for', chain: 'Steps for', checklist: 'Checks Before Choosing', proof: 'Figures for', detail: 'Evidence About' })[visual.type] || 'More About';
    const base = `${lead} ${compactTopic(topic)}`;
    let candidate = shortHeading(base, compactTopic(topic));
    let suffix = 2;
    while (headingKeys.has(candidate.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim())) {
      candidate = `${shortHeading(base, compactTopic(topic))} ${suffix++}`;
    }
    return candidate;
  };
  for (const visual of manifest) {
    const key = String(visual.heading || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    if (visual.type === 'hero') {
      if (key) headingKeys.add(key);
      continue;
    }
    if (key && headingKeys.has(key)) {
      visual.heading = uniqueHeadingFor(visual);
      visual.caption = `${visual.heading}: ${visualCaption(visual.type, 0)}`;
      visual.title = visualTitle(visual.type, visual.heading, topic, title);
    }
    headingKeys.add(String(visual.heading || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim());
  }
  const priorHeadingPhrases = new Set();
  const finalHeadingAlternatives = {
    summary: ['Key Ideas at a Glance', 'Decision Points to Weigh'],
    matrix: ['Compare Practical Routes', 'Options Side by Side'],
    proof: ['Figures in Context', 'Evidence Behind Numbers'],
    checklist: ['Questions Before Choosing', 'A Short Self Check'],
    chain: ['Steps in Sequence', 'A Practical Route'],
    detail: ['Evidence to Keep in View', 'Useful Details to Weigh'],
  };
  for (const visual of manifest) {
    if (visual.type !== 'hero' && phraseKeys(visual.heading).some((key) => priorHeadingPhrases.has(key))) {
      const candidates = finalHeadingAlternatives[visual.type] || ['Useful Details to Weigh'];
      visual.heading = candidates.find((candidate) => !phraseKeys(candidate).some((key) => priorHeadingPhrases.has(key))) || 'Useful Evidence Notes';
    }
    for (const key of phraseKeys(visual.heading || '')) priorHeadingPhrases.add(key);
  }
  const finalAltUsed = new Set();
  for (const visual of manifest) {
    if (visual.type === 'hero') continue;
    visual.alt = uniqueAlt(visualAlt(visual.type, visual.heading, topic), finalAltUsed);
    visual.title = visualTitle(visual.type, visual.heading, topic, title);
    visual.caption = visualCaption(visual.type, 0, visual.heading);
  }
  const removeUnvaluedFigures = (node) => {
    if (Array.isArray(node)) { for (const value of node) removeUnvaluedFigures(value); return; }
    if (!node || typeof node !== 'object') return;
    if (route === '/blog/government-jobs/ssc-vs-bank-exams-which-to-prepare-india/' && Array.isArray(node.steps) && node.steps.length) {
      // The article body already links both official notices; keep the hero focused on the comparison.
      node.supporting = [];
    }
    if (Array.isArray(node.figures)) {
      const valid = node.figures.filter((figure) => String(figure.value || '').trim() && figure.source && figure.label && figureValueSupported(figure.value, figure.source));
      const unsupportedSources = node.figures.filter((figure) => !valid.includes(figure)).map((figure) => clean(figure.source || figure.text || '')).filter(Boolean);
      node.figures = valid;
      if (unsupportedSources.length) node.supporting = [...new Set([...(node.supporting || []), ...unsupportedSources])];
      if (!valid.length && node.kind === 'figures') {
        node.kind = 'items';
        node.items = [...new Set([...(node.items || []).map((item) => clean(item.text || item.heading || '')), ...unsupportedSources].filter(Boolean))].map((text) => ({ heading: '', text }));
      }
    }
    for (const value of Object.values(node)) if (value && typeof value === 'object') removeUnvaluedFigures(value);
  };
  for (const visual of manifest) removeUnvaluedFigures(visual.content);
  const applyVerifiedContentCorrections = (node) => {
    if (Array.isArray(node)) { for (const value of node) applyVerifiedContentCorrections(value); return; }
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node.figures)) {
      const seenExactFigureEvidence = new Set();
      node.figures = node.figures.filter((figure) => {
        const key = `${normalizeFigureKey(figure.value)}|${clean(figure.source || '').toLowerCase()}`;
        if (seenExactFigureEvidence.has(key)) return false;
        seenExactFigureEvidence.add(key);
        return true;
      });
    }
    if (Array.isArray(node.figures)) for (const figure of node.figures) {
      applyRouteDurationLabelCorrection(route, figure);
    }
    if (Array.isArray(node.figures) && route === '/blog/career-change/career-change-after-5-years-india/' && node.sourceSectionId === 'faqs') {
      node.figures = node.figures.filter((figure) => {
        const source = String(figure.source || '').trim();
        const questionOnly = normalizeFigureKey(figure.value) === normalizeFigureKey('5 years') && /^Is 5 years too early to change careers in India\?$/i.test(source);
        const duplicateTenure = normalizeFigureKey(figure.value) === normalizeFigureKey('18 months') && /^Recruiters read a clean, well-reasoned move at year 5/i.test(source);
        return !questionOnly && !duplicateTenure;
      });
    }
    if (Array.isArray(node.figures)) for (const figure of node.figures) {
      const figureValue = String(figure.value || '');
      const figureSource = String(figure.source || '');
      if (/\byears?\b/i.test(figureValue) && /\bage\s+(?:limit|range|band|bands|criteria)|\bage\s+of\b|age limits?\b|candidates?\s+aged|aged\s+\d/i.test(figureSource)) {
        const valueAt = figureSource.toLowerCase().indexOf(figureValue.toLowerCase());
        const afterValue = valueAt >= 0 ? figureSource.slice(valueAt + figureValue.length, valueAt + figureValue.length + 32) : '';
        if (!/^(?:IBPS|SBI) PO Age Limit$/i.test(figure.label || '')) figure.label = /age groups?|year olds/i.test(figureSource) || /age bands?/i.test(figureSource) && /statistics|distribution|respondent/i.test(figureSource) ? 'Age Group' : /survey|respondent|participant/i.test(figureSource) ? 'Survey Age Range' : /experienced crew/i.test(afterValue) ? 'Experienced Age Limit' : /freshers?/i.test(afterValue) ? 'Fresher Age Limit' : 'Age Limit';
      }
      if (route === '/blog/career-options/career-options-after-12th-except-engineering/' && normalizeFigureKey(figure.value) === normalizeFigureKey('₹3,83,00,000')) figure.label = 'Implied Education Budget';
      if (route === '/blog/career-options/career-options-after-graduation/' && normalizeFigureKey(figure.value) === normalizeFigureKey('₹9 lakh')) figure.label = 'Remaining Education Budget';
      if (route === '/blog/career-options/how-to-get-into-event-management-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('10-20%') && /total event budget/i.test(figure.source || '')) figure.label = 'Total Event Budget Share';
      if (route === '/blog/college-degrees/education-loan-worth-it-india-private-college/' && normalizeFigureKey(figure.value) === normalizeFigureKey('10-14%') && /education loan interest rates/i.test(figure.source || '')) figure.label = 'Education Loan Interest Rate';
      if (route === '/blog/career-options/commerce-career-options-with-salary/' && normalizeFigureKey(figure.value) === normalizeFigureKey('₹5.60 lakh')) figure.label = 'PayScale BBA Profile Average';
      if (route === '/blog/career-options/commerce-career-options-with-salary/' && normalizeFigureKey(figure.value) === normalizeFigureKey('₹18,000')) figure.label = 'Median Monthly Entry Pay';
      if (route === '/blog/career-options/commerce-career-options-with-salary/' && normalizeFigureKey(figure.value) === normalizeFigureKey('₹25,000')) figure.label = 'Monthly Pay After 3+ Years';
      if (route === '/blog/career-change/career-change-after-5-years-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('5 years') && /specific bind|at 5 years|career change after 5 years|five years is exactly when/i.test(figure.source || '')) figure.label = 'Career Transition Timing';
      if (route === '/blog/career-change/career-change-after-5-years-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('0-2 years') && /built for 0-2 years/i.test(figure.source || '')) figure.label = 'Entry-Level Experience Band';
      if (route === '/blog/career-change/career-change-after-5-years-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('2-3 years') && /switching jobs every 2-3 years/i.test(figure.source || '')) figure.label = 'Typical Job-Change Interval';
      if (route === '/blog/career-change/career-change-after-5-years-india/' && node.sourceSectionId === 'faqs') {
        if (normalizeFigureKey(figure.value) === normalizeFigureKey('18 months') && /tenure at each stop/i.test(figure.source || '')) figure.label = 'Minimum Tenure per Role';
        if (normalizeFigureKey(figure.value) === normalizeFigureKey('3-6 month') && /existing 3-6 month emergency fund/i.test(figure.source || '')) figure.label = 'Emergency Fund Duration';
        if (normalizeFigureKey(figure.value) === normalizeFigureKey('1-3 year') && /retention bonus tied to a 1-3 year lock-in/i.test(figure.source || '')) figure.label = 'Retention Bonus Lock-In';
        if (normalizeFigureKey(figure.value) === normalizeFigureKey('12 months') && /expenses set aside/i.test(figure.source || '')) figure.label = 'Expense Runway';
        if (normalizeFigureKey(figure.value) === normalizeFigureKey('3-4 years') && /3-4 years head start/i.test(figure.source || '')) figure.label = 'Experience Head Start';
      }
      if (route === '/blog/career-change/career-switch-from-it-to-management-india/' && normalizeFigureKey(figure.value) === normalizeFigureKey('3-6 months') && /emergency fund/i.test(figure.source || '')) figure.label = 'Emergency Fund Coverage';
    }
    if (Array.isArray(node.figures) && route === '/blog/medical-careers/bsc-nursing-scope-abroad/') node.figures = node.figures.filter((figure) => !/^F1 Jobs: November 2026 Visa Bulletin explained/i.test(String(figure.source || '')));
    if (Array.isArray(node.figures) && route === '/blog/career-options/video-editing-career-india-how-to-become-a-video-editor/') {
      const sourceFigure = node.figures.find((figure) => /Video editor pay in India spans roughly/i.test(String(figure.source || '')));
      if (sourceFigure) node.figures = [ { ...sourceFigure, value: '₹1.8L', label: 'Fresher Annual Pay' }, { ...sourceFigure, value: '₹10L+', label: 'Senior Annual Pay' } ];
    }
    if (Array.isArray(node.figures) && route === '/blog/career-options/political-science-career-options/') for (const figure of node.figures) {
      if (/^Entry\s*~?\s*₹3-5L\b/i.test(String(figure.source || ''))) { figure.value = '₹3-5L'; figure.label = 'Entry Pay Range'; }
    }
    for (const value of Object.values(node)) if (value && typeof value === 'object') applyVerifiedContentCorrections(value);
  };
  for (const visual of manifest) applyVerifiedContentCorrections(visual.content);
  if (route === '/blog/career-change/career-switch-from-it-to-management-india/') {
    const matrix = manifest.find((visual) => visual.type === 'matrix');
    if (matrix?.content?.blocks) {
      const first = matrix.content.blocks.find((block) => Number(block.sourceNeedIndex) === 1);
      const second = matrix.content.blocks.find((block) => Number(block.sourceNeedIndex) === 2);
      if (first) {
        first.heading = 'Market Signals for Mid-Career IT Professionals';
        first.columns = ['Market Signal', 'What It Means'];
        first.rows = [
          ['~3,400 mid-tier exits in one quarter', 'Legacy maintenance roles face more automation exposure.'],
          ['Only ~16% of IT professionals are AI-skilled', 'Add AI literacy to technical depth before switching.'],
          ['GCCs are hiring in three Indian hubs', 'Business-facing roles can create an adjacent management path.'],
          ['MBA pivot intent fell from 58% to 42%', 'Use role-specific proof alongside any degree.'],
        ];
        first.tables = [{ columns: first.columns, rows: first.rows }];
      }
      if (second) {
        second.heading = 'Four IT-to-Management Role Lanes';
        second.columns = ['Lane', 'Pay and Timeline', 'Proof That Helps'];
        second.rows = [
          ['Business analyst', '₹4–7 LPA freshers; ₹6–10 LPA at 2–5 years', 'SQL, Python and BFSI domain depth'],
          ['Scrum master or product owner', '₹5–10 LPA entry; ₹15 LPA+ with certification', 'CSM or CSPO; product-company experience'],
          ['Delivery or project manager', 'Often grows with tenure; 3–6 years to junior PM', 'PMP, planning and stakeholder ownership'],
          ['Product manager', '₹12–22 LPA associate; ₹20–40 LPA mid-level', 'Technical, analytics and AI/ML fluency'],
        ];
        second.tables = [{ columns: second.columns, rows: second.rows }];
      }
    }
  }
  if (route === '/blog/career-options/commerce-career-options-with-salary/') {
    const matrix = manifest.find((visual) => visual.type === 'matrix');
    const first = matrix?.content?.blocks?.find((block) => Number(block.sourceNeedIndex) === 2);
    if (first) {
      first.heading = 'Commerce Pay by Route';
      first.columns = ['Route', 'Early Pay', 'Later Pay'];
      first.rows = [
        ['Finance and data roles', '₹3.88 lakh average total pay under 1 year (418 salaries)', '₹5.56 lakh at 1–4 years (579 salaries)'],
        ['Digital marketing manager', '₹3.09 lakh average total pay under 1 year (77 salaries)', '₹4.79 lakh at 1–4 years (146 salaries)'],
        ['Accountant', '₹2.29 lakh average total pay under 1 year (247 salaries)', '₹2.91 lakh at 1–4 years (605 salaries)'],
        ['Chartered accountant', 'ICAI reports ₹12–13 lakh average for new CAs', 'No comparable year-three sample found'],
        ['Company secretary', 'ICSI publishes no current average we found', 'No reliable salary sample found'],
      ];
      first.tables = [{ columns: first.columns, rows: first.rows }];
    }
  }
  if (route === '/blog/career-options/career-options-after-12th-except-engineering/') {
    const matrix = manifest.find((visual) => visual.type === 'matrix');
    if (matrix) {
      matrix.heading = 'Career Routes Beyond Engineering';
      const first = matrix.content?.blocks?.find((block) => Number(block.sourceNeedIndex) === 1);
      if (first) first.heading = 'Compare Routes by Eligibility';
    }
  }
  const finalNeedHeadingOverrides = needHeadingOverrides.get(route) || {};
  const applyFinalNeedHeadingOverrides = (node) => {
    if (Array.isArray(node)) { for (const value of node) applyFinalNeedHeadingOverrides(value); return; }
    if (!node || typeof node !== 'object') return;
    const override = finalNeedHeadingOverrides[node.sourceSectionId];
    if (override) node.heading = override;
    for (const value of Object.values(node)) if (value && typeof value === 'object') applyFinalNeedHeadingOverrides(value);
  };
  for (const visual of manifest) applyFinalNeedHeadingOverrides(visual.content);
  visualCount += manifest.length;
  await writeManifest(join(dir, 'index.json'), JSON.stringify({
    version: 11,
    route,
    title,
    canvas: { phone: PHONE, desktop: DESKTOP },
    safeMargin: 72,
    textContract: { topLabel: 34, heading: 52, body: 40, tableHeader: 42, tableCell: 40, tileFigure: 80, tileLabel: 34, tileSource: 36 },
    visuals: manifest,
  }, null, 2)); generated += 1;
  // Structured supporting visuals are rendered from their manifest as live,
  // responsive HTML. Their former raster twins are not used by the page, so
  // remove any left by earlier generator versions instead of retaining dead
  // WebP files in the repository.
  for (const visual of manifest) {
    if (visual.type === 'hero' || !visual.content) continue;
    for (const asset of [visual.file, visual.mobile]) {
      if (asset) await unlink(join(dir, asset)).catch(() => {});
    }
  }
}
console.log(`Generated ${visualCount} Round 11 visuals for ${generated} pages.`);
