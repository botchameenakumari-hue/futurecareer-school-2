// Presentation Skills Assessment: a bundle for the shared self-rating test page.
// General guidance only: no statistics, norms, salary figures or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/presentation-skills-assessment/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'presentation-skills-assessment',
    slug: 'presentation-skills-assessment',
    pageUrl: BASE,
    breadcrumbName: 'Presentation Skills Assessment',
    metaTitle: 'Presentation Skills Assessment | Free Self-Test, 41 Questions',
    metaDescription:
      'Free presentation skills assessment: 41 questions on structure, slides, delivery, questions and nerves. About 10 minutes, no sign-up, with a 14-day plan.',
    h1Lead: 'Presentation Skills',
    h1Accent: 'Assessment',
    eyebrow: 'A speaking skills checklist for structure, slides, delivery, questions and nerves',
    heroSub:
      'This free presentation skills assessment shows which part of presenting to work on first: structure, slides, delivery, handling questions, or nerves and preparation. Often the gap is not confidence but a crowded slide or a talk with no clear main point. It works for class talks, interviews, team updates and client meetings.',
    stats: [
      { value: '41', label: 'questions' },
      { value: '10 min', label: 'about, no sign-up' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five presenting areas scored from your own ratings',
      'About 10 minutes, no sign-up',
      'Advice for where you present and a 14-day practice plan',
    ],
    reportTitle: 'Presentation Skills Report',
    reportFile: 'future-career-school-presentation-skills-report.pdf',
    reportKicker: 'PRESENTATION SKILLS REPORT',
    resultKicker: 'Your presentation skills result',
    scoreLabel: 'Overall presenting habits',
    bands: {
      high: 'A relative strength in your answers.',
      mid: 'Developing, with a clear next step.',
      low: 'The best place to start practising.',
    },
    domainsHeading: 'Five parts of presenting this assessment covers',
    domainsIntro:
      'A talk can go wrong in different places. One person has good ideas in no clear order, another has a clear order on unreadable slides, and another knows everything until the first question arrives. Your lowest area is the best place to start.',
    domains: [
      {
        key: 'structure',
        name: 'Structure and message',
        short: 'Knowing what you want people to take away, and building the talk around it',
        strong: 'You know your main message before you build anything, and your talk has an opening, a few points with examples and a clear ending.',
        weak: 'Your talk holds many good points but no single message, so people leave unsure what to remember or do.',
        plan: [
          'Before the next talk, finish this sentence on paper: "After this talk, I want people to understand or do ...". Build everything else around it.',
          'Cut the content down to three main points, each with one example, and move anything else to a backup slide.',
          'Write your opening and closing sentences in full and learn them, so the two moments people remember best are never improvised.',
        ],
      },
      {
        key: 'slides',
        name: 'Slides and visuals',
        short: 'Making slides that help people follow you instead of competing with you',
        strong: 'Your slides carry one idea each, are easy to read from a distance and leave the explaining to you.',
        weak: 'Your slides are crowded or read aloud word for word, so people read ahead and stop listening.',
        plan: [
          'Take your most crowded slide and reduce it to one heading and one picture, chart or number. Move the detail to your notes.',
          'Stand three metres from your screen and check that every slide can be read. Raise the text size or cut words until it can.',
          'Rehearse once with only the slide titles in front of you, so the slides become prompts and not a script.',
        ],
      },
      {
        key: 'delivery',
        name: 'Voice, body and pace',
        short: 'Speaking so that the whole room can follow and stay with you',
        strong: 'You speak at a pace people can follow, use pauses, look at the room and keep your movements steady.',
        weak: 'You hurry, fill gaps with "um" and "so", look at the screen or the floor, and tend to rush at the end.',
        plan: [
          'Record a two-minute practice on your phone and listen once for pace, filler words and pauses. Pick one thing to fix.',
          'Practise taking one breath and one pause after each key point. The silence feels long to you and sounds calm to others.',
          'Speak each sentence to one person at a time across the room instead of to the screen.',
        ],
      },
      {
        key: 'questions',
        name: 'Handling questions and the audience',
        short: 'Listening to the room, answering clearly and staying steady when challenged',
        strong: 'You listen to the whole question, check you understood it and admit calmly when you do not know.',
        weak: 'You answer before the question ends, get defensive when challenged or ignore signs that people are lost.',
        plan: [
          'Wait two beats after every question, then say it back in your own words before you answer.',
          'Prepare your three hardest likely questions and say the answers aloud, including one honest "I do not know yet, I will find out by Friday".',
          'Look up every few minutes to read faces. If people look puzzled, slow down and give an example.',
        ],
      },
      {
        key: 'prepare',
        name: 'Nerves and preparation',
        short: 'Practising in a way that works and keeping nerves manageable on the day',
        strong: 'You practise aloud, time yourself, know your opening by heart and have a way to settle before you start.',
        weak: 'You only read your slides silently, avoid chances to speak and let nerves decide how the talk goes.',
        plan: [
          'Practise the whole talk aloud and standing at least twice, once with a timer, before any important presentation.',
          'Learn your first two sentences by heart and try slow breathing before you begin: in for four counts, out for six.',
          'Take one small speaking chance each week, such as a one-minute update, so that speaking feels ordinary.',
        ],
      },
    ],
    questions: [
      { d: 'structure', text: 'I can state the main message of a talk in one sentence before I build any slides.' },
      { d: 'slides', text: 'I put one main idea on each slide and keep the words on it short.' },
      { d: 'delivery', text: 'I speak slowly enough that people at the back can follow every sentence.' },
      { d: 'questions', text: 'I listen to a whole question before I start to answer it.' },
      { d: 'prepare', text: 'Before an important talk, I practise by reading my slides silently, not by saying the words aloud.', reverse: true },
      { d: 'structure', text: 'My talks have a clear opening, a few main points and a closing that says what I want people to remember or do.' },
      { d: 'slides', text: 'I can explain a slide in my own words without reading it line by line.' },
      { d: 'delivery', text: 'I look at different people in the room instead of only at the screen, my notes or the floor.' },
      { d: 'questions', text: 'When I am not sure I heard or understood a question, I say it back before I answer.' },
      { d: 'prepare', text: 'I know my first two sentences so well that my opening does not depend on how nervous I feel.' },
      { d: 'structure', text: 'In the first minute I tell people what I will cover and why it matters to them.' },
      { d: 'slides', text: 'My slides stay readable from the back of the room, with large text, strong contrast and few colours.' },
      { d: 'delivery', text: 'I pause after a key point instead of filling the silence with "um", "so" or "basically".' },
      { d: 'questions', text: 'When I do not know an answer, I say so and promise to find out by a clear date.' },
      { d: 'prepare', text: 'I time my practice runs and know which part I would cut if I ran short of time.' },
      { d: 'structure', text: 'I keep adding extra points because I find it hard to leave anything out.', reverse: true },
      { d: 'slides', text: 'My slides contain full paragraphs, long tables or charts too small to read from the back of the room.', reverse: true },
      { d: 'delivery', text: 'I rush through the last slides when I see that my time is running out.', reverse: true },
      { d: 'questions', text: 'When someone challenges my point, I start arguing before I have understood their doubt.', reverse: true },
      { d: 'prepare', text: 'I turn down chances to present, or to speak in meetings, even when I have something useful to say.', reverse: true },
      { d: 'structure', text: 'I use an example, a number or a short true story to make each main point real.' },
      { d: 'slides', text: 'I open my slides on the device and screen I will really use before the talk begins.' },
      { d: 'delivery', text: 'I have watched a recording of myself presenting to check my hands, posture and movement.' },
      { d: 'questions', text: 'I watch the room while I speak and change my pace or explanation when people look lost.' },
      { d: 'prepare', text: 'I have a way to settle my nerves just before I begin, such as slow breathing, arriving early or a short walk.' },
    ],
    readingTitle: 'How to read your presentation skills result',
    readingSections: [
      {
        title: 'Presenting is five habits, not one talent',
        body: [
          'Each statement describes something you do: saying your main message in one sentence, cutting a slide down, pausing after a key point, repeating a question, practising aloud. Because these are habits, they can be trained. A low area means a habit you have not built yet, not a fixed weakness in you.',
          'The areas also affect each other. Crowded slides make delivery harder, and a talk with no clear message makes questions harder to answer. Start with the lowest area and check the others after a few weeks.',
        ],
      },
      {
        title: 'A short speaking skills checklist to use before any talk',
        body: [
          'Run these six checks the day before a talk. Can you say the main message in one sentence, and does each slide carry one idea that reads from the back of the room? Can you say your first two sentences without notes?',
          'The last three checks are about practice. Have you practised aloud with a timer, and do you know your three hardest likely questions and answers? Have you tested your slides on the real screen or call link?',
        ],
      },
      {
        title: 'Presenting and your career',
        body: [
          'Interviews, project reviews, client meetings and promotion discussions often include a moment where you explain your work aloud. Presenting well does not replace good work, and it does not promise a job or a raise.',
          'What it can do is make your work easier to notice, understand and trust. Someone who explains clearly can be asked to explain again, which gives more chances to be seen.',
        ],
      },
      {
        title: 'Check the result against real talks',
        body: [
          'Your answers show how you see yourself. After your next talk, ask one person who watched to tell you one thing that was clear and one thing that was hard to follow. Compare their answer with your lowest area.',
          'Retake the assessment after you have given two or three talks using your plan. A rise in your lowest area is a good sign, but what people tell you after a real talk is the better proof.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool. It shows how you describe your own habits and cannot see or hear you present.',
      'It is not a certificate, an official assessment or an examiner’s grade, and no school, employer or board recognises it as one.',
      'Your scores are not set against anyone else’s, so 55 or 85 is not a pass or a fail. Use them to compare your own five areas with each other.',
      'It does not predict marks, interview results, selection or pay. It points to where your presenting habits need attention.',
      'It is not a medical or mental health assessment. If fear of speaking in front of others is stopping you from daily life, talk to a doctor, a counsellor or someone you trust. In India you can also call Tele-MANAS on 14416, the free national mental health helpline run by the health ministry.',
    ],
    faqs: [
      {
        q: 'What does this presentation skills assessment measure?',
        a: 'It looks at five parts of presenting: structure and message, slides and visuals, voice and pace, handling questions and the audience, and nerves and preparation. You rate statements about what you actually do and choose between real situations. You get a score for each area and an overall score.',
      },
      {
        q: 'Is this a speaking skills assessment checklist I can use before a talk?',
        a: 'Partly. The test itself is a rating of your habits, and the guide below the test includes a short six-point checklist to run the day before a talk. Use the test to find your weak area and the checklist to check each talk.',
      },
      {
        q: 'Does this cover assessment of speaking and listening skills?',
        a: 'It covers the speaking and listening that happen when you present: how you explain, how you pace your voice, and how you listen to questions and read the room. It does not test everyday conversation, writing or feedback. For those, use the communication skills assessment on this site.',
      },
      {
        q: 'How is the score worked out?',
        a: 'You rate each statement from 1 (not true) to 5 (very true). Statements that describe a weak habit, such as reading slides silently, are turned around so that agreeing with them lowers the score. Each situation gives 0 to 100 points depending on the option you pick, an area score is the average of its answers, and your overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on a presentation skills test?',
        a: 'There is no pass mark. Your score is based only on your own answers and is not compared with anyone else. A lower area is simply where a small change will help you most, and you can retake the test later to see whether it moved.',
      },
      {
        q: 'How can I improve my presentation skills after the result?',
        a: 'Work on your lowest area first, with one habit at a time. For example, if slides are the weak spot, cut your busiest slide down to one idea. The 14-day routine in your report gives four steps for that area, and practising aloud with a timer helps in every area.',
      },
      {
        q: 'Is this a stage fright or public speaking anxiety test?',
        a: 'No. It has one area on nerves and preparation, but it only asks about habits such as practising aloud and having a way to settle before you start. It cannot measure your fear or diagnose anything, so if fear of speaking affects your daily life, speak to a counsellor or doctor.',
      },
      {
        q: 'Can students and freshers use it for viva, seminar or interview practice?',
        a: 'Yes. You choose your stage before the result, and the extra questions and advice change to match: group talks and viva for students, interviews and first team updates for freshers, and client and senior meetings for working professionals.',
      },
      {
        q: 'Is the presentation skills assessment free, and do I need to sign up?',
        a: 'Yes. It is free, needs no sign-up and takes about 10 minutes. You see your five scores straight away and can save the result as a PDF report.',
      },
      {
        q: 'How is this different from the communication skills assessment?',
        a: 'The communication skills assessment covers listening, speaking, writing, feedback and presenting in a broad way. This one is only about presenting and goes deeper into slides, structure, delivery, answering questions and preparation.',
      },
    ],
    related: [
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Five everyday communication areas, each with its own score, with presenting as one of them.',
      },
      {
        href: '/services/assessments/interview-readiness-self-assessment/',
        title: 'Interview Readiness Self-Assessment',
        description: 'Research, examples, answers, logistics and follow-up before an interview.',
      },
      {
        href: '/blog/skills/how-to-improve-presentation-skills-india/',
        title: 'How to Improve Presentation Skills',
        description: 'A practical guide for students and working people in India.',
      },
      {
        href: '/blog/skills/how-to-improve-public-speaking-skills-india/',
        title: 'How to Improve Public Speaking Skills',
        description: 'Ways to practise speaking in front of groups and feel steadier.',
      },
      {
        href: '/services/assessments/career-readiness-self-assessment/',
        title: 'Career Readiness Self-Assessment',
        description: 'A wider check of how ready you are for the next step in your career.',
      },
      {
        href: '/services/assessments/writing-skills-assessment-test/',
        title: 'Writing Skills Assessment Test',
        description: 'The written side of communication: clarity, accuracy, tone and work emails.',
      },
      {
        href: '/services/assessments/employability-skills-assessment-test/',
        title: 'Employability Skills Assessment Test',
        description: 'Work habits, teamwork and proof of work, which show in team updates and client meetings.',
      },
      {
        href: '/tools/portfolio-quality-checker/',
        title: 'Portfolio Quality Checker',
        description: 'Check that a project explains its context, process, results and limits, which is the story most talks need.',
      },
    ],
    breadcrumbDescription: 'Free presentation skills test with scores for structure, slides, delivery, questions and nerves, and a 14-day practice plan.',
    webAppDescription:
      'A free original 41-question presentation skills assessment covering structure and message, slides and visuals, voice and pace, handling questions and the audience, and nerves and preparation, with five scores, an overall score, stage-based advice, a 14-day routine and a downloadable report.',
    indexDescription:
      'Free presentation skills assessment: 41 questions, five scores for structure, slides, delivery, questions and nerves, plus a 14-day plan.',
    indexNote: 'Free, about 10 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Where will you be presenting first?',
    stageNote:
      'A class talk, an interview and a client meeting need different things from you, so your report adjusts the advice to the setting you choose.',
    stages: [
      {
        key: 'student',
        label: 'School, college or university student',
        description: 'Class talks, seminars, viva, group projects and campus events',
        title: 'Use class talks as free practice',
        body: 'Student life gives you many chances to present with low risk: seminars, viva, project reviews and club events. Treat each one as practice for the interviews and meetings that come later. Ask what the marks or the teacher will look at, and plan for that.',
        actions: [
          'Before your next seminar or viva, write the main message in one sentence and build only three points around it.',
          'In group talks, agree who speaks when, and practise the handovers aloud at least once together.',
          'Volunteer for one small speaking task each month, such as a two-minute update or a question in class.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher or job seeker',
        description: 'Interviews, internships, first-job updates and team meetings',
        title: 'Learn to speak briefly and clearly for people who are busy',
        body: 'In a first job or an interview, people have little time and decide quickly whether you are clear. Short, structured answers and updates work better than long, careful ones. The same habits help in a group discussion, an HR round and a first team meeting.',
        actions: [
          'Practise giving any update in three parts: the result, the reason and what you need or will do next.',
          'Before a work talk, ask how long you have, who will attend and what decision they need to make.',
          'Record one two-minute answer to "Tell me about yourself" and listen for pace, filler words and a clear ending.',
        ],
      },
      {
        key: 'professional',
        label: 'Working professional',
        description: 'Client meetings, team updates, senior reviews and pitches',
        title: 'Lead with the decision and prepare for the hard questions',
        body: 'At work, you present to people who are deciding something: whether to approve, buy, fund or trust. They want your recommendation first and your evidence second. Your biggest gains often come from preparing for questions, not from polishing slides.',
        actions: [
          'Open every important presentation with the recommendation or the decision you need, then give the reasons.',
          'List the three hardest questions you expect before each talk and say the answers aloud.',
          'Adjust the same content for each group, such as a client, a senior leader or your own team.',
        ],
      },
    ],
    tips: [
      'Before you open any slide software, finish this sentence on paper: "After this talk, I want people to ...". If you cannot finish it in one line, the talk is not ready for slides yet.',
      'Look at your busiest slide and ask what single thing it should make people understand. Keep that line, add one picture or number, and move the rest into your speaking notes.',
      'Record yourself on your phone for one minute and listen to it. Many people sound faster than they feel, so practise at a pace that feels slightly too slow.',
      'After a question ends, count two beats in your head before you speak. The gap stops you from answering only the first half and shows people that you listened.',
      'Reading slides silently feels like practice, but your mouth and breath have not rehearsed anything. Stand up and say the full talk aloud once today, even if it goes badly.',
      'Write three headings on one page: opening, main points and closing. Limit the main points to three, and end by saying what you want people to remember or do.',
      'Cover the text on a slide and explain it from memory. If you cannot, the slide holds too much, or you are not clear yet on what it should say.',
      'Pick three friendly faces in different parts of the room and speak one full sentence to each in turn. Look at the screen only to check, then turn back to people.',
      'Start with "So the question is ..." and say it in your own words. This gives you time to think, makes sure the whole room heard it and shows that you understood.',
      'Write your first two sentences and learn them by heart. Nerves are often strongest at the start, so a fixed opening gives you steady ground.',
      'Open with why the topic matters to the people in the room, then give a short map such as "I will cover three things". People relax when they know where the talk is going.',
      'Open your deck, stand three metres from the screen and read each slide. Anything you cannot read from there needs bigger text, more contrast or fewer words.',
      'Practise one silent breath after each key point. The pause feels long to you but sounds thoughtful to the people listening.',
      'Practise one calm line: "I do not know that yet. I will check and send you the answer by Friday." Then do exactly what you promised.',
      'Time one practice run with a phone timer and note where you should be at the halfway mark. Decide which section you would drop if you were short of time.',
      'Write each point on a sticky note, then keep only the three that serve your main message. Move the others to a backup slide for questions.',
      'Move paragraphs and big tables into a handout or an extra slide at the end. On the main slide, show one chart or number that people can take in within five seconds.',
      'Plan the ending first. Decide your last slide and last sentence, and put a time check in the middle of your notes so you know whether to speed up or cut.',
      'Treat a challenge as information. Say "Tell me more about that concern", listen to the end and answer only after you understand it.',
      'Choose one very small speaking task this week, such as a one-minute update to three people. Small and frequent attempts build comfort faster than rare big ones.',
      'For each main point, add one real example, one number or one short true story. If you cannot find one, the point may need more research or may not belong in the talk.',
      'Arrive early, or join the call early, and open your slides on the real screen. Check fonts, videos, links and the clicker, and keep a PDF copy on your phone or a pen drive.',
      'Stand with your feet apart and let your hands rest at your sides between gestures. Record a practice run to spot habits such as swaying, pacing or fidgeting.',
      'Every few minutes, look up and read faces. If people look puzzled or are checking phones, slow down, give an example or ask a quick question.',
      'Try slow breathing before you start: in for four counts and out for six, a few times. Arrive early and stand in the room for a minute so the space feels familiar.',
    ],
    tipsUp: [
      'Test your one sentence on a friend who has not heard the talk. Ask them to say back what it is about, and rewrite yours until the two sentences match.',
      'Give a friend ten seconds with each slide and ask what it said. If they cannot say it in one line, cut that slide down again.',
      'Mark a slash after each key sentence in your notes and practise pausing there. Ask a friend to sit at the far end of the room and raise a hand when they lose you.',
      'In your next discussion, jot the key words of each question before you answer. Afterwards check whether your answers matched what was really asked.',
      'Replace one silent read with a recorded run. Listen once, note the two places where you stumbled and practise only those sentences three times.',
      'Check that your closing answers your opening. Say the closing sentence aloud five times until you can deliver it without looking at notes.',
      'Practise once with the screen off, using only a printed list of slide titles. If you can carry the whole talk from the titles, your slides now support you instead of replacing you.',
      'Put photos or small objects around your room and finish each sentence while looking at one. At your next real talk, ask someone whether they felt looked at.',
      'Add a check such as "Did I get that right?" and wait for a nod before you answer. Use it for three questions and count how often you had misheard.',
      'Say your opening aloud ten times in different places, such as while walking or while cooking, until it comes out the same each time. Then say it once to a friend.',
      'Test your opening on someone who knows nothing about the topic. Ask whether they knew in the first minute why they should listen.',
      'Limit the whole deck to two fonts and three colours. Check it on a projector or on a friend’s phone held at arm’s length before the day.',
      'Record yourself and count the filler words in one minute. In the next recording, try to halve that number by pausing instead of filling the gap.',
      'Keep a note of questions you could not answer and send each answer within the time you promised. Over several talks, the list shows what to add to your preparation.',
      'Prepare two versions of the same talk, the full one and one a third shorter, and practise both. Then you can stay calm if your time slot is cut.',
      'Ask a friend which point they would remove from your talk. If they choose the one you were unsure about, take it out.',
      'Take one crowded slide and redo it as three simple slides, or as one picture with a short heading. Ask a friend which version is easier to follow.',
      'In practice, set a timer and make yourself finish on time at least twice. Mark which slides you can drop in the moment without losing the message.',
      'After your next talk, write down the toughest question and two possible calm answers. Say the better one aloud so it comes more easily next time.',
      'Add one new speaking chance every two weeks, such as a question in a meeting or a short talk to friends. Write down what happened each time and compare it with what you feared.',
      'Check that each example comes from your audience’s world and not only yours. Replace one general example with something your listeners have met themselves.',
      'Write a short checklist of what to test: slides, sound, clicker, charger and internet. Use the same list every time and add any problem that surprised you.',
      'Watch a recording with the sound off and note any movement that pulls attention away from you. Pick one habit to fix in the next practice and leave the rest.',
      'Add one question to your talk, such as "Who here has faced this?", and watch how the room responds. Use the response to decide whether to go deeper or move on.',
      'Try two or three calming habits over your next talks and keep only the ones that seem to help. Write one line after each talk about what steadied you.',
    ],
    strongTip: 'You already do this well in front of an audience. Note what makes it easy for you, then try the same move in your weaker areas.',
    domains: {
      structure: {
        why: 'A talk with one clear message is easier to prepare, easier to deliver and easier for people to remember. When structure is weak, even good content gets lost because the audience cannot tell what matters. An opening, three main points and a closing are enough shape for most talks.',
        roles: [
          'Class presentations, seminars, project reviews and viva rounds',
          'Interviews, group discussions and placement rounds that include a short talk',
          'Team updates, client pitches and any role where you explain a plan to someone who decides',
        ],
        routine: [
          'Days 1 to 3: Before each talk or update, write the main message in one sentence and share it with one person.',
          'Days 4 to 7: Cut one talk down to three points, each with one example, and move the rest to a backup slide.',
          'Days 8 to 11: Write the opening and closing sentences in full and say each one aloud five times.',
          'Days 12 to 14: Give the talk to a friend and ask them to say back the main message and the three points.',
        ],
        mistakes: [
          'Starting with the history of the topic when people want to know why it matters now',
          'Including every point because leaving something out feels like a risk',
          'Ending with "That is all" or "Thank you" and no closing message',
        ],
        proof: [
          'A one-sentence message and three-point outline for a talk you gave',
          'A friend or teacher saying back your main message correctly after a talk',
          'A shortened version of a talk that kept the main message and fitted the time',
        ],
        askOthers: 'After my talk, what was the one thing you remember, and what could I have left out?',
        talkingPoints: [
          'You build every talk around one main message',
          'You can cut a talk to fit the time without losing the point',
          'You open and close with intent, not by habit',
        ],
        midStep: 'Choose one point you were unsure about and remove it from your next talk. Notice whether anyone misses it.',
      },
      slides: {
        why: 'People can read faster than you can speak, so crowded slides pull attention away from you. Simple slides with one idea let people look, understand and go back to listening. Slides are there to support what you say, not to hold your script.',
        roles: [
          'College seminars, project reviews and final-year presentations',
          'Business, analyst, consulting, marketing and sales roles that use decks every week (Scalable with a business layer: consulting or an agency is the layer on top of the job)',
          'Teachers, trainers and anyone who shares ideas with slides on a screen or a call (Scalable with a business layer: a salaried post has one employer, so training or coaching of your own is the layer)',
        ],
        routine: [
          'Days 1 to 3: Reduce your busiest slide to one heading and one picture, chart or number.',
          'Days 4 to 7: Check readability from three metres away and fix any slide that fails.',
          'Days 8 to 11: Build a deck of five slides where each one makes a single point, then explain it without reading.',
          'Days 12 to 14: Show the deck to a friend for ten seconds per slide and note which ones they could not summarise.',
        ],
        mistakes: [
          'Pasting full paragraphs or tables so that people read ahead of you',
          'Using many colours, fonts and animations that distract from the message',
          'Opening the file for the first time on an unfamiliar device a few minutes before the talk',
        ],
        proof: [
          'A before and after of one slide, from crowded to one idea',
          'A short deck where each slide can be summarised in one line by someone else',
          'A checklist you used to test the screen, sound and files before a talk',
        ],
        askOthers: 'Which of my slides did you have to read instead of listen to, and which one helped most?',
        talkingPoints: [
          'You design slides to support what you say, not to replace it',
          'You can explain any slide in your own words',
          'You test the equipment and keep a backup copy',
        ],
        midStep: 'Pick one slide this week that has more than twenty words and cut it to six.',
      },
      delivery: {
        why: 'Even a good message can be lost if it is spoken too fast or to the floor. Pace, pauses, eye contact and steady movement help people stay with you. These are physical habits, and they improve with recording and repeated practice.',
        roles: [
          'Interviews, group discussions and viva rounds, where the way you speak is part of the answer',
          'Meetings, calls and presentations to clients or senior leaders',
          'Teaching, training and sales roles where your voice carries the work (Scalable with a business layer: you need proof of results and a way to find paying clients)',
        ],
        routine: [
          'Days 1 to 3: Record a two-minute practice each day and listen once for pace and filler words.',
          'Days 4 to 7: Add one breath and one pause after every key point and record again.',
          'Days 8 to 11: Practise speaking to three separate people in the room and finish each sentence before moving your eyes.',
          'Days 12 to 14: Present a short piece to two real listeners and ask what was easy and hard to follow.',
        ],
        mistakes: [
          'Speaking faster as nerves rise, so that the last part gets rushed',
          'Reading from the slide or looking at the floor',
          'Filling every gap with "um" or "so" instead of letting a short silence happen',
        ],
        proof: [
          'A recording of the same talk before and after you worked on pace and pauses',
          'A friend or teacher confirming they could follow every sentence',
          'A talk you finished on time, with the key message delivered unhurried',
        ],
        askOthers: 'When I speak, where do I go too fast, and where do I lose you or look away?',
        talkingPoints: [
          'You use pauses on purpose',
          'You look at the room, not at the screen',
          'You adjust your pace when the clock or the audience requires it',
        ],
        midStep: 'Pick the one sentence that matters most in your talk and say it slower than the rest, with a pause before and after.',
      },
      questions: {
        why: 'Questions show how well you understand your own topic, and how you behave under a little pressure. People often remember how you answered more than what you said in your slides. Listening to the question and the room is as important as speaking.',
        roles: [
          'Viva, seminar and project review rounds with questions from teachers or examiners',
          'Interview panels and client meetings where people test your thinking',
          'Managers, consultants and team leads who present to groups that push back (Scalable with a business layer: promotion is slow and crowded, so consulting or training is the layer)',
        ],
        routine: [
          'Days 1 to 3: Wait two beats after each question you hear in any conversation, and say it back before answering.',
          'Days 4 to 7: Write the three hardest questions for your next talk and say your answers aloud.',
          'Days 8 to 11: Practise "I do not know yet, I will find out by [day]" until it sounds calm, and use it once.',
          'Days 12 to 14: Ask a friend to challenge your points firmly for five minutes and notice when you get defensive.',
        ],
        mistakes: [
          'Answering the first half of a long question and missing the point',
          'Making up an answer because "I do not know" feels like failure',
          'Treating every challenge as an attack instead of a request for more information',
        ],
        proof: [
          'A list of hard questions you prepared and how you answered them in practice',
          'An example where you did not know and followed up with the answer on time',
          'A note from someone saying your answer to a tough question was clear and calm',
        ],
        askOthers: 'When you asked me a question, did I answer what you really asked, and how did I sound when I was unsure?',
        talkingPoints: [
          'You listen to the whole question and check you understood it',
          'You are honest when you do not know and follow up',
          'You read the room and adjust while you speak',
        ],
        midStep: 'Before your next talk, ask one friend to act as a sceptic and ask the question you fear most.',
      },
      prepare: {
        why: 'Nervousness is easier to handle when you have practised in the right way. Saying the talk aloud, timing it and knowing your opening gives your mind fewer things to worry about. Preparation will not remove nerves completely, but it gives them less to work on.',
        roles: [
          'Viva, interview, seminar and placement presentation rounds, where nerves show and preparation decides how you come across',
          'Roles where you present rarely, so each talk feels high-stakes',
          'Team reviews and project meetings where speaking up early matters',
        ],
        routine: [
          'Days 1 to 3: Say one full talk aloud, standing up, once a day, with a timer running.',
          'Days 4 to 7: Learn your first two sentences by heart and write the sentence you will say if you lose your place.',
          'Days 8 to 11: Try slow breathing and arriving early on two different days and note which helps more.',
          'Days 12 to 14: Take one real speaking chance, such as a short update or a question in a meeting, and write what actually happened.',
        ],
        mistakes: [
          'Reading silently and calling it practice',
          'Avoiding speaking chances, so that each one feels bigger than the last',
          'Memorising the talk word for word and getting lost after one slip',
        ],
        proof: [
          'A practice log with dates, timings and what you changed after each run',
          'A list of small speaking chances you took, with a note on each outcome',
          'A talk where you started well because you knew your opening',
        ],
        askOthers: 'Did I look prepared, and what could I do before a talk that would make me steadier?',
        talkingPoints: [
          'You practise aloud and time yourself',
          'You have a plan for the first minute and for losing your place',
          'You take small speaking chances regularly to build comfort',
        ],
        midStep: 'Book one real speaking slot in the next two weeks and put your practice sessions in the calendar before it.',
      },
    },
    thirtyDay: [
      'Week 1: Begin the routine for your lowest area, record one practice run on your phone and note one thing you will change.',
      'Week 2: Finish that routine, give one real talk or update, and ask one listener what was clear and what was hard to follow.',
      'Week 3: Turn to your second-lowest area, try two steps from its plan and keep the habit from week one going.',
      'Week 4: Retake the assessment, compare each area with your first result and prepare your next talk with the checklist from the guide above.',
    ],
  },

  extras: [
    // Student
    { ...x(['student'], 'structure', 'For class talks, I ask what the teacher or marking scheme will look at before I plan the content.', 'Ask your teacher what counts: content, slides, delivery, time or answers. Plan your effort to match, and write the time limit at the top of your notes.'), up: 'Write the marking points as a short list at the top of your plan and tick each one off during practice. After the talk, ask what scored well and what lost marks.' },
    { ...x(['student'], 'slides', 'In group presentations, I check that the whole deck uses the same fonts, colours and spelling before we present.', 'Pick one template and one person to merge all the slides at least a day before. Share the final file with the whole group and a PDF copy.'), up: 'Ask the person who merges the deck to send a checklist to everyone: font, size, colours, spelling and picture sources. Run through the merged deck together once, aloud.' },
    { ...x(['student'], 'delivery', 'In group presentations, I let the most confident person speak most of the time and stay silent myself.', 'Agree before the day that everyone speaks for about the same time. If your part is short, still say your name, your topic and one clear sentence.', true), up: 'Ask the group to practise handovers aloud, with each person saying one line to introduce the next. Time each part so that nobody has to be silent or carry the whole talk.' },
    { ...x(['student'], 'questions', 'In viva or seminar questions, I answer from what I really know and say so when I am guessing.', 'Prepare five likely questions from your own report or project and say your answers aloud. Practise one phrase for the edge of your knowledge: "I think it is ..., but I will check."'), up: 'Ask a friend or senior to ask you five questions about your own project that you did not expect. Note the ones that surprised you and prepare those answers in writing.' },
    { ...x(['student'], 'prepare', 'I use seminars, club events and class discussions to present often, not only when marks depend on it.', 'Say yes to one small speaking task this month, such as a two-minute update, a question in class or a short club announcement.'), up: 'Plan one speaking chance every fortnight and record a short note afterwards: what went well and what you will change. After a few chances, compare the first note with the latest.' },
    // Fresher
    { ...x(['fresher'], 'structure', 'In an interview or meeting, I give the answer or main point first and then the detail.', 'Practise answers in this order: the point in one sentence, then one reason, then one example. Stop when you have made the point.'), up: 'Record three common interview answers and check that the first sentence of each is the real answer. Cut any answer longer than two minutes down to its main point.' },
    { ...x(['fresher'], 'slides', 'For work presentations, I check whether the company has a template or style and use it.', 'Ask a colleague or your manager whether there is a standard template, logo or style for decks. Using it saves time and avoids a look that feels careless.'), up: 'Save one good deck from your team as a model and compare yours with it before you send it. Note down any change a senior makes to your slides and use it next time.' },
    { ...x(['fresher'], 'delivery', 'When a senior person is in the room, I speed up and read from the slide to get through it quickly.', 'Mark three pauses in your notes and take a slow breath at each one. Looking up and speaking slowly makes you look steadier than reading fast.', true), up: 'Practise once with a friend playing the senior and sitting at the front. Make eye contact with them at the end of each point, and note how your pace changes over time.' },
    { ...x(['fresher'], 'questions', 'When a manager asks a question I cannot answer, I say what I will check and when I will come back.', 'Say it in one sentence: "I am not sure. I will confirm by 3 pm and send you a message." Then send the message on time.'), up: 'Keep a small note of questions you owed an answer to and tick each when sent. Share the answer in writing so there is a record that you followed through.' },
    { ...x(['fresher'], 'prepare', 'Before a work update, I ask who will attend and how long I have, and practise once with a colleague.', 'Send one message beforehand: "How long do I have, who will be there, and what do they need from me?" Then practise your update once aloud.'), up: 'Ask a friendly colleague to listen to your update for two minutes and say the one thing they remember. If it is not your main point, change your opening.' },
    // Professional
    { ...x(['professional'], 'structure', 'I adjust the same content for different groups, such as a client, a senior leader or my own team.', 'Before each talk, write who will be in the room, what they already know and what decision they must make. Change the opening and the level of detail to match.'), up: 'Keep a short list of what each audience cares about, such as cost, risk, time or quality. Check your opening against it and cut any section that serves none of them.' },
    { ...x(['professional'], 'slides', 'I use a chart or visual only when it makes a decision easier, and not to fill the deck.', 'For each chart, write the conclusion as the slide heading, for example "Costs fell in three of four regions". If you cannot write the heading, the chart is not ready.'), up: 'Before sending a deck, remove any slide you could not defend if a senior asked "why is this here?". Keep those slides in an appendix in case they are needed.' },
    { ...x(['professional'], 'delivery', 'Before I present on a video call, I check my sound, camera height and lighting.', 'Join five minutes early, test your microphone and place the camera at eye level. Look at the lens for your main message, not only at faces on the screen.'), up: 'Record a short test call and watch it once for sound, lighting and where your eyes go. Put a sticky note beside the camera with your three main points.' },
    { ...x(['professional'], 'questions', 'When a senior person or client interrupts, I lose my place and cannot find my way back to the point.', 'Add a signpost to your notes at each section, such as "Next: cost". When interrupted, answer briefly, then say "Coming back to cost ..." to rejoin the thread.', true), up: 'Ask a colleague to interrupt you at three random points in a practice run. Practise your phrase for returning to the point until it comes out easily.' },
    { ...x(['professional'], 'prepare', 'Before every important presentation, I write down the three hardest questions I expect and practise my answers aloud.', 'Ask yourself: what would a sceptical person ask, what could go wrong and what is missing from the numbers? Write a short answer for each and say it aloud.'), up: 'Share your three hard questions with a colleague who knows the audience and ask what they would add. After the talk, add any question you did not expect to your list for next time.' },
  ],

  stageAdvice: {
    student: {
      structure: sa('In student talks, you often have a large topic and a short time, so everything feels important.', 'Write the one sentence you want your teacher or classmates to remember, and build three points around it.', 'Check the time limit and the marking points first, then cut anything that does not serve them.'),
      slides: sa('In student talks, it is easy to copy text from books or websites onto slides to show you studied.', 'Turn each copied paragraph into one short line and keep the full text in your notes.', 'Use one picture, chart or example per slide and credit your sources in small text.'),
      delivery: sa('In student talks, nerves, friends watching and a time limit can make you hurry or read from the screen.', 'Practise aloud with a timer and place a note in your slides telling you to pause.', 'Look at three different classmates in turn while you speak a full sentence to each.'),
      questions: sa('In student talks, questions from teachers or viva panels can feel like tests of whether you know everything.', 'Write the five questions you expect from your own project and practise answering them aloud.', 'It is fine to say "I am not sure, I will check", then check and tell your teacher.'),
      prepare: sa('For students, speaking chances come often in class, seminars and clubs, which makes it easy to build the habit early.', 'Say yes to one small speaking task each month, such as an update or a short announcement.', 'Practise aloud, standing, at least twice before any assessed talk, and time it once.'),
    },
    fresher: {
      structure: sa('For freshers, interviews, updates and group discussions all reward a short and clear point at the start.', 'Practise answers in this order: the point, one reason, one example, then stop.', 'Write your two-minute introduction and learn the first and last sentence by heart.'),
      slides: sa('For freshers, your first work decks may be edited by seniors, so the aim is clear and simple, not impressive.', 'Ask your manager for an example of a good deck in your team and follow its style.', 'Keep one message per slide and remove any detail the people reading the deck do not need.'),
      delivery: sa('For freshers, speaking to seniors can feel risky, and many people speed up or read straight from notes.', 'Mark two pauses in your notes and take one slow breath at each.', 'Practise your update once aloud to a friend and ask them to tell you where you sped up.'),
      questions: sa('For freshers, being asked something you cannot answer in a meeting or interview can feel like failing.', 'Practise saying "I do not know that yet, but I will find out and tell you by [time]" aloud.', 'Write down every question you could not answer, find the answer and send it on time.'),
      prepare: sa('For freshers, interviews and first updates have a lot of weight and little practice, so nerves run high.', 'Record yourself giving a two-minute introduction and listen for pace, pauses and a clear ending.', 'Arrive early, or join the call early, and test your setup so you start calm.'),
    },
    professional: {
      structure: sa('For working professionals, people listen with a decision in mind and are short of time.', 'Open with your recommendation, then give the two or three reasons that support it.', 'Change the opening and the level of detail for each audience, even when the slides stay the same.'),
      slides: sa('For working professionals, decks often grow with every review until they carry far more than people read.', 'Move supporting charts and tables to an appendix and keep only the slides that carry the argument.', 'Write each slide heading as a conclusion, so that the deck can be followed from headings alone.'),
      delivery: sa('For working professionals, back-to-back meetings leave little time to practise, so habits of pace and eye contact can drift.', 'Record one real meeting presentation and listen for pace, filler words and the length of your pauses.', 'For video calls, test the camera and microphone and look at the lens at key points.'),
      questions: sa('For working professionals, questions from seniors or clients test your thinking and your calm in the same moment.', 'List the three hardest questions before every presentation and say your answers aloud.', 'When interrupted, answer briefly and use a return phrase such as "Coming back to the main point ...".'),
      prepare: sa('For working professionals, important presentations are often rare, so you can feel out of practice when they arrive.', 'Take one small speaking chance each week, such as a clear update in a team meeting.', 'Rehearse a full and a shorter version of key talks in case your time is cut.'),
    },
  },

  scenarios: [
    sc('structure', 'You have ten minutes to present a project, and your notes hold twenty points. What do you do?', [
      o('Keep all twenty points and speak faster, because every point in your notes matters to someone in the room', 15, 'Speed makes a crowded talk harder to follow, not shorter. Pick the three points that matter most and practise those slowly.'),
      o('Cut from the end of the notes until the time fits, since the last points are usually the least important', 45, 'Cutting from the end can remove your conclusion. Choose what to keep by the main message, not by the order of your notes.'),
      o('Pick the three points that carry one main message and put the rest on a backup slide for questions', 100, 'You protect the message and the time together. Keep the backup slide ready, because people often ask about exactly the points you cut.'),
      o('Begin by saying you have a lot to cover, and give the background first so people see the full picture', 30, 'Starting with background and an apology uses up your best minutes. Open with the message and why it matters to this audience.'),
    ]),
    sc('structure', 'A senior person gives you only five minutes to present a plan. Which opening works best?', [
      o('Describe the history of the project first, so that the senior person has the full context before the plan arrives', 40, 'Background feels safe, but it spends your short time before the point. Give the recommendation first and keep history for questions.'),
      o('Start with a light joke to relax the room, then go through your slides in the order you made them', 30, 'A light moment is fine if it fits you, but a joke alone does not give a busy person what they need. Lead with the message.'),
      o('Read the agenda slide aloud and then follow it point by point, so nothing is left out of the five minutes', 55, 'An agenda helps a long talk, but in five minutes it takes time. A single sentence naming your recommendation does more.'),
      o('State your recommendation and the main reason first, then offer detail if they want it', 100, 'You respect their time and let them decide how deep to go. Practise this opening aloud until you can say it in twenty seconds.'),
    ]),
    sc('slides', 'You finish your draft and see that slide four holds a hundred and twenty words. What do you do?', [
      o('Make the text smaller so that everything still fits on the slide and nothing has to be removed', 10, 'Small text is unreadable from the back, and people will read it instead of listening. Cut words, not font size.'),
      o('Cut it to one main line and one picture or number, and keep the detail in your notes', 100, 'You turn the slide into a prompt for what you say. Do the same with any other slide above about thirty words.'),
      o('Keep the slide as it is and read it carefully aloud, so that no one in the room misses a word', 20, 'Reading aloud what people can already see is the most common reason talks feel dull. Explain the idea in your own words.'),
      o('Split it into two slides of about sixty words each, and explain both of them one after the other', 45, 'Splitting helps a little, but each slide still carries too much. Aim for one idea per slide and a short heading.'),
    ]),
    sc('slides', 'Five minutes before your talk, your slides will not open properly on the room computer. What do you do?', [
      o('Keep trying different cables and display settings until the slides appear, even if the start is delayed', 35, 'Some effort is fine, but a long delay costs more than the problem. Switch to your backup after a minute or two.'),
      o('Apologise to the group, then read the slides from your laptop screen while people crowd around it', 25, 'Repeated apologies and a small screen make the talk harder to follow. Speak to the room and let your message lead.'),
      o('Stay calm and open the backup PDF from your phone, pen drive or email, and speak from notes if that fails', 100, 'A backup copy and a calm plan keep the talk going. Always carry a PDF and know your main message without the slides.'),
      o('Ask the organiser to move your talk to another day, so that you can fix the problem properly', 15, 'You would lose your chance over a fixable problem. Having a backup lets you go ahead.'),
    ]),
    sc('delivery', 'Halfway through, you notice you have used most of your time and have four slides left. What do you do?', [
      o('Speed up and read all four slides quickly, so that you cover everything on your list before time ends', 15, 'Speed makes the ending unclear and often leaves the main message unsaid. Choose what matters and give it time.'),
      o('Jump to the slide with your main message, cover it clearly and offer the remaining slides afterwards', 100, 'You protect the message and finish on time. Plan in advance which slides you can drop without losing the point.'),
      o('Ask whether you can go over time, and carry on as planned if the answer is yes', 45, 'Asking is honest, but the answer may be no and you still lose the ending. Have a short ending ready to use.'),
      o('Stop where you are, tell the room that you ran out of time and thank them for listening', 30, 'Stopping without the main message leaves people unsure. Say your closing sentence before you stop.'),
    ]),
    sc('delivery', 'You will present in English, but you think in your own language, and you are afraid of losing the right word in front of the class. What helps most?', [
      o('Practise aloud in short English sentences, keep the key words on your notes, and say it in simpler words if a word does not come', 100, 'Short sentences are easier to say and to follow. A simple word said clearly is better than a hard word that stops you.'),
      o('Learn the whole talk word for word so that no word is left to chance', 45, 'Learning the opening by heart can help. But one lost word can freeze you if you only know the exact words, so practise the ideas as well.'),
      o('Use big words from a dictionary so that you sound more impressive', 30, 'Words you do not use every day are the first ones you lose. Plain words are easier for you to say and for the audience to follow.'),
      o('Say very little and let the slides do the talking for you', 20, 'Slides cannot explain themselves. Speak less if you must, but say one clear sentence on each slide in your own words.'),
    ]),
    sc('questions', 'Someone asks a long and unclear question. What do you do?', [
      o('Answer the part you understood and hope that it also covers the rest of what they asked', 45, 'You may be right, but the person can leave feeling unheard. A quick check costs ten seconds.'),
      o('Politely ask them to make the question shorter so that everyone can follow what is being asked', 25, 'This can sound like criticism. Say it back in your own words and let them correct you.'),
      o('Answer a different question that you prepared for, because you know that answer well and can give it with confidence', 15, 'Dodging a question usually shows and costs trust. Answer the real question, even if briefly.'),
      o('Listen to the end, say the question back in one line, check you understood it and then answer', 100, 'You show you listened and give the room a clear question to hear answered. Use this for any question you are unsure about.'),
    ]),
    sc('questions', 'A listener interrupts early in your talk with a question that your next three slides answer. What do you do?', [
      o('Give a one-line answer, say the next slides cover it, and ask them to raise it again after those', 100, 'The person feels heard and you keep your order. When you finish that section, check whether their doubt is answered.'),
      o('Skip ahead to the slides that answer it, and then come back to where you were', 35, 'The question gets answered, but you lose your order and the rest of the room. Answer briefly and return to your plan.'),
      o('Answer it fully now, even if it takes several minutes, because a question is a sign of interest', 55, 'Interest deserves a reply, but a long answer uses time meant for the rest of the talk and repeats your later slides. Answer briefly and point ahead.'),
      o('Say that all questions must wait until the end', 20, 'A flat refusal can feel cold, and the person may stop listening. Give a short answer and say when you will cover the rest.'),
    ]),
    sc('prepare', 'You have a talk in two days and feel your heart racing every time you think about it. What is the best use of your time?', [
      o('Read the slides silently many times until you feel completely sure of what is on each one', 35, 'Silent reading builds familiarity but not speech. Say the words aloud at least twice.'),
      o('Memorise the whole talk word for word, so that nothing is left to chance on the day', 45, 'A memorised script can fall apart after one slip. Learn the opening and the key points, and speak the rest naturally.'),
      o('Practise aloud twice, once with a timer, and write and learn your first two sentences', 100, 'Practice you can hear and time gives your nerves less to attach to. Add slow breathing on the day.'),
      o('Avoid thinking about the talk until the day itself, so that you do not make yourself more nervous', 15, 'Avoiding it often adds to the worry and leaves no time to prepare. Schedule short practice sessions instead.'),
    ]),
    sc('prepare', 'You are asked at short notice to say a few words in a meeting. What do you do?', [
      o('Say you are not ready and decline, then offer to speak at the next meeting instead', 20, 'Declining every time keeps the fear large. Even a short answer builds comfort.'),
      o('Say everything you know about the topic, so that nothing important is left out of your answer', 35, 'Long, unplanned answers lose people and bury your main point. Choose one point, add one example and stop.'),
      o('Start speaking with no plan and see where the first sentence takes you, trusting your instincts', 40, 'You may reach a point, but you are likely to wander. Ten seconds of planning helps a lot.'),
      o('Take ten seconds, choose one point and one example, say them in order and then stop', 100, 'A tiny structure makes short notice manageable. Practise this on small things so it comes naturally.'),
    ]),
    { ...sc('prepare', 'It is your first group presentation, and two group members have not finished their slides the night before. What do you do?', [
      o('Message the group now, agree who finishes what by when, and plan one timed practice run', 100, 'You turn worry into a plan with dates. A timed run together also fixes the handovers.'),
      o('Finish their slides yourself without telling anyone, so that the group is not delayed and nobody feels blamed', 40, 'You solve today’s problem but hide it, and the group learns nothing. Tell them and agree a fair split.'),
      o('Wait and hope it comes together on the day, since the group has always managed somehow before', 15, 'Hoping leaves no time to fix a problem once you find it. Agree a plan with dates the same night.'),
      o('Present only your own part and let the others take care of theirs, because you cannot control their work', 25, 'A broken handover shows in front of the audience. Check the whole flow together at least once.'),
    ]), stages: ['student'] },
    { ...sc('structure', 'Your manager asks you to present a first project update to the team tomorrow. What do you do first?', [
      o('Ask how long you have and what the team needs to decide or know, then build a short update around that', 100, 'You aim at what people need, which keeps the update short and useful. Write the main message before opening any slides.'),
      o('Copy a longer presentation from a senior and edit it, because a tested format is safer than a new one', 45, 'A model is useful, but a long deck copied for someone else may not suit your update. Start from the team’s need.'),
      o('Prepare every detail of the project in case anyone asks, and decide in the room what to include', 50, 'Preparation helps with questions, but put the detail in a backup, not in the talk. Lead with the message.'),
      o('Ask a colleague to present it for you, and sit in to answer any questions about the work', 15, 'You lose a visible chance to show your work. Ask for help preparing, not for someone to speak for you.'),
    ]), stages: ['fresher'] },
    { ...sc('questions', 'You are presenting to senior leaders, and one of them keeps asking questions that take you away from your main point. What do you do?', [
      o('Follow each question fully until your time runs out, since a senior person’s question deserves a full answer', 40, 'You show respect, but your main message may never be heard. Offer to return to it later.'),
      o('Answer briefly, offer to cover more at the end, and bring the group back to your main point', 100, 'You respect the question and protect the talk. Keep a phrase ready such as "Let me come back to that after the next point".'),
      o('Tell them firmly to hold their questions until the end, so that you can finish your recommendation first', 15, 'This can sound defensive with a senior audience. Invite them to come back to it, which is more respectful.'),
      o('Skip your remaining slides and end the talk early, so that the questions can take over the meeting', 25, 'You lose the chance to deliver your recommendation. Move to your main message and close with it.'),
    ]), stages: ['professional'] },
  ],

  phrases: {
    structure: [
      '"By the end of this talk, I want you to be able to ..."',
      '"I will cover three things: first ..., second ..., third ..."',
      '"If you remember one thing from today, let it be this."',
    ],
    slides: [
      '"This slide shows one thing: ..."',
      '"The number to notice here is ..."',
      '"I have put the detail in the appendix, and I am happy to go through it."',
    ],
    delivery: [
      '"Let me pause there for a moment."',
      '"The most important point is this one."',
      '"I will take a breath, and then move to the next part."',
    ],
    questions: [
      '"So the question is ..., have I understood that correctly?"',
      '"I do not know that yet. I will find out and reply by [day]."',
      '"That is a fair challenge. Let me explain how I got to this."',
    ],
    prepare: [
      '"I am going to start with the question this talk answers."',
      '"I will stop here, and move to the part that matters most."',
      '"Let me take a moment and continue."',
    ],
  },

  stagePlan: {
    student: [
      'Write the main message of your next class talk in one sentence and build three points around it. Done when you can say the sentence aloud without looking at it.',
      'Ask your teacher what the marking will look at, then turn each crowded slide into one idea. Done when your teacher has told you what the marking looks at and no slide holds more than one idea.',
      'Practise aloud and standing, once with a timer, and prepare answers to five likely questions. Done when you have timed one run and written your answers to five questions.',
      'After the talk, ask one classmate for one clear thing and one hard-to-follow thing, and note both. Done when you have written down one clear thing and one hard-to-follow thing.',
    ],
    fresher: [
      'Practise a two-minute introduction in three parts: who you are, what you did and what you want next. Done when you can say it in two minutes, timed on your phone.',
      'Before any work update, ask how long you have and what decision or information people need. Done when you know your time limit and what people need to decide or know.',
      'Record one practice and listen for pace, filler words and whether the first sentence is the real point. Done when you have listened once and written down your filler words.',
      'Take one small speaking chance each week, such as a clear update or a question in a team meeting. Done when you have ticked off four weeks in a row.',
    ],
    professional: [
      'Open your next important presentation with the decision you need or your recommendation. Done when your first line states the decision or recommendation.',
      'Write your three hardest questions and say your answers aloud, including one honest "I will find out". Done when you have said each answer aloud at least once.',
      'Cut your deck to the slides that carry the argument and move the rest to an appendix. Done when the appendix holds the rest and the main deck fits your time slot.',
      'Ask one colleague what they remembered afterwards and compare it with your intended message. Done when you have written their answer next to the message you meant.',
    ],
  },

  talk: {
    structure: {
      q: 'Tell me about a time you explained something complex to a group.',
      a: 'Name the audience, the one message you wanted them to take away, how you shaped the talk around it and how you knew it worked.',
      line: 'Presented [topic] to [audience] with a clear message of [message], and they [result].',
    },
    slides: {
      q: 'Tell me about a presentation or deck you made and what you changed to make it clearer.',
      a: 'Describe the first version, what you cut or simplified, and what people did differently after seeing the new one.',
      line: 'Simplified a [number]-slide deck for [audience] to one idea per slide, which led to [outcome].',
    },
    delivery: {
      q: 'How do you make sure people stay with you when you speak to a group?',
      a: 'Give two real habits, such as pacing, pauses or eye contact, and say how you practised them and what feedback you got.',
      line: 'Improved delivery by practising aloud with recording and received feedback that [feedback].',
    },
    questions: {
      q: 'Tell me about a time someone challenged you or asked a question you could not answer.',
      a: 'Describe the question, how you listened and checked it, what you said honestly, and how you followed up.',
      line: 'Handled a challenging question about [topic] by [action] and followed up with [result].',
    },
    prepare: {
      q: 'How do you prepare for an important talk, and how do you handle nerves?',
      a: 'Describe your actual routine: practising aloud, timing, learning your opening and one way to settle before you begin. Be honest that nerves are normal.',
      line: 'Prepare by practising aloud with a timer and a fixed opening, and presented [topic] to [audience].',
    },
  },

  talkTitles: {
    strong: 'Showing your strongest presenting habit in an interview or on your CV',
    weak: 'If you are asked about your lowest presenting area',
    intro: 'Interviewers believe real examples. Prepare one true story each for your strongest and your lowest area, covering what you did and what happened next.',
    mode: 'interview',
  },
};
