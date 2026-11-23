// Small helpers shared by the counselling and career-planning worksheets.
// Plain text for WhatsApp, a clean print sheet (works with Telugu and Hindi text because
// the browser prints with the phone's own fonts), dated steps and friendly validation.

export type Section = { h: string; p?: string[]; ul?: string[]; ol?: string[] };
export type Sheet = { title: string; sub?: string; sections: Section[] };

export const esc = (value: unknown): string =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c));

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** Example: Mon 23 Nov 2026. No commas, so it reads cleanly inside a sentence. */
export const fmtDate = (d: Date): string => `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
/** Trims spaces and trailing full stops, commas and colons so a typed phrase can sit inside a sentence without doubled punctuation. A question mark is kept. */
export const tidy = (text: string): string => String(text ?? '').trim().replace(/[\s.!,;:]+$/, '');
/** Lower-cases the first letter of an English phrase ("Data analysis" to "data analysis") so it reads well mid-sentence. Leaves acronyms and other scripts alone. */
export const soft = (text: string): string => (/^(?!I[ '])[A-Z](?=[a-z ])/.test(text) ? text.charAt(0).toLowerCase() + text.slice(1) : text);
export const addDays = (n: number, from: Date = new Date()): Date => { const d = new Date(from.getFullYear(), from.getMonth(), from.getDate()); d.setDate(d.getDate() + n); return d; };
export const isoDate = (d: Date): string => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const parseIso = (value: string): Date | null => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || ''); if (!m) return null; const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])); return Number.isNaN(d.getTime()) ? null : d; };

/** Plain text that pastes cleanly into WhatsApp (single asterisks make bold there). */
export function plainText(sheet: Sheet, url: string): string {
  const out: string[] = [`*${sheet.title}*`];
  if (sheet.sub) out.push(sheet.sub);
  for (const s of sheet.sections) {
    out.push('', `*${s.h}*`);
    (s.p || []).forEach((line) => out.push(line));
    (s.ul || []).forEach((line) => out.push(`• ${line}`));
    (s.ol || []).forEach((line, i) => out.push(`${i + 1}. ${line}`));
  }
  out.push('', `Made with the free tool at ${url}`);
  return out.join('\n');
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch { /* fall through to the older method */ }
  try {
    const area = document.createElement('textarea');
    area.value = text; area.setAttribute('readonly', ''); area.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(area); area.select(); area.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy'); area.remove(); return ok;
  } catch { return false; }
}

const STYLE_ID = 'fcs-kit-style';
function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
.fcs-actions{display:flex;flex-wrap:wrap;gap:.6rem;margin:1rem 0 .2rem}
.fcs-actions button,.fcs-btn{min-height:44px;padding:.55rem .95rem;border:1px solid rgba(255,255,255,.28);border-radius:10px;background:rgba(255,255,255,.08);color:#fff;font:inherit;font-weight:650;cursor:pointer}
.fcs-actions button:first-child{background:#129a8d;border-color:#129a8d}
.fcs-actions button:focus-visible,.fcs-btn:focus-visible{outline:3px solid #e5b84a;outline-offset:2px}
.fcs-copy-box{display:block;width:100%;min-height:9rem;margin:.6rem 0;padding:.6rem;border:1px solid rgba(255,255,255,.3);border-radius:10px;background:#101927;color:#fff;font:inherit;font-size:.9rem}
.fcs-invalid{border-color:#ffb0b0!important;box-shadow:0 0 0 2px rgba(255,176,176,.35)}
.fcs-wrap{overflow-wrap:anywhere;word-break:break-word}
.fcs-steps{counter-reset:fcs;list-style:none;margin:.4rem 0;padding:0;display:grid;gap:.6rem}
.fcs-steps li{counter-increment:fcs;position:relative;padding:.7rem .8rem .7rem 3rem;border:1px solid rgba(255,255,255,.16);border-radius:12px;background:rgba(255,255,255,.04);line-height:1.55;color:rgba(255,255,255,.86)}
.fcs-steps li::before{content:counter(fcs);position:absolute;left:.7rem;top:.7rem;width:1.7rem;height:1.7rem;border-radius:50%;background:#e5b84a;color:#17130a;font-weight:800;display:grid;place-items:center}
.fcs-steps b{display:block;color:#f7d88c;font-size:.82rem;letter-spacing:.04em;text-transform:uppercase}
#fcs-print-sheet{display:none}
@media print{
  body.fcs-printing > *:not(#fcs-print-sheet){display:none!important}
  body.fcs-printing{background:#fff!important;color:#111!important}
  body.fcs-printing #fcs-print-sheet{display:block!important;position:static!important;background:#fff;color:#111;font:12pt/1.5 system-ui,'Noto Sans','FCS Noto Sans Telugu','FCS Noto Sans Devanagari','Noto Sans Telugu','Noto Sans Devanagari',Arial,sans-serif;padding:0;max-width:none}
  #fcs-print-sheet h1{font-size:19pt;margin:0 0 .2rem;color:#0b766d}
  #fcs-print-sheet h2{font-size:13pt;margin:1.1rem 0 .3rem;color:#111;border-bottom:1px solid #999;padding-bottom:.15rem;break-after:avoid}
  #fcs-print-sheet p,#fcs-print-sheet li{margin:.2rem 0;color:#111;overflow-wrap:anywhere;break-inside:avoid}
  #fcs-print-sheet ul,#fcs-print-sheet ol{margin:.2rem 0 .2rem 1.3rem;padding:0}
  #fcs-print-sheet .fcs-ps-sub{color:#444}
  #fcs-print-sheet .fcs-ps-foot{margin-top:1.4rem;padding-top:.5rem;border-top:1px solid #999;font-size:9.5pt;color:#444}
}`;
  document.head.appendChild(style);
}

