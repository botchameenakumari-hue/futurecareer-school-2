// Search-result title and meta description for posts that were ranking on page
// one but earning almost no clicks (Search Console, Sep 2026: 500 to 2,500
// impressions each at under 1.5% CTR). The visible H1 and intro on the post stay
// as written; only the <title>, og/twitter title and meta description change.
// Titles are kept to about 60 characters and descriptions to about 155 so
// Google does not truncate them.
export type BlogSeoOverride = { title: string; description: string };

export const BLOG_SEO_OVERRIDES: Record<string, BlogSeoOverride> = {
  'college-degrees/career-without-degree-after-12th-india': {
    title: 'Career Without a Degree After 12th: 15 Real Paths in India',
    description:
      'Can you build a career without a degree after 12th? 15 real paths in tech, trades, sales and government jobs, with salary data and honest trade-offs.',
  },
  'career-options/career-after-btech-other-than-software': {
    title: 'Career After B.Tech Other Than Software: 12 Paths That Pay',
    description:
      '12 career options after B.Tech beyond software: GATE-PSU, UPSC ESE, MBA, product management, analytics and patent law. See what fits and what it pays.',
  },
  'college-degrees/best-postgraduate-courses-for-science-students-india': {
    title: 'Best Postgraduate Courses After B.Sc: Full Map by Subject',
    description:
      'Best postgraduate courses for science students in India by subject: Physics, Chemistry, Biology, Maths and CS. MSc, PhD, MBA, GATE and CSIR-NET compared.',
  },
  'college-degrees/lateral-entry-mba-india': {
    title: 'Lateral Entry MBA in India: Meaning, Eligibility, Colleges',
    description:
      'Lateral entry MBA in India usually means direct entry into year 2 of an MBA or PGDM. See real eligibility, colleges and the risks before you apply.',
  },
  'skills/best-skills-for-commerce-students-to-learn': {
    title: 'Best Skills for Commerce Students to Learn (That Pay)',
    description:
      'Excel, financial modelling, GST and accounting software, data analytics and digital marketing: the best skills for commerce students, with costs and pay.',
  },
  'career-options/career-after-ba-history-india': {
    title: 'Career After BA History: 9 Real Paths Beyond UPSC',
    description:
      'Career options after BA History: archives, museums, archaeology, civil services, teaching, law and heritage tourism. Eligibility, pay and exams explained.',
  },
  'career-options/best-paying-jobs-for-humanities-students-india': {
    title: 'Best Paying Jobs for Humanities Students in India',
    description:
      'Highest paying jobs for humanities students in India, ranked by real salary growth: law, UX writing, policy, HR, communications, psychology and media.',
  },
  'career-options/career-after-mbbs-other-than-clinical-practice-india': {
    title: 'Career After MBBS Other Than Clinical Practice: 10 Paths',
    description:
      '10 non-clinical careers after MBBS: healthcare management, medical writing, medical affairs, clinical research and public health, with real salary data.',
  },
  'government-jobs/bank-job-vs-it-job-india': {
    title: 'Bank Job vs IT Job in India: Security or Higher Pay?',
    description:
      'Bank job vs IT job in India: IBPS PO and software engineer salaries, 2025 IT layoffs, and who fits each path. Compare security with pay ceiling.',
  },
  'government-jobs/ssc-vs-bank-exams-which-to-prepare-india': {
    title: 'SSC vs Bank Exams: Which to Prepare For in India?',
    description:
      'SSC CGL/CHSL vs IBPS/SBI PO: compare syllabus overlap, competition, pay and career growth before you commit a year to either exam.',
  },
  'freelancing-business/best-freelance-skills-in-demand-india': {
    title: 'Best Freelance Skills in Demand in India (Ranked)',
    description:
      'Which freelance skills actually get paid work in India? Writing, design, development, video editing and more, ranked by demand versus competition.',
  },
  'job-search/gap-year-after-graduation-india': {
    title: 'Gap Year After Graduation in India: Is It Worth It?',
    description:
      'Is a gap year after graduation worth it? See honest reasons, how to use the time without hurting your resume, and a framework to decide.',
  },
  'stream-selection/which-stream-to-choose-in-11th': {
    title: 'Which Stream to Choose in 11th: Science, Commerce or Arts?',
    description:
      'Which stream to choose in 11th for a good career? Compare Science, Commerce and Arts on income, workload and flexibility, then take the free stream test.',
  },
  'medical-careers/best-paramedical-courses-scope-in-india': {
    title: 'Best Paramedical Courses in India: Scope, Pay and Rules',
    description:
      'Best paramedical courses in India: lab technology, radiography, OT, dialysis, optometry and more. NCAHP rules, salaries and entrance routes for 2026.',
  },
  'government-jobs/government-exam-preparation-while-working-india': {
    title: 'Government Exam Preparation While Working: A Real Plan',
    description:
      'How to prepare for government exams while working: weekly study hours, when to quit vs stay, leave strategy and honest odds against full-time prep.',
  },
  'career-options/best-mba-specialization-for-engineers': {
    title: 'Best MBA Specialization for Engineers: What Pays Off',
    description:
      'Compare operations, analytics, product management, finance and tech-strategy MBA tracks for engineers, with real salary data by branch and timeline.',
  },
  'college-degrees/best-diploma-courses-after-12th': {
    title: 'Best Diploma Courses After 12th: 15 Options With Pay',
    description:
      '15 diploma courses after 12th in engineering, paramedical, design and digital fields. Fees, salary ranges, lateral entry rules and how to choose.',
  },
  'career-options/pcb-career-options-without-maths': {
    title: 'Career Options With PCB Without Maths: What Stays Open',
    description:
      'Career options with PCB without Maths: which exams and degrees are blocked, which stay open, and bridge routes into data-adjacent work.',
  },
  'college-degrees/mba-without-work-experience-india': {
    title: 'MBA Without Work Experience in India: Who Takes Freshers',
    description:
      'An MBA without work experience is normal at IIMs, FMS and XLRI, but ISB wants 2 to 3 years first. Fresher data, IPM alternatives and a wait-or-go test.',
  },
  'career-options/career-in-psychology-india-salary-scope': {
    title: 'Career in Psychology in India: Salary, Scope and RCI Rules',
    description:
      'Six psychology career tracks in India: clinical, counselling, HR, research, UX and analytics. Real RCI rules and pay data, not hype.',
  },
  'college-degrees/how-to-read-college-placement-report-india': {
    title: 'How to Read a College Placement Report in India',
    description:
      'Decode median vs average pay, spot small-sample tricks, tell CTC from in-hand salary and verify a college placement claim before you trust the numbers.',
  },
  'career-options/career-options-in-pcb-with-computer-science': {
    title: 'Career Options in PCB With Computer Science',
    description:
      'What studying Computer Science alongside Physics, Chemistry and Biology unlocks, and the honest limits of the JEE and B.Tech route.',
  },
  'career-options/career-after-electrical-engineering-in-india': {
    title: 'Career After Electrical Engineering: 12 Paths in India',
    description:
      '12 career paths after electrical engineering in India: GATE-PSU, DISCOMs, railways, EPC, renewables, EV power electronics, VLSI, ESE and M.Tech.',
  },
  'college-degrees/should-i-take-drop-year-after-12th': {
    title: 'Should I Take a Drop Year After 12th? A Clear Answer',
    description:
      'Should you take a drop year after 12th? See NEET and JEE data, mental-health reality, costs and a step-by-step test to decide.',
  },
  'government-jobs/state-vs-central-government-jobs-india': {
    title: 'State vs Central Government Jobs in India: Which Track?',
    description:
      'State vs central government jobs in India: pay commission gaps, State PSC vs UPSC and SSC competition, transfers and prestige compared.',
  },
  'stream-selection/cuet-vs-jee-which-is-better-for-career': {
    title: 'CUET vs JEE: Which Is Better for Your Career?',
    description:
      'CUET vs JEE compared on difficulty, cost, seats and salary outcomes. Find out whether engineering or a wider degree path fits you.',
  },
  'career-options/is-ca-a-good-career-in-india': {
    title: 'Is CA a Good Career in India? The Honest Verdict',
    description:
      'Is CA worth it? Pass rates of 5 to 15%, articleship pay of Rs 4,000 to 20,000 a month, Big 4 vs practice pay and AI risk, explained honestly.',
  },
};
