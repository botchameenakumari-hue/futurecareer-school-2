export interface VisualReportLine {
  kind: 'heading-1' | 'heading-2' | 'heading-3' | 'bullet' | 'body';
  text: string;
}

interface VisualReportSection {
  title: string;
  lines: VisualReportLine[];
}

interface VisualReportOptions {
  guidanceUrl: string;
  guidanceLabel: string;
  reportKicker: string;
  siteUrl: string;
  whatsappUrl: string;
  phoneDisplay: string;
  phoneE164: string;
}

type JsPdfConstructor = typeof import('jspdf').jsPDF;
type Rgb = readonly [number, number, number];

const COLORS = {
  navy: [10, 16, 31],
  navySoft: [19, 30, 52],
  ink: [23, 35, 55],
  slate: [83, 99, 119],
  paper: [247, 248, 244],
  white: [255, 255, 255],
  gold: [229, 184, 74],
  goldSoft: [250, 243, 218],
  teal: [18, 154, 141],
  tealSoft: [228, 247, 243],
  line: [220, 226, 232],
} satisfies Record<string, Rgb>;

// On the live page, a stat/skill/percentile row is usually built from two
// sibling elements (a label span and a value span) so it lines up visually.
// `.innerText` reads them as two separate lines, which breaks them apart
// here (the value renders as an orphaned bar with no label, and vice versa).
// Re-merge a short label immediately followed by a bare "NN%" line into one
// line so the renderer can show them together.
// A dual-sided "slider" row (e.g. "People-Oriented" vs "Independently
// Driven") is built from FOUR sibling spans on the live page: a left label,
// a right label, then (after the non-text fill bars) a left percentage and
// a right percentage. `.innerText` flattens all four into separate lines in
// that same order. The generic single-pair merge below only ever catches
// the line immediately before a "NN%" value, so it pairs the RIGHT label
// with the LEFT value and leaves the left label and the right value both
// orphaned. Detect the specific 4-line [label, label, pct%, pct%] shape
// first and pair each label with its matching value before that happens.
function mergeDualSliderPairs(lines: VisualReportLine[]): VisualReportLine[] {
  const merged: VisualReportLine[] = [];
  const isPlainLabel = (l?: VisualReportLine) =>
    !!l &&
    l.kind === 'body' &&
    l.text.trim().length > 0 &&
    l.text.trim().length <= 40 &&
    !/[%:.]$/.test(l.text.trim()) &&
    !/^\d/.test(l.text.trim());
  const isPct = (l?: VisualReportLine) => !!l && l.kind === 'body' && /^\d{1,3}\s?%$/.test(l.text.trim());
  for (let i = 0; i < lines.length; i += 1) {
    const leftLabel = lines[i];
    const rightLabel = lines[i + 1];
    const leftPct = lines[i + 2];
    const rightPct = lines[i + 3];
    if (isPlainLabel(leftLabel) && isPlainLabel(rightLabel) && isPct(leftPct) && isPct(rightPct)) {
      merged.push({ kind: 'body', text: `${leftLabel.text.trim()} — ${leftPct.text.trim()}` });
      merged.push({ kind: 'body', text: `${rightLabel.text.trim()} — ${rightPct.text.trim()}` });
      i += 3;
      continue;
    }
    merged.push(leftLabel);
  }
  return merged;
}

function mergeLabelValuePairs(lines: VisualReportLine[]): VisualReportLine[] {
  const merged: VisualReportLine[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    const current = lines[i];
    const next = lines[i + 1];
    const afterNext = lines[i + 2];
    const currentText = current.text.trim();
    const nextText = next?.text.trim() ?? '';
    const label = currentText.replace(/:$/, '').trim();
    const isPlainLabel =
      label.length > 0 && label.length <= 60 && !/[%.]$/.test(label) && !/^\d/.test(label);
    if (current.kind === 'body' && next && next.kind === 'body' && /^\d{1,3}\s?%$/.test(nextText) && isPlainLabel) {
      merged.push({ kind: 'body', text: `${label} — ${nextText}` });
      i += 1;
      continue;
    }
    // A "Percentile" caption followed by a bare score (no % sign, e.g. a
    // 0-100 dimension percentile shown as a plain number) - same split, no %.
    if (
      current.kind === 'body' &&
      next &&
      next.kind === 'body' &&
      /^percentile$/i.test(currentText) &&
      /^\d{1,3}$/.test(nextText)
    ) {
      merged.push({ kind: 'body', text: `${currentText} — ${nextText}%` });
      i += 1;
      continue;
    }
    merged.push(current);
  }
  return merged;
}

