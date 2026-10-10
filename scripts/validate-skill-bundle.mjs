// Usage: node scripts/validate-skill-bundle.mjs <file> [<file>...]
// Checks that a skill test bundle in src/config/skillTests has every piece the
// shared page needs, in the right shape. Exits 1 on problems.
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';

let bad = 0;
for (const f of process.argv.slice(2)) {
  const out = path.join(os.tmpdir(), 'bundle-' + path.basename(f, '.ts') + '-' + Date.now() + '.mjs');
  await build({ entryPoints: [f], outfile: out, bundle: true, format: 'esm', platform: 'node', logLevel: 'silent' });
  const mod = await import(pathToFileURL(out).href + '?' + Date.now());
  fs.unlinkSync(out);
  const b = mod.bundle;
  const errs = [];
  const err = (m) => errs.push(m);
  if (!b) { console.log(f, 'no export named bundle'); bad++; continue; }
  const t = b.test, D = b.depth;
  const keys = (t.domains || []).map((d) => d.key);
  if (keys.length < 4 || keys.length > 6) err('domains should be 4-6, got ' + keys.length);
  const stages = (D.stages || []).map((s) => s.key);
  if (stages.length < 2) err('need at least 2 stages');
  if (!/^[a-z0-9-]+$/.test(t.slug)) err('bad slug');
  if (t.pageUrl !== '/services/assessments/' + t.slug + '/') err('pageUrl should be /services/assessments/' + t.slug + '/ got ' + t.pageUrl);
  if (t.id !== t.slug) err('id should equal slug');
  if (!t.metaTitle || t.metaTitle.length > 70) err('metaTitle missing or over 70 chars (' + (t.metaTitle || '').length + ')');
  if (!t.metaDescription || t.metaDescription.length < 110 || t.metaDescription.length > 165) err('metaDescription 110-165 chars (' + (t.metaDescription || '').length + ')');
  if (t.questions.length < 18) err('need >= 18 core statements, got ' + t.questions.length);
  if (D.tipsUp && D.tipsUp.length !== t.questions.length) err('tipsUp length ' + D.tipsUp.length + ' != questions ' + t.questions.length);
  if (D.tipsUp) D.tipsUp.forEach((u, i) => { if (!u || u.length < 60) err('short tipsUp ' + i); if (u === D.tips[i]) err('tipsUp same as tip ' + i); });
  b.extras.forEach((e, i) => { if (b.depth.tipsUp && (!e.up || e.up.length < 60)) err('extra ' + i + ' needs up (take-it-further) text'); });
  if (D.tips.length !== t.questions.length) err('tips ' + D.tips.length + ' != questions ' + t.questions.length);
  t.questions.forEach((q, i) => { if (!keys.includes(q.d)) err('question ' + i + ' bad domain ' + q.d); });
  keys.forEach((k) => {
    const n = t.questions.filter((q) => q.d === k).length;
    if (n < 3) err('domain ' + k + ' has only ' + n + ' core statements');
    const dd = D.domains[k];
    if (!dd) return err('depth missing domain ' + k);
    for (const f2 of ['why', 'askOthers', 'midStep']) if (!dd[f2]) err(k + ' depth missing ' + f2);
    for (const f2 of ['roles', 'routine', 'mistakes', 'proof', 'talkingPoints']) if (!Array.isArray(dd[f2]) || dd[f2].length < 3) err(k + ' depth.' + f2 + ' needs >= 3');
    if (dd.routine && dd.routine.length < 4) err(k + ' routine needs 4');
    const dm = t.domains.find((d) => d.key === k);
    if (!dm.plan || dm.plan.length < 3) err(k + ' plan needs >= 3');
    if (!dm.short || !dm.strong || !dm.weak) err(k + ' missing short/strong/weak');
    if (!b.phrases[k] || b.phrases[k].length !== 3) err(k + ' needs 3 phrases');
    if (!b.talk[k] || !b.talk[k].q || !b.talk[k].a || !b.talk[k].line) err(k + ' talk incomplete');
    const sc = b.scenarios.filter((s) => s.d === k && !s.stages).length;
    if (sc < 2) err(k + ' needs >= 2 general scenarios, has ' + sc);
    stages.forEach((st) => {
      const a = b.stageAdvice[st] && b.stageAdvice[st][k];
      if (!a || !a.situation || !a.actions || a.actions.length !== 2) err('stageAdvice missing/short for ' + st + '/' + k);
    });
  });
  stages.forEach((st) => {
    if (!b.stagePlan[st] || b.stagePlan[st].length !== 4) err('stagePlan needs 4 steps for ' + st);
    const n = b.extras.filter((e) => e.stages.includes(st)).length;
    if (n < 4) err('stage ' + st + ' has only ' + n + ' extra statements');
  });
  b.extras.forEach((e, i) => { if (!keys.includes(e.d)) err('extra ' + i + ' bad domain'); e.stages.forEach((s) => { if (!stages.includes(s)) err('extra ' + i + ' bad stage ' + s); }); if (!e.tip) err('extra ' + i + ' no tip'); });
  b.scenarios.forEach((s, i) => {
    if (!keys.includes(s.d)) err('scenario ' + i + ' bad domain');
    if (s.opts.length !== 4) err('scenario ' + i + ' needs 4 options');
    if (!s.opts.some((o) => o.s === 100)) err('scenario ' + i + ' needs a 100 option');
    if (new Set(s.opts.map((o) => o.t)).size !== 4) err('scenario ' + i + ' duplicate options');
    s.opts.forEach((o) => { if (!o.a || o.a.length < 40) err('scenario ' + i + ' short advice'); });
    (s.stages || []).forEach((st) => { if (!stages.includes(st)) err('scenario ' + i + ' bad stage ' + st); });
  });
  if (!['interview', 'ask'].includes(b.talkTitles.mode)) err('talkTitles.mode must be interview or ask');
  if (!t.faqs || t.faqs.length < 5) err('need >= 5 faqs');
  if (!t.limits || t.limits.length < 4) err('need >= 4 limits');
  if (!t.related || t.related.length < 3) err('need >= 3 related links');
  (t.related || []).forEach((r) => { if (!r.href.startsWith('/') || !r.href.endsWith('/')) err('related href format ' + r.href); });
  if (!t.readingSections || t.readingSections.length < 3) err('need >= 3 readingSections');
  const total = JSON.stringify(b);
  for (const re of [/\bvisitors?\b/i, /\breaders?\b/i, /\busers?\b/i, /\bemail us\b/i, /\bcall us\b/i, /\bguarantee/i, /\bpercentile\b.*\b(top|rank)/i, /\bscientifically\b/i, /\bclinical(ly)? (valid|proven)/i, /—/]) {
    const m = total.match(re); if (m) err('banned wording: ' + m[0]);
  }
  const sCount = t.questions.length + b.extras.filter((e) => e.stages.includes(stages[0])).length + b.scenarios.filter((s) => !s.stages || s.stages.includes(stages[0])).length;
  console.log(path.basename(f), errs.length ? 'PROBLEMS' : 'OK', '| domains', keys.length, '| core', t.questions.length, '| extras', b.extras.length, '| scenarios', b.scenarios.length, '| first-stage total', sCount);
  errs.forEach((e) => console.log('   -', e));
  if (errs.length) bad++;
}
process.exit(bad ? 1 : 0);
