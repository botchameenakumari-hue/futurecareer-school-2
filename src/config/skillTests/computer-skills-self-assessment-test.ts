// Computer Skills Self-Assessment Test: a bundle for the shared self-rating test page.
// General guidance only: no statistics, norms, pay figures or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/computer-skills-self-assessment-test/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'computer-skills-self-assessment-test',
    slug: 'computer-skills-self-assessment-test',
    pageUrl: BASE,
    breadcrumbName: 'Computer Skills Self-Assessment Test',
    metaTitle: 'Free Basic Computer Skills Assessment Test | Self-Rating',
    metaDescription:
      'Free basic computer skills assessment test: rate what you can do with files, documents, Excel or Sheets, online safety and data. Instant result, no certificate.',
    h1Lead: 'Free Basic Computer Skills',
    h1Accent: 'Assessment Test',
    eyebrow: 'Files, documents, spreadsheets, online safety and data in one self-rating',
    heroSub:
      'This free basic computer skills assessment test asks what you can actually do on a computer, in Excel or Google Sheets, online and with data, and shows which of five areas to practise first. It is a self-rating, not a certificate and not a timed knowledge exam, so there is nothing to pass or fail. It is made for students, freshers and adults returning to work in India.',
    stats: [
      { value: '44', label: 'questions' },
      { value: '5', label: 'skill areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five computer skill areas scored from what you say you can do',
      'About 8 minutes, no sign-up, no timer',
      'Free practice steps for where you are now, plus a 14-day routine',
    ],
    reportTitle: 'Computer Skills Report',
    reportFile: 'future-career-school-computer-skills-report.pdf',
    reportKicker: 'COMPUTER SKILLS REPORT',
    resultKicker: 'Your computer skills result',
    scoreLabel: 'Overall computer skills',
    bands: {
      high: 'A relative strength in your answers.',
      mid: 'Partly in place, with one clear next step.',
      low: 'The best place to start practising.',
    },
    domainsHeading: 'Five areas of everyday computer skills',
    domainsIntro:
      'Most people are strong in some of these areas and shaky in others. Someone may type fast and still lose files, or build neat sheets and click on a fake link. Start with the area where your score is lowest.',
    domains: [
      {
        key: 'basics',
        name: 'Computer basics and files',
        short: 'Moving around the computer and keeping your files in order',
        strong: 'You find, name, move and back up files without stress, install what you need from safe places and use shortcuts to save time.',
        weak: 'You lose time looking for files, ask someone else for small computer jobs, or avoid installing and fixing things yourself.',
        plan: [
          'Make one working folder with a sub-folder for each subject or project, and save every new file into it on the same day.',
          'Name files with a subject and a date, such as Resume-Oct, so the name tells you what is inside.',
          'Learn four shortcuts this week, copy, paste, undo and save, and use them instead of the mouse every time.',
        ],
      },
      {
        key: 'docs',
        name: 'Documents and presentations',
        short: 'Writing, formatting and presenting in a word processor and slides',
        strong: 'Your documents look tidy, use styles and lists the proper way and go out as clear PDFs, and each slide carries one idea.',
        weak: 'Documents look crowded or uneven, the layout breaks when you edit, and slides are full of paragraphs.',
        plan: [
          'Write a one-page application letter in a free word processor, using a heading style, one font and a bullet list for three points.',
          'Save it as a PDF, attach it to an email to yourself and check that it opens on your phone.',
          'Build a three-slide deck with one idea per slide and present it aloud to a friend in two minutes.',
        ],
      },
      {
        key: 'sheets',
        name: 'Spreadsheets (Excel or Google Sheets)',
        short: 'Entering, calculating, sorting and filtering in a sheet',
        strong: 'You use formulas instead of typed totals, sort and filter with confidence and set sheets up so that other people can read them.',
        weak: 'Totals are typed by hand, sheets are hard to read, and one changed number can break everything.',
        plan: [
          'Type ten numbers in a column and use SUM, AVERAGE and COUNT below them. Change one number and watch all three update.',
          'Turn a list into a clean table with one header row, one topic per column and no blank rows, then practise sort and filter.',
          'Rebuild one sheet from your own life, such as a monthly budget or your marks, using formulas for every total.',
        ],
      },
      {
        key: 'online',
        name: 'Internet and online safety',
        short: 'Searching, communicating and staying safe online',
        strong: 'You search with specific words, compare sources, use email and shared files properly and spot scams before they cost you.',
        weak: 'You click quickly, reuse passwords, or find it hard to tell a real message from a fake one.',
        plan: [
          'Turn on two-step verification for your email and banking apps today, and make your email password one you use nowhere else.',
          'Before clicking any message that asks for money, an OTP or a password, stop and check with the sender in another way.',
          'Search one question using exact words, open three results and note who wrote each one and when.',
        ],
      },
      {
        key: 'data',
        name: 'Working with data',
        short: 'Reading, cleaning, summarising and charting information',
        strong: 'You can read a table, fix messy entries, answer a question with totals and a chart, and check that the numbers make sense.',
        weak: 'Tables feel confusing, messy entries stay messy, and totals or charts are trusted without a second look.',
        plan: [
          'Take a small table and write one line on what each column and each row stands for.',
          'Clean a list with spelling and spacing mistakes using Find and Replace and Remove duplicates, and keep a copy of the original.',
          'Answer one question, such as which month sold most, with a total and a simple chart, then check that the parts add up.',
        ],
      },
    ],
    questions: [
      { d: 'basics', text: 'I can save a file in a folder I choose and find it again a week later without searching for long.' },
      { d: 'docs', text: 'I can write a letter or application in a word processor with a heading, paragraphs and a bullet list.' },
      { d: 'sheets', text: 'I can enter numbers in a sheet and add them with a formula such as SUM instead of adding by hand.' },
      { d: 'online', text: 'I can tell a real website or message from a fake one before I click or type a password.' },
      { d: 'data', text: 'I can look at a table and say what each column and each row stands for.' },
      { d: 'basics', text: 'I can create folders, rename files, and move or copy them between folders, a pen drive and cloud storage.' },
      { d: 'docs', text: 'I can make a document look neat with a clear font, spacing, alignment, margins and page numbers.' },
      { d: 'sheets', text: 'I can sort a table and filter it to show only the rows I need.' },
      { d: 'online', text: 'I use a different password for important accounts and keep two-step verification on for my email and banking.' },
      { d: 'data', text: 'I can find and fix common problems in a list, such as blank cells, repeated rows and one name spelled two ways.' },
      { d: 'basics', text: 'I can install, update or remove a program or app on my own, and I know where to download it safely.' },
      { d: 'docs', text: 'I can build a short presentation with a clear title slide, readable text and a picture or chart where it helps.' },
      { d: 'sheets', text: 'I can work out a percentage or an average in a sheet and copy the formula down a column.' },
      { d: 'online', text: 'I can search with specific words, compare two or three sources and judge which one to trust.' },
      { d: 'data', text: 'I can turn a table into a chart and pick a chart type that fits the question I am asking.' },
      { d: 'basics', text: 'I use keyboard shortcuts such as copy, paste, undo, save and find to work faster.' },
      { d: 'docs', text: 'I can save a document as a PDF and email it with a clear subject line and the right attachment.' },
      { d: 'sheets', text: 'I set up a sheet so others can read it, with a header row, clear column names and numbers stored as numbers.' },
      { d: 'online', text: 'I can use email, video calls and shared files for study or work, and I check who can open a file before I send the link.' },
      { d: 'data', text: 'I can answer a question such as which month sold the most by totalling and comparing the numbers.' },
      { d: 'basics', text: 'My files end up on the desktop or in Downloads with names like "final2", and I often cannot find the right one.', reverse: true },
      { d: 'docs', text: 'I press the space bar or Enter many times to push text into place instead of using tabs, alignment or lists.', reverse: true },
      { d: 'sheets', text: 'I type totals by hand, so they go wrong whenever a number changes.', reverse: true },
      { d: 'online', text: 'I open a link or an attachment quickly when a message looks urgent.', reverse: true },
      { d: 'data', text: 'I trust numbers in a report or a chart without checking where they came from or whether the parts add up.', reverse: true },
    ],
    readingTitle: 'How to read your computer skills result',
    readingSections: [
      {
        title: 'What this self-rating shows and what it does not',
        body: [
          'Each statement describes something you can do, such as saving into a folder, writing a SUM formula or checking a link. Your answers show how you see your own skills today. They are not marks, and nobody has watched you do the task.',
          'This is not a certificate and not an official assessment. It is also not a timed knowledge exam with right and wrong answers to memorise. Treat it as a map of where to practise.',
        ],
      },
      {
        title: 'Basic computer skills come before Excel and data work',
        body: [
          'A person who cannot find a file or set up a clean table will struggle in Excel, however many formulas they learn. That is why this test starts with files and documents and then moves to spreadsheets, online safety and data.',
          'If your spreadsheet and data areas are low but your basics are strong, you are ready to practise those two now. If your basics are low, give them a week first, because every other area depends on them.',
        ],
      },
      {
        title: 'Check the result with one small task',
        body: [
          'Pick a task you could be asked to do in a class, an interview or a job: a one-page letter, a sheet with totals and a filter, and a chart from five numbers. Time yourself and note where you got stuck.',
          'If the task went better than your score, trust the task and raise your next target. If it went worse, use the step you got stuck on as your practice for this week.',
        ],
      },
      {
        title: 'Using these skills for work and income',
        body: [
          'Basic computer, spreadsheet and data skills help in many office, records and back-office roles, and they make other learning easier. Skills alone do not decide a job, and no result here predicts a job offer or an income.',
          'Data analyst work is rated Scalable when you add proof of work, clear communication and basic sales and marketing sense, and this test only checks the starting habits. Data entry and typing-only work is Not so scalable, because it is crowded and easy to compare on price, so add a second skill beside it.',
          'Freelance spreadsheet and report help for small offices is Scalable with a business layer. That means planning who pays, how they find and trust you, proof of past work, follow-up and referrals.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool. It shows how you describe your own skills and does not check what you can really do on a screen.',
      'It is not a certificate, not an official assessment and not a timed knowledge exam. If an employer or institute needs a graded or certified result, that has to come from them.',
      'Each score comes only from your own answers. Nobody else’s results are used, so there is no pass mark and no target number to reach.',
      'It does not cover specialist software such as accounting packages, SQL, Python or dashboard tools, and it does not predict a job offer, marks or income.',
      'The safety tips are general. If you lose money to fraud or an account is hacked, tell your bank at once and report it as soon as you can on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or by calling the 1930 helpline.',
    ],
    faqs: [
      {
        q: 'Is this a free basic computer skills assessment test?',
        a: 'Yes. You pay nothing and do not register. It takes about 8 minutes, and when you finish you see five area scores at once and can save a PDF report.',
      },
      {
        q: 'Is this a free Excel skills assessment test?',
        a: 'Partly. The spreadsheet area asks what you can do in Excel or Google Sheets, such as formulas, sorting, filtering and setting up a readable table. It is a self-rating and not an Excel exam, so it does not test specialist functions or give a graded result.',
      },
      {
        q: 'Is this a data analyst skills assessment?',
        a: 'No. It checks the starting habits that data work depends on: reading a table, cleaning messy entries, totalling, charting and checking numbers. It does not test SQL, Python or dashboard tools, and it cannot tell you whether you are ready for a data analyst job.',
      },
      {
        q: 'Do I get a certificate or an official score?',
        a: 'No. This is a self-rating tool and the PDF is a personal report, not a certificate. A certificate would have to come from a recognised training body or an employer that sets and marks its own test.',
      },
      {
        q: 'Is this skills assessment test free to use, and do I need to sign up?',
        a: 'It is free and needs no sign-up. You answer by choosing how well each statement describes you and by picking what you would do in short everyday situations.',
      },
      {
        q: 'How is the score worked out?',
        a: 'You rate each statement from 1 (not true) to 5 (very true). A statement about a poor habit, such as typing totals by hand, counts the other way round, so agreeing with it lowers the score. Each everyday situation is worth 0 to 100 points, and the overall score is the average of your five area scores.',
      },
      {
        q: 'What is a good score on a computer skills assessment?',
        a: 'There is no pass mark to aim for. A lower area just shows where practice will help most, and you can retake the test in a few weeks to see whether it moved.',
      },
      {
        q: 'I only use a phone. Can I still take this test?',
        a: 'Yes. Rate yourself honestly, and expect the files and shortcut statements to score lower if you have mostly used a phone. That is useful to know, because many offices and colleges expect work on a computer.',
      },
      {
        q: 'How can I improve my computer skills for free?',
        a: 'Start with your lowest area and do one small task a day. Free tools such as Google Docs, Google Sheets or LibreOffice are enough for every step in your report, and so is Excel for the web, which is free with a Microsoft account but has fewer features than the desktop app. The 14-day routine gives four steps for that area, and retaking the test after a few weeks shows whether it moved.',
      },
      {
        q: 'I am returning to work after a break. Is this test for me?',
        a: 'Yes. Choose that stage before the result and the extra questions and advice change, with video calls, shared drives, work email and online payments in mind. A break does not erase what you know, and a quick check shows which tools to refresh first.',
      },
    ],
    related: [
      {
        href: '/blog/skills/digital-skills-for-jobs-india-basic-to-advanced/',
        title: 'Digital Skills for Jobs in India',
        description: 'Four levels of digital skills from basic to advanced, with free ways to learn and show proof.',
      },
      {
        href: '/blog/skills/advanced-excel-skills-for-jobs-india/',
        title: 'Advanced Excel Skills for Jobs in India',
        description: 'What to learn in Excel after the basics, and how to prove it with a clean sheet.',
      },
      {
        href: '/blog/skills/how-to-develop-analytical-skills-india/',
        title: 'How to Develop Analytical Skills',
        description: 'Practice, cases and proof for breaking problems apart and using data.',
      },
      {
        href: '/career-resources/data-science-analytics-career-roadmap/',
        title: 'Data Science and Analytics Career Roadmap',
        description: 'A step-by-step view of the data route, for when your basics are in place.',
      },
      {
        href: '/services/assessments/career-readiness-self-assessment/',
        title: 'Career Readiness Self-Assessment',
        description: 'A broader self-rating of how ready you are for your next move in work.',
      },
      {
        href: '/services/assessments/internship-readiness-self-assessment/',
        title: 'Internship Readiness Self-Assessment',
        description: 'Check how ready you are to start an internship, including the practical basics.',
      },
    ],
    breadcrumbDescription: 'Free computer skills test that scores files, documents, spreadsheets, online safety and data, with a 14-day practice routine.',
    webAppDescription:
      'A free original 44-question computer skills self-assessment covering computer basics and files, documents and presentations, spreadsheets in Excel or Google Sheets, internet and online safety, and working with data, with five scores, an overall score, stage-based advice, a 14-day routine and a downloadable report. It is a self-rating, not a certificate or a timed exam.',
    indexDescription:
      'Free basic computer skills self-rating: files, documents, Excel or Sheets, online safety and data, with five scores and a 14-day routine.',
    indexNote: 'Free, about 8 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'The same skill is used in different ways in a classroom, a first job and a return to work, so your report changes the extra questions and advice to match.',
    stages: [
      {
        key: 'student',
        label: 'School or college student',
        description: 'Assignments, projects, portals and group work, with a laptop, a computer lab or a phone',
        title: 'Practise on the work you already have to do',
        body: 'Every assignment is a free chance to practise files, documents and sheets. You do not need extra courses to start, only the habit of doing each task properly once.',
        actions: [
          'Set up one folder per subject this week and move every current assignment into it.',
          'Use a free word processor and a free spreadsheet for your next project, even if a friend offers to help.',
          'Keep one finished, tidy assignment and one small sheet as proof of what you can do.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher or job seeker',
        description: 'Applying for jobs or internships, or in a first role with office tools',
        title: 'Make your applications and first tasks look careful',
        body: 'Hiring managers see your CV, your email and your first files before they hear you speak. Clean documents and a basic sheet show care, and a short practice task can be done in a day.',
        actions: [
          'Make a one-page CV that prints cleanly and saves as a PDF, and send a test copy to yourself.',
          'Build a job application tracker in a sheet and update it every morning.',
          'Practise one small clean-and-total task so that a test task from a company does not feel new.',
        ],
      },
      {
        key: 'returning',
        label: 'Returning to work after a break',
        description: 'Coming back after family time, a career gap or a long period away from office tools',
        title: 'Refresh the tools, keep your experience',
        body: 'Offices now run on cloud storage, video calls, shared documents and online payments. You already know how work runs, and a few weeks of practice on current tools closes most of the gap.',
        actions: [
          'Spend a week doing real tasks on one cloud drive and one video-call tool, such as sharing family documents.',
          'Rebuild your CV in a current format and write one honest line about your break.',
          'Practise on a copy of a sheet so that the fear of breaking something stops holding you back.',
        ],
      },
    ],
    tips: [
      'Make one folder called Study or Work with a sub-folder for each subject or project, and save into it every time. When you press Save As, read the folder name in the box before you click Save.',
      'Open a free word processor and type a one-page application letter. Use the Heading style for the title and the bullet button for a list of three points.',
      'In a blank sheet, type five numbers in a column, click the cell below and type =SUM( then select the numbers and close the bracket. Change one number and watch the total update.',
      'Read the full web address, not only the name at the start, and open your bank or a government service by typing its address yourself or using its official app.',
      'Take any small table, such as a marks sheet, and write one line on what each column holds and in what unit. Then write what one row means, for example one student or one sale.',
      'Spend ten minutes making three folders and moving five files into them, once by drag and drop and once by copy then paste. Rename two files so the name says what it is and the month.',
      'Take a plain page of text and change only the style settings: one font, size 11 or 12, line spacing of 1.15 or 1.5, and page numbers at the bottom. Compare it with the original and notice how much easier it reads.',
      'In a sheet with ten rows, turn on Filter from the Data menu and show only one city or category. Then sort a number column from largest to smallest and clear the filter.',
      'Open the security settings of your email today and turn on two-step verification. Then change the password of one important account to a long phrase you use nowhere else.',
      'Make a list of ten names and add a few mistakes on purpose: an extra space, small letters, a repeated name. Fix them with Find and Replace and Remove duplicates.',
      'Install one free program you need, such as a PDF viewer, from its official website only. Then find it in your list of installed apps and practise updating it and removing one you no longer use.',
      'Make a three-slide deck on any topic: a title slide, one slide with three short points and one slide with a picture or chart. Keep each slide to a heading and no more than three lines.',
      'Type marks out of 50 for five subjects. In the next column write a formula that divides each mark by 50, format the column as a percentage, then use AVERAGE on the original marks.',
      'Pick a question you really have, such as how a scholarship works, and search it with exact words. Open three results, note who wrote each one and the date, and see where they agree.',
      'Take five numbers with labels, select them and insert a chart. Try a bar chart and a line chart, then write one line on which one answers your question better.',
      'Learn four shortcuts this week and use them every time: Ctrl+C, Ctrl+V, Ctrl+Z and Ctrl+S (Command on a Mac). Stick a note on the screen until you stop reaching for the mouse.',
      'Save any document as a PDF, then attach it to an email to yourself with a subject like "Application for data entry role, your name" and a two-line message. Open the email and check that the attachment opens.',
      'Take a sheet you use and fix its layout: one header row at the top, one topic per column, no blank rows inside, and numbers typed as numbers without units written in the cell.',
      'Share one practice file with a friend as view only, then change the setting to comment and then to edit. Notice what each level allows, and check who can see a file before you send a link.',
      'Use a small sales or marks table and answer one question, such as which month was highest, in two ways: sort the table, then use a total or a pivot table. Check that both ways agree.',
      'Make a rule that every new file goes into a named folder at once, with a subject and a date in its name. Once a week, move anything left on the desktop or in Downloads into its folder.',
      'Turn on the formatting marks (the paragraph symbol) in your document to see the spaces and Enter presses. Replace repeated spaces with a tab or an indent, and use the list button instead of typing numbers.',
      'Pick one sheet where you typed the totals by hand and replace them with SUM or the formula that does the same job. Change one number and see that the total follows.',
      'Treat urgency as a warning sign. Do not open the link or the attachment, and check with the sender by a phone call or the official app first.',
      'Before you use a number from a report, check three things: who produced it, what date it covers and whether the parts add up to the total. Write the check next to the number.',
    ],
    tipsUp: [
      'Put the date in your file names, year first, such as Report-2026-11. At the end of the week, check that every file from that week is in its folder and none is left on the desktop.',
      'Add a numbered list, a header with your name and page numbers to a longer document. Ask a friend to open it on their screen and tell you if anything moved or looked odd.',
      'Write formulas for an average and a count next to your total, then add a new row and check that all three update. Try a range that covers a whole column of ten numbers.',
      'Pick three messages from your phone that ask you to act, and write the clues that show each one is real or fake. Share your list with a family member and agree one rule you both follow.',
      'Open a table from a public website and describe each column in one line. Write two questions the table can answer and one it cannot.',
      'Back up your most important folder to two places, for example a pen drive and a cloud account, and note the date. Next week open a file from the backup to confirm that it works.',
      'Make a template for your most common document, such as an application letter, with the styles already set. Next time open a copy and change only the content.',
      'Combine a filter with a sort: show only the rows for one category, then sort by amount. Copy the visible rows to a new sheet and check that the row count matches what the filter showed.',
      'Check which of your accounts still share an old password and change them one by one, starting with email. Try the password saver in your browser or phone and note what it asks of you.',
      'Clean a list of fifty entries and keep a note of what you changed, such as how many duplicates and how many spacing errors. Show the note with the cleaned list.',
      'Write the steps to install and remove a program as a numbered list that someone else could follow. Test the list on a friend or a family member.',
      'Present your three slides to someone for two minutes without reading from them. Ask what they remember and cut anything they did not.',
      'Build a small monthly budget sheet with income, expenses, totals and a percentage column. Change one expense and check that every total and percentage updates.',
      'Compare how three sources describe the same fact and write which one you trust most and why. Use the same steps for a claim that was forwarded to you on a chat app.',
      'Give your chart a title, labelled axes and a one-line takeaway under it. Show it to a friend and ask what the chart says before you explain it.',
      'Add two new shortcuts each week, such as Ctrl+F to find and Ctrl+A to select all. Keep a list and tick the ones you now use without thinking.',
      'Practise a full send: a clear file name, the PDF attached, a subject line, a greeting, two lines and your name and phone number. Send it to a friend and ask whether they could act on it without asking you anything.',
      'Ask someone else to open your sheet and tell you what each column means without your help. Change the headers until they can do it.',
      'Set up a shared folder for one group project with one named owner and a file naming rule. After a week, open the version history and see who changed what.',
      'Repeat the exercise with a table of at least 100 rows and confirm that the total in your summary equals the total of the original column. Write the answer in one sentence for someone who has not seen the data.',
      'Do a ten minute clean-up every Friday: rename unclear files, delete duplicates and move finished work to an Archive folder. Count the loose files each week and aim to reduce the number.',
      'Reformat one old document using only styles and tabs, then add a new line at the start and see whether everything stays in place. If it does, you have formatted it properly.',
      'Click on each total in an old sheet and look in the formula bar. Count how many are typed numbers and not formulas, and replace them one by one.',
      'Write your own checklist for any message that asks for money, a password or an OTP, and keep it on your phone. Add the number 1930 and the cybercrime.gov.in portal so you know where to report fraud.',
      'Add a source and date line to every chart or table you make. When a number looks surprisingly high or low, trace it back to the raw rows before you use it.',
    ],
    strongTip: 'This skill already works for you. Keep using it on real tasks, and use the same method where you are weaker.',
    domains: {
      basics: {
        why: 'Every other computer skill sits on files, folders and a few shortcuts. When you can find, name and back up your work in seconds, you save time every day and avoid the panic of a lost file before a deadline.',
        roles: [
          'College work, exam forms, project submissions and online classes',
          'Office, records and admin jobs (Not so scalable on their own: one employer sets the pay and many people apply, so add a second skill)',
          'Anyone who shares documents with a team, a teacher or a family member',
        ],
        routine: [
          'Days 1 to 3: Make a working folder with sub-folders, move your current files into it and rename the five most important ones.',
          'Days 4 to 7: Use copy, paste, undo, save and find as shortcuts every time, and keep a sticky note until they come without thinking.',
          'Days 8 to 11: Back up your main folder to a pen drive or cloud storage and open one file from the backup to test it.',
          'Days 12 to 14: Install one safe free program from its official site, update it and remove one you no longer use.',
        ],
        mistakes: [
          'Saving everything on the desktop or in Downloads and hoping to remember where it went',
          'Keeping one copy only, on one device, with no backup',
          'Downloading programs from the first website that appears in a search',
        ],
        proof: [
          'A folder structure for your subjects or projects that anyone can follow',
          'A backup with a date, and a test that a file opens from it',
          'A short list of the shortcuts and tools you use daily',
        ],
        askOthers: 'When you watch me use a computer, where do I lose the most time, and which small habit would save it?',
        talkingPoints: [
          'You keep files in a clear structure and back them up',
          'You can install, update and remove programs from safe sources',
          'You use shortcuts and can fix small problems yourself',
        ],
        midStep: 'Agree one naming rule, such as subject-topic-month, and apply it to every new file for two weeks.',
      },
      docs: {
        why: 'Documents are how most people judge your care: your CV, your application letter, your report and your slides. Neat formatting is mostly a few settings used the same way each time, not artistic skill.',
        roles: [
          'Assignments, reports, CVs, applications and presentations',
          'Office, admin, sales support and coordination jobs (Not so scalable on their own: growth depends on one employer and a fixed pay ladder)',
          'Anyone writing emails, minutes or proposals that others will read',
        ],
        routine: [
          'Days 1 to 3: Write a one-page letter with a heading style, one font, aligned paragraphs and a bullet list.',
          'Days 4 to 7: Add page numbers, margins and spacing, then save the document as a PDF and email it to yourself.',
          'Days 8 to 11: Make a three-slide deck with one idea per slide, then present it aloud without reading.',
          'Days 12 to 14: Save a template of your most common document and use a copy of it for the next real task.',
        ],
        mistakes: [
          'Using the space bar and Enter to push text into place',
          'Filling a slide with paragraphs and reading them aloud',
          'Sending a file that opens with a broken layout on someone else\'s phone',
        ],
        proof: [
          'A one-page CV or letter that prints cleanly and exports as a PDF',
          'A short presentation with one idea per slide',
          'A template you reuse for a repeated document',
        ],
        askOthers: 'If you opened my document on your phone, what would you notice first, and what would you change?',
        talkingPoints: [
          'You use styles, lists and page settings instead of manual spacing',
          'You send files as clear PDFs with a proper subject line',
          'You build slides around one idea each',
        ],
        midStep: 'Learn heading styles and the automatic list tool, and use them in every new document for a week.',
      },
      sheets: {
        why: 'A sheet works for you only when the totals are formulas and the table is laid out cleanly. Then a change in one number updates everything, and another person can read your work without asking.',
        roles: [
          'Marks, budgets, attendance, stock lists and small business records',
          'Accounts and operations roles (Scalable with a business layer: a salaried post has a fixed ladder, so a small bookkeeping or records service for local offices is the layer)',
          'Job seekers who may be given a short sheet task as part of a selection',
        ],
        routine: [
          'Days 1 to 3: Type ten numbers and use SUM, AVERAGE and COUNT, then change a number to see all three update.',
          'Days 4 to 7: Sort and filter a list of twenty rows and write down what each tool does to the rows you cannot see.',
          'Days 8 to 11: Work out percentages with a formula, copy it down a column and format the column as a percentage.',
          'Days 12 to 14: Rebuild a real sheet from your life, such as a budget, with a header row, formulas for every total and a note on what it shows.',
        ],
        mistakes: [
          'Typing a total and forgetting to change it when the numbers change',
          'Leaving blank rows, merged cells or units typed inside number cells',
          'Sending a sheet without checking the totals a second way',
        ],
        proof: [
          'A budget or marks sheet with working formulas and a clear layout',
          'A before and after of a messy sheet you tidied',
          'A short note listing the formulas you can use without looking them up',
        ],
        askOthers: 'When you open my sheet, can you tell what each column means in under a minute, and which number would you check first?',
        talkingPoints: [
          'You use formulas for totals, averages and percentages',
          'You sort and filter and keep the table clean',
          'You check a sheet before you share it',
        ],
        midStep: 'Replace every typed total in one sheet you use with a formula, and test it by changing an input.',
      },
      online: {
        why: 'Searching, email, video calls and payments are part of study and work now, and so are scams that copy banks, employers and scholarships. A few fixed habits protect you far better than trying to spot every trick.',
        roles: [
          'Online classes, exam portals, scholarship and job applications',
          'Any role that uses email, shared files, video calls or online payments',
          'People who manage money, documents or accounts for a family or small business',
        ],
        routine: [
          'Days 1 to 3: Turn on two-step verification for your email and banking apps and set a long, unique password for email.',
          'Days 4 to 7: Search one question with exact words, open three results and note who wrote each and when.',
          'Days 8 to 11: Practise sharing a file with view, comment and edit access, and check the setting before you send the link.',
          'Days 12 to 14: Write a short checklist for messages that ask for money, a password or an OTP, and add the 1930 helpline to your phone.',
        ],
        mistakes: [
          'Entering an OTP or UPI PIN because a message or caller said it was needed',
          'Using the same password for email, shopping and banking',
          'Paying a fee or sending ID copies for a job offer that came only on a chat app',
        ],
        proof: [
          'Two-step verification turned on for your main accounts',
          'A note showing how you checked a source or a suspicious message',
          'A shared document where you set the access on purpose',
        ],
        askOthers: 'If you got the messages I get, which ones would you trust and which would you check first, and how would you check?',
        talkingPoints: [
          'You use unique passwords and two-step verification',
          'You verify messages through a second route before acting',
          'You share files with the right access and know where to report fraud',
        ],
        midStep: 'Choose one account you use daily and make it as safe as you can this week: unique password, two-step verification and a recovery option that you control.',
      },
      data: {
        why: 'Data work starts long before charts. You need to understand what a table says, fix the mess in it, answer one question and check that the answer is believable.',
        roles: [
          'Surveys, project reports, lab or field readings and sales or attendance records',
          'Entry-level data analyst roles (Scalable once you add proof of work and clear communication, though entry jobs are crowded)',
          'Anyone who must explain a number or a chart to someone else',
        ],
        routine: [
          'Days 1 to 3: Take a small table and write one line on what each column and each row stands for.',
          'Days 4 to 7: Clean a list with spacing, spelling and repeated entries, and keep a copy of the original.',
          'Days 8 to 11: Answer one question with totals, such as which month sold most, and check that the parts add up.',
          'Days 12 to 14: Turn the answer into a chart with a title and a one-line takeaway, and show it to someone who has not seen the data.',
        ],
        mistakes: [
          'Making a chart before you know what question it answers',
          'Cleaning the original file with no copy to go back to',
          'Using a total or a chart without checking where the numbers came from',
        ],
        proof: [
          'A cleaned list with a note of what you changed',
          'A one-page summary with a table, a chart and a one-line takeaway',
          'A note on one number you checked and found wrong, and how you fixed it',
        ],
        askOthers: 'When I show you a chart or a total, what question do you want answered that it does not answer?',
        talkingPoints: [
          'You clean data on a copy and note every change',
          'You answer a question with totals and a simple chart',
          'You check numbers before you share them',
        ],
        midStep: 'Do the whole loop once on a real table: question, clean copy, total, chart, check and a two-line summary.',
      },
    },
    thirtyDay: [
      'Week 1: Begin the routine for your lowest area with a short practice slot each day, and note each evening what you did.',
      'Week 2: Finish the routine, then do the small proof task from your report and note where you got stuck.',
      'Week 3: Turn to your second-lowest area with two steps from its plan, and keep the habit from week one going.',
      'Week 4: Retake the test, compare each area with your first result and keep one finished file from each area as proof.',
    ],
  },

  extras: [
    // Student
    { ...x(['student'], 'docs', 'I can set up an assignment the way my school or college asks, with the right margins, headings, page numbers and cover page.', 'Ask your department for the format sheet, or look at a well-marked assignment, then save a template with those settings and reuse it.'), up: 'Make the template once and test it on your next assignment, then ask a teacher whether the layout meets the format. Update the template with any correction they give.' },
    { ...x(['student'], 'sheets', 'I keep a simple sheet for my marks, attendance or monthly spending and update it myself.', 'Make a sheet with one row per day or subject and one column per item. Enter one week of data and add a total at the bottom.'), up: 'After a month, add a chart and one line saying what the sheet shows, such as which subject needs more time. Share it with a friend and ask what is unclear.' },
    { ...x(['student'], 'online', 'I know how to submit an assignment on my portal and confirm that it uploaded.', 'Do a practice upload with a small test file if the portal allows it, and look for a confirmation message or receipt. Take a screenshot of it for your records.'), up: 'Submit at least a day before the deadline for your next two assignments and keep each confirmation in one folder. Note what went wrong if an upload failed and what you did about it.' },
    { ...x(['student'], 'data', 'I can collect answers from classmates with an online form and read the results as a table or chart.', 'Make a five-question form with a free tool, send it to ten friends and open the responses in a sheet.'), up: 'Clean the responses, count each answer and make one chart with a title. Write two lines on what the results show and what they do not show.' },
    { ...x(['student'], 'basics', 'I depend on a computer centre or a friend to type, print or format my assignments.', 'Do your next assignment yourself from start to finish, even if it takes longer. Ask a friend to check it afterwards and not to do it for you.', true), up: 'List the steps you needed help with, such as page numbers or printing, and learn one of them each week until the list is empty.' },
    // Fresher
    { ...x(['fresher'], 'docs', 'I have a one-page CV that I made myself, which prints cleanly and also saves as a PDF.', 'Make the CV in a word processor with one font, clear headings and no tables that break when printed. Export a PDF and open it on a phone and a computer to check that it looks the same.'), up: 'Make a second version for one particular job, with the top three skills changed to match the advert. Ask a senior or a friend who works to review both.' },
    { ...x(['fresher'], 'sheets', 'I keep a job application tracker in a sheet with company, date, status and the next follow-up date.', 'Make a sheet with those four columns, add every application you have made so far, and sort by follow-up date each morning.'), up: 'Add a column for what you learned from each reply, and use a filter to see only the ones waiting for more than a week. Follow up on those.' },
    { ...x(['fresher'], 'online', 'I use a sensible email address and check it, with the spam folder, every day for interview calls and offers.', 'Use an address based on your name and not a nickname, and check the inbox and the spam folder daily. Put the same phone number and email on your CV and every application.'), up: 'Set a fixed time each day for email and reply to company messages within the day. Keep a log of every message from companies so that you can follow up.' },
    { ...x(['fresher'], 'data', 'I can open a downloaded report or CSV file and make sense of its columns.', 'Download a sample file from a public website, open it in a sheet and write one line for each column. Note any column that is blank or confusing.'), up: 'Pick two columns and make one summary, such as a total by category. Write one question the file cannot answer and what extra data you would need.' },
    { ...x(['fresher'], 'online', 'I send ID copies or a fee for a job offer that reached me only on a chat app, without checking the company.', 'Stop before paying or sharing any document. Look the company up on its own website, check its address and number independently, and remember that genuine employers do not normally ask candidates to pay to get a job.', true), up: 'Write a short checklist for any offer: company website, official email address, written offer letter and no fee. Share it with two friends who are also job hunting.' },
    // Returning to work
    { ...x(['returning'], 'basics', 'I can use video calls, shared drives and chat tools the way offices use them now.', 'Ask a family member or friend for a practice video call. Try sharing your screen, muting and unmuting, and opening a shared folder link.'), up: 'Join one free online meeting a week, such as a webinar, and use the chat and the raise hand button. Note the features you still find confusing and learn one each week.' },
    { ...x(['returning'], 'docs', 'I can write a short, clear work email and reply on a long thread with the right attachment.', 'Write a short email asking about a job or a meeting, with a subject line that states the purpose. Attach a file, send it to yourself and check it.'), up: 'Rewrite the email so that the request is in the first two lines, then ask a friend to read only those lines and say what you want. Practise replying on a thread without losing earlier messages.' },
    { ...x(['returning'], 'sheets', 'I can open a sheet someone else made, understand it and add a row without breaking the formulas.', 'Ask for a sample sheet, click on the cells with totals and read the formula in the formula bar. Add a row and check that the totals include it.'), up: 'Write a short note on what each column and formula does, and ask the owner of the sheet whether your reading is right. Repeat with a second sheet.' },
    { ...x(['returning'], 'online', 'I can use UPI, net banking and government portals on my own without sharing my PIN or OTP.', 'Remember that you enter your UPI PIN only to send money and never to receive it, and that a genuine bank does not ask for your OTP or PIN. Practise a small payment with a family member beside you.'), up: 'List the portals you use and save each official address in your own bookmarks, then open them only from there. Save the cyber crime helpline 1930 in your phone.' },
    { ...x(['returning'], 'data', 'I stay away from tables and numbers on a screen because I am afraid I will break something.', 'Work on a copy. Make a copy of any sheet, change things freely and use undo as often as you like, because the original stays safe.', true), up: 'Set a small challenge each week on a copy: add a total, apply a filter, make a chart. Keep a list of what you tried so that you can see what you can now do.' },
  ],

  stageAdvice: {
    student: {
      basics: sa('As a student, files pile up from classes, group work and downloads, and a lost file can cost you marks.', 'Keep one folder per subject with sub-folders for notes, assignments and submissions.', 'Back up your assignments to cloud storage or a pen drive before each submission week.'),
      docs: sa('Assignments, reports and presentations make documents the most common computer task in college.', 'Learn heading styles, page numbers and a contents list in one document you already have to write.', 'Build slides with one idea each and practise saying the idea aloud without reading.'),
      sheets: sa('Lab readings, surveys and project costs often end up in a sheet, and a few formulas save hours.', 'Use a sheet for your own marks or expenses so that you practise formulas on data that matters to you.', 'Learn SUM, AVERAGE, COUNT, sorting and filtering well before you try anything advanced.'),
      online: sa('Students use portals, group chats and shared drives every day, and also meet fake scholarship and job messages.', 'Check any scholarship, internship or exam message on the official website before you share documents or pay anything.', 'Use a strong separate password for your college email and turn on two-step verification.'),
      data: sa('Projects, surveys and reports need you to handle data with care, even if you are not studying a data subject.', 'Run one small survey with a form, clean the answers and show one chart.', 'For each chart in a project, write the question it answers and where the numbers came from.'),
    },
    fresher: {
      basics: sa('Offices expect you to find files, manage downloads and learn the company tools quickly.', 'Keep your working folder tidy from the first day and name files with a subject and a date.', 'Write down each tool you are asked to use and learn its three most frequent actions first.'),
      docs: sa('Your CV, cover email, reports and slides are often judged within a minute.', 'Make a clean one-page CV and a short email template, and ask someone who works to review them.', 'Practise turning a long note into a one-page summary with headings.'),
      sheets: sa('Many entry-level tasks involve cleaning lists, tracking items and making totals in a sheet.', 'Practise sorting, filtering, totals, counting by category and percentages on a real list, such as your own application tracker.', 'Check your totals against a second method before you send a sheet to anyone.'),
      online: sa('Job hunting online brings real offers and fake ones, and you may upload documents on many portals.', 'Verify each company independently and never pay a fee to get a job.', 'Use one professional email address and keep a record of every portal where you uploaded documents.'),
      data: sa('Even in roles that are not about data, you may be asked to read a report, count something or explain a chart.', 'Read one short report a week, such as an annual summary from a company or a school, and write two lines on what it says.', 'Do one small clean-and-summarise exercise on a public sample file and keep it as proof of your work.'),
    },
    returning: {
      basics: sa('After a break, the tools may have changed: cloud storage, video calls and apps that work mainly from a phone.', 'Spend a week using one cloud drive and one video-call tool for real tasks, such as sharing family documents.', 'Write down the steps you forget and keep them as a one-page cheat sheet.'),
      docs: sa('Your experience is valuable, and a clear CV and email help people see it.', 'Rebuild your CV in a current format that saves cleanly as a PDF, with one honest line about your break.', 'Practise short work emails with a clear subject line and one clear request.'),
      sheets: sa('Records, rosters, budgets and lists run on sheets in most workplaces.', 'Take a household budget or a list you already know and rebuild it in a sheet with formulas.', 'Practise on a copy so that the fear of breaking something does not hold you back.'),
      online: sa('Online payments, government portals and job apps are routine now, and so are the scams that target them.', 'Follow three rules: never share your PIN or OTP, open portals from your own bookmarks, and report fraud on 1930.', 'Use a separate email address for job applications and check it every day.'),
      data: sa('Your work history gives you context that a sheet alone does not, such as why a number looks wrong.', 'Pick data you know from earlier work, such as attendance, stock or sales, and practise totalling and charting it.', 'Write a one-paragraph summary of what the numbers say, in plain words, as you would for a manager.'),
    },
  },

  scenarios: [
    // basics
    sc('basics', 'You must submit a file in two hours, but you cannot tell which of five similar files is the latest. What do you do?', [
      o('Send the file whose name looks most final, such as final-final2, and hope it is the right one', 17, 'A name is not proof of what is inside. Open the file and check it, and rename it so the name says the subject and the date.'),
      o('Ask a friend to send you their copy so that you do not have to search', 33, 'A friend\'s copy may not have your changes. Sort by date and check your own files first, and ask only if they are really missing.'),
      o('Open each of the five files in turn, scroll through them for several minutes, compare what each contains, and then pick the one that looks fullest and send it', 67, 'Opening the files is the right idea, and sorting by date modified would have shown you the answer faster. Use it first next time, then open the file to confirm.'),
      o('Sort the folder by date modified, open the newest one, check that it has your last changes, and rename it clearly before sending', 100, 'Sorting by date and checking the content gives you a safe answer. Keep one clear name from now on so that you do not repeat this search.'),
    ]),
    sc('basics', 'Your computer becomes very slow while you have unsaved work open. What do you do first?', [
      o('Restart the computer right away to get it moving', 33, 'A restart may lose everything you have not saved. Try to save first, even if it takes a minute.'),
      o('Save your work at once, close programs you are not using, and restart if it stays slow', 100, 'Saving first protects your work. Closing unused programs often fixes the slowness, and a restart is the next safe step.'),
      o('Wait and keep clicking until something happens', 17, 'Repeated clicks can freeze the computer further. Wait a short time, then save, close extra programs and restart if needed.'),
      o('Hold down the power button immediately', 0, 'A forced shutdown risks losing your work and sometimes damages files. Use it only when nothing else responds.'),
    ]),
    // docs
    sc('docs', 'You have to prepare a two-page report from your rough notes for a teacher or manager. What do you do?', [
      o('Type it all in one block and use Enter to space the sections', 33, 'Manual spacing breaks as soon as you edit. Use heading styles and paragraph spacing so the layout stays in place.'),
      o('Set a font and heading styles, put the points under clear headings, add page numbers, check spelling, then export a PDF', 100, 'Styles make the structure clear and easy to change. A last read and a PDF export make sure it looks the same on every device.'),
      o('Copy the notes into the document and add bold to the important words', 17, 'Bold alone does not give the report a structure. Add headings and short paragraphs so that people can find each point.'),
      o('Set it out neatly with a title and clear headings, then send it straight away without a final read or a PDF check because the time is short', 67, 'A clear structure is the biggest step and you have done it. A two-minute read for spelling and layout catches the mistakes people notice first.'),
    ]),
    sc('docs', 'You will present for ten minutes, and your slides are full of paragraphs. What do you do?', [
      o('Cut each slide to one idea with a few words, move the detail to your speaker notes and practise aloud', 100, 'Short slides keep people looking at you. Practising aloud shows you which parts you need on the slide and which you can say.'),
      o('Make the font smaller so that all the text fits on each slide', 17, 'Small text is hard to read from a distance. Remove words instead of shrinking them.'),
      o('Keep the text and read it from the screen so that nothing is missed', 33, 'Reading the slide word for word loses your audience. Keep the points short and speak the rest.'),
      o('Shorten some of the slides to bullet points, keep the longer slides as they are, and rehearse the talk only once, the night before', 67, 'Bullets are a good start. Check every slide for one idea and keep each bullet to a line.'),
    ]),
    // sheets
    sc('sheets', 'A sheet of 200 rows has totals typed by hand, and you find two of them are wrong. What do you do?', [
      o('Replace the typed totals with a formula, copy it down, then compare a few results against a manual calculation', 100, 'Formulas stop this error from coming back, and a spot check proves they are right. Keep the old totals in a spare column for the check.'),
      o('Correct only the two wrong totals and move on', 33, 'The other 198 may be wrong too, and typed totals will go wrong again. Replace them with a formula.'),
      o('Check all 200 totals with a calculator and retype the wrong ones', 17, 'This takes hours and will fail again with the next change. A formula does the work in seconds.'),
      o('Add a new column with a formula for the total, delete the typed column once the two match, and send the sheet without checking any rows by hand', 67, 'Comparing before you delete is a careful way to do it. Check a few rows by hand too, so that you know the formula is right.'),
    ]),
    sc('sheets', 'You need all the rows for one city where the amount is above 5,000 from a long list. What do you do?', [
      o('Scroll down the whole list, pick out the matching rows by eye and copy them one by one into a new sheet, checking each as you go', 17, 'This is slow and easy to get wrong, and you may miss a row. A filter shows only the rows that match.'),
      o('Turn on the filter, choose the city, then set the amount filter to greater than 5,000 and check the row count', 100, 'Filters let you combine two conditions without touching the data. Note the row count so that you can confirm it later.'),
      o('Sort by city and look for the amounts by eye in that block', 50, 'Sorting gets you closer. A second filter on the amount would remove the need to look through each row.'),
      o('Delete all the rows that do not match and keep what is left', 33, 'Deleting loses the original data. Filter or copy the matching rows to a new sheet instead.'),
    ]),
    sc('sheets', 'A formula you wrote shows an error such as #DIV/0! instead of a number. What do you do?', [
      o('Delete the formula and type the answer by hand', 17, 'This removes the error and also the update when numbers change. Find the cause in the cells instead.'),
      o('Search the error message online, copy the first formula that looks similar from a forum, paste it over yours and move on if the number changes', 50, 'Searching helps you learn what the error means. Check which of your own cells cause it before you paste a formula you do not understand.'),
      o('Hide the column so no one sees the error', 0, 'The problem is still there and the next person may trust a wrong number. Fix the cause or show a clear note.'),
      o('Read the error, click the cells the formula points to, find the empty or zero cell, and fix the input or handle the zero', 100, 'The error message names the kind of problem, and the referenced cells hold the cause. Fix the input first before you hide the error.'),
    ]),
    // online
    sc('online', 'You get an SMS saying your bank account will be blocked today unless you click a link and update your KYC. What do you do?', [
      o('Click the link to see what the page looks like, and enter your password only if the page looks like your bank\'s real website and shows a lock icon', 33, 'Even opening a link can be risky on a fake site. Do not click at all and check through the official app.'),
      o('Do not click. Open your bank\'s official app or type the website yourself, or call the number on your card, and report the SMS', 100, 'Urgency is the scammer\'s tool. Checking through your own app or the number on your card gives you a safe answer.'),
      o('Click and update the details quickly so that your account is not blocked', 0, 'This is how people lose money. The Reserve Bank of India warns that a link in a message telling you to update KYC is a common fraud method. Check with your bank through its own app or the number on your card.'),
      o('Forward the SMS to a friend and ask what they think', 17, 'Forwarding spreads the risk. Check the facts with the bank directly and report the message.'),
    ]),
    sc('online', 'A chat message offers a well-paid work-from-home job and asks for a small registration fee first. What do you do?', [
      o('Pay the small fee since the loss is small if it turns out wrong', 0, 'The first payment is often followed by requests for more. Do not pay, and share the message with friends so they are warned.'),
      o('Ask the sender to prove it is genuine and wait for their reply', 33, 'A scammer can send convincing replies. Check the company independently and not through the sender.'),
      o('Do not pay. Search for the company on its own website, check its contact details and ask for a written offer, and report the message', 100, 'Genuine employers do not normally ask candidates for a fee to join. Checking the company yourself shows whether it is real.'),
      o('Share your ID copies, a photo and your bank details first so that the company can verify who you are, before you decide about any fee', 17, 'ID copies can be misused for fraud. Share documents only after you have verified the company and received a written offer.'),
    ]),
    sc('online', 'You have used a shared computer at a cyber cafe to check your email. What do you do before you leave?', [
      o('Close the browser window, switch off the computer after a last look at the screen, and walk away without logging out of any of the sites', 50, 'Closing the window may leave you logged in to your email. Log out of each site first, then close the browser.'),
      o('Log out of every site, close the browser, make sure nothing was saved or downloaded, and do not let the browser remember the password', 100, 'Logging out and clearing your traces protects your account for the next person. Never choose the save password option on a shared computer.'),
      o('Leave the page open for the next person, since you might come back', 0, 'The next person could open your email. Always log out and close the window.'),
      o('Save your documents on the desktop so that you can find them next time', 17, 'Other people can see and copy files on a shared computer. Keep your files on your own storage and remove copies you made.'),
    ]),
    // data
    sc('data', 'A sales sheet lists the same customer as "Ravi Traders", "ravi traders" and "Ravi Trader". How do you prepare it for counting?', [
      o('Copy the sheet first, make the names consistent with Find and Replace or a text formula, remove repeated rows after checking them, and note what you changed', 100, 'Working on a copy keeps the original safe, and a note lets someone else repeat or undo your steps. Check the repeated rows before you delete them.'),
      o('Count the rows as they are, since the names look close enough', 17, 'The counts will be wrong because the sheet sees each spelling as a different customer. Standardise the names first.'),
      o('Fix the names by hand in the original file and save', 33, 'Editing the original loses the way back. Work on a copy and write down the changes.'),
      o('Fix the names and delete repeated rows in the original after a quick look', 50, 'You are fixing the right thing. Keep a copy and note the changes before you delete anything.'),
    ]),
    sc('data', 'You are asked which of three products sold the most last quarter, and the data has 600 rows. What do you do?', [
      o('Scroll through the rows and estimate which product appears most often', 17, 'Counting rows is not the same as adding sales, and an estimate may be wrong. Use a total for each product.'),
      o('Sort by product and add each block of rows by hand with a calculator', 33, 'This works but is slow and easy to get wrong. A formula or pivot table does it in seconds and can be rechecked.'),
      o('Total each product with a formula and send the answer without checking the overall total', 67, 'The totals are the right method. A last check that the parts add up to the whole takes a minute and avoids an embarrassing mistake.'),
      o('Total sales for each product with a pivot table or a SUMIF formula, check that the three totals add up to the overall total, and show the answer with a simple chart', 100, 'Summing by product answers the question directly, and the add-up check catches errors. A simple chart helps a person see the answer quickly.'),
    ]),
    sc('data', 'A chart you made shows a big jump in March. What do you do before you share it?', [
      o('Open the rows behind March, look for an entry error or a one-off event, and add a note on what caused the jump', 100, 'A sudden jump is often a typing error or a one-off event. Checking the rows first keeps you from sharing a wrong story.'),
      o('Share it as it is, since the chart came from the data', 17, 'A chart repeats whatever is in the data, including mistakes. Check the numbers before you share it.'),
      o('Remove March from the chart so that it looks smoother', 0, 'Removing a point hides information and can mislead people. Explain the jump or fix the entry.'),
      o('Ask a colleague whether March was unusual, add what they tell you as a note under the chart, and share it without opening the rows yourself', 67, 'A person who knows the business gives useful context. Also check the rows yourself, so you can confirm what they tell you.'),
    ]),
    // Stage specific
    { ...sc('docs', 'Student: your group project is being written by four people who keep sending different versions on a chat app. What do you do?', [
      o('Ask everyone to send their part to you and combine them yourself', 67, 'This can work, but it makes you the only person with the full version. A shared document lets everyone see the whole and avoids late surprises.'),
      o('Move the report to one shared online document, give everyone edit access, agree who owns the final copy and use comments for changes', 100, 'One shared copy ends the version problem. Version history lets you see who changed what.'),
      o('Pick the version that arrived last and ask the others to follow it', 33, 'The last version may not include the others\' changes. Agree one master file and one owner.'),
      o('Keep editing your own copy and send it to the teacher in the end', 17, 'The group may end up with several different reports. Work in one shared file from today.'),
    ]), stages: ['student'] },
    { ...sc('sheets', 'Fresher or job seeker: a company asks you to clean a list and make a summary table within a day, and you have used Excel only a little. What do you do?', [
      o('Ask a friend to do the task for you and send it as your own', 0, 'Sending someone else\'s work as yours can lose you the job when you are asked to repeat it. Ask for help to learn, then do the task yourself.'),
      o('Read the task carefully, practise the steps you need on a free sample file, do the work on a copy, check the totals and send it with two lines on what you did', 100, 'Practising on a sample first and checking before you send shows care. The short note helps the company see how you work.'),
      o('Do the task straight away without testing, and send what you have', 33, 'A quick attempt may have errors you do not see. Check totals and cleaning before you send.'),
      o('Tell the company you are not ready and decline the task', 17, 'You may still manage it with a few hours of practice. If you truly cannot, tell them early and ask what a good attempt would look like.'),
    ]), stages: ['fresher'] },
    { ...sc('basics', 'Returning to work: your new workplace sends a link to a shared team folder and asks you to join a video meeting on a tool you have not used. What do you do?', [
      o('Join the meeting at the start time and work it out as you go', 33, 'You may lose the first minutes on settings. Join a few minutes early next time and test it the day before.'),
      o('Open the link and the meeting tool the day before, test your sound and camera, and ask a colleague for a ten minute walkthrough', 100, 'Practising ahead removes most of the stress. Asking for a short walkthrough is a normal thing to do in a new job.'),
      o('Ask a family member to attend on your behalf', 0, 'You need to learn the tool yourself, and a colleague may not accept a stand-in. Ask a family member to practise with you instead.'),
      o('Open the link a few minutes before the meeting and look around', 67, 'A short look is better than none. A trial call the day before leaves time to fix sound and camera.'),
    ]), stages: ['returning'] },
  ],

  phrases: {
    basics: [
      '"I keep one folder for each subject or project, and I name files with the topic and the month."',
      '"I back up my work to cloud storage every week."',
      '"I download software only from the official website."',
    ],
    docs: [
      '"I send documents as a PDF so the layout stays the same on every device."',
      '"I use heading styles, so I can change the look of the whole document in one step."',
      '"I keep each slide to one idea."',
    ],
    sheets: [
      '"I use formulas for totals so that they change when the numbers change."',
      '"I keep one header row and one topic per column."',
      '"I check the total a second way before I send the sheet."',
    ],
    online: [
      '"I will call the bank on the number printed on my card to check that message."',
      '"I use a different password for my email, and two-step verification is on."',
      '"I check who can open a file before I send the link."',
    ],
    data: [
      '"I worked on a copy and kept a note of every change."',
      '"The question was which product sold most, so I totalled by product."',
      '"The numbers came from [source] for [dates], and the parts add up to the total."',
    ],
  },

  stagePlan: {
    student: [
      'This week, make a folder for each subject and move every current assignment into it.',
      'Write your next assignment in a free word processor, using heading styles and page numbers, and save it as a PDF.',
      'Keep a sheet of your marks or spending going until the next exam, with formulas for totals and an average.',
      'Turn on two-step verification for your college email and keep one tidy assignment and one sheet as proof of your work.',
    ],
    fresher: [
      'Make a one-page CV that prints cleanly and saves as a PDF, and send a test copy to yourself.',
      'Build a job application tracker in a sheet and update it every morning.',
      'Practise a clean-and-total task on a public sample file, and write two lines on what you did.',
      'Before any offer, check the company on its own website and never pay a fee to get a job.',
    ],
    returning: [
      'Spend a week using one cloud drive and one video-call tool for real tasks, and write down the steps you forget.',
      'Rebuild your CV in a current format and write one honest line about your break.',
      'Rebuild a household budget or a records list in a sheet with formulas, working on a copy.',
      'Set up two-step verification, learn the three safe-payment rules and save the 1930 helpline in your phone.',
    ],
  },

  talk: {
    basics: {
      q: 'How comfortable are you with computers, and how do you organise your files?',
      a: 'Name the tools you use and describe your folder system in one line. Say how you back up your work, and mention one small problem you fixed yourself.',
      line: 'Computer skills: organised file system and weekly backup, used for [project or job], with installs and updates handled independently.',
    },
    docs: {
      q: 'Can you show me a document or a presentation you made?',
      a: 'Bring one tidy example, such as a one-page report or a three-slide deck. Say what it was for, which tools you used and what you would improve.',
      line: 'Prepared [report, letter or slides] in [tool] for [purpose], formatted with styles and shared as a PDF.',
    },
    sheets: {
      q: 'How comfortable are you with Excel or Google Sheets?',
      a: 'Be specific about what you do, such as formulas for totals and averages, sorting, filtering and a clean layout. Describe one real sheet you built and say what you have not used yet.',
      line: 'Built [sheet] in [Excel or Google Sheets] for [purpose] using SUM, AVERAGE, percentages, sorting and filters.',
    },
    online: {
      q: 'How do you stay safe online and handle sensitive information?',
      a: 'Mention two-step verification, unique passwords and checking a message through a second route before you act. Give one example of a message you checked.',
      line: 'Online safety: two-step verification, unique passwords and verification of unexpected requests before acting.',
    },
    data: {
      q: 'Tell me about a time you worked with data or numbers and what you found.',
      a: 'Describe the question, how you cleaned and totalled the data, and what the answer was. Say how you checked it, and keep the story to what you really did.',
      line: 'Cleaned and summarised [dataset] to answer [question], with a chart and a check that the totals matched the source.',
    },
  },

  talkTitles: {
    strong: 'How to talk about your strongest area with an example',
    weak: 'How to talk honestly about the area you are practising',
    intro: 'Interviewers and application forms ask about computer skills. Keep one true example for your strongest area and one honest line about the area you are practising.',
    mode: 'interview',
  },
};