// A short label followed by a bare, un-suffixed score (no "%"), e.g. a
// readiness/aptitude card showing "Move to New Domain" then "36" (optionally
// then a separate "/100" line). Without this, the bare number falls through
// to the generic "standalone 1-2 digit number" renderer, which draws it as a
// numbered step badge - visually implying it's a list index rather than a
// score - and leaves its label orphaned above.
//
// This has to stay section-scoped and run AFTER the document is split into
// sections (unlike the merges above): a 32-question response review has
// MANY standalone bare numbers throughout the whole document, but within
// any one non-review section there are only ever a handful, so only a
// per-section count can tell a real "label, score" card apart from a
// "tag | 0 sec" / next-question-number sequence elsewhere in the report.
function mergeBareScorePairs(sectionLines: VisualReportLine[]): VisualReportLine[] {
  const merged: VisualReportLine[] = [];
  for (let i = 0; i < sectionLines.length; i += 1) {
    const current = sectionLines[i];
    const next = sectionLines[i + 1];
    const afterNext = sectionLines[i + 2];
    const currentText = current.text.trim();
    const nextText = next?.text.trim() ?? '';
    const label = currentText.replace(/:$/, '').trim();
    const isPlainLabel =
      label.length > 0 && label.length <= 60 && !/[%.]$/.test(label) && !/^\d/.test(label);
    if (current.kind === 'body' && next && next.kind === 'body' && /^\d{1,3}$/.test(nextText) && isPlainLabel) {
      const hasMaxSuffix = !!afterNext && afterNext.kind === 'body' && /^\/\s?\d{1,4}$/.test(afterNext.text.trim());
      const value = hasMaxSuffix ? `${nextText}${afterNext!.text.trim().replace(/^\/\s?/, '/')}` : nextText;
      merged.push({ kind: 'body', text: `${label} — ${value}` });
      i += hasMaxSuffix ? 2 : 1;
      continue;
    }
    merged.push(current);
  }
  return merged;
}

// A repeating card grid (e.g. one "Worth exploring" / "<Archetype>" badge per
// career-name card) reads as the SAME short line many times in a row once
// flattened to text. Treated individually, each repeat gets the full ALL-CAPS
// callout banner treatment meant for a one-off section label, drowning the
// actual career names in giant colored bands. When a short line repeats 3+
// times in one section, fold it into the line that follows it instead.
function mergeRepeatedBadges(sectionLines: VisualReportLine[]): VisualReportLine[] {
  const frequency = new Map<string, number>();
  sectionLines.forEach((l) => {
    if (l.kind === 'body') frequency.set(l.text, (frequency.get(l.text) || 0) + 1);
  });
  const merged: VisualReportLine[] = [];
  for (let i = 0; i < sectionLines.length; i += 1) {
    const current = sectionLines[i];
    const previous = sectionLines[i - 1];
    const next = sectionLines[i + 1];
    const nextText = next?.text.trim() ?? '';
    // A response-review question number (bare "13", or "13. question text")
    // must never be swallowed here - it belongs to the numbered response-card
    // logic below, which needs to see it as its own line to group correctly.
    const nextIsResponseNumber = /^\d{1,2}$/.test(nextText) || /^\d{1,2}\.\s+/.test(nextText);
    // A short word right after a percentage/metric line (e.g. a strength
    // tier caption like "Low Focus" under a percentile bar) is a TRAILING
    // caption for what came before it, not a leading tag for what follows -
    // pairing it with the next line would misattribute it to the wrong item.
    const previousLooksLikeMetric = !!previous && /\d\s*%/.test(previous.text);
    // A genuine repeatable tag/badge is short label-like text - never a data
    // readout (which will contain digits, "|", or "sec").
    const looksLikeTag = current.kind === 'body' && !/[\d|]/.test(current.text) && !/\bsec\b/i.test(current.text);
    const isRepeatedShortBadge =
      looksLikeTag &&
      current.text.length > 0 &&
      current.text.length <= 30 &&
      (frequency.get(current.text) || 0) >= 3;
    if (
      isRepeatedShortBadge &&
      next &&
      (next.kind === 'body' || next.kind === 'bullet') &&
      !nextIsResponseNumber &&
      !previousLooksLikeMetric
    ) {
      merged.push({ kind: next.kind, text: `${current.text}: ${next.text}` });
      i += 1;
      continue;
    }
    merged.push(current);
  }
  return merged;
}

