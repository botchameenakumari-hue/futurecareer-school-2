// Renders the hero and social images for the career chart after 10th post from the shared chart data.
// Run: CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/build-career-chart-after-10th-images.mjs
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTE_FAMILIES, TIMELINE } from '../src/config/careerChartAfter10th.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'public/images/blog/stream-selection/career-chart-after-10th');
mkdirSync(out, { recursive: true });
const col = Object.fromEntries(ROUTE_FAMILIES.map((f) => [f.id, f.color]));

const card = (w, h) => {
  const bars = TIMELINE.map((t) => `<div style="display:flex;align-items:center;gap:18px;margin:${h > 700 ? 13 : 8}px 0">
    <div style="width:${w * 0.26}px;font-size:${h > 700 ? 24 : 18}px;font-weight:700;color:#e8eefc">${t.label}</div>
    <div style="flex:1;height:${h > 700 ? 24 : 17}px;background:rgba(255,255,255,0.08);border-radius:6px;position:relative">
      <div style="position:absolute;left:0;top:0;height:100%;width:${(t.from / 8) * 100}%;background:${col[t.family]};border-radius:6px"></div>
      ${t.to > t.from ? `<div style="position:absolute;left:${(t.from / 8) * 100}%;top:${h > 700 ? 8 : 5}px;height:${h > 700 ? 8 : 7}px;width:${((t.to - t.from) / 8) * 100}%;background:${col[t.family]};opacity:.45"></div>` : ''}
    </div>
    <div style="width:${w * 0.07}px;font-size:${h > 700 ? 22 : 16}px;font-weight:800;color:#fff;text-align:right">${t.to > t.from ? `${t.from}–${t.to}` : t.from} yrs</div></div>`).join('');
  const chips = ROUTE_FAMILIES.map((f) => `<span style="display:inline-block;margin:0 12px 10px 0;padding:7px 16px;border-radius:999px;background:${f.color};color:#fff;font-weight:700;font-size:${h > 700 ? 22 : 16}px">${f.label}</span>`).join('');
  return `<html><body style="margin:0;width:${w}px;height:${h}px;background:linear-gradient(135deg,#0b1220,#101b33);font-family:Inter,Arial,sans-serif;color:#fff;box-sizing:border-box;padding:${h > 700 ? 64 : 44}px ${h > 700 ? 76 : 54}px;overflow:hidden">
  <div style="color:#2dd4bf;font-weight:800;letter-spacing:.12em;text-transform:uppercase;font-size:${h > 700 ? 22 : 16}px">Future Career School</div>
  <div style="font-size:${h > 700 ? 78 : 56}px;font-weight:800;line-height:1.08;margin:12px 0 10px">Career chart after 10th</div>
  <div style="font-size:${h > 700 ? 30 : 22}px;color:#c5d0e6;margin-bottom:${h > 700 ? 30 : 18}px">Every route mapped by years until full-time work, with free PDFs</div>
  <div>${chips}</div>
  <div style="margin-top:${h > 700 ? 22 : 12}px">${bars}</div>
  <div style="position:absolute;right:${h > 700 ? 76 : 54}px;bottom:${h > 700 ? 40 : 24}px;color:#e5b84a;font-weight:800;font-size:${h > 700 ? 24 : 17}px">futurecareerschool.com</div></body></html>`;
};

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
for (const [name, w, h] of [['hero', 1600, 900], ['social', 1200, 630]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.setContent(card(w, h), { waitUntil: 'load' });
  const png = await page.screenshot();
  if (name === 'hero') await sharp(png).webp({ quality: 88 }).toFile(resolve(out, 'career-chart-after-10th-hero.webp'));
  else await sharp(png).jpeg({ quality: 88 }).toFile(resolve(out, 'career-chart-after-10th-social.jpg'));
}
await browser.close();
console.log('images written');
