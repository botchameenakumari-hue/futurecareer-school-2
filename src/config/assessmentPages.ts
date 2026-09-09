export type AssessmentTargetId =
  | 'class10'
  | 'class1112'
  | 'graduates'
  | 'placement'
  | 'numerical'
  | 'verbal'
  | 'personality'
  | 'big5'
  | 'professionals'
  | 'stream10'
  | 'aptitude10'
  | 'stream12'
  | 'aptitude12';

export type AssessmentGuidanceMode =
  | 'student'
  | 'after12th'
  | 'graduate'
  | 'professional'
  | 'mixed';

export type AssessmentPage = {
  slug: string;
  hubGroup: 'career' | 'skill';
  hubTitle: string;
  hubDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  pill: string;
  heroSub: string;
  target: AssessmentTargetId;
  relatedTargets?: AssessmentTargetId[];
  relatedPhrases: string[];
  coveredPhrases?: string[];
  fitTitle: string;
  fitSubtitle: string;
  fitItems: { title: string; body: string }[];
  decideTitle: string;
  decideSubtitle: string;
  decideItems: { title: string; body: string }[];
  bestFitTitle: string;
  bestFitBody: string;
  faqItems: { question: string; answer: string }[];
};

export const ASSESSMENT_TARGETS = {
  class10: {
    href: '/services/assessments/class-10-and-below/',
    title: 'Class 10 and Below Assessment',
    label: 'Take Free Class 10 and Below Assessment',
    guidanceMode: 'student' as AssessmentGuidanceMode,
    summary:
      'Best if you are dealing with stream pressure, interest-fit questions, and early psychometric clarity before Class 11 choices harden.',
  },
  class1112: {
    href: '/services/assessments/class-11-to-12/',
    title: 'Class 11 and 12 Assessment',
    label: 'Take Free Class 11 and 12 Assessment',
    guidanceMode: 'student' as AssessmentGuidanceMode,
    summary:
      'Best if you need student career direction, degree-fit clarity, aptitude signals, and stronger after-school decisions.',
  },
  graduates: {
    href: '/services/assessments/graduates-and-early-professionals/',
    title: 'Graduates and Early Professionals Assessment',
    label: 'Take Free Graduate and Early Professional Assessment',
    guidanceMode: 'graduate' as AssessmentGuidanceMode,
    summary:
      'Best if you need career-fit, role direction, employability, job readiness, or skill assessment beyond school-stage decisions.',
  },
  placement: {
    href: '/services/assessments/placement-aptitude-test/',
    title: 'Placement Aptitude Test',
    label: 'Take Free Placement Aptitude Test',
    guidanceMode: 'graduate' as AssessmentGuidanceMode,
    summary:
      'Best if you want a timed-style check of numerical, logical, verbal, data, and workplace judgement skills before placements or job aptitude rounds.',
  },
  numerical: {
    href: '/services/assessments/numerical-reasoning-test/',
    title: 'Numerical Reasoning Test',
    label: 'Take Free Numerical Reasoning Test',
    guidanceMode: 'mixed' as AssessmentGuidanceMode,
    summary:
      'Best if you want a practical check of percentages, ratios, rates, number logic, data interpretation, estimation, and quantitative decisions across study and work contexts.',
  },
  verbal: {
    href: '/services/assessments/verbal-reasoning-test/',
    title: 'Verbal Reasoning Test',
    label: 'Take Free Verbal Reasoning Test',
    guidanceMode: 'mixed' as AssessmentGuidanceMode,
    summary:
      'Best if you want a practical check of comprehension, vocabulary in context, language precision, inference, verbal relationships, and clear communication across study and work contexts.',
  },
  personality: {
    href: '/services/assessments/myers-briggs-career-test/',
    title: 'Career Preference Type Test',
    label: 'Take Free Career Preference Type Test',
    guidanceMode: 'mixed' as AssessmentGuidanceMode,
    summary:
      'Best if you want an independent, career-focused view of how you tend to gain energy, process information, make decisions, and organise work without treating a four-letter code as a career verdict.',
  },
  big5: {
    href: '/services/assessments/big-5-personality-test-careers/',
    title: 'Big 5 Personality Test for Careers',
    label: 'Take Free Big 5 Career Personality Test',
    guidanceMode: 'mixed' as AssessmentGuidanceMode,
    summary:
      'Best if you want five continuous trait scores, 20 narrower facets, cross-trait career indicators, environment questions, and practical experiments without treating personality as a career verdict.',
  },
  professionals: {
    href: '/services/assessments/working-professionals-and-career-changers/',
    title: 'Working Professionals and Career Changers Assessment',
    label: 'Take Free Working Professional Assessment',
    guidanceMode: 'professional' as AssessmentGuidanceMode,
    summary:
      'Best if the real issue is career transition, skill under-leverage, income growth, AI pressure, or professional readiness.',
  },
  stream10: {
    href: '/services/assessments/stream-selector-test-after-10th/',
    title: 'Stream Selector Test After 10th',
    label: 'Take Free Stream Selector Test After 10th',
    guidanceMode: 'student' as AssessmentGuidanceMode,
    summary:
      'Best if you are specifically choosing Science, Commerce, or Arts after Class 10.',
  },
  aptitude10: {
    href: '/services/assessments/career-aptitude-test-after-10th/',
    title: 'Career Aptitude Test After 10th',
    label: 'Take Free Career Aptitude Test After 10th',
    guidanceMode: 'student' as AssessmentGuidanceMode,
    summary:
      'Best if you want strengths, aptitude patterns, and student-fit clarity before choosing a stream after Class 10.',
  },
  stream12: {
    href: '/services/assessments/stream-selector-test-after-12th/',
    title: 'Career Test After 12th',
    label: 'Take Free Career Test After 12th',
    guidanceMode: 'after12th' as AssessmentGuidanceMode,
    summary:
      'Best if you need broader course, degree, and path-fit clarity after Class 12.',
  },
  aptitude12: {
    href: '/services/assessments/career-aptitude-test-after-12th/',
    title: 'Career Aptitude Test After 12th',
    label: 'Take Free Career Aptitude Test After 12th',
    guidanceMode: 'after12th' as AssessmentGuidanceMode,
    summary:
      'Best if you need aptitude-fit clarity before choosing a degree, course, or training path after Class 12.',
  },
} as const;

const ALL_STAGE_RELATED_TARGETS: AssessmentTargetId[] = [
  'class10',
  'class1112',
  'graduates',
  'numerical',
  'verbal',
  'personality',
  'big5',
  'professionals',
  'stream10',
  'aptitude10',
  'stream12',
  'aptitude12',
];

const STUDENT_RELATED_TARGETS: AssessmentTargetId[] = [
  'class10',
  'class1112',
  'stream10',
  'aptitude10',
  'stream12',
  'aptitude12',
];

const PSYCHOMETRIC_RELATED_TARGETS: AssessmentTargetId[] = [
  'personality',
  'big5',
  'class10',
  'class1112',
  'graduates',
  'professionals',
];

const APTITUDE_RELATED_TARGETS: AssessmentTargetId[] = [
  'numerical',
  'verbal',
  'placement',
  'aptitude10',
  'aptitude12',
  'class10',
  'class1112',
];

const SKILL_RELATED_TARGETS: AssessmentTargetId[] = [
  'numerical',
  'verbal',
  'placement',
  'graduates',
  'professionals',
];

const BEST_FIT_REASON_BY_TARGET: Record<AssessmentTargetId, string> = {
  class10:
    'it gives school-stage clarity across interests, stream pressure, and early direction in one free starting point.',
  class1112:
    'it combines interests, aptitude, learning style, and direction in one complete free student layer.',
  graduates:
    'it covers role fit, readiness, employability, and direction in one complete free starting point.',
  placement:
    'it directly checks five aptitude areas commonly used in placement and job screening preparation.',
  numerical:
    'it directly checks practical quantitative reasoning across percentages, ratios, rates, data, estimation, and number logic.',
  verbal:
    'it directly checks comprehension, language precision, evidence-based inference, verbal relationships, and clear communication.',
  personality:
    'it directly maps four work-style preference pairs, preference strength, context sensitivity, and practical career experiments without claiming that a type determines career fit.',
  big5:
    'it directly maps five continuous personality traits, 20 facets, cross-trait career indicators, work-environment questions, and practical experiments without claiming that personality determines career fit.',
  professionals:
    'it covers transition pressure, skill leverage, and growth clarity in one complete free professional layer.',
  stream10:
    'it focuses directly on stream choice after Class 10 instead of only broad student direction.',
  aptitude10:
    'it focuses directly on strength-fit before stream choice after Class 10.',
  stream12:
    'it focuses directly on broader path-fit after Class 12 before degree or course decisions harden.',
  aptitude12:
    'it focuses directly on strength-fit before course, degree, or training decisions after Class 12.',
};

const lowerLead = (value: string) =>
  value
    .split(/(\s+)/)
    .map((part) => {
      if (!part.trim() || /^[A-Z0-9]{2,}$/.test(part)) {
        return part;
      }

      return part.toLowerCase();
    })
    .join('');

