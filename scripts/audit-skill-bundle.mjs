import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path'; import os from 'node:os'; import fs from 'node:fs';
const files = process.argv.slice(2);
for (const f of files) {
  const out = path.join(os.tmpdir(), 'aud-' + path.basename(f, '.ts') + Date.now() + '.mjs');
  await build({ entryPoints: [f], outfile: out, bundle: true, format: 'esm', platform: 'node', logLevel: 'silent' });
  const { bundle: b } = await import(pathToFileURL(out).href); fs.unlinkSync(out);
  const issues = [];
  const pos = [0,0,0,0], longest = [0,0,0,0];
  b.scenarios.forEach((s, i) => {
    const bi = s.opts.findIndex((o) => o.s === 100); pos[bi]++;
    const li = s.opts.reduce((m, o, k, a) => (o.t.length > a[m].t.length ? k : m), 0); if (li === bi) longest[0]++;
    const sc = s.opts.map((o) => o.s); if (new Set(sc).size < 3) issues.push('scenario ' + i + ' few distinct scores ' + sc);
    s.opts.forEach((o) => { if (o.a.length < 70) issues.push('scenario ' + i + ' thin advice: ' + o.a.slice(0, 50)); });
  });
  if (Math.max(...pos) > b.scenarios.length * 0.45) issues.push('best option position skew ' + pos);
  if (longest[0] > b.scenarios.length * 0.6) issues.push('best option is longest in ' + longest[0] + '/' + b.scenarios.length);
  const seen = new Map();
  const add = (s, where) => { const k = s.trim().toLowerCase(); if (k.length > 40) { if (seen.has(k)) issues.push('duplicate text: ' + where + ' = ' + seen.get(k) + ' :: ' + s.slice(0, 60)); else seen.set(k, where); } };
  b.depth.tips.forEach((t, i) => { add(t, 'tip' + i); if (t.length < 70) issues.push('short tip ' + i + ': ' + t); });
  b.extras.forEach((e, i) => { add(e.tip, 'extraTip' + i); add(e.text, 'extra' + i); if (e.tip.length < 70) issues.push('short extra tip ' + i); });
  b.test.questions.forEach((q, i) => add(q.text, 'q' + i));
  for (const st in b.stageAdvice) for (const d in b.stageAdvice[st]) { const a = b.stageAdvice[st][d]; add(a.situation, st + '/' + d + '/sit'); a.actions.forEach((x, k) => { add(x, st + '/' + d + '/act' + k); if (x.length < 60) issues.push('short stage action ' + st + '/' + d); }); }
  for (const k in b.depth.domains) { const dd = b.depth.domains[k]; [...dd.routine, ...dd.mistakes, ...dd.proof, ...dd.roles, ...dd.talkingPoints].forEach((s) => add(s, k + '/depth')); }
  const rev = b.test.questions.filter((q) => q.reverse).length + b.extras.filter((e) => e.reverse).length;
  const tot = b.test.questions.length + b.extras.length;
  if (rev / tot < 0.2) issues.push('few reverse-worded statements ' + rev + '/' + tot);
  b.depth.stages.forEach((s) => { if (s.actions.length < 3) issues.push('stage actions < 3'); });
  console.log(path.basename(f), 'bestPos', pos.join('/'), 'bestIsLongest', longest[0] + '/' + b.scenarios.length, 'reverse', rev + '/' + tot, issues.length ? '\n   ' + issues.slice(0, 25).join('\n   ') : 'clean');
}
