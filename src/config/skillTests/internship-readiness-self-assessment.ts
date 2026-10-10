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
      'Applying for an internship with a copied resume, no clear goal and no idea how to behave on the first day is a common way to waste a good chance. This free self-assessment checks five areas, knowing what you want, proof of your skills, finding and applying, workplace habits, and learning fast, then shows which one to fix first before you apply.',
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
          'List five places to look: your placement or training cell, a faculty member, official company career pages, a recognised government or institute portal, and people you know. Be careful with any offer that asks you to pay to be given a place.',
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
      { d: 'proof', text: 'If someone asks about any line of my resume, I can explain it.' },
      { d: 'search', text: 'I know at least three places to look for internships, such as my college, official portals, a teacher, family contacts or companies I follow.' },
      { d: 'conduct', text: 'I know what is expected on the first day of an internship, such as reporting time, dress and whom to report to.' },
      { d: 'learn', text: 'When a task is unclear, I try it for a short while and then ask a specific question.' },
      { d: 'goals', text: 'I can name two kinds of work I would like to try as an intern.' },
      { d: 'proof', text: 'I can show something I have made or done, such as a file, report, design, page, project or an event I helped run.' },
      { d: 'search', text: 'I send the same message, with only the name changed, to every organisation I apply to.', reverse: true },
      { d: 'conduct', text: 'When I know I will miss a deadline, I stay quiet and hope to finish it later.', reverse: true },
      { d: 'learn', text: 'I keep a daily or weekly note of what I did and what I learned.' },
      { d: 'goals', text: 'I would accept any internship that is offered to me, without checking what work I would do.', reverse: true },
      { d: 'proof', text: 'My resume is a template or a friend\'s resume with a few words changed.', reverse: true },
      { d: 'search', text: 'I do not keep any record of where I have applied or when I should follow up.', reverse: true },
      { d: 'conduct', text: 'I would not post photos or details about a workplace on social media without permission.' },
      { d: 'learn', text: 'During a task I wait to be told what to do next instead of asking.', reverse: true },
      { d: 'goals', text: 'I have checked whether my course, college or university has rules on internship duration, reports or credit.' },
      { d: 'proof', text: 'My email address, profile photo and public social media pages would look fine if an employer saw them.' },
      { d: 'search', text: 'Before I apply or pay anything, I check whether an internship offer is genuine.' },
      { d: 'conduct', text: 'When someone corrects my work, I explain why I was right before I listen.', reverse: true },
      { d: 'learn', text: 'I can name two skills I want to improve during an internship.' },
      { d: 'goals', text: 'I know how many weeks and hours a day I can give to an internship alongside my studies and home duties.' },
      { d: 'proof', text: 'I can describe one task I did on my own in three parts: the problem, my action and the result.' },
      { d: 'search', text: 'I look for internships only on portals and never ask teachers, seniors or relatives.', reverse: true },
      { d: 'conduct', text: 'I usually reply to messages and emails within a day.' },
      { d: 'learn', text: 'I plan to ask my supervisor for feedback before the internship ends.' },
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
        title: 'Fees, fake offers and paid or unpaid internships',
        body: [
          'Some internships pay a stipend and some do not. This differs by organisation, field and rules, and a stipend alone does not make an internship good. What matters more is the work you will do, the person who supervises you and what you receive at the end.',
          'Be very careful with any offer that asks you to pay to be given a place, to send ID or bank details to a personal number, or to decide in a hurry. Genuine employers do not normally charge for work experience. A paid training course is a different thing, so judge it as a course and ask a teacher or your placement cell before paying anything. Never share an OTP with anyone.',
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
      'It cannot tell you whether a particular offer is genuine. Check each one yourself through the organisation\'s official website, a written offer and a teacher or placement officer before you share documents or pay anything.',
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
        a: 'No. Internships are a way to gain experience, so you are not expected to have much yet. What helps is a clear reason, an honest resume and one small thing you have made or done. The test shows how to build that proof with what you already have.',
      },
      {
        q: 'How is this different from the interview readiness test?',
        a: 'The interview readiness test is about the interview itself: research, examples, answers and follow-up. This one is wider and starts earlier: choosing what you want, building proof, finding genuine openings and then behaving and learning well during the internship. Taking both covers the whole path.',
      },
      {
        q: 'How can I tell if an internship offer is fake or asks for a fee?',
        a: 'Treat any request to pay for a place, to send ID or bank details to a personal number, or to decide in a hurry as a warning. Look up the organisation on its own website, ask for the offer in writing from an official email address and show it to a teacher or your placement cell. Paid training courses exist, but a course is not the same as an internship, so judge it as a course before paying.',
      },
      {
        q: 'Are internships paid or unpaid?',
        a: 'It depends on the organisation, the field and the rules of your course, so some pay a stipend and some do not. Ask before you start whether there is a stipend, and also ask about hours, the supervisor and what you will receive at the end. An unpaid internship can be worth doing if the learning is real, but never pay money to take one.',
      },
      {
        q: 'How often should I take it?',
        a: 'Every few weeks is enough. Take it once now, follow the 14-day routine for your lowest area, and retake it before you apply or when you start your internship. Your own earlier result is the only fair comparison.',
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
        body: 'In the early years, a short summer or part-time experience is mainly about trying a field, so deep skills are not the aim. Your best use of this time is to explore, build one or two small pieces of proof, and decide what to try next.',
        actions: [
          'Choose two fields to try and ask for a short role, a few days of watching someone do the work, or a small project, with each.',
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
          'Ask each organisation about the learning plan, the supervisor, the duration, whether there is a stipend (some internships pay one and some do not), whether any fee is asked, and what you will receive at the end.',
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
      'Write down three kinds of work you would like to try, such as accounts, content, sales, field work, design or teaching, and one you would rather not do. Look for internships that match the three and ask one person in each field what a beginner does.',
      'Pick one small piece of work and finish it this week, such as a one-page report, a social media post set, a price comparison sheet or a simple form. Store it in a folder and note what you did in three lines.',
      'Choose two openings you really want and write a different four-line message for each: who you are, what you can do, why this organisation and your available dates. Put one fact from that organisation\'s own website in each, so it cannot be sent to anyone else.',
      'Message your supervisor, teacher or team leader as soon as you know a problem, using a line such as "I may need until tomorrow evening for this, will that be fine?" Early warning is far better than a late excuse.',
      'Use the last five minutes of each day to write three lines: what I did, what I learned, what I will ask tomorrow. Read the notes on Friday and pick one thing to practise.',
      'Before applying, write down what you would do each week in this internship. If you cannot name at least three tasks, ask the organiser before accepting, since a certificate alone is a weak reason.',
      'Open your resume and replace the template wording with your own facts: your course, your best three skills with an example for each, and one activity. Remove anything you cannot explain.',
      'Write each application in a notebook or sheet with the date, the contact name and a follow-up date one week later. Without a record you will forget who you have written to, and follow-ups will not happen.',
      'Treat everything you see at work as private unless told otherwise. Ask before taking photographs or posting about your office, and never share client names, files or screenshots.',
      'Pick one small task each day and say to your supervisor, "I have finished this, is there something else I can help with?" Do this on the second day itself, since waiting to be told rarely brings extra work.',
      'Ask your college office or department for the written rules on duration, reports, attendance and credit for internships. Keep a copy, and show it to the organiser before you finalise dates.',
      'Search your own name, switch to a plain profile photo, check your email address sounds like your real name and make personal posts private if you would not want an employer to see them.',
      'Before applying, search for the organisation, read its official website and find a contact you can verify. Ask for the offer in writing, and be very careful if anyone asks you to pay, to send ID or bank details, or to use only a personal number. If unsure, show the offer to a teacher or your placement cell.',
      'Next time someone corrects your work, write down their words without replying and say "thank you, I will work on that". Decide later what to change, since explaining first makes people give you less feedback.',
      'Choose two skills, such as writing reports, using spreadsheets, speaking to customers or handling tools. Add a way to check each one, such as "I can finish a one-page report in one hour without help".',
      'Write down your weeks, daily hours and travel limits, and speak to your family about them before you apply. Say them honestly to the organiser so that you are not forced to leave halfway.',
      'Take one task you did recently and write: the problem, what you did, the result. If it does not fit in three lines, choose another task or practise explaining it aloud once.',
      'This week, ask one teacher, senior or relative whether they know anyone who takes interns, and ask them to introduce you. A short, polite request for 10 minutes of their time is usually easy to say yes to.',
      'Set a rule to reply to messages and emails the same day, even if only to say "received, will reply by tomorrow". Check email twice a day during your search.',
      'Put a reminder on your phone or calendar for the last week of the internship. On that day ask your supervisor for feedback, a short reference or letter, and which of your work you may show.',
    ],
    tipsUp: [
      "Read your goal sentence to a teacher or senior and ask which part is too vague. Rewrite it until it names one task you want to try and one thing you want to rule out.",
      "Pick the three resume lines you explain least well and write a two-sentence answer for each. Then ask a friend to quiz you on them without warning.",
      "Turn your three places into a weekly habit: fix one day, such as Sunday evening, to check each for 20 minutes. Add one new place every week.",
      "Two days before you start, message the organiser to confirm reporting time, dress, whom to meet and what to carry. Keep the reply saved on your phone.",
      "Set a 15-minute limit for each stuck task and write your attempt in one line before you ask. Check that your question can be said in a single sentence.",
      "Try a small version of one of the two kinds of work this week, such as a one-page sample. Note which part you enjoyed and which part felt like a chore.",
      "Add a one-line note to each piece you can show: the date, your part and what it was for. Then open it on a second phone to check that it loads properly.",
      "Before sending any message, check that it holds at least one fact that only that organisation's own website could give you. If it could go to anyone else, rewrite the opening.",
      "The moment you think you may miss a deadline, treat it as a trigger: send one line the same day saying what is done, what is left and the new time.",
      "Fix a time for your note, such as right after dinner, and tie it to something you do daily. Once a week, read the notes and underline one thing to practise.",
      "Each time an offer tempts you, ask for three tasks you would do in the first month before you reply. If they cannot name them, hold your answer for a day.",
      "Ask a senior or teacher to mark every resume line that could belong to anyone. Replace each with a fact only you can give, such as a place, a task or the days you spent.",
      "Each time you apply, add the row to your sheet at once, not later. Pick one weekly slot, such as Saturday morning, to check follow-up dates and send the due messages.",
      "In your first week, ask for the written rules on photos, posts and sharing files, and keep them in your notes. Check every post against them before you share anything.",
      "When you finish a step, send your supervisor a line such as 'Done with this, I plan to do X next, is that right?' Catch yourself whenever you sit idle for five minutes.",
      "Put the rules next to the dates you are planning: duration, report format, credit and last date. Ask the office to confirm any doubt in writing.",
      "Ask a friend to open your profile and public pages on their phone as a stranger and note what they see in two minutes. Fix the first three things they point out.",
      "Keep a fixed four-point checklist: official website, written offer from an official email, no fee asked, and shown to a teacher. Run every offer through it before replying.",
      "When feedback starts, put your pen down and count to five before you speak. Repeat their point in your own words and ask one question about it, with no reasons.",
      "For each skill, set a small test you can repeat weekly, such as time taken or errors found, and write the result. Ask a senior to judge one sample of your work.",
      "Share your weeks and hours with one family member and check them against exams, travel and home duties for the next two months. Mark any week that clashes.",
      "Do the three-part story for two more tasks and practise each aloud in under a minute. Add one fact that shows the result, such as time saved or items handled.",
      "Each time you open a portal, also send one message that day to a teacher, senior or relative. Keep a weekly count in your sheet of how many people you asked.",
      "Set fixed times for checking messages, such as morning, afternoon and evening, and clear anything pending then. Send a one-line holding reply when an answer needs time.",
      "Write the date you will ask for feedback in your calendar, with three questions: what I did well, what to improve and what to take on next. Take notes as they answer.",
    ],
    strongTip: 'This habit already helps you in an internship. Keep doing it, and be ready to give one real example of it when someone asks.',
    domains: {
      goals: {
        why: 'An internship is short, so a clear reason decides how much you get from it. Knowing what you want to learn or rule out helps you pick the right place, ask for the right tasks and avoid a few weeks of only making tea or copying files. It also helps you say no to offers that look attractive but give you nothing to learn.',
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
          'Checking that an offer is genuine and in writing, and that you are not asked to pay to be given a place',
        ],
        routine: [
          'Days 1 to 3: List ten places that could take an intern and write how you will reach each one. Include your cell, a teacher, two official company pages and local contacts.',
          'Days 4 to 7: Write your four-line message and a one-page resume. Create the tracking sheet and send your first three applications.',
          'Days 8 to 11: Ask two people for an introduction, and check every offer with the official website, a written offer and a contact you can verify. Do not pay money to be given a place, and never share an OTP or bank details.',
          'Days 12 to 14: Follow up on the first applications with one polite message each, and log the replies. Add five more places to the sheet.',
        ],
        mistakes: [
          'Sending one identical message to fifty places and getting no replies',
          'Paying money or sending ID and bank details because a post said only a few places were left',
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
        why: 'In a short internship, people judge you quickly by small things: whether you are on time, whether you reply, whether you warn them about problems and whether you handle feedback calmly. These habits decide how much help and trust you receive. A one-line message saying you will be 20 minutes late costs nothing, and it is remembered longer than the delay.',
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
        why: 'The value of an internship is what you take away. People who ask specific questions, write down what they learn and ask for more work usually get more responsibility, and they finish with feedback and proof, not only a certificate. Even three lines written each evening give you something specific to say in your next interview.',
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
    { ...x(['early'], 'goals', 'I treat my first internship as a way to explore and try fields, not as a final choice.', 'Plan to try two different fields over your first two years, even for two or three weeks each. Write after each one what you liked and what you did not, so your next choice is based on experience.'), up: "After each trial, score it on interest, energy and fit with your strengths. Compare the scores across fields before choosing what to try next." },
    { ...x(['early'], 'proof', 'I have started collecting small pieces of work from my classes, clubs and fests, such as reports, posters, photographs or plans.', 'Create one folder today and add anything you made this semester, with a note of the date and your part. After a year you will have real material for a resume.'), up: "Name files by date and title, and once a month ask a teacher to comment on your best piece. Keep that comment saved with the file." },
    { ...x(['early'], 'learn', 'I have not planned how to use my next semester break for any learning, volunteering or work.', 'Choose one small activity for the next break, such as helping a local business with its records, teaching at a nearby school, volunteering for an NGO or finishing a short course. Write the plan down with dates.', true), up: "Put a dated reminder two weeks before the break to book your activity. If nothing is fixed by then, ask a teacher or senior for one suggestion that same day." },
    { ...x(['early'], 'search', 'I have spoken to my teachers or seniors about where students from my course usually do internships.', 'Ask two seniors and one teacher this week where they interned, how they found it and what they would do differently. Write the names of the places and contact people in your tracking sheet.'), up: "Turn each answer into a row in your sheet with name, place, contact and date spoken. Thank each person within two days and ask one follow-up question." },
    // Final year
    { ...x(['final'], 'goals', 'I know which kind of full-time role I want to try for after graduation.', 'Write the two job roles you would like after graduation and look for an internship that gives you work in one of them. If you are unsure, use the internship to test your first choice.'), up: "Compare your two target roles with five real job descriptions and underline the repeated tasks. Ask your supervisor or project guide which of them you can attempt." },
    { ...x(['final'], 'proof', 'My final-year project, or my internship tasks, are written up in a way I can describe in two minutes.', 'Write three lines on your project: the problem, your part and the result. Practise it aloud and keep a one-page summary ready for interviews.'), up: "Record yourself giving the two-minute version, listen once and cut anything vague. Then ask a friend from another branch whether they followed it." },
    { ...x(['final'], 'search', 'I have a plan to balance internship applications with exams, project work and placement drives.', 'Put exam dates, drive dates and project deadlines on one calendar. Apply for internships in the gaps, and ask for flexible hours only after you have agreed on the work.'), up: "Block fixed application hours in your calendar, such as two evenings of one hour each. Check the calendar every Sunday and move clashes before they happen." },
    { ...x(['final'], 'conduct', 'I assume an internship will lead to a job offer, so I have not asked what happens after it ends.', 'In the second or third week, ask your supervisor how interns usually move on and what they would like to see from you. An offer is never certain, so keep applying elsewhere and keep your attendance and work steady.', true), up: "Whenever you catch yourself saying 'they will keep me', write one fallback step, such as two applications elsewhere that week. Review the list every Friday." },
    // Graduate
    { ...x(['graduate'], 'goals', 'I can explain in one honest sentence what I have done since graduating and what I am looking for.', 'Write two sentences: what you have done since your degree and the kind of internship you want next. Use the same sentence in applications and when networking.'), up: "Test your two sentences on three people, one of them outside your field, and ask what they understood. Change any word they misread, then use the final version everywhere." },
    { ...x(['graduate'], 'proof', 'Since graduating, I have nothing from outside college that I can show an employer.', 'Start one small task this week, such as a sheet for a local shop, a volunteer job with an NGO or a short course project, and note what you do. In a month you will have a current example for your resume.', true), up: "When you notice a week with nothing new to show, set a small dated task for the next day, such as one page for a local shop. Keep a running list of dated tasks." },
    { ...x(['graduate'], 'search', 'I ask about the learning plan, supervisor, duration and what I receive at the end before accepting an internship.', 'Before saying yes, ask for these four points in writing, and also ask whether any fee is involved. If the organisation cannot answer clearly, or asks you to pay to join, treat that as a warning, talk to a teacher and keep looking.'), up: "Save the four points as a fixed template on your phone and fill it for every offer. Compare the filled templates side by side before you choose." },
    { ...x(['graduate'], 'learn', 'I have a plan for how I will turn an internship into a reference, a project to show and a clear next step.', 'Write the three outputs you want at the end: a reference, a piece of work you may show and a next step. Share them with your supervisor in the first week.'), up: "Check progress against the three outputs every second week, and ask your supervisor to name one thing still missing. Save sample work as you go." },
    // Vocational and non-engineering
    { ...x(['vocational'], 'goals', 'I know which kinds of places take interns in my own field, such as firms, clinics, workshops, shops, schools, NGOs or media.', 'List five types of organisation that use your skills, and two places near you for each. Ask a teacher or instructor which of them have taken students before.'), up: "Visit or call one place of each type to ask what a student does there in a week. Rank the places by how close the work is to your course." },
    { ...x(['vocational'], 'proof', 'I have a way to show practical work from my field, such as a ledger, a pattern, a lesson plan, a repaired item or a campaign plan.', 'Photograph or save examples of your practical work with the date and a three-line note. Ask your instructor to sign or comment on one so that it carries weight.'), up: "Keep the date, a photo and your instructor's comment together in one folder and add three new items a month. Pick the clearest one for your resume." },
    { ...x(['vocational'], 'search', 'I think internships are only for engineers or IT students, so I do not apply.', 'Internships exist in accounts, retail, hospitality, healthcare, teaching, media, logistics and local trade. Talk to one person in your field this week and ask whether they take students for short periods.', true), up: "When someone says internships are not for your stream, ask them for one example of a person who tried. Then visit one local place in your field that same week." },
    { ...x(['vocational'], 'conduct', 'I have checked whether my institute, board or apprenticeship scheme has its own rules for on-the-job training and reports.', 'Ask your institute office for the written rules on duration, attendance, logbook and certificate. Show them to the organisation before you start so both sides are clear.'), up: "Make a one-page summary of the rules, covering duration, attendance and logbook, and get your institute to sign it. Keep one copy and give one to the organisation." },
  ],

  stageAdvice: {
    early: {
      goals: sa('In the early years, you are still discovering what you like, and a short experience can help you decide your stream or specialisation.', 'Pick two fields and plan a few days of watching someone work, volunteering or a small project in each over the next year.', 'After each experience, write three lines on what you enjoyed, what drained you and what you want to try next.'),
      proof: sa('In the early years, you have little to show, so proof comes from classes, clubs and small projects.', 'Choose one assignment or club task and polish it into a one-page piece of work with your name and the date.', 'Start a single folder and add something to it every month, even a photograph of an event you organised.'),
      search: sa('In the early years, formal internships are fewer, so you find opportunities through people, clubs and short programmes.', 'Ask seniors where they did their first experience and message two of those places with a short, polite request.', 'Look at your college club, department and local NGOs for part-time or holiday tasks that count as experience.'),
      conduct: sa('In the early years, your habits are formed in class, labs, clubs and group assignments, long before an office.', 'Treat every group assignment as practice: reach on time, reply the same day and say early when you will miss a deadline.', 'Ask a teacher for one piece of feedback this semester and practise listening to it without explaining.'),
      learn: sa('In the early years, the most useful skill is learning how to learn from people at work.', 'Keep a three-line note after any event, club task or workshop: what I did, what I learned and what I will ask next.', 'Choose one skill, such as spreadsheets, public speaking or writing, and spend 20 minutes a day on it for two weeks.'),
    },
    final: {
      goals: sa('In the final year, an internship can shape your interview answers and your first job choice, and time is limited.', 'Decide the one or two roles you want after graduation and look only for internships that give you work in that area.', 'Check your project and exam dates, and choose a length and daily hours you can complete properly.'),
      proof: sa('In the final year, your project, internship and placement documents make up most of your proof.', 'Write your final-year project as a one-page summary with the problem, your part, tools and result.', 'During the internship, collect a list of tasks and results, and ask your supervisor to review it before you leave.'),
      search: sa('In the final year, you compete for time with exams, project work and campus drives.', 'Ask the placement cell and your project guide for partner organisations, and apply to them first.', 'Plan to apply in blocks of two or three, and send each follow-up a week after the first message.'),
      conduct: sa('In the final year, supervisors notice small habits, and they may be asked about you later, so your routine counts.', 'Set a fixed routine for reaching, tasks and updates, and send your supervisor a short end-of-day note in the first two weeks.', 'Ask directly for feedback after the first fortnight and note two things to change in the following weeks.'),
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
      conduct: sa('In these streams, you may work with customers, tools, money or stock, so honesty and care matter most.', 'Learn the rules for cash, stock, safety and customer data in the workplace before you start and ask when unsure.', 'Keep your own record of what you did each day, since it can protect you if there is a mistake or a question later.'),
      learn: sa('In these streams, much of the learning is by watching and doing, and it can be lost if you do not record it.', 'Write down each new process you learn as a short step list, with a photograph if the workplace allows.', 'Ask to practise one task alone under supervision before you leave, and get feedback on it.'),
    },
  },

  scenarios: [
    sc('goals', "A friend tells you about an internship that promises a certificate in two weeks and asks for a registration fee, saying only a few seats are left. Everyone in your class is applying. What do you do?", [
      o("Pay the fee today along with your friends, because the certificate is only two weeks away and the seats may fill up", 0, "Be careful with any offer that asks you to pay to be given a place, especially with a rush to decide. A two-week certificate also tells an employer little about the work you did. Before any money moves, ask for the task list and supervisor's name, and talk to a teacher."),
      o("Do not pay anything yet. Ask in writing what work you would do, who supervises it and what the fee is for", 100, "Judging the offer by the work, not the certificate, is the right way round. If the answers stay vague or the fee stays, drop it, and ask your placement cell or one teacher for a genuine option this week."),
      o("Skip it and look for something else after your exams", 50, "Staying away from a fee-based offer is safe, but you lose the chance to choose on purpose. Fix a date after exams to ask a teacher or senior for a short option in a field you want to try, and check what it asks of you before you say yes."),
      o("Apply along with your friends, but ask the organiser to send the fee details in writing before you pay anything", 33, "Going with friends is comforting, but a written fee note still does not tell you what you would learn. Ask for the tasks and the supervisor too, and remember that a paid training course is a different thing from an internship."),
    ]),
    sc('goals', "You have two offers. One is near home with simple tasks. The other, in another city, has more interesting work, but its dates touch your exam weeks and the stay would cost more than your family has planned. How do you decide?", [
      o("Take the far one anyway, since the learning matters most and the travel and stay can be sorted out after you join", 33, "Interest in the work counts, but an offer you cannot afford or attend regularly may force you to leave halfway, and exams still come first. Work out the full cost and the clashing dates before you say yes."),
      o("Ask the far organisation whether the dates can shift and the stay can be arranged, and decide only after they reply", 67, "Asking once is reasonable, but waiting keeps the near organisation hanging. Give yourself a two-day limit, and if the dates still touch your exams, take the near offer."),
      o("Take the near offer, ask for one bigger task from the second week, and decline the far one with thanks within a day", 100, "A nearby place you can attend fully, with a request for better work, beats a better offer you may have to abandon. Write down the bigger task you want to try and ask for it in week two."),
      o("Accept both for now and decide on the first day", 0, "Accepting two offers blocks one organisation's seat and can hurt your name in a small circle of employers. Decide before you accept, and decline the other in writing within a day."),
    ]),
    sc('proof', "An organisation asks you to share \"some work\" with your application, and you have never done a project. What do you do?", [
      o("Send your marks and certificates, and explain honestly that you have not done a project yet", 50, "Marks show that you studied but not how you work, and being honest is right. Spend one evening making a small piece of work and send it as a second attachment."),
      o("Pick a class assignment you did well, tidy it into a one-page piece, describe your part in it, and send it with a short covering note", 67, "A reworked assignment is a fair start, though it may not match the role. Add one line on what you would improve with more time, and try making something aimed at this organisation next."),
      o("Build a neat portfolio page from a free template and fill it with your skills and course names, since it looks professional", 17, "A polished page with nothing behind it shows design effort but no work. Put at least one real piece on it, even a plain one, and describe your part in it."),
      o("Make a small piece for this organisation, such as a sample post or a short plan, and say plainly what it is", 100, "Work made for the organisation shows effort and some understanding of what they do. Keep it to a page or two and say honestly that it is a first attempt."),
    ]),
    sc('proof', "Your resume lists \"Excel, communication and teamwork\", and the interviewer asks you to show how you used Excel. What do you do?", [
      o("Say that you know Excel well and have used it many times for assignments, and that you learn new things quickly", 17, "A general claim like this is easy to doubt and hard to follow up. Pick one sheet you made and be ready to explain the steps in it."),
      o("Describe one sheet you made, what it worked out and how it helped, and offer to show the file", 100, "A real example proves the skill better than any claim. Keep a sample file on your phone or a pen drive so that you can show it when asked."),
      o("Say you only know the basics and ask whether you can move to the next question, since you would rather not guess", 50, "Being honest about your level is good, but stopping there gives the interviewer nothing to work with. Say what you can do and what you are learning, and change the resume line to match your real level."),
      o("Explain what Excel is for and name the main things it can do, such as formulas, charts and filters", 33, "Describing the tool does not show that you have used it. Talk about one task you did with it and what came out of it."),
    ]),
    sc('search', "You find an internship post on social media. It asks you to send your documents and a small amount of money to a personal number to confirm your place. What do you do?", [
      o("Send the money and your documents to the number, because the amount is small and the post says only a few places are left", 0, "Genuine employers do not normally ask for money or documents on a personal number to hold a place, and a rush is a common pressure tactic. Stop here, do not pay, and report the post on the platform. Tell a teacher so others in your class are warned."),
      o("Ask the sender for a photo of an ID card or an office address, and pay if it looks genuine to you", 17, "An ID photo or an address can be faked in minutes, so it proves little. The request for money is itself the warning, so do not pay until the organisation is verified another way."),
      o("Send only your resume, not your documents, and see whether they reply with proper details before you pay", 33, "Sending only your resume is safer than sending documents, but the offer is still unchecked. Look up the organisation's own website and contact details first, and never send ID, bank details or an OTP to a personal number."),
      o("Do not reply to that number. Find the organisation on its own website and write to the official address there to ask whether the post is theirs", 100, "Verifying through sources the sender does not control is the right order, and it costs you nothing. If the organisation cannot be found or says it did not post it, report the post and tell your placement cell or a teacher."),
    ]),
    sc('search', "You have sent 15 applications with the same message and received no replies. What is your next step?", [
      o("Send the same message to 30 more places, because more applications must mean more chances", 17, "The same message sent more widely usually gets the same silence. Change the message and the way you reach people before you add numbers."),
      o("Pick five places you want most, write a different message for each, and ask someone to introduce you at one of them", 100, "Fewer, better-matched applications with a person to vouch for you usually get more attention than a bulk message. Do it this week and note every reply in your sheet."),
      o("Wait two more weeks in case replies are slow, then think about what to do", 33, "Some replies do come late, and a short wait is fair. But fifteen identical messages are a weak start, so use the two weeks to rewrite your message, not only to wait."),
      o("Ask a friend or teacher to read your resume and message, fix what they point out, and send the improved version to the same places after a week, with a short polite follow-up", 67, "A second pair of eyes helps, and a follow-up after a week is polite. Add one line in each message about why you chose that organisation, or it will still look like a bulk mail."),
    ]),
    sc('conduct', "On the second day of your internship, you realise you will not finish the task your supervisor gave you by the deadline. What do you do?", [
      o("Work late to finish as much as you can, hand in what is ready at the deadline and explain then, so that you do not disturb your supervisor earlier", 33, "Working late shows effort, but a surprise at the deadline leaves your supervisor no time to adjust. Send a short message the same morning saying what is done and what is left."),
      o("Tell your supervisor in the morning what is done, what is left and when you can finish, and ask if any part can wait", 100, "An early warning with a plan lets your supervisor change the deadline or help, and it builds trust faster than a perfect result. Note the new time you agreed."),
      o("Wait for the deadline and then say the task was too difficult for a beginner", 0, "A late excuse gives no one time to help, and it sounds like blaming the task. Raise the problem the moment you see it, even if you have no solution yet."),
      o("Ask a friendly colleague to help you finish it quietly, so that nobody knows you were running late", 17, "Asking for help is fine, but quietly passing the work on hides the problem from your supervisor. Tell your supervisor first, then ask the colleague for guidance, not for the work."),
    ]),
    sc('conduct', "Your supervisor tells you that a report you wrote has several mistakes and the format is wrong. How do you respond?", [
      o("Explain that nobody told you the format and that the mistakes were small ones", 17, "Reasons sound like excuses in the first minute, even when they are true. Next time listen first, then ask for one example of the correct format."),
      o("Listen, note each point, say thank you, ask for a sample of the right format and send a corrected version the next day", 100, "Taking the feedback, asking for a model and setting a time for the fix is what makes supervisors hand over more work. Keep the sample to reuse for your next report."),
      o("Say little, feel bad, and quickly correct everything yourself without asking any questions, so that you do not look slow", 50, "Fixing it yourself is right, but silence means you may repeat the same errors. Ask one clear question about the format, such as \"Could I see a report that was done the way you want?\""),
      o("Agree politely, then ask a more experienced colleague to redo the report properly so that it reaches the supervisor on time", 33, "Learning to fix it is the point of the internship, and a colleague's rewrite hides the gap. Ask the colleague for tips on format, then redo the report yourself."),
    ]),
    sc('learn', "It is the middle of your internship and your tasks are simple and repetitive. What do you do?", [
      o("Keep doing the tasks neatly and on time, since trust builds slowly and the supervisor will give you better work when ready", 50, "Doing simple work well is the base, but waiting seldom changes it, because supervisors are busy and may think you are happy with it. Make a request this week."),
      o("Tell your supervisor you have finished and ask what else you could take on, naming one task you would like to learn", 100, "A request with a named task is easy to say yes to, and it shows initiative without complaint. If the answer is no, ask what would let you move up and check again in a week."),
      o("Finish quickly and use the spare time to revise your own course books", 17, "Free time at work is a chance to learn, and unrelated study hides it. Ask for something extra, or read the files and manuals linked to your tasks."),
      o("Start a side task you find more interesting on your own, without telling anyone, to show what you can do", 33, "Initiative is good, but unasked work can clash with real priorities or with rules on confidential material. Tell your supervisor what you would like to try and ask if you may do it."),
    ]),
    sc('learn', "Your internship ends next week. You have a certificate promised, but you have not talked about anything else. What do you do?", [
      o("Make sure you collect the certificate on the last day, thank everyone in person and keep in touch through messages afterwards", 17, "Thanking people is polite, but a certificate alone gives your next application little to stand on. Use the last week to ask for feedback and a reference in person."),
      o("Ask your supervisor for feedback, a short reference, permission to show your work and a contact to stay in touch with", 100, "Feedback, a reference and permission to show your work carry into your next application more than the certificate does. Ask in the first half of the last week and note down the contact details you are given."),
      o("Ask your supervisor whether there is any chance of a job offer after the internship ends", 33, "Asking for a job outright can put your supervisor on the spot. Ask what interns who did well usually do next and what you should improve, and take the feedback with you."),
      o("Go home, then send a warm thank-you message with your contact details and ask for feedback and a reference at that time", 50, "A thank-you note is a good habit, but a request made after you leave is easier to ignore. Ask in person during the last two days, and send the note afterwards."),
    ]),
    { ...sc('goals', "You are in your first year. A senior says you are wasting time looking for an internship and should wait until the final year. What do you do?", [
      o("Follow the senior's advice completely and put all your time into marks until the final year", 33, "Marks matter, and the senior is right that formal internships can be harder to find in the early years. But waiting until the final year means you choose a direction with little experience. Plan one small activity for the coming break."),
      o("Plan one short volunteering stint or work-shadowing for the next break, and tell the senior your studies still come first", 100, "Studies stay first while you still collect real information about work. Write the activity and its dates down now, and add three lines on what you learned when it ends."),
      o("Apply to as many companies as possible right now, so that you are not behind the students who started early", 17, "Mass applications without a resume or a purpose rarely get answers at this stage, and they can feel discouraging. Narrow it to one short experience you can actually do, such as volunteering."),
      o("Ask your teachers whether a short course or a club project this semester could count as early experience, and decide after they answer", 67, "Asking teachers is a sensible start, and a club project is real experience. Set a date this week to hear back, then choose one thing to do in the next break."),
    ]), stages: ['early'] },
    { ...sc('proof', "It is your final year. An internship application needs a project description, and your final-year project is not finished. What do you do?", [
      o("Describe only the finished parts and say nothing about what is still pending", 33, "Leaving out the pending parts gives a false picture, and one question from the interviewer can show it. Say what is done, what is pending and when you expect to finish."),
      o("Describe the problem, your part so far, what is pending and the date you expect to finish, and offer to share progress", 100, "An honest status with a date shows ownership and gives the interviewer something to ask about. Keep a short progress note updated so that you can share it within minutes."),
      o("Leave out the project and write only about your academics and marks", 17, "Leaving the project out hides your strongest work. Include it, state its stage, and add an older mini project as a second example if it is relevant."),
      o("Write about an older mini project that is completed and relevant, and leave the final-year project out until it is done, so that everything you list is finished", 67, "A finished older project is acceptable if it is relevant, but the final-year project, with its stage clearly stated, gives a fuller picture. Add one line about it."),
    ]), stages: ['final'] },
    { ...sc('search', "You graduated a few months ago and have no internship or job yet. A relative suggests you wait until a good opportunity arrives. What do you do?", [
      o("Wait for a good opportunity, as the relative suggests, and avoid taking something unsuitable", 17, "Waiting without activity widens the gap on your resume and slowly lowers your confidence. Do something visible each week, even while you wait for the right offer."),
      o("Apply to every internship you see, whatever the field or terms, so that the gap on your resume is filled", 33, "Being busy is not the same as being focused, and applying without checking the field and terms can place you in work that teaches nothing. Pick two fields and check the duration, supervisor and what you receive first."),
      o("Set a weekly target for applications, begin one small project in your field and ask three people to introduce you", 100, "Applying, building current proof and using people together make your search and your story stronger. Pick one fixed day each week for applications and put it on your calendar."),
      o("Enrol in a course of several months first and start looking for internships once you finish it, so that you have more to offer", 50, "A course can add skills, but months pass with no real work to show. Combine it with a small project or a short internship, and begin the search while you study."),
    ]), stages: ['graduate'] },
    { ...sc('goals', "You study BCom or BA and a classmate says internships are only for IT and engineering students. What do you do?", [
      o("Agree, and concentrate on exams and your degree, then look for a job after finishing", 33, "Exams matter, but many fields take students for short periods, including accounts, retail, media, teaching and NGOs. Do not rule out experience before you have asked around."),
      o("Ask two teachers and one local professional which places near you take students in your field, and apply to one", 100, "Testing the claim with people who know the local scene is smart, since many such openings are found by asking. Visit or message the place within a week, while the introduction is fresh."),
      o("Apply only to large, well-known companies on the big portals, since a famous name looks best on a resume", 17, "Big names can have very few places and may give limited tasks. Smaller local firms, clinics, schools and shops that use your course often give more hands-on work, so add them to your list."),
      o("Search online for internships in your field for a few evenings, and if you find nothing suitable, accept that your field does not have them", 50, "Many local firms, clinics, workshops and schools never advertise online, so a quiet search proves little. Add direct visits and teacher introductions before you decide."),
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
      'Plan one short activity for the next break, such as sitting with someone at work, volunteering or a small project, and note what you learn.',
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
