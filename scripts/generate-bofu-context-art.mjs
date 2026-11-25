import { mkdir } from 'node:fs/promises';
import sharp from '../node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/index.js';

const output = 'public/images/bofu';
const palettes = [
  { paper: '#f3ede0', ink: '#19354a', rust: '#bd5f49', olive: '#6d8066', gold: '#d6ad5c', pale: '#fffaf0' },
  { paper: '#eee9df', ink: '#253c3d', rust: '#c06a51', olive: '#738362', gold: '#d4aa54', pale: '#fffaf1' },
  { paper: '#f2e9e1', ink: '#2d3042', rust: '#bf654f', olive: '#648481', gold: '#d6ae5c', pale: '#fffaf3' },
  { paper: '#ecefe8', ink: '#203949', rust: '#c76f53', olive: '#71856b', gold: '#d1a84d', pale: '#fffdf7' },
];

const topics = [
  ['context-after-12th', 'After Class 12', 'Choose the work first; then compare routes.', 'Destination|Picture the work', 'Route|Degree or skill', 'Capability|Build what is needed', 'Evidence|Show what you can do', 'branch'],
  ['context-assessment-map', 'Assessment to action', 'A result is a clue to test, not a career verdict.', 'Signal|Notice a pattern', 'Question|Ask what it means', 'Experiment|Try a real task', 'Direction|Choose a next step', 'compass'],
  ['context-career-plan', 'A career plan you can use', 'Keep the next decision visible and reviewable.', 'Now|Name the real choice', 'Next|Choose one move', 'Proof|Make progress visible', 'Review|Adjust with evidence', 'path'],
  ['context-creative-media', 'Creative work with value', 'Connect the craft to people who need it.', 'Idea|Find a real need', 'Craft|Make useful work', 'Audience|Reach the right people', 'Value|Show the result', 'spark'],
  ['context-engineering-tech', 'From engineering to proof', 'Turn technical foundations into work others can inspect.', 'Foundation|Use core principles', 'Project|Solve a real problem', 'Proof|Document the build', 'Role|Match evidence to work', 'circuit'],
  ['context-entrepreneur-path', 'A skill-led business path', 'Build an offer around a problem worth solving.', 'Problem|Listen before building', 'Skill|Do the work well', 'Offer|Make the result clear', 'Revenue|Earn through value', 'loop'],
  ['context-evaluation-checklist', 'Check the guidance before you pay', 'Look for evidence, trade-offs, and a useful next step.', 'Specific|Fits your decision', 'Evidence|Shows real work', 'Trade-offs|Names the cost', 'Next step|Tests the direction', 'check'],
  ['context-exam-pressure', 'A steadier plan under exam pressure', 'Protect time, options, and energy while you prepare.', 'Attempts|Know the rules', 'Time|Set a realistic window', 'Plan B|Keep routes open', 'Support|Ask early for help', 'calendar'],
  ['context-first-generation', 'Build a path with the context you have', 'Turn access, capability, and proof into mobility.', 'Context|Start from your reality', 'Capability|Build high-value skills', 'Proof|Make ability visible', 'Mobility|Open better options', 'bridge'],
  ['context-graduate-pathway', 'From degree to opportunity', 'Close the gap between study and work with proof.', 'Degree|Name what you know', 'Gap|Find what is missing', 'Skill|Practise the work', 'Proof|Show what you can do', 'bridge'],
  ['context-healthcare-aspirant', 'Compare healthcare work by fit', 'Patient care, science, and daily duties differ by role.', 'Work|See the daily tasks', 'Training|Check the route', 'Fit|Match strengths and care', 'Next step|Test the setting', 'cross'],
  ['context-helpline', 'Start with one honest question', 'A useful conversation makes the next move clearer.', 'Listen|Say what feels stuck', 'Clarify|Name the real choice', 'Explore|Compare possible routes', 'Act|Choose one next step', 'speech'],
  ['context-holistic-framework', 'A career decision needs the whole picture', 'Fit, opportunity, skills, and money belong together.', 'Person|Strengths and constraints', 'Options|Routes and trade-offs', 'Market|Demand and opportunity', 'Skills + money|Build for freedom', 'orbit'],
  ['context-law-policy', 'Law and policy have different working lives', 'Compare the work, entry route, and public impact.', 'Issue|What needs changing?', 'Route|Practice or policy', 'Evidence|Read the real work', 'Impact|Who benefits?', 'scales'],
  ['context-location-online', 'Local context; guidance from anywhere', 'Bring city choices into one clear online conversation.', 'City|Name local options', 'Access|Meet online', 'Compare|Check fit and cost', 'Decide|Choose with context', 'map'],
  ['context-online-session', 'A live session with a clear next step', 'Turn a conversation into a decision you can test.', 'Question|Bring the real concern', 'Explore|Compare possible paths', 'Plan|Choose a small test', 'Follow up|Review what you learned', 'screen'],
  ['context-pricing-value', 'Judge guidance by what it helps you build', 'The value is a stronger decision and usable proof.', 'Clarity|Know the real choice', 'Skill plan|Build what travels', 'Proof|Show the work', 'Review|Improve the next move', 'value'],
  ['context-professional-pivot', 'Move your experience into new work', 'Carry proven strengths while learning what the new role needs.', 'Experience|Name what transfers', 'Gap|Find what must change', 'Proof|Build one work sample', 'Pivot|Move with a plan', 'pivot'],
  ['context-stream-choice', 'Choose a stream by fit and future work', 'Keep options open while testing what suits you.', 'Interests|What holds attention?', 'Subjects|What can you sustain?', 'Work|What might fit?', 'Evidence|Try a small project', 'branch'],
  ['context-student-parent-map', 'Help students move from strengths to skills', 'Use observations as a starting point for exploration.', 'Notice|Name strengths', 'Ask|Hear the student', 'Explore|Try real activities', 'Build|Grow useful skills', 'conversation'],
  ['context-study-abroad', 'Compare study abroad with the full cost', 'Check outcomes, living costs, risk, and fit together.', 'Course|Check recognition', 'Cost|Count the full spend', 'Outcome|Verify work options', 'Fit|Compare the life', 'globe'],
  ['context-women-returning', 'Return to work with proof and choice', 'Make experience visible and plan the route back.', 'Experience|Name what you bring', 'Refresh|Update one skill', 'Proof|Show recent work', 'Return|Choose the right role', 'return'],
];

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const splitLabel = (value, max = 18) => {
  const out = [];
  let line = '';
  for (const word of value.split(/\s+/)) {
    if (line && `${line} ${word}`.length > max) { out.push(line); line = word; }
    else line = `${line} ${word}`.trim();
  }
  if (line) out.push(line);
  return out;
};
const text = (value, x, y, size, fill, weight = 500, family = 'Arial, Helvetica, sans-serif', anchor = 'start') => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(value)}</text>`;
const icon = (kind, x, y, c) => {
  const head = `<g transform="translate(${x} ${y})" fill="none" stroke="${c.rust}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">`;
  const art = {
    branch: '<path d="M0 42h42V5m0 37v38m0-38h42"/><circle cx="42" cy="5" r="8" fill="currentColor"/><circle cx="42" cy="80" r="8" fill="currentColor"/><circle cx="84" cy="42" r="8" fill="currentColor"/>',
    compass: '<circle cx="42" cy="42" r="34"/><path d="M56 27 47 49 27 58l9-21 20-10Z"/><circle cx="42" cy="42" r="4" fill="currentColor"/>',
    path: '<path d="M10 75h26V53h24V31h26V9"/><path d="m72 9 14 0 0 14"/>',
    spark: '<path d="M42 5 51 32 79 42 51 52 42 80 33 52 5 42 33 32 42 5Z"/><path d="M72 61v20m-10-10h20"/>',
    circuit: '<rect x="10" y="14" width="64" height="54" rx="10"/><path d="M28 32h27M28 48h16M42 68v17m-20 0h40M74 41h17"/><circle cx="88" cy="41" r="5" fill="currentColor"/>',
    loop: '<path d="M72 28a32 32 0 0 0-54 9M18 37 17 18m1 19 19-1M12 56a32 32 0 0 0 55 10m0 0 1 19m-1-19-19 1"/>',
    check: '<path d="m13 45 20 19 44-48"/><path d="M16 16h35M16 78h40"/>',
    calendar: '<rect x="12" y="18" width="62" height="61" rx="8"/><path d="M25 8v20m36-20v20M12 37h62m-46 14h8m12 0h8m-28 14h8"/>',
    bridge: '<path d="M8 68h76M17 68V42m58 26V42M17 42a29 29 0 0 1 58 0M28 68V50m18 18V43m18 25V50"/>',
    cross: '<path d="M42 8v68M8 42h68"/><circle cx="42" cy="42" r="31"/><circle cx="42" cy="42" r="7" fill="currentColor"/>',
    speech: '<path d="M12 14h62v46H42L24 76V60h-12Z"/><path d="M25 31h36M25 44h24"/>',
    orbit: '<circle cx="44" cy="43" r="12"/><ellipse cx="44" cy="43" rx="40" ry="18" transform="rotate(-30 44 43)"/><ellipse cx="44" cy="43" rx="40" ry="18" transform="rotate(30 44 43)"/>',
    scales: '<path d="M43 10v68m-24 0h48M17 25h53M43 25 23 58h40L43 25Zm10 0 20 33h20L70 25"/>',
    map: '<path d="m8 20 24-10 25 10 23-10v60l-23 10-25-10L8 80Z"/><path d="M32 10v60m25-50v60m-29-22 13-10 15 4 17-18"/>',
    screen: '<rect x="7" y="12" width="72" height="50" rx="7"/><path d="M43 62v15M28 78h31M18 28h49m-49 13h28"/>',
    value: '<path d="M15 72h57M24 59V39m18 20V25m18 34V13"/><path d="m16 31 20-14 20 8 20-16"/>',
    pivot: '<path d="M18 76V20m0 0 17 17m-17-17L1 37M68 8v56m0 0L51 47m17 17 17-17"/><circle cx="43" cy="44" r="9"/>',
    conversation: '<circle cx="29" cy="32" r="15"/><circle cx="61" cy="32" r="15"/><path d="M5 78c2-18 12-27 24-27s22 9 24 27M43 78c2-18 7-27 18-27s18 9 20 27"/>',
    globe: '<circle cx="43" cy="43" r="34"/><path d="M9 43h68M43 9c18 18 18 50 0 68m0-68c-18 18-18 50 0 68M22 23h42M22 63h42"/>',
    return: '<path d="M76 31H38a24 24 0 1 0 22 35M76 31 60 15m16 16L60 47"/><path d="M33 48h24M33 60h17"/>',
  }[kind] || '<circle cx="43" cy="43" r="32"/><path d="M22 43h42M43 22v42"/>';
  return `${head}${art}</g>`;
};
const stepIcon = (label, fallback, index) => {
  const value = label.toLowerCase();
  if (/question|listen|ask|conversation|concern/.test(value)) return 'speech';
  if (/compare|explore|option|choice|fit/.test(value)) return 'compass';
  if (/proof|evidence|test|experiment|project/.test(value)) return 'check';
  if (/skill|capability|build|craft/.test(value)) return 'circuit';
  if (/money|cost|value|revenue|income|budget/.test(value)) return 'value';
  if (/review|follow|adjust|return/.test(value)) return 'loop';
  if (/city|local|map|access/.test(value)) return 'map';
  if (/route|path|next|plan|direction/.test(value)) return 'path';
  if (/work|role|opportunity|mobility/.test(value)) return 'bridge';
  return [fallback, 'branch', 'check', 'path'][index % 4];
};

function desktopSvg(entry, index) {
  const c = palettes[index % palettes.length];
  const [name, title, subtitle, ...rest] = entry;
  const symbol = rest.pop();
  const steps = rest.map((value) => { const [label, note] = value.split('|'); return { label, note }; });
  const layout = index % 4;
  const cardW = 320, cardH = 300, gap = 44, x0 = 80, y0 = layout === 1 ? 316 : 300;
  let cards = '';
  steps.forEach((step, i) => {
    const offset = layout === 1 ? (i % 2) * 38 : layout === 2 ? (i % 2) * 16 : 0;
    const x = x0 + i * (cardW + gap), y = y0 + offset;
    const accent = [c.rust, c.olive, c.gold, c.ink][(i + index) % 4];
    cards += `<g><path d="M${x+8} ${y+16}q0-12 12-12h${cardW-24}q12 0 12 12v${cardH-28}q0 12-12 12h-${cardW-24}q-12 0-12-12Z" fill="${c.pale}" stroke="${accent}" stroke-width="4"/><circle cx="${x+56}" cy="${y+60}" r="28" fill="${accent}"/><text x="${x+56}" y="${y+69}" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="${c.pale}">${String(i+1).padStart(2,'0')}</text>${icon(stepIcon(step.label,symbol,i),x+cardW-112,y+28,c)}`;
    const lines = splitLabel(step.label, 20);
    lines.slice(0,2).forEach((line,j)=>{cards+=text(line,x+28,y+143+j*37,30,c.ink,700,'Georgia, Times New Roman, serif')});
    const note = splitLabel(step.note, 31);
    note.slice(0,2).forEach((line,j)=>{cards+=text(line,x+28,y+228+j*27,20,c.ink,500)});
    cards += '</g>';
    if (i < steps.length - 1) cards += `<path d="M${x+cardW+5} ${y+cardH/2}h${gap-10}" stroke="${c.rust}" stroke-width="5" stroke-dasharray="2 11" stroke-linecap="round"/>`;
  });
  const titleLines = splitLabel(title, 48).slice(0,2);
  const titleSvg = titleLines.map((line,j)=>text(line,90,92+j*57,46,c.ink,700,'Georgia, Times New Roman, serif')).join('');
  const subtitleSvg = text(subtitle,92,titleLines.length>1?218:174,24,c.ink,500);
  const motif = `<path d="M90 238H1510" stroke="${c.gold}" stroke-width="3"/><circle cx="1500" cy="80" r="38" fill="${c.gold}" opacity=".18"/><path d="M1460 80h80m-40-40v80" stroke="${c.olive}" stroke-width="4" opacity=".55"/>`;
  const footer = text('A useful next step is small enough to test.',800,790,27,c.ink,600,'Georgia, Times New Roman, serif','middle');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"><rect width="1600" height="900" fill="${c.paper}"/><path d="M0 0h24v900H0" fill="${c.ink}"/>${motif}${titleSvg}${subtitleSvg}${cards}${footer}</svg>`;
}

