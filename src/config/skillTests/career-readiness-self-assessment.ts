// Career Readiness Self-Assessment: a complete self-rating test bundle.
// General guidance only. No statistics, norms, pass marks or selection claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

export const bundle: SkillTestBundle = {
  test: {
    id: 'career-readiness-self-assessment',
    slug: 'career-readiness-self-assessment',
    pageUrl: '/services/assessments/career-readiness-self-assessment/',
    breadcrumbName: 'Career Readiness Self-Assessment',
    metaTitle: 'Career Readiness Test | Am I Ready for a Career?',
    metaDescription:
      'Free career readiness self-assessment: 40 questions and five scores for direction, skills, proof of work, network and job search habits. Instant result.',
    h1Lead: 'Career Readiness',
    h1Accent: 'Self-Assessment',
    eyebrow: 'For students, freshers, working professionals and people returning to work',
    heroSub:
      'Being ready for a career is not only about a degree. Feeling stuck often comes down to one of five things: a clear direction, skills they can use, proof of what they can do, people who know their work, or a steady way of searching. This free self-assessment rates all five from your own answers, then shows which one to fix first and how to start this week.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'readiness areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five career readiness areas from your own ratings',
      'About 10 minutes',
      'What to fix first, with a 14-day routine',
    ],
    reportTitle: 'Career Readiness Report',
    reportFile: 'future-career-school-career-readiness-report.pdf',
    reportKicker: 'CAREER READINESS REPORT',
    resultKicker: 'Your career readiness result',
    scoreLabel: 'Overall career readiness',
    bands: {
      high: 'Ready in this area.',
      mid: 'Partly ready, with gaps to close.',
      low: 'Work on this area first.',
    },
    domainsHeading: 'Five career readiness areas this self-assessment covers',
    domainsIntro:
      'A degree is one part of readiness. Employers, clients and colleagues also look at what you can do, what you can show and whether they know you exist. These five areas turn that into habits you can rate honestly and improve.',
    domains: [
      {
        key: 'direction',
        name: 'Knowing the career you are aiming for',
        short: 'A target you have tested, not just heard about',
        strong: 'You can name the roles you are aiming for, say what they involve day to day and explain why they suit you, with a back-up in mind.',
        weak: 'Your plan comes mostly from what others around you are choosing, or it changes every few weeks before anything is tried properly.',
        plan: [
          'Read five real job postings for one role you are considering and list the skills and duties that repeat in most of them.',
          'Talk to one person doing that work and ask what a normal week looks like and what they wish they had known earlier.',
          'Try a small trial of the role for one week, such as one task or a short project, and note whether you want to continue.',
        ],
      },
      {
        key: 'skills',
        name: 'Skills you can actually use',
        short: 'What you can do, not only what you have studied',
        strong: 'You know which skills your target role needs, you practise them on real tasks and you can say honestly where you are strong and weak.',
        weak: 'You have studied or watched a lot, but you have not used the skills on real tasks, or you are learning many things without finishing any.',
        plan: [
          'Write the top five skills your target role asks for and rate yourself on each as can do, can do with help, or not yet.',
          'Pick the one skill that matters most and set a small output for it, such as a sheet, a page, a short video or a working file, due in one week.',
          'Choose one learning source and finish it before starting another, and spend more time doing than watching.',
        ],
      },
      {
        key: 'proof',
        name: 'Proof of work: projects, portfolio, results',
        short: 'Things you can show, not only things you can say',
        strong: 'You have work you can show in a minute, you can explain your own part and the result, and someone outside your family has seen it.',
        weak: 'Your resume lists skills and courses, but you have little you can open, show or point to as evidence of what you can do.',
        plan: [
          'Choose your two best pieces of work and write a three-line note for each: the problem, what you did, and what came out of it.',
          'Put them in one place a stranger can open, such as a drive folder, a one-page website or a profile, and check the links work on a phone.',
          'Ask one person who saw the work, such as a teacher, teammate, client or manager, for two lines of honest feedback you can use.',
        ],
      },
      {
        key: 'network',
        name: 'People and visibility',
        short: 'Who knows your work and what you are looking for',
        strong: 'You know people in your target field, you ask them focused questions and your profile and work are visible to those who may need them.',
        weak: 'Few people in your target field know you, you hesitate to message anyone, or your profile does not show what you can do.',
        plan: [
          'Make a list of ten people two or three years ahead of you, such as seniors, alumni, ex-colleagues or friends of family, in or near your target field.',
          'Send three of them a short message with one specific question, and act on the answer you get within a week.',
          'Update your LinkedIn or other professional profile so the headline, photo and top two pieces of work match your resume.',
        ],
      },
      {
        key: 'search',
        name: 'Job search and application habits',
        short: 'A steady, tracked and improving search',
        strong: 'You use several ways to find openings, tailor each application, track what you send and learn from replies and rejections.',
        weak: 'You apply in bursts, send the same resume everywhere, do not track or follow up, or stop after a few rejections.',
        plan: [
          'Make a simple sheet with company, role, date applied, version of resume used, reply and next follow-up date.',
          'For each application, copy the five skills the posting repeats and change your resume summary and first project to match.',
          'Set a fixed weekly routine, for example three tailored applications and two messages to people, and review the sheet every Sunday.',
        ],
      },
    ],
    questions: [
      { d: 'direction', text: 'I can describe what a normal working day looks like in the role I am aiming for.' },
      { d: 'skills', text: 'I can list the main skills my target role needs.' },
      { d: 'proof', text: 'I have at least two pieces of work, such as a project, a report or a file, that I can show someone within a minute.' },
      { d: 'network', text: 'I know at least three people who work in the field I am aiming for.' },
      { d: 'search', text: 'I keep a record of every job I apply for, with the date and the resume I sent.' },
      { d: 'direction', text: 'My career plan comes mostly from what my family, friends or classmates are choosing.', reverse: true },
      { d: 'skills', text: 'I mostly learn by watching videos or reading, and I rarely use a skill on a real task.', reverse: true },
      { d: 'proof', text: 'My resume lists skills, but I have nothing I can show that proves them.', reverse: true },
      { d: 'network', text: 'I have shared something I made or learned, such as a post, a file or a project, where people in my field can see it.' },
      { d: 'search', text: 'I change my resume to fit the role before I apply.' },
      { d: 'direction', text: 'I have read at least three job postings for my target role and noted what they ask for.' },
      { d: 'skills', text: 'In the last three months I have used a skill from my target role on a task for someone else, such as a friend, a club or a family business.' },
      { d: 'proof', text: 'For each project on my resume, I can explain my own part in it.' },
      { d: 'network', text: 'I rarely speak to anyone in my target field because I feel I have nothing to offer.', reverse: true },
      { d: 'search', text: 'I look for openings in more than one way, such as portals, company pages, referrals and alumni groups.' },
      { d: 'direction', text: 'I have at least one related back-up role in mind in case my first choice does not work out soon.' },
      { d: 'skills', text: 'I know which of my skills is weakest for the role I want.' },
      { d: 'proof', text: 'I keep notes of what I do, such as project details, feedback and results, so I can use them later.' },
      { d: 'network', text: 'When someone gives me advice on my plan or my work, I usually do not tell them what I did with it.', reverse: true },
      { d: 'search', text: 'After a rejection or no reply, I usually apply again without changing anything.', reverse: true },
      { d: 'direction', text: 'I keep changing my target career every few weeks without trying any of them properly.', reverse: true },
      { d: 'skills', text: 'I am learning many things at once and have not finished any of them.', reverse: true },
      { d: 'proof', text: 'Someone outside my family and teachers, such as a client, senior or teammate, has given feedback on my work.' },
      { d: 'network', text: 'My LinkedIn or other professional profile shows the work I want to be known for.' },
      { d: 'search', text: 'I set aside fixed days each week for applications and follow-ups, even when no replies are coming.' },
    ],
    readingTitle: 'How to read your career readiness result',
    readingSections: [
      {
        title: 'Readiness is a set of habits, not a verdict',
        body: [
          'Each statement describes something you do or have, such as keeping a record of your work or messaging a senior. That makes readiness something you can build. A lower score points to a habit you have not started yet, not to a lack of ability or a wrong choice of career.',
        ],
      },
      {
        title: 'Why skills and proof sit beside direction',
        body: [
          'A degree is a strong foundation and is required for many routes, especially government posts and regulated professions. In private-sector, creative, technical and freelance work, people usually look at what you can do and what you can show as well. That is why this test asks about skills you use and proof you can open, along with direction, people and search habits.',
          'The five areas depend on each other. Direction tells you which skills to build. Skills give you something to show. Proof gives you something to share with people. People help you find openings, and a steady search turns all of it into applications.',
        ],
      },
      {
        title: 'Look at the lowest area, then the gaps between areas',
        body: [
          'Your overall score is only a rough summary. The more useful reading is which area scored lowest, because one weak area can hold back the rest. Strong skills with no proof are hard for others to see. Strong proof with no direction can scatter your effort. A good network with no tracked search can leave leads unused.',
        ],
      },
      {
        title: 'Choose your stage and use the 14-day routine',
        body: [
          'A first-year student, a final-year student, a working professional and someone returning after a break need different next steps, so your report adjusts the advice to the stage you choose. Pick your lowest area, follow its 14-day routine, and retake the test after a few weeks. If a score moves, that is a sign the habit is changing. If not, go back to the statements you rated lowest and fix those first.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own habits. It does not measure your ability and it cannot replace a conversation with someone who knows your work.',
      'It is not an employer test and does not predict whether you will be shortlisted, selected or offered a job or a place in any course.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not mean every door is open, and a low score does not mean you are not ready for a career.',
      'Some careers, such as medicine, law, teaching and government services, need specific degrees, exams or licences. Check the official requirements for your route first, as they come before anything in this report.',
    ],
    faqs: [
      {
        q: 'Is this career readiness test free?',
        a: 'Yes. You can take it without paying and without signing up, see your result on screen and download the report as a PDF.',
      },
      {
        q: 'How do I know if I am ready for a career?',
        a: 'Readiness has five parts: knowing what you are aiming for, having skills you can use, having proof of your work, knowing people in the field, and searching in a steady, tracked way. This test rates each part so you can see which ones are ready and which need work before you apply.',
      },
      {
        q: 'What is a good score on this test?',
        a: 'There is no pass mark. Scores are only against your own answers, not against other people. Use the area scores to decide what to work on first, and retake the test after a few weeks to see what changed.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can students and freshers use this employability self assessment?',
        a: 'Yes. You choose whether you are a student in the first to third year, in the final year or just graduated, already working, or returning after a break or switching fields. The extra questions and advice change with your choice, so you do not need work experience to take it.',
      },
      {
        q: 'Does this test check my degree?',
        a: 'No. It looks at skills, proof, direction, people and search habits, which sit beside your degree. If your route needs a particular degree or exam, such as a government post or a regulated profession, follow the official rules for it and use this test for the rest of your preparation.',
      },
      {
        q: 'How is this different from the interview readiness or internship readiness tests?',
        a: 'Those tests focus on one step, the interview or an internship. This one looks at the wider picture before any application: your direction, skills, proof, people and search habits. If your score is low in the search area, the interview readiness test is a natural next one.',
      },
      {
        q: 'Is a degree enough to be ready for a career?',
        a: 'For some routes a degree is required and comes first, but on its own it rarely shows an employer what you can do. Readiness also includes skills you have used, work you can show, people who know it and a steady way of searching. This test rates those parts beside your studies, so a degree and these habits work together.',
      },
      {
        q: 'How long does the career readiness test take?',
        a: 'Plan for about ten minutes. The 40 questions mix quick statements that you rate from 1 to 5 with short situations where you pick the option closest to what you would do. Answer from what you actually do now, not from what you plan to do.',
      },
      {
        q: 'How often should I take it?',
        a: 'Take it once now, follow the 14-day routine for your lowest area, and retake it after four to six weeks or before a round of applications. Your own earlier result is the only fair comparison.',
      },
    ],
    related: [
      {
        href: '/services/assessments/graduates-and-early-professionals/',
        title: 'Assessments for Graduates and Early Professionals',
        description: 'Tests and guidance for the first years after college.',
      },
      {
        href: '/services/assessments/working-professionals-and-career-changers/',
        title: 'Assessments for Working Professionals and Career Changers',
        description: 'Tests and guidance if you want a better path from where you are.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving.',
      },
      {
        href: '/services/assessments/interview-readiness-self-assessment/',
        title: 'Interview Readiness Self-Assessment',
        description: 'Check your preparation before, during and after an interview.',
      },
      {
        href: '/services/assessments/internship-readiness-self-assessment/',
        title: 'Internship Readiness Self-Assessment',
        description: 'See how ready you are to find and make use of an internship.',
      },
      {
        href: '/blog/portfolio-proof-of-work/portfolio-building-for-freshers-india/',
        title: 'Portfolio Building for Freshers in India',
        description: 'How to show your skills when you have no job history yet.',
      },
      {
        href: '/blog/job-search/skills-needed-for-first-job-india/',
        title: 'Skills Needed for Your First Job in India',
        description: 'The skills employers commonly look for in first-time job seekers.',
      },
      {
        href: '/blog/resume/resume-tips-for-freshers-india/',
        title: 'Resume Tips for Freshers in India',
        description: 'How to write a resume you can explain line by line.',
      },
    ],
    breadcrumbDescription: 'Free career readiness self-assessment with five area scores.',
    webAppDescription:
      'A free original 40-question career readiness self-assessment covering direction, skills you can use, proof of work, people and visibility, and job search habits, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Free 40-question career readiness test with five scores and a 14-day routine.',
    indexNote: 'For students, freshers, professionals and people returning to work',
  },

  depth: {
    stageHeading: 'Which of these describes you right now?',
    stageNote: 'A first-year student, a final-year student, a working professional and someone returning after a break need different next steps, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'college',
        label: 'Student, 1st to 3rd year',
        description: 'Still in college with time to build before you apply',
        title: 'Use your free years to build skills and proof, not only marks',
        body: 'Early in college you have the most time and the least pressure. It helps to try a field, build one or two small things and speak to a few people before final year, while keeping your studies in order.',
        actions: [
          'Choose one skill outside your syllabus and build one small, finished output with it over the next month.',
          'Talk to two seniors or alumni about what their jobs involve and what they would do differently in their second year.',
          'Start a simple folder of everything you make, with a three-line note on each, so proof is ready by final year.',
        ],
      },
      {
        key: 'final',
        label: 'Final year or just graduated',
        description: 'Close to applying, or already applying, for a first job',
        title: 'Narrow your target and start a weekly search system',
        body: 'At this stage a general plan stops working. You need one or two named roles, a resume that fits them, a few pieces of proof and a weekly routine that you follow whether or not a campus drive is running.',
        actions: [
          'Pick one primary role and one back-up role, and write the five skills each one asks for from real postings.',
          'Turn your final-year project and one other piece of work into short, shareable write-ups.',
          'Set a weekly routine of tailored applications, messages to seniors and a Sunday review of your tracking sheet.',
        ],
      },
      {
        key: 'working',
        label: 'Working, wanting a better path',
        description: 'Employed and looking to grow, switch roles or change direction',
        title: 'Build the next role while you are still in the current one',
        body: 'If you are working, you already have real results to draw on and an income that gives you some room to search without rushing. What is often missing is a clear next role and evidence that you can do it.',
        actions: [
          'Write what your next role should have that your current one does not, and check three postings for it.',
          'Record your last three achievements at work with what you did and what changed, so they can go into your resume and interviews.',
          'Spend a fixed two or three hours a week on one visible piece of work or one new connection outside your company.',
        ],
      },
      {
        key: 'restart',
        label: 'Career break, switch or return',
        description: 'Returning after a gap, or moving into a different field',
        title: 'Explain your gap or switch honestly and show something recent',
        body: 'After a break or a switch, the main questions people have are what you can do now and what you have been doing. A short honest explanation, one recent piece of work and a few warm conversations can help more than many cold applications.',
        actions: [
          'Write a two-line honest explanation of your gap or switch, focused on what you did and what you are moving towards.',
          'Complete one recent piece of work, such as a short project, a course task, a volunteer task or a small paid job, to show current skills.',
          'Reconnect with former colleagues, classmates or friends in the field and tell them clearly what kind of role you want.',
        ],
      },
    ],
    tips: [
      'Open a job posting for the role you want and write, in three lines, what a normal day would be. If you cannot, ask one person doing the job two questions: what takes most of their time, and what surprised them in the first year.',
      'Write the top five skills your target role asks for and mark each as can do, can do with help or not yet. Choose one not-yet skill and plan one small task for it this week.',
      'Pick your best piece of work and put it where you can send a link within a minute, such as a drive folder or a one-page site. If you have nothing yet, start a small project this weekend and finish it in two weeks.',
      'Write the names of ten people who are two or three years ahead of you in your field, including seniors, alumni and former colleagues. Message one of them this week with a specific question.',
      'Make a sheet with company, role, date applied, resume version, reply and next follow-up date. Fill in every application you have made so far, even the old ones.',
      'Write what you would choose if your family and friends had no opinion, then check three postings for that choice. Discuss the result with them as a plan with evidence, instead of as a wish.',
      'Take the skill you only know from videos and use it on a real task this week, for example a sheet for a family business or a page for a friend. A rough finished result teaches more than another course.',
      'Pick the skill from your resume that you can least prove and make one small sample of it. If you cannot make one within a few weeks, remove the skill from the resume or label it as learning.',
      'Share one finished piece of work, with a short note on what you learned, on LinkedIn or in a community of people in your field. Share it once a month, as a short note, not a daily routine.',
      'Rewrite the top of your resume for one specific posting by copying its five key skills into your summary and first project. Save the version with the company name.',
      'Search for the role on two job sites and read three postings in full. Write the skills and duties that appear in all three, and use that list to plan your learning.',
      'Offer to do one small task for someone else using a skill from your target postings, such as a sheet for a relative\'s shop or a poster for a club event. Finish it within two weeks and ask them what worked and what did not.',
      'For each project on your resume, write three lines: your part, the tools you used and the result. Practise saying it aloud in under a minute to a friend.',
      'Send a senior a short note about one thing you made or learned, with one question about it, such as what they would improve. Sharing something small gives you something to offer, and a clear question takes them only a minute to answer.',
      'Do not rely on one source. This week, add two new channels to your search, for example company career pages and an alumni group, and note which one leads to replies.',
      'Name one role close to your first choice, such as a support, operations or analyst role if your first choice is a specialist role. Read two postings for it, so you have a second path ready.',
      'Ask a teacher, senior or friend which of your skills they find strongest and weakest, and compare it with your own list. Spend your next learning week on the weakest one that your target role needs.',
      'Start a simple notes file with one line for each piece of work: date, what it was, your part, any feedback and any result. Update it every Sunday so that you never have to recall details from memory.',
      'Send the last person who helped you two lines: what you did with their advice and what happened. Do the same after the next piece of advice you act on, within a week of acting.',
      'After each rejection or silence, write down the role, your resume version and one thing you will change. After three entries, look for a pattern and change that one thing first.',
      'Set a rule: one career idea gets four weeks of a small trial before you judge it. Write the idea, the task and the date to decide, and do not change targets before that date.',
      'Pick one skill and one learning source, and finish them before starting another. Delete or pause the other courses from your phone for now so the choice is made.',
      'Ask a person who has seen your work, such as a client, a teammate, an intern supervisor or a customer, for two lines of honest feedback. Keep it with a date, and ask permission before sharing it.',
      'Check that your headline, photo and top project show the work you want to be known for and match your resume. Ask a friend to look at the profile for one minute and say what they think you do.',
      'Choose two fixed days a week for applications and follow-ups and put them in your calendar. Three tailored applications on those days will teach you more than twenty sent on one tired night.',
    ],
    strongTip: 'This habit is already working for you. Write down one recent example of it with a date, so that you can use it in an interview or on your CV.',
    domains: {
      direction: {
        why: 'Without a direction, skills and applications spread thin. A tested target tells you which skills to build, which proof to make and which people to talk to. For example, someone who has read ten postings for sales support and data entry roles can see which one they would actually try first, and write one resume that fits it.',
        roles: [
          'College years, when choices of electives, projects and internships shape what you can show later',
          'Early careers, where the first role often sets the skills and contacts you build for several years',
          'Career switches, where a clear target role matters more than a general wish for something better',
        ],
        routine: [
          'Days 1 to 3: Choose one role you are considering. Read five postings for it and list the skills and duties that repeat.',
          'Days 4 to 7: Speak to one person who does the work, in person, on a call or by message, and ask what a normal week looks like.',
          'Days 8 to 11: Try the role for a few hours: complete one small task a person in that role would do, and note what you enjoyed and what you did not.',
          'Days 12 to 14: Write one primary role, one back-up role and the reason for each. Share it with one person who knows you and ask what they think.',
        ],
        mistakes: [
          'Choosing a career only because friends, relatives or classmates chose it',
          'Judging a career from its job title, films or social media instead of what the work involves',
          'Changing targets every few weeks, so that no skill or proof builds up',
        ],
        proof: [
          'A one-page note on your target role, with the postings you read and the skills they share',
          'A small trial task from the role, with a line on what you learned from it',
          'Notes from a conversation with someone doing the work',
        ],
        askOthers: 'What does a normal week in your role look like, and what would you check before choosing this career if you were starting again?',
        talkingPoints: [
          'You know what the role involves and have tested your interest in it',
          'You have a reason for your choice and a back-up path',
          'You can link your skills and projects to the role you want',
        ],
        midStep: 'Write one primary role and one back-up role, with three skills each asks for, and complete one small trial task for the primary role this week.',
      },
      skills: {
        why: 'Skills are what people pay for, and a skill you have used on a real task convinces you and others far more than one you have only studied. A short list used well beats a long list half-learned. For example, one finished sheet that tracks the stock of a family shop says more than three spreadsheet courses with nothing made.',
        roles: [
          'Technical and digital roles, where tools and methods are used in daily work and can be shown in small tasks',
          'Business, sales and support roles, where skills such as analysis, writing and communication are judged by results',
          'Freelance and small-business work, where clients pay for what you can deliver, not for the list of courses you took',
        ],
        routine: [
          'Days 1 to 3: List the top five skills from your target postings and rate yourself on each as can do, can do with help or not yet.',
          'Days 4 to 7: Choose one skill and one learning source. Spend 45 minutes a day, with at least half of it on practice tasks.',
          'Days 8 to 11: Use the skill on one small real task, for example a sheet for a family shop or a short report on a topic you know. Finish it, even if it is rough.',
          'Days 12 to 14: Show the result to a senior, teacher or friend, note two corrections and fix them. Add the finished task to your notes of proof.',
        ],
        mistakes: [
          'Starting a new course before finishing the last one',
          'Listing skills on the resume that you have not used on a task',
          'Learning only what is comfortable and avoiding the skill that your target role asks for most',
        ],
        proof: [
          'A finished small task for each of your top skills',
          'A short list showing which skills are can do, can do with help and not yet, updated monthly',
          'Feedback on your skill from someone who has used or checked your work',
        ],
        askOthers: 'Looking at my work, which skill is strongest, which is weakest, and what would you practise first for this kind of role?',
        talkingPoints: [
          'You know your strongest and weakest skills for the role',
          'You learn by doing and can describe what you built',
          'You have a plan to close your biggest skill gap',
        ],
        midStep: 'Pick the one skill your target role needs most and finish one small task with it within a week, before starting any new course.',
      },
      proof: {
        why: 'People who have not worked with you cannot see your skills, so they look for evidence they can open. A project, a report, a result or a line of feedback is the quickest way to move from saying you can do something to showing it. For example, a recruiter who gets a link to a two-page project note can ask real questions, while a resume line saying good at Excel gives them nothing to ask about.',
        roles: [
          'Fresher applications, where there is little work history and projects carry the conversation',
          'Creative, technical and digital roles, where a portfolio or sample is commonly requested or helpful',
          'Career switches, where proof from a new field shows you can do the work before you have the title',
        ],
        routine: [
          'Days 1 to 3: List everything you have made, studied in depth or achieved, and choose the two that best match your target role.',
          'Days 4 to 7: For each one, write the problem, your part, the tools and the result in a few lines, and collect any screenshot, file or link.',
          'Days 8 to 11: Put both in one place that opens on a phone, such as a drive folder, a one-page site or a profile section. Ask a friend to open it and tell you what they understood.',
          'Days 12 to 14: Ask one person who saw the work for two lines of feedback, and add one improvement or a third small piece of work.',
        ],
        mistakes: [
          'Keeping work on your laptop and never sharing it',
          'Describing team work as only your own, which falls apart when someone asks a follow-up question',
          'Showing many half-finished things instead of two or three finished ones',
        ],
        proof: [
          'A folder or page with two or three finished pieces and a short note on each',
          'A line of feedback from a client, senior, teammate or teacher, with permission to use it',
          'A record of results, such as what changed because of your work, in words you can defend',
        ],
        askOthers: 'If you opened this piece of work with no explanation from me, what would you understand about what I can do, and what is missing?',
        talkingPoints: [
          'You can show your work and explain your own part clearly',
          'You are honest about what was team work and what was yours',
          'You can describe what the work achieved or what you learned from it',
        ],
        midStep: 'Choose one piece of work, write its three-line note, and put it online or in a shared folder so you can send a link today.',
      },
      network: {
        why: 'Many openings, projects and pieces of advice travel through people, and someone who asked a clear question or shared useful work is easy to remember. You do not need many contacts, only a few who know what you are working on. For example, a senior who answered your question in March is better placed to mention an opening in June if you sent them an update in between.',
        roles: [
          'Campus and off-campus job searches, where seniors and alumni often explain how their company hires',
          'Freelance and small-business work, where clients usually come through people who have seen your work',
          'Career switches, where talking to people already in the new field shows what to learn and where to apply',
        ],
        routine: [
          'Days 1 to 3: List ten people two or three years ahead of you in your field, including seniors, alumni, ex-colleagues and family contacts.',
          'Days 4 to 7: Send three of them a short message: who you are, what you are working on and one specific question. Do not ask for a job in the first message.',
          'Days 8 to 11: Act on the reply you get, and send a two-line update saying what you did with the advice. Update your profile photo, headline and top project.',
          'Days 12 to 14: Share one piece of work or one thing you learned where people in your field can see it, and send one more message to a new person.',
        ],
        mistakes: [
          'Sending the same long message to many strangers asking for a job',
          'Thinking you have nothing to offer and so never starting a conversation',
          'Thanking a helpful person and then never telling them what happened',
        ],
        proof: [
          'A list of people you have spoken to and what you learned from each',
          'A profile that matches your resume and shows your top projects',
          'A shared post, project or note that people in your field can see',
        ],
        askOthers: 'How did you get your first role in this field, and is there anyone else you think I should speak to?',
        talkingPoints: [
          'You ask specific questions and act on the answers',
          'You keep helpful people informed about your progress',
          'You make your work visible without needing to post every day',
        ],
        midStep: 'Message one person in your target field today with a specific question, and update your profile headline so it says what you are working towards.',
      },
      search: {
        why: 'A good search is a process, not a mood. Tracking what you send, tailoring each application and noting each reply lets you improve every week instead of sending the same thing again. For example, if your tailored applications get replies and the untailored ones do not, your sheet shows where to put your time.',
        roles: [
          'Campus placements and off-campus drives, where several applications and rounds run in parallel',
          'Job switches, where applications are fewer but each one needs a careful fit to the role',
          'Government and exam-based routes, where notifications, dates and documents need to be tracked closely',
        ],
        routine: [
          'Days 1 to 3: Make a tracking sheet and enter every application you have made. Choose five roles you fit well and list the company, link and last date.',
          'Days 4 to 7: For each of the five roles, copy the five key skills from the posting and change your resume summary and first project to match.',
          'Days 8 to 11: Send the applications, and send one message to a person at or near each company. Add a follow-up date seven days ahead.',
          'Days 12 to 14: Review replies. For each no reply or rejection, write one thing to change, such as the resume version, the role or the channel, and apply the change to the next batch.',
        ],
        mistakes: [
          'Sending the same resume to every posting',
          'Applying in a burst when worried and then stopping for weeks',
          'Treating each rejection as final instead of using it as information',
        ],
        proof: [
          'A tracking sheet with dates, versions and replies',
          'Two or three resume versions saved with the role they were made for',
          'A short weekly note on what you changed after each reply',
        ],
        askOthers: 'Looking at this resume and this posting, what would you change to make the fit clearer, and where else should I be looking for openings?',
        talkingPoints: [
          'You search with a system and learn from each reply',
          'You tailor each application to the role',
          'You follow up politely and keep going after a rejection',
        ],
        midStep: 'Set up the tracking sheet today, tailor your resume for one real posting this week and set a follow-up date for it.',
      },
    },
    thirtyDay: [
      'Week 1: Start your lowest-area routine, write your primary and back-up role, and set up a folder where your proof of work will live.',
      'Week 2: Finish the routine, complete one small piece of work with your most important skill, and message two people in your field.',
      'Week 3: Move to your second-lowest area, use two steps from its list, and send a few tailored applications or express your interest to people you spoke to.',
      'Week 4: Retake the self-assessment, compare each area score, and write down what worked, what did not and your plan for the next month.',
    ],
  },

  extras: [
    // College, 1st to 3rd year
    x(['college'], 'direction', 'I have spoken to a senior or alumnus about the jobs my course leads to, beyond the obvious ones.', 'Ask two seniors or alumni from your department what jobs people from your batch actually do and which of them they would not have guessed in first year. Note three roles you had not known about and read one posting for each.'),
    x(['college'], 'skills', 'I use holidays and spare hours to practise a skill that my syllabus does not teach.', 'Pick one skill from the postings of a role you like and give it 30 minutes on four days a week during the next vacation. Finish with one small output, such as a sheet, a short design or a working script.'),
    x(['college'], 'proof', 'I have not yet made anything outside my syllabus, such as a project, a write-up or a small piece of work for someone.', 'Start one small project this month and finish it within three weeks. For example, a sheet for a local shop, a short blog on a subject you know or a small tool for your class. Put it in a folder with a three-line note.', true),
    x(['college'], 'network', 'I take part in a club, event or competition where I meet people from outside my class and year.', 'Join one club, student chapter or inter-college event this semester and take a small task, such as handling registrations or one session. It is a safe way to work with people and to collect names to write to later.'),
    // Final year or just graduated
    x(['final'], 'direction', 'I have chosen one primary role and one back-up role for the next three months.', 'Pick two roles from real postings, write the five skills each one asks for and mark where you stand. Use the primary role for your resume and the back-up for a second version, so that you do not send one general resume everywhere.'),
    x(['final'], 'proof', 'My final-year project is written up so that a stranger can understand it in two minutes.', 'Write a one-page summary with the problem, your part, tools used, result and a link or screenshot. Ask a friend from another branch to read it and tell you what they understood, then fix whatever was unclear.'),
    x(['final'], 'network', 'When people ask what I am looking for, I say I am open to anything.', 'Replace it with one sentence such as "I am looking for a [role] where I can use [skill]". Tell it to teachers, seniors and relatives this week, because people can only help with a specific request.', true),
    x(['final'], 'search', 'I apply and prepare only when a campus drive is announced, and do little in between.', 'Fix two days for applications, two for skill practice, one for messages to seniors and one for review, and keep them even when no drive is running. Write the plan on your wall or phone, and check on Sunday which blocks you actually completed.', true),
    // Working, wanting a better path
    x(['working'], 'direction', 'I know what my next role should have that my current one does not.', 'Write three things your next role must have, such as a skill you will use, a type of problem or a team you will work with. Read three postings that match and see which of the three they actually offer.'),
    x(['working'], 'skills', 'I am practising a skill my current job does not use but my target role needs.', 'Choose one skill from your target postings and give it three hours a week, split into short sessions. Use it on a small real task, for example by offering to help a colleague with a report, so the practice has a result.'),
    x(['working'], 'proof', 'I have written down my last three achievements at work with what I did and what changed.', 'For each achievement, write the problem, your action and the result in three lines, with a number or detail from your own records where you have it. Keep them in a note and add one each quarter.'),
    x(['working'], 'network', 'I rely only on people inside my current company and have few contacts outside it.', 'Contact two former colleagues or classmates this month and meet them for a coffee or a call. Ask what their team is working on and what skills they are looking for, so you widen your view beyond one company.', true),
    // Career break, switch or return
    x(['restart'], 'direction', 'I have decided whether I am returning to the same field or moving to a new one, and I can say why.', 'Write the reason for your choice in two sentences and show it to someone who knows your work. If you are unsure, trial each path for one week with a small task and a conversation before you choose.'),
    x(['restart'], 'skills', 'I have not checked which tools and methods in my field have changed since I last worked.', 'Read ten recent postings for your role and list the tools that appear often and that you do not know. Choose the top two and spend two weeks learning each with one small task, so that you can say what you know of the current tools.', true),
    x(['restart'], 'proof', 'I have a recent piece of work, such as a course project, a volunteer task or a small paid job, that shows what I can do now.', 'Complete one small project in the next three weeks, for example for a local business, a community group or a friend. Write a three-line note on it, as recent work answers the question of what you can do today.'),
    x(['restart'], 'search', 'I have a short, honest line ready to explain my gap or switch.', 'Write two or three sentences: what you were doing, what you learned or what led to the switch, and what you want now. Practise it aloud with a friend until it takes about 20 seconds and sounds calm.'),
  ],

  stageAdvice: {
    college: {
      direction: sa('In the early years of college, you can try several fields at little cost, but the choices are easy to put off.', 'Spend one weekend reading three postings each for two roles you are curious about and note what they ask for.', 'Ask one senior to describe a normal week in their internship or first job, and write down two things you did not know.'),
      skills: sa('In the early years, you have time to build one skill well, beyond the syllabus.', 'Choose one skill and follow one course or book to the end, with a small project in the last week.', 'Practise it for 30 minutes on most days of the semester, and note your progress in one line each Sunday.'),
      proof: sa('In the early years, proof can start small, and what you save now will help you later.', 'Create a folder and save every project, report and certificate with a three-line note on what it was.', 'Take one class project and improve it beyond what the marks needed, then write it up for a stranger.'),
      network: sa('In college, seniors, alumni and club members are the easiest people to approach.', 'Join one club or event team and take on a task that involves speaking to people outside your class.', 'Offer to help at one department event or alumni meet, and use it to speak to two people who work in your field.'),
      search: sa('In the early years, searching means learning how hiring works, before the pressure of applying begins.', 'Look at the placement or internship pages of your college and note which skills the visiting companies ask for.', 'Make a short resume now, even with little on it, and update it at the end of every semester.'),
    },
    final: {
      direction: sa('In the final year, time is short, so one primary and one back-up role matter more than a long list of options.', 'Choose your primary role this week and write its top five skills from three recent postings.', 'Decide a back-up role in a nearby area and prepare a second version of your resume for it.'),
      skills: sa('In the final year, you need to close the skill gap for your first job in a few months.', 'Pick the single skill that appears most in your postings and build one task with it in the next three weeks.', 'Ask your placement cell, a senior or a recent joiner which tools or tests are used in the companies you target.'),
      proof: sa('In the final year, your project, internship and one or two extra pieces of work are your main evidence.', 'Write up your final-year project and one other piece of work, and keep both ready as links to share.', 'Collect a line of feedback from your project guide, an internship supervisor or a teammate.'),
      network: sa('In the final year, seniors who recently joined companies know how the process works.', 'Message three seniors from the last two batches and ask what helped them most in the months before they were hired.', 'Tell your teachers and classmates the specific role you want so they can pass on relevant openings.'),
      search: sa('In the final year, applications run beside exams, projects and campus drives, so a routine matters.', 'Set two fixed evenings a week for tailored applications and track each one on a sheet.', 'Keep a list of off-campus options for the time after any campus drive ends, and apply to a few every week.'),
    },
    working: {
      direction: sa('While working, your direction is often defined by what you are used to, instead of what you want.', 'Write what you want more and less of in your next role, and compare it with three postings.', 'Talk to one person who made the move you are thinking about and ask what they did in the first year.'),
      skills: sa('While working, your daily tasks may not build the skills your next role needs.', 'Ask your manager for one task or small project that uses a skill from your target role.', 'Set a fixed learning slot, such as two early mornings and one weekend hour, and use it for one skill only.'),
      proof: sa('While working, your best proof is already in your results, but it is rarely written down.', 'Write your three strongest achievements in a note with the situation, your action and the result.', 'Check what you are allowed to share, and turn one piece of work into a sample that does not reveal private company information.'),
      network: sa('While working, your contacts may all be inside one company or one team.', 'Meet or call two people outside your company each month who work in the role you want.', 'Update your profile so that it describes the direction you are moving towards, not only the job you hold now.'),
      search: sa('While working, you have limited time and need your search to be quiet and focused.', 'Apply to a small number of well-matched roles each week instead of many at random, and keep a tracking sheet.', 'Read your notice period and appointment terms now, so that you know how an offer would work in practice.'),
    },
    restart: {
      direction: sa('After a break or a switch, the first question is whether to return to the old field or try a new one.', 'List what you liked and disliked in your earlier work, and check three postings in the field you are leaning towards.', 'Try one small task in the new area for a week before deciding to spend months on it.'),
      skills: sa('After a break, tools and expectations in your field may have changed.', 'Read recent postings and list the tools you do not know, then learn the top two with a small task for each.', 'Take one short course or workshop that gives you a finished output, and not a certificate alone.'),
      proof: sa('After a break or a switch, recent work matters more than older work.', 'Complete one project, volunteer task or small paid job within the next month and write it up.', 'Show what you did during the gap, such as learning, caring for family or running a small activity, in one honest line.'),
      network: sa('After a break, the people you knew may have moved on, but many will still reply.', 'Message five former colleagues, teachers or classmates with a short update and a clear request for a conversation.', 'Join one community of people returning to work or switching into your field, and take part in a thread each week.'),
      search: sa('After a break or a switch, a search needs patience and a clear story.', 'Write your two-line explanation and use it in your resume summary and in messages to recruiters.', 'Look for contract, project-based and return-to-work roles as well as full-time ones, as some employers run them to bring people back after a break.'),
    },
  },

  scenarios: [
    sc('direction', 'Friends say everyone is joining a particular course, so you should too. You are not sure it suits you. What do you do?', [
      o('Enrol now before seats or batches fill up, and look into the career side after you have started and understand the course better', 33, 'Early enrolment removes the worry of missing out, but fees and months get spent before you know the work. Before paying, ask the institute where its past students work now and speak to one of them.'),
      o('Check what jobs the course leads to, speak to one person doing that work, then decide', 100, 'You are testing the choice against the work itself, which is what turns a trend into a plan. This week, read three postings for the roles the course leads to and ask one person in that work for fifteen minutes.'),
      o('Ask the three friends who are joining what they expect to do after it, and go ahead if their answers sound sensible', 50, 'Friends can tell you why they chose it, but they are as new to the field as you are. Add one person who already does the work and three postings before you commit.'),
      o('Hold off until the next admission round and see whether your interest in it grows on its own', 17, 'Interest often grows from trying something, more than from waiting for it. Take a demo class or a one-week small task this month, and note whether you wanted to carry on.'),
    ]),
    sc('direction', 'You have three possible careers in mind and cannot choose. How do you decide?', [
      o('Rank the three by starting pay and job stability, and take the top one, since a secure income lets you adjust later', 33, 'Pay and stability matter, but they say little about whether you will do the work well or stay with it. Before ranking, read two postings for each and ask one person what a normal day involves.'),
      o('Discuss all three with your family and go with the one everyone at home feels comfortable about', 17, 'Family views are worth hearing, especially on cost and location, but they cannot tell you what the daily work is like. Bring notes from a short trial of each, so the talk is about evidence.'),
      o('Give each one a week: one small task and one conversation with someone in it, then compare your notes', 100, 'A short trial of each gives you real information about the work and about your own interest, at little cost. Keep one page of notes per career, with what you did, what you liked and what dragged, and decide when the third week ends.'),
      o('Choose the one you already know most about and test it properly for a month before looking at the others', 67, 'Starting with the familiar gets you moving, but you may be picking it only because you know it. After your month, give each of the other two a short trial before you settle.'),
    ]),
    sc('skills', 'Your target role asks for a skill that you have only watched videos about. What is your next step?', [
      o('Finish a complete course on it first so that your basics are solid, and begin building once you have the certificate', 50, 'Solid basics help, but another course delays the real test, and you can finish it and still be unable to use the skill. Start a small task alongside the course so that what you learn gets used the same week.'),
      o('Ask a friend who knows it well to sit with you for an evening and explain the parts the videos left unclear', 33, 'Explanation clears confusion, but skill comes from doing. Use that evening to start a task with your friend nearby, and ask them to check the result.'),
      o('Wait for an internship or job to give you a real task with it, since real work is better practice than made-up work', 17, 'Waiting leaves you with nothing to show when the chance arrives. Create your own real task, such as a sheet for a relative\'s shop or a page for a friend, and finish it this month.'),
      o('Make one small real thing with it this week, rough is fine, and ask someone to look at it', 100, 'A finished rough task shows what you still do not know and gives you something to show. Pick a task you can finish in a few days and ask a senior or friend to point out two corrections.'),
    ]),
    sc('skills', 'You are strong in one skill and weak in another that your target jobs ask for. How do you plan the next month?', [
      o('Put all your time into the weak skill for the month and drop practice of the strong one until the gap is closed', 67, 'Closing the gap is the right instinct, but dropping the strong skill lets your edge fade. Keep fifteen minutes a day on it while most of the time goes to the weak one.'),
      o('Give the weak skill 45 minutes on four days a week, ending in one small output, and keep the strong one going', 100, 'Your strength stays protected while the gap gets a fixed slot and a finish line. Choose the output today, such as a short report or a working file, and put its date at the end of the month.'),
      o('Spend most of your time going deeper into the strong skill so that you become known for one thing, and pick up the weak one on the job when it is needed', 33, 'Depth in one skill is valuable, but the roles you want list the other skill too, and it may be tested before you are hired. Give the weak one a small fixed slot now instead of later.'),
      o('Start applying now and note which skills the interviews actually ask about, then learn exactly those afterwards', 50, 'Interviews do show what employers value, and your notes will be useful. Still, meeting a question on a skill you have not practised can cost a chance you cannot repeat, so close the gap in parallel for the first two weeks.'),
    ]),
    sc('proof', 'A recruiter asks, "Do you have any work I can look at?" and your best college project is saved only on your laptop. What do you do?', [
      o('Tell them it is with you and that you will share it after tidying it up properly, perhaps in a couple of days', 50, 'Wanting to present it well is sensible, but delay can cost the chance. Keep a ready link or PDF so you can reply on the same day, and tidy it later.'),
      o('Send the full project folder as it is, with every file, data sheet and draft, so they can judge everything for themselves', 33, 'Sharing freely is well meant, but a raw folder asks the recruiter to work out what matters. Pick the one or two files that count and add a three-line note.'),
      o('Point them to the project description on your resume and offer to explain it on a call whenever they are free', 17, 'A resume describes the work but does not show it, and people usually want to see something before they schedule a call. Prepare a link and offer the call as well.'),
      o('Send a link or short PDF the same day with a three-line note: the problem, your part and the result', 100, 'A quick, clear reply with proof and context shows you are organised and makes the recruiter\'s job easy. If the work is still on one laptop, upload it today so that the link is always ready.'),
    ]),
    sc('proof', 'You finished a project with a team of four. How do you turn it into proof for your own career?', [
      o('List it on your resume in one line with the team name, the topic, the tools used and the final grade', 33, 'This shows you were part of it but not what you did, and a grade says little about your own work. Add your specific role and one result.'),
      o('Ask your project guide for a signed certificate or a recommendation letter and attach it to your applications', 50, 'A letter from a guide adds credibility, but it is someone else\'s words and shows nothing of the work itself. Keep the letter, and add a page that shows your own part and the result.'),
      o('Ask the team to make one shared page about the project, and link that from your resume without writing about your own part', 67, 'A shared page credits everyone and is a good start, but it hides what you did. Add a short section on your own part, with tools and results, beside the team page.'),
      o('Write a one-page note on your own part and the team result, add a screenshot, and ask a teammate to read it', 100, 'You are specific about your part and fair about the team, and a teammate reading it keeps you honest. Send them the page this week and ask for one line you can quote with their permission.'),
    ]),
    sc('network', 'You want to learn how people enter a field and you know nobody there. What is the best first move?', [
      o('Join a few online communities or WhatsApp groups for the field and watch the discussions for a couple of months before you post anything', 50, 'Watching teaches you the vocabulary, but it tells you little about how people actually got in. Pick two people who post useful answers and send each one a short question about their start.'),
      o('Ask relatives and family friends whether anyone knows someone in the field, and wait for a proper introduction before approaching anyone', 67, 'Family contacts are a warm route and worth asking this week. Do not make them the only route, because waiting for introductions can take months, so also write to two alumni or seniors directly.'),
      o('Send connection requests to as many managers and recruiters in the field as you can find, mentioning that you are looking for openings', 33, 'Requests that ask strangers for a job are easy to ignore, and a long list of unanswered requests teaches you little. Choose fewer people closer to your level and ask about their path instead.'),
      o('Message three people two or three years ahead of you with one specific question each about how they started', 100, 'People a few years ahead remember how it felt and can answer a narrow question in a minute. Find them through your college alumni list, a senior or a professional profile, and send all three messages this week.'),
    ]),
    sc('network', 'A senior replied with useful advice to your message. What do you do next?', [
      o('Thank them warmly and ask in the same message whether they could refer you at their company, since they seem willing to help', 33, 'A referral request this early can feel pushy because they do not yet know your work. Act on the advice first, then ask when you have something to show.'),
      o('Send a polite thank you and leave it there, so as not to take more of their busy time', 50, 'Courtesy is right, but a short update after you act on their advice is usually welcome and keeps the connection alive. Send two lines in a week or two saying what you did.'),
      o('Take the same advice to a few other seniors to compare opinions, and decide which to follow once you have heard them all', 67, 'Comparing views is sensible, but waiting to hear everyone can mean nothing gets done. Try the first piece of advice for a week and use the other opinions to adjust it.'),
      o('Thank them, act on one suggestion within a week, then send a two-line update on what happened', 100, 'Acting and reporting back shows you value their time, and it gives them a reason to help again. Put a date in your phone today for the update.'),
    ]),
    sc('search', 'You have applied to many jobs with the same resume and received almost no replies. What do you change first?', [
      o('Ask a senior to check your resume for mistakes and design, make it look more polished, then carry on applying as before', 50, 'A clean resume helps, but polish alone does not show a recruiter that you fit a specific role. Ask your senior to compare the resume with one posting and say what is missing.'),
      o('Widen your search to more job sites and apply to ten or more roles a day for the next two weeks', 33, 'More volume gives more of the same result when the resume does not fit the roles. Cut the number and change the content first.'),
      o('Add every tool and keyword from the postings you have seen to your skills list, even ones you have only touched, so recruiters notice them', 17, 'Skills you cannot show may be tested in an interview and can cost you the offer. List only what you have used, and put the ones that match the posting first.'),
      o('Pick five roles that fit you best, adjust the top of your resume to each posting and track replies for two weeks', 100, 'Tailoring and tracking turn a guess into a test. Two weeks of notes will show which version and which roles bring replies, and you then repeat what worked.'),
    ]),
    sc('search', 'You are rejected after the final round of a role you wanted. What do you do?', [
      o('Take a few days to rest and then move on to new applications, without going back over the interview', 50, 'Rest is fair after a long process, but skipping the review loses what the round could teach you. Spend twenty minutes writing the questions you were asked and where you hesitated.'),
      o('Write down the questions and your answers while you remember them, and politely ask the recruiter once for feedback', 100, 'You turn a disappointment into information, and a single polite request is acceptable. Use any reply to change one specific thing before your next interview.'),
      o('Message the interviewer to ask exactly why you were not chosen and what the selected candidate had that you did not', 33, 'The wish to know is natural, but this question puts the interviewer in an awkward spot and rarely brings a useful answer. Ask once for one thing to improve instead.'),
      o('Take it as a sign that this type of role is not right for you and focus on a different kind of role', 17, 'Reaching the final round suggests something in your application worked, so one rejection does not show the role is wrong. Judge the field after several interviews, not one.'),
    ]),
    { ...sc('direction', 'You are in your second year and people say to focus only on marks until final year. How do you handle career readiness?', [
      o('Sign up for three or four short online courses over the next year, so that your resume has a good set of certificates by final year', 50, 'Learning is good, but certificates alone are weak proof. Pair each course with something you made and list the made thing first.'),
      o('Follow the advice, as marks matter for exams, eligibility and placements, and start career work only in final year when it becomes urgent', 33, 'Marks do matter, and for many routes they are essential. Starting everything in final year leaves very little time, so use one holiday for a small project.'),
      o('Take a part-time or freelance job in the evenings from now, so that you have experience on your resume as early as possible', 67, 'Early experience is valuable and shows initiative. Check that the hours do not eat into study time, and consider starting with one small project for a local business instead of a regular job.'),
      o('Use the next holiday to build one small project and talk to one person in your target field, while your regular studies carry on', 100, 'You protect your marks and still use free time to test a direction and build proof. Put the next holiday dates in your calendar now and name the project and the person.'),
    ]), stages: ['college'] },
    { ...sc('search', 'Campus drives are over for your batch and you are at home after graduating. What is your plan for the next four weeks?', [
      o('Join a full-time training programme for a few months and start applying only once it finishes and you have a certificate', 50, 'A programme can add skills, but applying only after months delays all feedback. Apply to a few roles each week while you learn, and let the replies guide what you study.'),
      o('Apply to every opening you find on every portal each day, changing only the company name, and note down the ones you sent', 33, 'Effort is good, and keeping a note of applications is a good habit. Untailored volume rarely shows fit, so cut to a few roles a day and change the summary and first project for each.'),
      o('Ask relatives, teachers and family friends to watch for openings, and call each of them once a week to check', 67, 'Referrals matter in many workplaces, and a weekly call keeps you in mind. Make it work harder by giving each person one line on the exact role and skills you offer, and run your own search beside it.'),
      o('Each week, practise a skill daily, send tailored applications and messages to seniors, and review what worked on Sunday', 100, 'A routine that mixes learning, applications and people keeps you moving and shows what works. Write your weekly numbers for applications and messages on a sheet today and keep them for four weeks.'),
    ]), stages: ['final'] },
    { ...sc('direction', 'You are working, but your job gives little room to learn and you want a better path. What do you do?', [
      o('Ask your manager for a move or a bigger role inside the company, and wait for the answer before looking elsewhere', 67, 'An internal move is a low-risk way to grow and worth asking for. Set a date, such as two months ahead, after which you start building outside options if nothing has changed.'),
      o('Apply widely to every opening that pays more than you earn now, and choose among the offers that come', 33, 'A higher salary can help, but without a target role you may only move sideways. Write the role you want first, then apply to a few that match it.'),
      o('Leave the job for a few months and take a full-time course to retrain properly, using your savings, so that you can give it your full attention', 17, 'Retraining can work, but leaving your income before you have tested the new field is risky. Try the new area in the evenings for a month, and consider a break only after that.'),
      o('Keep the job and spend two fixed hours a week on one piece of work in the area you want, while talking to people in it', 100, 'You keep your income while building proof for the next role and testing the direction. Block the two hours in your calendar now and name the piece of work you will finish in the next month.'),
    ]), stages: ['working'] },
    { ...sc('proof', 'You have a gap of a few years and are returning to work. How do you handle the gap in your applications?', [
      o('Leave the gap out of your summary and explain it only if the interviewer asks, so that the first impression rests on your skills', 50, 'Leading with skills is sensible, but a gap that goes unmentioned may raise doubts. Add a single plain line so that you control how it is told.'),
      o('Write a detailed cover note explaining the full reasons for the break, including family circumstances, so nothing is hidden', 33, 'Honesty is good, but a long explanation puts the gap at the centre. Two sentences are enough, and personal details can wait until you are asked.'),
      o('Hold back all applications until you finish a long certification course, so that the gap is covered by recent study', 17, 'New learning helps, but waiting for a certificate delays replies and feedback by months, and the gap is still there. Apply in parallel, and let one finished task from the course speak for your skills.'),
      o('Put two plain lines in your summary on what the gap was and what you have done since, and attach one recent piece of work', 100, 'This answers the question in the recruiter\'s mind, which is what you can do now, and it keeps the gap short and factual. Write the lines today, practise them aloud, and finish the recent piece of work within a month.'),
    ]), stages: ['restart'] },
  ],

  phrases: {
    direction: [
      '"I am aiming for a [role] because I enjoyed [task], and I have also considered [back-up role]."',
      '"I read several postings for this role, and they commonly ask for [skill], [skill] and [skill]."',
      '"Could you tell me what a normal week looks like in your role?"',
    ],
    skills: [
      '"My strongest skill for this role is ..., and I am currently building ... through ..."',
      '"I learned this by doing, for example when I made ... for ..."',
      '"I do not know this tool well yet, but I have started a small project to learn it."',
    ],
    proof: [
      '"Here is a link to a project where I was responsible for ... and the result was ..."',
      '"In this team project, my part was ... and the team delivered ..."',
      '"I kept notes on this, so I can show you what I did at each step."',
    ],
    network: [
      '"I am a [student or role] working on [skill]. May I ask one question about how you started in this field?"',
      '"I tried your suggestion about ..., and this is what happened."',
      '"I recently completed ..., and I would be glad to hear any feedback you have."',
    ],
    search: [
      '"I have read the posting and adjusted my resume to highlight my experience in ..."',
      '"I applied on [date] and wanted to check whether there is any update on the next steps."',
      '"Could you tell me what I could improve for similar roles in future?"',
    ],
  },

  stagePlan: {
    college: [
      'Choose one skill outside your syllabus and finish one small output with it within a month.',
      'Talk to two seniors or alumni about what their jobs involve, and read three postings for each role they mention.',
      'Start a proof folder and save every project, report and result with a three-line note.',
      'Join one club or event team this semester, and retake this test at the end of the term to see what moved.',
    ],
    final: [
      'Choose one primary and one back-up role, and write the top five skills for each from recent postings.',
      'Write up your final-year project and one other piece of work, and keep the links ready to send.',
      'Message three recent seniors for advice on the hiring process and tell your teachers the exact role you want.',
      'Follow a weekly routine of tailored applications, skill practice and a Sunday review of your tracking sheet.',
    ],
    working: [
      'Write down what your next role should have, and compare it with three real postings.',
      'Record your last three achievements with what you did and what changed.',
      'Spend two or three fixed hours a week on one visible piece of work in your target area.',
      'Talk to two people outside your company each month, then apply to a few well-matched roles with your notice terms clear.',
    ],
    restart: [
      'Write a two-line honest explanation of your gap or switch, and practise saying it aloud.',
      'Complete one recent piece of work, such as a project, a volunteer task or a small paid job.',
      'Learn the top two tools that recent postings ask for and you do not yet know.',
      'Message five former colleagues or classmates, then apply to project, contract and full-time roles that fit.',
    ],
  },

  talk: {
    direction: {
      q: 'Why have you chosen this career path, and what else did you consider?',
      a: 'Name the role, give one reason based on something you have done or tried, such as a project or a trial task, and mention the alternative you considered and why you chose this one. Keep it to about a minute.',
      line: 'Aiming for [role], after reading [number] postings, trying [small task] and speaking to [number] people in the field.',
    },
    skills: {
      q: 'What is your strongest skill, and how did you learn it?',
      a: 'Name one skill the role needs, say how you learned it and give one example of using it on a real task. Add one skill you are still building so the answer sounds honest.',
      line: 'Skilled in [skill], applied in [task or project] to produce [result], and currently building [skill].',
    },
    proof: {
      q: 'Can you show me something you have made, and what was your part in it?',
      a: 'Open or share one piece of work, explain the problem it solved, say clearly which part you did yourself and what the result was. If it was a team effort, say so and name what the team delivered.',
      line: 'Built [project] to [purpose], responsible for [your part], using [tools], resulting in [outcome or feedback].',
    },
    network: {
      q: 'How did you learn about this field, and who have you spoken to?',
      a: 'Describe one or two real conversations, what you learned and what you did differently afterwards. This shows curiosity and that you act on advice.',
      line: 'Spoke with [number] professionals in [field], applied advice on [topic] and shared [work] on [platform].',
    },
    search: {
      q: 'What have you been doing to find a role, and what have you learned from it?',
      a: 'Describe your system briefly: how many roles you target, how you tailor your resume and how you track. Then give one thing you changed after a reply or a rejection, which shows that you learn.',
      line: 'Applied to [number] targeted roles with tailored resumes, tracked replies and improved [resume or approach] after feedback.',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Employers and clients respond to specifics. For each area, prepare one true answer with what you did and what happened as a result.',
    mode: 'interview',
  },
};
