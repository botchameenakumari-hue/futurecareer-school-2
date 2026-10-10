// Shared PDF shell for the career chart generators: print CSS, escaping, footer and Chromium rendering.
import { chromium } from 'playwright';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const css = `
@page { size: A4; margin: 14mm 13mm 18mm; }
* { box-sizing: border-box; }
body { font-family: 'Inter', 'Noto Sans', Arial, sans-serif; color: #17202e; font-size: 10.2px; line-height: 1.5; margin: 0; }
h1 { font-size: 24px; line-height: 1.2; margin: 0 0 4px; color: #0b1f3a; }
h2 { font-size: 14px; margin: 18px 0 7px; color: #0b1f3a; border-bottom: 2px solid #0f9d8a; padding-bottom: 3px; break-after: avoid; }
h3 { font-size: 11.6px; margin: 0 0 3px; color: #0b1f3a; }
p { margin: 0 0 5px; }
.brand { display:flex; justify-content:space-between; align-items:flex-end; border-bottom: 3px solid #0b1f3a; padding-bottom: 8px; margin-bottom: 10px; }
.wordmark { font-weight: 800; font-size: 12px; letter-spacing: .04em; color:#0f9d8a; text-transform: uppercase; }
.sub { color:#4b5a6d; font-size: 11px; margin-top: 2px; }
.stamp { text-align:right; font-size: 9px; color:#4b5a6d; }
.lead { font-size: 11px; margin: 6px 0 4px; }
.card { border: 1px solid #d5dce6; border-left-width: 5px; border-radius: 6px; padding: 8px 10px; margin: 0 0 8px; break-inside: avoid; background:#fff; }
.card .tag { display:inline-block; font-size: 8.5px; font-weight: 800; letter-spacing:.06em; text-transform: uppercase; color:#fff; padding: 1px 6px; border-radius: 9px; margin-bottom: 3px; }
.grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 0 14px; }
.lbl { font-weight: 800; font-size: 8.6px; letter-spacing:.06em; text-transform: uppercase; color:#4b5a6d; margin-top: 4px; }
ul { margin: 2px 0 3px; padding-left: 14px; } li { margin: 0 0 1.5px; }
.closes { color:#8a2b2b; }
table { width:100%; border-collapse: collapse; font-size: 9.2px; }
th { background:#0b1f3a; color:#fff; text-align:left; padding: 4px 6px; font-size: 8.6px; letter-spacing:.04em; text-transform: uppercase; }
td { border-bottom: 1px solid #dfe5ee; padding: 4px 6px; vertical-align: top; }
tr { break-inside: avoid; }
.swatch { display:inline-block; width:8px; height:8px; border-radius:2px; margin-right:5px; }
.flow { margin: 4px 0 6px; }
.fnode { border: 2px solid #0b1f3a; border-radius: 7px; padding: 5px 9px; background:#eef3fa; font-weight:700; display:inline-block; max-width: 100%; }
.fopts { margin: 0 0 0 16px; padding-left: 12px; border-left: 2px solid #9fb0c7; }
.fopt { margin: 7px 0 0; position: relative; }
.fopt::before { content:''; position:absolute; left:-12px; top:11px; width:12px; border-top: 2px solid #9fb0c7; }
.farrow { font-weight: 700; color:#0f6b5e; margin-right: 6px; }
.fterm { display:inline-block; color:#fff; border-radius: 7px; padding: 3px 9px; font-weight: 700; }
.fterm small { font-weight: 400; opacity:.92; margin-left: 5px; }
.bars { margin: 6px 0; break-inside: avoid; }
.flow-wrap { font-size: 11px; }
.plan { break-inside: avoid; }
.brow { display:flex; align-items:center; margin: 0 0 5px; break-inside: avoid; }
.blab { width: 150px; font-weight:700; font-size: 9.3px; padding-right: 8px; }
.btrack { flex:1; position:relative; height: 16px; background: repeating-linear-gradient(90deg, #f3f6fa 0, #f3f6fa calc(12.5% - 1px), #d9e0ea calc(12.5% - 1px), #d9e0ea 12.5%); border-radius: 3px; }
.bfill { position:absolute; left:0; top:0; height:100%; border-radius: 3px; }
.bext { position:absolute; top:4px; height:8px; opacity:.38; border-radius: 0 3px 3px 0; }
.bval { width: 150px; font-size: 8.6px; color:#4b5a6d; padding-left: 8px; }
.axis { display:flex; margin-left:150px; margin-right:150px; font-size:8px; color:#6b7788; justify-content: space-between; }
.note { background:#fff8e1; border:1px solid #ecd48a; border-radius:6px; padding:6px 9px; font-size: 9.4px; margin: 8px 0; break-inside: avoid; }
.chk { display:grid; grid-template-columns: repeat(2, 1fr); gap: 6px 10px; }
.chk div { border: 1px solid #d5dce6; border-radius: 6px; padding: 6px 8px; break-inside: avoid; }
.num { display:inline-block; width:16px; height:16px; line-height:16px; text-align:center; border-radius:50%; background:#0f9d8a; color:#fff; font-weight:800; font-size: 9px; margin-right: 5px; }
.fill { border-bottom: 1px solid #9fb0c7; height: 17px; margin-bottom: 2px; }
.cta { background:#0b1f3a; color:#fff; border-radius:8px; padding: 10px 14px; margin-top: 12px; break-inside: avoid; }
.cta a, .cta strong { color:#7ff0dc; }
a { color:#0f6b5e; text-decoration: none; }
.small { font-size: 8.8px; color:#4b5a6d; }
`;

export function brandHeader(title, subtitle, lastChecked, siteUrl = 'https://futurecareerschool.com') {
  return `<div class="brand"><div><div class="wordmark">Future Career School</div><h1>${esc(title)}</h1><div class="sub">${esc(subtitle)}</div></div>
  <div class="stamp">Last checked ${esc(lastChecked)}<br>${esc(siteUrl.replace('https://', ''))}</div></div>`;
}

export const footer = (lastChecked) => `<div style="font-size:8px;width:100%;padding:0 13mm;color:#6b7788;display:flex;justify-content:space-between;font-family:Inter,Arial,sans-serif">
<span>Future Career School · futurecareerschool.com · Last checked ${lastChecked}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;

export async function renderPdfs(items, lastChecked) {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const page = await browser.newPage();
  const results = [];
  for (const it of items) {
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(it.title)}</title><style>${css}</style></head><body>${it.body}</body></html>`;
    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({ path: it.out, format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: footer(lastChecked), margin: { top: '14mm', bottom: '18mm', left: '13mm', right: '13mm' } });
    results.push(it);
  }
  await browser.close();
  return results;
}
