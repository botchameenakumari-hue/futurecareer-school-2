// Small helpers shared by the money and planning tools (course cost, payback, runway,
// optionality, student business, scholarship, study abroad, provider comparison).
// Everything runs in the browser. Nothing is sent anywhere.

export const esc = (value: unknown): string =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] || c));

/** Whole rupees in Indian digit grouping, with a minus sign for losses. */
export const inr = (value: number): string => {
  const n = Math.round(Number.isFinite(value) ? value : 0);
  return (n < 0 ? '-' : '') + '₹' + Math.abs(n).toLocaleString('en-IN');
};

/** One decimal at most, no trailing .0 */
export const num1 = (value: number): string => {
  const r = Math.round(value * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
};

/**
 * Reads a typed number. Commas and spaces are fine (1,80,000).
 * Returns null for an empty box and NaN for text that is not a number.
 */
export const parseNum = (raw: string | null | undefined): number | null => {
  const t = String(raw ?? '').replace(/[,\s₹]|Rs\.?/gi, '');
  if (t === '') return null;
  if (!/^-?\d*\.?\d+$/.test(t)) return NaN;
  return Number(t);
};

export const MAX_MONEY = 100000000000; // Rs 10,000 crore: far above any real course, salary or loan.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const dayLabel = (d: Date): string => `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
export const monthLabel = (d: Date): string => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
export const addDays = (d: Date, days: number): Date => { const r = new Date(d.getTime()); r.setDate(r.getDate() + Math.round(days)); return r; };
export const addMonths = (d: Date, months: number): Date => {
  const whole = Math.floor(months);
  const r = new Date(d.getFullYear(), d.getMonth() + whole, 1);
  const lastDay = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
  r.setDate(Math.min(d.getDate(), lastDay));
  return addDays(r, (months - whole) * 30);
};
export const startOfToday = (): Date => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
export const parseDateInput = (raw: string): Date | null => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw || '')) return null;
  const [y, m, d] = raw.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d ? dt : null;
};
export const daysBetween = (from: Date, to: Date): number => Math.round((to.getTime() - from.getTime()) / 86400000);

/**
 * Splits the days left before a deadline into three stages and keeps the last fifth spare
 * for slow portals and corrections. The stage dates come from the days the person entered.
 */
export const stageDates = (deadline: Date, today: Date = startOfToday()): { daysLeft: number; s1: Date; s2: Date; s3: Date } | null => {
  const daysLeft = daysBetween(today, deadline);
  if (daysLeft < 1) return null;
  const usable = daysLeft * 0.8;
  return { daysLeft, s1: addDays(today, usable * 0.35), s2: addDays(today, usable * 0.7), s3: addDays(today, usable) };
};

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(text); return true; }
  } catch { /* fall through to the old method */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; ta.style.top = '0';
    document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch { return false; }
}

