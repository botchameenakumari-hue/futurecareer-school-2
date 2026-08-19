import { BOFU_PAYMENT_LINKS } from './bofu';

export type GuidancePlanAudience = 'student' | 'professional';

export interface GuidancePlanContent {
  audience: GuidancePlanAudience;
  eyebrow: string;
  tag: string;
  title: string;
  offerLabel: string;
  comparePrice?: string;
  price: string;
  priceNote: string;
  summary: string;
  supportLine: string;
  fitLabel: string;
  fitText: string;
  edgeLabel: string;
  edgeText: string;
  continuationLabel: string;
  continuationText: string;
  continuationOfferLabel?: string;
  continuationComparePrice?: string;
  continuationPrice?: string;
  continuationPriceNote?: string;
  availabilityNote: string;
  ctaHref: string;
  ctaLabel: string;
  continuationCtaHref?: string;
  continuationCtaLabel?: string;
}

export const STUDENT_GUIDANCE_PLAN: GuidancePlanContent = {
  audience: 'student',
  eyebrow: 'Students',
  tag: 'Student path',
  title: 'Student plan',
  offerLabel: 'Limited-time student offer',
  comparePrice: '\u20B93000',
  price: '\u20B9250',
  priceNote: 'for the first 1-on-1 session',
  summary:
    "Practical student {{service}} before the wrong path wastes years, money, and future readiness.",
  supportLine:
    'A low-friction first step before the wrong path costs more time and money.',
  fitLabel: 'Avoid',
  fitText:
    'Wrong streams, outdated degrees, and low-value skills that waste years and money.',
  edgeLabel: 'Move toward',
  edgeText:
    'High-value skills, future readiness, and earlier financial freedom.',
  continuationLabel: 'Continuous career guidance',
  continuationText:
    'Real student growth comes from a series of better decisions. This path keeps skill choices, future readiness, and financial-freedom planning on track across the year.',
  continuationOfferLabel: 'Limited-time annual price',
  continuationComparePrice: '\u20B929000',
  continuationPrice: '\u20B912000',
  continuationPriceNote:
    'Includes the 1-on-1 and up to 24 small-group sessions across the year.',
  availabilityNote: 'Online across India',
  ctaHref: BOFU_PAYMENT_LINKS.students,
  ctaLabel: 'Book 1-on-1',
  continuationCtaHref: BOFU_PAYMENT_LINKS.studentContinuousGuidance,
  continuationCtaLabel: 'Continuous Guidance',
};

export const WORKING_PROFESSIONAL_GUIDANCE_PLAN: GuidancePlanContent = {
  audience: 'professional',
  eyebrow: 'Working Professionals',
  tag: '1-on-1',
  title: 'Working professional plan',
  offerLabel: 'Limited-time professional offer',
  comparePrice: '\u20B95000',
  price: '\u20B93000',
  priceNote: 'for one 1-on-1 session',
  summary:
    'For professionals who need clearer pivots, stronger compensation, and higher-leverage career moves.',
  supportLine:
    'Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.',
  fitLabel: 'Avoid',
  fitText:
    'Salary ceilings, random upskilling, weak positioning, and pivots that waste time and money.',
  edgeLabel: 'Move toward',
  edgeText:
    'Higher-value skills, sharper positioning, stronger compensation, and earlier financial freedom.',
  continuationLabel: 'Use it for',
  continuationText:
    'AI pressure, stagnation, career pivots, and deciding which next skill move can multiply leverage.',
  availabilityNote: 'Online across India',
  ctaHref: BOFU_PAYMENT_LINKS.workingProfessionals,
  ctaLabel: 'Book 1-on-1',
};


export const formatGuidancePlanAmount = (amount: string) => amount.replace('\u20B9', 'Rs ');

export const GUIDANCE_PLAN_PRICE_COPY = {
  studentSessionPrice: formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.price),
  studentSessionComparePrice: formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.comparePrice ?? ''),
  studentContinuousPrice: formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.continuationPrice ?? ''),
  studentContinuousComparePrice: formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.continuationComparePrice ?? ''),
  professionalSessionPrice: formatGuidancePlanAmount(WORKING_PROFESSIONAL_GUIDANCE_PLAN.price),
  professionalSessionComparePrice: formatGuidancePlanAmount(WORKING_PROFESSIONAL_GUIDANCE_PLAN.comparePrice ?? ''),
  studentSessionPriceText: `${formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.price)} (limited-time price, down from ${formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.comparePrice ?? '')})`,
  studentContinuousPriceText: `${formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.continuationPrice ?? '')} (limited-time price, down from ${formatGuidancePlanAmount(STUDENT_GUIDANCE_PLAN.continuationComparePrice ?? '')})`,
  professionalSessionPriceText: `${formatGuidancePlanAmount(WORKING_PROFESSIONAL_GUIDANCE_PLAN.price)} (limited-time price, down from ${formatGuidancePlanAmount(WORKING_PROFESSIONAL_GUIDANCE_PLAN.comparePrice ?? '')})`,
  studentContinuousIncludesText: 'includes the 1-on-1 and up to 24 small-group sessions across the year',
  freeLayerText:
    'Career and skill assessments, career and income-growth resources, and finder tools are the genuinely free layer. A live 1-on-1 session is paid counsellor time spent on a specific situation.',
};