function mobileSvg(entry,index) {
  const c=palettes[index%palettes.length];
  const [name,title,subtitle,...rest]=entry;const symbol=rest.pop();
  const steps=rest.map(value=>{const [label,note]=value.split('|');return{label,note}});
  const titleLines=splitLabel(title,22).slice(0,3);
  let body=titleLines.map((line,i)=>text(line,58,108+i*58,46,c.ink,700,'Georgia, Times New Roman, serif')).join('');
  const subY=130+titleLines.length*53;
  const subtitleLines=splitLabel(subtitle,37).slice(0,2);
  body+=subtitleLines.map((line,i)=>text(line,60,subY+18+i*43,38,c.ink,500)).join('');
  const startY=subY+94, cardH=240, gap=26;
  steps.forEach((step,i)=>{
    const y=startY+i*(cardH+gap), accent=[c.rust,c.olive,c.gold,c.ink][(i+index)%4];
    body+=`<rect x="54" y="${y}" width="792" height="${cardH}" rx="30" fill="${c.pale}" stroke="${accent}" stroke-width="4"/><circle cx="112" cy="${y+62}" r="35" fill="${accent}"/><text x="112" y="${y+73}" text-anchor="middle" font-family="Arial,sans-serif" font-size="36" font-weight="700" fill="${c.pale}">${String(i+1).padStart(2,'0')}</text>${icon(stepIcon(step.label,symbol,i),740,y+22,c)}`;
    const lines=splitLabel(step.label,25).slice(0,2);
    lines.forEach((line,j)=>{body+=text(line,165,y+88+j*40,38,c.ink,700,'Georgia, Times New Roman, serif')});
    const noteLines=splitLabel(step.note,39).slice(0,2);
    const noteY=y+(lines.length>1?169:129);
    body+=noteLines.map((line,j)=>text(line,68,noteY+j*37,38,c.ink,500)).join('');
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1500" viewBox="0 0 900 1500"><rect width="900" height="1500" fill="${c.paper}"/><path d="M0 0h18v1500H0" fill="${c.ink}"/><circle cx="832" cy="92" r="54" fill="${c.gold}" opacity=".18"/>${body}</svg>`;
}

await mkdir(output,{recursive:true});
for (const [index,entry] of topics.entries()) {
  const [name]=entry;
  await sharp(Buffer.from(desktopSvg(entry,index))).webp({quality:78,effort:6}).toFile(`${output}/${name}.webp`);
  await sharp(Buffer.from(mobileSvg(entry,index))).webp({quality:77,effort:6}).toFile(`${output}/${name}-mobile.webp`);
}
const textureSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"><rect width="1600" height="900" fill="#e8dfce"/><path d="M120 690C280 470 360 520 510 360S760 240 890 370s190 245 360 95 250-160 330-80" fill="none" stroke="#bd5f49" stroke-width="42" stroke-linecap="round" opacity=".72"/><path d="M90 760C250 540 350 590 500 430s260-120 390 10 190 245 360 95 250-160 330-80" fill="none" stroke="#6d8066" stroke-width="14" stroke-linecap="round" opacity=".74"/><circle cx="1280" cy="260" r="178" fill="#d6ad5c" opacity=".56"/><circle cx="1280" cy="260" r="126" fill="none" stroke="#19354a" stroke-width="7" opacity=".42"/><path d="M1170 260h220M1280 150v220" stroke="#19354a" stroke-width="5" opacity=".38"/><circle cx="310" cy="250" r="95" fill="#fffaf0" opacity=".78"/><path d="M265 250h90m-45-45v90" stroke="#19354a" stroke-width="8" stroke-linecap="round" opacity=".55"/></svg>`;
await sharp(Buffer.from(textureSvg)).webp({quality:78,effort:6}).toFile(`${output}/skill-first-texture.webp`);
console.log(`Wrote ${topics.length*2} responsive editorial WebP panel images and one text-free decorative texture.`);
