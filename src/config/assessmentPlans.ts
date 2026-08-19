export type AssessmentPlansMode =
  | 'student'
  | 'after12th'
  | 'graduate'
  | 'professional'
  | 'mixed';

export type AssessmentPlansAudience = 'student' | 'professional' | 'mixed';

export type AssessmentPlansConfig = {
  audience: AssessmentPlansAudience;
  jumpHref: '#plans';
  jumpLabel: string;
  sectionTitle: string;
  serviceLabel: string;
};

const SHARED_SERVICE_LABEL = 'Career Guidance';

const ASSESSMENT_PLANS_CONFIG: Record<AssessmentPlansMode, AssessmentPlansConfig> = {
  student: {
    audience: 'student',
    jumpHref: '#plans',
    jumpLabel: 'See Student Career Guidance Pricing',
    sectionTitle: 'Student Career Guidance Pricing',
    serviceLabel: SHARED_SERVICE_LABEL,
  },
  after12th: {
    audience: 'student',
    jumpHref: '#plans',
    jumpLabel: 'See After 12th Career Guidance Pricing',
    sectionTitle: 'Career Guidance After 12th Pricing',
    serviceLabel: SHARED_SERVICE_LABEL,
  },
  graduate: {
    audience: 'student',
    jumpHref: '#plans',
    jumpLabel: 'See Career Guidance Pricing',
    sectionTitle: 'Career Guidance Pricing for Graduates and Early Professionals',
    serviceLabel: SHARED_SERVICE_LABEL,
  },
  professional: {
    audience: 'professional',
    jumpHref: '#plans',
    jumpLabel: 'See Working Professional Guidance Pricing',
    sectionTitle: 'Working Professional Career Guidance Pricing',
    serviceLabel: SHARED_SERVICE_LABEL,
  },
  mixed: {
    audience: 'mixed',
    jumpHref: '#plans',
    jumpLabel: 'See Career Guidance Pricing',
    sectionTitle: 'Career Guidance Pricing',
    serviceLabel: SHARED_SERVICE_LABEL,
  },
};

export function getAssessmentPlansConfig(
  mode: AssessmentPlansMode,
): AssessmentPlansConfig {
  return ASSESSMENT_PLANS_CONFIG[mode];
}

export function resolveAssessmentPlansMode(
  modes: AssessmentPlansMode[],
): AssessmentPlansMode {
  const uniqueModes = [...new Set(modes)];
  if (uniqueModes.includes('mixed')) {
    return 'mixed';
  }
  const hasStudent = uniqueModes.includes('student');
  const hasAfter12th = uniqueModes.includes('after12th');
  const hasGraduate = uniqueModes.includes('graduate');
  const hasProfessional = uniqueModes.includes('professional');

  if ((hasStudent || hasAfter12th || hasGraduate) && hasProfessional) {
    return 'mixed';
  }

  if (hasStudent || (hasAfter12th && hasGraduate) || (hasStudent && hasAfter12th)) {
    return 'student';
  }

  if (uniqueModes.includes('professional')) {
    return 'professional';
  }

  if (hasGraduate) {
    return 'graduate';
  }

  if (hasAfter12th) {
    return 'after12th';
  }

  return 'student';
}
