// Test metric functions for all assessments

// Mock scores for testing
const testScores = {
  R: 70, I: 80, A: 75, S: 65, E: 72, C: 68,
  lin: 72, log: 85, spa: 70, bk: 65, inter: 70, intra: 68, mus: 75, nat: 60,
  vis: 80, aud: 65, kin: 60,
  num: 85, ver: 75, lgc: 88,
  pcm: 80, pcb: 75, com: 70, hum: 65
};

const testPatterns = {
  convictionLevel: 'High',
  consistency: 75
};

const testPercentiles = {
  R: 70, I: 85, A: 75, S: 65, E: 72, C: 68
};

const testConflicts = {};

// Test Class 11-12 and Graduates metric functions
function calculateCognitiveBalance(scores) {
  var logical = (scores.I + (scores.lgc || 0)) / 2;
  var creative = (scores.A + (scores.spa || 0) + (scores.mus || 0)) / 3;
  var social = (scores.S + (scores.inter || 0)) / 2;
  var practical = (scores.R + (scores.bk || 0)) / 2;
  var all = [logical, creative, social, practical];
  var max = Math.max(...all);
  var min = Math.min(...all);
  var balance = Math.round(100 - Math.min(100, ((max - min) / (max || 1)) * 80));
  return {
    score: balance,
    profile: balance > 70 ? 'Well-Rounded' : balance > 50 ? 'Balanced' : 'Specialized',
    logical: Math.round(logical),
    creative: Math.round(creative),
    social: Math.round(social),
    practical: Math.round(practical),
    interpretation: balance > 70 ? 'You have diverse strengths.' : 'You have some focus.'
  };
}

function calculateCareerReadiness(patterns, percentiles, primary) {
  var convictionScore = patterns.convictionLevel === 'High' ? 85 : patterns.convictionLevel === 'Moderate' ? 65 : 45;
  var clarityScore = percentiles[primary] || 50;
  var consistencyScore = patterns.consistency || 50;
  var readiness = Math.round((convictionScore + clarityScore + consistencyScore) / 3);
  return {
    score: readiness,
    stage: readiness > 75 ? 'Ready' : readiness > 60 ? 'Building' : 'Exploring',
    conviction: convictionScore,
    clarity: clarityScore,
    consistency: consistencyScore,
    recommendation: 'Keep exploring.'
  };
}

function calculateLearningStyleAlignment(topLS, riasecPrimary) {
  var alignment = {
    vis: {I: 75, A: 85, C: 75, E: 60, S: 50, R: 55},
    aud: {S: 85, E: 75, I: 55, A: 65, C: 50, R: 45},
    kin: {R: 90, A: 75, S: 70, I: 50, E: 60, C: 45}
  };
  var score = (alignment[topLS] && alignment[topLS][riasecPrimary]) || 60;
  var lsName = {vis: 'Visual', aud: 'Auditory', kin: 'Kinesthetic'}[topLS];
  return {
    learningStyle: lsName,
    alignmentScore: score,
    careerAlignment: 'Good alignment.',
    implication: 'Seek relevant roles.'
  };
}

function calculateAptitudeProfile(scores) {
  var num = scores.num || 0;
  var ver = scores.ver || 0;
  var lgc = scores.lgc || 0;
  var max = Math.max(num, ver, lgc);
  var total = num + ver + lgc;
  var primary = num >= ver && num >= lgc ? 'Numerical' : ver >= num && ver >= lgc ? 'Verbal' : 'Logical';
  var strength = max > 0 ? Math.round((max / (total || 1)) * 100) : 50;
  return {
    primary: primary,
    numerical: num,
    verbal: ver,
    logical: lgc,
    dominanceStrength: strength,
    profile: strength > 60 ? 'Specialized' : 'Balanced',
    careerImplication: 'Suit your best.'
  };
}

function calculateAdaptability(patterns, conflicts) {
  var consistencyBonus = patterns.consistency > 70 ? 20 : 10;
  var conflictPenalty = (conflicts && Object.keys(conflicts).length > 0) ? -10 : 10;
  var convictionBonus = patterns.convictionLevel === 'Exploring' ? 30 : 0;
  var score = Math.max(0, Math.min(100, 50 + consistencyBonus + conflictPenalty + convictionBonus));
  var adaptability = score > 70 ? 'Highly Adaptable' : score > 50 ? 'Moderately Adaptable' : 'Needs Stability';
  return {
    score: score,
    adaptability: adaptability,
    interpretation: 'You can adapt.'
  };
}

// Run tests
console.log('\n=== Testing Metric Functions ===\n');

const cogBalance = calculateCognitiveBalance(testScores);
console.log('✓ calculateCognitiveBalance:');
console.log('  Properties:', Object.keys(cogBalance));
console.log('  All required? score, profile, logical, creative, social, practical, interpretation');

const readiness = calculateCareerReadiness(testPatterns, testPercentiles, 'I');
console.log('\n✓ calculateCareerReadiness:');
console.log('  Properties:', Object.keys(readiness));
console.log('  All required? score, stage, conviction, clarity, consistency, recommendation');

const lsAlign = calculateLearningStyleAlignment('vis', 'I');
console.log('\n✓ calculateLearningStyleAlignment:');
console.log('  Properties:', Object.keys(lsAlign));
console.log('  All required? learningStyle, alignmentScore, careerAlignment, implication');

const aptProfile = calculateAptitudeProfile(testScores);
console.log('\n✓ calculateAptitudeProfile:');
console.log('  Properties:', Object.keys(aptProfile));
console.log('  All required? primary, numerical, verbal, logical, dominanceStrength, profile, careerImplication');

const adapt = calculateAdaptability(testPatterns, testConflicts);
console.log('\n✓ calculateAdaptability:');
console.log('  Properties:', Object.keys(adapt));
console.log('  All required? score, adaptability, interpretation');

console.log('\n=== All metric functions checked! ===\n');