function groupSections(lines: VisualReportLine[]): VisualReportSection[] {
  const sections: VisualReportSection[] = [];
  let current: VisualReportSection = { title: 'Your Result at a Glance', lines: [] };

  lines.forEach((line) => {
    if (line.kind === 'heading-1') {
      if (current.lines.length || current.title !== 'Your Result at a Glance') {
        sections.push(current);
      }
      current = { title: line.text, lines: [] };
      return;
    }
    current.lines.push(line);
  });

  if (current.lines.length || current.title !== 'Your Result at a Glance') {
    sections.push(current);
  }
  return sections;
}

export function createVisualAssessmentPdf(
  lines: VisualReportLine[],
  title: string,
  PdfDocument: JsPdfConstructor,
  options: VisualReportOptions
) {
  const pdf = new PdfDocument({ unit: 'mm', format: 'a4', compress: true });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const marginX = 15;
  const contentWidth = pageWidth - marginX * 2;
  const contentBottom = pageHeight - 18;
  const sections = groupSections(mergeLabelValuePairs(mergeDualSliderPairs(lines)));
  let y = 0;
  let onContentPage = false;

  const setFill = (color: Rgb) => pdf.setFillColor(...color);
  const setText = (color: Rgb) => pdf.setTextColor(...color);
  const setDraw = (color: Rgb) => pdf.setDrawColor(...color);
  const wrap = (text: string, width: number) => pdf.splitTextToSize(text, width) as string[];
  // `splitTextToSize` measures using whatever font/size is CURRENTLY set on
  // the pdf object - not the font the text will eventually be drawn with.
  // Calling `wrap()` before setting that font (as several renderers below
  // used to) measures against font state left over from an unrelated,
  // previous draw call, which can under-count how much width the real text
  // needs and let it run past the card edge. Always set the font this text
  // will actually be drawn with before measuring it.
  const measureWrap = (text: string, width: number, style: 'normal' | 'bold', size: number) => {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(size);
    return pdf.splitTextToSize(text, width) as string[];
  };

  const drawContentChrome = () => {
    onContentPage = true;
    setFill(COLORS.paper);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    setFill(COLORS.navy);
    pdf.rect(0, 0, pageWidth, 17, 'F');
    setFill(COLORS.gold);
    pdf.rect(0, 17, pageWidth, 1.2, 'F');
    setText(COLORS.white);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(8.5);
    pdf.text('FUTURE CAREER SCHOOL', marginX, 10.8);
    setText([180, 194, 211]);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(7.4);
    pdf.text(title.replace(/ Career Assessment Report$/i, '').slice(0, 68), pageWidth - marginX, 10.8, {
      align: 'right',
    });
    y = 27;
  };

  const addContentPage = () => {
    pdf.addPage();
    drawContentChrome();
  };

  const ensureSpace = (height: number) => {
    if (!onContentPage || y + height > contentBottom) addContentPage();
  };

  const renderCover = () => {
    setFill(COLORS.navy);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    setFill(COLORS.teal);
    pdf.circle(pageWidth - 20, 24, 42, 'F');
    setFill(COLORS.navySoft);
    pdf.circle(pageWidth - 16, 20, 33, 'F');
    setFill(COLORS.gold);
    pdf.rect(0, 0, 7, pageHeight, 'F');

    setText(COLORS.gold);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.text(options.reportKicker, 20, 33);

    setText(COLORS.white);
    pdf.setFontSize(25);
    const titleLines = wrap(title, 155);
    pdf.text(titleLines, 20, 55, { lineHeightFactor: 1.05 });
    const titleBottom = 55 + titleLines.length * 10.5;

    setFill(COLORS.teal);
    pdf.roundedRect(20, titleBottom + 8, 42, 8, 4, 4, 'F');
    setText(COLORS.white);
    pdf.setFontSize(8);
    pdf.text('YOUR RESULTS', 41, titleBottom + 13.4, { align: 'center' });

    const profileTitle = sections[0]?.title || 'Your personalised career profile';
    setText(COLORS.gold);
    pdf.setFontSize(16);
    pdf.text(wrap(profileTitle, 165), 20, titleBottom + 32, { lineHeightFactor: 1.08 });

    const summaryStart = titleBottom + 54;
    setFill(COLORS.navySoft);
    setDraw([49, 67, 91]);
    pdf.roundedRect(20, summaryStart, 170, 55, 5, 5, 'FD');
    const summary =
      sections
        .flatMap((section) => section.lines)
        .filter((line) => line.kind === 'body' && line.text.length > 35)
        .slice(0, 2)
        .map((line) => line.text)
        .join(' ') ||
      'This report turns your assessment responses into a structured view of your strengths, direction, and practical next steps.';
    setText([183, 199, 216]);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text(wrap(summary, 152).slice(0, 8), 29, summaryStart + 13, { lineHeightFactor: 1.45 });

    const statsY = summaryStart + 70;
    const stats = [
      [`${sections.length}`, 'INSIGHT SECTIONS'],
      ['ACTION', 'FOCUSED'],
      ['PERSONAL', 'TO YOUR ANSWERS'],
    ];
    stats.forEach(([value, label], index) => {
      const x = 20 + index * 58;
      setFill(index === 0 ? COLORS.gold : COLORS.navySoft);
      pdf.roundedRect(x, statsY, 52, 30, 4, 4, 'F');
      setText(index === 0 ? COLORS.navy : COLORS.white);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(index === 0 ? 15 : 10.5);
      pdf.text(value, x + 26, statsY + 12, { align: 'center' });
      setText(index === 0 ? COLORS.ink : [157, 177, 197]);
      pdf.setFontSize(6.8);
      pdf.text(label, x + 26, statsY + 22, { align: 'center' });
    });

    setText([158, 176, 196]);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8.5);
    pdf.text(`Prepared ${new Date().toLocaleDateString('en-IN')}`, 20, pageHeight - 25);
    pdf.text(options.phoneDisplay, 20, pageHeight - 16);
    setText(COLORS.gold);
    pdf.setFont('helvetica', 'bold');
    pdf.text('futurecareerschool.com', pageWidth - 20, pageHeight - 16, { align: 'right' });
    pdf.link(pageWidth - 72, pageHeight - 22, 52, 10, { url: options.siteUrl });
  };

  const renderSectionHeader = (section: VisualReportSection, index: number) => {
    const titleLines = measureWrap(section.title, contentWidth - 28, 'bold', 14);
    const height = Math.max(25, titleLines.length * 7.5 + 13);
    ensureSpace(height + 6);
    setFill(COLORS.navy);
    pdf.roundedRect(marginX, y, contentWidth, height, 4, 4, 'F');
    setFill(index % 2 === 0 ? COLORS.gold : COLORS.teal);
    pdf.roundedRect(marginX + 5, y + 6, 16, 16, 3, 3, 'F');
    setText(index % 2 === 0 ? COLORS.navy : COLORS.white);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.text(String(index + 1).padStart(2, '0'), marginX + 13, y + 16.2, { align: 'center' });
    setText([158, 176, 196]);
    pdf.setFontSize(6.8);
    pdf.text('INSIGHT', marginX + 27, y + 9);
    setText(COLORS.white);
    pdf.setFontSize(14);
    pdf.text(titleLines, marginX + 27, y + 17.5, { lineHeightFactor: 1.1 });
    y += height + 5;
  };

  const renderSubheading = (line: VisualReportLine) => {
    const fontSize = line.kind === 'heading-2' ? 11.5 : 10;
    const wrapped = measureWrap(line.text, contentWidth - 8, 'bold', fontSize);
    const height = wrapped.length * (fontSize * 0.42) + 7;
    ensureSpace(height);
    setFill(line.kind === 'heading-2' ? COLORS.gold : COLORS.teal);
    pdf.roundedRect(marginX, y + 1, 2.5, Math.max(8, height - 3), 1, 1, 'F');
    setText(COLORS.ink);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(fontSize);
    pdf.text(wrapped, marginX + 7, y + 6.5, { lineHeightFactor: 1.15 });
    y += height;
  };

  const renderMetric = (line: VisualReportLine, match: RegExpMatchArray) => {
    const rawValue = Number(match[1]);
    const barValue = Math.max(0, Math.min(100, rawValue));
    const wrapped = measureWrap(line.text, contentWidth - 28, 'bold', 9.2);
    const height = Math.max(22, wrapped.length * 4.4 + 12);
    ensureSpace(height + 3);
    setFill(COLORS.navySoft);
    pdf.roundedRect(marginX, y, contentWidth, height, 4, 4, 'F');
    setFill(COLORS.gold);
    pdf.roundedRect(marginX + 6, y + 5, 19, 12, 3, 3, 'F');
    setText(COLORS.navy);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text(`${rawValue}%`, marginX + 15.5, y + 13, { align: 'center' });
    setText(COLORS.white);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9.2);
    pdf.text(wrapped, marginX + 30, y + 8.5, { lineHeightFactor: 1.25 });
    setFill([46, 61, 81]);
    pdf.roundedRect(marginX + 30, y + height - 7, contentWidth - 38, 2.5, 1.2, 1.2, 'F');
    setFill(COLORS.teal);
    pdf.roundedRect(
      marginX + 30,
      y + height - 7,
      (contentWidth - 38) * (barValue / 100),
      2.5,
      1.2,
      1.2,
      'F'
    );
    y += height + 3;
  };

  const renderBullet = (line: VisualReportLine) => {
    const wrapped = measureWrap(line.text, contentWidth - 15, 'normal', 9.1);
    const height = Math.max(11, wrapped.length * 4.25 + 5);
    ensureSpace(height + 2);
    setFill(COLORS.tealSoft);
    pdf.roundedRect(marginX, y, contentWidth, height, 3, 3, 'F');
    setFill(COLORS.teal);
    pdf.circle(marginX + 6.2, y + 6, 2.1, 'F');
    setText(COLORS.white);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(6.5);
    pdf.text('>', marginX + 6.2, y + 7.1, { align: 'center' });
    setText(COLORS.ink);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9.1);
    pdf.text(wrapped, marginX + 11, y + 6.6, { lineHeightFactor: 1.2 });
    y += height + 2;
  };

  const renderBody = (line: VisualReportLine) => {
    if (/^\d{1,2}$/.test(line.text)) {
      ensureSpace(10);
      setFill(COLORS.gold);
      pdf.roundedRect(marginX, y, 10, 8, 2, 2, 'F');
      setText(COLORS.navy);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(8.5);
      pdf.text(line.text.padStart(2, '0'), marginX + 5, y + 5.5, { align: 'center' });
      y += 10;
      return;
    }

    // "NN/100" is mathematically identical to "NN%" - treat it the same so
    // a score shown as ".../100" gets the same styled bar as a percentage,
    // instead of falling through to plain text or a numbered step badge.
    const metricMatch = line.text.match(/\b(\d{1,3})\s*%/) || line.text.match(/\b(\d{1,3})\s*\/\s*100\b/);
    if (metricMatch && line.text.length < 165) {
      renderMetric(line, metricMatch);
      return;
    }

    const isCallout =
      line.text.length < 165 &&
      (/^(your|top|best|next|focus|strength|risk|readiness|timeline|income|freedom|important|remember|action)\b/i.test(
        line.text
      ) ||
        /^[A-Z][A-Z\s&/()-]{1,}$/.test(line.text) ||
        // An ALL-CAPS tag/fit label followed by its (mixed-case) detail,
        // e.g. "STRONGEST FIT: Engineering and technical trades..." or
        // "WORTH EXPLORING: Data science, analytics...". Without this,
        // these read as a wall of near-identical plain paragraph lines
        // instead of a styled callout like the rest of the section.
        /^[A-Z][A-Z\s&/()-]{2,}:\s+\S/.test(line.text));
    const wrapped = measureWrap(
      line.text,
      isCallout ? contentWidth - 14 : contentWidth - 2,
      isCallout ? 'bold' : 'normal',
      isCallout ? 9.3 : 9
    );
    const height = wrapped.length * 4.35 + (isCallout ? 8 : 3.5);
    ensureSpace(height + 1);
    if (isCallout) {
      setFill(COLORS.goldSoft);
      pdf.roundedRect(marginX, y, contentWidth, height, 3, 3, 'F');
      setFill(COLORS.gold);
      pdf.roundedRect(marginX, y, 3, height, 1.5, 1.5, 'F');
    }
    setText(isCallout ? COLORS.ink : COLORS.slate);
    pdf.setFont('helvetica', isCallout ? 'bold' : 'normal');
    pdf.setFontSize(isCallout ? 9.3 : 9);
    pdf.text(wrapped, marginX + (isCallout ? 8 : 1), y + (isCallout ? 6 : 3.5), {
      lineHeightFactor: 1.28,
    });
    y += height + 1;
  };

  const wrapResponseBlockLines = (contentLines: VisualReportLine[], textWidth: number) =>
    contentLines.map((line, index) =>
      measureWrap(line.text, textWidth, index === 0 ? 'bold' : 'normal', index === 0 ? 8.8 : 8.2)
    );

  const getResponseBlockHeight = (block: VisualReportLine[]) => {
    const contentLines = block.slice(1);
    const textWidth = contentWidth - 25;
    const wrappedLines = wrapResponseBlockLines(contentLines, textWidth);
    const contentHeight = wrappedLines.reduce(
      (height, wrapped, index) => height + wrapped.length * (index === 0 ? 4.25 : 3.9),
      0
    );
    return Math.max(17, contentHeight + 7);
  };

  const renderResponseBlock = (block: VisualReportLine[]) => {
    const [numberLine, ...contentLines] = block;
    const textWidth = contentWidth - 25;
    const wrappedLines = wrapResponseBlockLines(contentLines, textWidth);
    const height = getResponseBlockHeight(block);
    ensureSpace(height + 2);
    setFill(COLORS.white);
    setDraw(COLORS.line);
    pdf.roundedRect(marginX, y, contentWidth, height, 3, 3, 'FD');
    setFill(COLORS.gold);
    pdf.roundedRect(marginX + 5, y + 4, 11, 8, 2, 2, 'F');
    setText(COLORS.navy);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(8.2);
    pdf.text(numberLine.text.padStart(2, '0'), marginX + 10.5, y + 9.5, {
      align: 'center',
    });

    let textY = y + 5.5;
    wrappedLines.forEach((wrapped, index) => {
      setText(index === 0 ? COLORS.ink : COLORS.slate);
      pdf.setFont('helvetica', index === 0 ? 'bold' : 'normal');
      pdf.setFontSize(index === 0 ? 8.8 : 8.2);
      pdf.text(wrapped, marginX + 21, textY, { lineHeightFactor: 1.2 });
      textY += wrapped.length * (index === 0 ? 4.25 : 3.9);
    });
    y += height + 2;
  };

  const renderActionPage = () => {
    pdf.addPage();
    onContentPage = false;
    setFill(COLORS.navy);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    setFill(COLORS.teal);
    pdf.circle(pageWidth - 4, 18, 45, 'F');
    setFill(COLORS.navySoft);
    pdf.circle(pageWidth - 2, 16, 35, 'F');

    setText(COLORS.gold);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.text('YOUR NEXT MOVE', 20, 34);
    setText(COLORS.white);
    pdf.setFontSize(24);
    pdf.text(['Turn insight into', 'a clear career plan.'], 20, 55, { lineHeightFactor: 1.05 });
    setText([176, 193, 211]);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10.5);
    pdf.text(
      wrap(
        'Use this report as a starting point. Personalised guidance can help you compare realistic options, prioritise the right skills, and convert your results into a practical action plan.',
        165
      ),
      20,
      84,
      { lineHeightFactor: 1.45 }
    );

    const drawAction = (
      top: number,
      label: string,
      detail: string,
      url: string,
      fill: Rgb,
      textColor: Rgb
    ) => {
      setFill(fill);
      pdf.roundedRect(20, top, 170, 28, 5, 5, 'F');
      setText(textColor);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11.5);
      pdf.text(label, 29, top + 11);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8.2);
      pdf.text(detail, 29, top + 20);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(13);
      pdf.text('>', 180, top + 17, { align: 'center' });
      pdf.link(20, top, 170, 28, { url });
    };

    drawAction(
      119,
      options.guidanceLabel,
      'Review guidance options and choose the support that fits your stage.',
      options.guidanceUrl,
      COLORS.gold,
      COLORS.navy
    );
    drawAction(
      154,
      'Chat on WhatsApp',
      `${options.phoneDisplay} - ask a question or request a guidance session.`,
      options.whatsappUrl,
      COLORS.teal,
      COLORS.white
    );
    drawAction(
      189,
      'Call Future Career School',
      `${options.phoneDisplay} - tap here from a phone to call directly.`,
      `tel:${options.phoneE164}`,
      COLORS.navySoft,
      COLORS.white
    );

    setDraw([55, 72, 94]);
    pdf.line(20, 234, 190, 234);
    setText([150, 169, 190]);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8.5);
    pdf.text('Online guidance available across India | Keep this report for your next review.', 20, 246);
    setText(COLORS.gold);
    pdf.setFont('helvetica', 'bold');
    pdf.text('futurecareerschool.com', 20, 260);
    pdf.link(20, 253, 48, 10, { url: options.siteUrl });
  };

  renderCover();
  addContentPage();
  sections.forEach((section, sectionIndex) => {
    const rawBareNumberCount = section.lines.filter(
      (line) => line.kind === 'body' && /^\d{1,3}$/.test(line.text.trim())
    ).length;
    if (rawBareNumberCount < 10) {
      section.lines = mergeBareScorePairs(section.lines);
    }
    section.lines = mergeRepeatedBadges(section.lines);
    const numberedRecordCount = section.lines.filter(
      (line) =>
        line.kind === 'body' &&
        (/^\d{1,2}$/.test(line.text) || /^\d{1,2}\.\s+/.test(line.text))
    ).length;
    if (numberedRecordCount >= 10 && y > 85) {
      addContentPage();
    }
    renderSectionHeader(section, sectionIndex);
    for (let lineIndex = 0; lineIndex < section.lines.length; lineIndex += 1) {
      const line = section.lines[lineIndex];
      const standaloneNumber =
        line.kind === 'body' && /^\d{1,2}$/.test(line.text);
      const numberedQuestion =
        line.kind === 'body' ? line.text.match(/^(\d{1,2})\.\s+(.+)/) : null;
      // Only a real question-by-question response review has this many
      // standalone numbers in one section. A handful of standalone numbers
      // (a percentile/score card grid, a stat count) is a different pattern
      // entirely and must not be forced into the numbered response-card
      // layout, or its label/caption text gets silently swallowed.
      if ((standaloneNumber || numberedQuestion) && numberedRecordCount >= 10) {
        const responseBlock: VisualReportLine[] = standaloneNumber
          ? [line]
          : [
              { kind: 'body', text: numberedQuestion![1] },
              { kind: 'body', text: numberedQuestion![2] },
            ];
        while (lineIndex + 1 < section.lines.length) {
          const nextLine = section.lines[lineIndex + 1];
          if (
            nextLine.kind !== 'body' ||
            /^\d{1,2}$/.test(nextLine.text) ||
            /^\d{1,2}\.\s+/.test(nextLine.text)
          ) {
            break;
          }
          responseBlock.push(nextLine);
          lineIndex += 1;
        }
        const remainingBlocks: VisualReportLine[][] = [responseBlock];
        let scanIndex = lineIndex + 1;
        while (scanIndex < section.lines.length) {
          const nextRecord = section.lines[scanIndex];
          const nextStandaloneNumber =
            nextRecord.kind === 'body' && /^\d{1,2}$/.test(nextRecord.text);
          const nextNumberedQuestion =
            nextRecord.kind === 'body' ? nextRecord.text.match(/^(\d{1,2})\.\s+(.+)/) : null;
          if (!nextStandaloneNumber && !nextNumberedQuestion) {
            scanIndex += 1;
            continue;
          }
          const nextBlock: VisualReportLine[] = nextStandaloneNumber
            ? [nextRecord]
            : [
                { kind: 'body', text: nextNumberedQuestion![1] },
                { kind: 'body', text: nextNumberedQuestion![2] },
              ];
          scanIndex += 1;
          while (scanIndex < section.lines.length) {
            const nextContentLine = section.lines[scanIndex];
            if (
              nextContentLine.kind !== 'body' ||
              /^\d{1,2}$/.test(nextContentLine.text) ||
              /^\d{1,2}\.\s+/.test(nextContentLine.text)
            ) {
              break;
            }
            nextBlock.push(nextContentLine);
            scanIndex += 1;
          }
          remainingBlocks.push(nextBlock);
        }
        const remainingHeight = remainingBlocks.reduce(
          (height, block) => height + getResponseBlockHeight(block) + 2,
          0
        );
        const currentPageCapacity = contentBottom - y;
        const freshPageCapacity = contentBottom - 27;
        if (
          numberedRecordCount >= 10 &&
          remainingBlocks.length > 1 &&
          remainingBlocks.length <= 3 &&
          remainingHeight > currentPageCapacity &&
          remainingHeight <= freshPageCapacity
        ) {
          addContentPage();
        }
        renderResponseBlock(responseBlock);
      } else if (line.kind === 'heading-2' || line.kind === 'heading-3') {
        renderSubheading(line);
      } else if (line.kind === 'bullet') {
        renderBullet(line);
      } else {
        renderBody(line);
      }
    }
    y += 3;
  });
  renderActionPage();

  const totalPages = pdf.getNumberOfPages();
  for (let page = 1; page <= totalPages; page += 1) {
    pdf.setPage(page);
    const darkPage = page === 1 || page === totalPages;
    setDraw(darkPage ? [55, 72, 94] : COLORS.line);
    pdf.line(marginX, pageHeight - 12, pageWidth - marginX, pageHeight - 12);
    setText(darkPage ? [146, 164, 184] : COLORS.slate);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(7.5);
    pdf.text(`Future Career School  |  Page ${page} of ${totalPages}`, marginX, pageHeight - 7);
    if (!darkPage) {
      pdf.text(options.phoneDisplay, pageWidth - marginX, pageHeight - 7, { align: 'right' });
    }
  }

  return pdf;
}