/** Prints plain text through a hidden frame, so no pop-up is needed on a phone. */
export function printPlainText(title: string, text: string): void {
  const frame = document.createElement('iframe');
  frame.setAttribute('aria-hidden', 'true');
  frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden';
  document.body.appendChild(frame);
  const doc = frame.contentDocument;
  if (!doc || !frame.contentWindow) { frame.remove(); return; }
  doc.open();
  doc.write(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title><style>body{font:14px/1.6 system-ui,"Noto Sans","Noto Sans Telugu","Noto Sans Devanagari",sans-serif;color:#111;margin:24px;max-width:720px}h1{font-size:18px;margin:0 0 12px}pre{white-space:pre-wrap;word-wrap:break-word;font:inherit;margin:0}p{font-size:12px;color:#444;margin-top:18px}</style></head><body><h1>${esc(title)}</h1><pre>${esc(text)}</pre><p>Made with the free tools at futurecareerschool.com. A planning estimate from the numbers you typed, not advice. Check every figure with the official source before you pay.</p></body></html>`);
  doc.close();
  const cleanup = () => setTimeout(() => frame.remove(), 1500);
  frame.contentWindow.addEventListener('afterprint', cleanup);
  setTimeout(() => { try { frame.contentWindow?.focus(); frame.contentWindow?.print(); } catch { /* ignore */ } cleanup(); }, 150);
}

let styled = false;
function ensureStyle(): void {
  if (styled || document.getElementById('mtk-style')) { styled = true; return; }
  const s = document.createElement('style');
  s.id = 'mtk-style';
  s.textContent = `.mtk-bar{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin:1rem 0 .2rem}.mtk-btn{min-height:44px;padding:.55rem .95rem;border:1px solid rgba(255,255,255,.3);border-radius:10px;background:rgba(255,255,255,.08);color:#fff;font:inherit;font-weight:700;cursor:pointer}.mtk-btn:hover{background:rgba(255,255,255,.14)}.mtk-btn:focus-visible,.mtk-ex:focus-visible{outline:3px solid #e5b84a;outline-offset:2px}.mtk-msg{font-size:.88rem;color:rgba(255,255,255,.75)}.mtk-ex{min-height:44px;padding:.55rem .95rem;border:1px dashed rgba(229,184,74,.7);border-radius:10px;background:rgba(229,184,74,.08);color:#f7d88c;font:inherit;font-weight:700;cursor:pointer}.mtk-exnote{margin:.4rem 0 0;font-size:.82rem;color:rgba(255,255,255,.62)}.mtk-err{margin:.2rem 0 0;padding:.6rem .8rem;border-left:3px solid #ff8a80;background:rgba(255,138,128,.1);color:#ffd2cd;font-size:.92rem;line-height:1.5}.mtk-steps{margin:.8rem 0 0;padding:1rem;border:1px solid rgba(45,212,191,.4);border-radius:12px;background:rgba(45,212,191,.07)}.mtk-steps h3{margin:0 0 .5rem;font-size:1.05rem}.mtk-steps ol{margin:0;padding-left:1.3rem}.mtk-steps li{margin:.35rem 0;line-height:1.55;color:rgba(255,255,255,.85)}.mtk-table{width:100%;border-collapse:collapse;font-size:.9rem;margin-top:.5rem}.mtk-table th,.mtk-table td{padding:.5rem .55rem;border:1px solid rgba(255,255,255,.16);text-align:left;vertical-align:top}.mtk-table th{background:rgba(255,255,255,.07)}.mtk-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch}.mtk-small{font-size:.86rem;color:rgba(255,255,255,.7);line-height:1.55}.mtk-safe{margin-top:.8rem;padding:.7rem .85rem;border-left:3px solid #e5b84a;background:rgba(229,184,74,.08);font-size:.9rem;line-height:1.55;color:rgba(255,255,255,.82)}@media(max-width:480px){.mtk-btn,.mtk-ex{width:100%}.mtk-table{font-size:.84rem}}`;
  document.head.appendChild(s);
  styled = true;
}

/** Puts "Copy my result" and "Print or save as PDF" buttons at the end of a result block. */
export function addResultTools(mount: HTMLElement, getText: () => string, title: string): void {
  ensureStyle();
  mount.querySelectorAll('.mtk-bar').forEach((el) => el.remove());
  const bar = document.createElement('div');
  bar.className = 'mtk-bar';
  bar.innerHTML = '<button type="button" class="mtk-btn" data-mtk="copy">Copy my result</button><button type="button" class="mtk-btn" data-mtk="print">Print or save as PDF</button><span class="mtk-msg" role="status" aria-live="polite"></span>';
  const msg = bar.querySelector<HTMLElement>('.mtk-msg')!;
  bar.querySelector('[data-mtk="copy"]')!.addEventListener('click', async () => {
    const ok = await copyText(getText());
    msg.textContent = ok ? 'Copied. Paste it into WhatsApp or a note.' : 'Copy did not work on this phone. Use Print or save as PDF instead.';
  });
  bar.querySelector('[data-mtk="print"]')!.addEventListener('click', () => {
    printPlainText(title, getText());
    msg.textContent = 'Choose Save as PDF in the print window to keep a copy.';
  });
  mount.appendChild(bar);
}

/** Shows or clears a clear error message above the buttons of a form. */
export function showError(box: HTMLElement | null, message: string, focusEl?: HTMLElement | null): void {
  if (!box) return;
  ensureStyle();
  if (!message) { box.textContent = ''; box.hidden = true; box.className = ''; return; }
  box.hidden = false; box.className = 'mtk-err'; box.setAttribute('role', 'alert'); box.textContent = message;
  if (focusEl) { try { focusEl.focus(); } catch { /* ignore */ } }
}

/** Builds the "Try an example" button and its note. Returns the wrapper to place in the form. */
export function exampleButton(label: string, note: string, onClick: () => void): HTMLElement {
  ensureStyle();
  const wrap = document.createElement('div');
  wrap.className = 'mtk-exwrap';
  wrap.innerHTML = `<button type="button" class="mtk-ex">${esc(label)}</button><p class="mtk-exnote">${esc(note)}</p>`;
  wrap.querySelector('button')!.addEventListener('click', onClick);
  return wrap;
}

export function fillFields(root: ParentNode, selector: (key: string) => string, values: Record<string, string>): void {
  Object.entries(values).forEach(([key, value]) => {
    const el = root.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(selector(key));
    if (el) el.value = value;
  });
}