function createBroadCareerDirectionPage({
  slug,
  title,
  aliases,
  target = 'class1112',
  relatedTargets = ALL_STAGE_RELATED_TARGETS,
  bestFitBody,
}: {
  slug: string;
  title: string;
  aliases: string[];
  target?: AssessmentTargetId;
  relatedTargets?: AssessmentTargetId[];
  bestFitBody?: string;
}): AssessmentPage {
  const phrase = lowerLead(title);
  return {
    slug,
    hubGroup: 'career',
    hubTitle: title,
    hubDescription:
      `A free starting option for ${phrase} before choosing the right assessment for your stage.`,
    metaTitle: `${title} | Free Career Test | Future Career School`,
    metaDescription:
      `Looking for ${phrase}? Use the free career assessment pages from Future Career School and choose the right test for your stage.`,
    h1: title,
    pill: 'Free career-fit and direction test options',
    heroSub:
      `${title} should help you choose the right free assessment first, not leave you with more guesswork. Start with the free assessment that matches your stage and the kind of clarity you actually need.`,
    target,
    relatedTargets,
    relatedPhrases: aliases,
    fitTitle: `When ${phrase} becomes useful`,
    fitSubtitle:
      'This matters when you still need help choosing the right free assessment before taking one specific test.',
    fitItems: [
      {
        title: 'You want a clearer first filter',
        body:
          'This kind of page helps when you still need the right starting point before moving into one specific assessment.',
      },
      {
        title: 'You want more than a label',
        body:
          'The stronger version should connect fit, strengths, and direction to a sensible career decision instead of ending with vague description.',
      },
      {
        title: 'You want the right free test for your stage',
        body:
          'A stronger page should still make it easier to separate student, graduate, and professional starting points honestly.',
      },
    ],
    decideTitle: `What ${phrase} should actually help you do`,
    decideSubtitle:
      'The stronger outcome is not only a label. It is landing on the right free assessment and making the stronger direction easier to judge.',
    decideItems: [
      {
        title: 'Choose the right assessment first',
        body:
          'The page should make it easier to choose the stage-appropriate test instead of forcing everyone into one generic route.',
      },
      {
        title: 'Reduce wasted clicks and wrong turns',
        body:
          'A stronger page should help you avoid taking the wrong free test when the real need is a different stage or a narrower question.',
      },
      {
        title: 'Know whether updated career guidance is still needed',
        body:
          'A good free starting point should also help show whether the issue is already clearer or still needs updated, skill-first guidance to reach real clarity.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      bestFitBody ??
      `A strong starting point here is the ${ASSESSMENT_TARGETS[target].title} because ${BEST_FIT_REASON_BY_TARGET[target]}`,
    faqItems: [
      {
        question: `Is ${phrase} different from a career assessment?`,
        answer:
          'People often use these phrases loosely. The more useful question is whether the page helps you choose the right free assessment for your stage and decision.',
      },
      {
        question: 'Are the linked assessment pages free?',
        answer:
          'Yes. The linked assessment pages here are fully free.',
      },
      {
        question: 'How should I choose the right test from here?',
        answer:
          'Start by matching the assessment to your stage and your real decision instead of choosing only by a general label.',
      },
    ],
  };
}

function createStudentCareerPage({
  slug,
  title,
  aliases,
  target = 'class1112',
  relatedTargets = STUDENT_RELATED_TARGETS,
  bestFitBody,
}: {
  slug: string;
  title: string;
  aliases: string[];
  target?: AssessmentTargetId;
  relatedTargets?: AssessmentTargetId[];
  bestFitBody?: string;
}): AssessmentPage {
  const phrase = lowerLead(title);
  return {
    slug,
    hubGroup: 'career',
    hubTitle: title,
    hubDescription:
      `A student-first option for ${phrase} before bigger education decisions harden.`,
    metaTitle: `${title} | Free Student Career Test | Future Career School`,
    metaDescription:
      `Looking for ${phrase}? Use the free student assessment pages from Future Career School and choose the right one for your stage.`,
    h1: title,
    pill: 'Free student test and assessment options',
    heroSub:
      `${title} should help before stream, course, and degree decisions become expensive wrong turns. Start with the free student test that matches your stage and what you are actually stuck on.`,
    target,
    relatedTargets,
    relatedPhrases: aliases,
    fitTitle: `When ${phrase} becomes useful`,
    fitSubtitle:
      'This matters when students need a faster first layer before stream selection, after-12th pressure, or bigger student decisions start wasting time and money.',
    fitItems: [
      {
        title: 'You want a student-safe first layer',
        body:
          'A student-first page helps when the next academic choice matters and the family wants a free first filter before going deeper.',
      },
      {
        title: 'You want the stage-relevant test',
        body:
          'The stronger student route should separate after-10th, after-12th, and full student-direction needs instead of mixing them all together.',
      },
      {
        title: 'You want clearer parent-student discussion',
        body:
          'A better first layer can reduce repeated confusion by giving the next conversation more structure and less guesswork.',
      },
    ],
    decideTitle: `What ${phrase} should actually help with`,
    decideSubtitle:
      'The stronger outcome is not only student self-description. It is getting to the right free student assessment before more time and money get wasted.',
    decideItems: [
      {
        title: 'Choose the right student test first',
        body:
          'The page should make it easier to choose between the full student assessment, stream-selection, aptitude-first, and after-12th paths.',
      },
      {
        title: 'Reduce wrong turns early',
        body:
          'A stronger student page should narrow the field before stream, course, or degree choices harden into longer detours.',
      },
      {
        title: 'Make the next discussion easier',
        body:
          'A stronger student result should give both the learner and family a clearer base for deciding what to do next.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      bestFitBody ??
      `A strong starting point here is the ${ASSESSMENT_TARGETS[target].title} because ${BEST_FIT_REASON_BY_TARGET[target]}`,
    faqItems: [
      {
        question: 'Are the student assessment pages really free?',
        answer:
          'Yes. The linked student assessment pages here are fully free.',
      },
      {
        question: 'Should students start with a broad page or a narrower aptitude or stream page?',
        answer:
          'That depends on the stage and the question. Some students need fuller direction first, while others already need a stream or aptitude-first route.',
      },
      {
        question: 'Can this still help if parents are involved in the decision?',
        answer:
          'Yes. A better student first layer often helps parents and students discuss the stronger direction with clearer signals and less confusion.',
      },
    ],
  };
}

function createPsychometricAssessmentPage({
  slug,
  title,
  aliases,
  target = 'class1112',
  relatedTargets = PSYCHOMETRIC_RELATED_TARGETS,
  bestFitBody,
}: {
  slug: string;
  title: string;
  aliases: string[];
  target?: AssessmentTargetId;
  relatedTargets?: AssessmentTargetId[];
  bestFitBody?: string;
}): AssessmentPage {
  const phrase = lowerLead(title);
  return {
    slug,
    hubGroup: 'career',
    hubTitle: title,
    hubDescription:
      `A free psychometric-style option for ${phrase} before bigger decisions harden.`,
    metaTitle: `${title} | Free Psychometric Career Test | Future Career School`,
    metaDescription:
      `Looking for ${phrase}? Use the free psychometric-style assessment pages from Future Career School and choose the right one for your stage.`,
    h1: title,
    pill: 'Free psychometric-style assessment options',
    heroSub:
      `${title} should help connect personality, interests, work style, and direction to a real career decision. Start with choosing the free psychometric-style assessment that best matches your stage and current decision.`,
    target,
    relatedTargets,
    relatedPhrases: aliases,
    fitTitle: `When ${phrase} becomes useful`,
    fitSubtitle:
      'This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.',
    fitItems: [
      {
        title: 'You want more than one narrow label',
        body:
          'A stronger psychometric-style page should connect interests, work style, aptitude-like signals, and direction instead of stopping at one label.',
      },
      {
        title: 'You want career-relevant interpretation',
        body:
          'The stronger version should help you judge the stronger direction, not only describe you in a way that still leaves the decision untouched.',
      },
      {
        title: 'You want the right psychometric page for your stage',
        body:
          'A psychometric page should still separate school-stage, graduate, and professional starting points more honestly.',
      },
    ],
    decideTitle: `What ${phrase} should actually help you understand`,
    decideSubtitle:
      'The stronger outcome is not only personality description. It is getting to the right free assessment and clearer direction faster.',
    decideItems: [
      {
        title: 'Which work patterns fit better',
        body:
          'A stronger psychometric layer should help show what kinds of tasks, environments, and directions feel more natural for you.',
      },
      {
        title: 'Where your preferences and strengths support each other',
        body:
          'A better result helps you see when interests, work style, and aptitude-like signals reinforce each other instead of pulling apart.',
      },
      {
        title: 'Which stage-specific psychometric page deserves attention',
        body:
          'The output should help you choose the right student, graduate, or professional assessment instead of ending with a decorative label.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      bestFitBody ??
      `A strong starting point here is the ${ASSESSMENT_TARGETS[target].title} because ${BEST_FIT_REASON_BY_TARGET[target]}`,
    faqItems: [
      {
        question: `Does ${phrase} only mean personality testing?`,
        answer:
          'No. The stronger version also connects interests, work style, aptitude-like signals, and direction in a more career-relevant way.',
      },
      {
        question: 'Are the linked psychometric-style pages free?',
        answer:
          'Yes. The linked psychometric-style assessment pages here are fully free.',
      },
      {
        question: 'How should I choose the right psychometric page?',
        answer:
          'Start by matching the assessment to your stage and the decision in front of you, not only to a general term.',
      },
    ],
  };
}

function createAptitudeAssessmentPage({
  slug,
  title,
  aliases,
  target = 'aptitude12',
  relatedTargets = APTITUDE_RELATED_TARGETS,
  bestFitBody,
}: {
  slug: string;
  title: string;
  aliases: string[];
  target?: AssessmentTargetId;
  relatedTargets?: AssessmentTargetId[];
  bestFitBody?: string;
}): AssessmentPage {
  const phrase = lowerLead(title);
  const relevantTargets = [...new Set([target, ...(relatedTargets ?? [])])];
  const isAdultOnlyAptitudePage = relevantTargets.every(
    (id) => id === 'graduates' || id === 'professionals',
  );
  return {
    slug,
    hubGroup: 'skill',
    hubTitle: title,
    hubDescription:
      `A free aptitude-focused option for ${phrase} before choosing a stream, course, or training path.`,
    metaTitle: `${title} | Free Career Aptitude Test | Future Career School`,
    metaDescription:
      `Looking for ${phrase}? Use the free aptitude-focused assessment pages from Future Career School and choose the right one for your stage.`,
    h1: title,
    pill: 'Free aptitude-focused assessment options',
    heroSub:
      `${title} should help you judge where your stronger natural patterns sit before more time and money get wasted. Start with choosing the free aptitude-focused assessment that matches your stage and current decision.`,
    target,
    relatedTargets,
    relatedPhrases: aliases,
    fitTitle: `When ${phrase} becomes useful`,
    fitSubtitle:
      'This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.',
    fitItems: [
      {
        title: 'You want stronger evidence before choosing',
        body:
          'An aptitude-first page helps when the decision should be shaped by natural strength patterns, not only by interest or pressure.',
      },
      {
        title: 'You want the right aptitude page for your stage',
        body: isAdultOnlyAptitudePage
          ? 'The stronger route should help separate graduate and working-professional starting points instead of treating every adult situation as the same.'
          : 'The stronger route should help separate after-10th, after-12th, and full student-fit needs instead of pushing everyone into one path.',
      },
      {
        title: 'You want a free first step before heavier support',
        body:
          'A useful aptitude page should narrow the fit question before you spend more time or money elsewhere.',
      },
    ],
    decideTitle: `What ${phrase} should actually help you understand`,
    decideSubtitle:
      'The stronger outcome is not only a score. It is clearer strength-fit direction and a better next choice.',
    decideItems: [
      {
        title: 'Which strength patterns matter most',
        body:
          'The page should help narrow which natural signals deserve more weight in the next stream, course, or training decision.',
      },
      {
        title: 'Which stage-specific aptitude page fits better',
        body: isAdultOnlyAptitudePage
          ? 'A stronger path should make it easier to choose between graduate-first and working-professional-first assessment routes.'
          : 'A stronger path should make it easier to choose between after-10th, after-12th, and fuller student-direction routes.',
      },
      {
        title: 'Whether aptitude is the whole issue',
        body:
          'A better page should also help you see when the real problem is fuller direction, not aptitude alone.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      bestFitBody ??
      `A strong starting point here is the ${ASSESSMENT_TARGETS[target].title} because ${BEST_FIT_REASON_BY_TARGET[target]}`,
    faqItems: [
      {
        question: `Are the linked ${phrase} pages free?`,
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: isAdultOnlyAptitudePage
          ? 'Should graduates and working professionals use the same aptitude-focused assessment?'
          : 'Should after-10th and after-12th students use the same aptitude page?',
        answer: isAdultOnlyAptitudePage
          ? 'Not always. Early-career employability questions and working-professional transition questions often need different starting points, which is why separate adult-first options are shown where needed.'
          : 'Not always. The stage changes the decision, which is why narrower options are shown where needed.',
      },
      {
        question: isAdultOnlyAptitudePage
          ? 'Can an aptitude-first page still help with adult career change or stagnation decisions?'
          : 'Can an aptitude-first page still help with real decisions?',
        answer:
          'Yes. A strong free starting point can still reduce random choices before you pay for anything heavier.',
      },
    ],
  };
}

function createCounsellingTestPage({
  slug,
  title,
  aliases,
  target = 'class1112',
  relatedTargets = ALL_STAGE_RELATED_TARGETS,
  bestFitBody,
}: {
  slug: string;
  title: string;
  aliases: string[];
  target?: AssessmentTargetId;
  relatedTargets?: AssessmentTargetId[];
  bestFitBody?: string;
}): AssessmentPage {
  const phrase = lowerLead(title);
  return {
    slug,
    hubGroup: 'career',
    hubTitle: title,
    hubDescription:
      `A free assessment option for ${phrase} before or alongside updated career guidance.`,
    metaTitle: `${title} | Free Career Guidance Test | Future Career School`,
    metaDescription:
      `Looking for ${phrase}? Use the free assessment pages from Future Career School and choose the right one before moving into updated, skill-first career guidance.`,
    h1: title,
    pill: 'Free assessment before the updated career guidance',
    heroSub:
      `${title} should make updated, skill-first career guidance stronger, not replace it with a decorative report. Start with the free assessment that gives the right first layer for your stage.`,
    target,
    relatedTargets,
    relatedPhrases: aliases,
    fitTitle: `When ${phrase} becomes useful`,
    fitSubtitle:
      'This matters when you want the testing layer to make the updated career guidance stronger instead of becoming a dead-end report.',
    fitItems: [
      {
        title: 'You want better input before guidance',
        body:
          'A counselling-test page helps when the broader conversation should start with stronger fit signals instead of only opinions.',
      },
      {
        title: 'You want more than one narrow label',
        body:
          'The stronger version should connect interests, aptitude-like signals, work style, and direction so updated guidance starts from better clarity.',
      },
      {
        title: 'You want the right page for your stage',
        body:
          'A counselling-test page should still separate student, graduate, and professional starting points honestly.',
      },
    ],
    decideTitle: `What ${phrase} should actually help you do`,
    decideSubtitle:
      'The stronger outcome is not only a report. It is a stronger base for updated guidance or a stronger decision.',
    decideItems: [
      {
        title: 'Give the next guidance step better input',
        body:
          'The page should help make the next career discussion more specific by narrowing fit and direction signals first.',
      },
      {
        title: 'Choose the right assessment route',
        body:
          'The stronger path should help you land on the student, graduate, or professional page that fits the real decision better.',
      },
      {
        title: 'Reduce guesswork before paying for more',
        body:
          'A good free testing layer should help show what still needs the updated career guidance before you commit more time or money.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      bestFitBody ??
      `A strong first layer here is the ${ASSESSMENT_TARGETS[target].title} because ${BEST_FIT_REASON_BY_TARGET[target]}`,
    faqItems: [
      {
        question: 'Should a test replace updated career guidance?',
        answer:
          'No. The stronger role of a test is improving the next conversation by adding clearer fit signals, not replacing judgment entirely.',
      },
      {
        question: 'Are the linked assessment pages free?',
        answer:
          'Yes. The linked assessment pages here are fully free.',
      },
      {
        question: 'Can students, graduates, and professionals all use these pages?',
        answer:
          'Yes. The page includes related free routes for different stages so the first layer matches the actual decision better.',
      },
    ],
  };
}

function createSkillAssessmentPage({
  slug,
  title,
  aliases,
  target = 'graduates',
  bestFitBody,
}: {
  slug: string;
  title: string;
  aliases: string[];
  target?: AssessmentTargetId;
  bestFitBody?: string;
}): AssessmentPage {
  const phrase = lowerLead(title);
  return {
    slug,
    hubGroup: 'skill',
    hubTitle: title,
    hubDescription:
      `A free skill-first option for ${phrase} when readiness, employability, or growth signals matter more than interest alone.`,
    metaTitle: `${title} | Free Career Skill Test | Future Career School`,
    metaDescription:
      `Looking for ${phrase}? Use the free skill-focused assessment pages from Future Career School and choose the right one for your stage.`,
    h1: title,
    pill: 'Free skill, readiness, and growth tests',
    heroSub:
      `${title} should help when the issue is no longer only what interests you. It should show whether your current profile is strong enough, under-leveraged, or still missing something important for the work you want next.`,
    target,
    relatedTargets: SKILL_RELATED_TARGETS,
    relatedPhrases: aliases,
    fitTitle: `When ${phrase} becomes useful`,
    fitSubtitle:
      'This matters when employability, readiness, leverage, or stronger skill direction is part of the real problem.',
    fitItems: [
      {
        title: 'You want more than broad interest clarity',
        body:
          'A skill-first page helps when the stronger question is readiness, leverage, or role-fit rather than only preferences.',
      },
      {
        title: 'You need a practical reality check',
        body:
          'The useful page should help show what is already useful, what is weak, and what deserves more deliberate building next.',
      },
      {
        title: 'You want the right stage-based skill page',
        body:
          'Graduates and working professionals often need different skill-first starting points because the decision context is different.',
      },
    ],
    decideTitle: `What ${phrase} should actually help you understand`,
    decideSubtitle:
      'The stronger outcome is not only measuring ability. It is judging which readiness or leverage gap matters most next.',
    decideItems: [
      {
        title: 'Whether the issue is readiness or positioning',
        body:
          'A stronger skill-first page helps show whether the bigger issue is weak capability, weak translation, or weak decision logic.',
      },
      {
        title: 'Which skill move deserves attention first',
        body:
          'The result should help narrow the next useful improvement instead of making every gap feel equally urgent.',
      },
      {
        title: 'Which assessment fits your stage better',
        body:
          'The output should make it easier to choose between graduate and professional skill-focused starting points.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      bestFitBody ??
      `A strong starting point here is the ${ASSESSMENT_TARGETS[target].title} because ${BEST_FIT_REASON_BY_TARGET[target]}`,
    faqItems: [
      {
        question: 'Is this a narrow technical skill test?',
        answer:
          'No. This is a fuller career-skill and readiness layer, not a narrow exam for one software tool or subject.',
      },
      {
        question: 'Are the linked skill-focused pages free?',
        answer:
          'Yes. The linked skill-focused assessment pages here are fully free.',
      },
      {
        question: 'Who should use a fuller skill-first page?',
        answer:
          'It is most useful for graduates, freshers, and working professionals who want clearer readiness or growth signals.',
      },
    ],
  };
}

const EXTRA_ASSESSMENT_PAGES: AssessmentPage[] = [
  createPsychometricAssessmentPage({
    slug: 'career-personality-test',
    title: 'Career Personality Test',
    aliases: ['career personality test', 'career personality test free'],
    target: 'personality',
    bestFitBody:
      'The Career Preference Type Test is the strongest starting point because it directly explores four work-style preference pairs, reports preference strength and context sensitivity, and turns the result into practical career experiments without treating a type code as a career verdict.',
  }),
  createStudentCareerPage({
    slug: 'career-test-for-students-free',
    title: 'Career Test for Students Free',
    aliases: ['career test for students free', 'free career test for students', 'free career test for students india'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-online-career-test',
    title: 'Free Online Career Test',
    aliases: ['free online career test', 'career test free online', 'online career test free'],
    target: 'class1112',
    bestFitBody:
      'For broad free-online-career-test needs, the Class 11 and 12 assessment is a strong starting point because it works well as a broad free online first layer. But People should compare the other free assessments below when their stage is different.',
  }),
  createAptitudeAssessmentPage({
    slug: 'career-and-aptitude-test',
    title: 'Career and Aptitude Test',
    aliases: ['career and aptitude test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-choosing-test',
    title: 'Career Choosing Test',
    aliases: ['career choosing test', 'career choosing test free'],
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-test',
    title: 'Career Counselling Test',
    aliases: ['career counselling test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-evaluation-test-free',
    title: 'Career Evaluation Test Free',
    aliases: ['career evaluation test free', 'self evaluation test for career'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-finder-test-free',
    title: 'Career Finder Test Free',
    aliases: ['career finder test free', 'take a free career test'],
  }),
  createPsychometricAssessmentPage({
    slug: 'holland-code-career-test',
    title: 'Holland Code Career Test',
    aliases: ['holland code career test'],
    target: 'class1112',
    bestFitBody:
      'For broad holland-code-career-test needs, the Class 11 and 12 assessment is a strong starting point because it already includes RIASEC-style career-interest signals inside a broader student-fit layer.',
  }),
  createStudentCareerPage({
    slug: 'career-aptitude-test-for-high-school-students',
    title: 'Career Aptitude Test for High School Students',
    aliases: ['career aptitude test for high school students'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-fit-test',
    title: 'Career Fit Test',
    aliases: ['career fit test', 'career suitability test'],
    target: 'graduates',
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-online-free-test',
    title: 'Career Counselling Online Free Test',
    aliases: ['career counselling online free test', 'free career counselling test'],
  }),
  createCounsellingTestPage({
    slug: 'online-career-counselling-test',
    title: 'Online Career Counselling Test',
    aliases: ['online career counselling test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-class-10',
    title: 'Career Aptitude Test for Class 10',
    aliases: ['career aptitude test for class 10', 'aptitude test for career after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-path-test',
    title: 'Career Path Test',
    aliases: ['career path test', 'test to choose a career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-selection-test',
    title: 'Career Selection Test',
    aliases: ['career selection test', 'career selection test free', 'career selection test online'],
  }),
  createCounsellingTestPage({
    slug: 'free-career-guidance-test',
    title: 'Free Career Guidance Test',
    aliases: ['free career guidance test', 'career advice test'],
  }),
  createPsychometricAssessmentPage({
    slug: 'personality-test-for-career-choice',
    title: 'Personality Test for Career Choice',
    aliases: ['personality test for career choice', 'personality test and career choice'],
    target: 'personality',
  }),
  createPsychometricAssessmentPage({
    slug: 'free-psychometric-test-for-career',
    title: 'Free Psychometric Test for Career',
    aliases: ['free psychometric test for career'],
    target: 'graduates',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-counselling',
    title: 'Aptitude Test for Career Counselling',
    aliases: ['aptitude test for career counselling', 'aptitude test and career counselling'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'best-career-aptitude-test',
    title: 'Best Career Aptitude Test',
    aliases: ['best career aptitude test', 'the best career aptitude test'],
    target: 'aptitude12',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-choice-test',
    title: 'Career Choice Test',
    aliases: ['career choice test', 'test to determine career', 'test to decide career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-self-assessment-test',
    title: 'Career Self Assessment Test',
    aliases: ['career self assessment test'],
    target: 'graduates',
  }),
  createPsychometricAssessmentPage({
    slug: 'psychometric-test-for-career-guidance',
    title: 'Psychometric Test for Career Guidance',
    aliases: ['psychometric test for career guidance'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'what-career-is-right-for-me-test-free',
    title: 'What Career Is Right for Me Test Free',
    aliases: ['what career is right for me test free', 'test to determine which career is right for me', 'test to figure out career'],
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-test-after-10th',
    title: 'Career Counselling Test After 10th',
    aliases: ['career counselling test after 10th'],
    target: 'class10',
    relatedTargets: ['class10', 'stream10', 'aptitude10'],
    bestFitBody:
      'For broad career-counselling-test-after-10th needs, the Class 10 and Below assessment is a strong first layer because it gives school-stage clarity across interests, stream pressure, and early direction. The narrower stream and aptitude pages are also worth comparing below.',
  }),
  createSkillAssessmentPage({
    slug: 'skill-based-career-test',
    title: 'Skill Based Career Test',
    aliases: ['skill based career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'ideal-career-test',
    title: 'Ideal Career Test',
    aliases: ['ideal career test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'free-online-career-aptitude-test',
    title: 'Free Online Career Aptitude Test',
    aliases: ['free online career aptitude test'],
  }),
  createCounsellingTestPage({
    slug: 'career-advice-test',
    title: 'Career Advice Test',
    aliases: ['career advice test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-suitability-test',
    title: 'Career Suitability Test',
    aliases: ['career suitability test'],
    target: 'graduates',
  }),
  createAptitudeAssessmentPage({
    slug: 'detailed-career-aptitude-test',
    title: 'Detailed Career Aptitude Test',
    aliases: ['detailed career aptitude test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-options',
    title: 'Aptitude Test for Career Options',
    aliases: ['aptitude test for career options'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-choosing-career-after-10th',
    title: 'Aptitude Test for Choosing Career After 10th',
    aliases: ['aptitude test for choosing career after 10th', 'aptitude test for career selection after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-india-free',
    title: 'Career Aptitude Test India Free',
    aliases: ['career aptitude test india free'],
  }),
  createPsychometricAssessmentPage({
    slug: 'career-assessment-personality-test',
    title: 'Career Assessment Personality Test',
    aliases: ['career assessment personality test', 'career personality test free'],
    target: 'personality',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-match-test',
    title: 'Career Match Test',
    aliases: ['career match test'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-path-finder-test',
    title: 'Career Path Finder Test',
    aliases: ['career path finder test', 'test to determine career path'],
  }),
  createSkillAssessmentPage({
    slug: 'career-proficiency-test',
    title: 'Career Proficiency Test',
    aliases: ['career proficiency test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-india',
    title: 'Career Test India',
    aliases: ['career test india'],
  }),
  createStudentCareerPage({
    slug: 'online-career-test-for-students',
    title: 'Online Career Test for Students',
    aliases: ['online career test for students'],
  }),
  createPsychometricAssessmentPage({
    slug: 'psychometric-test-for-career-selection',
    title: 'Psychometric Test for Career Selection',
    aliases: ['psychometric test for career selection'],
  }),
  createBroadCareerDirectionPage({
    slug: 'quick-free-career-test',
    title: 'Quick Free Career Test',
    aliases: ['quick free career test', 'best free career test', 'take a free career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-for-you-test',
    title: 'Best Career for You Test',
    aliases: ['best career for you test', 'test on career right for you', 'what career should i choose test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-free-online-career-assessment-tests',
    title: 'Best Free Online Career Assessment Tests',
    aliases: ['best free online career assessment tests'],
  }),
  createPsychometricAssessmentPage({
    slug: 'best-psychometric-test-for-career-choice',
    title: 'Best Psychometric Test for Career Choice',
    aliases: ['best psychometric test for career choice', 'personality type career test'],
    target: 'graduates',
  }),
  createCounsellingTestPage({
    slug: 'career-counseling-tests-free-online',
    title: 'Career Counseling Tests Free Online',
    aliases: ['career counseling tests free online'],
  }),
  createCounsellingTestPage({
    slug: 'career-guidance-test-after-10th-free',
    title: 'Career Guidance Test After 10th Free',
    aliases: ['career guidance test after 10th free'],
    target: 'class10',
    relatedTargets: ['class10', 'stream10', 'aptitude10'],
    bestFitBody:
      'For broad career-guidance-test-after-10th-free needs, the Class 10 and Below assessment is a strong first layer because it gives school-stage clarity across interests, stream pressure, and early direction. The narrower stream and aptitude pages are also worth comparing below.',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-inclination-test',
    title: 'Career Inclination Test',
    aliases: ['career inclination test'],
  }),
  createSkillAssessmentPage({
    slug: 'career-role-test',
    title: 'Career Role Test',
    aliases: ['career role test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-after-10th',
    title: 'Aptitude Test for Career After 10th',
    aliases: ['aptitude test for career after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
    bestFitBody:
      'For aptitude-test-for-career-after-10th needs, the Career Aptitude Test After 10th is the best fit because it focuses directly on strengths, aptitude patterns, and stream-fit before Class 11 choices harden. The broader Class 10 and Below assessment and the Stream Selector Test are also worth comparing below.',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-after-12th',
    title: 'Aptitude Test for Career After 12th',
    aliases: ['aptitude test for career after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
    bestFitBody:
      'For aptitude-test-for-career-after-12th needs, the Career Aptitude Test After 12th is the best fit because it focuses directly on strength-fit before course, degree, or training choices after school. The broader Class 11 and 12 assessment and the Career Test After 12th are also worth comparing below.',
  }),
  createPsychometricAssessmentPage({
    slug: 'career-personality-test-free',
    title: 'Career Personality Test Free',
    aliases: ['career personality test free'],
    target: 'personality',
  }),
  createCounsellingTestPage({
    slug: 'free-career-counselling-test',
    title: 'Free Career Counselling Test',
    aliases: ['free career counselling test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-choosing-test-free',
    title: 'Career Choosing Test Free',
    aliases: ['career choosing test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-selection-test-free',
    title: 'Career Selection Test Free',
    aliases: ['career selection test free'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-and-career-counselling',
    title: 'Aptitude Test and Career Counselling',
    aliases: ['aptitude test and career counselling'],
    target: 'class1112',
    relatedTargets: ['class1112', 'aptitude12', 'aptitude10', 'class10'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-for-adults-free',
    title: 'Career Test for Adults Free',
    aliases: ['career test for adults free'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
    bestFitBody:
      'For career-test-for-adults-free needs, the Working Professionals and Career Changers assessment is a strong starting point because it covers transition pressure, skill leverage, and growth clarity in one broader free professional layer. The graduate and early professional assessment is also worth comparing below if the issue is employability or early-career role fit.',
  }),
  createBroadCareerDirectionPage({
    slug: 'self-evaluation-test-for-career',
    title: 'Self Evaluation Test for Career',
    aliases: ['self evaluation test for career'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'test-that-determines-your-career',
    title: 'Test That Determines Your Career',
    aliases: ['test that determines your career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-decide-career',
    title: 'Test to Decide Career',
    aliases: ['test to decide career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-determine-career',
    title: 'Test to Determine Career',
    aliases: ['test to determine career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-aptitude-test-free-for-college-students',
    title: 'Career Aptitude Test Free for College Students',
    aliases: ['career aptitude test free for college students'],
    target: 'graduates',
    relatedTargets: ['class1112', 'graduates'],
    bestFitBody:
      'For career-aptitude-test-free-for-college-students needs, the Graduates and Early Professionals assessment is a strong first layer because it covers role fit, readiness, employability, and direction for people who are already in college or moving into work. If the real issue is still course-fit after Class 12, the student assessment below is also worth comparing.',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-selection-after-10th',
    title: 'Aptitude Test for Career Selection After 10th',
    aliases: ['aptitude test for career selection after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createPsychometricAssessmentPage({
    slug: 'personality-test-and-career-choice',
    title: 'Personality Test and Career Choice',
    aliases: ['personality test and career choice'],
    target: 'personality',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-free-career-test',
    title: 'Best Free Career Test',
    aliases: ['best free career test'],
  }),
  createStudentCareerPage({
    slug: 'career-test-for-kids',
    title: 'Career Test for Kids',
    aliases: ['career test for kids'],
    target: 'class10',
    bestFitBody:
      'For career-test-for-kids needs, the Class 10 and Below assessment is the best free starting point because it gives early clarity across interests, strengths, and stream pressure without forcing a narrow adult-style career decision too early.',
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-figure-out-career',
    title: 'Test to Figure Out Career',
    aliases: ['test to figure out career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-selection-test-online',
    title: 'Career Selection Test Online',
    aliases: ['career selection test online'],
  }),
  createAptitudeAssessmentPage({
    slug: 'online-career-aptitude-test-for-college-students',
    title: 'Online Career Aptitude Test for College Students',
    aliases: ['online career aptitude test for college students'],
    target: 'graduates',
    relatedTargets: ['graduates', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-adults',
    title: 'Career Aptitude Test for Adults',
    aliases: ['career aptitude test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-assessment-test-for-adults',
    title: 'Career Assessment Test for Adults',
    aliases: ['career assessment test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-choice-test-free',
    title: 'Career Choice Test Free',
    aliases: ['career choice test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-finder-test',
    title: 'Career Finder Test',
    aliases: ['career finder test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'free-career-aptitude-test-for-students',
    title: 'Free Career Aptitude Test for Students',
    aliases: ['free career aptitude test for students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createPsychometricAssessmentPage({
    slug: 'free-online-career-interest-test',
    title: 'Free Online Career Interest Test',
    aliases: ['free online career interest test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'what-career-should-i-choose-test-free',
    title: 'What Career Should I Choose Test Free',
    aliases: ['what career should i choose test free'],
  }),
  createCounsellingTestPage({
    slug: 'online-career-counselling-test-for-students',
    title: 'Online Career Counselling Test for Students',
    aliases: ['online career counselling test for students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
  }),
  createStudentCareerPage({
    slug: 'career-test-for-teens',
    title: 'Career Test for Teens',
    aliases: ['career test for teens', 'career test for teens free'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'take-a-free-career-test',
    title: 'Take a Free Career Test',
    aliases: ['take a free career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-on-career-right-for-you',
    title: 'Test on Career Right for You',
    aliases: ['test on career right for you'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-choose-a-career-path',
    title: 'Test to Choose a Career Path',
    aliases: ['test to choose a career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-determine-which-career-is-right-for-me',
    title: 'Test to Determine Which Career Is Right for Me',
    aliases: ['test to determine which career is right for me'],
  }),
  createAptitudeAssessmentPage({
    slug: 'the-best-career-aptitude-test',
    title: 'The Best Career Aptitude Test',
    aliases: ['the best career aptitude test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-free-career-assessment-test',
    title: 'Best Free Career Assessment Test',
    aliases: ['best free career assessment test'],
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-aptitude-test-online-free',
    title: 'Career Counselling Aptitude Test Online Free',
    aliases: ['career counselling aptitude test online free'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'free-online-aptitude-test-for-career-selection-after-12th',
    title: 'Free Online Aptitude Test for Career Selection After 12th',
    aliases: ['free online aptitude test for career selection after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-online-tests-to-determine-career',
    title: 'Free Online Tests to Determine Career',
    aliases: ['free online tests to determine career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'my-free-career-test',
    title: 'My Free Career Test',
    aliases: ['my free career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-determine-career-path',
    title: 'Test to Determine Career Path',
    aliases: ['test to determine career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'the-ultimate-career-test',
    title: 'The Ultimate Career Test',
    aliases: ['the ultimate career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'what-am-i-good-at-test-career',
    title: 'What Am I Good At Test Career',
    aliases: ['what am i good at test career'],
    target: 'graduates',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-after-12th-commerce',
    title: 'Aptitude Test for Career After 12th Commerce',
    aliases: ['aptitude test for career after 12th commerce'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-after-12th-science',
    title: 'Aptitude Test for Career After 12th Science',
    aliases: ['aptitude test for career after 12th science'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
  }),
  createStudentCareerPage({
    slug: 'career-assessment-test-for-high-school-students',
    title: 'Career Assessment Test for High School Students',
    aliases: ['career assessment test for high school students'],
    target: 'class1112',
  }),
  createPsychometricAssessmentPage({
    slug: 'career-interest-test-for-high-school-students',
    title: 'Career Interest Test for High School Students',
    aliases: ['career interest test for high school students'],
    target: 'class1112',
  }),
  createStudentCareerPage({
    slug: 'career-test-online-for-12th-students',
    title: 'Career Test Online for 12th Students',
    aliases: ['career test online for 12th students'],
    target: 'class1112',
    bestFitBody:
      'For career-test-online-for-12th-students needs, the Class 11 and 12 assessment is the best free starting point because it combines interests, aptitude, learning style, and direction for students who are close to course, degree, and after-school decisions.',
  }),
  createBroadCareerDirectionPage({
    slug: 'free-accurate-career-test',
    title: 'Free Accurate Career Test',
    aliases: ['free accurate career test'],
  }),
  createCounsellingTestPage({
    slug: 'free-career-guidance-test-after-12th',
    title: 'Free Career Guidance Test After 12th',
    aliases: ['free career guidance test after 12th'],
    target: 'class1112',
    relatedTargets: ['class1112', 'stream12', 'aptitude12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'online-aptitude-test-to-decide-career',
    title: 'Online Aptitude Test to Decide Career',
    aliases: ['online aptitude test to decide career'],
    target: 'aptitude12',
  }),
  createCounsellingTestPage({
    slug: 'online-career-counselling-aptitude-test',
    title: 'Online Career Counselling Aptitude Test',
    aliases: ['online career counselling aptitude test'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createPsychometricAssessmentPage({
    slug: 'psychometric-test-career-choice-free',
    title: 'Psychometric Test Career Choice Free',
    aliases: ['psychometric test career choice free'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'take-a-career-test-online-for-free',
    title: 'Take a Career Test Online for Free',
    aliases: ['take a career test online for free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-find-perfect-career',
    title: 'Test to Find Perfect Career',
    aliases: ['test to find perfect career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-see-what-career-fits-you',
    title: 'Test to See What Career Fits You',
    aliases: ['test to see what career fits you'],
  }),
  createBroadCareerDirectionPage({
    slug: 'the-career-test',
    title: 'The Career Test',
    aliases: ['the career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'what-is-my-future-career-test',
    title: 'What Is My Future Career Test',
    aliases: ['what is my future career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'a-test-that-tells-you-your-career',
    title: 'A Test That Tells You Your Career',
    aliases: ['a test that tells you your career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'accurate-career-test',
    title: 'Accurate Career Test',
    aliases: ['accurate career test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-change',
    title: 'Aptitude Test for Career Change',
    aliases: ['aptitude test for career change'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-future-career',
    title: 'Aptitude Test for Future Career',
    aliases: ['aptitude test for future career'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-assessment-test-online-free',
    title: 'Career Assessment Test Online Free',
    aliases: ['career assessment test online free'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-based-aptitude-test',
    title: 'Career Based Aptitude Test',
    aliases: ['career based aptitude test'],
    target: 'aptitude12',
  }),
  createCounsellingTestPage({
    slug: 'career-guidance-aptitude-test-free',
    title: 'Career Guidance Aptitude Test Free',
    aliases: ['career guidance aptitude test free'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createCounsellingTestPage({
    slug: 'career-guidance-test-after-10th',
    title: 'Career Guidance Test After 10th',
    aliases: ['career guidance test after 10th'],
    target: 'class10',
    relatedTargets: ['class10', 'stream10', 'aptitude10'],
  }),
  createCounsellingTestPage({
    slug: 'career-guidance-test-india',
    title: 'Career Guidance Test India',
    aliases: ['career guidance test india'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'find-your-career-path-test',
    title: 'Find Your Career Path Test',
    aliases: ['find your career path test'],
  }),
  createStudentCareerPage({
    slug: 'free-career-path-test-for-high-school-students',
    title: 'Free Career Path Test for High School Students',
    aliases: ['free career path test for high school students'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'free-online-career-test-with-free-results',
    title: 'Free Online Career Test With Free Results',
    aliases: ['free online career test with free results'],
  }),
  createStudentCareerPage({
    slug: 'high-school-career-test',
    title: 'High School Career Test',
    aliases: ['high school career test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'perfect-career-test',
    title: 'Perfect Career Test',
    aliases: ['perfect career test'],
  }),
  createPsychometricAssessmentPage({
    slug: 'psychometric-career-assessment-test-free',
    title: 'Psychometric Career Assessment Test Free',
    aliases: ['psychometric career assessment test free'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'take-a-career-test-online',
    title: 'Take a Career Test Online',
    aliases: ['take a career test online'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-determine-what-career-is-best-for-me',
    title: 'Test to Determine What Career Is Best for Me',
    aliases: ['test to determine what career is best for me'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-find-which-career-is-right-for-me',
    title: 'Test to Find Which Career Is Right for Me',
    aliases: ['test to find which career is right for me'],
  }),
  createBroadCareerDirectionPage({
    slug: 'tests-to-figure-out-your-career-path',
    title: 'Tests to Figure Out Your Career Path',
    aliases: ['tests to figure out your career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'what-career-should-i-choose-test',
    title: 'What Career Should I Choose Test',
    aliases: ['what career should i choose test'],
  }),
  createPsychometricAssessmentPage({
    slug: 'personality-type-career-test',
    title: 'Personality Type Career Test',
    aliases: ['personality type career test'],
    target: 'personality',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-free-best',
    title: 'Career Test Free Best',
    aliases: ['career test free best'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-career-profile-test',
    title: 'Free Career Profile Test',
    aliases: ['free career profile test'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'how-to-choose-my-career-test',
    title: 'How to Choose My Career Test',
    aliases: ['how to choose my career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'how-to-find-your-career-passion-test',
    title: 'How to Find Your Career Passion Test',
    aliases: ['how to find your career passion test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'online-test-to-know-your-career',
    title: 'Online Test to Know Your Career',
    aliases: ['online test to know your career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'assessment-test-for-career-path',
    title: 'Assessment Test for Career Path',
    aliases: ['assessment test for career path'],
  }),
  createPsychometricAssessmentPage({
    slug: 'best-career-personality-test-free',
    title: 'Best Career Personality Test Free',
    aliases: ['best career personality test free'],
    target: 'personality',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-test-to-take',
    title: 'Best Career Test to Take',
    aliases: ['best career test to take'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-free-online-india',
    title: 'Career Aptitude Test Free Online India',
    aliases: ['career aptitude test free online india'],
    target: 'aptitude12',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-decider-test-free',
    title: 'Career Decider Test Free',
    aliases: ['career decider test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-decision-making-test',
    title: 'Career Decision Making Test',
    aliases: ['career decision making test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-decision-making-test-free',
    title: 'Career Decision Making Test Free',
    aliases: ['career decision making test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-development-assessment-tests',
    title: 'Career Development Assessment Tests',
    aliases: ['career development assessment tests'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-evaluation-test',
    title: 'Career Evaluation Test',
    aliases: ['career evaluation test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-field-test',
    title: 'Career Field Test',
    aliases: ['career field test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-finder-test-for-adults',
    title: 'Career Finder Test for Adults',
    aliases: ['career finder test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createPsychometricAssessmentPage({
    slug: 'career-interest-test-for-college-students',
    title: 'Career Interest Test for College Students',
    aliases: ['career interest test for college students'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-inventory-test',
    title: 'Career Inventory Test',
    aliases: ['career inventory test'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-predictor-test',
    title: 'Career Predictor Test',
    aliases: ['career predictor test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-survey-test',
    title: 'Career Survey Test',
    aliases: ['career survey test'],
  }),
  createPsychometricAssessmentPage({
    slug: 'career-test-based-on-interests',
    title: 'Career Test Based on Interests',
    aliases: ['career test based on interests'],
    target: 'class1112',
  }),
  createStudentCareerPage({
    slug: 'career-test-for-8th-graders',
    title: 'Career Test for 8th Graders',
    aliases: ['career test for 8th graders'],
    target: 'class10',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-online-for-college-students',
    title: 'Career Test Online for College Students',
    aliases: ['career test online for college students'],
    target: 'graduates',
    relatedTargets: ['class1112', 'graduates'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-career-passion-test',
    title: 'Free Career Passion Test',
    aliases: ['free career passion test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-career-planning-test',
    title: 'Free Career Planning Test',
    aliases: ['free career planning test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-career-self-assessment-test',
    title: 'Free Career Self Assessment Test',
    aliases: ['free career self assessment test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'free-online-career-assessment-test-for-college-students',
    title: 'Free Online Career Assessment Test for College Students',
    aliases: ['free online career assessment test for college students'],
    target: 'graduates',
    relatedTargets: ['class1112', 'graduates'],
  }),
  createPsychometricAssessmentPage({
    slug: 'free-online-psychometric-test-for-career-choice',
    title: 'Free Online Psychometric Test for Career Choice',
    aliases: ['free online psychometric test for career choice'],
    target: 'graduates',
  }),
  createPsychometricAssessmentPage({
    slug: 'interest-based-career-test',
    title: 'Interest Based Career Test',
    aliases: ['interest based career test'],
    target: 'class1112',
  }),
  createAptitudeAssessmentPage({
    slug: 'midlife-career-change-aptitude-test',
    title: 'Midlife Career Change Aptitude Test',
    aliases: ['midlife career change aptitude test'],
    target: 'professionals',
    relatedTargets: ['professionals'],
  }),
  createAptitudeAssessmentPage({
    slug: 'online-aptitude-test-for-career-choice',
    title: 'Online Aptitude Test for Career Choice',
    aliases: ['online aptitude test for career choice'],
    target: 'aptitude12',
  }),
  createStudentCareerPage({
    slug: 'online-career-aptitude-test-for-high-school-students',
    title: 'Online Career Aptitude Test for High School Students',
    aliases: ['online career aptitude test for high school students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createPsychometricAssessmentPage({
    slug: 'personality-test-for-career-path',
    title: 'Personality Test for Career Path',
    aliases: ['personality test for career path'],
    target: 'personality',
  }),
  createPsychometricAssessmentPage({
    slug: 'psychometric-test-for-career-planning',
    title: 'Psychometric Test for Career Planning',
    aliases: ['psychometric test for career planning'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'test-for-choosing-the-right-career',
    title: 'Test for Choosing the Right Career',
    aliases: ['test for choosing the right career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-know-which-career-is-best-for-you',
    title: 'Test to Know Which Career Is Best for You',
    aliases: ['test to know which career is best for you'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-see-my-future-career',
    title: 'Test to See My Future Career',
    aliases: ['test to see my future career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-see-what-career-is-best-for-you',
    title: 'Test to See What Career Is Best for You',
    aliases: ['test to see what career is best for you'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-take-to-find-your-career',
    title: 'Test to Take to Find Your Career',
    aliases: ['test to take to find your career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'tests-to-determine-what-your-career-should-be',
    title: 'Tests to Determine What Your Career Should Be',
    aliases: ['tests to determine what your career should be'],
  }),
  createBroadCareerDirectionPage({
    slug: 'tests-to-take-for-careers',
    title: 'Tests to Take for Careers',
    aliases: ['tests to take for careers'],
  }),
  createBroadCareerDirectionPage({
    slug: 'your-career-test',
    title: 'Your Career Test',
    aliases: ['your career test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-find-your-career',
    title: 'Aptitude Test Find Your Career',
    aliases: ['aptitude test find your career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-choice',
    title: 'Aptitude Test for Career Choice',
    aliases: ['aptitude test for career choice'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-selection-after-12th',
    title: 'Aptitude Test for Career Selection After 12th',
    aliases: ['aptitude test for career selection after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-choosing-career-after-12th',
    title: 'Aptitude Test for Choosing Career After 12th',
    aliases: ['aptitude test for choosing career after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-determine-career',
    title: 'Aptitude Test to Determine Career',
    aliases: ['aptitude test to determine career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'best-career-aptitude-test-for-adults',
    title: 'Best Career Aptitude Test for Adults',
    aliases: ['best career aptitude test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createAptitudeAssessmentPage({
    slug: 'best-career-aptitude-test-free-online-for-adults',
    title: 'Best Career Aptitude Test Free Online for Adults',
    aliases: ['best career aptitude test free online for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-for-me-test-free',
    title: 'Best Career for Me Test Free',
    aliases: ['best career for me test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-test',
    title: 'Best Career Test',
    aliases: ['best career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-free-online-career-test',
    title: 'Best Free Online Career Test',
    aliases: ['best free online career test'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-ability-test',
    title: 'Career Ability Test',
    aliases: ['career ability test'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-students-class-10',
    title: 'Career Aptitude Test for Students Class 10',
    aliases: ['career aptitude test for students class 10'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-assessment-test-free-college-students',
    title: 'Career Assessment Test Free College Students',
    aliases: ['career assessment test free college students'],
    target: 'graduates',
    relatedTargets: ['class1112', 'graduates'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-change-test',
    title: 'Career Change Test',
    aliases: ['career change test'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createStudentCareerPage({
    slug: 'career-choosing-test-after-10th',
    title: 'Career Choosing Test After 10th',
    aliases: ['career choosing test after 10th'],
    target: 'class10',
    relatedTargets: ['class10', 'stream10', 'aptitude10'],
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-online-aptitude-test',
    title: 'Career Counselling Online Aptitude Test',
    aliases: ['career counselling online aptitude test'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-test-for-10th-std-students',
    title: 'Career Counselling Test for 10th Std Students',
    aliases: ['career counselling test for 10th std students'],
    target: 'class10',
    relatedTargets: ['class10', 'stream10', 'aptitude10'],
  }),
  createCounsellingTestPage({
    slug: 'career-counselling-tests-for-students',
    title: 'Career Counselling Tests for Students',
    aliases: ['career counselling tests for students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
  }),
  createStudentCareerPage({
    slug: 'career-guidance-test-for-teenagers',
    title: 'Career Guidance Test for Teenagers',
    aliases: ['career guidance test for teenagers'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-help-test',
    title: 'Career Help Test',
    aliases: ['career help test'],
  }),
  createPsychometricAssessmentPage({
    slug: 'career-interest-test-for-adults',
    title: 'Career Interest Test for Adults',
    aliases: ['career interest test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-inventory-test-free',
    title: 'Career Inventory Test Free',
    aliases: ['career inventory test free'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-options-test',
    title: 'Career Options Test',
    aliases: ['career options test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-options-test-free',
    title: 'Career Options Test Free',
    aliases: ['career options test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-orientation-test-free',
    title: 'Career Orientation Test Free',
    aliases: ['career orientation test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-path-test-free-online',
    title: 'Career Path Test Free Online',
    aliases: ['career path test free online'],
  }),
  createPsychometricAssessmentPage({
    slug: 'career-personality-profiler-test',
    title: 'Career Personality Profiler Test',
    aliases: ['career personality profiler test'],
    target: 'personality',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-profile-test',
    title: 'Career Profile Test',
    aliases: ['career profile test'],
    target: 'graduates',
  }),
  createPsychometricAssessmentPage({
    slug: 'career-psychometric-test-free',
    title: 'Career Psychometric Test Free',
    aliases: ['career psychometric test free'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-after-graduation',
    title: 'Career Test After Graduation',
    aliases: ['career test after graduation'],
    target: 'graduates',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-for-adults',
    title: 'Career Test for Adults',
    aliases: ['career test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createStudentCareerPage({
    slug: 'career-test-for-high-school-students',
    title: 'Career Test for High School Students',
    aliases: ['career test for high school students'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'find-my-career-path-test-free',
    title: 'Find My Career Path Test Free',
    aliases: ['find my career path test free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'find-my-career-test-free',
    title: 'Find My Career Test Free',
    aliases: ['find my career test free'],
  }),
  createAptitudeAssessmentPage({
    slug: 'free-career-aptitude-test-for-adults',
    title: 'Free Career Aptitude Test for Adults',
    aliases: ['free career aptitude test for adults'],
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createCounsellingTestPage({
    slug: 'free-career-counselling-aptitude-test',
    title: 'Free Career Counselling Aptitude Test',
    aliases: ['free career counselling aptitude test'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12'],
  }),
  createCounsellingTestPage({
    slug: 'free-career-counselling-test-for-students',
    title: 'Free Career Counselling Test for Students',
    aliases: ['free career counselling test for students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'free-online-aptitude-test-for-career-selection-after-10th',
    title: 'Free Online Aptitude Test for Career Selection After 10th',
    aliases: ['free online aptitude test for career selection after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'free-online-career-aptitude-test-for-class-10',
    title: 'Free Online Career Aptitude Test for Class 10',
    aliases: ['free online career aptitude test for class 10'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'good-career-aptitude-test',
    title: 'Good Career Aptitude Test',
    aliases: ['good career aptitude test'],
    target: 'aptitude12',
  }),
  createPsychometricAssessmentPage({
    slug: 'holland-code-free-career-test',
    title: 'Holland Code Free Career Test',
    aliases: ['holland code free career test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'how-to-test-what-career-is-right-for-me',
    title: 'How to Test What Career Is Right for Me',
    aliases: ['how to test what career is right for me'],
  }),
  createBroadCareerDirectionPage({
    slug: 'career-test-online-india',
    title: 'Career Test Online India',
    aliases: ['career test online india'],
  }),
  createPsychometricAssessmentPage({
    slug: 'online-career-interest-test',
    title: 'Online Career Interest Test',
    aliases: ['online career interest test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'online-career-path-test',
    title: 'Online Career Path Test',
    aliases: ['online career path test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'online-test-for-career-choice',
    title: 'Online Test for Career Choice',
    aliases: ['online test for career choice'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-for-career-choice-online-free',
    title: 'Test for Career Choice Online Free',
    aliases: ['test for career choice online free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-for-your-career-path',
    title: 'Test for Your Career Path',
    aliases: ['test for your career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-that-helps-you-choose-a-career',
    title: 'Test That Helps You Choose a Career',
    aliases: ['test that helps you choose a career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-decide-career-path',
    title: 'Test to Decide Career Path',
    aliases: ['test to decide career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-determine-my-career-path',
    title: 'Test to Determine My Career Path',
    aliases: ['test to determine my career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-figure-out-career-choice',
    title: 'Test to Figure Out Career Choice',
    aliases: ['test to figure out career choice'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-find-my-career',
    title: 'Test to Find My Career',
    aliases: ['test to find my career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-find-your-career-free',
    title: 'Test to Find Your Career Free',
    aliases: ['test to find your career free'],
  }),
  createBroadCareerDirectionPage({
    slug: 'test-to-know-your-career-path',
    title: 'Test to Know Your Career Path',
    aliases: ['test to know your career path'],
  }),
  createBroadCareerDirectionPage({
    slug: 'what-career-is-right-for-me-test',
    title: 'What Career Is Right for Me Test',
    aliases: ['what career is right for me test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'what-career-to-choose-test',
    title: 'What Career to Choose Test',
    aliases: ['what career to choose test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'what-is-the-best-career-assessment-test',
    title: 'What Is the Best Career Assessment Test',
    aliases: ['what is the best career assessment test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'your-future-career-test',
    title: 'Your Future Career Test',
    aliases: ['your future career test'],
  }),
  createBroadCareerDirectionPage({
    slug: 'a-test-to-decide-my-career',
    title: 'A Test to Decide My Career',
    aliases: ['a test to decide my career'],
  }),
  createBroadCareerDirectionPage({
    slug: 'a-test-to-determine-your-career',
    title: 'A Test to Determine Your Career',
    aliases: ['a test to determine your career'],
  }),
  createAptitudeAssessmentPage({
    slug: 'accurate-career-aptitude-test',
    title: 'Accurate Career Aptitude Test',
    aliases: ['accurate career aptitude test'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'my-career-aptitude-test',
    title: 'My Career Aptitude Test',
    aliases: ['my career aptitude test'],
    target: 'aptitude12',
  }),
  createPsychometricAssessmentPage({
    slug: 'riasec-career-test',
    title: 'RIASEC Career Test',
    aliases: ['riasec career test'],
    target: 'class1112',
  }),
  createPsychometricAssessmentPage({
    slug: 'career-type-test',
    title: 'Career Type Test',
    aliases: ['career type test'],
    target: 'graduates',
  }),
  createPsychometricAssessmentPage({
    slug: 'personality-test-to-figure-out-career',
    title: 'Personality Test to Figure Out Career',
    aliases: ['personality test to figure out career'],
    target: 'personality',
  }),
  createAptitudeAssessmentPage({
    slug: 'simple-career-aptitude-test',
    title: 'Simple Career Aptitude Test',
    aliases: ['simple career aptitude test'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-after-12th-free',
    title: 'Aptitude Test for Career After 12th Free',
    aliases: ['aptitude test for career after 12th free'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'class1112', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-choice-after-10th',
    title: 'Aptitude Test for Career Choice After 10th',
    aliases: ['aptitude test for career choice after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-guidance',
    title: 'Aptitude Test for Career Guidance',
    aliases: ['aptitude test for career guidance'],
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-guidance-after-10th',
    title: 'Aptitude Test for Career Guidance After 10th',
    aliases: ['aptitude test for career guidance after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-selection',
    title: 'Aptitude Test for Career Selection',
    aliases: ['aptitude test for career selection'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-career-selection-after-graduation',
    title: 'Aptitude Test for Career Selection After Graduation',
    aliases: ['aptitude test for career selection after graduation'],
    target: 'graduates',
    relatedTargets: ['graduates', 'professionals'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-for-choosing-right-career',
    title: 'Aptitude Test for Choosing Right Career',
    aliases: ['aptitude test for choosing right career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-free-for-career',
    title: 'Aptitude Test Free for Career',
    aliases: ['aptitude test free for career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-online-for-career-after-10th',
    title: 'Aptitude Test Online for Career After 10th',
    aliases: ['aptitude test online for career after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-online-for-career-guidance',
    title: 'Aptitude Test Online for Career Guidance',
    aliases: ['aptitude test online for career guidance'],
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-choose-career',
    title: 'Aptitude Test to Choose Career',
    aliases: ['aptitude test to choose career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-choose-career-after-10th',
    title: 'Aptitude Test to Choose Career After 10th',
    aliases: ['aptitude test to choose career after 10th'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-assessment-test',
    title: 'Best Career Assessment Test',
    aliases: ['best career assessment test'],
    target: 'class1112',
    bestFitBody:
      'For broad best-career-assessment-test needs, the Class 11 and 12 assessment is a strong starting point because it works as a broad free starting point for many student and early-direction decisions. But the smarter move is comparing the related free assessments below by stage instead of forcing one test on everyone.',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-match-test',
    title: 'Best Career Match Test',
    aliases: ['best career match test'],
    target: 'graduates',
    bestFitBody:
      'For broad best-career-match-test needs, the graduate and early professional assessment is a strong starting point because it connects fit, role direction, and readiness more directly than a generic label-only quiz. People should still compare the related free pages below when their stage is earlier or more career-transition focused.',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-online-career-test',
    title: 'Best Online Career Test',
    aliases: ['best online career test'],
    target: 'class1112',
  }),
  createAptitudeAssessmentPage({
    slug: 'best-free-career-aptitude-test',
    title: 'Best Free Career Aptitude Test',
    aliases: ['best free career aptitude test'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'best-free-online-career-aptitude-test',
    title: 'Best Free Online Career Aptitude Test',
    aliases: ['best free online career aptitude test'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'best-online-career-aptitude-test',
    title: 'Best Online Career Aptitude Test',
    aliases: ['best online career aptitude test'],
    target: 'aptitude12',
  }),
  createPsychometricAssessmentPage({
    slug: 'best-personality-test-for-career',
    title: 'Best Personality Test for Career',
    aliases: ['best personality test for career'],
    target: 'personality',
  }),
  createPsychometricAssessmentPage({
    slug: 'best-personality-test-for-career-choice',
    title: 'Best Personality Test for Career Choice',
    aliases: ['best personality test for career choice'],
    target: 'personality',
  }),
  createCounsellingTestPage({
    slug: 'career-advice-test-free',
    title: 'Career Advice Test Free',
    aliases: ['career advice test free'],
    target: 'class1112',
  }),
  createCounsellingTestPage({
    slug: 'career-advisor-online-test',
    title: 'Career Advisor Online Test',
    aliases: ['career advisor online test'],
    target: 'class1112',
  }),
  createCounsellingTestPage({
    slug: 'career-advisor-test',
    title: 'Career Advisor Test',
    aliases: ['career advisor test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-alignment-test',
    title: 'Career Alignment Test',
    aliases: ['career alignment test'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-analysis-test',
    title: 'Career Analysis Test',
    aliases: ['career analysis test'],
    target: 'graduates',
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-class-12-students',
    title: 'Career Aptitude Test for Class 12 Students',
    aliases: ['career aptitude test for class 12 students'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'stream12', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-class-9',
    title: 'Career Aptitude Test for Class 9',
    aliases: ['career aptitude test for class 9'],
    target: 'aptitude10',
    relatedTargets: ['aptitude10', 'class10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-college-students',
    title: 'Career Aptitude Test for College Students',
    aliases: ['career aptitude test for college students'],
    target: 'graduates',
    relatedTargets: ['graduates', 'class1112', 'aptitude12', 'professionals'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-school-students',
    title: 'Career Aptitude Test for School Students',
    aliases: ['career aptitude test for school students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12', 'stream10', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-students-after-12th',
    title: 'Career Aptitude Test for Students After 12th',
    aliases: ['career aptitude test for students after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'stream12', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-teens',
    title: 'Career Aptitude Test for Teens',
    aliases: ['career aptitude test for teens'],
    target: 'aptitude10',
    relatedTargets: ['class10', 'aptitude10', 'stream10', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-free-india',
    title: 'Career Aptitude Test Free India',
    aliases: ['career aptitude test free india'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-india',
    title: 'Career Aptitude Test India',
    aliases: ['career aptitude test india'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-decide-career',
    title: 'Aptitude Test to Decide Career',
    aliases: ['aptitude test to decide career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-find-career',
    title: 'Aptitude Test to Find Career',
    aliases: ['aptitude test to find career'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-find-the-right-career',
    title: 'Aptitude Test to Find the Right Career',
    aliases: ['aptitude test to find the right career'],
    target: 'aptitude12',
  }),
  createBroadCareerDirectionPage({
    slug: 'assessment-test-for-career-choice',
    title: 'Assessment Test for Career Choice',
    aliases: ['assessment test for career choice'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'assessment-test-to-find-the-right-career',
    title: 'Assessment Test to Find the Right Career',
    aliases: ['assessment test to find the right career'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'creative-career-test',
    title: 'Creative Career Test',
    aliases: ['creative career test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'fun-career-test',
    title: 'Fun Career Test',
    aliases: ['fun career test'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'career-exam-test',
    title: 'Career Exam Test',
    aliases: ['career exam test'],
    target: 'class1112',
  }),
  createAptitudeAssessmentPage({
    slug: 'online-aptitude-test-for-career-after-12th',
    title: 'Online Aptitude Test for Career After 12th',
    aliases: ['online aptitude test for career after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'stream12', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'reliable-career-aptitude-test',
    title: 'Reliable Career Aptitude Test',
    aliases: ['reliable career aptitude test'],
    target: 'aptitude12',
  }),
  createStudentCareerPage({
    slug: 'career-test-for-teens-free',
    title: 'Career Test for Teens Free',
    aliases: ['career test for teens free'],
    target: 'class10',
    bestFitBody:
      'For broad career-test-for-teens-free needs, the Class 10 and Below assessment is a strong starting point because it helps younger students and families narrow interests, work-style signals, and early direction before stream pressure gets heavier. Older teens should still compare the Class 11 and 12 route below when the decision is already after-10th or after-12th focused.',
  }),
  createBroadCareerDirectionPage({
    slug: 'how-to-choose-your-career-path-test',
    title: 'How to Choose Your Career Path Test',
    aliases: ['how to choose your career path test'],
    target: 'class1112',
  }),
  createPsychometricAssessmentPage({
    slug: 'see-my-personality-career-test',
    title: 'See My Personality Career Test',
    aliases: ['see my personality career test'],
    target: 'personality',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-finder-test',
    title: 'Best Career Finder Test',
    aliases: ['best career finder test'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-career-test-for-college-students',
    title: 'Best Career Test for College Students',
    aliases: ['best career test for college students'],
    target: 'graduates',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-free-career-test-with-free-results',
    title: 'Best Free Career Test With Free Results',
    aliases: ['best free career test with free results'],
    target: 'class1112',
  }),
  createBroadCareerDirectionPage({
    slug: 'best-test-to-figure-out-career-path',
    title: 'Best Test to Figure Out Career Path',
    aliases: ['best test to figure out career path'],
    target: 'class1112',
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-kids',
    title: 'Career Aptitude Test for Kids',
    aliases: ['career aptitude test for kids'],
    target: 'aptitude10',
    relatedTargets: ['class10', 'aptitude10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-elementary-students',
    title: 'Career Aptitude Test for Elementary Students',
    aliases: ['career aptitude test for elementary students'],
    target: 'class10',
    relatedTargets: ['class10', 'aptitude10', 'stream10'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-for-high-school-students-in-india',
    title: 'Career Aptitude Test for High School Students in India',
    aliases: ['career aptitude test for high school students in india'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12', 'stream10', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-free-online-for-adults',
    title: 'Career Aptitude Test Free Online for Adults',
    aliases: ['career aptitude test free online for adults'],
    target: 'professionals',
    relatedTargets: ['professionals', 'graduates'],
  }),
  createAptitudeAssessmentPage({
    slug: 'career-aptitude-test-free-online-for-highschool-students',
    title: 'Career Aptitude Test Free Online for Highschool Students',
    aliases: ['career aptitude test free online for highschool students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12', 'stream10', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'best-career-aptitude-test-for-adults-free',
    title: 'Best Career Aptitude Test for Adults Free',
    aliases: ['best career aptitude test for adults free'],
    target: 'professionals',
    relatedTargets: ['professionals', 'graduates'],
  }),
  createAptitudeAssessmentPage({
    slug: 'best-career-aptitude-test-for-high-school-students',
    title: 'Best Career Aptitude Test for High School Students',
    aliases: ['best career aptitude test for high school students'],
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'aptitude10', 'aptitude12', 'stream10', 'stream12'],
  }),
  createAptitudeAssessmentPage({
    slug: 'best-career-aptitude-test-online-free',
    title: 'Best Career Aptitude Test Online Free',
    aliases: ['best career aptitude test online free'],
    target: 'aptitude12',
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-choose-career-after-12th',
    title: 'Aptitude Test to Choose Career After 12th',
    aliases: ['aptitude test to choose career after 12th'],
    target: 'aptitude12',
    relatedTargets: ['aptitude12', 'stream12', 'class1112'],
  }),
  createAptitudeAssessmentPage({
    slug: 'aptitude-test-to-determine-career-path',
    title: 'Aptitude Test to Determine Career Path',
    aliases: ['aptitude test to determine career path'],
    target: 'aptitude12',
  }),
];

const ALL_ASSESSMENT_PAGES: AssessmentPage[] = [
  {
    slug: 'free-career-assessment',
    hubGroup: 'career',
    hubTitle: 'Free Career Assessment',
    hubDescription:
      'A free-assessment option for people who want a no-cost starting point before paying for career tests.',
    metaTitle: 'Free Career Assessment | 100% Free Career Test | Future Career School',
    metaDescription:
      'Looking for a free career assessment? Start with a fully free assessment from Future Career School and get practical clarity before paying for outdated tests.',
    h1: 'Free career assessment',
    pill: '100% free career and skill assessments',
    heroSub:
      'If you want a free career assessment, the real question is not only whether it costs nothing. It is whether the test actually helps you understand fit, direction, and what to do next without pushing you toward a paid upsell first.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['free career assessment', 'free career test', 'free career assessment test'],
    fitTitle: 'When a free career assessment becomes the right first step',
    fitSubtitle:
      'A free assessment helps most when you need a practical first layer of clarity before moving into updated, skill-first career guidance.',
    fitItems: [
      {
        title: 'You want a starting point before paying anyone',
        body:
          'A free test is useful when you want to narrow the problem first instead of paying too early for generic advice or outdated reports.',
      },
      {
        title: 'You need clarity on strengths, preferences, or work style',
        body:
          'The useful first layer is often understanding how you naturally think, learn, and lean before bigger course or career decisions.',
      },
      {
        title: 'You want something more useful than a random personality label',
        body:
          'A better free assessment should point toward direction, not just describe you in vague terms and leave the real decision untouched.',
      },
    ],
    decideTitle: 'What a free career assessment should actually help you see',
    decideSubtitle:
      'The right free starting point should improve clarity enough that the remaining decision becomes smaller and easier to judge.',
    decideItems: [
      {
        title: 'Which broad direction deserves more attention',
        body:
          'The test should narrow the field and show which paths or subjects are worth taking seriously now.',
      },
      {
        title: 'Which strengths are likely to matter more',
        body:
          'You should leave with a clearer picture of your stronger signals instead of treating all interests and skills as equally useful.',
      },
      {
        title: 'What still needs the updated career guidance after the test',
        body:
          'A good free assessment should help you decide whether you still need the updated career guidance or already have enough clarity to move.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-career-assessment needs, the Class 11 and 12 assessment is the strongest starting point because it covers interests, aptitude signals, work style, and direction in one free layer instead of only one narrow test type.',
    faqItems: [
      {
        question: 'Is this career assessment really free?',
        answer:
          'Yes. The assessments are fully free. You do not need to pay for the first clarity layer here.',
      },
      {
        question: 'Will a free career assessment be too basic to help?',
        answer:
          'A free assessment can still be useful if it helps you narrow strengths, preferences, and direction before you spend money on deeper help.',
      },
      {
        question: 'What if I need more than a test result?',
        answer:
          'That is when the free assessment does its job well. It shows what still needs the updated career guidance instead of making you pay before the real problem is even clear.',
      },
    ],
  },
  {
    slug: 'career-assessment-test',
    hubGroup: 'career',
    hubTitle: 'Career Assessment Test',
    hubDescription:
      'A broad option for career assessment test before choosing a more specific free assessment.',
    metaTitle: 'Career Assessment Test | Free Career Assessment | Future Career School',
    metaDescription:
      'Looking for a career assessment test? Start with a free assessment from Future Career School and narrow your career-fit, strengths, and career direction.',
    h1: 'Career assessment test',
    pill: 'Free career-fit and direction assessment',
    heroSub:
      'A career assessment test should do more than hand you a label. It should help you judge which direction makes more sense, where your stronger signals are, and what kind of support you actually need next.',
    target: 'graduates',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career assessment test', 'career assessment', 'career fit test'],
    fitTitle: 'When a career assessment test becomes useful',
    fitSubtitle:
      'Use this when you know the decision matters, but the direction still feels too broad or too noisy.',
    fitItems: [
      {
        title: 'You need a stronger first filter',
        body:
          'The test should help reduce broad confusion into a smaller set of directions worth taking seriously.',
      },
      {
        title: 'You want practical role-fit clues',
        body:
          'A useful career assessment should point toward role families, employability clues, and where your strengths can translate into real work.',
      },
      {
        title: 'You do not want to pay for a vague report',
        body:
          'The better first step is a free assessment that shows whether the problem is clarity, skills, positioning, or execution gaps.',
      },
    ],
    decideTitle: 'What a career assessment test should actually help you understand',
    decideSubtitle:
      'The goal is not endless self-description. The goal is better decisions about fit, readiness, and what to do next.',
    decideItems: [
      {
        title: 'Which roles or domains fit more naturally',
        body:
          'The test should give clearer signals about the kind of work you are more likely to grow in, not just what sounds attractive.',
      },
      {
        title: 'Where your current profile is still weak',
        body:
          'A strong assessment helps you see whether the issue is skill gaps, direction confusion, or low-confidence positioning.',
      },
      {
        title: 'What still needs the updated career guidance after the test',
        body:
          'The result should make the stronger direction easier to choose, not leave you staring at another static personality summary.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-assessment-test needs, the graduate and early professional assessment is the strongest fit because it covers career clarity, role fit, job readiness, and skill direction in one place.',
    faqItems: [
      {
        question: 'What is the difference between a career assessment and a career test?',
        answer:
          'In practice, most people mean the same thing: a tool that helps them judge fit, strengths, and direction before making the bigger decision.',
      },
      {
        question: 'Can this help if I already finished college?',
        answer:
          'Yes. That is exactly why the graduate and early professional assessment is a strong fit here.',
      },
      {
        question: 'Do I need to pay to get real value from the assessment?',
        answer:
          'No. A strong free starting point can still give you useful direction before you move into updated, skill-first guidance.',
      },
    ],
  },
  {
    slug: 'career-assessment-for-students',
    hubGroup: 'career',
    hubTitle: 'Career Assessment for Students',
    hubDescription:
      'A student-first option for free career assessments before stream, degree, or course decisions.',
    metaTitle: 'Career Assessment for Students | Free Student Career Test | Future Career School',
    metaDescription:
      'Looking for a career assessment for students? Start with a free student assessment from Future Career School and get clearer stream, course, and career direction.',
    h1: 'Career assessment for students',
    pill: 'Free student assessment before bigger study decisions',
    heroSub:
      'A career assessment for students should help before stream, degree, and course decisions harden into expensive wrong turns. Start with not a flashy report. It is a free assessment that improves decision quality.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career assessment for students', 'student career assessment', 'career test for students'],
    fitTitle: 'When a student career assessment becomes useful',
    fitSubtitle:
      'Student assessments matter when broad advice is not enough and the next academic or skill decision already feels important.',
    fitItems: [
      {
        title: 'You want clearer stream, course, or degree direction',
        body:
          'The test should help narrow the field before a school or college choice turns into a longer detour.',
      },
      {
        title: 'Parent pressure and student confusion are both active',
        body:
          'A useful assessment gives a neutral starting layer so the conversation is not only emotion or opinion.',
      },
      {
        title: 'You need a student-safe first step',
        body:
          'The best assessment should help students explore fit without paying for something heavy too early.',
      },
    ],
    decideTitle: 'What a career assessment for students should actually help with',
    decideSubtitle:
      'The value is not only self-awareness. It is better academic and career decisions before more cost or regret enters the picture.',
    decideItems: [
      {
        title: 'Broader direction that matches fit better',
        body:
          'The assessment should show which study or work directions deserve more serious attention.',
      },
      {
        title: 'Stronger signals on aptitude and work style',
        body:
          'Students should get a clearer sense of how they learn, what fits better, and where effort is more likely to compound well.',
      },
      {
        title: 'What still needs the updated career guidance after the test',
        body:
          'A student assessment should help decide whether the issue is already clear enough to move or still needs the updated career guidance.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For student-career-assessment needs, the Class 11 and 12 assessment is the strongest broad fit because it covers student interests, aptitude, learning style, and direction in one free experience.',
    faqItems: [
      {
        question: 'Is this only for Class 11 and 12 students?',
        answer:
          'No. It is the strongest broad student starting point, but school-stage students can also move into the Class 10 and below assessment if stream pressure is still earlier.',
      },
      {
        question: 'Can parents use the result to discuss options better?',
        answer:
          'Yes. A good student assessment helps replace vague arguments with clearer signals around fit and direction.',
      },
      {
        question: 'Does this help with both career and course decisions?',
        answer:
          'Yes. Student career decisions and course decisions are closely connected, so the first useful step is usually a broader assessment of fit and direction.',
      },
    ],
  },
  {
    slug: 'psychometric-test',
    hubGroup: 'career',
    hubTitle: 'Psychometric Test',
    hubDescription:
      'A psychometric option for people who want personality, interest, aptitude, and work-style clarity without paying first.',
    metaTitle: 'Psychometric Test | Free Career Psychometric Assessment | Future Career School',
    metaDescription:
      'Looking for a psychometric test for career decisions? Start with a free psychometric-style assessment from Future Career School and get practical direction.',
    h1: 'Psychometric test',
    pill: 'Free psychometric-style career assessment',
    heroSub:
      'A psychometric test is useful only if it helps with a real decision. The better free starting point is not a fancy personality label alone. It is an assessment that connects interests, aptitude, work style, and direction.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['psychometric test', 'psychometric career test', 'free psychometric test for career'],
    fitTitle: 'When a psychometric test becomes a useful first step',
    fitSubtitle:
      'Psychometric-style assessments help most when you need a clearer read on personality, interests, work style, and how they affect your next choice.',
    fitItems: [
      {
        title: 'You want more than raw marks or opinions',
        body:
          'A psychometric test can help when academic performance alone is not enough to judge fit or direction.',
      },
      {
        title: 'You need personality and interest input together',
        body:
          'The useful version combines multiple signals instead of relying on only one narrow personality label.',
      },
      {
        title: 'You want a free starting point before paying for reports',
        body:
          'The best first step is an assessment that shows whether the problem is really about fit, skills, or a broader decision issue.',
      },
    ],
    decideTitle: 'What a psychometric test should actually help you understand',
    decideSubtitle:
      'The test should make the decision clearer, not just describe you in a way that still leaves the decision untouched.',
    decideItems: [
      {
        title: 'Interest and work-style alignment',
        body:
          'You should see what kind of environments, tasks, and roles feel more natural for you.',
      },
      {
        title: 'Where aptitude and preference support each other',
        body:
          'Better psychometric input helps you see when your strengths and your likely direction actually reinforce each other.',
      },
      {
        title: 'Which next route deserves deeper exploration',
        body:
          'The output should help you narrow the direction, not leave you with a decorative report and no practical decision.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For psychometric-test needs, the Class 11 and 12 assessment is the strongest starting point because it combines career interests, aptitude signals, learning style, and direction instead of only one test type.',
    faqItems: [
      {
        question: 'Does a psychometric test mean only personality testing?',
        answer:
          'Not necessarily. The stronger version combines personality-like signals with interests, aptitude, and work-style clues so the result is more useful for actual decisions.',
      },
      {
        question: 'Can a free psychometric assessment still be useful?',
        answer:
          'Yes. A good free starting point can still help narrow fit and direction before you decide what still needs updated, skill-first guidance.',
      },
      {
        question: 'What if I need a psychometric test for student career decisions?',
        answer:
          'That is exactly why this page points to the Class 11 and 12 assessment first. It is a stronger broad student fit for psychometric-style clarity.',
      },
    ],
  },
  {
    slug: 'career-interest-test',
    hubGroup: 'career',
    hubTitle: 'Career Interest Test',
    hubDescription:
      'A career-interest-test page for people who want to narrow preferred work directions before course, role, or path commitments.',
    metaTitle: 'Career Interest Test | Free Interest-Based Career Test | Future Career School',
    metaDescription:
      'Looking for a career interest test? Start with a free assessment from Future Career School and see which interests and work directions fit you better.',
    h1: 'Career interest test',
    pill: 'Free interest-based career direction test',
    heroSub:
      'A career interest test should help you understand what kind of work naturally pulls you in before stream, course, or role choices become harder to reverse. The useful outcome is direction, not just curiosity.',
    target: 'class10',
    relatedTargets: ['class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career interest test', 'interest test for career', 'career interest assessment'],
    fitTitle: 'When a career interest test becomes useful',
    fitSubtitle:
      'Interest-based tests matter when the biggest problem is not marks alone but figuring out what kind of work and learning direction feels naturally stronger.',
    fitItems: [
      {
        title: 'You do not want to choose only by pressure or popularity',
        body:
          'A career interest test gives a better first clue when the bigger career choice is starting to feel driven by outside noise.',
      },
      {
        title: 'You want early fit clues before stream choices harden',
        body:
          'This is especially useful before Class 11 or before early student direction gets fixed too quickly.',
      },
      {
        title: 'You need something simpler than a full counselling process',
        body:
          'A free interest-first assessment can be the right starting layer before updated, skill-first guidance is needed.',
      },
    ],
    decideTitle: 'What a career interest test should actually show',
    decideSubtitle:
      'The stronger outcome is a clearer sense of the directions that energize you more naturally, not only a fun label to read once and forget.',
    decideItems: [
      {
        title: 'What kinds of tasks feel more natural',
        body:
          'The test should help show whether you lean more toward people, ideas, systems, making, or creative work.',
      },
      {
        title: 'Which early study directions deserve more exploration',
        body:
          'A stronger result helps narrow what to explore first instead of keeping every option equally alive.',
      },
      {
        title: 'Where to test interest with real action next',
        body:
          'Better interest clarity should make the next subject, stream, or exposure step easier to choose.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For career-interest-test needs, the Class 10 and below assessment is the strongest fit because it is built for early-direction pressure, interest clarity, and pre-stream decisions.',
    faqItems: [
      {
        question: 'Is a career interest test enough by itself?',
        answer:
          'It is a strong first layer, especially for early students, but bigger decisions often still need aptitude, work-style, or guidance input afterward.',
      },
      {
        question: 'Does this help before choosing a stream?',
        answer:
          'Yes. That is one of the best times to use it because interest clarity matters most before the next academic path hardens.',
      },
      {
        question: 'What if my interests change later?',
        answer:
          'That is normal. The goal is not to lock you forever. It is to make the decision more thoughtful and less random now.',
      },
    ],
  },
  {
    slug: 'stream-selection-test',
    hubGroup: 'career',
    hubTitle: 'Stream Selection Test',
    hubDescription:
      'A dedicated stream-selection option for students who want a free first step before choosing Science, Commerce, or Arts.',
    metaTitle: 'Stream Selection Test | Free Stream Choice Test After 10th | Future Career School',
    metaDescription:
      'Looking for a stream selection test? Start with the free stream selector from Future Career School and get clearer Science, Commerce, or Arts direction.',
    h1: 'Stream selection test',
    pill: 'Free stream-choice assessment for after Class 10',
    heroSub:
      'A stream selection test should help before Science, Commerce, or Arts choices harden into years of drift. Start with not generic stream advice. It is a free test that narrows fit and direction.',
    target: 'stream10',
    relatedTargets: ['aptitude10', 'class10'],
    relatedPhrases: ['stream selection test', 'stream choice test', 'which stream should I choose test'],
    fitTitle: 'When a stream selection test becomes worth taking',
    fitSubtitle:
      'This matters when the Class 10 decision is starting to feel heavy enough that guessing or following pressure no longer feels safe.',
    fitItems: [
      {
        title: 'You are choosing between Science, Commerce, or Arts',
        body:
          'The test helps most when the real question is not what sounds prestigious, but what fits better right now.',
      },
      {
        title: 'Parent pressure and student uncertainty are both active',
        body:
          'A stream test can create a neutral first layer before stronger guidance is needed.',
      },
      {
        title: 'You want a free first step before deeper help',
        body:
          'A focused stream selector is often the cleanest way to start without paying for more than you need yet.',
      },
    ],
    decideTitle: 'What a stream selection test should actually clarify',
    decideSubtitle:
      'A better test should narrow the choice, not only repeat broad definitions of the three streams.',
    decideItems: [
      {
        title: 'Which stream feels more aligned',
        body:
          'The result should point toward the stream direction that looks stronger for your current fit signals.',
      },
      {
        title: 'Why one stream is a better first bet than another',
        body:
          'The useful part is not only the answer but the trade-off logic behind it.',
      },
      {
        title: 'Whether you need broader student guidance next',
        body:
          'A stream test should also help show whether the decision is already clear enough or still needs the updated career guidance.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad stream-selection-test needs, it helps to compare the direct stream selector with the linked aptitude-first and broader school-stage options instead of forcing one test as the only answer.',
    faqItems: [
      {
        question: 'Is this only for after 10th?',
        answer:
          'Yes. This page points to the strongest free starting test for stream-choice decisions after Class 10.',
      },
      {
        question: 'Does it replace paid career guidance?',
        answer:
          'No. It is a strong first step when the main problem is stream choice. Broader guidance may still help if the bigger issue stays unclear afterward.',
      },
      {
        question: 'Can parents use this with students?',
        answer:
          'Yes. It can be a good neutral starting layer before parent-student disagreement gets heavier.',
      },
    ],
  },
  {
    slug: 'aptitude-test',
    hubGroup: 'skill',
    hubTitle: 'Aptitude Test',
    hubDescription:
      'A broad aptitude option for people who want a free first-fit test before choosing a course or training direction.',
    metaTitle: 'Aptitude Test | Free Career Aptitude Test | Future Career School',
    metaDescription:
      'Looking for an aptitude test for career direction? Start with a free career aptitude test from Future Career School and see your stronger skill-fit signals.',
    h1: 'Aptitude test',
    pill: 'Free aptitude-first career test',
    heroSub:
      'An aptitude test is useful when the real question is not only what you like, but what kinds of skills or problem patterns you handle more naturally. The better first step is a free test that turns those signals into direction.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['aptitude test', 'career aptitude test', 'free aptitude test for career'],
    fitTitle: 'When an aptitude test becomes the right first step',
    fitSubtitle:
      'Aptitude-first assessment helps most when you want stronger fit signals before choosing a course, degree, or training path.',
    fitItems: [
      {
        title: 'You want stronger skill-fit clues before committing',
        body:
          'Aptitude matters most when the next choice should be based on what your mind handles naturally, not only what sounds attractive.',
      },
      {
        title: 'You are comparing paths that need different strengths',
        body:
          'The right test should show whether your stronger signals sit more with analytical, verbal, logical, or other problem patterns.',
      },
      {
        title: 'You want a strong first filter before the updated career guidance',
        body:
          'A focused aptitude page is a practical first step when you do not want to pay for a bigger guidance process too early.',
      },
    ],
    decideTitle: 'What an aptitude test should actually help you understand',
    decideSubtitle:
      'The stronger outcome is not a score for ego. It is a clearer sense of which paths or courses deserve more serious attention next.',
    decideItems: [
      {
        title: 'Where your stronger skill patterns are',
        body:
          'The result should show which thinking or work patterns appear stronger right now.',
      },
      {
        title: 'Which course or training directions fit better',
        body:
          'A good aptitude result helps translate strengths into more usable study or work decisions.',
      },
      {
        title: 'What still needs the updated career guidance after the test',
        body:
          'Aptitude is one layer. A stronger test should still help you decide whether the path is already clear or still needs updated, skill-first guidance.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad aptitude-test needs, the Career Aptitude Test After 12th is the closest match because it focuses directly on skill-fit and strength patterns before bigger study decisions.',
    faqItems: [
      {
        question: 'Is an aptitude test only for students after 12th?',
        answer:
          'The strongest direct aptitude page here is the after-12th test, but the fuller student-stage assessments can help if your situation is earlier or more complex.',
      },
      {
        question: 'Does aptitude matter more than interest?',
        answer:
          'Both matter. Aptitude shows where your stronger problem patterns are. Interest shows where you are more likely to stay engaged. Good decisions usually need both.',
      },
      {
        question: 'Can a free aptitude test still help me choose better?',
        answer:
          'Yes. A strong free starting point can narrow fit and reduce random decisions before you pay for more help.',
      },
    ],
  },
  {
    slug: 'aptitude-test-for-students',
    hubGroup: 'skill',
    hubTitle: 'Aptitude Test for Students',
    hubDescription:
      'A student-focused aptitude page for people who want strength-fit clarity before degrees, courses, or training decisions.',
    metaTitle: 'Aptitude Test for Students | Free Student Aptitude Test | Future Career School',
    metaDescription:
      'Looking for an aptitude test for students? Start with a free student aptitude assessment from Future Career School and get clearer skill-fit direction.',
    h1: 'Aptitude test for students',
    pill: 'Free student aptitude and fit assessment',
    heroSub:
      'An aptitude test for students should help before a degree, course, or exam path becomes expensive. The real value is not only a score. It is a clearer sense of what kind of academic and career direction fits your stronger signals better.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'class10', 'class1112'],
    relatedPhrases: ['aptitude test for students', 'student aptitude test', 'free aptitude test for students'],
    fitTitle: 'When a student aptitude test becomes useful',
    fitSubtitle:
      'This matters most when the student decision is moving from broad curiosity into real academic or career commitment.',
    fitItems: [
      {
        title: 'You want to choose using stronger evidence',
        body:
          'Aptitude tests help when you want more than preference or outside pressure to drive the decision.',
      },
      {
        title: 'Several courses or roles look acceptable',
        body:
          'Aptitude becomes useful when the choice depends on which path really matches stronger natural skill patterns.',
      },
      {
        title: 'You need a free starting point before larger guidance',
        body:
          'A focused student aptitude page is a good starting step when you want clarity without paying too early.',
      },
    ],
    decideTitle: 'What a student aptitude test should actually improve',
    decideSubtitle:
      'The right result should change the quality of the decision, not just decorate it with another score.',
    decideItems: [
      {
        title: 'Course and degree fit',
        body:
          'You should get better signals on which study directions deserve more serious attention.',
      },
      {
        title: 'Skill direction from the beginning',
        body:
          'A stronger aptitude result helps you connect natural strengths to what you should start building earlier.',
      },
      {
        title: 'Confidence in the next academic move',
        body:
          'The test should make the next commitment feel more justified, not only more decorated.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For aptitude-test-for-students needs, the Career Aptitude Test After 12th is the closest focused match because it is built specifically around strength-fit before course and degree choice.',
    faqItems: [
      {
        question: 'Is this only useful after 12th?',
        answer:
          'The direct aptitude test here is the after-12th focused version. Earlier-stage students can still use the broader Class 10 or Class 11 to 12 assessments depending on their stage.',
      },
      {
        question: 'What makes aptitude useful for students?',
        answer:
          'It helps show which kinds of academic or work patterns fit more naturally before the student commits harder to one path.',
      },
      {
        question: 'Can parents use the result to compare options better?',
        answer:
          'Yes. Aptitude can give a stronger neutral starting point than only relying on pressure, brand names, or vague preferences.',
      },
    ],
  },
  {
    slug: 'skill-assessment',
    hubGroup: 'skill',
    hubTitle: 'Skill Assessment Test',
    hubDescription:
      'A skill-assessment option for people who want employability and readiness signals, not only interest-based advice.',
    metaTitle: 'Skill Assessment Test | Free Career Skill Assessment | Future Career School',
    metaDescription:
      'Looking for a skill assessment test? Start with a free career skill assessment from Future Career School and get clearer readiness and role-fit signals.',
    h1: 'Skill assessment test',
    pill: 'Free skill-fit and readiness assessment',
    heroSub:
      'A skill assessment test should help when the question is no longer only what interests you. It should help show whether your current profile is ready, under-leveraged, or still missing important signals for the kind of work you want next.',
    target: 'graduates',
    relatedTargets: ['graduates', 'professionals'],
    relatedPhrases: ['skill assessment test', 'career skill assessment', 'free skill assessment test'],
    fitTitle: 'When a skill assessment test becomes useful',
    fitSubtitle:
      'This kind of assessment matters most when employability, readiness, or role-fit is now part of the problem.',
    fitItems: [
      {
        title: 'You want more than interest clarity',
        body:
          'The stronger question becomes whether your current profile is ready enough for the kind of role you want.',
      },
      {
        title: 'You need a reality check on job readiness',
        body:
          'A skill assessment helps when you want to see what is strong, what is missing, and what needs building next.',
      },
      {
        title: 'You want a free first filter before larger guidance',
        body:
          'This is a good first step when you need readiness signals without paying before the gap is even clear.',
      },
    ],
    decideTitle: 'What a skill assessment test should actually show',
    decideSubtitle:
      'The stronger outcome is not only whether you are good at something. It is whether your current profile is strong enough for the direction you want next.',
    decideItems: [
      {
        title: 'Where your current profile is already useful',
        body:
          'The test should help show which strengths are already employable or transferable in practical ways.',
      },
      {
        title: 'Which gaps are slowing progress most',
        body:
          'A better assessment helps identify the missing layer that matters most instead of overwhelming you with every possible weakness.',
      },
      {
        title: 'What the next skill-building move should be',
        body:
          'The result should point to the next useful improvement, not leave you with a report that still needs translation.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For skill-assessment-test needs, the graduate and early professional assessment is the strongest fit because it covers role readiness, employability, and direction in one free assessment.',
    faqItems: [
      {
        question: 'Is this a career skill assessment or a technical skill test?',
        answer:
          'This page points to a career skill assessment focused on readiness, fit, and direction, not a narrow technical exam for one tool or subject.',
      },
      {
        question: 'Can this help if I am a fresher or recent graduate?',
        answer:
          'Yes. That is exactly why the graduate and early professional assessment is the best fit here.',
      },
      {
        question: 'What if I already know my interests but still feel underprepared?',
        answer:
          'That is where a skill-assessment angle becomes more useful than an interest-only test, because the real question becomes readiness and skill building.',
      },
    ],
  },
  {
    slug: 'personality-test-for-career',
    hubGroup: 'career',
    hubTitle: 'Personality Test for Career',
    hubDescription:
      'A personality-for-career option for people who want work-style and fit clues tied to real career direction.',
    metaTitle: 'Personality Test for Career | Free Career Personality Assessment | Future Career School',
    metaDescription:
      'Looking for a personality test for career decisions? Start with a free assessment from Future Career School and get clearer work-style and direction signals.',
    h1: 'Personality test for career',
    pill: 'Free career personality and work-style assessment',
    heroSub:
      'A personality test for career decisions is useful only if it improves real choices. The better version does not stop at a label. It helps connect work style, interests, and fit to the kind of roles or paths that deserve more serious effort.',
    target: 'personality',
    relatedTargets: ['personality', 'class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['personality test for career', 'career personality test', 'free personality career test', 'myers briggs career test'],
    fitTitle: 'When a personality test for career becomes useful',
    fitSubtitle:
      'This matters when you want clearer work-style signals before choosing a role direction, not just another label to read once.',
    fitItems: [
      {
        title: 'You want to know what kind of work environment fits better',
        body:
          'Personality-style input can help when the issue is not only ability, but how you naturally like to work and decide.',
      },
      {
        title: 'You want more than interest lists',
        body:
          'A better personality-for-career page should connect work style to actual direction, not keep it abstract.',
      },
      {
        title: 'You need a free starting point before the updated career guidance',
        body:
          'This can be a useful first step when you want clearer fit without paying for more than you need yet.',
      },
    ],
    decideTitle: 'What a personality test for career should actually clarify',
    decideSubtitle:
      'The stronger outcome is better work-fit understanding and clearer role direction, not only another personality code.',
    decideItems: [
      {
        title: 'How you are more likely to work well',
        body:
          'The test should show whether you lean toward structured, people-facing, analytical, exploratory, or other kinds of work environments.',
      },
      {
        title: 'Which kinds of roles are worth deeper attention',
        body:
          'A better result helps narrow the kinds of roles that align more naturally with your working style.',
      },
      {
        title: 'What still needs the updated career guidance after the test',
        body:
          'Personality is one layer. A strong page should still help you decide if the problem is already clear enough or needs deeper direction work.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'The Career Preference Type Test is the strongest direct fit because it explores four work-style preference pairs, shows how strong or balanced each preference is, and turns the profile into real career experiments instead of a fixed identity label.',
    faqItems: [
      {
        question: 'Does this work like MBTI or only personality typing?',
        answer:
          'The linked Career Preference Type Test explores four familiar preference pairs, but it is an independent assessment and not the official MBTI instrument. It reports preference strength, balanced dimensions, work-style implications, and practical career experiments instead of treating a type code as a career verdict.',
      },
      {
        question: 'Can a personality test alone choose my career?',
        answer:
          'No. Personality is one useful layer, but good career decisions usually also need interest, aptitude, and real-world direction clues.',
      },
      {
        question: 'Why use a free starting point here?',
        answer:
          'Because you should know whether work-style clarity is enough or whether the bigger issue still needs updated, skill-first guidance before paying for more.',
      },
    ],
  },
  {
    slug: 'career-guidance-test',
    hubGroup: 'career',
    hubTitle: 'Career Guidance Test',
    hubDescription:
      'A pre-guidance option for people who want a free test before moving into broader career guidance.',
    metaTitle: 'Career Guidance Test | Free Test Before Career Guidance | Future Career School',
    metaDescription:
      'Looking for a career guidance test? Start with a free assessment from Future Career School before moving into deeper career guidance.',
    h1: 'Career guidance test',
    pill: 'Free assessment before deeper career guidance',
    heroSub:
      'A career guidance test is usually the phrase people use when they want a lighter first step before the updated career guidance. The stronger version should narrow the problem enough that you know what needs solving first.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['career guidance test', 'career test for guidance', 'free career guidance test'],
    fitTitle: 'When a career guidance test becomes useful',
    fitSubtitle:
      'Use this when you know you need more clarity but are not yet sure whether you need paid guidance right away.',
    fitItems: [
      {
        title: 'You want a lower-pressure first step',
        body:
          'A free test is useful when you want to narrow the confusion before booking the updated career guidance.',
      },
      {
        title: 'You need to know what the real problem is first',
        body:
          'The question might be stream, degree, aptitude, work style, or role fit. A good test helps surface that.',
      },
      {
        title: 'You do not want to pay before the direction is clearer',
        body:
          'The right first layer helps you understand whether the updated career guidance is already necessary or not yet.',
      },
    ],
    decideTitle: 'What a career guidance test should actually do',
    decideSubtitle:
      'The useful outcome is not only a result page. It is a clearer sense of what kind of guidance would help most next.',
    decideItems: [
      {
        title: 'Narrow the biggest confusion first',
        body:
          'The test should help show whether the real issue is fit, aptitude, interests, or the next academic decision.',
      },
      {
        title: 'Give you a stronger first direction',
        body:
          'You should leave with better clues on what deserves more attention before the next commitment gets heavier.',
      },
      {
        title: 'Show what still needs the updated career guidance now',
        body:
          'A stronger test should make the next support decision easier, not harder.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For career-guidance-test needs, the Class 11 and 12 assessment is the strongest broad fit because it gives student-friendly clarity across interests, aptitude, and direction before paid guidance.',
    faqItems: [
      {
        question: 'Is a career guidance test the same as paid career guidance?',
        answer:
          'No. It is usually the lighter first layer people want before paid guidance. The value is in narrowing the problem first.',
      },
      {
        question: 'Can I use this before paying for counselling or guidance?',
        answer:
          'Yes. That is exactly why this kind of page is useful. It helps you decide whether paid guidance is already necessary.',
      },
      {
        question: 'Why does this page point to a free assessment first?',
        answer:
          'Because that is often the most practical first step when you want guidance but do not yet know which type of clarity you need most.',
      },
    ],
  },
  {
    slug: 'professional-skill-assessment',
    hubGroup: 'skill',
    hubTitle: 'Professional Skill Assessment',
    hubDescription:
      'A professional-skill page for working people who want leverage, readiness, and growth signals before a bigger move.',
    metaTitle: 'Professional Skill Assessment | Free Working Professional Skill Test | Future Career School',
    metaDescription:
      'Looking for a professional skill assessment? Start with a free working-professional assessment from Future Career School and get clearer leverage and growth signals.',
    h1: 'Professional skill assessment',
    pill: 'Free working-professional skill and growth assessment',
    heroSub:
      'A professional skill assessment should help when the real problem is not only what you know, but how under-leveraged your current profile feels. The useful outcome is a clearer growth move before more time compounds in the wrong direction.',
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
    relatedPhrases: ['professional skill assessment', 'professional skills test', 'career skill assessment for professionals'],
    fitTitle: 'When a professional skill assessment becomes useful',
    fitSubtitle:
      'This matters most when your role continues but the leverage, growth, or direction no longer feels strong enough.',
    fitItems: [
      {
        title: 'You feel skilled, but under-leveraged',
        body:
          'The assessment helps when the issue is not zero capability, but weak translation of your skills into stronger growth.',
      },
      {
        title: 'You are comparing a pivot, upskilling move, or salary-growth path',
        body:
          'A professional skill lens is useful when the career move affects compensation and longer-term optionality.',
      },
      {
        title: 'You want a strong first read before the updated career guidance',
        body:
          'The right first step helps you understand whether the issue is skills, positioning, or the direction itself.',
      },
    ],
    decideTitle: 'What a professional skill assessment should actually reveal',
    decideSubtitle:
      'The value is not only measuring what you can do. It is judging where your growth logic is still weak and what skill move is most worth making next.',
    decideItems: [
      {
        title: 'Which skills are already valuable but underused',
        body:
          'The assessment should help show where you already have leverage that is not being converted well into outcomes.',
      },
      {
        title: 'Which growth gaps matter most now',
        body:
          'A stronger result narrows the missing layer that is blocking better income or better role fit.',
      },
      {
        title: 'What the next leverage move should be',
        body:
          'The output should make the next skill, positioning, or pivot step easier to choose and justify.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For professional-skill-assessment needs, the working professional and career changer assessment is the strongest fit because it focuses on leverage, growth, and transition decisions rather than only student direction.',
    faqItems: [
      {
        question: 'Is this different from a generic skill test?',
        answer:
          'Yes. This page points to a career-skill assessment focused on leverage, direction, and growth value, not a narrow technical exam for one tool.',
      },
      {
        question: 'Can this help if I am not changing jobs yet?',
        answer:
          'Yes. It is useful even when the bigger issue is stagnation or weak growth logic inside the current role.',
      },
      {
        question: 'What if I need a pivot, not just a skill check?',
        answer:
          'That is exactly why this page points to the working-professional assessment, which also covers transition and readiness logic.',
      },
    ],
  },
  {
    slug: 'career-transition-assessment',
    hubGroup: 'skill',
    hubTitle: 'Career Transition Assessment',
    hubDescription:
      'A transition-focused option for professionals who need a lower-risk first step before a role or domain switch.',
    metaTitle: 'Career Transition Assessment | Free Career Change Assessment | Future Career School',
    metaDescription:
      'Looking for a career transition assessment? Start with a free transition-focused assessment from Future Career School and get clearer pivot signals.',
    h1: 'Career transition assessment',
    pill: 'Free transition and pivot assessment',
    heroSub:
      'A career transition assessment should help when staying put feels weak but switching blindly feels risky. Start with a free assessment that helps judge fit, leverage, and what makes a safer pivot.',
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
    relatedPhrases: ['career transition assessment', 'career change assessment', 'career pivot assessment'],
    fitTitle: 'When a career transition assessment becomes useful',
    fitSubtitle:
      'Use this when the current role no longer feels right, but the stronger move is still too unclear to trust yet.',
    fitItems: [
      {
        title: 'You feel pressure to pivot, but the direction is still fuzzy',
        body:
          'A transition assessment helps when the cost of guessing wrong now feels higher than before.',
      },
      {
        title: 'You want to compare staying, pivoting, or upskilling first',
        body:
          'The better question is not only whether to leave. It is what kind of move actually makes sense next.',
      },
      {
        title: 'You want a free starting point before bigger coaching or guidance',
        body:
          'This is useful when you need the problem framed properly before paying for a heavier process.',
      },
    ],
    decideTitle: 'What a career transition assessment should actually help you decide',
    decideSubtitle:
      'The useful output is a better pivot frame, not only more fear or more random options.',
    decideItems: [
      {
        title: 'Whether the problem is direction or positioning',
        body:
          'You should get clearer signals on whether the bigger issue is wrong fit, weak leverage, or poor market translation.',
      },
      {
        title: 'Which transition paths are less risky',
        body:
          'A better assessment helps narrow where your transferable strengths actually support a safer move.',
      },
      {
        title: 'What the next transition step should be',
        body:
          'The result should make the first pivot step easier to choose instead of keeping every idea alive at once.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For career-transition-assessment needs, the working professional and career changer assessment is the strongest fit because it focuses directly on pivots, leverage, and lower-risk career moves.',
    faqItems: [
      {
        question: 'Can this help even if I am not fully ready to quit yet?',
        answer:
          'Yes. A transition assessment is often most useful before you act, when the bigger need is a safer pivot frame rather than a rushed move.',
      },
      {
        question: 'Does this only help big industry changes?',
        answer:
          'No. It can also help with smaller but still meaningful transitions in role, function, or growth direction.',
      },
      {
        question: 'Why use a free transition assessment first?',
        answer:
          'Because it helps you frame the real transition problem before you commit money or time to a heavier process.',
      },
    ],
  },
  {
    slug: 'ai-career-readiness-test',
    hubGroup: 'skill',
    hubTitle: 'AI Career Readiness Test',
    hubDescription:
      'An AI-readiness option for professionals who want free signals on automation exposure and future skill direction.',
    metaTitle: 'AI Career Readiness Test | Free AI Career Assessment | Future Career School',
    metaDescription:
      'Looking for an AI career readiness test? Start with a free working-professional assessment from Future Career School and get clearer AI-era skill signals.',
    h1: 'AI career readiness test',
    pill: 'Free AI-era career readiness assessment',
    heroSub:
      'An AI career readiness test should help you judge whether your current skill stack is exposed, under-leveraged, or ready for stronger growth. Start with a free assessment that turns AI anxiety into a clearer career direction.',
    target: 'professionals',
    relatedTargets: ['graduates', 'professionals'],
    relatedPhrases: ['AI career readiness test', 'AI career assessment', 'automation risk career test'],
    fitTitle: 'When an AI career readiness test becomes useful',
    fitSubtitle:
      'This matters when you can feel the market shifting but still do not know whether the answer is upskilling, repositioning, or a bigger change.',
    fitItems: [
      {
        title: 'You feel AI pressure but do not know what to change first',
        body:
          'A good first step helps frame the problem before you panic-upskill into the wrong direction.',
      },
      {
        title: 'You want skill signals tied to real career growth',
        body:
          'The better question is not only what AI can do, but what you should build so your value grows instead of shrinking.',
      },
      {
        title: 'You want a free starting point before bigger guidance',
        body:
          'A readiness assessment helps you understand the real gap before you commit to a heavier change process.',
      },
    ],
    decideTitle: 'What an AI career readiness test should actually help you judge',
    decideSubtitle:
      'The useful outcome is not fear. It is a clearer read on where your current profile stands and what the next useful skill move is.',
    decideItems: [
      {
        title: 'Which parts of your current work are most exposed',
        body:
          'The test should help you think more clearly about routine work, leverage, and where your value can still compound.',
      },
      {
        title: 'What kind of skill direction improves resilience',
        body:
          'A better result points toward higher-value, less replaceable skill direction instead of random tool-chasing.',
      },
      {
        title: 'What the next practical move should be',
        body:
          'The assessment should make the first adaptation step easier to choose, whether that means upskilling, repositioning, or a bigger pivot.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For AI-career-readiness-test needs, the working professional and career changer assessment is the strongest fit because it already covers AI pressure, skill under-leverage, and career-transition logic.',
    faqItems: [
      {
        question: 'Is this only for tech workers?',
        answer:
          'No. AI-readiness pressure now affects many roles, not only technical ones, so the more useful question is what kind of leverage and skill direction still improves your value.',
      },
      {
        question: 'Can a free assessment really help with AI-career anxiety?',
        answer:
          'Yes. A useful first layer can reduce vague fear by making the next skill or positioning move clearer.',
      },
      {
        question: 'Does this replace deeper career guidance?',
        answer:
          'No. It is the first layer that helps show whether the issue is already clear enough to act on or still needs the updated career guidance.',
      },
    ],
  },
  {
    slug: 'career-test',
    hubGroup: 'career',
    hubTitle: 'Career Test',
    hubDescription:
      'A broad option for career test before deciding which free assessment fits their stage best.',
    metaTitle: 'Career Test | Free Career Test Online | Future Career School',
    metaDescription:
      'Looking for a career test? Start with a free career test from Future Career School and choose the assessment that best fits your stage, aptitude, and direction need.',
    h1: 'Career test',
    pill: 'Free career tests for students, graduates, and professionals',
    heroSub:
      'Many people start with a broad career test. The better first move is not guessing which test name sounds right. Start with the free assessment that best matches your stage, decision pressure, and the kind of clarity you actually need.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career test', 'career test online', 'free career test online'],
    fitTitle: 'When to use a broad career test',
    fitSubtitle:
      'Use this when the person knows the decision matters, but has not yet narrowed which type of test is most relevant.',
    fitItems: [
      {
        title: 'You want a free first step before paying anyone',
        body:
          'A broad career-test page should help you choose the right free assessment first instead of pushing you toward one generic report.',
      },
      {
        title: 'You are not sure whether the issue is fit, aptitude, or stage',
        body:
          'Start with the assessment that matches the student, graduate, professional, stream, or aptitude decision in front of you.',
      },
      {
        title: 'You want clarity before the next wrong turn gets expensive',
        body:
          'A stronger broad page should help reduce confusion into a smaller set of better next actions.',
      },
    ],
    decideTitle: 'What a career test should actually help you decide',
    decideSubtitle:
      'The value is not only getting a result. It is choosing the right starting test and then using that result to improve the next real decision.',
    decideItems: [
      {
        title: 'Which assessment fits your stage best',
        body:
          'The first useful answer is whether you need a school-stage, after-12th, graduate, or working-professional assessment.',
      },
      {
        title: 'Whether you need broad direction or narrower aptitude clarity',
        body:
          'Some people need a broad direction layer first. Others need a more specific stream or aptitude-first test.',
      },
      {
        title: 'What the next better step is after the test',
        body:
          'A useful career test page should make the stronger direction clearer instead of leaving you with another abstract label.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For very broad career-test needs, the Class 11 and 12 assessment is a strong first starting point because it gives a practical direction layer for many student and early-direction needs. But people should also compare the other free assessments below when their stage or decision is different.',
    faqItems: [
      {
        question: 'Is this page only for students?',
        answer:
          'No. This broad page exists to help students, graduates, and professionals choose the most relevant free career test for their current stage.',
      },
      {
        question: 'Do I need to take every test on this page?',
        answer:
          'No. The point is to choose the free assessment that best matches your stage and decision type, not to take every test blindly.',
      },
      {
        question: 'Are all of these career tests really free?',
        answer:
          'Yes. The existing assessments linked from this page are fully free.',
      },
    ],
  },
  {
    slug: 'free-career-test',
    hubGroup: 'career',
    hubTitle: 'Free Career Test',
    hubDescription:
      'A broad free-career-test option for people who want a no-cost online career test before paying for guidance or reports.',
    metaTitle: 'Free Career Test | 100% Free Career Test Online | Future Career School',
    metaDescription:
      'Looking for a free career test? Use the free online career tests from Future Career School and choose the right assessment for students, graduates, or professionals.',
    h1: 'Free career test',
    pill: '100% free online career tests',
    heroSub:
      'A free career test should help you move toward clarity without forcing you into payment first. Start with the right free test for your stage instead of taking a random one just because it is available.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['free career test', 'career test free', 'free online career test'],
    fitTitle: 'When a free career test becomes the right starting point',
    fitSubtitle:
      'Use this when you want a practical first layer before paying for a report, assessment package, or guidance session.',
    fitItems: [
      {
        title: 'You want clarity before spending money',
        body:
          'The right free test should help you narrow the real problem first instead of making you pay before the issue is even clear.',
      },
      {
        title: 'You want something more useful than a vague personality label',
        body:
          'A stronger free-career-test page should show you stage-relevant options, not just one decorative quiz.',
      },
      {
        title: 'You want a no-pressure way to start',
        body:
          'A good free first step gives you enough clarity to decide whether you need anything deeper next.',
      },
    ],
    decideTitle: 'What a free career test should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only that the test costs nothing. It is that your stronger direction becomes clearer and easier to judge.',
    decideItems: [
      {
        title: 'Choose the right assessment for your stage',
        body:
          'A free broad page should help you separate school-stage, after-12th, graduate, and professional assessment needs.',
      },
      {
        title: 'Reduce confusion before paying for more',
        body:
          'The right free test should help you decide whether the issue is direction, aptitude, readiness, or transition.',
      },
      {
        title: 'Move into the next useful step with less guesswork',
        body:
          'A stronger result helps you know what deserves more serious attention next.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-career-test needs, the Class 11 and 12 assessment is a strong starting point because it covers interests, aptitude, work style, and direction together. But people should compare the other free assessments below when their stage or decision is different.',
    faqItems: [
      {
        question: 'Are these career tests actually free or just a teaser?',
        answer:
          'They are fully free. The pages linked from here are free assessment paths, not paid teaser screens.',
      },
      {
        question: 'How do I choose which free career test to take?',
        answer:
          'Start by matching your stage and decision type. School students, after-12th students, graduates, and working professionals usually need different assessment starting points.',
      },
      {
        question: 'Can a free career test still be useful?',
        answer:
          'Yes. A good free starting point can narrow fit, strengths, and career direction before you spend anything on the updated career guidance.',
      },
    ],
  },
  {
    slug: 'career-aptitude-test',
    hubGroup: 'career',
    hubTitle: 'Career Aptitude Test',
    hubDescription:
      'A broad career-aptitude option for people who want aptitude-fit clarity before stream, degree, job, or skill decisions.',
    metaTitle: 'Career Aptitude Test | Free Aptitude Test for Career | Future Career School',
    metaDescription:
      'Looking for a career aptitude test? Use the free aptitude-focused assessment pages from Future Career School and choose the best fit for students, after-12th decisions, or role direction.',
    h1: 'Career aptitude test',
    pill: 'Free aptitude-focused career tests',
    heroSub:
      'A career aptitude test should help when the real question is not only what sounds attractive, but what your natural strength patterns make easier to grow into. Start with the aptitude path that fits your stage best.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['career aptitude test', 'aptitude test for career', 'career aptitude assessment'],
    fitTitle: 'When a career aptitude test becomes useful',
    fitSubtitle:
      'Aptitude matters most when the decision is getting expensive and you want stronger clues on natural strength-fit before committing harder.',
    fitItems: [
      {
        title: 'You want more than interest-based advice',
        body:
          'Aptitude tests become useful when the issue is understanding how your stronger skill patterns affect the paths you can grow in.',
      },
      {
        title: 'You are comparing stream, degree, or role options',
        body:
          'Aptitude input helps when you need to judge which options fit your natural strengths better instead of chasing what only sounds safe or popular.',
      },
      {
        title: 'You want a more practical first filter',
        body:
          'The right aptitude-first page should help you choose the most relevant free test for your current stage.',
      },
    ],
    decideTitle: 'What a career aptitude test should actually help you understand',
    decideSubtitle:
      'The stronger outcome is stronger fit logic around strengths, not only another broad preference label.',
    decideItems: [
      {
        title: 'Which strength patterns matter most now',
        body:
          'A stronger aptitude result should show which kinds of thinking, analysis, people work, or practical work come more naturally.',
      },
      {
        title: 'Which paths deserve more attention',
        body:
          'The test should help narrow which stream, degree, or work directions are more consistent with your current strength pattern.',
      },
      {
        title: 'Which aptitude page matches your stage best',
        body:
          'A school-stage student, after-12th student, graduate, and working professional often need different aptitude-related starting points.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-aptitude-test needs, the Career Aptitude Test After 12th is the closest focused match because it directly addresses aptitude-fit before course and degree decisions. But broader or earlier-stage people should compare the related aptitude assessments below.',
    faqItems: [
      {
        question: 'Is aptitude the same as interest?',
        answer:
          'No. Interests show what pulls you in. Aptitude helps show where your stronger natural skill patterns may give you a better growth base.',
      },
      {
        question: 'Should students and graduates use the same aptitude test?',
        answer:
          'Not always. Stage changes the decision, so the best aptitude-first page can be different for school students, after-12th students, and graduates.',
      },
      {
        question: 'Can an aptitude test decide my whole career?',
        answer:
          'No. It is one strong layer of clarity, but better decisions usually combine aptitude with interests, work style, and real-world direction signals.',
      },
    ],
  },
  {
    slug: 'free-psychometric-test',
    hubGroup: 'career',
    hubTitle: 'Free Psychometric Test',
    hubDescription:
      'A broad psychometric option for people who want a free personality, interest, aptitude, and work-style starting point.',
    metaTitle: 'Free Psychometric Test | Free Career Psychometric Assessment | Future Career School',
    metaDescription:
      'Looking for a free psychometric test? Start with the free psychometric-style career assessments from Future Career School and choose the one that fits your stage best.',
    h1: 'Free psychometric test',
    pill: 'Free psychometric-style assessment options',
    heroSub:
      'A free psychometric test should help you understand how you naturally think, work, and lean before bigger decisions harden. Start with the stage-specific assessment that gives the right psychometric layer.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['free psychometric test', 'free psychometric test for career', 'psychometric test free'],
    fitTitle: 'When a free psychometric test becomes useful',
    fitSubtitle:
      'Psychometric-style input is most useful when marks, opinions, and pressure are not enough to judge fit clearly.',
    fitItems: [
      {
        title: 'You want personality and interest input together',
        body:
          'A stronger psychometric page should not stop at one label. It should connect work style, interests, and aptitude signals better.',
      },
      {
        title: 'You want a free starting point before paying for reports',
        body:
          'Start with testing fit and direction without paying for something outdated or impractical too early.',
      },
      {
        title: 'You need a stage-relevant psychometric path',
        body:
          'School students, after-12th students, graduates, and professionals do not all need the same psychometric starting point.',
      },
    ],
    decideTitle: 'What a free psychometric test should actually help you see',
    decideSubtitle:
      'The value is not only self-description. It is getting a stronger read on fit, work style, and direction before bigger commitments.',
    decideItems: [
      {
        title: 'How you naturally prefer to work and decide',
        body:
          'A useful psychometric layer should make your work-style tendencies clearer in a career-relevant way.',
      },
      {
        title: 'Which directions fit more naturally',
        body:
          'The test should help narrow which paths deserve more attention instead of only giving you decorative labels.',
      },
      {
        title: 'Which psychometric page best matches your stage',
        body:
          'The right student, graduate, or professional psychometric layer depends on the actual decision in front of you.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-psychometric-test needs, the Class 11 and 12 assessment is a strong first starting point because it combines interests, aptitude, work style, and direction in one free layer. But People should compare the other psychometric-style assessment options below when the stage is different.',
    faqItems: [
      {
        question: 'Does a psychometric test only mean personality testing?',
        answer:
          'Not necessarily. A stronger career psychometric layer also connects interests, aptitude, work style, and direction.',
      },
      {
        question: 'Are these psychometric-style assessments free?',
        answer:
          'Yes. The linked assessments here are fully free.',
      },
      {
        question: 'How do I choose the right psychometric page?',
        answer:
          'Start by matching the page to your stage and current decision, not only to the broad psychometric label.',
      },
    ],
  },
  {
    slug: 'career-test-for-students',
    hubGroup: 'career',
    hubTitle: 'Career Test for Students',
    hubDescription:
      'A broad student-first option for school and after-12th students who need a free career test before larger education decisions.',
    metaTitle: 'Career Test for Students | Free Student Career Test | Future Career School',
    metaDescription:
      'Looking for a career test for students? Use the free student career tests from Future Career School and choose the right assessment for stream, aptitude, or after-12th direction.',
    h1: 'Career test for students',
    pill: 'Free student career tests across school and after-12th stages',
    heroSub:
      'A career test for students should help before stream, course, and degree decisions become expensive wrong turns. Start with the free student test that matches your stage and the kind of confusion you actually have.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career test for students', 'student career test', 'free career test for students'],
    fitTitle: 'When a student career test becomes useful',
    fitSubtitle:
      'This matters when school-stage decisions are getting serious and broad advice is no longer enough.',
    fitItems: [
      {
        title: 'You want a stage-relevant student test',
        body:
          'Students after Class 10, in Class 11 and 12, and after Class 12 often need different test starting points.',
      },
      {
        title: 'You need clarity before stream or course choices harden',
        body:
          'A stronger student page helps separate broad direction, aptitude, and stream-choice needs instead of mixing them all together.',
      },
      {
        title: 'You want a strong first filter before the updated career guidance',
        body:
          'The useful first layer should improve decision quality before you pay for anything heavier.',
      },
    ],
    decideTitle: 'What a career test for students should actually help with',
    decideSubtitle:
      'The stronger outcome is not only student self-awareness. It is a better academic and career decision before more time and money get wasted.',
    decideItems: [
      {
        title: 'Which student assessment fits your current stage',
        body:
          'The page should make it easier to choose between school-stage, after-10th, after-12th, and aptitude-first student tests.',
      },
      {
        title: 'Which options deserve more serious attention',
        body:
          'A better student result narrows the field before stream, course, or degree commitments get heavier.',
      },
      {
        title: 'What the next sensible step is after the test',
        body:
          'The outcome should make the next academic or skill decision easier to justify and discuss.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-test-for-students needs, the Class 11 and 12 assessment is the strongest general starting point because it covers interests, aptitude, learning style, and direction together. But students should compare the other student tests below when the stage or decision is narrower.',
    faqItems: [
      {
        question: 'Is this only for senior students?',
        answer:
          'No. This page includes student test options for earlier school stages, Class 11 and 12 students, and after-12th decision pressure as well.',
      },
      {
        question: 'Do students need one broad test or a specific stream or aptitude test?',
        answer:
          'That depends on the stage. Some students need a broad direction layer first, while others already need a narrower stream or aptitude-first test.',
      },
      {
        question: 'Are the student career tests free?',
        answer:
          'Yes. The student assessment pages linked here are fully free.',
      },
    ],
  },
  {
    slug: 'online-career-test',
    hubGroup: 'career',
    hubTitle: 'Online Career Test',
    hubDescription:
      'A broad online-career-test option for people who want free digital career tests instead of offline or expensive report-led options.',
    metaTitle: 'Online Career Test | Free Online Career Test | Future Career School',
    metaDescription:
      'Looking for a career test online? Use the free online career tests from Future Career School and choose the right assessment for your stage and decision type.',
    h1: 'Online career test',
    pill: 'Free online career tests across different stages',
    heroSub:
      'A career test online should give you useful clarity quickly, not only a long report or a paywall. Start with the online free assessment that best matches your stage, decision pressure, and current need.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career test online', 'online career test', 'free career test online'],
    fitTitle: 'When an online career test becomes useful',
    fitSubtitle:
      'Use this when you want a free online starting point without waiting for a longer offline process first.',
    fitItems: [
      {
        title: 'You want practical clarity without delay',
        body:
          'An online test becomes useful when the bigger decision already matters and you want a low-friction first step right now.',
      },
      {
        title: 'You want the right test, not only the nearest option',
        body:
          'The better online route is matching the need to the correct stage-based assessment instead of settling for whatever is most visible.',
      },
      {
        title: 'You want a free starting point before anything deeper',
        body:
          'A stronger online assessment page should help you narrow the real issue before you commit more money or time.',
      },
    ],
    decideTitle: 'What a career test online should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only instant access. It is choosing the right online assessment and getting a better decision from it.',
    decideItems: [
      {
        title: 'Choose the online test that fits your stage best',
        body:
          'The page should make school-stage, after-12th, graduate, and professional options easier to separate.',
      },
      {
        title: 'Reduce the wrong-kind-of-test problem',
        body:
          'A stronger online page should stop people from taking a narrow test when they really need a broader stage-specific assessment.',
      },
      {
        title: 'Move forward with less guesswork',
        body:
          'The right online first layer should improve clarity enough that the decision becomes easier to choose.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad online-career-test needs, the Class 11 and 12 assessment is a strong starting point because it works well as an online first layer for many student and early-direction needs. But broad online needers should compare the other free assessments below when their stage is different.',
    faqItems: [
      {
        question: 'Are these online career tests free?',
        answer:
          'Yes. The existing assessment pages linked here are fully free online assessment paths.',
      },
      {
        question: 'Do online career tests work only for students?',
        answer:
          'No. There are free online tests here for students, graduates, and working professionals depending on the decision you are trying to make.',
      },
      {
        question: 'How do I choose the right online test?',
        answer:
          'Start by matching the test to your stage and the kind of clarity you need most: broad direction, stream choice, aptitude, readiness, or transition.',
      },
    ],
  },
  {
    slug: 'skill-test',
    hubGroup: 'skill',
    hubTitle: 'Skill Test',
    hubDescription:
      'A broad skill-test option for people who want free readiness and role-fit signals rather than only interest-based direction.',
    metaTitle: 'Skill Test | Free Career Skill Test | Future Career School',
    metaDescription:
      'Looking for a skill test? Use the free career skill tests from Future Career School and choose the right assessment for readiness, employability, or professional growth.',
    h1: 'Skill test',
    pill: 'Free skill, readiness, and growth tests',
    heroSub:
      'A skill test should help when the issue is no longer only what interests you. It should help show whether your current profile is strong enough, under-leveraged, or still missing something important for the work you want next.',
    target: 'graduates',
    relatedTargets: ['graduates', 'professionals'],
    relatedPhrases: ['skill test', 'career skill test', 'professional skill test'],
    fitTitle: 'When a broad skill test becomes useful',
    fitSubtitle:
      'This matters when employability, readiness, leverage, or stronger skill direction is now part of the real problem.',
    fitItems: [
      {
        title: 'You want more than broad interest clarity',
        body:
          'Use skill-test when the stronger question is readiness, leverage, or role-fit rather than only preferences.',
      },
      {
        title: 'You need a practical reality check',
        body:
          'The test should help show what is already useful, what is weak, and what deserves more deliberate building next.',
      },
      {
        title: 'You want a free first filter before anything heavier',
        body:
          'A good first layer helps you frame the real problem before you overinvest in the wrong direction.',
      },
    ],
    decideTitle: 'What a skill test should actually help you understand',
    decideSubtitle:
      'The value is not only measuring ability. It is judging which skill gap or leverage gap matters most next.',
    decideItems: [
      {
        title: 'Whether the issue is readiness or positioning',
        body:
          'A stronger skill test helps show whether the bigger issue is weak capability, weak translation, or weak decision logic.',
      },
      {
        title: 'Which skill move deserves attention first',
        body:
          'The result should help narrow the next useful improvement instead of making every gap feel equally urgent.',
      },
      {
        title: 'Which assessment matches your current career stage',
        body:
          'Graduates and working professionals often need different skill-first starting points because the decision context is different.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad skill-test needs, the graduate and early professional assessment is a strong first fit because it covers readiness, employability, and role direction together. But People should compare the professional skill-focused option below when the issue is more about growth or transition inside work.',
    faqItems: [
      {
        question: 'Is this a technical skill test?',
        answer:
          'No. This is a broader career-skill and readiness layer, not a narrow technical exam for one software tool or subject.',
      },
      {
        question: 'Who should use a broad skill test page?',
        answer:
          'It is most useful for graduates, freshers, and working professionals who want clearer role-readiness or growth signals.',
      },
      {
        question: 'Are the skill-test pages free?',
        answer:
          'Yes. The linked skill-oriented assessment pages here are fully free.',
      },
    ],
  },
  {
    slug: 'free-skill-assessment',
    hubGroup: 'skill',
    hubTitle: 'Free Skill Assessment',
    hubDescription:
      'A broad free-skill-assessment option for people who want no-cost readiness and leverage signals before paying for bigger help.',
    metaTitle: 'Free Skill Assessment | Free Career Skill Assessment | Future Career School',
    metaDescription:
      'Looking for a free skill assessment? Use the free skill-focused assessment pages from Future Career School and choose the right one for readiness, growth, or transition clarity.',
    h1: 'Free skill assessment',
    pill: '100% free skill and readiness assessments',
    heroSub:
      'A free skill assessment should help you judge readiness, leverage, and readiness gaps before you pay for anything heavier. Start with the right free skill-focused assessment for your stage and career question.',
    target: 'graduates',
    relatedTargets: ['graduates', 'professionals'],
    relatedPhrases: ['free skill assessment', 'free career skill assessment', 'skill assessment free'],
    fitTitle: 'When a free skill assessment becomes useful',
    fitSubtitle:
      'This matters when you want a no-cost first layer before deciding whether you need updated, skill-first guidance, deeper upskilling, or a bigger pivot.',
    fitItems: [
      {
        title: 'You want a readiness filter before paying for more',
        body:
          'A free skill assessment is useful when you need the problem narrowed first instead of paying before the real gap is clear.',
      },
      {
        title: 'You want more than a generic strengths list',
        body:
          'The stronger version helps connect skills to readiness, growth logic, and role-fit rather than stopping at description.',
      },
      {
        title: 'You want to know whether the issue is leverage or direction',
        body:
          'A better free page helps separate under-preparation, under-leverage, and wrong-direction problems more clearly.',
      },
    ],
    decideTitle: 'What a free skill assessment should actually help you see',
    decideSubtitle:
      'The stronger outcome is not only that the assessment costs nothing. It is that your next readiness or growth move becomes clearer.',
    decideItems: [
      {
        title: 'Which strengths are already useful',
        body:
          'A stronger free skill layer should help show where your current profile already has practical value.',
      },
      {
        title: 'Which gaps matter most next',
        body:
          'The result should help narrow the missing layer that deserves attention first instead of overwhelming you with every possible weakness.',
      },
      {
        title: 'Which free skill-focused page fits better',
        body:
          'Graduates and working professionals often need different skill-oriented starting points depending on readiness versus leverage pressure.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-skill-assessment needs, the graduate and early professional assessment is a strong starting fit because it covers readiness, employability, and direction together. But People should compare the professional skill-focused assessment below when growth or transition pressure is stronger.',
    faqItems: [
      {
        question: 'Are these skill assessments fully free?',
        answer:
          'Yes. The linked skill-oriented assessment pages here are fully free.',
      },
      {
        question: 'Should graduates and working professionals use the same skill assessment?',
        answer:
          'Not always. The stage and decision context can change whether readiness or professional leverage is the bigger need.',
      },
      {
        question: 'Can a free skill assessment still be useful?',
        answer:
          'Yes. A strong free starting point can still make readiness, leverage, and readiness gaps much clearer before you spend money anywhere else.',
      },
    ],
  },
  {
    slug: 'online-career-assessment',
    hubGroup: 'career',
    hubTitle: 'Online Career Assessment',
    hubDescription:
      'A broad online-career-assessment option for people who want a free digital starting point before paying for reports or counselling.',
    metaTitle: 'Online Career Assessment | Free Online Career Assessment | Future Career School',
    metaDescription:
      'Looking for an online career assessment? Use the free online career assessment pages from Future Career School and choose the right one for your stage and decision.',
    h1: 'Online career assessment',
    pill: 'Free online assessments across school, graduate, and professional stages',
    heroSub:
      'An online career assessment should help you get useful clarity quickly, without turning the first step into a paywall. The better move is choosing the free online assessment that matches your stage and the kind of decision you actually need to make.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['online career assessment', 'career assessment online', 'online career assessment test'],
    fitTitle: 'When an online career assessment becomes useful',
    fitSubtitle:
      'Use this when you want a free digital starting point before paying for a report or waiting for a longer process.',
    fitItems: [
      {
        title: 'You want a low-friction first step',
        body:
          'An online assessment helps when the decision already matters and you want a practical first layer now, not after more delay.',
      },
      {
        title: 'You want the right assessment, not just the nearest one',
        body:
          'The stronger online route is choosing the stage-based assessment that matches your real question instead of taking whatever broad test appears first.',
      },
      {
        title: 'You want a free starting point before the updated career guidance',
        body:
          'A good online assessment should help narrow the real issue before you spend more time or money anywhere else.',
      },
    ],
    decideTitle: 'What an online career assessment should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only instant access. It is choosing the right online assessment and getting a better decision from it.',
    decideItems: [
      {
        title: 'Match the assessment to your stage',
        body:
          'School students, after-12th students, graduates, and working professionals usually need different starting points even when the need looks broad.',
      },
      {
        title: 'Avoid the wrong-test problem',
        body:
          'A stronger online page should stop you from taking a narrow stream or aptitude page when the real need is a broader stage assessment.',
      },
      {
        title: 'Move forward with less guesswork',
        body:
          'The right online first layer should reduce confusion enough that the stronger direction becomes easier to choose and justify.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad online-career-assessment needs, the Class 11 and 12 assessment is a strong starting point because it works well as a broad online first layer. But people should compare the other free assessments below when their stage is different.',
    faqItems: [
      {
        question: 'Are these online career assessment pages really free?',
        answer:
          'Yes. The assessment pages linked here are fully free online starting points.',
      },
      {
        question: 'Does online assessment work only for students?',
        answer:
          'No. There are online free assessment options here for students, graduates, and working professionals.',
      },
      {
        question: 'How should I choose the right online assessment?',
        answer:
          'Start by matching the page to your stage and your real decision: broad direction, stream choice, aptitude, role readiness, or transition pressure.',
      },
    ],
  },
  {
    slug: 'career-quiz',
    hubGroup: 'career',
    hubTitle: 'Career Quiz',
    hubDescription:
      'A broad career-quiz option for people who want a quick free career test before choosing a more specific assessment.',
    metaTitle: 'Career Quiz | Free Career Quiz and Test | Future Career School',
    metaDescription:
      'Looking for a career quiz? Use the free career quiz and assessment pages from Future Career School and choose the right test for your stage.',
    h1: 'Career quiz',
    pill: 'Free career quiz options across different stages',
    heroSub:
      'A career quiz should help you narrow the right direction, not only entertain you for two minutes. Start with the free quiz or assessment that matches your stage and the kind of confusion you actually have.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career quiz', 'career quiz free', 'career quiz india'],
    fitTitle: 'When a career quiz becomes useful',
    fitSubtitle:
      'Use this when you want a fast, low-friction first layer before moving into a more specific assessment or guidance step.',
    fitItems: [
      {
        title: 'You want a quick first filter',
        body:
          'A career quiz helps when you are still broad and need to reduce the field before deeper comparison starts.',
      },
      {
        title: 'You want something more useful than generic labels',
        body:
          'The stronger version should still connect the result to real stage-based assessments instead of ending with vague personality language.',
      },
      {
        title: 'You want a free first step before paying anything',
        body:
          'A better quiz page should make it easier to choose the right free assessment before you commit to anything heavier.',
      },
    ],
    decideTitle: 'What a career quiz should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only a label. It is clearer direction on which free assessment deserves your attention next.',
    decideItems: [
      {
        title: 'Choose the right next assessment',
        body:
          'A stronger quiz page should help separate broad student direction, aptitude-first, after-12th, graduate, and professional paths.',
      },
      {
        title: 'Reduce wasted clicks',
        body:
          'The page should make it easier to land on the right free test instead of taking one broad page that is not actually built for your stage.',
      },
      {
        title: 'Move with less uncertainty',
        body:
          'A stronger quiz experience should leave you with a clearer direction, not more tabs open and more confusion.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-quiz needs, the Class 11 and 12 assessment is a strong starting point because it covers interests, aptitude, learning style, and direction together. But broad quiz needers should compare the other free tests below when their stage is different.',
    faqItems: [
      {
        question: 'Is a career quiz the same as a career assessment?',
        answer:
          'People often use both phrases loosely. The better question is whether the page helps you choose the right free assessment for your stage and decision.',
      },
      {
        question: 'Are these career quiz pages free?',
        answer:
          'Yes. The linked quiz and assessment pages here are fully free.',
      },
      {
        question: 'Should students and professionals use the same career quiz?',
        answer:
          'Not always. The stronger path is matching the quiz or assessment to the stage and the kind of decision pressure you have right now.',
      },
    ],
  },
  {
    slug: 'career-quiz-for-students',
    hubGroup: 'career',
    hubTitle: 'Career Quiz for Students',
    hubDescription:
      'A student-first career-quiz page for school and after-12th students who want a quick free test before bigger education decisions.',
    metaTitle: 'Career Quiz for Students | Free Student Career Quiz | Future Career School',
    metaDescription:
      'Looking for a career quiz for students? Use the free student career quiz and assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Career quiz for students',
    pill: 'Free student quiz and assessment options',
    heroSub:
      'A career quiz for students should help before stream, course, and degree decisions become expensive wrong turns. Start with the free student test that matches your stage and what you are actually stuck on.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career quiz for students', 'career quiz for students free', 'student career quiz'],
    fitTitle: 'When a student career quiz becomes useful',
    fitSubtitle:
      'This matters when school-stage students want a faster first step before moving into deeper student assessment or guidance.',
    fitItems: [
      {
        title: 'You want a quick first layer before bigger decisions',
        body:
          'A student quiz is useful when stream, course, or degree pressure is rising but the direction is still broad.',
      },
      {
        title: 'You want the student-specific starting point',
        body:
          'The stronger student page should separate school-stage, after-10th, and after-12th options instead of mixing them all together.',
      },
      {
        title: 'You want a free starting point for parent-student discussion',
        body:
          'A practical quiz can create a better starting layer before opinions and pressure turn into repeated confusion.',
      },
    ],
    decideTitle: 'What a career quiz for students should actually help with',
    decideSubtitle:
      'The stronger outcome is not only student self-description. It is landing on the right student test before more time and money get wasted.',
    decideItems: [
      {
        title: 'Choose the right student test for your stage',
        body:
          'The page should make it easier to choose between school-stage, stream-selection, aptitude-first, and after-12th student paths.',
      },
      {
        title: 'Reduce wrong turns early',
        body:
          'A stronger student quiz helps narrow the field before course and stream choices harden into longer detours.',
      },
      {
        title: 'Give the next discussion better structure',
        body:
          'The right quiz page should make parent-student conversations easier because the next free test becomes clearer.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-quiz-for-students needs, the Class 11 and 12 assessment is the strongest general starting point because it covers student interests, aptitude, learning style, and direction together. But students should compare the narrower tests below when the stage is more specific.',
    faqItems: [
      {
        question: 'Is this only for Class 11 and 12 students?',
        answer:
          'No. This page also points students toward the right earlier or narrower tests when the issue is after-10th stream choice or aptitude fit.',
      },
      {
        question: 'Are the student career quiz pages free?',
        answer:
          'Yes. The linked student quiz and assessment pages are fully free.',
      },
      {
        question: 'Do students need one broad quiz or a more specific test?',
        answer:
          'That depends on the stage. Some students need a broad direction layer first, while others already need a stream or aptitude-specific test.',
      },
    ],
  },
  {
    slug: 'psychometric-test-for-career',
    hubGroup: 'career',
    hubTitle: 'Psychometric Test for Career',
    hubDescription:
      'A psychometric-test-for-career option for people who want career-fit clarity through personality, interests, and work-style signals.',
    metaTitle: 'Psychometric Test for Career | Free Career Psychometric Test | Future Career School',
    metaDescription:
      'Looking for a psychometric test for career direction? Start with the free psychometric-style career assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Psychometric test for career',
    pill: 'Free psychometric-style career-fit assessment options',
    heroSub:
      'A psychometric test for career decisions should help you connect personality, interests, work style, and fit to a real career decision. Start with choosing the free psychometric-style assessment that best matches your stage and the decision in front of you.',
    target: 'graduates',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['psychometric test for career', 'career psychometric test', 'psychometric career test'],
    fitTitle: 'When a psychometric test for career becomes useful',
    fitSubtitle:
      'This matters when marks, opinions, or job titles alone are not enough to judge fit and direction properly.',
    fitItems: [
      {
        title: 'You want more than grades or resume signals',
        body:
          'Psychometric-style input helps when the real need is understanding how your interests, work style, and preferences affect fit.',
      },
      {
        title: 'You want a career-relevant interpretation',
        body:
          'The stronger version is not only personality description. It should connect your signals to stage-appropriate direction and stronger decisions.',
      },
      {
        title: 'You want a free starting point before deeper help',
        body:
          'A good first step should help narrow whether the issue is broad fit, readiness, transition pressure, or a student-stage decision.',
      },
    ],
    decideTitle: 'What a psychometric test for career should actually help you understand',
    decideSubtitle:
      'The stronger outcome is not just that you learn a few traits. It is that your career decision becomes easier to judge.',
    decideItems: [
      {
        title: 'Which work environments fit better',
        body:
          'A strong psychometric layer should show what kinds of tasks, environments, and directions feel more natural for you.',
      },
      {
        title: 'Where your preferences and strengths support each other',
        body:
          'A better result helps you see when interest, aptitude, and work style reinforce each other instead of pulling in different directions.',
      },
      {
        title: 'Which stage-specific assessment deserves more attention',
        body:
          'The output should help you choose the right student, graduate, or professional assessment next instead of ending with a decorative label.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad psychometric-test-for-career needs, the graduate and early professional assessment is a strong starting point because it connects psychometric-style fit signals to role direction and readiness. But broader student and professional psychometric-style options are also worth comparing below.',
    faqItems: [
      {
        question: 'Does a psychometric test for career only mean personality testing?',
        answer:
          'No. The stronger version also connects interests, work style, aptitude-like signals, and direction instead of stopping at one personality label.',
      },
      {
        question: 'Can a free psychometric test still be useful for career decisions?',
        answer:
          'Yes. A strong free starting point can still help narrow fit and direction before you spend money on the updated career guidance.',
      },
      {
        question: 'Should students and professionals use the same psychometric page?',
        answer:
          'Not usually. The stage changes what kind of psychometric starting point is most useful, which is why the related free options below matter.',
      },
    ],
  },
  {
    slug: 'psychometric-test-for-students',
    hubGroup: 'career',
    hubTitle: 'Psychometric Test for Students',
    hubDescription:
      'A student psychometric-test page for people who want free personality, interest, work-style, and direction clarity before bigger study decisions.',
    metaTitle: 'Psychometric Test for Students | Free Student Psychometric Test | Future Career School',
    metaDescription:
      'Looking for a psychometric test for students? Use the free student psychometric-style assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Psychometric test for students',
    pill: 'Free student psychometric-style assessments',
    heroSub:
      'A psychometric test for students should help before stream, course, and degree decisions get heavier. Start with choosing the free student psychometric-style assessment that matches your stage and the kind of clarity you actually need.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['psychometric test for students', 'student psychometric test', 'free psychometric test for students'],
    fitTitle: 'When a psychometric test for students becomes useful',
    fitSubtitle:
      'This matters when marks and parent opinions alone are not enough to judge stream, course, or career direction clearly.',
    fitItems: [
      {
        title: 'You want more than marks-based decisions',
        body:
          'Psychometric-style input helps when academic performance alone is not enough to judge the next student path properly.',
      },
      {
        title: 'You want personality, interests, and work style together',
        body:
          'The useful version combines multiple student-fit signals instead of leaving the decision on one narrow factor.',
      },
      {
        title: 'You want a free first step before bigger student guidance',
        body:
          'A strong free layer can narrow the student decision before the family commits to heavier advice or wrong turns.',
      },
    ],
    decideTitle: 'What a psychometric test for students should actually help with',
    decideSubtitle:
      'The stronger outcome is not only self-description. It is getting to the right student test and clearer direction faster.',
    decideItems: [
      {
        title: 'Which student assessment fits your stage',
        body:
          'The page should help separate broader school-stage, stream-selection, after-12th, and aptitude-first student needs.',
      },
      {
        title: 'Which directions deserve more attention',
        body:
          'A stronger student psychometric page should narrow the field before more cost and confusion build up.',
      },
      {
        title: 'How to make the next discussion easier',
        body:
          'A stronger result should give students and parents a clearer base for discussing the stronger direction with less guesswork.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad psychometric-test-for-students needs, the Class 11 and 12 assessment is the strongest general starting point because it combines interests, aptitude, learning style, and direction together. But students should compare the stage-specific options below when the decision is narrower.',
    faqItems: [
      {
        question: 'Is this only for older students?',
        answer:
          'No. This page also points earlier-school students toward the right free psychometric-style assessment when stream pressure is still before Class 11.',
      },
      {
        question: 'Are the student psychometric pages free?',
        answer:
          'Yes. The linked student psychometric-style assessment pages are fully free.',
      },
      {
        question: 'Should students start with a broad assessment or a narrower stream or aptitude test?',
        answer:
          'That depends on the stage and the question. Some students need broad psychometric-style direction first, while others already need a narrower student test.',
      },
    ],
  },
  {
    slug: 'free-aptitude-test',
    hubGroup: 'skill',
    hubTitle: 'Free Aptitude Test',
    hubDescription:
      'A broad free-aptitude-test page for people who want a no-cost skill-fit starting point before choosing a course or training path.',
    metaTitle: 'Free Aptitude Test | Free Career Aptitude Test | Future Career School',
    metaDescription:
      'Looking for a free aptitude test? Use the free aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Free aptitude test',
    pill: '100% free aptitude-focused assessment options',
    heroSub:
      'A free aptitude test should help you understand skill-fit before more time or money gets wasted on the wrong path. The better move is choosing the free aptitude-focused assessment that matches your stage and decision pressure.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['free aptitude test', 'free aptitude test for career', 'free aptitude test for students'],
    fitTitle: 'When a free aptitude test becomes useful',
    fitSubtitle:
      'This matters when you want a no-cost first layer before moving into updated, skill-first guidance or choosing a course or stream too quickly.',
    fitItems: [
      {
        title: 'You want a skill-fit filter before committing',
        body:
          'A free aptitude page helps when the bigger decision should be based on natural strength patterns, not only what sounds attractive.',
      },
      {
        title: 'You want a more practical start than vague labels',
        body:
          'A stronger aptitude first step should connect strengths to real student or after-12th choices instead of only giving a raw score.',
      },
      {
        title: 'You want the right aptitude page for your stage',
        body:
          'Aptitude needs differ between after-10th stream pressure, after-12th course choice, and broader student direction questions.',
      },
    ],
    decideTitle: 'What a free aptitude test should actually help you see',
    decideSubtitle:
      'The stronger outcome is not only that the test costs nothing. It is that the decision becomes more evidence-based.',
    decideItems: [
      {
        title: 'Where your stronger problem patterns are',
        body:
          'The page should help narrow whether your stronger signals sit with the kinds of tasks and courses you are considering.',
      },
      {
        title: 'Which aptitude page fits your stage better',
        body:
          'A broader free aptitude need should make it easier to separate after-10th and after-12th paths instead of forcing one page on everyone.',
      },
      {
        title: 'Whether broader direction is still needed',
        body:
          'The result should also help show whether the real issue is only aptitude or a broader student direction problem.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-aptitude-test needs, the Career Aptitude Test After 12th is the strongest starting point because it focuses directly on skill-fit and strength patterns. But People should compare the other free aptitude-related pages below when the stage is earlier or broader.',
    faqItems: [
      {
        question: 'Are these aptitude tests fully free?',
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: 'Should students after 10th and after 12th use the same aptitude page?',
        answer:
          'Not always. The stage changes the decision, which is why the narrower after-10th and after-12th aptitude pages are both shown below.',
      },
      {
        question: 'Can a free aptitude test still help with real decisions?',
        answer:
          'Yes. A strong free starting point can still narrow fit and reduce random choices before you pay for the updated career guidance.',
      },
    ],
  },
  {
    slug: 'aptitude-test-for-career',
    hubGroup: 'skill',
    hubTitle: 'Aptitude Test for Career',
    hubDescription:
      'A broad aptitude-test-for-career page for people who want stronger skill-fit signals before choosing a study or career direction.',
    metaTitle: 'Aptitude Test for Career | Free Career Aptitude Test | Future Career School',
    metaDescription:
      'Looking for an aptitude test for career direction? Use the free aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Aptitude test for career',
    pill: 'Free aptitude and career-fit assessment options',
    heroSub:
      'An aptitude test for career decisions should help you judge where your stronger natural patterns sit before more time and money get wasted. Start with choosing the free aptitude-focused assessment that matches your stage and the decision in front of you.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['aptitude test for career', 'career aptitude test for students', 'career aptitude test online'],
    fitTitle: 'When an aptitude test for career becomes useful',
    fitSubtitle:
      'This matters when the next study or work decision should be based on stronger fit signals, not only on what sounds attractive or familiar.',
    fitItems: [
      {
        title: 'You want stronger evidence before choosing',
        body:
          'An aptitude-first page helps when the decision should be shaped by natural strength patterns, not only by interest or pressure.',
      },
      {
        title: 'You need course or stream choices separated better',
        body:
          'The stronger version should help show whether the right starting point is after-10th, after-12th, or a broader student assessment.',
      },
      {
        title: 'You want a free first step before heavier support',
        body:
          'A good aptitude page should narrow the fit question before you spend more money or time elsewhere.',
      },
    ],
    decideTitle: 'What an aptitude test for career should actually help you understand',
    decideSubtitle:
      'The stronger outcome is not a score alone. It is clearer skill-fit direction and a better next choice.',
    decideItems: [
      {
        title: 'Which strengths matter most right now',
        body:
          'The page should help narrow which natural patterns deserve more weight in the next stream, course, or training decision.',
      },
      {
        title: 'Which stage-specific aptitude page fits better',
        body:
          'The useful path should make it easier to choose between the narrower after-10th, after-12th, and broader student layers.',
      },
      {
        title: 'Whether aptitude is the whole issue',
        body:
          'A stronger page should also help you see when the real problem is broader direction, not aptitude alone.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad aptitude-test-for-career needs, the Career Aptitude Test After 12th is the strongest direct fit because it focuses on skill-fit and strength patterns before larger study decisions. But People should compare the related aptitude pages below when their stage is earlier or broader.',
    faqItems: [
      {
        question: 'Does aptitude matter more than interest in career decisions?',
        answer:
          'Both matter. Aptitude shows stronger natural problem patterns. Interest shows where you are more likely to stay engaged. Better decisions usually need both.',
      },
      {
        question: 'Are these aptitude-focused career pages free?',
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: 'Can aptitude still help if I am not fully sure about the path yet?',
        answer:
          'Yes. It can help narrow fit, but the page should also point you toward broader direction layers if aptitude alone is not enough.',
      },
    ],
  },
  {
    slug: 'aptitude-test-online',
    hubGroup: 'skill',
    hubTitle: 'Aptitude Test Online',
    hubDescription:
      'A broad aptitude-test-online page for people who want a free digital skill-fit test before choosing a course, stream, or training path.',
    metaTitle: 'Aptitude Test Online | Free Online Aptitude Test | Future Career School',
    metaDescription:
      'Looking for an aptitude test online? Use the free online aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Aptitude test online',
    pill: 'Free online aptitude-focused assessments',
    heroSub:
      'An aptitude test online should help you get useful skill-fit signals quickly, not only push you into a longer paid process. Start with the free online aptitude-focused assessment that matches your stage and the decision you need to make now.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['aptitude test online', 'free aptitude test online', 'online aptitude test for career'],
    fitTitle: 'When an online aptitude test becomes useful',
    fitSubtitle:
      'This matters when you want a low-friction first layer before choosing a stream, course, degree, or training direction.',
    fitItems: [
      {
        title: 'You want fast skill-fit clarity',
        body:
          'An online aptitude page helps when the decision already matters and you want practical signals now instead of waiting for a longer process.',
      },
      {
        title: 'You want the right stage-based aptitude page',
        body:
          'The stronger online route should separate after-10th, after-12th, and broader student-fit assessment needs more clearly.',
      },
      {
        title: 'You want a free start before paying for the updated career guidance',
        body:
          'A useful online page should narrow the aptitude question before you commit more money or time anywhere else.',
      },
    ],
    decideTitle: 'What an aptitude test online should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only instant access. It is choosing the right aptitude page and getting a clearer decision from it.',
    decideItems: [
      {
        title: 'Pick the right online aptitude page first',
        body:
          'The page should make it easier to decide whether you need after-10th, after-12th, or broader student-fit assessment next.',
      },
      {
        title: 'Avoid the wrong-test problem',
        body:
          'A stronger online aptitude page should stop people from taking a broad direction test when the real need is narrower skill-fit clarity.',
      },
      {
        title: 'Move forward with less waste',
        body:
          'The right online aptitude first layer should reduce wasted time and make the next choice easier to justify.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad aptitude-test-online needs, the Career Aptitude Test After 12th is the strongest direct fit because it works well as an online strength-fit starting point. But People should compare the related aptitude pages below when the stage is earlier or broader.',
    faqItems: [
      {
        question: 'Are these online aptitude pages free?',
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: 'Should after-10th and after-12th students take the same online aptitude test?',
        answer:
          'Not always. The stage changes the decision, which is why both narrower options are shown here.',
      },
      {
        question: 'Can an online aptitude test still be useful without counselling first?',
        answer:
          'Yes. A good online first layer can still narrow skill-fit and make the next guidance step easier to judge.',
      },
    ],
  },
  {
    slug: 'career-assessment-test-free',
    hubGroup: 'career',
    hubTitle: 'Career Assessment Test Free',
    hubDescription:
      'A broad free career-assessment-test page for people who want a no-cost first layer before paying for reports or counselling.',
    metaTitle: 'Career Assessment Test Free | Free Career Assessment Test | Future Career School',
    metaDescription:
      'Looking for a career assessment test free of cost? Use the free career assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Career assessment test free',
    pill: '100% free career assessment options',
    heroSub:
      'A career assessment test free of cost should still help you make a better decision, not only save money. Start with the free assessment that matches your stage and the kind of clarity you actually need.',
    target: 'graduates',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals', 'stream10', 'aptitude10', 'stream12', 'aptitude12'],
    relatedPhrases: ['career assessment test free', 'free career assessment test', 'career assessment free online'],
    fitTitle: 'When a free career assessment test becomes useful',
    fitSubtitle:
      'Use this when you want a no-cost first layer before paying for a report that may still leave the real decision unclear.',
    fitItems: [
      {
        title: 'You want a practical first filter before paying anyone',
        body:
          'A free page helps when you want to narrow the real issue first instead of paying too early for vague advice or decorative reports.',
      },
      {
        title: 'You want more than a label',
        body:
          'The stronger version should connect fit, strengths, and direction to the next sensible step instead of stopping at one profile summary.',
      },
      {
        title: 'You want the right free assessment for your stage',
        body:
          'a broad free assessment need should still separate school-stage, graduate, and professional starting points more honestly.',
      },
    ],
    decideTitle: 'What a free career assessment test should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only that the test costs nothing. It is that your decision becomes easier to judge.',
    decideItems: [
      {
        title: 'Choose the right free assessment first',
        body:
          'The page should make it easier to choose the stage-appropriate test instead of forcing everyone into one broad generic route.',
      },
      {
        title: 'Reduce wasted time and clicks',
        body:
          'A stronger page should help you avoid taking the wrong free test when the real need is a different stage or narrower question.',
      },
      {
        title: 'Know whether the updated career guidance is even needed',
        body:
          'A good free starting point should also help show whether the issue is already clear enough or still needs updated, skill-first guidance afterward.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-assessment-test-free needs, the graduate and early professional assessment is a strong starting point because it covers clarity, role fit, and readiness together. But broad free needers should compare the related assessments below when their stage is different.',
    faqItems: [
      {
        question: 'Are these free career assessment pages really free?',
        answer:
          'Yes. The linked assessment pages here are fully free.',
      },
      {
        question: 'Can a free career assessment still be useful?',
        answer:
          'Yes. A strong free starting point can still narrow fit, strengths, and direction before you decide whether the updated career guidance is worth it.',
      },
      {
        question: 'How do I choose the right free assessment page?',
        answer:
          'Start by matching the assessment to your stage and your real decision instead of only to the broad phrase you needed.',
      },
    ],
  },
  {
    slug: 'career-aptitude-test-free',
    hubGroup: 'skill',
    hubTitle: 'Career Aptitude Test Free',
    hubDescription:
      'A free career-aptitude-test page for people who want no-cost strength-fit clarity before stream, course, or degree decisions.',
    metaTitle: 'Career Aptitude Test Free | Free Career Aptitude Test | Future Career School',
    metaDescription:
      'Looking for a career aptitude test free of cost? Use the free aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Career aptitude test free',
    pill: '100% free aptitude-focused career test options',
    heroSub:
      'A career aptitude test free of cost should still help you understand where your stronger natural patterns sit before more time and money get wasted. Start with choosing the free aptitude-focused page that matches your stage.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['career aptitude test free', 'free career aptitude test', 'career aptitude test free for students'],
    fitTitle: 'When a free career aptitude test becomes useful',
    fitSubtitle:
      'This matters when you want a no-cost first layer before committing to stream, course, degree, or training choices too early.',
    fitItems: [
      {
        title: 'You want strength-fit clarity before committing',
        body:
          'A free aptitude page helps when the decision should be shaped by natural patterns, not only by interest or outside pressure.',
      },
      {
        title: 'You want a practical start instead of a vague report',
        body:
          'The stronger version should connect aptitude signals to real student and after-12th choices instead of leaving you with a raw score only.',
      },
      {
        title: 'You want the right aptitude page for your stage',
        body:
          'Aptitude questions differ between after-10th stream pressure, after-12th course choice, and broader student direction problems.',
      },
    ],
    decideTitle: 'What a free career aptitude test should actually help you see',
    decideSubtitle:
      'The stronger outcome is not only that the test is free. It is that the decision becomes more evidence-based.',
    decideItems: [
      {
        title: 'Where your stronger patterns are',
        body:
          'The result should help narrow which kinds of tasks and paths fit your stronger natural signals better.',
      },
      {
        title: 'Which stage-specific aptitude page fits better',
        body:
          'A broader need should still make it easier to separate after-10th and after-12th routes instead of forcing one page on everyone.',
      },
      {
        title: 'Whether broader direction is still needed',
        body:
          'The page should also help show whether the real issue is only aptitude or a broader student-direction problem.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-aptitude-test-free needs, the Career Aptitude Test After 12th is the strongest direct fit because it focuses on skill-fit and strength patterns. But People should compare the related aptitude pages below when the stage is earlier or broader.',
    faqItems: [
      {
        question: 'Is this aptitude test really free?',
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: 'Should after-10th and after-12th students use the same aptitude page?',
        answer:
          'Not always. The stage changes the decision, which is why both narrower options are shown below.',
      },
      {
        question: 'Can a free aptitude test still help with real decisions?',
        answer:
          'Yes. A strong free starting point can still reduce random choices before you pay for anything heavier.',
      },
    ],
  },
  {
    slug: 'online-career-aptitude-test',
    hubGroup: 'skill',
    hubTitle: 'Online Career Aptitude Test',
    hubDescription:
      'An online career-aptitude-test page for people who want fast digital strength-fit clarity before bigger education decisions.',
    metaTitle: 'Online Career Aptitude Test | Free Online Career Aptitude Test | Future Career School',
    metaDescription:
      'Looking for a career aptitude test online? Use the free online aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Online career aptitude test',
    pill: 'Free online aptitude-focused career tests',
    heroSub:
      'A career aptitude test online should help you get useful strength-fit signals quickly, not only push you into a longer paid process. Start with the free online aptitude assessment that matches your stage and current decision.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['career aptitude test online', 'career aptitude test online free', 'online career aptitude test'],
    fitTitle: 'When an online career aptitude test becomes useful',
    fitSubtitle:
      'This matters when you want a low-friction first layer before choosing a stream, course, degree, or training direction.',
    fitItems: [
      {
        title: 'You want quick strength-fit clarity',
        body:
          'An online aptitude page helps when the decision already matters and you want useful signals now instead of waiting for a longer process.',
      },
      {
        title: 'You want the right stage-based aptitude path',
        body:
          'The stronger online route should separate after-10th, after-12th, and broader student-fit needs more clearly.',
      },
      {
        title: 'You want a free first step before heavier support',
        body:
          'A useful online aptitude page should narrow the question before you commit more money or time elsewhere.',
      },
    ],
    decideTitle: 'What an online career aptitude test should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only instant access. It is choosing the right aptitude page and getting a clearer decision from it.',
    decideItems: [
      {
        title: 'Pick the right online aptitude page first',
        body:
          'The page should make it easier to decide whether you need after-10th, after-12th, or broader student-fit assessment next.',
      },
      {
        title: 'Avoid the wrong-test problem',
        body:
          'A stronger online page should stop people from taking a broad direction page when the real need is narrower aptitude clarity.',
      },
      {
        title: 'Move with less waste',
        body:
          'The right online aptitude first layer should reduce wasted time and make the next choice easier to justify.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad online-career-aptitude-test needs, the Career Aptitude Test After 12th is the strongest direct fit because it works well as an online strength-fit starting point. But People should compare the related aptitude pages below when the stage is earlier or broader.',
    faqItems: [
      {
        question: 'Are these online aptitude pages free?',
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: 'Should after-10th and after-12th students take the same online aptitude page?',
        answer:
          'Not always. The stage changes the decision, which is why both narrower options are shown here.',
      },
      {
        question: 'Can an online aptitude test still be useful without counselling first?',
        answer:
          'Yes. A strong online first layer can still narrow skill-fit and make the stronger direction easier to judge.',
      },
    ],
  },
  {
    slug: 'career-aptitude-test-for-students',
    hubGroup: 'skill',
    hubTitle: 'Career Aptitude Test for Students',
    hubDescription:
      'A student aptitude page for school and after-12th students who want free strength-fit clarity before bigger study decisions.',
    metaTitle: 'Career Aptitude Test for Students | Free Student Aptitude Test | Future Career School',
    metaDescription:
      'Looking for a career aptitude test for students? Use the free student aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Career aptitude test for students',
    pill: 'Free student aptitude and fit assessment options',
    heroSub:
      'A career aptitude test for students should help before stream, course, and degree choices become expensive wrong turns. Start with the free student aptitude assessment that matches your stage and the kind of decision in front of you.',
    target: 'class1112',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112', 'stream10', 'stream12'],
    relatedPhrases: ['career aptitude test for students', 'career aptitude test for students free', 'student aptitude test for career'],
    fitTitle: 'When a student career aptitude test becomes useful',
    fitSubtitle:
      'This matters when students need stronger fit signals before stream, course, or degree decisions harden.',
    fitItems: [
      {
        title: 'You want more than marks-based decisions',
        body:
          'A student aptitude page helps when academic performance alone is not enough to judge the next path properly.',
      },
      {
        title: 'You want a stage-relevant aptitude path',
        body:
          'The stronger student route should separate after-10th, after-12th, and broader direction needs instead of mixing them all together.',
      },
      {
        title: 'You want a strong first filter before the updated career guidance',
        body:
          'A strong free aptitude layer can narrow the question before the family commits to heavier support or wrong turns.',
      },
    ],
    decideTitle: 'What a student career aptitude test should actually help with',
    decideSubtitle:
      'The stronger outcome is not only a score. It is getting students to the right test and clearer direction faster.',
    decideItems: [
      {
        title: 'Which student aptitude page fits your stage',
        body:
          'The page should help separate broader school-stage, after-10th, after-12th, and stream-linked student needs.',
      },
      {
        title: 'Which paths deserve more serious attention',
        body:
          'A stronger student aptitude page should narrow the field before more cost and confusion build up.',
      },
      {
        title: 'How to make the next discussion easier',
        body:
          'A stronger result should give students and parents a clearer base for discussing the stronger direction with less guesswork.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad career-aptitude-test-for-students needs, the Class 11 and 12 assessment is a strong broad starting point because it combines aptitude, interests, learning style, and direction together. But students should compare the narrower aptitude and stream pages below when the stage is more specific.',
    faqItems: [
      {
        question: 'Is this only for older students?',
        answer:
          'No. This page also points earlier-school students toward the right free aptitude and stream-fit pages when the pressure starts before Class 11.',
      },
      {
        question: 'Are the student aptitude pages free?',
        answer:
          'Yes. The linked student aptitude-focused assessment pages are fully free.',
      },
      {
        question: 'Should students start with a broad assessment or a narrower aptitude test?',
        answer:
          'That depends on the stage and question. Some students need broader direction first, while others already need a narrower aptitude-first page.',
      },
    ],
  },
  {
    slug: 'psychometric-test-online-free',
    hubGroup: 'career',
    hubTitle: 'Psychometric Test Online Free',
    hubDescription:
      'A free online psychometric-test page for people who want personality, interest, and work-style clarity without paying first.',
    metaTitle: 'Psychometric Test Online Free | Free Online Psychometric Test | Future Career School',
    metaDescription:
      'Looking for a psychometric test online free? Use the free psychometric-style assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Psychometric test online free',
    pill: '100% free online psychometric-style assessments',
    heroSub:
      'A psychometric test online free of cost should still help you make a better decision, not only give you a label. Start with choosing the free psychometric-style page that matches your stage and the decision you actually need to make.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['psychometric test online free', 'free online psychometric test', 'psychometric test online free for career'],
    fitTitle: 'When a free online psychometric test becomes useful',
    fitSubtitle:
      'This matters when you want a no-cost digital first step before paying for reports or heavier guidance.',
    fitItems: [
      {
        title: 'You want psychometric input without a paywall',
        body:
          'A free online page helps when you want a first layer of fit and work-style clarity before spending money anywhere else.',
      },
      {
        title: 'You want more than a decorative personality label',
        body:
          'The stronger version should connect interests, work style, and direction to a real career decision instead of stopping at description.',
      },
      {
        title: 'You want the right psychometric page for your stage',
        body:
          'a broad online psychometric need should still separate school-stage, graduate, and professional routes more honestly.',
      },
    ],
    decideTitle: 'What a free online psychometric test should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only that it is online and free. It is that the decision becomes easier to judge.',
    decideItems: [
      {
        title: 'Choose the right psychometric page first',
        body:
          'The page should make it easier to land on the stage-appropriate psychometric-style assessment instead of forcing everyone into one route.',
      },
      {
        title: 'Reduce random test-taking',
        body:
          'A stronger page should help you avoid taking a narrow or wrong-stage psychometric page when a different one is a better fit.',
      },
      {
        title: 'Know what still needs the updated career guidance',
        body:
          'A good free psychometric layer should also show whether the issue is already clearer or still needs the updated career guidance later.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad psychometric-test-online-free needs, the Class 11 and 12 assessment is a strong starting point because it combines interests, aptitude, work style, and direction in one free online layer. But People should compare the related psychometric-style options below when the stage is different.',
    faqItems: [
      {
        question: 'Are these online psychometric pages really free?',
        answer:
          'Yes. The linked psychometric-style assessment pages here are fully free.',
      },
      {
        question: 'Does a free online psychometric test only mean personality testing?',
        answer:
          'No. The stronger version also connects interests, work style, and direction in a more career-relevant way.',
      },
      {
        question: 'How should I choose the right psychometric page?',
        answer:
          'Start by matching the assessment to your stage and the decision you need to make, not only to the broad term psychometric.',
      },
    ],
  },
  {
    slug: 'psychometric-test-for-career-counselling',
    hubGroup: 'career',
    hubTitle: 'Psychometric Test for Career Counselling',
    hubDescription:
      'A psychometric-test-for-career-counselling page for people who want a practical testing layer before or alongside broader career guidance.',
    metaTitle: 'Psychometric Test for Career Counselling | Free Career Counselling Test | Future Career School',
    metaDescription:
      'Looking for a psychometric test for career counselling? Use the free psychometric-style assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Psychometric test for career counselling',
    pill: 'Free psychometric-style assessment before the updated career guidance',
    heroSub:
      'A psychometric test for career counselling should make updated, skill-first career guidance stronger, not replace it with a decorative report. Start with the free psychometric-style assessment that gives the right first layer for your stage.',
    target: 'class1112',
    relatedTargets: ['class10', 'class1112', 'graduates', 'professionals'],
    relatedPhrases: ['psychometric test for career counselling', 'career counselling psychometric test', 'psychometric assessment for career counselling'],
    fitTitle: 'When a psychometric test for career counselling becomes useful',
    fitSubtitle:
      'This matters when you want the testing layer to make the updated career guidance stronger instead of becoming a dead-end report.',
    fitItems: [
      {
        title: 'You want better input before guidance',
        body:
          'A psychometric assessment helps when the counselling conversation should start with stronger fit signals instead of only opinions.',
      },
      {
        title: 'You want more than one narrow label',
        body:
          'The stronger version should connect interests, work style, aptitude-like signals, and direction to make counselling more useful.',
      },
      {
        title: 'You want the right counselling test for your stage',
        body:
          'a broad counselling-test need should still separate student, graduate, and professional psychometric starting points honestly.',
      },
    ],
    decideTitle: 'What a psychometric test for career counselling should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only a report. It is a stronger base for updated guidance or a stronger decision.',
    decideItems: [
      {
        title: 'Give the next guidance step better input',
        body:
          'The page should help make the next career discussion more specific by narrowing interests, fit, and work-style signals first.',
      },
      {
        title: 'Choose the right psychometric route for your stage',
        body:
          'The stronger path should help you land on the student, graduate, or professional psychometric page that fits the real decision better.',
      },
      {
        title: 'Reduce guesswork before paying for more',
        body:
          'A good free testing layer should help show what still needs the updated career guidance before you commit more money or time.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad psychometric-test-for-career-counselling needs, the Class 11 and 12 assessment is a strong first layer because it combines psychometric-style signals in one practical student-friendly route. But broader graduate and professional psychometric-style options are also worth comparing below.',
    faqItems: [
      {
        question: 'Should psychometric testing replace career counselling?',
        answer:
          'No. The stronger role of psychometric-style testing is improving the counselling conversation by adding better fit signals, not replacing human judgment entirely.',
      },
      {
        question: 'Are these psychometric counselling pages free?',
        answer:
          'Yes. The linked psychometric-style assessment pages here are fully free.',
      },
      {
        question: 'Can graduates and professionals use these pages too?',
        answer:
          'Yes. The page includes related free psychometric-style routes for students, graduates, and working professionals.',
      },
    ],
  },
  {
    slug: 'free-aptitude-test-online',
    hubGroup: 'skill',
    hubTitle: 'Free Aptitude Test Online',
    hubDescription:
      'A free online aptitude-test page for people who want digital strength-fit clarity before choosing a stream, course, or training path.',
    metaTitle: 'Free Aptitude Test Online | Free Online Aptitude Test | Future Career School',
    metaDescription:
      'Looking for a free aptitude test online? Use the free online aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Free aptitude test online',
    pill: '100% free online aptitude-focused assessments',
    heroSub:
      'A free aptitude test online should help you get useful skill-fit signals quickly, not only act like practice entertainment. Start with choosing the free online aptitude page that matches your stage and decision pressure.',
    target: 'aptitude12',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112'],
    relatedPhrases: ['free aptitude test online', 'free online aptitude test', 'free aptitude test online for career'],
    fitTitle: 'When a free online aptitude test becomes useful',
    fitSubtitle:
      'This matters when you want a no-cost, low-friction first layer before choosing a stream, course, degree, or training direction.',
    fitItems: [
      {
        title: 'You want quick aptitude clarity without paying first',
        body:
          'A free online page helps when the decision already matters and you want practical signals now without paying for a report first.',
      },
      {
        title: 'You want the right aptitude page for your stage',
        body:
          'The stronger online route should separate after-10th, after-12th, and broader student-fit assessment needs more clearly.',
      },
      {
        title: 'You want a useful test, not random practice only',
        body:
          'A better page should connect aptitude signals to real student and after-12th direction instead of acting like a generic quiz only.',
      },
    ],
    decideTitle: 'What a free online aptitude test should actually help you do',
    decideSubtitle:
      'The stronger outcome is not only that it is free and online. It is that the decision becomes more evidence-based.',
    decideItems: [
      {
        title: 'Choose the right aptitude path first',
        body:
          'The page should help you decide whether you need after-10th, after-12th, or broader student-fit assessment next.',
      },
      {
        title: 'Avoid the wrong-test problem',
        body:
          'A stronger online page should stop people from taking a broad direction test when the real need is narrower aptitude clarity.',
      },
      {
        title: 'Move with less waste',
        body:
          'The right free online aptitude first layer should reduce wasted time and make the decision easier to justify.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-aptitude-test-online needs, the Career Aptitude Test After 12th is the strongest direct fit because it works well as an online strength-fit starting point. But People should compare the related aptitude pages below when the stage is earlier or broader.',
    faqItems: [
      {
        question: 'Are these online aptitude pages really free?',
        answer:
          'Yes. The linked aptitude-focused assessment pages here are fully free.',
      },
      {
        question: 'Should after-10th and after-12th students take the same free online aptitude page?',
        answer:
          'Not always. The stage changes the decision, which is why both narrower options are shown here.',
      },
      {
        question: 'Can a free online aptitude test still help with real decisions?',
        answer:
          'Yes. A strong free starting point can still narrow skill-fit and reduce random choices before you pay for the updated career guidance.',
      },
    ],
  },
  {
    slug: 'free-aptitude-test-for-students',
    hubGroup: 'skill',
    hubTitle: 'Free Aptitude Test for Students',
    hubDescription:
      'A student aptitude page for people who want a no-cost strength-fit starting point before stream, course, or degree decisions.',
    metaTitle: 'Free Aptitude Test for Students | Free Student Aptitude Test | Future Career School',
    metaDescription:
      'Looking for a free aptitude test for students? Use the free student aptitude-focused assessment pages from Future Career School and choose the right one for your stage.',
    h1: 'Free aptitude test for students',
    pill: '100% free student aptitude assessment options',
    heroSub:
      'A free aptitude test for students should help before stream, course, and degree choices become expensive wrong turns. Start with the free student aptitude assessment that matches your stage and the decision you are facing now.',
    target: 'class1112',
    relatedTargets: ['aptitude10', 'aptitude12', 'class10', 'class1112', 'stream10', 'stream12'],
    relatedPhrases: ['free aptitude test for students', 'student aptitude test free', 'free career aptitude test for students'],
    fitTitle: 'When a free student aptitude test becomes useful',
    fitSubtitle:
      'This matters when students need stronger fit signals before stream, course, or degree choices harden.',
    fitItems: [
      {
        title: 'You want a no-cost first layer before bigger decisions',
        body:
          'A free student aptitude page helps when the family wants stronger signals before paying for heavier support or making a rushed choice.',
      },
      {
        title: 'You want a stage-relevant aptitude route',
        body:
          'The stronger student path should separate after-10th, after-12th, and broader direction needs instead of treating all students the same way.',
      },
      {
        title: 'You want something more useful than marks alone',
        body:
          'Aptitude pages help when marks and opinions alone are not enough to judge the next study path clearly.',
      },
    ],
    decideTitle: 'What a free student aptitude test should actually help with',
    decideSubtitle:
      'The stronger outcome is not only that the test costs nothing. It is getting students to clearer direction faster.',
    decideItems: [
      {
        title: 'Which student aptitude page fits best',
        body:
          'The page should help separate broader school-stage, after-10th, after-12th, and stream-linked needs more clearly.',
      },
      {
        title: 'Which directions deserve more serious attention',
        body:
          'A stronger student aptitude page should narrow the field before more cost and confusion build up.',
      },
      {
        title: 'How to make the next discussion easier',
        body:
          'A stronger result should give students and parents a clearer base for discussing the stronger direction with less guesswork.',
      },
    ],
    bestFitTitle: 'Best free assessment to start with',
    bestFitBody:
      'For broad free-aptitude-test-for-students needs, the Class 11 and 12 assessment is a strong broad starting point because it combines aptitude, interests, learning style, and direction together. But students should compare the narrower aptitude and stream pages below when the stage is more specific.',
    faqItems: [
      {
        question: 'Are the student aptitude pages really free?',
        answer:
          'Yes. The linked student aptitude-focused assessment pages are fully free.',
      },
      {
        question: 'Should students start with a broad assessment or a narrower aptitude page?',
        answer:
          'That depends on the stage and question. Some students need broader direction first, while others already need a narrower aptitude-first route.',
      },
      {
        question: 'Can a free aptitude page still help with important decisions?',
        answer:
          'Yes. A strong free starting point can still reduce guesswork before the family commits more time or money elsewhere.',
      },
    ],
  },
  ...EXTRA_ASSESSMENT_PAGES,
];

const CANONICAL_SLUG_PRIORITY = [
  'career-test',
  'free-career-assessment',
  'career-assessment-test',
  'psychometric-test',
  'psychometric-test-for-career',
  'aptitude-test',
  'aptitude-test-for-career',
  'career-aptitude-test-for-students',
  'career-aptitude-test-for-adults',
  'career-aptitude-test-for-class-10',
  'aptitude-test-for-career-after-12th',
  'personality-test-for-career',
  'career-assessment-for-students',
  'career-guidance-test',
  'career-counselling-test',
  'career-selection-test',
  'career-choice-test',
  'career-path-test',
  'career-path-finder-test',
  'what-career-is-right-for-me-test-free',
  'best-career-for-you-test',
  'best-career-assessment-test',
  'best-psychometric-test-for-career-choice',
  'career-aptitude-test-for-high-school-students',
  'career-aptitude-test-for-teens',
  'career-aptitude-test-for-kids',
];

const INTENT_MODIFIER_TOKENS = new Set([
  'a',
  'an',
  'the',
  'and',
  'for',
  'of',
  'to',
  'free',
  'online',
  'best',
  'based',
  'detailed',
  'good',
  'accurate',
  'reliable',
  'simple',
  'perfect',
  'ideal',
  'right',
  'my',
  'your',
  'take',
  'india',
  'with',
  'result',
  'results',
  'how',
]);

const normalizePagePhrase = (value: string) =>
  value
    .toLowerCase()
    .replace(/highschool/g, 'high school')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');

const normalizeIntentPhrase = (value: string) =>
  [...new Set(
    normalizePagePhrase(value)
      .split(' ')
      .filter((token) => token && !INTENT_MODIFIER_TOKENS.has(token))
      .map((token) => {
        const equivalentTokens: Record<string, string> = {
          assessments: 'test',
          assessment: 'test',
          quizzes: 'test',
          quiz: 'test',
          tests: 'test',
          careers: 'career',
          students: 'student',
          teenagers: 'teen',
          teens: 'teen',
          adults: 'adult',
          choice: 'choose',
          choosing: 'choose',
          selection: 'choose',
          select: 'choose',
          decide: 'choose',
          decision: 'choose',
          determine: 'choose',
          determining: 'choose',
          finder: 'find',
          finding: 'find',
          figure: 'find',
          know: 'find',
          see: 'find',
          discover: 'find',
        };

        return equivalentTokens[token] ?? token;
      }),
  )]
    .sort()
    .join(' ');

const parent = ALL_ASSESSMENT_PAGES.map((_, index) => index);

const findParent = (index: number): number => {
  if (parent[index] !== index) {
    parent[index] = findParent(parent[index]);
  }

  return parent[index];
};

const joinPages = (left: number, right: number) => {
  const leftParent = findParent(left);
  const rightParent = findParent(right);

  if (leftParent !== rightParent) {
    parent[rightParent] = leftParent;
  }
};

const intentOwners = new Map<string, number>();
const aliasOwners = new Map<string, number>();

ALL_ASSESSMENT_PAGES.forEach((page, index) => {
  const audienceKey = `${page.target}|${page.hubGroup}`;
  const intentKey = `${audienceKey}|${normalizeIntentPhrase(page.hubTitle)}`;
  const existingIntentOwner = intentOwners.get(intentKey);

  if (existingIntentOwner !== undefined) {
    joinPages(index, existingIntentOwner);
  } else {
    intentOwners.set(intentKey, index);
  }

  [page.hubTitle, ...page.relatedPhrases].forEach((phrase) => {
    const aliasKey = `${audienceKey}|${normalizePagePhrase(phrase)}`;
    const existingAliasOwner = aliasOwners.get(aliasKey);

    if (existingAliasOwner !== undefined) {
      joinPages(index, existingAliasOwner);
    } else {
      aliasOwners.set(aliasKey, index);
    }
  });
});

// The automatic matching above only merges pages whose hubTitle/relatedPhrases
// share literal normalized text. Some pages ask the exact same question in
// different words and slip past that check (e.g. "career-test" vs
// "the-ultimate-career-test" vs "your-future-career-test"). These groups were
// identified by manual review and are forced together here so they collapse
// into one canonical page (see CANONICAL_SLUG_PRIORITY above for the winner
// in each group) instead of shipping as separate near-duplicate URLs.
const FORCED_DUPLICATE_INTENT_GROUPS: string[][] = [
  // Generic "find out what career suits me" test.
  [
    'career-test',
    'career-assessment-test',
    'career-evaluation-test',
    'career-evaluation-test-free',
    'career-self-assessment-test',
    'free-career-self-assessment-test',
    'career-help-test',
    'the-ultimate-career-test',
    'your-future-career-test',
    'what-is-my-future-career-test',
    'test-to-see-my-future-career',
    'career-profile-test',
    'career-survey-test',
    'career-inventory-test',
  ],
  // "Which career is right/best for me" decision-test phrasing.
  [
    'career-selection-test',
    'test-that-determines-your-career',
    'a-test-that-tells-you-your-career',
    'test-to-see-what-career-fits-you',
    'test-to-determine-what-career-is-best-for-me',
    'test-to-find-which-career-is-right-for-me',
    'what-career-is-right-for-me-test-free',
    'test-to-know-which-career-is-best-for-you',
    'test-to-see-what-career-is-best-for-you',
    'tests-to-determine-what-your-career-should-be',
    'what-career-to-choose-test',
    'test-that-helps-you-choose-a-career',
    'test-to-figure-out-career-choice',
    'career-decider-test-free',
    'career-decision-making-test',
    'best-career-for-you-test',
    'best-career-for-me-test-free',
    'what-is-the-best-career-assessment-test',
  ],
  // Personality test for career.
  [
    'personality-test-for-career',
    'personality-test-for-career-path',
    'personality-type-career-test',
    'personality-test-and-career-choice',
    'personality-test-to-figure-out-career',
    'career-personality-profiler-test',
    'see-my-personality-career-test',
  ],
  // Core "aptitude test for career" phrase, word-order variants.
  ['aptitude-test-for-career', 'aptitude-test-to-find-career', 'aptitude-test-for-future-career'],
  // High-school aptitude test.
  [
    'career-aptitude-test-for-high-school-students',
    'career-aptitude-test-for-high-school-students-in-india',
    'best-career-aptitude-test-for-high-school-students',
    'high-school-career-test',
    'career-test-for-high-school-students',
  ],
  // Teen aptitude test.
  ['career-aptitude-test-for-teens', 'career-test-for-teens', 'career-test-for-teens-free'],
  // Kids / young-child aptitude test.
  [
    'career-aptitude-test-for-kids',
    'career-test-for-kids',
    'career-aptitude-test-for-elementary-students',
  ],
  // Adult aptitude test.
  ['career-aptitude-test-for-adults', 'career-finder-test-for-adults', 'career-test-for-adults'],
];

const slugToIndex = new Map(ALL_ASSESSMENT_PAGES.map((page, index) => [page.slug, index]));

FORCED_DUPLICATE_INTENT_GROUPS.forEach((group) => {
  const indices = group
    .map((slug) => slugToIndex.get(slug))
    .filter((index): index is number => index !== undefined);

  for (let i = 1; i < indices.length; i += 1) {
    joinPages(indices[0], indices[i]);
  }
});

const pageGroups = new Map<number, AssessmentPage[]>();

ALL_ASSESSMENT_PAGES.forEach((page, index) => {
  const groupId = findParent(index);
  const group = pageGroups.get(groupId) ?? [];
  group.push(page);
  pageGroups.set(groupId, group);
});

const canonicalRank = (page: AssessmentPage) => {
  const priorityIndex = CANONICAL_SLUG_PRIORITY.indexOf(page.slug);
  const priorityScore = priorityIndex === -1 ? 10_000 : priorityIndex;
  const modifierCount = normalizePagePhrase(page.hubTitle)
    .split(' ')
    .filter((token) => INTENT_MODIFIER_TOKENS.has(token)).length;

  return [priorityScore, modifierCount, page.slug.split('-').length, page.slug.length];
};

const compareCanonicalCandidates = (
  left: AssessmentPage,
  right: AssessmentPage,
) => {
  const leftRank = canonicalRank(left);
  const rightRank = canonicalRank(right);

  for (let index = 0; index < leftRank.length; index += 1) {
    if (leftRank[index] !== rightRank[index]) {
      return leftRank[index] - rightRank[index];
    }
  }

  return left.slug.localeCompare(right.slug);
};

const canonicalPages: AssessmentPage[] = [];
const assessmentPageRedirects: Record<string, string> = {};

pageGroups.forEach((group) => {
  const [canonicalPage, ...duplicates] = [...group].sort(compareCanonicalCandidates);
  const coveredPhrases = [
    ...new Set(
      group
        .flatMap((item) => [
          item.slug.replace(/-/g, ' '),
          item.hubTitle,
          item.h1,
          ...item.relatedPhrases,
        ])
        .map((phrase) => phrase.trim())
        .filter(Boolean),
    ),
  ];

  canonicalPages.push({
    ...canonicalPage,
    coveredPhrases,
  });

  duplicates.forEach((duplicate) => {
    assessmentPageRedirects[duplicate.slug] = canonicalPage.slug;
  });
});

const originalPageOrder = new Map(
  ALL_ASSESSMENT_PAGES.map((page, index) => [page.slug, index]),
);

export const ASSESSMENT_PAGES = canonicalPages.sort(
  (left, right) =>
    (originalPageOrder.get(left.slug) ?? 0) - (originalPageOrder.get(right.slug) ?? 0),
);

export const ASSESSMENT_PAGE_REDIRECTS = assessmentPageRedirects;

export const ASSESSMENT_PAGE_ROUTE_CONFIG = ASSESSMENT_PAGES.map((page) => ({
  path: `/services/assessments/${page.slug}`,
  changefreq: 'monthly' as const,
  priority: '0.82',
}));