export function sheetHtml(sheet: Sheet, url: string): string {
  const body = sheet.sections.map((s) => `<h2>${esc(s.h)}</h2>${(s.p || []).map((t) => `<p>${esc(t)}</p>`).join('')}${s.ul?.length ? `<ul>${s.ul.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}${s.ol?.length ? `<ol>${s.ol.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>` : ''}`).join('');
  return `<h1>${esc(sheet.title)}</h1>${sheet.sub ? `<p class="fcs-ps-sub">${esc(sheet.sub)}</p>` : ''}${body}<p class="fcs-ps-foot">Made on ${esc(fmtDate(new Date()))} with the free tool at ${esc(url)}. Your answers stayed in your browser. This sheet is a planning aid and does not replace official rules or advice from a qualified person.</p>`;
}

const INDIC_FONTS = [
  { family: 'FCS Noto Sans Telugu', url: '/fonts/NotoSansTelugu-Regular.woff2', test: /[\u0C00-\u0C7F]/ },
  { family: 'FCS Noto Sans Devanagari', url: '/fonts/NotoSansDevanagari-Regular.woff2', test: /[\u0900-\u097F]/ },
];
const fontsLoaded = new Set<string>();
/** Loads the site's own Telugu or Devanagari font (the same small files the PDF tools use) when the sheet has that script, so printing looks the same on every device. */
async function ensureIndicFonts(text: string): Promise<void> {
  if (typeof FontFace === 'undefined') return;
  await Promise.all(INDIC_FONTS.filter((f) => f.test.test(text) && !fontsLoaded.has(f.family)).map(async (f) => {
    try { const face = new FontFace(f.family, `url(${f.url})`); await face.load(); document.fonts.add(face); fontsLoaded.add(f.family); } catch { /* the device fonts are used instead */ }
  }));
}

export async function printSheet(sheet: Sheet, url: string): Promise<void> {
  ensureStyle();
  await ensureIndicFonts(JSON.stringify(sheet));
  document.getElementById('fcs-print-sheet')?.remove();
  const holder = document.createElement('div');
  holder.id = 'fcs-print-sheet';
  holder.innerHTML = sheetHtml(sheet, url);
  document.body.appendChild(holder);
  document.body.classList.add('fcs-printing');
  const oldTitle = document.title;
  document.title = sheet.title;
  const cleanup = () => { document.body.classList.remove('fcs-printing'); document.title = oldTitle; holder.remove(); window.removeEventListener('afterprint', cleanup); };
  window.addEventListener('afterprint', cleanup);
  window.setTimeout(() => window.print(), 50);
}

export const actionsHtml = (): string => '<div class="fcs-actions" data-no-print><button type="button" data-fcs-act="copy">Copy my result</button><button type="button" data-fcs-act="print">Print or save as PDF</button></div>';

/** Wires the two buttons above inside `root`. `getSheet` returns the latest result, or null when there is none. */
export function bindActions(root: HTMLElement, getSheet: () => Sheet | null, url: string, status: HTMLElement): void {
  ensureStyle();
  root.addEventListener('click', async (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-fcs-act]');
    if (!button) return;
    const sheet = getSheet();
    if (!sheet) { status.textContent = 'Make your result first, then copy or print it.'; return; }
    if (button.dataset.fcsAct === 'print') { printSheet(sheet, url); status.textContent = 'Opening print. Choose "Save as PDF" to keep a copy.'; return; }
    const text = plainText(sheet, url);
    const ok = await copyText(text);
    root.querySelector('.fcs-copy-box')?.remove();
    if (ok) { status.textContent = 'Copied. Paste it into WhatsApp or a message.'; return; }
    const box = document.createElement('textarea');
    box.className = 'fcs-copy-box'; box.readOnly = true; box.value = text; box.setAttribute('aria-label', 'Your result as text. Select all and copy.');
    button.closest('.fcs-actions')?.after(box);
    box.focus(); box.select();
    status.textContent = 'Copy did not work on this phone. The text is selected below: press and hold, then choose Copy.';
  });
}

/** Marks empty required fields, says which ones in plain words, and returns true when all are filled. */
export function checkRequired(form: HTMLFormElement, status: HTMLElement): boolean {
  const missing: HTMLElement[] = [];
  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]').forEach((field) => {
    const empty = !String(field.value || '').trim();
    field.classList.toggle('fcs-invalid', empty);
    field.setAttribute('aria-invalid', empty ? 'true' : 'false');
    if (empty) missing.push(field);
  });
  if (!missing.length) return true;
  const names = missing.map((field) => (field.closest('label')?.querySelector('span')?.textContent || field.getAttribute('aria-label') || field.getAttribute('name') || 'a required answer').replace(/\s*\(required\)\s*/i, '').trim());
  status.textContent = `Please fill in ${missing.length === 1 ? 'this answer' : `these ${missing.length} answers`} first: ${names.join('; ')}. Tap "Try an example" if you want to see how it works.`;
  missing[0].focus();
  return false;
}

export function clearInvalidOnInput(form: HTMLFormElement): void {
  form.addEventListener('input', (event) => { const t = event.target as HTMLElement; t.classList?.remove('fcs-invalid'); t.removeAttribute?.('aria-invalid'); });
}

/** Fills named fields from an example and tells the page. */
export function fillExample(form: HTMLFormElement, values: Record<string, string>): void {
  Object.entries(values).forEach(([name, value]) => {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
    if (field && 'value' in field) { field.value = value; field.classList.remove('fcs-invalid'); field.removeAttribute('aria-invalid'); }
  });
}

export function showResult(result: HTMLElement): void {
  result.hidden = false;
  const heading = result.querySelector<HTMLElement>('h3');
  if (heading) { heading.setAttribute('tabindex', '-1'); }
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  result.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  heading?.focus({ preventScroll: true });
}

/** A dated step list used by every planner: [label, plain text] pairs. */
export const stepsHtml = (steps: Array<{ when: string; text: string }>): string =>
  `<ol class="fcs-steps">${steps.map((s) => `<li><b>${esc(s.when)}</b><span class="fcs-wrap">${esc(s.text)}</span></li>`).join('')}</ol>`;
