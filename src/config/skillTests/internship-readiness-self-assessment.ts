// Internship Readiness Self-Assessment: a complete self-rating test bundle.
// General guidance only. No statistics, norms, pass marks or selection claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

export const bundle: SkillTestBundle = {
  test: {
    id: 'internship-readiness-self-assessment',
    slug: 'internship-readiness-self-assessment',
    pageUrl: '/services/assessments/internship-readiness-self-assessment/',
    breadcrumbName: 'Internship Readiness Self-Assessment',
    metaTitle: 'Internship Readiness Test | Am I Ready for an Internship?',
    metaDescription:
      'Free internship readiness self-assessment: 40 questions and five scores for goals, proof, search, workplace habits and learning. Instant result, no sign-up.',
    h1Lead: 'Internship Readiness',
    h1Accent: 'Self-Assessment',
    eyebrow: 'For college students, fresh graduates, diploma and non-engineering streams',
    heroSub:
      'Many students apply for an internship with a copied resume, no clear goal and no idea how to behave on the first day. This free self-assessment checks five areas, knowing what you want, proof of your skills, finding and applying, workplace habits, and learning fast, then shows which one to fix first before you apply.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'readiness areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five internship readiness areas from your own ratings',
      'About 7 minutes',
      'What to fix first, with a 14-day routine',
    ],
    reportTitle: 'Internship Readiness Report',
    reportFile: 'future-career-school-internship-readiness-report.pdf',
    reportKicker: 'INTERNSHIP READINESS REPORT',
    resultKicker: 'Your internship readiness result',
    scoreLabel: 'Overall internship readiness',
    bands: {
      high: 'Ready in this area.',
      mid: 'Partly ready, with gaps to close.',
      low: 'Prepare this area first.',
    },
    domainsHeading: 'Five internship readiness areas this self-assessment covers',
    domainsIntro:
      'An internship goes well or badly long before the first day. These five areas cover what you decide, what you can show, how you find and apply, how you behave once you are there, and how much you take away.',
    domains: [
      {
        key: 'goals',
        name: 'Knowing what you want from an internship',
        short: 'A clear reason, field and practical limits',
        strong: 'You know what you want to learn or test, which fields interest you and what hours, location and duration you can manage, so you choose on purpose.',
        weak: 'You want an internship mainly because others have one or a certificate is needed, and you are not sure what you would do or what you want from it.',
        plan: [
          'Write one sentence that starts "In this internship I want to find out whether I like ... and learn how to ...".',
          'List three fields or kinds of work you would like to try and one you want to rule out, with a reason for each.',
          'Write your practical limits: weeks available, hours per day, travel distance or remote work, and any course rule on credit or reports.',
        ],
      },
      {
        key: 'proof',
        name: 'Resume, portfolio and skills proof',
        short: 'Something real to show, even with no experience',
        strong: 'Your resume is your own, every line can be explained, and you can show a file, project or activity that proves what you say you can do.',
        weak: 'Your resume is a template with your name, you have nothing to show beyond marks, and you could not explain some lines if asked.',
        plan: [
          'Write a one-page resume with education, skills, projects or activities and any volunteering, and explain every line aloud to a friend.',
          'Make one piece of visible proof in the next two weeks, such as a short report, a poster, a sheet, a page, a presentation or an event plan.',
          'Check your email address, profile photo and public pages, and keep one clean link or file folder you can share.',
        ],
      },
      {
        key: 'search',
        name: 'Finding and applying',
        short: 'Looking in the right places and following up',
        strong: 'You know where genuine internships are listed, you tailor each application, keep track and check that an offer is real before you accept.',
        weak: 'You depend on one portal or one friend, send the same message everywhere, lose track of applications or are unsure how to tell a real offer from a fake one.',
        plan: [
          'List five places to look: your placement or training cell, a faculty member, official company career pages, a recognised government or institute portal, and people you know.',
          'Make a sheet with company, role, date applied, contact, reply and follow-up date, and add every application.',
          'Write a four-line message that says who you are, what you can do, why this organisation and when you are available, and edit it for each one.',
        ],
      },
      {
        key: 'conduct',
        name: 'Workplace habits and professionalism',
        short: 'Time, communication, privacy and taking feedback',
        strong: 'You are on time, reply promptly, warn early about problems, respect privacy and take feedback calmly, so people are happy to give you more work.',
        weak: 'You are unsure about workplace rules, go silent when stuck or late, or find feedback hard to take, and small habits could cost you the support you need.',
        plan: [
          'Practise a work routine for one week: reach on time, reply to every message within a day and note your tasks at the start and end of each day.',
          'Write the exact words you will use to say you are delayed, you did not understand a task or you need an extra day, and keep them in your phone.',
          'Learn the basic rules about confidentiality, dress, phone use and social media posts, and ask on the first day if you are unsure.',
        ],
      },
      {
        key: 'learn',
        name: 'Learning fast and getting value',
        short: 'Asking, noting, taking more work and leaving with proof',
        strong: 'You ask specific questions, record what you learn, ask for more work and finish with feedback, a reference and work you can show.',
        weak: 'You wait to be told what to do, ask only when badly stuck or finish the internship with nothing to show beyond a certificate.',
        plan: [
          'Keep a daily learning note with three lines: what I did, what I learned, what I will ask tomorrow.',
          'Before asking any question, try for 15 minutes, write what you tried and then ask a specific question to the right person.',
          'Plan the last week: ask for feedback, a reference or letter, permission to show your work, and a short summary of what you handled.',
        ],
      },
    ],
    questions: [
      { d: 'goals', text: 'I can say in a sentence or two what I want to learn or find out from an internship.' },
      { d: 'proof', text: 'I have a resume that lists my studies, skills and activities, and I can explain every line.' },
      { d: 'search', text: 'I know at least three places to look for internships, such as my college, official portals, a teacher, family contacts or companies I follow.' },
      { d: 'conduct', text: 'I know how to behave on the first day, such as reaching on time, dressing suitably and asking who to report to.' },
      { d: 'learn', text: 'When a task is unclear, I try it for a short while and then ask a specific question.' },
      { d: 'goals', text: 'I know which kinds of work or fields I would like to try, and which I would like to rule out.' },
      { d: 'proof', text: 'I can show something I have made or done, such as a file, report, design, page, project or an event I helped run.' },
      { d: 'search', text: 'I write a separate short message for each application instead of sending the same one everywhere.' },
      { d: 'conduct', text: 'I tell someone early when I will miss a deadline or cannot attend, instead of going silent.' },
      { d: 'learn', text: 'I keep a daily or weekly note of what I did and what I learned.' },
      { d: 'goals', text: 'I would take any internship at all, just for the certificate, without checking what I would actually do.', reverse: true },
      { d: 'proof', text: 'My resume is a template or a friend\'s resume with a few words changed.', reverse: true },
      { d: 'search', text: 'I keep a list of my applications with the date, the contact person and the next follow-up.' },
      { d: 'conduct', text: 'I keep company and client information private and do not post it on social media without permission.' },
      { d: 'learn', text: 'During a task I wait to be told what to do and rarely ask for more work.', reverse: true },
      { d: 'goals', text: 'I have checked whether my course, college or university has rules on internship duration, reports or credit.' },
      { d: 'proof', text: 'My email address, profile photo and public social media pages would look fine if an employer saw them.' },
      { d: 'search', text: 'I check that an internship is genuine before applying, and I would never pay a fee to get one.' },
      { d: 'conduct', text: 'I find it hard to take feedback, and I sometimes argue instead of listening.', reverse: true },
      { d: 'learn', text: 'I can name two skills I want to improve during an internship and how I will know they improved.' },
      { d: 'goals', text: 'I have thought about the weeks, daily hours, travel or remote work that I can manage along with my studies and home duties.' },
      { d: 'proof', text: 'I can describe one task I did on my own in three parts: the problem, my action and the result.' },
      { d: 'search', text: 'I find it hard to approach people I do not know about an opening, so I only use portals.', reverse: true },
      { d: 'conduct', text: 'I usually reply to messages and emails within a day, politely and clearly.' },
      { d: 'learn', text: 'I plan to ask my supervisor for feedback, a reference or letter, and permission to show my work before the internship ends.' },
    ],
    readingTitle: 'How to read your internship readiness result',
    readingSections: [
      {
        title: 'Readiness is a set of habits, not a degree or a grade',
        body: [
          'Each statement describes something you do or can show, such as keeping a list of applications or noting what you learned each day. That makes readiness something you can build. A lower score means a step you have not practised yet, not a lack of ability.',
        ],
      },
      {
        title: 'Why these five areas',
        body: [
          'An internship has a before, a during and an after. Knowing what you want and having proof come before. Finding and applying is the move itself. Workplace habits and learning are what happens during, and they decide what you take away afterwards.',
          'A first-year student may score low on proof simply because there is little to show yet. A final-year student may need more on applying and conduct. A diploma, ITI, BBA, BCom or BA student may find that proof and search need a different style, such as a work sample, a reference from a teacher or a local business contact, not a code repository.',
        ],
      },
      {
        title: 'Look at the lowest area, then at the gap between areas',
        body: [
          'The overall score is only a rough summary. The more useful reading is the lowest area, because one weak area can waste strength elsewhere. A strong resume with poor workplace habits, or good habits with no way to find openings, still leaves you stuck.',
        ],
      },
      {
        title: 'Turn scores into steps, not worry',
        body: [
          'Pick your lowest area and follow its 14-day routine. Retake the test after a few weeks and compare it with your own earlier result. If a score does not move, look at the statements you rated lowest and fix those first.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own preparation. It does not replace advice from a teacher, a placement officer or someone who works in the field you are considering.',
      'It is not an employer test and does not predict whether any organisation will offer you an internship or a job.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not mean you are ready for every internship, and a low score does not mean you are not.',
      'Internship rules differ between colleges, universities, boards and employers. Check your own course guidelines and the official offer letter, as they come first.',
    ],
    faqs: [
      {
        q: 'Is this internship readiness test free?',
        a: 'Yes. You can take it without paying and without signing up, see your result on screen and download the report as a PDF.',
      },
      {
        q: 'How do I know if I am ready for an internship?',
        a: 'Readiness has five parts: knowing what you want, having proof of your skills, finding and applying well, workplace habits and learning fast. This test rates each part so you can see which are ready and which need work before you apply.',
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
        q: 'Can first-year students and non-engineering students use this internship self-assessment?',
        a: 'Yes. You choose whether you are in the first or second year, in the final year, a graduate looking for first experience, or in a diploma, ITI, BBA, BCom, BA or other non-engineering stream. The extra questions and advice change with your choice, and the examples are not limited to IT.',
      },
      {
        q: 'Do I need experience or a portfolio before I apply?',
        a: 'No. Most internships exist because you do not have experience yet. What helps is a clear reason, an honest resume and one small thing you have made or done. The test shows how to build that proof with what you already have.',
      },
      {
        q: 'How is this different from the interview readiness test?',
        a: 'The interview readiness test is about the interview itself: research, examples, answers and follow-up. This one is wider and starts earlier: choosing what you want, building proof, finding genuine openings and then behaving and learning well during the internship. Taking both covers the whole path.',
      },
      {
        q: 'How often should I take it?',
        a: 'Take it once now, follow the 14-day routine for your lowest area, and retake it before you apply or when you start your internship. Your own earlier result is the only fair comparison.',
      },
    ],
    related: [
      {
        href: '/blog/job-search/internship-vs-full-time-job-india/',
        title: 'Internship vs Full-Time Job in India',
        description: 'How the two differ and how to choose between them.',
      },
      {
        href: '/blog/job-search/how-to-get-a-job-without-experience-india/',
        title: 'How to Get a Job Without Experience in India',
        description: 'Ways to build proof when you have little or no work history.',
      },
      {
        href: '/blog/resume/resume-tips-for-freshers-india/',
        title: 'Resume Tips for Freshers in India',
        description: 'How to write a resume you can explain line by line.',
      },
      {
        href: '/blog/portfolio-proof-of-work/portfolio-building-for-freshers-india/',
        title: 'Portfolio Building for Freshers in India',
        description: 'Create visible proof of your skills before your first job.',
      },
      {
        href: '/blog/job-search/first-job-after-graduation-india/',
        title: 'First Job After Graduation in India',
        description: 'What to do in the months after your degree.',
      },
      {
        href: '/services/assessments/interview-readiness-self-assessment/',
        title: 'Interview Readiness Self-Assessment',
        description: 'Prepare for the interview that follows your application.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
      },
    ],
    breadcrumbDescription: 'Free internship readiness self-assessment with five area scores.',
    webAppDescription:
      'A free original 40-question internship readiness self-assessment covering knowing what you want, resume and skills proof, finding and applying, workplace habits and professionalism, and learning fast, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Free 40-question internship readiness test with five scores and a 14-day plan.',
    indexNote: 'For students, graduates, diploma and non-engineering streams',
  },

  depth: {
    stageHeading: 'Which of these describes where you are now?',
    stageNote: 'A first-year student, a final-year student, a graduate and a diploma or non-engineering student face different internship questions, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'early',
        label: 'First or second year',
        description: 'Early in a degree, looking for a first taste of work',
        title: 'Use the internship to explore, and build small proof first',
        body: 'In the early years, most employers do not expect deep skills, and a short summer or part-time experience is mainly about trying a field. Your best use of this time is to explore, build one or two small pieces of proof, and decide what to try next.',
        actions: [
          'Choose two fields to try and ask for a short role, a few weeks of shadowing or a small project with each.',
          'Build one small piece of proof this month, such as a report, a poster, a short video, a sheet or a club project, and keep it in one folder.',
          'Ask your college for its internship rules, including any minimum duration, report format or credit, so that you plan before the semester ends.',
        ],
      },
      {
        key: 'final',
        label: 'Final year, before placement',
        description: 'Final-year student wanting an internship before campus or off-campus jobs',
        title: 'Aim for an internship that adds to your resume and could lead to an offer',
        body: 'In the final year, time is limited by exams, project work and placement drives. A well-chosen internship gives you real work to talk about in interviews, and a good one can lead to a conversation about a full-time role, though no organisation is obliged to offer one.',
        actions: [
          'Tell your placement cell and your project guide which kind of role you want, and ask if the college has partner organisations for internships.',
          'Plan the internship around your exam and drive calendar, and agree the days and hours in writing before you start.',
          'Turn the internship into three resume lines with a task, your action and a result, and ask your supervisor to confirm them.',
        ],
      },
      {
        key: 'graduate',
        label: 'Graduate, first experience',
        description: 'Passed out and looking for first work experience',
        title: 'Turn the gap into a structured trial of the work you want',
        body: 'After graduation, you need to show employers that you are active and learning. A well-chosen internship or trial project, even a short one, gives you something to say about the months since college and a person who can speak for you.',
        actions: [
          'Choose one role you want to test and apply to at least five organisations, using a tracking sheet and a separate message for each.',
          'Ask each organisation about the learning plan, the supervisor, the duration, whether it is paid or unpaid and what you will receive at the end.',
          'Do one small self-directed project in the same field while you search, so that your resume stays current.',
        ],
      },
      {
        key: 'vocational',
        label: 'Diploma, ITI, BBA, BCom, BA or other streams',
        description: 'Diploma, ITI, management, commerce, arts and other non-engineering students',
        title: 'Look beyond IT and build proof that fits your field',
        body: 'Internships exist in accounting firms, shops and workshops, hospitals, schools, NGOs, media, banks, travel, retail, small manufacturers and family businesses, not only in IT. Your proof may be a ledger you maintained, a pattern you made, a campaign plan, a repaired machine or a customer you served.',
        actions: [
          'Look at local businesses, trade bodies, training institutes and NGOs near you, and ask a teacher or instructor who can introduce you.',
          'Collect proof in your own field, such as a photographed job, a worked example, a campaign plan, a filled sheet or a letter from a customer or workshop head.',
          'Check whether your board, institute or apprenticeship scheme has its own internship or on-the-job training rules before you accept an offer.',
        ],
      },
    ],
    tips: [
      'Finish this sentence in writing: "By the end I want to have learned ... and to find out whether I like ...". If you cannot finish it, talk to one person who does that work for 15 minutes and ask what a normal week is like.',
      'Write a one-page resume today with education, skills, projects or activities and volunteering. Read it to a friend or senior and write one sentence of explanation for every line you could not answer at once.',
      'Make a list of five places by tonight: your college cell, one teacher, two official company pages and one person you know. Check one of them every week for a month.',
      'On the first day, plan to reach 10 minutes early, wear plain neat clothes, carry a notebook and ID, and ask your supervisor on arrival what you should do first and who to go to for questions.',
      'Try the task for 15 minutes, write what you tried, and then ask something like "I did A and B and got C, is the next step D?" A specific question is easier to answer than "I do not understand".',
      'Write the names of three kinds of work you would like to try, such as accounts, content, sales, field work, design or teaching, and one you would rather not do. Look for internships that match the first list.',
      'Pick one small piece of work and finish it this week, such as a one-page report, a social media post set, a price comparison sheet or a simple form. Store it in a folder and note what you did in three lines.',
      'Choose two openings you really want and write a four-line message for each, with who you are, what you can do, why this organisation and your available dates. Do not copy it to a third one without changing it.',
      'Message your supervisor as soon as you know a problem, using a line such as "I may need until tomorrow evening for this, will that be fine?" Early warning is far better than a late excuse.',
      'Use the last five minutes of each day to write three lines: what I did, what I learned, what I will ask tomorrow. Read the notes on Friday and pick one thing to practise.',
      'Before applying, write down what you would do each week in this internship. If you cannot name at least three tasks, ask the organiser before accepting, since a certificate alone is a weak reason.',
      'Open your resume and replace the template wording with your own facts: your course, your best three skills with an example for each, and one activity. Remove anything you cannot explain.',
      'Write the next step for each application in a sheet and set a reminder for a polite follow-up after a week. Without a record you will forget who you have written to.',
      'Treat everything you see at work as private unless told otherwise. Ask before taking photographs or posting about your office, and never share client names, files or screenshots.',
      'Pick one small task each day and say to your supervisor, "I have finished this, is there something else I can help with?" Do this on the second day itself, since waiting to be told rarely brings extra work.',
      'Ask your college office or department for the written rules on duration, reports, attendance and credit for internships. Keep a copy, and show it to the organiser before you finalise dates.',
      'Search your own name, switch to a plain profile photo, check your email address sounds like your real name and make personal posts private if you would not want an employer to see them.',
      'Before sending any application, search for the organisation, check its official website and contact details, and ask for the offer in writing. A genuine internship will not ask you for money.',
      'When you receive feedback, write down the words without replying, say "thank you, I will work on that" and then decide later what to change. Arguing now closes the door to getting feedback again.',
      'Choose two skills, such as writing reports, using spreadsheets, speaking to customers or handling tools, and add a way to check each one, such as "I can finish a one-page report in one hour without help".',
      'Write down your weeks, daily hours and travel limits, and speak to your family about them before you apply. Say them honestly to the organiser so that you are not forced to leave halfway.',
      'Take one task you did recently and write: the problem, what you did, the result. If it does not fit in three lines, choose another task or practise explaining it aloud once.',
      'Pick one person you admire in your field and send a short, polite message to ask for 10 minutes. Use your teacher, senior or family friend as a first contact. Even one such conversation can change how you search.',
      'Set a rule to reply to messages and emails the same day, even if only to say "received, will reply by tomorrow". Check email twice a day during your search.',
      'Put a reminder in your calendar for the last week to ask your supervisor for feedback, a reference or letter, and which of your work you may show. Write the list of tasks you handled on the way.',
    ],
    strongTip: 'This is already a habit that works for internships. Keep doing it and use it as one of your strengths.',
    domains: {
      goals: {
        why: 'An internship is short, so a clear reason decides how much you get from it. Knowing what you want to learn or rule out helps you pick the right place, ask for the right tasks and avoid a few weeks of only making tea or copying files.',
        roles: [
          'College or university rules, where a set number of weeks or a report may be needed for credit',
          'Choosing between fields, such as accounts, marketing, operations, teaching, design or field work, before committing to a course or a first job',
          'Balancing an internship with exams, family duties, travel and part-time work',
        ],
        routine: [
          'Days 1 to 3: Write what you want to learn, what you want to find out and three fields you would like to try. Add one you would rule out and the reason.',
          'Days 4 to 7: Speak to two people who do the work you are curious about, and ask what a normal week looks like and what a beginner usually does.',
          'Days 8 to 11: Write your limits: weeks, hours, travel, remote work, expenses and exam dates. Read your college or university rule on internships and note anything required.',
          'Days 12 to 14: Write a one-paragraph internship goal and share it with a teacher or senior. Ask whether the goal is realistic and what you should change.',
        ],
        mistakes: [
          'Taking any internship only for the certificate and finding there is little real work to do',
          'Picking a field because friends chose it, without checking whether the daily work suits you',
          'Not reading the course rules, then finding that the internship does not count for credit',
        ],
        proof: [
          'A written goal sentence and a short list of fields you want to try',
          'A note of two conversations with people who do that work',
          'A list of your practical limits and your college rule, kept in one place',
        ],
        askOthers: 'If you were me, what would you want to learn from a first internship, and what kind of place would you look at?',
        talkingPoints: [
          'You chose this internship for a clear reason and can explain it',
          'You know what you want to learn and what you want to find out',
          'You thought about your time and availability, so you can commit to the dates',
        ],
        midStep: 'Write a three-line goal and ask one person who works in the field whether the goal is realistic for a beginner.',
      },
      proof: {
        why: 'Organisations offering internships cannot see your potential. They see your resume, a link or file and how you describe your work. A small real piece of proof tells them more than marks or a list of skills.',
        roles: [
          'Applications to companies, shops, NGOs, hospitals, schools and workshops, where a clear resume and a sample of work help',
          'Cases where there is no work history, so projects, activities and volunteering carry the resume',
          'Fields beyond IT, where proof can be a plan, a ledger, a pattern, a lesson, a photograph or a report',
        ],
        routine: [
          'Days 1 to 3: Write your resume on one page with education, skills, projects, activities and volunteering. Remove anything you cannot explain.',
          'Days 4 to 7: Choose one small piece of proof that suits your field and finish a first version. Examples: a short report, a sheet, a post set, a lesson plan, a sketch or a photographed job.',
          'Days 8 to 11: Improve the proof after feedback from a teacher or senior. Write three lines on the problem, your action and the result, and put it in a folder.',
          'Days 12 to 14: Clean up your email address, profile photo and public pages. Make one link or folder you can share and test it on another phone.',
        ],
        mistakes: [
          'Using a template or a friend\'s resume with only the name changed',
          'Listing skills such as "MS Office" or "communication" with nothing to show for them',
          'Sending a large file or a broken link, or a profile that looks careless',
        ],
        proof: [
          'A one-page resume where every line has a prepared sentence',
          'One piece of finished work with three lines on what you did and what it achieved',
          'A clean, shareable folder or link, plus a profile photo and email you are happy for others to see',
        ],
        askOthers: 'If you read my resume and the work I showed, what stands out and what is unclear or hard to believe?',
        talkingPoints: [
          'You can explain every line of your resume',
          'You can show real work and describe your part in it',
          'Your online presence is tidy and matches your resume',
        ],
        midStep: 'Choose your one best piece of work and write its three-line story, then ask one person to look at it.',
      },
      search: {
        why: 'Good internships are not always on the first portal you visit. Many come through teachers, local contacts or a polite direct message. A system and a clear message help you apply widely without losing track, and checking each offer protects you from fake ones.',
        roles: [
          'College placement or training cell routes, plus portals and company pages',
          'Direct approaches to local firms, shops, clinics, studios, NGOs and family contacts, which are common outside big cities',
          'Checking that an offer is genuine, in writing, and free of any fee',
        ],
        routine: [
          'Days 1 to 3: List ten places that could take an intern and write how you will reach each one. Include your cell, a teacher, two official company pages and local contacts.',
          'Days 4 to 7: Write your four-line message and a one-page resume. Create the tracking sheet and send your first three applications.',
          'Days 8 to 11: Ask two people for an introduction, and check every offer with the official website, a written offer and a contact you can call. Never pay a fee.',
          'Days 12 to 14: Follow up on the first applications with one polite message each, and log the replies. Add five more places to the sheet.',
        ],
        mistakes: [
          'Sending one identical message to fifty places and getting no replies',
          'Accepting an offer that asks for payment or has no written details',
          'Forgetting who you contacted and when, so follow-ups never happen',
        ],
        proof: [
          'A tracking sheet with dates, contacts and follow-ups',
          'Four or five different messages written for specific organisations',
          'A list of introductions you asked for and replies received',
        ],
        askOthers: 'Do you know anyone, or any place, that takes interns in this field, and would you be willing to introduce me?',
        talkingPoints: [
          'You looked in more than one place and chose with care',
          'You wrote to this organisation for a specific reason',
          'You checked the offer and the terms before accepting',
        ],
        midStep: 'Send three well-written applications this week and log them in your sheet with a follow-up date.',
      },
      conduct: {
        why: 'In a short internship, people judge you quickly by small things: whether you are on time, whether you reply, whether you warn them about problems and whether you handle feedback calmly. These habits decide how much help and trust you receive.',
        roles: [
          'First-day basics such as reporting time, dress, ID, phone use and who to report to',
          'Working with a supervisor and a team in an office, shop, workshop, clinic, school or at home online',
          'Handling confidential material, customer details and social media about your workplace',
        ],
        routine: [
          'Days 1 to 3: Wake and reach on time for every class and event. Reply to every message within a day, and note the exact times in a notebook.',
          'Days 4 to 7: Write four scripts for "I am running late", "I did not understand", "I need one more day" and "thank you for the feedback". Say each aloud.',
          'Days 8 to 11: Ask a teacher or senior to give you feedback on one piece of work. Do not reply with reasons, write the points and say thank you.',
          'Days 12 to 14: Read the basic rules on privacy, dress, phone use and social media for workplaces. Write down the three you are most likely to forget.',
        ],
        mistakes: [
          'Disappearing without a message when something goes wrong',
          'Defending every piece of feedback and so getting less of it',
          'Posting photographs or screenshots from the workplace without asking',
        ],
        proof: [
          'A record of on-time attendance and replies during college or a project',
          'A line from a teacher or team leader about your reliability',
          'Your written scripts for delays, doubts and feedback',
        ],
        askOthers: 'In the work we did together, was there any habit of mine, such as timing, replying or taking feedback, that I should change?',
        talkingPoints: [
          'You are reliable with time and messages',
          'You warn early and ask clearly',
          'You respect privacy and take feedback well',
        ],
        midStep: 'For one week, reply to every message within a day and write down when you were late, then fix the pattern you see.',
      },
      learn: {
        why: 'The value of an internship is what you take away. People who ask specific questions, write down what they learn and ask for more work usually get more responsibility, and they finish with feedback and proof, not only a certificate.',
        roles: [
          'The first week, when you learn the tools, the people and the way things are done',
          'Mid-way, when asking for a bigger task or a new area makes a difference',
          'The last week, when you collect feedback, a reference or letter and permission to share your work',
        ],
        routine: [
          'Days 1 to 3: Start a learning note. Each evening write what you did, what you learned and one thing you will ask tomorrow.',
          'Days 4 to 7: For any problem, work on it for 15 minutes, write what you tried and then ask one specific question to the right person.',
          'Days 8 to 11: Offer to help on a small task in a club, project or family business, and say "I have finished, what else can I take on?" at least once a day.',
          'Days 12 to 14: Practise the closing steps. Write a message asking for feedback, a letter and permission to show your work, and a one-page summary of tasks you handled.',
        ],
        mistakes: [
          'Waiting for instructions and doing nothing when the supervisor is busy',
          'Asking "what should I do" with no sign that you tried anything',
          'Finishing with a certificate and no record of the work',
        ],
        proof: [
          'A learning note showing what you learned each week',
          'A reference, feedback note or letter from a supervisor',
          'A one-page summary of your tasks and results, with permission to share any work',
        ],
        askOthers: 'What is one thing you would like me to do better and one more thing you think I could take on?',
        talkingPoints: [
          'You learned specific things and can name them',
          'You took on extra tasks when you could',
          'You left with feedback and work you can show',
        ],
        midStep: 'Start the learning note today and ask one person for a small extra task you can finish within a week.',
      },
    },
    thirtyDay: [
      'Week 1: Write your internship goal and limits, and do the first half of your lowest-area routine.',
      'Week 2: Finish that routine, complete one piece of proof and set up the application tracking sheet.',
      'Week 3: Move to your second-lowest area, apply to at least three well-matched places and ask two people for introductions.',
      'Week 4: Follow up on applications, prepare for the first day with your scripts and checklist, and retake the self-assessment to compare each area.',
    ],
  },

  extras: [
    // Early years
    x(['early'], 'goals', 'I treat my first internship as a way to explore and try fields, not as a final choice.', 'Plan to try two different fields over your first two years, even for two or three weeks each. Write after each one what you liked and what you did not, so your next choice is based on experience.'),
    x(['early'], 'proof', 'I have started collecting small pieces of work from my classes, clubs and fests, such as reports, posters, photographs or plans.', 'Create one folder today and add anything you made this semester, with a note of the date and your part. After a year you will have real material for a resume.'),
    x(['early'], 'learn', 'I use semester breaks only for rest and have not planned any short learning, volunteering or work.', 'Choose one small activity for the next break, such as helping a local business with its records, teaching at a nearby school, volunteering for an NGO or finishing a short course. Write the plan down with dates.', true),
    x(['early'], 'search', 'I have spoken to my teachers or seniors about where students from my course usually do internships.', 'Ask two seniors and one teacher this week where they interned, how they found it and what they would do differently. Write the names of the places and contact people in your tracking sheet.'),
    // Final year
    x(['final'], 'goals', 'I have decided which kind of full-time role I want and have chosen an internship that supports it.', 'Write the two job roles you would like after graduation and look for an internship that gives you work in one of them. If you are unsure, use the internship to test your first choice.'),
    x(['final'], 'proof', 'My final-year project, or my internship tasks, are written up in a way I can describe in two minutes.', 'Write three lines on your project: the problem, your part and the result. Practise it aloud and keep a one-page summary ready for interviews.'),
    x(['final'], 'search', 'I have a plan to balance internship applications with exams, project work and placement drives.', 'Put exam dates, drive dates and project deadlines on one calendar. Apply for internships in the gaps, and ask for flexible hours only after you have agreed on the work.'),
    x(['final'], 'conduct', 'I have asked about what happens after the internship, such as whether a conversation about a full-time role is possible.', 'In the second or third week, ask your supervisor politely how people usually move from intern to employee, and what they would like to see from you. Make no assumptions, and do not rely on an offer.'),
    // Graduate
    x(['graduate'], 'goals', 'I can explain in one honest sentence what I have done since graduating and what I am looking for.', 'Write two sentences: what you have done since your degree and the kind of internship you want next. Use the same sentence in applications and when networking.'),
    x(['graduate'], 'proof', 'I have worked on something outside college, such as a freelance task, a course project, volunteering or helping a family business.', 'If not, start one small task for a local business or an NGO this week and note what you do. In a month you will have a current example to write on your resume.'),
    x(['graduate'], 'search', 'I ask about the learning plan, supervisor, duration and what I receive at the end before accepting an internship.', 'Before saying yes, ask for these four points in writing. If the organisation cannot give you a clear answer, treat that as a warning and keep looking.'),
    x(['graduate'], 'learn', 'I have a plan for how I will turn an internship into a reference, a project to show and a clear next step.', 'Write the three outputs you want at the end: a reference, a piece of work you may show and a next step. Share them with your supervisor in the first week.'),
    // Vocational and non-engineering
    x(['vocational'], 'goals', 'I know which kinds of places take interns in my own field, such as firms, clinics, workshops, shops, schools, NGOs or media.', 'List five types of organisation that use your skills, and two places near you for each. Ask a teacher or instructor which of them have taken students before.'),
    x(['vocational'], 'proof', 'I have a way to show practical work from my field, such as a ledger, a pattern, a lesson plan, a repaired item or a campaign plan.', 'Photograph or save examples of your practical work with the date and a three-line note. Ask your instructor to sign or comment on one so that it carries weight.'),
    x(['vocational'], 'search', 'I think internships are only for engineers or IT students, so I do not apply.', 'Internships exist in accounts, retail, hospitality, healthcare, teaching, media, logistics and local trade. Talk to one person in your field this week and ask whether they take students for short periods.', true),
    x(['vocational'], 'conduct', 'I have checked whether my institute, board or apprenticeship scheme has its own rules for on-the-job training and reports.', 'Ask your institute office for the written rules on duration, attendance, logbook and certificate. Show them to the organisation before you start so both sides are clear.'),
  ],

  stageAdvice: {
    early: {
      goals: sa('In the early years, you are still discovering what you like, and a short experience can help you decide your stream or specialisation.', 'Pick two fields and plan a few weeks of shadowing, volunteering or a small project in each over the next year.', 'After each experience, write three lines on what you enjoyed, what drained you and what you want to try next.'),
      proof: sa('In the early years, you have little to show, so proof comes from classes, clubs and small projects.', 'Choose one assignment or club task and polish it into a one-page piece of work with your name and the date.', 'Start a single folder and add something to it every month, even a photograph of an event you organised.'),
      search: sa('In the early years, formal internships are fewer, so you find opportunities through people, clubs and short programmes.', 'Ask seniors where they did their first experience and message two of those places with a short, polite request.', 'Look at your college club, department and local NGOs for part-time or holiday tasks that count as experience.'),
      conduct: sa('In the early years, your habits are formed in class, labs, clubs and group assignments, long before an office.', 'Treat every group assignment as practice: reach on time, reply the same day and say early when you will miss a deadline.', 'Ask a teacher for one piece of feedback this semester and practise listening to it without explaining.'),
      learn: sa('In the early years, the most useful skill is learning how to learn from people at work.', 'Keep a three-line note after any event, club task or workshop: what I did, what I learned and what I will ask next.', 'Choose one skill, such as spreadsheets, public speaking or writing, and spend 20 minutes a day on it for two weeks.'),
    },
    final: {
      goals: sa('In the final year, an internship can shape your interview answers and your first job choice, and time is limited.', 'Decide the one or two roles you want after graduation and look only for internships that give you work in that area.', 'Check your project and exam dates, and choose a length and daily hours you can complete properly.'),
      proof: sa('In the final year, your project, internship and placement documents make up most of your proof.', 'Write your final-year project as a one-page summary with the problem, your part, tools and result.', 'During the internship, collect a list of tasks and results, and ask your supervisor to review it before you leave.'),
      search: sa('In the final year, you compete for time with exams, project work and campus drives.', 'Ask the placement cell and your project guide for partner organisations, and apply to them first.', 'Plan to apply in blocks of two or three, and send each follow-up a week after the first message.'),
      conduct: sa('In the final year, an internship is often watched as an extended interview, so small habits count.', 'Set a fixed routine for reaching, tasks and updates, and send your supervisor a short end-of-day note in the first two weeks.', 'Ask directly for feedback after the first fortnight and note two things to change in the following weeks.'),
      learn: sa('In the final year, the learning you take from an internship must turn into resume lines and interview stories.', 'Write each completed task as a resume line with an action and a result, and ask your supervisor to confirm the facts.', 'Ask to be involved in one task from start to finish, since a complete task makes a better interview story than many small ones.'),
    },
    graduate: {
      goals: sa('After graduation, you need to choose a direction without the support of college, so a trial is useful.', 'Pick one role to test for the next three months and write what you will check, such as the daily work, the people and the learning.', 'Decide in advance the point at which you will switch to another field if the work does not suit you.'),
      proof: sa('After graduation, employers ask what you have done since your degree, and your proof must be current.', 'Finish one self-directed project or volunteer task in the next three weeks and put the result at the top of your resume.', 'Ask a teacher or a project guide for a short written note that confirms your skills and your work.'),
      search: sa('After graduation, you search alone, and the volume of applications can become confusing.', 'Send five applications a week, each with a changed message, and log every one with a follow-up date.', 'Use alumni of your college, teachers and family contacts for introductions, since a warm message gets noticed more than a cold one.'),
      conduct: sa('After graduation, you may be the only fresh graduate in a small team, with fewer people to guide you.', 'Ask on day one who your supervisor is, how and when to report progress, and what the working hours are.', 'Confirm tasks and deadlines by message after every conversation so there is a clear record.'),
      learn: sa('After graduation, an internship must show up as skills and references, since you are heading to your first job.', 'Set one learning goal for each month and check it with your supervisor at the end of the month.', 'Before the end, ask for a reference or letter, the names of people you can stay in touch with and permission to share your work.'),
    },
    vocational: {
      goals: sa('In diploma, ITI, BBA, BCom, BA and other streams, internships and on-the-job training can lead in many directions, not only to IT.', 'List the types of workplace that use your course, such as a firm, shop, workshop, school, clinic or NGO, and choose one to try.', 'Check whether your course requires a particular duration or format of training, and plan the internship to meet it.'),
      proof: sa('In these streams, proof is practical work, a customer served, a document prepared or a job completed.', 'Photograph or save three examples of practical work this month, with the date and a short description of your part.', 'Ask an instructor, workshop head or shop owner to sign a short note saying what you did and how well.'),
      search: sa('In these streams, many internships come through local contacts, trade bodies and institutes, not large portals.', 'Visit or message three local businesses in your field with a clear one-page request and your available dates.', 'Ask your institute or a teacher for introductions to firms that have taken students before.'),
      conduct: sa('In these streams, you may work with customers, tools, money or stock, so honesty and care are everything.', 'Learn the rules for cash, stock, safety and customer data in the workplace before you start and ask when unsure.', 'Keep your own record of what you did each day, since it can protect you if there is a mistake or a question later.'),
      learn: sa('In these streams, much of the learning is by watching and doing, and it can be lost if you do not record it.', 'Write down each new process you learn as a short step list, with a photograph if the workplace allows.', 'Ask to practise one task alone under supervision before you leave, and get feedback on it.'),
    },
  },

  scenarios: [
    sc('goals', 'A friend tells you about an internship that gives a certificate in two weeks and asks only for a registration fee. Everyone in your class is applying. What do you do?', [
      o('Pay the fee, since the certificate will look good and you may miss the chance', 0, 'A fee for an internship is a warning sign and a certificate alone teaches very little. Check what work you would do and who offers it, and do not pay to get an internship.'),
      o('Ask what tasks you would do, who your supervisor would be and what you would have at the end, and decide only after the answers', 100, 'Strong. You are choosing for the work and the learning, not for a certificate. If the answers are unclear or a fee is required, look elsewhere.'),
      o('Ignore it because you do not need an internship in the early years', 33, 'Skipping is not wrong, but small experiences in early years help you choose a direction. Look for a short, genuine option instead.'),
      o('Apply along with your friends to stay together', 67, 'Going with friends is comforting but a good internship should also fit your own goals. Check that the work matches what you want to learn.'),
    ]),
    sc('goals', 'You have two offers: one close to home with simple tasks, and one in another city with more interesting work but a longer travel or stay. How do you decide?', [
      o('Choose the interesting one without checking the practical cost', 33, 'Interest in the work is important, but you also need to afford the travel, stay and time. Work out the costs and your exam dates before saying yes.'),
      o('Choose the closer one because it is easier, without asking about the work', 50, 'Convenience matters, but ask whether simple tasks will teach what you want to learn. Ask the nearer one if it can give you a bigger task.'),
      o('Write what you want to learn, compare the tasks, the costs, the time and the family view, then choose and tell the other one politely', 100, 'Strong. You match each offer to your own goal and your limits, and you leave the other organisation with a good impression.'),
      o('Accept both and decide on the first day', 0, 'This wastes the time of one organisation and can harm your name. Decide before you accept, and say no politely and early.'),
    ]),
    sc('proof', 'An organisation asks you to share "some work" with your application, and you have never done a project. What do you do?', [
      o('Send your marks and certificates and say you have no other work', 33, 'Marks show your studies but not your skills. Make a small piece of work in the next few days and send that too.'),
      o('Pick a class assignment, polish it into a one-page piece with your part described, and send it with a short note', 67, 'A good start. Make sure the piece is relevant to the role, and add a line on what you would improve if you had more time.'),
      o('Copy a sample from the internet so that your application looks stronger', 0, 'Copied work is easily spotted and can end your chances. Create something small and original, even if it is simple.'),
      o('Make a small piece related to the organisation, such as a short plan, a sheet or a sample post, and describe what you did and learned', 100, 'Strong. Work made for the organisation shows effort and understanding. Keep it short and honest about what it is.'),
    ]),
    sc('proof', 'Your resume lists "Excel, communication and teamwork", and the interviewer asks you to show how you used Excel. What do you do?', [
      o('Describe one sheet you made, what it calculated, what you did and how it helped, and offer to show it', 100, 'Strong. A specific example proves the skill. Keep a sample file ready for next time.'),
      o('Say that you know it well and have used it many times', 17, 'General claims are easy to doubt. Give a specific example and be ready to explain the steps.'),
      o('Say you only know the basics and ask to move to another question', 50, 'Honesty is good, but add what you can do and what you are learning. Update your resume to describe your level.'),
      o('Explain what Excel is and its main features', 33, 'Describing the tool does not show your use of it. Talk about a task you did with it, and the result.'),
    ]),
    sc('search', 'You find an internship post on social media. It asks you to send your documents and a small amount of money to a personal number to confirm your place. What do you do?', [
      o('Send the money since the amount is small and the chance may close', 0, 'Genuine internships do not ask for money to confirm a place. Do not pay or share documents, and report the post.'),
      o('Ask the sender for a proof of identity and then pay if they send it', 17, 'Identity proof can be faked. The request for money is itself the warning, so do not pay.'),
      o('Check the organisation on its official website, ask for a written offer from an official email address, and do not pay anything', 100, 'Strong. Verifying through official sources and refusing to pay protects you. Tell a teacher or family member about the post.'),
      o('Share the post with friends to see what they think', 33, 'Asking others is fine, but it can spread a fake post. Verify it yourself first, and warn them if it looks false.'),
    ]),
    sc('search', 'You have sent 15 applications with the same message and received no replies. What is your next step?', [
      o('Send the same message to 30 more places', 17, 'More of the same usually gives the same result. Change the message and the way you reach people.'),
      o('Pick five places you want most, write a different message for each, and follow up politely with someone who can introduce you', 100, 'Strong. Fewer, better-matched applications with a warm introduction usually work better than a bulk message.'),
      o('Conclude that no one takes freshers and stop applying', 0, 'Giving up on the basis of one batch is too early. Review your message and resume, and ask someone to check them.'),
      o('Ask a friend to look at your resume and message, then fix them and resend', 67, 'A second pair of eyes helps. Add a short personalised line for each organisation and a polite follow-up after a week.'),
    ]),
    sc('conduct', 'On the second day of your internship, you realise you will not finish the task your supervisor gave you by the deadline. What do you do?', [
      o('Work late and hand it in incomplete without saying anything', 33, 'Working hard is good, but surprise is not. Tell your supervisor before the deadline and explain what is left.'),
      o('Tell your supervisor in the morning what is done, what is left and when you can finish, and ask if any part can be skipped', 100, 'Strong. An early warning with a plan lets your supervisor adjust, and it builds trust.'),
      o('Wait until the deadline and then explain that it was too difficult', 0, 'A late excuse leaves no time to help. Raise the problem as soon as you see it.'),
      o('Ask a colleague to finish it for you', 17, 'Asking for help is fine, but passing the work to someone else without telling your supervisor is not. Ask for guidance, and finish it yourself.'),
    ]),
    sc('conduct', 'Your supervisor tells you that a report you wrote has several mistakes and the format is wrong. How do you respond?', [
      o('Explain that nobody told you the format and that the mistakes were small', 17, 'Explaining can sound like an excuse. Listen first and ask for an example of the correct format.'),
      o('Listen, write down each point, say thank you, ask for a sample of the format and send the corrected version the next day', 100, 'Strong. You show that you can take feedback and act on it, which tends to bring you more responsibility.'),
      o('Say nothing and feel upset, then fix it quickly without asking questions', 50, 'Fixing is good, but asking for an example would stop the same errors again. Ask one clear question about the format.'),
      o('Agree and then ask a colleague to redo it for you', 33, 'Learning to fix it yourself is the purpose of the internship. Ask a colleague for tips, not for the work.'),
    ]),
    sc('learn', 'It is the middle of your internship and your tasks are simple and repetitive. What do you do?', [
      o('Do the tasks well and wait to see whether anything changes', 33, 'Doing the tasks well is right, but waiting rarely changes them. Ask for something more.'),
      o('Tell your supervisor you have finished and ask what else you could take on, and suggest one task you would like to learn', 100, 'Strong. Asking with a specific suggestion shows initiative, and a polite request is easy to accept.'),
      o('Complain to other interns that the work is boring', 0, 'Complaining spreads discontent and gets you nothing. Take the request to the person who can change it.'),
      o('Finish the tasks quickly and spend the spare time on your phone', 17, 'Spare time is a chance to learn. Ask for more, or study something linked to the work.'),
    ]),
    sc('learn', 'Your internship ends next week. You have a certificate promised, but you have not talked about anything else. What do you do?', [
      o('Wait for the certificate and thank everyone on the last day', 33, 'Thanking people is polite, but you can ask for more. Request feedback, a reference and permission to show your work.'),
      o('Ask your supervisor for feedback, a short reference or letter, permission to show your work and the names of people to stay in touch with', 100, 'Strong. You leave with proof and contacts, which help your next application far more than a certificate alone.'),
      o('Ask the supervisor to offer you a job at the end', 17, 'Asking for a job directly can put pressure on the person. Ask what the next steps might be and for feedback.'),
      o('Send a general thank-you message afterwards and nothing else', 67, 'A thank-you is a good habit, but you may lose the chance to get a letter or permission. Make the request while you are still there.'),
    ]),
    { ...sc('goals', 'You are in your first year. A senior says you are wasting time looking for an internship and should wait until the final year. What do you do?', [
      o('Wait until the final year since the senior has more experience', 33, 'The advice is partly right: employers expect less early on. But a short, small experience now helps you choose a direction, so do not wait entirely.'),
      o('Take the advice but plan one short exploration, such as volunteering or shadowing, during the next break', 100, 'Strong. You use the early years to explore without pressure, and you will have more information when the formal internship season comes.'),
      o('Apply to many companies at once to prove the senior wrong', 17, 'Applying widely without preparation seldom works at this stage. Focus on a short, small experience that you can actually do.'),
      o('Do nothing and focus on getting marks', 50, 'Marks matter, but a little exposure helps you pick a direction. Plan one small activity for the next break.'),
    ]), stages: ['early'] },
    { ...sc('proof', 'It is your final year. An internship application needs a project description, and your final-year project is not finished. What do you do?', [
      o('Describe the finished project you plan to have, as though it is complete', 17, 'Presenting unfinished work as finished is dishonest. Describe what is done, what is in progress and the date you expect to finish.'),
      o('Describe the problem, your part so far, what is done, what is pending and your expected finish date, and offer to share progress', 100, 'Strong. It is honest and shows ownership. Keep a short progress note updated so that you can share it quickly.'),
      o('Leave out the project and write only about your academics', 33, 'This hides your best proof. Include the project and be clear about its stage.'),
      o('Use an older mini project instead and not mention the final-year one', 67, 'An older project is acceptable if it is relevant, but mentioning the final-year project, with its stage, gives a fuller picture.'),
    ]), stages: ['final'] },
    { ...sc('search', 'You graduated a few months ago and have no internship or job yet. A relative suggests you wait until a good opportunity arrives. What do you do?', [
      o('Wait for a good opportunity, as the relative suggests', 17, 'Waiting without activity widens the gap on your resume. Do something visible while you look.'),
      o('Apply for any internship, no matter the field or terms, to fill the gap', 33, 'Being active is right, but an unclear fit wastes your time. Choose a few fields and check the terms first.'),
      o('Set a weekly target for applications, start one small project in your target field and ask three people for introductions', 100, 'Strong. You stay active, build proof and use contacts, which makes your search stronger and your story clearer.'),
      o('Join a long course first and look for internships after it', 50, 'A course can help, but it should not replace real experience. Combine it with a small project or a short internship.'),
    ]), stages: ['graduate'] },
    { ...sc('goals', 'You study BCom or BA and a classmate says internships are only for IT and engineering students. What do you do?', [
      o('Agree and focus only on exams and a degree', 33, 'Exams matter, but many fields take students for short periods, including accounts, retail, media, teaching and NGOs. Do not rule out experience.'),
      o('Ask two teachers and a local professional which organisations near you take students in your field, and apply to one', 100, 'Strong. You test the claim with real people and find options in your own field, which are often found by asking.'),
      o('Apply to IT companies because that is where internships are advertised', 17, 'IT companies mostly look for IT skills. Choose places that use your own course, where your studies count as an advantage.'),
      o('Search online for a few minutes, find nothing and stop', 50, 'Many local options are not listed online. Ask teachers and local businesses directly before you stop.'),
    ]), stages: ['vocational'] },
  ],

  phrases: {
    goals: [
      '"In this internship I would like to learn ... and find out whether I enjoy ..."',
      '"I am available for ... weeks, ... hours a day, and I can manage ... within my college schedule."',
      '"Could you tell me the kind of tasks an intern would handle in the first month?"',
    ],
    proof: [
      '"I have attached a short piece of work that I made on ... My part was ..."',
      '"In my project on ..., I did ... and the result was ..."',
      '"I am still building my experience, so I made ... to show how I work."',
    ],
    search: [
      '"I am a student of ... at ... and I am writing to ask whether you take interns for ..."',
      '"I am interested in your work on ... because ... Could I send you my resume?"',
      '"May I follow up next week on my application?"',
    ],
    conduct: [
      '"I may be delayed by ... minutes, and I will finish ... by ..."',
      '"Thank you for the feedback. I will correct ... and send it by ..."',
      '"May I confirm what I can share outside the office about this work?"',
    ],
    learn: [
      '"I tried ... and got ..., so could you please advise whether the next step is ...?"',
      '"I have finished this task. Is there something else I can help with?"',
      '"Before I leave, could I ask for feedback and, if you are comfortable, a short reference?"',
    ],
  },

  stagePlan: {
    early: [
      'Write what you want to explore and choose two fields to try over the next year.',
      'Start a folder for small pieces of work from classes, clubs and events, and add one each month.',
      'Ask two seniors and one teacher where they did their first experience and how they found it.',
      'Plan one short activity for the next break, such as shadowing, volunteering or a small project, and note what you learn.',
    ],
    final: [
      'Choose one or two target roles and look for internships that give you work in them.',
      'Put exam, project and drive dates on one calendar and apply in the gaps.',
      'Write your project and internship tasks as resume lines with an action and a result.',
      'Ask your supervisor for feedback, a reference and permission to share your work before you leave.',
    ],
    graduate: [
      'Write one honest sentence on what you have done since graduation and what you want next.',
      'Set a weekly target for applications, each with a different message, and log them in a sheet.',
      'Start one small project in your target field and ask three people for introductions.',
      'Before accepting, ask for the learning plan, supervisor, duration and end outcome in writing.',
    ],
    vocational: [
      'List the kinds of workplace near you that use your course and pick two to approach.',
      'Collect practical proof in your own field and ask an instructor or employer to sign a short note.',
      'Check your institute or board rules on training, attendance and reports before you accept.',
      'Keep a daily log of what you did and learned, and ask for feedback before you finish.',
    ],
  },

  talk: {
    goals: {
      q: 'Why do you want to do an internship with us?',
      a: 'Name the field or task that interests you, say what you hope to learn, and link it to something you have already done, such as a class project or a conversation with someone in the field. Keep it specific to this organisation, and avoid saying that you need a certificate.',
      line: 'Seeking an internship in [field] to learn [skill] and understand [type of work], available for [number] weeks.',
    },
    proof: {
      q: 'Can you tell me about something you have made or done on your own?',
      a: 'Pick one piece of work, say what the problem was, what you did and what happened. Mention what you would improve. If it is small, say so honestly, since a small real example is better than a large vague one.',
      line: 'Created [piece of work] for [purpose], handling [your part], which resulted in [outcome].',
    },
    search: {
      q: 'How did you hear about us, and why did you apply here?',
      a: 'Say how you found the organisation, such as a teacher, an alumnus or its website, name one thing about its work that interested you and say what you can offer. This shows that you wrote to a specific place, not to many.',
      line: 'Applied to [number] organisations in [field] with tailored messages, and tracked each follow-up in a sheet.',
    },
    conduct: {
      q: 'How do you handle a deadline you cannot meet, or feedback you disagree with?',
      a: 'Say you tell your supervisor early with what is done and when you can finish. For feedback, say you listen, write it down, ask for an example if needed, and correct it, and that you raise a disagreement later and politely with a reason.',
      line: 'Reliable in [group project or activity], with on-time delivery and early updates to [teacher or leader].',
    },
    learn: {
      q: 'What would you like to learn here, and how do you learn best?',
      a: 'Name two skills you want to build and say how you will practise, such as keeping a daily note, trying a task first and then asking a specific question. Add that you will ask for feedback during the internship, not only at the end.',
      line: 'Built [skill] through [activity] by keeping a weekly learning log and applying feedback from [person].',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an application or interview',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Internship interviews are mostly about your reasons and your examples, so prepare one true answer for each area.',
    mode: 'interview',
  },
};
