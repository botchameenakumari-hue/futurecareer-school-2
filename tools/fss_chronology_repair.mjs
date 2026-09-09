import fs from 'node:fs';

const root = 'C:\\Users\\Asus\\Downloads\\future-skill-school\\src\\pages';

function closingDiv(html, start) {
  const tag = /<\/?div\b[^>]*>/gi;
  tag.lastIndex = start;
  let depth = 0;
  for (let match; (match = tag.exec(html)); ) {
    if (match[0].startsWith('</')) depth -= 1;
    else depth += 1;
    if (depth === 0) return tag.lastIndex;
  }
  throw new Error('Unclosed div');
}

function cardRangeByText(html, text) {
  const textAt = html.indexOf(text);
  if (textAt < 0) throw new Error(`Missing text: ${text}`);
  const start = html.lastIndexOf('<div class="card', textAt);
  if (start < 0) throw new Error(`No card before: ${text}`);
  return { start, end: closingDiv(html, start) };
}

function moveBefore(html, range, marker) {
  const block = html.slice(range.start, range.end);
  let without = html.slice(0, range.start) + html.slice(range.end);
  const at = without.indexOf(marker);
  if (at < 0) throw new Error(`Missing insertion marker: ${marker}`);
  return without.slice(0, at) + block + '\n\n' + without.slice(at);
}

function swap(html, first, second) {
  if (first.start > second.start) return swap(html, second, first);
  return html.slice(0, first.start)
    + html.slice(second.start, second.end)
    + html.slice(first.end, second.start)
    + html.slice(first.start, first.end)
    + html.slice(second.end);
}

function sectionRange(html, id) {
  const start = html.indexOf(`<section id="${id}"`);
  if (start < 0) throw new Error(`Missing section: ${id}`);
  const end = html.indexOf('</section>', start);
  if (end < 0) throw new Error(`Unclosed section: ${id}`);
  return { start, end: end + '</section>'.length };
}

function moveSectionPart(html, startMarker, endMarker, beforeMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start < 0 || end < 0) throw new Error(`Missing move markers: ${startMarker}`);
  const block = html.slice(start, end);
  const without = html.slice(0, start) + html.slice(end);
  const at = without.indexOf(beforeMarker);
  if (at < 0) throw new Error(`Missing insertion marker: ${beforeMarker}`);
  return without.slice(0, at) + block + '\n\n' + without.slice(at);
}

function write(name, change) {
  const file = `${root}\\${name}`;
  const original = fs.readFileSync(file, 'utf8');
  const updated = change(original);
  fs.writeFileSync(file, updated, 'utf8');
}

write('school-career-dashboard.html', html => {
  html = swap(
    html,
    cardRangeByText(html, 'Which Stream Fits You? A 60-Second Self-Check'),
    cardRangeByText(html, 'The Big Picture First')
  );
  return moveBefore(
    html,
    cardRangeByText(html, 'Weekly Time Budget'),
    '<div class="card">\n <div class="card-header">\n <div class="card-icon" style="background:rgba(99,102,241,.12)"></div>\n <div><h2>Class 9 - Foundation Year</h2>'
  );
});

write('intermediate-career-dashboard.html', html => moveBefore(
  html,
  cardRangeByText(html, 'Weekly Time Budget - Class 11-12'),
  '<div class="card">\n <div class="card-header">\n <div class="card-icon" style="background:rgba(99,102,241,.12)"></div>\n <div><h2>Class 11 Plan</h2>'
));

write('student-career-dashboard.html', html => {
  const mod2 = sectionRange(html, 'mod2');
  const startMarker = '<h3 class="section-h3" style="--accent:#8b5cf6">Going Deeper - Becoming an AI Engineer (The MANGOS Roadmap)</h3>';
  const start = html.indexOf(startMarker, mod2.start);
  if (start < 0 || start >= mod2.end) throw new Error('Missing MANGOS roadmap');
  html = html.slice(0, start) + html.slice(mod2.end - '</section>'.length);
  html = moveSectionPart(
    html,
    startMarker,
    '</section>\n\n<section id="mod4"',
    '</section>\n\n<section id="mod4"'
  );
  return moveBefore(
    html,
    cardRangeByText(html, 'The Weekly Time Budget - How to Fit This Alongside College'),
    '<h3 class="section-h3" style="--accent:#6366f1">Year 1 - The Foundation Year'
  );
});
