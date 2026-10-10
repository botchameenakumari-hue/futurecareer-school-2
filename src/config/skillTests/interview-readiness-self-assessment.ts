// Interview Readiness Self-Assessment: a complete self-rating test bundle.
// General guidance only. No statistics, norms, pass marks or selection claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

export const bundle: SkillTestBundle = {
  test: {
    id: 'interview-readiness-self-assessment',
    slug: 'interview-readiness-self-assessment',
    pageUrl: '/services/assessments/interview-readiness-self-assessment/',
    breadcrumbName: 'Interview Readiness Self-Assessment',
    metaTitle: 'Interview Readiness Test | Am I Ready for an Interview?',
    metaDescription:
      'Free interview readiness self-assessment: 40 questions and five scores for research, examples, answers, logistics and follow-up. Instant result, no sign-up.',
    h1Lead: 'Interview Readiness',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Campus, fresher, experienced and government interviews in one report',
    heroSub:
      'Most people prepare for an interview by reading a list of common questions. That covers only one part. This free self-assessment checks five areas, knowing the role and company, having real examples ready, answering clearly and calmly, documents and online set-up, and your questions and follow-up, then shows which one to fix first before your next interview.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'readiness areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five interview readiness areas from your own ratings',
      'About 7 minutes',
      'What to fix first, with a 14-day practice routine',
    ],
    reportTitle: 'Interview Readiness Report',
    reportFile: 'future-career-school-interview-readiness-report.pdf',
    reportKicker: 'INTERVIEW READINESS REPORT',
    resultKicker: 'Your interview readiness result',
    scoreLabel: 'Overall interview readiness',
    bands: {
      high: 'Ready in this area.',
      mid: 'Partly ready, with gaps to close.',
      low: 'Prepare this area first.',
    },
    domainsHeading: 'Five interview readiness areas this self-assessment covers',
    domainsIntro:
      'Interviews go wrong in more places than the answers themselves. These five areas cover what happens before, during and after the conversation, in the form of habits you can rate honestly.',
    domains: [
      {
        key: 'research',
        name: 'Knowing the role and company',
        short: 'Understanding what the job and the process involve',
        strong: 'You know what the role involves, what the company does and what the rounds will look like, so your answers fit the job.',
        weak: 'You apply with one general version of yourself, and you are not sure what the role, the company or the interview format will ask of you.',
        plan: [
          'For your next interview, read the job description twice and underline the five skills or duties that appear most often.',
          'Spend 30 minutes on the company website and its social pages, and write three lines on what it sells, to whom, and where you would fit.',
          'Ask the recruiter, a senior or a current employee how many rounds there will be and what each round tests.',
        ],
      },
      {
        key: 'stories',
        name: 'Having real examples ready',
        short: 'Proof from your own studies, projects or work',
        strong: 'You can answer "tell me about a time" questions with short, true examples that show what you personally did.',
        weak: 'Your mind goes blank when asked for an example, or your answers stay general and say what a good employee should do instead of what you did.',
        plan: [
          'Write four real examples from projects, studies, internships, jobs or activities, each in four lines: situation, your task, your action, the result.',
          'Say each example aloud once and time it. Cut it to about two minutes.',
          'Match each example to two common questions, such as teamwork, a mistake, pressure or leadership.',
        ],
      },
      {
        key: 'answers',
        name: 'Answering clearly and calmly',
        short: 'Speaking in a clear order, even when nervous',
        strong: 'You give answers with a clear start and end, pause to think when needed and stay honest when you do not know.',
        weak: 'Your answers wander, you rush when nervous, or you freeze on questions you did not expect.',
        plan: [
          'Prepare a one-minute introduction in three parts: who you are, what you have done, what you want next. Say it aloud five times.',
          'Record yourself answering three common questions on your phone and listen once for fillers and long pauses.',
          'Practise one rule: take a three-second pause before every answer, and end by stopping, not trailing off.',
        ],
      },
      {
        key: 'basics',
        name: 'Documents, logistics and online set-up',
        short: 'Having everything ready so nothing distracts you',
        strong: 'Your resume, documents, travel plan and online set-up are ready, so you arrive or log in calm and on time.',
        weak: 'Documents are scattered, you plan travel or login at the last minute, or your resume says things you cannot explain.',
        plan: [
          'Make one folder, on paper and on your phone, with resume, ID proof, mark sheets, certificates, photographs and any offer or experience letters.',
          'The day before, plan your route and reach time, or test your camera, microphone, internet and background for an online round.',
          'Read your resume line by line and write one sentence of explanation for each project, skill and date.',
        ],
      },
      {
        key: 'followup',
        name: 'Your questions and follow-up',
        short: 'Closing the interview well and learning from it',
        strong: 'You ask thoughtful questions, handle pay and next-step talk calmly and learn from each interview afterwards.',
        weak: 'You say "no questions" at the end, avoid pay or next-step talk, or move on without learning what to improve.',
        plan: [
          'Write three questions to ask an interviewer, such as what the first three months look like, how success is measured and who you would work with.',
          'Decide in advance how you will answer a question on pay expectations, without being rushed into a number.',
          'Right after each interview, write down every question you were asked, how you answered and one thing to change.',
        ],
      },
    ],
    questions: [
      { d: 'research', text: 'I can explain in my own words what the role I am applying for involves on a normal working day.' },
      { d: 'stories', text: 'I have three or four real examples from studies, projects or work that I can tell in about two minutes each.' },
      { d: 'answers', text: 'I can introduce myself in about a minute, in a clear order.' },
      { d: 'basics', text: 'I can explain every line on my resume, including projects, skills and any gaps.' },
      { d: 'followup', text: 'I prepare two or three questions of my own to ask the interviewer.' },
      { d: 'research', text: 'Before each interview I read about the company\'s products, customers or services.' },
      { d: 'stories', text: 'When I give an example, I say what I personally did, not only what the team did.' },
      { d: 'answers', text: 'I pause for a few seconds before a difficult question instead of rushing into an answer.' },
      { d: 'basics', text: 'I have reached an interview late, or in a rush, because I had not planned my travel or login time.', reverse: true },
      { d: 'followup', text: 'I have thought in advance about how I will answer if I am asked about my pay expectations.' },
      { d: 'research', text: 'I send a similar application everywhere without reading each job description closely.', reverse: true },
      { d: 'stories', text: 'When an interviewer asks for an example, my mind often goes blank.', reverse: true },
      { d: 'answers', text: 'If I do not know an answer, I say so honestly and explain how I would find out.' },
      { d: 'basics', text: 'I keep my resume, certificates, ID proof and photographs ready in one folder, on paper and on my phone.' },
      { d: 'followup', text: 'At the end of an interview I ask about the next steps and when to expect to hear back.' },
      { d: 'research', text: 'I can say why this particular role or company interests me, beyond salary and brand name.' },
      { d: 'stories', text: 'I can talk about a mistake or setback and say what I changed afterwards.' },
      { d: 'answers', text: 'My answers tend to wander, and I sometimes lose track of the question halfway.', reverse: true },
      { d: 'basics', text: 'For online interviews I test my camera, microphone, internet and background beforehand.' },
      { d: 'followup', text: 'Where it suits the situation, I send a short thank-you message after an interview.' },
      { d: 'research', text: 'I find out the interview format in advance, such as the number of rounds, a group discussion, a written test or a panel.' },
      { d: 'stories', text: 'I can match my examples to common questions on teamwork, pressure, conflict and leadership.' },
      { d: 'answers', text: 'I have practised answering aloud, with another person or by recording myself, not only in my head.' },
      { d: 'basics', text: 'My profile photo, email address and public profiles would look fine if an employer searched for me.' },
      { d: 'followup', text: 'After an interview I move on without writing down what was asked or what I could improve.', reverse: true },
    ],
    readingTitle: 'How to read your interview readiness result',
    readingSections: [
      {
        title: 'Readiness is made of habits, not confidence',
        body: [
          'Each statement describes something you do before, during or after an interview, such as writing down your examples or testing your camera. That makes readiness trainable. A lower score means a step you have not practised yet, not a lack of ability.',
        ],
      },
      {
        title: 'Why these five areas',
        body: [
          'An interview has three parts: what you do before it, what you say in it and what you do after it. Knowing the role and having examples ready are about the before. Answering clearly is about the during. Documents, set-up and follow-up cover the practical edges that people often skip.',
          'If you are a fresher, examples and clear answers usually need the most practice. If you are changing jobs, the reason for leaving and the pay conversation are where preparation is most often missing. For government and bank interviews, documents and awareness of the process carry extra weight.',
        ],
      },
      {
        title: 'Look at the lowest area, then the gap between areas',
        body: [
          'Your overall score is only a rough summary. The more useful reading is which area scored lowest, because one weak area can undo strength in the others. A person with good answers but no documents ready, or good documents but no examples, still walks in unprepared.',
        ],
      },
      {
        title: 'Turn scores into practice, not worry',
        body: [
          'Pick your lowest area and follow its 14-day routine. Retake the test after a mock interview with a friend, senior or teacher. If your score in the area moves, the practice is working. If it does not, look at the statements you rated lowest and fix those first.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own preparation. It does not replace a mock interview with someone who can listen to you.',
      'It is not an employer test and does not predict whether you will be shortlisted, selected or offered a job.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not mean you are ready for every interview, and a low score does not mean you are not.',
      'Every company, college and government board runs its own process. Check the official instructions for your interview, as they come first.',
    ],
    faqs: [
      {
        q: 'Is this interview readiness test free?',
        a: 'Yes. You can take it without paying and without signing up, see your result on screen and download the report as a PDF.',
      },
      {
        q: 'How do I know if I am ready for an interview?',
        a: 'Readiness has five parts: knowing the role and company, having real examples, answering clearly, having documents and set-up ready, and having questions and a follow-up plan. This test rates each part so you can see which ones are ready and which need work before your interview.',
      },
      {
        q: 'What is a good score on this test?',
        a: 'There is no pass mark. Scores are only against your own answers, not against other people. Use the area scores to decide what to practise first, and retake the test after a few weeks to see what changed.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can freshers and final-year students use this interview preparation checklist test?',
        a: 'Yes. You choose whether you are in campus placements, a fresher looking off campus, an experienced person switching jobs, or preparing for a government, bank or public-sector interview. The extra questions and advice change with your choice.',
      },
      {
        q: 'Is this an interview skills self-assessment?',
        a: 'It rates the skills and habits around an interview, including research, examples, answering, set-up and follow-up. It does not test your subject knowledge, aptitude or coding, so pair it with practice for the written or technical round you expect.',
      },
      {
        q: 'How is this different from the communication skills or soft skills assessments?',
        a: 'Those tests look at everyday communication and workplace behaviour. This one is only about the interview itself: what you prepare, how you answer and what you do afterwards. Taking the other two can show whether a weak answer comes from interview habits or from wider communication habits.',
      },
      {
        q: 'How often should I take it?',
        a: 'Take it once now, follow the 14-day routine for your lowest area, and retake it before your next interview or after a mock round. Your own earlier result is the only fair comparison.',
      },
    ],
    related: [
      {
        href: '/blog/interviews/interview-preparation-for-freshers-india/',
        title: 'Interview Preparation for Freshers in India',
        description: 'A step-by-step guide to preparing for your first interviews.',
      },
      {
        href: '/blog/resume/resume-tips-for-freshers-india/',
        title: 'Resume Tips for Freshers in India',
        description: 'How to write a resume you can explain line by line.',
      },
      {
        href: '/blog/job-search/campus-vs-off-campus-placement-india/',
        title: 'Campus vs Off-Campus Placement in India',
        description: 'How the two routes differ and how to prepare for each.',
      },
      {
        href: '/blog/linkedin-networking/linkedin-profile-tips-for-freshers-india/',
        title: 'LinkedIn Profile Tips for Freshers in India',
        description: 'Set up a profile that looks fine when an employer searches for you.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving.',
      },
      {
        href: '/services/assessments/placement-aptitude-test/',
        title: 'Placement Aptitude Test',
        description: 'Practise the aptitude round that many campus and off-campus drives use.',
      },
    ],
    breadcrumbDescription: 'Free interview readiness self-assessment with five area scores.',
    webAppDescription:
      'A free original 40-question interview readiness self-assessment covering knowing the role and company, having real examples ready, answering clearly and calmly, documents, logistics and online set-up, and your questions and follow-up, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Free 40-question interview readiness test with five scores and a 14-day practice plan.',
    indexNote: 'For campus, fresher, experienced and government interviews',
  },

  depth: {
    stageHeading: 'Which of these describes your next interview?',
    stageNote: 'A campus drive, an off-campus walk-in, a job switch and a government board are very different interviews, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'campus',
        label: 'Campus placement',
        description: 'Final-year student facing campus drives',
        title: 'Prepare for a drive with several rounds in one day',
        body: 'Campus drives often run an aptitude test, a group discussion, then technical and HR rounds, sometimes within a day. You cannot prepare once and hope. Prepare each round separately and keep your documents ready for the drive day.',
        actions: [
          'Ask your placement cell for the process of each company on your list and note the order of rounds.',
          'Practise one group discussion topic aloud each day with friends, taking turns to start and to summarise.',
          'Prepare separate answers for the HR round (why this company, strengths, weaknesses) and the technical round (your project and subjects).',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher, off campus',
        description: 'Graduate looking for a first job through portals, walk-ins or referrals',
        title: 'Build proof and a system, since nobody is arranging it for you',
        body: 'Off campus, you find the openings, apply, track and follow up yourself. Interviewers also know you have little work history, so examples from projects, internships and learning carry the conversation.',
        actions: [
          'Keep a simple sheet with company, role, date applied, round reached and follow-up date for every application.',
          'Choose three projects, a course or volunteering task and prepare each as a two-minute example.',
          'Before any walk-in or consultancy interview, check the company from its official website and do not pay anyone to get an interview or a job.',
        ],
      },
      {
        key: 'experienced',
        label: 'Experienced, switching jobs',
        description: 'Working professional moving to a new employer or role',
        title: 'Prepare your reason for leaving and your pay conversation',
        body: 'With experience, interviewers dig into your achievements, why you are leaving and what you expect. Rounds are usually fewer but deeper, with a technical or manager round followed by HR, where pay and notice period come up.',
        actions: [
          'Write a calm, honest reason for leaving that talks about what you are moving towards, not what you dislike.',
          'List your three strongest achievements in your current role with what you did and what changed.',
          'Read your offer and notice period terms before the HR round so you know what you can and cannot agree to.',
        ],
      },
      {
        key: 'government',
        label: 'Government, bank or public sector',
        description: 'Board interviews, personality tests and document verification',
        title: 'Prepare for a board, for general awareness and for verification',
        body: 'Government and bank interviews are often a panel or board with several members, questions about you, your state, your reasons for the post and current affairs, followed by strict document verification. Details matter more than polish.',
        actions: [
          'Read your own application form and be able to speak about every entry, including your education, hobbies, district and optional subjects if any.',
          'Read one reliable newspaper daily and make short notes on national, state and sector news linked to the post.',
          'Check every document against your form for name, date of birth and category details, and keep originals and attested copies together.',
        ],
      },
    ],
    tips: [
      'Open the job description and write, in three lines, what a normal day in this role looks like. If you cannot, find a person in a similar role on LinkedIn and ask two questions about their day.',
      'Write four examples this weekend in four lines each: situation, your task, your action, the result. Keep them in one note on your phone so you can reread them before every interview.',
      'Write a three-part introduction: who you are in one line, two things you have done, and what you want next. Say it aloud five times until it fits in a minute.',
      'Read your resume with a pen and write one sentence next to every project, skill and date. Remove or fix any line you cannot explain in a few sentences, and prepare a short, honest line for any gap.',
      'Write three questions before each interview, such as what the first three months look like, how success is measured and what the team is working on now. Put them on paper and carry it in.',
      'Spend 30 minutes on the company website, its About and Products pages, and recent news. Write down what it sells, to whom, and one fact you can mention naturally in the interview.',
      'Rewrite one example so every action starts with "I", for example "I wrote the test cases" instead of "we tested it". Keep "we" only for the result.',
      'Practise a three-second silent pause before answering. Count it in your head. Interviewers read a short pause as thought, and it stops you from starting an answer you cannot finish.',
      'Plan the day before: write the route and reach time with a buffer, or for an online round, the login time and a backup phone hotspot. Set two alarms and keep documents beside your bag.',
      'Decide your pay answer before the interview. Check the usual range for the role from job postings and people in the field, and prepare one line such as "I would like to understand the role fully first, and I am open to a fair offer for the role".',
      'For each application, copy five key skills from the job description and change your resume summary and first project to match them. Ten careful applications are better than fifty identical ones.',
      'Pick a project or activity and write what went wrong in it and what you did. Your mind blanks mostly when you have never searched your own history, so do that search now and note down what you find.',
      'Practise the line "I am not sure, but here is how I would find out" and use it in a mock interview. Honest reasoning is better than a confident guess.',
      'Make a folder on your phone and a plastic file on paper with resume copies, ID proof, mark sheets, certificates, passport-size photographs and any experience or offer letters. Check it the night before.',
      'Before leaving, ask "What are the next steps, and when can I expect to hear from you?" Write down the answer and the name of the person to contact.',
      'Write two sentences that begin "I want to work as a [role] at [company] because...". Use something specific, like a product, a type of client or the team\'s work, so the reason cannot be copied to any other company.',
      'Write one story about a mistake in three lines: what happened, what you changed, how you check it now. A short honest story with a fix is stronger than saying you have no weakness.',
      'After you answer, stop. Use a frame such as answer first, one reason, one example, then end. If you notice you are wandering, say "to sum up" and give one closing sentence.',
      'Test your camera, microphone and internet 30 minutes before the call. Sit facing a window or lamp, keep a plain wall behind you, and keep your phone on silent.',
      'Within a day, send a short message to the recruiter or interviewer thanking them and confirming your interest in two lines. Skip it only when the process or board instructions say not to contact anyone.',
      'Ask your recruiter, placement cell or a recent candidate how many rounds there are and what each tests. Write the list down and prepare for each round on its own.',
      'Make a grid with your four examples on one side and the themes teamwork, pressure, conflict and leadership on the other. Mark which example fits which theme so none of them catches you unprepared.',
      'Ask a friend or senior to ask you three questions while you stand up and answer aloud. Do this twice a week until the sentences come easily, since silent reading does not train speaking.',
      'Search your own name, check your email address sounds professional, and update your profile photo to a plain, clear one. Set social media accounts to private if you do not want them seen.',
      'Keep a notebook with three columns after every interview: questions asked, how I answered, what I will change. Review it before the next one.',
    ],
    strongTip: 'This is already a habit that works for interviews. Keep doing it and use it as one of your strengths.',
    domains: {
      research: {
        why: 'Interviewers can tell quickly whether you have chosen this job or just applied to any job. Knowing the role, the company and the process lets you give answers that fit and ask questions that show real interest.',
        roles: [
          'Campus drives, where several companies visit and each has its own process',
          'Off-campus applications, where the same resume is often sent to many jobs',
          'Job switches, where interviewers expect you to know why this role and this company',
        ],
        routine: [
          'Days 1 to 3: Pick one real job you want. Read the job description twice, underline the five most repeated skills or duties and write what a normal day would look like.',
          'Days 4 to 7: Read the company website and recent news for 30 minutes a day. Write what it sells, who buys it and two points you can mention in an interview.',
          'Days 8 to 11: Ask a senior, alumnus or employee about the interview rounds and what is tested. Write the round order and one preparation task for each round.',
          'Days 12 to 14: Write a two-sentence answer to "Why this role and why this company" and say it aloud to a friend. Ask whether it could be said about any other company.',
        ],
        mistakes: [
          'Sending the same resume and the same answers to every job',
          'Learning the company name and nothing about what it actually does',
          'Preparing only for the interview you imagine, not the round format the company really uses',
        ],
        proof: [
          'A short note on each target company, with what it does and why you fit',
          'A list of the rounds for each interview with your preparation against each',
          'A resume summary changed to match the job description',
        ],
        askOthers: 'Can you tell me what a normal day in this role looks like, and what the team is working on at the moment?',
        talkingPoints: [
          'You understand what the role needs and can link it to your work',
          'You chose this company for a specific reason, not only for the brand',
          'You came prepared for the format of the process',
        ],
        midStep: 'Write a half-page note for your next interview: three duties of the role, three facts about the company and one reason you want this job. Read it the night before.',
      },
      stories: {
        why: 'Interviewers cannot see your skills, so they listen to your examples. A short, true example that says what you did and what happened is the most reliable way to show teamwork, pressure handling or leadership, and it works whether you are a student or have years of experience.',
        roles: [
          'HR and behavioural rounds that ask "tell me about a time" in campus and off-campus interviews',
          'Technical rounds where you explain a project or a difficult problem you solved',
          'Experienced hiring, where achievements and decisions are probed in depth',
        ],
        routine: [
          'Days 1 to 3: List ten moments from studies, projects, internships, jobs, sports or activities. Pick the best four.',
          'Days 4 to 7: Write each of the four in four lines: situation, your task, your action, the result. Check that "I" appears in the action.',
          'Days 8 to 11: Say each example aloud and time it. Trim any example to about two minutes. Record one and listen for filler.',
          'Days 12 to 14: Ask a friend to pick random questions on teamwork, pressure, conflict, failure and leadership, and answer each with the best-fit example.',
        ],
        mistakes: [
          'Describing what the team did and never what you did',
          'Choosing examples with a happy ending only, and having nothing to say about a mistake',
          'Making up or stretching an example, which collapses when the interviewer asks one more question',
        ],
        proof: [
          'Four written examples that match your resume',
          'A project, certificate or work sample you can show or describe',
          'A line of feedback from a teacher, teammate or manager that supports one example',
        ],
        askOthers: 'When we worked together on that project, what do you remember me doing, and which part should I highlight in an interview?',
        talkingPoints: [
          'You can give short, true examples of your own action',
          'You can talk about a mistake and what you changed',
          'You can match one example to several kinds of question',
        ],
        midStep: 'Choose your best example and rewrite it until the first line sets the situation, the middle shows your action and the last line gives the result.',
      },
      answers: {
        why: 'A clear answer is easier to follow and easier to believe. Nerves make most people speed up, ramble or freeze, and these are habits that improve with spoken practice, not with reading.',
        roles: [
          'HR rounds, where the self-introduction and "tell me about yourself" set the tone',
          'Group discussions, where you must speak briefly and clearly in front of others',
          'Panel and board interviews, where several people ask questions one after another',
        ],
        routine: [
          'Days 1 to 3: Write a one-minute introduction in three parts and say it aloud five times a day until you can say it without reading.',
          'Days 4 to 7: Record yourself answering three common questions. Listen once, note fillers and long answers, and answer again in a clear order.',
          'Days 8 to 11: Practise the three-second pause and the phrase "I am not sure, but here is how I would find out" in a mock round with a friend.',
          'Days 12 to 14: Do a full 20-minute mock interview with a friend, senior or teacher, and ask for two things you did well and one to improve.',
        ],
        mistakes: [
          'Memorising a script word for word and sounding like you are reciting',
          'Starting to answer immediately and losing the point halfway',
          'Guessing confidently instead of admitting you do not know',
        ],
        proof: [
          'A recording of your introduction and one answer, kept for comparison',
          'A friend or senior\'s note after a mock interview',
          'A list of your five most likely questions with a one-line outline for each',
        ],
        askOthers: 'When I answered, was it clear what my main point was, and did I take too long to reach it?',
        talkingPoints: [
          'You answer in a clear order and stop at the end',
          'You stay honest when you do not know something',
          'You have practised speaking, not just reading answers',
        ],
        midStep: 'Practise answering in the order answer, reason, example for five common questions, then do one mock round and repeat the weakest answer.',
      },
      basics: {
        why: 'Late arrival, a missing certificate, a frozen video call or a resume line you cannot explain can undo good preparation. These are the easiest problems to remove because they need planning, not talent.',
        roles: [
          'Campus drives and walk-ins, where you may be asked to show documents on the same day',
          'Online interviews, where camera, sound and internet decide how you come across',
          'Government and bank processes, where document verification is strict and mismatches can cause trouble',
        ],
        routine: [
          'Days 1 to 3: Gather resume copies, ID proof, mark sheets, certificates, photographs and letters into one paper file and one phone folder.',
          'Days 4 to 7: Read your resume line by line, write a one-sentence explanation for each entry and fix any line you cannot defend.',
          'Days 8 to 11: Do a test video call with a friend. Check light, sound, internet, background and how you look on screen, and fix what you see.',
          'Days 12 to 14: Write a checklist for the day before and the day of an interview, with route, reach time, clothes, charger and documents, and use it for a mock day.',
        ],
        mistakes: [
          'Having documents in different places and searching for them on the day',
          'Putting skills or projects on a resume that you cannot explain',
          'Testing your online set-up only when the interviewer is already waiting',
        ],
        proof: [
          'A complete document folder that you can open in a minute',
          'A resume where every line has a prepared explanation',
          'A written checklist you have used before an interview',
        ],
        askOthers: 'If you looked at my resume and my online profile, is there anything that looks unclear, untidy or hard to believe?',
        talkingPoints: [
          'You arrive or log in on time and organised',
          'You can explain every line of your resume',
          'You have a professional online presence',
        ],
        midStep: 'Make the one-folder document set today and pick one person to look over your resume and ask you about three lines of it.',
      },
      followup: {
        why: 'The end of an interview and the days after it are part of the interview. Good questions show interest, a calm pay answer avoids being pushed, and a short follow-up with notes lets you improve before the next one.',
        roles: [
          'Experienced hiring, where the HR round covers pay, notice period and joining dates',
          'Off-campus applications, where nobody tells you what happens next unless you ask',
          'Campus and government processes, where result dates and offer rules are announced officially',
        ],
        routine: [
          'Days 1 to 3: Write ten questions you could ask an interviewer. Choose the three that suit your next interview and say them aloud.',
          'Days 4 to 7: Decide your pay answer and notice or joining answer. Write one calm sentence for each and practise saying it.',
          'Days 8 to 11: After a mock interview, write the questions asked, how you answered and what to change. Send a thank-you message to the person who helped.',
          'Days 12 to 14: Create a tracking sheet with company, date, round, contact and next follow-up date. Fill it for every application you have made.',
        ],
        mistakes: [
          'Saying "no questions" because you are tired or worried about asking the wrong thing',
          'Giving a pay number in panic before knowing the role or being asked',
          'Waiting silently for weeks without checking the next steps',
        ],
        proof: [
          'A list of three prepared questions with a reason for each',
          'A notebook of past interviews with what you changed',
          'A tracking sheet showing each application and follow-up',
        ],
        askOthers: 'In the interview, did my questions and my answer on expectations sound sensible and well prepared?',
        talkingPoints: [
          'You ask questions that show you understand the role',
          'You talk about pay and joining calmly and fairly',
          'You learn from each interview and follow up politely',
        ],
        midStep: 'Before your next interview, write three questions and your pay answer, and after it write down five lines on what happened.',
      },
    },
    thirtyDay: [
      'Week 1: Do the first half of your lowest-area routine, and make the document folder and a checklist for the day before an interview.',
      'Week 2: Finish the routine and do one mock interview with a friend, senior or teacher, asking for two strengths and one change.',
      'Week 3: Move to your second-lowest area, use two steps from its list and apply or register for at least one real interview or drive.',
      'Week 4: Retake the self-assessment, compare each area score, and write your interview notes with the questions asked and what you will improve.',
    ],
  },

  extras: [
    // Campus placement
    x(['campus'], 'research', 'I have checked what the aptitude or written round of each company on my list usually covers.', 'List the companies visiting your campus and ask your placement cell or seniors what each one tests in its written round. Practise those sections for 30 minutes a day, since the first round decides whether you reach the interview.'),
    x(['campus'], 'answers', 'I have practised group discussion topics aloud, including how to start, add a point and summarise.', 'With four friends, take one topic daily for 10 minutes. Practise one opening line, one point with an example, and a two-line summary. Speak with calm, not with volume.'),
    x(['campus'], 'basics', 'On drive days I end up rushed, looking for documents, formal clothes or the venue.', 'Pack the night before: resume copies, ID, mark sheets, photographs, formal clothes, a pen and water. Check the venue, reporting time and dress code in the college notice, and plan to arrive early.', true),
    x(['campus'], 'followup', 'I have read my college\'s placement rules on offers and on leaving a process midway.', 'Ask your placement cell for the written policy. Know how many offers you may hold and what is expected if you decide to leave a process, before you are in the middle of a drive.'),
    // Fresher off campus
    x(['fresher'], 'research', 'I change my resume summary and applications for each portal job or walk-in instead of sending one version everywhere.', 'For each opening, copy the five skills the posting repeats and edit your summary and top project to reflect them. Save each version with the company name so you can recall it before the interview.'),
    x(['fresher'], 'stories', 'I can describe something I did outside my syllabus, such as a project, internship, course practical or volunteering.', 'If you do not have one, begin a small project this week, such as a simple website, a data sheet analysis or helping a local business with their social page. In two weeks you will have a real example to describe.'),
    x(['fresher'], 'basics', 'I check that a walk-in or consultancy is genuine, and I never pay a fee to attend an interview or get a job.', 'Search the company\'s official website and contact details, ask for the offer in writing, and be careful with anyone who asks for money for an interview, training or a job. Tell a family member where you are going.'),
    x(['fresher'], 'followup', 'After applying, I wait for replies and rarely follow up.', 'Keep a sheet with the date applied. Seven days after, send one polite message to the recruiter or HR asking about the status, and then wait. Note down each reply so no lead gets lost.', true),
    // Experienced, switching
    x(['experienced'], 'stories', 'I can describe my last two or three achievements with what I did and what changed because of it.', 'For each major achievement, write one line on the problem, one on your action and one on the result, with a figure from your own records if you have one. Rehearse each in under two minutes.'),
    x(['experienced'], 'answers', 'When asked why I am leaving, I find it hard to answer without criticising my current employer.', 'Write the answer around what you want next: more responsibility, a new skill, a different kind of work. Say it in three sentences, keep the old employer out of it, and practise with a friend until it sounds calm.', true),
    x(['experienced'], 'basics', 'My experience letters, relieving letter and recent payslips are ready, and I can explain any gap or short stint.', 'Collect documents from each employer in one folder and request any missing letter now, since this can take weeks. Write a short, honest, forward-looking line for each gap or job under a year.'),
    x(['experienced'], 'followup', 'I know my notice period terms and what I can negotiate, and I have thought about how to discuss pay without being rushed.', 'Read your appointment letter for notice terms, and ask HR what flexibility exists. Prepare a line such as "I would like to understand the full role first, and I expect a fair offer for it", and speak to someone in your field about what the role typically pays.'),
    // Government, bank, public sector
    x(['government'], 'research', 'I know the stages of the process I am preparing for, such as the written exam, board interview or personality test, and document verification, and I follow the official notice.', 'Download the official notification and write the stages, dates and requirements on one page. Check the official website each week for changes, as notices set the rules and dates.'),
    x(['government'], 'answers', 'I can talk calmly about my education, my district or state, my hobbies and why I want this post, in the language the board allows.', 'Write ten facts about your district, state, education and hobbies, then speak them aloud. Prepare a short honest answer to why you chose this service, bank or department. If the board allows a choice of language, practise in the one you will use.'),
    x(['government'], 'basics', 'I have not rechecked that the name, date of birth and category details on my certificates match my application form.', 'Put every certificate beside your form and tick name spelling, date of birth, category and domicile details. If anything differs, ask the issuing office for a correction well before verification, since this can take time.', true),
    x(['government'], 'followup', 'I find results, merit lists and call letters only on the official website and avoid unofficial pages.', 'Bookmark the official site and check it at a fixed time each week. Treat any message that asks for money, or any unofficial page, with caution, and confirm important news from the official notice only.'),
  ],

  stageAdvice: {
    campus: {
      research: sa('On campus, each visiting company has its own pattern of rounds, and you may have only a day or two between notice and test.', 'As soon as a company is announced, ask your placement cell or a senior who joined last year what the rounds were and note them in order.', 'Prepare for the aptitude round in the first two days and the interview rounds in the next two, using the company\'s website for the HR round.'),
      stories: sa('On campus, your examples come from academics, a final-year project, internships, clubs and college events.', 'Prepare a two-minute explanation of your final-year project: problem, your part, tools, result and what you would change.', 'Choose one college event or club task that shows teamwork and one that shows handling pressure, and write them in four lines each.'),
      answers: sa('On campus, you may face a group discussion, a technical round and an HR round on the same day.', 'Practise a group discussion in a circle of friends, taking turns to open, add a point and summarise in two lines.', 'Prepare separate outlines for HR questions (strengths, weaknesses, relocation, why this company) and technical questions (project, core subjects).'),
      basics: sa('On campus, drive day means a reporting time, a dress code and a verification of documents at the venue.', 'Keep a file of resume copies, ID, mark sheets from every semester, photographs and your certificates ready a day before any drive.', 'Read the college and company notice for the reporting time and dress code, and plan your route to arrive early.'),
      followup: sa('On campus, offers, results and next rounds are announced through the placement cell.', 'Know your college\'s policy on multiple offers before the drive, and ask the cell how and when results will be shared.', 'After each round, write down the questions asked and tell your juniors or batchmates what you learned, so the whole group prepares better.'),
    },
    fresher: {
      research: sa('Off campus, you have to find openings and work out for yourself what a company and role really need.', 'For each job from a portal or referral, copy the repeated skills from the posting into your resume summary before you apply.', 'Read the company\'s website and ask the contact person how many rounds there are before a walk-in or call.'),
      stories: sa('Off campus, you have little or no work history, so your examples must come from projects, learning and activities.', 'Complete one small project or online course with something visible, such as a link, file or certificate, and prepare to explain it.', 'Prepare an honest answer on your time since graduation: what you learned, what you built and how you are searching.'),
      answers: sa('Off campus, interviews are often one-to-one or a small panel, and the first question is usually "tell me about yourself".', 'Practise your introduction with a friend until it takes about a minute and ends with the kind of role you want.', 'Prepare two honest answers to "why should we hire a fresher" and "what are your weaknesses", using a real example for each.'),
      basics: sa('Off campus, you manage your own documents, travel and online profiles, and some openings are not genuine.', 'Keep a profile on one or two portals and LinkedIn with a plain photo, the same details as your resume and a professional email address.', 'Verify the company, the address and the contact before a walk-in, and never pay a fee for an interview or a job.'),
      followup: sa('Off campus, nobody tells you what happens after an interview unless you ask.', 'Ask each interviewer for the next steps and the date by which you can expect an update, and note it in a sheet.', 'Follow up once, a week after the date given, with a short message, and then move on to the next application.'),
    },
    experienced: {
      research: sa('With experience, interviewers expect you to know exactly how the new role differs from your current one.', 'Compare the new role\'s scope, team size, reporting line and tools against your current role, and write what is new for you.', 'Speak to a current or former employee about the work culture and the team before you accept the interview.'),
      stories: sa('With experience, interviewers go deep into your achievements and ask how you made decisions.', 'Prepare three achievements with the problem, your decision, who you worked with and the result, and have the supporting detail ready.', 'Add one example of a failed project or conflict with a manager, and the lesson you applied afterwards.'),
      answers: sa('With experience, the manager round tests how you think, and the HR round tests why you are leaving.', 'Write and practise a three-sentence answer to "why are you leaving" that talks only about what you are moving towards.', 'Practise explaining your current work to a person outside your field in two minutes, free of company jargon.'),
      basics: sa('With experience, your documents include experience letters, payslips and a relieving letter, and background checks may follow.', 'Gather experience letters and payslips from each employer, and request any missing one now.', 'Check that your resume dates, titles and company names match those documents exactly.'),
      followup: sa('With experience, the HR round brings up pay, notice period and joining date.', 'Read your notice period terms and know what is negotiable before the HR round starts.', 'Do not give a pay figure early, and ask for the offer in writing before you resign from your present job.'),
    },
    government: {
      research: sa('For government and bank posts, the process, dates and rules come from the official notification and change between departments.', 'Read the official notification fully and list each stage, date and document required on one page.', 'Prepare the subject, department and post details, such as what the post does and which department or bank it belongs to.'),
      stories: sa('For government interviews, boards like examples of honesty, service and decision making from your life.', 'Prepare two true examples of helping others or taking a responsible decision, from college, family or community.', 'Link each example to a quality the post needs, such as public service, accuracy, fairness or handling pressure.'),
      answers: sa('Government boards ask about your background, your state, current affairs and your reasons for the post, sometimes in a mix of languages.', 'Practise answering questions on your education, district and hobbies aloud in the language you will use before the board.', 'Read the news daily and practise giving a two-sentence opinion on three current topics linked to the post, keeping it balanced.'),
      basics: sa('Government processes use strict document verification, and a small mismatch can cause delays.', 'Match the name, date of birth and category on every certificate against your application and fix differences early.', 'Carry originals, self-attested copies and passport-size photographs as the notice says, in the order listed.'),
      followup: sa('Government results and call letters come on official websites, and rumours spread easily.', 'Bookmark the official site and check it weekly, relying on nothing else for dates and results.', 'Note each stage\'s result date, and keep a short log of questions asked at each stage to improve your next attempt.'),
    },
  },

  scenarios: [
    sc('research', 'You have an interview tomorrow morning and only one evening to prepare. How do you use it?', [
      o('Read a list of common interview questions and memorise the model answers', 33, 'Common questions help a little, but memorised answers can sound hollow and do not tell you about this job. Spend part of the evening on the role and company as well.'),
      o('Go through the job description, read the company\'s website for 30 minutes, and then prepare answers to fit the role', 100, 'Strong. Knowing the role and company lets you give answers that fit, and the time is spent on what this interviewer cares about.'),
      o('Practise the introduction many times and go to sleep early', 67, 'A good introduction and good rest both help, but add 30 minutes on the role and the company so that your answers connect with the job.'),
      o('Search the company name, glance at the home page and rely on your general knowledge', 0, 'A glance at the home page rarely gives you anything specific to say. Read the job description and the company\'s products to prepare real points.'),
    ]),
    sc('research', 'The interviewer asks, "What do you know about our company?" and you have only skimmed the website. What do you do?', [
      o('Repeat the company tagline and say you admire the brand', 0, 'Generic praise shows you did not prepare. Prepare two or three facts about what the company does and who it serves.'),
      o('Say honestly what you did read, link it to the role, and ask a question to learn more', 100, 'Strong. Honesty plus a clear link to the role works, and a question shows you are curious. Prepare more thoroughly next time.'),
      o('Invent details so it sounds as though you have researched thoroughly', 0, 'Invented details are risky because follow-up questions expose them. Share the true facts you have and prepare more next time.'),
      o('Answer very briefly and quickly switch to talking about your own skills', 50, 'Moving to your skills helps, but a short answer about the company suggests low interest. Give two real facts first, then link them to your skills.'),
    ]),
    sc('stories', 'The interviewer asks, "Tell me about a time you handled a conflict," and you have no job experience. What do you do?', [
      o('Say you have never had a conflict because you get along with everyone', 17, 'This sounds unrealistic and ends the question. Use a real disagreement from a project, hostel, sport or club, and describe how you handled it.'),
      o('Describe a project disagreement: what the difference was, what you did to listen and agree, and what the result was', 100, 'Strong. A real example from college shows how you work with people, and experience is not needed for it.'),
      o('Talk about how you would handle a conflict in general terms', 50, 'Principles are fine, but interviewers want what you did. Add a real instance and say what you did and what happened.'),
      o('Say you would like to move to another question', 0, 'Skipping the question loses the chance to show your approach. Prepare a conflict example in advance so you are ready.'),
    ]),
    sc('stories', 'Your group project went well and the interviewer asks, "What exactly was your contribution?" How do you respond?', [
      o('Say that the whole team worked well together and everyone contributed equally', 33, 'This hides your part. Say what the team achieved in one line, then clearly describe the tasks you personally did.'),
      o('Say that you did most of the work and the others contributed little', 17, 'Overclaiming and blaming others can look bad and may not be true. Describe your tasks and acknowledge the team\'s part.'),
      o('Describe the project goal, name two tasks you did yourself, what the result was and how the team helped', 100, 'Strong. You are specific about your role and fair to the team, which is what interviewers want to hear.'),
      o('Say you do not remember the details because it was a long time ago', 0, 'Not remembering suggests the project did not mean much. Keep notes on your key projects so that you can recall the details when asked.'),
    ]),
    sc('answers', 'The interviewer asks a technical or general question and you honestly do not know the answer. What do you do?', [
      o('Make a confident guess so you do not look unprepared', 33, 'Guessing sometimes works, but a wrong confident answer damages trust. Say what you do know and then guess openly.'),
      o('Say you do not know, explain the nearest thing you know, and say how you would find the answer', 100, 'Strong. Honesty, related knowledge and a way of finding the answer shows your thinking, which matters more than a single answer.'),
      o('Stay silent for a long time hoping to recall it', 17, 'A long silence adds pressure. Tell the interviewer you need a moment, and if it does not come, say so and explain how you would approach it.'),
      o('Say "I don\'t know" and wait for the next question', 67, 'Honesty is right, but you can add what you do know or how you would find out. That turns a gap into a chance to show how you learn.'),
    ]),
    sc('answers', 'Halfway through an answer you realise you have lost your point. What do you do?', [
      o('Keep talking and hope you return to the point', 17, 'Continuing usually makes the answer longer and less clear. It is better to stop and reset.'),
      o('Stop, take a breath, say "let me put that more simply" and give the main point in one or two sentences', 100, 'Strong. A reset is normal and shows composure. Interviewers value a clear answer more than a flawless one.'),
      o('Apologise repeatedly and say you are very nervous', 33, 'One short acknowledgement is fine, but repeated apologies lower your confidence and distract. Reset calmly and give your point.'),
      o('Stop speaking and ask the interviewer to move to the next question', 50, 'Moving on is better than rambling, but try one reset first. Giving the main point shows you can recover.'),
    ]),
    sc('basics', 'Ten minutes before an online interview, your internet connection becomes unstable. What do you do?', [
      o('Wait and see if it improves by itself and join when the time comes', 0, 'Waiting leaves no time to fix it. Act immediately and tell the interviewer if you cannot join on time.'),
      o('Switch to your phone hotspot, then message the recruiter that you may log in a minute late if there is trouble', 100, 'Strong. A backup connection plus a short heads-up to the recruiter keeps you in control, which is why a backup should be planned the day before.'),
      o('Message the recruiter to postpone the interview without trying any fix', 33, 'Asking to reschedule is sometimes right, but try your backup first. Rescheduling at the last minute can reduce goodwill.'),
      o('Join the call from the weak connection and continue even if the video freezes', 67, 'Joining on time is good, but a frozen call hurts your answers. Try a hotspot, move closer to the router and offer to switch to audio only.'),
    ]),
    sc('basics', 'The interviewer points to a skill on your resume and asks you to explain it, but you only know it a little. What do you do?', [
      o('Describe what you really know, give one example of where you used it, and say what you are still learning', 100, 'Strong. Being specific and honest about your level builds trust. Update your resume afterwards to describe your level fairly.'),
      o('Claim that you know it well and change the topic quickly', 17, 'This is easily exposed with one more question. Describe your true level and what you are learning.'),
      o('Say it was a mistake and you should not have put it on the resume', 33, 'Admitting an error is honest, but it can look careless. It is better to describe your actual level and what you can do.'),
      o('Say you know it basically and give a long general explanation of the topic', 50, 'Showing you understand is good, but a general explanation without an example of use is not enough. Add one thing that you have actually done.'),
    ]),
    sc('followup', 'At the end the interviewer asks, "Do you have any questions for us?" What do you do?', [
      o('Say no because everything was covered', 17, 'No questions can seem to show low interest. Prepare two or three about the work, the team or what success looks like.'),
      o('Ask about leave policy, working hours and how soon you can get a raise', 33, 'These matter, but asking only about benefits first can give the wrong signal. Start with the role and the team, and ask the practical points later in the process.'),
      o('Ask what the first three months look like, how success is measured, and what the next steps are', 100, 'Strong. These show interest in doing the job well and give you useful information about the role and the process.'),
      o('Ask something about the company that is on the home page of its website', 50, 'A question is better than none, but an answer on the website shows you did not read it. Ask something that goes deeper than the website.'),
    ]),
    sc('followup', 'A week after the date the recruiter gave for an update, you have heard nothing. What do you do?', [
      o('Call repeatedly every day until someone answers', 17, 'Repeated calls can annoy the recruiter. Send one polite message and then wait a few days before trying again.'),
      o('Assume you were rejected and stop thinking about it', 33, 'Delays are common, and you may be missing a chance. Send a brief message asking for the status.'),
      o('Send one polite message to the person who interviewed you asking for the status, and keep applying elsewhere', 100, 'Strong. One courteous follow-up shows interest, and continuing to apply keeps your options open.'),
      o('Wait another month before doing anything', 50, 'Patience is useful, but a month can be too long to wait without asking. A message after a few days past the date is reasonable.'),
    ]),
    { ...sc('answers', 'In a campus group discussion, two people dominate and you have not spoken for five minutes. What do you do?', [
      o('Stay silent and hope the evaluator notices your listening', 17, 'Silence rarely gets noticed in a group discussion. Aim to make at least two clear points.'),
      o('Wait for a short gap, say "building on that..." add one point with an example, and later offer a two-line summary', 100, 'Strong. Building on others and adding a clear point shows you listen and contribute, and a summary shows structure.'),
      o('Speak loudly over the others to be heard', 33, 'Interrupting rudely can count against you. Use a pause and a phrase that links to the last speaker.'),
      o('Ask the evaluator to give everyone equal time', 0, 'This hands your problem to the evaluator. Enter the discussion yourself at a natural gap.'),
    ]), stages: ['campus'] },
    { ...sc('stories', 'You are a fresher with no work experience and the interviewer says, "What can you offer us?" What do you say?', [
      o('Say you are a quick learner and willing to work hard', 33, 'These claims are common and do not stand out. Back them with one example of learning something fast.'),
      o('Say you are open to any role and will do whatever is needed', 17, 'Flexibility is useful, but without a focus it sounds unprepared. Say what you can offer in this role.'),
      o('Name two skills from the job description, give one project where you used each, and say what you are building next', 100, 'Strong. Matching skills to the role with proof from projects answers the question directly.'),
      o('Say you do not have experience but you hope they will give you a chance', 0, 'This starts from a weakness and offers nothing. Talk about what you can already do, with examples.'),
    ]), stages: ['fresher'] },
    { ...sc('followup', 'In the HR round, the recruiter asks, "What are your salary expectations?" and you have not discussed pay before. What do you do?', [
      o('Name a high number to leave room for negotiation', 33, 'A number far from the usual range for the role can end the discussion. Base any figure on what you learned about the role.'),
      o('Say it is up to the company', 50, 'This avoids the question, but it gives you no say. Share a researched range or say you would like to understand the role and the offer.'),
      o('Say you have looked at the role and what it involves, and ask about the range planned for it before sharing yours', 100, 'Strong. You show you did your research and keep the discussion open. Support it with the facts about your skills and experience.'),
      o('Tell them your present pay and say you want a little more', 67, 'A hike on your present pay is common, but it can limit you if the role is worth more. Check the usual range for the role before you answer.'),
    ]), stages: ['experienced'] },
    { ...sc('basics', 'At document verification, the name on your degree certificate is spelt differently from your application form. What do you do?', [
      o('Hope nobody notices and hand over the documents', 0, 'Officials check names carefully, and a hidden mismatch looks worse than a declared one. Tell them upfront.'),
      o('Explain the difference politely, show an affidavit or other supporting ID if you have one, and follow the officer\'s instructions', 100, 'Strong. Calm honesty and supporting proof is the right approach. In future, fix such differences long before verification day.'),
      o('Argue that the spelling is a small issue and ask them to ignore it', 17, 'Verification rules are strict, and arguing rarely helps. Ask what proof they will accept and offer it.'),
      o('Leave and come back another day after correcting it', 50, 'Sometimes this is the only option, but ask the officer first what can be done on the day. Check documents early next time.'),
    ]), stages: ['government'] },
  ],

  phrases: {
    research: [
      '"From the job description, I understand that this role involves ... and I have worked on ..."',
      '"What interested me about your company is ... because ..."',
      '"Could you tell me how many rounds there will be and what each one covers?"',
    ],
    stories: [
      '"In my final-year project, my part was ... and the result was ..."',
      '"One mistake I made was ... and now I ... to avoid it."',
      '"Let me give a quick example of that. The situation was ..."',
    ],
    answers: [
      '"Let me think for a moment so that I give you a clear answer."',
      '"I am not certain about that, but here is how I would find out."',
      '"To sum up, the main point is ..."',
    ],
    basics: [
      '"I have my original documents and copies with me. Which would you like to see first?"',
      '"Could you please confirm the reporting time and the place for the interview?"',
      '"May I check that you can hear and see me clearly before we begin?"',
    ],
    followup: [
      '"What would the first three months in this role look like?"',
      '"What are the next steps, and when can I expect to hear from you?"',
      '"Thank you for your time. I enjoyed learning about ... and I remain very interested."',
    ],
  },

  stagePlan: {
    campus: [
      'Ask the placement cell for the rounds and the pattern of each company on your list, and note the order.',
      'Practise the aptitude section and group discussion for 30 minutes each day, with friends or seniors.',
      'Prepare separate answers for the HR round and the technical round, including a two-minute explanation of your final-year project.',
      'Pack the document file, check the reporting time and dress code the night before each drive, and note questions asked after it.',
    ],
    fresher: [
      'Write four project or learning examples in four lines each and keep a one-minute introduction ready.',
      'Create a tracking sheet and apply to a few well-matched jobs each week, adjusting your resume for each.',
      'Check each walk-in or consultancy through its official website, and never pay a fee for an interview or a job.',
      'Follow up once a week after the date given, then write what you learned after each interview.',
    ],
    experienced: [
      'Write a calm reason for leaving and three achievements with the problem, your action and the result.',
      'Collect experience letters, payslips and the relieving letter, and prepare a short line for any gap or short stint.',
      'Read your notice period terms and decide your pay and joining answers before the HR round.',
      'Ask for the offer in writing and compare it with your current role before you resign.',
    ],
    government: [
      'Read the official notification and write the stages, dates and documents on one page.',
      'Read a newspaper daily and prepare facts about your state, district, education and the post.',
      'Check every certificate against your application form for name, date of birth and category details, and fix differences early.',
      'Practise with a mock board of three people, and check results and call letters on the official website only.',
    ],
  },

  talk: {
    research: {
      q: 'Why do you want to join this company and this role?',
      a: 'Name one specific thing about the company, such as a product, a type of client or its work, link it to a skill or interest from your own experience, and say what you hope to learn or contribute in the role.',
      line: 'Applied for [role] at [company] after studying [product or work], because it matches my experience in [skill or project].',
    },
    stories: {
      q: 'Tell me about a time you worked in a team and faced a problem.',
      a: 'Set the situation in one sentence, explain your own task, describe the action you took and the result, and finish with what you learned. Use "I" for your part and "we" for the result.',
      line: 'Led [task] in a team of [number], resolved [problem] by [action], and delivered [result].',
    },
    answers: {
      q: 'Tell me about yourself.',
      a: 'Speak in a clear order for about a minute: who you are now, two things you have done that fit this role, and what you want to do next. Stop after the last point and let the interviewer respond.',
      line: '[Degree or role] with experience in [skill], having completed [project or achievement], looking for a [role] to work on [area].',
    },
    basics: {
      q: 'Can you walk me through your resume?',
      a: 'Go in order, from the most recent item. For each project or job, say what it was, your part, and one result. Mention any gap briefly and honestly, with what you did in that time.',
      line: 'Resume checked line by line, with [number] projects and [certificates] explained and documents ready in one folder.',
    },
    followup: {
      q: 'Do you have any questions for us, and what are your expectations from this role?',
      a: 'Ask about the first months, how success is measured and the team. For expectations, say you want to understand the role fully, share a researched range if pressed, and ask about learning and growth along with pay.',
      line: 'Prepared [number] questions per interview, followed up within [time] and kept notes on [number] interviews to improve.',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Interviews are judged by examples. Prepare one true answer for each area, with what you did and what happened as a result.',
    mode: 'interview',
  },
};
