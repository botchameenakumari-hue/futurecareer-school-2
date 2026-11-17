// Draws text that the standard PDF fonts cannot show: Telugu, Hindi (Devanagari), other scripts and emoji.
//
// Why pictures and not an embedded font: jsPDF can embed a TrueType font, but it does not join letters
// into the right shapes for Indic scripts (conjuncts, vowel signs before the letter). Telugu and Hindi
// then come out wrong. The browser does shape these scripts correctly, so each line that needs it is
// drawn onto a canvas with the browser and placed in the PDF as a transparent PNG.
//
// Cost: the two fonts in /public/fonts (about 36 KB and 50 KB, SIL Open Font Licence, see
// NOTO-FONTS-OFL.txt) are fetched only when a PDF button is pressed and the typed text holds those
// scripts. Nothing is loaded with the page. Lines that are plain English stay real, selectable PDF text.
// Other scripts (Tamil, Kannada, Bengali and so on) use the fonts already on the device.

const FONT_FILES = [
  { family: 'FCS Noto Sans Telugu', url: '/fonts/NotoSansTelugu-Regular.woff2', test: /[ఀ-౿]/ },
  { family: 'FCS Noto Sans Devanagari', url: '/fonts/NotoSansDevanagari-Regular.woff2', test: /[ऀ-ॿ꣠-ꣿ᳐-᳿]/ },
];

const STACK = '"FCS Noto Sans Telugu","FCS Noto Sans Devanagari","Noto Sans","Segoe UI",Arial,"Helvetica Neue",Helvetica,sans-serif';
const PX_PER_MM = 12;
const PT_TO_MM = 25.4 / 72;
const MARK = '';
const loaded = new Set();

/** Typographic characters that the tools already turn into plain ones for the standard font. */
function plain(value) {
  return String(value == null ? '' : value)
    .replace(/[‘’‚]/g, "'")
    .replace(/[“”„]/g, '"')
    .replace(/[‐-―−]/g, '-')
    .replace(/…/g, '...')
    .replace(/₹/g, 'Rs ')
    .replace(/[•·∙]/g, '-')
    .replace(/[ -   　]/g, ' ')
    .replace(/\t/g, ' ')
    .replace(/\r\n?/g, '\n');
}

/** True when the standard PDF font (helvetica, Latin-1) cannot draw something in this text. */
export function needsUnicode(value) {
  return /[^\n\x20-\x7E -ÿ]/.test(plain(value));
}

/** True when a line was produced by wrap() and must be drawn with draw(). */
export function isUnicodeLine(line) {
  return typeof line === 'string' && line.charAt(0) === MARK;
}

async function loadFace(file) {
  if (loaded.has(file.family)) return true;
  try {
    const face = new FontFace(file.family, 'url(' + file.url + ')');
    await face.load();
    document.fonts.add(face);
    loaded.add(file.family);
    return true;
  } catch (error) {
    console.error('Unable to load the PDF font ' + file.family + ':', error);
    return false;
  }
}

/**
 * Call once before building a PDF, with every text the person typed.
 * Loads Telugu and Devanagari fonts only if those scripts appear. Returns false when the
 * browser cannot draw the text (no canvas or font loading failed), so the tool can say so.
 */
export async function prepareUnicodeText(texts) {
  const joined = texts.filter(Boolean).map(plain).join('\n');
  if (!needsUnicode(joined)) return true;
  if (typeof document === 'undefined' || typeof FontFace === 'undefined' || !document.createElement('canvas').getContext) return false;
  const results = await Promise.all(FONT_FILES.filter((file) => file.test.test(joined)).map(loadFace));
  return results.every(Boolean);
}

/** Tidy a list of user entries into the texts that prepareUnicodeText should look at. */
export function flattenTexts(value, out = []) {
  if (value == null) return out;
  if (Array.isArray(value)) value.forEach((item) => flattenTexts(item, out));
  else if (typeof value === 'object') Object.keys(value).forEach((key) => flattenTexts(value[key], out));
  else out.push(String(value));
  return out;
}

export function createUnicodeText(pdf) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const segmenter = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;

  const fontCss = (size, style) => (style === 'italic' ? 'italic ' : '') + (style === 'bold' ? '700 ' : '400 ') + (size * PT_TO_MM * PX_PER_MM).toFixed(2) + 'px ' + STACK;
  const measure = (text, size, style) => {
    context.font = fontCss(size, style);
    return context.measureText(text).width / PX_PER_MM;
  };
  const pieces = (word) => (segmenter ? Array.from(segmenter.segment(word), (part) => part.segment) : Array.from(word));

  /**
   * Wraps text with the browser's own measuring. Returns null when the standard font can draw the
   * text (use the normal path), otherwise an array of lines to pass to draw().
   */
  function wrap(value, widthMm, size, style = 'normal') {
    const text = plain(value);
    if (!needsUnicode(text)) return null;
    const lines = [];
    text.split('\n').forEach((paragraph) => {
      if (!paragraph.trim()) { lines.push(MARK); return; }
      let line = '';
      paragraph.trim().split(/ +/).forEach((word) => {
        const candidate = line ? line + ' ' + word : word;
        if (measure(candidate, size, style) <= widthMm) { line = candidate; return; }
        if (line) { lines.push(MARK + line); line = ''; }
        if (measure(word, size, style) <= widthMm) { line = word; return; }
        let chunk = '';
        pieces(word).forEach((piece) => {
          if (chunk && measure(chunk + piece, size, style) > widthMm) { lines.push(MARK + chunk); chunk = ''; }
          chunk += piece;
        });
        line = chunk;
      });
      lines.push(MARK + line);
    });
    return lines;
  }

  /** Draws one line from wrap() with its baseline at baselineMm, like pdf.text does. */
  function draw(line, xMm, baselineMm, size, style, color, align) {
    const text = line.slice(1);
    if (!text) return;
    const pad = 0.8;
    const widthMm = measure(text, size, style);
    const emMm = size * PT_TO_MM;
    const ascentMm = emMm * 1.5;
    const heightMm = emMm * 2.3;
    canvas.width = Math.max(1, Math.ceil((widthMm + pad * 2) * PX_PER_MM));
    canvas.height = Math.max(1, Math.ceil(heightMm * PX_PER_MM));
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = fontCss(size, style);
    context.fillStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
    context.textBaseline = 'alphabetic';
    context.fillText(text, pad * PX_PER_MM, ascentMm * PX_PER_MM);
    const left = (align === 'right' ? xMm - widthMm : xMm) - pad;
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', left, baselineMm - ascentMm, canvas.width / PX_PER_MM, canvas.height / PX_PER_MM, undefined, 'FAST');
  }

  return { wrap, draw, isUnicodeLine, measure };
}
