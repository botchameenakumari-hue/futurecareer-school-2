type JsPdfConstructor = typeof import('jspdf').jsPDF;

type LineKind = 'subheading' | 'bullet' | 'table' | 'body';

interface ReportLine {
  kind: LineKind;
  text: string;
}

interface ReportSection {
  title: string;
  lines: ReportLine[];
  kind?: 'profile' | 'riasec' | 'intelligences' | 'aptitude' | 'careers';
  scoreRows?: Array<{ code: string; label: string; score: number; raw: string; rank?: string }>;
  careerRows?: Array<{ career: string; domain: string; skill: string; salary: string; path: string }>;
  profile?: { code: string; label: string; badge: string; tagline: string; description: string };
}

interface GraduatePdfOptions {
  title: string;
  reportKicker: string;
  guidanceUrl: string;
  siteUrl: string;
  phoneDisplay: string;
}

type Rgb = readonly [number, number, number];

const COLOR = {
  navy: [8, 18, 35],
  navyCard: [18, 35, 57],
  ink: [24, 39, 58],
  slate: [61, 80, 101],
  muted: [122, 139, 156],
  paper: [247, 249, 252],
  white: [255, 255, 255],
  gold: [229, 184, 74],
  goldSoft: [253, 247, 226],
  teal: [21, 164, 151],
  tealSoft: [229, 248, 245],
  indigo: [99, 102, 241],
  indigoSoft: [238, 239, 255],
  line: [218, 226, 234],
} satisfies Record<string, Rgb>;

function normaliseVisibleText(value: string) {
  return value.replace(/\u00a0/g, ' ').replace(/[ \t]+/g, ' ').trim();
}

// jsPDF's built-in Helvetica font covers the report's English copy but not
// decorative emoji. Keep every word and number verbatim, and turn ornamental
// glyphs into readable ASCII equivalents instead of allowing a PDF viewer to
// render them as missing-character boxes.
function pdfText(value: string) {
  return value
    .replace(/\u20b9/g, 'Rs. ')
    .replace(/[\u2012\u2013\u2014\u2212]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2022\u00b7\u2219]/g, '-')
    .replace(/[\u2192\u21d2\u27a1\u27a4\u279c]/g, '->')
    .replace(/[\u2713\u2714\u2705]/g, 'Yes')
    .replace(/[\u2717\u2718\u274c]/g, 'No')
    .replace(/[\u2605\u2b50]/g, '*')
    .replace(/[\u2606]/g, 'o')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7e]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function linesFromElement(element: HTMLElement): ReportLine[] {
  const clone = element.cloneNode(true) as HTMLElement;
  // A result section can itself be collapsed by the on-page report tools.
  // querySelectorAll() only searches descendants, so remove the state from
  // the cloned root explicitly before reading its complete text.
  clone.classList.remove('is-collapsed');
  clone
    .querySelectorAll(
      '.assessment-report-actions, .assessment-quick-nav, .assessment-section-toggle, .rg-actions, button, script, style'
    )
    .forEach((node) => node.remove());
  clone.querySelectorAll('details').forEach((details) => {
    details.open = true;
  });
  clone.querySelectorAll('.is-collapsed').forEach((node) => node.classList.remove('is-collapsed'));

  const subheadings = new Set(
    Array.from(clone.querySelectorAll('h4,h5,h6'))
      .map((node) => normaliseVisibleText(node.textContent || ''))
      .filter(Boolean)
  );
  const bullets = new Set(
    Array.from(clone.querySelectorAll('li'))
      .map((node) => normaliseVisibleText(node.textContent || ''))
      .filter(Boolean)
  );

  clone.querySelectorAll('table').forEach((table) => {
    const replacement = document.createElement('div');
    table.querySelectorAll('tr').forEach((row) => {
      const cells = Array.from(row.querySelectorAll('th,td'))
        .map((cell) => normaliseVisibleText(cell.textContent || ''))
        .filter(Boolean);
      if (!cells.length) return;
      const line = document.createElement('p');
      line.dataset.pdfTableRow = 'true';
      line.textContent = cells.join('  |  ');
      replacement.append(line);
    });
    table.replaceWith(replacement);
  });

  const tableRows = new Set(
    Array.from(clone.querySelectorAll<HTMLElement>('[data-pdf-table-row]'))
      .map((node) => normaliseVisibleText(node.innerText))
      .filter(Boolean)
  );

  // Mounting the clone gives innerText the same layout-aware line breaks as
  // the visible report. Unlike the old shared exporter, no line is discarded
  // for being repeated: repeated labels can be meaningful report content.
  clone.style.cssText =
    'position:fixed;left:-10000px;top:0;width:900px;opacity:0;pointer-events:none;z-index:-1;';
  document.body.append(clone);
  const visibleLines = clone.innerText.split(/\r?\n/).map(normaliseVisibleText).filter(Boolean);
  clone.remove();

  // Some result cards place a decorative marker in an absolutely positioned
  // span, which innerText exposes as a separate line. Re-attach that marker to
  // its label so the PDF keeps the same visual and semantic relationship.
  const mergedLines: string[] = [];
  for (let index = 0; index < visibleLines.length; index += 1) {
    const current = visibleLines[index];
    const next = visibleLines[index + 1];
    if (
      next &&
      /^[\u25a0\u2713\u2714\u2705\u2717\u2718\u274c\u2192\u21d2\u27a1\u27a4\u279c]$/.test(current) &&
      !/^[\u2605\u2b50\u2606\u25a0\u2713\u2714\u2705\u2717\u2718\u274c\u2192\u21d2\u27a1\u27a4\u279c]+$/.test(next)
    ) {
      mergedLines.push(`${current} ${next}`);
      index += 1;
    } else {
      mergedLines.push(current);
    }
  }

  return mergedLines.map((text) => ({
    kind: tableRows.has(text)
      ? 'table'
      : subheadings.has(text)
        ? 'subheading'
        : bullets.has(text)
          ? 'bullet'
          : 'body',
    text,
  }));
}

export function collectGraduateReport(container: HTMLElement): ReportSection[] {
  const clone = container.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll('.assessment-report-actions, .assessment-quick-nav, .assessment-section-toggle')
    .forEach((node) => node.remove());

  // The later Graduates result modules intentionally use self-contained
  // top-level cards without the older `.res-section` class or heading tags.
  // Export every meaningful direct result block so those six modules are not
  // silently dropped just because their HTML structure is newer.
  const topLevelBlocks = Array.from(clone.children).filter((child) => {
    const element = child as HTMLElement;
    return (
      !element.classList.contains('res-guidance') &&
      normaliseVisibleText(element.innerText).length > 0
    );
  }) as HTMLElement[];

  return topLevelBlocks
    .map((block, index) => {
      const profile = block.matches('[data-pdf-profile]') ? {
        code: normaliseVisibleText(block.querySelector<HTMLElement>('.res-code-badge')?.textContent || ''),
        label: normaliseVisibleText(block.querySelector<HTMLElement>('.res-label')?.textContent || ''),
        badge: normaliseVisibleText(block.querySelector<HTMLElement>('.res-secondary-badge')?.textContent || ''),
        tagline: normaliseVisibleText(block.querySelector<HTMLElement>('.res-tagline')?.textContent || ''),
        description: normaliseVisibleText(block.querySelector<HTMLElement>('.res-combo-note')?.textContent || ''),
      } : undefined;
      const scoreRows: ReportSection['scoreRows'] = [];
      block.querySelectorAll<HTMLElement>('[data-riasec-code]').forEach((row) => {
        scoreRows.push({
          code: row.dataset.riasecCode || '',
          label: row.dataset.riasecLabel || '',
          score: Number(row.dataset.riasecScore || 0),
          raw: `${row.dataset.riasecRaw || '0'}/${row.dataset.riasecMax || '0'} pts`,
          rank: row.dataset.riasecRank || '',
        });
        row.remove();
      });
      block.querySelectorAll<HTMLElement>('[data-mi-code]').forEach((row) => {
        scoreRows.push({
          code: row.dataset.miCode || '',
          label: row.dataset.miLabel || '',
          score: Number(row.dataset.miScore || 0),
          raw: `${row.dataset.miRaw || '0'} raw points`,
        });
        row.remove();
      });
      block.querySelectorAll<HTMLElement>('[data-apt-code]').forEach((row) => {
        scoreRows.push({
          code: row.dataset.aptCode || '',
          label: row.dataset.aptLabel || '',
          score: Number(row.dataset.aptScore || 0),
          raw: `${row.dataset.aptRaw || '0'} raw points`,
        });
        row.remove();
      });
      const careerRows: ReportSection['careerRows'] = [];
      block.querySelectorAll<HTMLTableRowElement>('[data-career-row]').forEach((row) => {
        const cells = Array.from(row.querySelectorAll('td')).map((cell) =>
          normaliseVisibleText(cell.textContent || '')
        );
        if (cells.length >= 5) {
          careerRows.push({
            career: cells[0], domain: cells[1], skill: cells[2], salary: cells[3], path: cells[4],
          });
        }
        row.remove();
      });
      if (careerRows.length) block.querySelector('table')?.remove();
      const heading = block.querySelector<HTMLElement>('h1,h2,h3,[data-pdf-section-heading]');
      const profileTitle = block.classList.contains('res-header')
        ? block.querySelector<HTMLElement>('.res-title')?.textContent || ''
        : '';
      const explicitTitle = normaliseVisibleText(
        block.dataset.pdfTitle || profileTitle || heading?.textContent || ''
      );
      heading?.remove();
      const lines = linesFromElement(block);
      const kind: ReportSection['kind'] = block.matches('[data-pdf-profile]') ? 'profile' :
        block.matches('[data-pdf-riasec]') ? 'riasec' :
        scoreRows.some((row) => ['lin','log','spa','bk','inter','intra','mus','nat'].includes(row.code)) ? 'intelligences' :
        scoreRows.some((row) => ['num','ver','lgc'].includes(row.code)) ? 'aptitude' :
        careerRows.length ? 'careers' : undefined;
      if (profile) lines.splice(0, lines.length);
      if (explicitTitle) return { title: explicitTitle, lines, kind, scoreRows, careerRows, profile };

      const inferredTitleIndex = lines.findIndex((line) => pdfText(line.text).length >= 4);
      const inferredTitle =
        inferredTitleIndex >= 0 ? pdfText(lines[inferredTitleIndex].text) : `Insight ${index + 1}`;
      if (inferredTitleIndex >= 0) lines.splice(inferredTitleIndex, 1);
      return { title: inferredTitle, lines, kind, scoreRows, careerRows, profile };
    })
    .filter((section) => section.title || section.lines.length);
}

export function createGraduateAssessmentPdf(
  container: HTMLElement,
  PdfDocument: JsPdfConstructor,
  options: GraduatePdfOptions
) {
  const sections = collectGraduateReport(container);
  if (!sections.length) throw new Error('No Graduates and early professionals assessment result content was available to export.');

  const resultHeader = container.querySelector<HTMLElement>('.res-header');
  const coverProfileTitle = normaliseVisibleText(
    resultHeader?.querySelector<HTMLElement>('.res-title')?.textContent || sections[0]?.title || ''
  );
  const coverProfileCodeValue = normaliseVisibleText(
    resultHeader?.querySelector<HTMLElement>('.res-code-badge')?.textContent || ''
  );
  const coverProfileCode = coverProfileCodeValue
    ? `RIASEC Code: ${coverProfileCodeValue}`
    : undefined;
  const coverProfileSecondary = normaliseVisibleText(
    resultHeader?.querySelector<HTMLElement>('.res-secondary-badge')?.textContent || ''
  );
  const coverProfileTagline = normaliseVisibleText(
    resultHeader?.querySelector<HTMLElement>('.res-tagline')?.textContent || ''
  );
  const coverProfileContext = normaliseVisibleText(
    resultHeader?.querySelector<HTMLElement>('.res-combo-note')?.textContent || ''
  );
  const guidanceBlock = container.querySelector<HTMLElement>('.res-guidance');
  const guidanceTitle = normaliseVisibleText(
    guidanceBlock?.querySelector<HTMLElement>('h3')?.textContent || 'Want to Go Deeper?'
  );
  const guidanceBody = normaliseVisibleText(
    guidanceBlock?.querySelector<HTMLElement>('h3 + p')?.textContent || ''
  );
  const guidanceLabel = normaliseVisibleText(
    guidanceBlock?.querySelector<HTMLElement>('a')?.textContent || 'Explore Early Career Guidance'
  );
  const guidanceParagraphs = Array.from(guidanceBlock?.querySelectorAll<HTMLElement>('p') || []);
  const guidanceFinePrint = normaliseVisibleText(
    guidanceParagraphs[guidanceParagraphs.length - 1]?.textContent || ''
  );

  const pdf = new PdfDocument({ unit: 'mm', format: 'a4', compress: true });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const marginX = 16;
  const contentWidth = pageWidth - marginX * 2;
  const contentTop = 27;
  // Keep a generous safety zone above the footer. jsPDF can continue a tall
  // text array onto a fresh page when its internal leading exceeds our visual
  // estimate; the extra buffer ensures every break goes through addContentPage
  // so continuation pages retain the full report header and margins.
  const contentBottom = pageHeight - 34;
  let y = contentTop;
  let sectionNumber = 0;

  const setFill = (color: Rgb) => pdf.setFillColor(...color);
  const setText = (color: Rgb) => pdf.setTextColor(...color);
  const setDraw = (color: Rgb) => pdf.setDrawColor(...color);
  const setFont = (style: 'normal' | 'bold', size: number) => {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(size);
  };

  const drawStar = (centerX: number, centerY: number, filled: boolean, radius = 3.1) => {
    const points = Array.from({ length: 10 }, (_, index) => {
      const angle = -Math.PI / 2 + (index * Math.PI) / 5;
      const pointRadius = index % 2 === 0 ? radius : radius * 0.45;
      return [centerX + Math.cos(angle) * pointRadius, centerY + Math.sin(angle) * pointRadius] as const;
    });
    const deltas = points.slice(1).map((point, index) => [
      point[0] - points[index][0],
      point[1] - points[index][1],
    ]);
    deltas.push([points[0][0] - points[9][0], points[0][1] - points[9][1]]);
    setDraw(filled ? COLOR.gold : COLOR.muted);
    setFill(filled ? COLOR.gold : COLOR.white);
    pdf.setLineWidth(filled ? 0.35 : 0.55);
    pdf.lines(deltas, points[0][0], points[0][1], [1, 1], filled ? 'FD' : 'S', true);
  };

  const drawCheck = (centerX: number, centerY: number, radius = 3.2) => {
    setFill(COLOR.teal);
    pdf.circle(centerX, centerY, radius, 'F');
    setDraw(COLOR.white);
    pdf.setLineWidth(0.8);
    pdf.line(centerX - 1.6, centerY, centerX - 0.35, centerY + 1.35);
    pdf.line(centerX - 0.35, centerY + 1.35, centerX + 1.9, centerY - 1.35);
  };

  const drawArrow = (x: number, centerY: number) => {
    setDraw(COLOR.teal);
    pdf.setLineWidth(0.8);
    pdf.line(x, centerY, x + 6, centerY);
    pdf.line(x + 6, centerY, x + 3.8, centerY - 2);
    pdf.line(x + 6, centerY, x + 3.8, centerY + 2);
  };

  const drawCross = (centerX: number, centerY: number, radius = 3.2) => {
    setFill([220, 74, 74]);
    pdf.circle(centerX, centerY, radius, 'F');
    setDraw(COLOR.white);
    pdf.setLineWidth(0.75);
    pdf.line(centerX - 1.35, centerY - 1.35, centerX + 1.35, centerY + 1.35);
    pdf.line(centerX + 1.35, centerY - 1.35, centerX - 1.35, centerY + 1.35);
  };

  const drawSignal = (centerX: number, centerY: number) => {
    setFill(COLOR.gold);
    pdf.circle(centerX, centerY, 2.7, 'F');
    setFill(COLOR.navy);
    pdf.circle(centerX, centerY, 1.05, 'F');
  };
  const wrap = (text: string, width: number, style: 'normal' | 'bold', size: number) => {
    setFont(style, size);
    return pdf.splitTextToSize(pdfText(text), width) as string[];
  };

  const drawPageChrome = () => {
    setFill(COLOR.paper);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    setFill(COLOR.navy);
    pdf.rect(0, 0, pageWidth, 18, 'F');
    setFill(COLOR.gold);
    pdf.rect(0, 18, pageWidth, 1.1, 'F');
    setText(COLOR.white);
    setFont('bold', 8.5);
    pdf.text('FUTURE CAREER SCHOOL', marginX, 11.2);
    setText([182, 197, 214]);
    setFont('normal', 7.2);
    pdf.text('GRADUATES  /  EARLY CAREER REPORT', pageWidth - marginX, 11.2, {
      align: 'right',
    });
    y = contentTop;
  };

  const addContentPage = () => {
    pdf.addPage();
    drawPageChrome();
  };

  const ensureSpace = (height: number) => {
    if (y + height > contentBottom) addContentPage();
  };

  const drawWrappedAcrossPages = (
    text: string,
    width: number,
    x: number,
    style: 'normal' | 'bold',
    size: number,
    color: Rgb,
    lineHeight: number,
    beforeChunk?: (height: number) => void
  ) => {
    let remaining = wrap(text, width, style, size);
    while (remaining.length) {
      if (contentBottom - y < lineHeight * 2) addContentPage();
      const availableLines = Math.max(1, Math.floor((contentBottom - y - 2) / lineHeight));
      const chunk = remaining.splice(0, availableLines);
      const height = chunk.length * lineHeight + 4;
      beforeChunk?.(height);
      setText(color);
      setFont(style, size);
      pdf.text(chunk, x, y + lineHeight, { lineHeightFactor: 1.16 });
      y += height;
      if (remaining.length) addContentPage();
    }
  };

  const renderCover = () => {
    setFill(COLOR.navy);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    setFill(COLOR.indigo);
    pdf.circle(pageWidth + 5, 8, 62, 'F');
    setFill(COLOR.teal);
    pdf.circle(pageWidth - 1, 14, 45, 'F');
    setFill(COLOR.navyCard);
    pdf.circle(pageWidth - 5, 18, 34, 'F');
    setFill(COLOR.gold);
    pdf.rect(0, 0, 7, pageHeight, 'F');

    setText(COLOR.gold);
    setFont('bold', 8.8);
    pdf.text(pdfText(options.reportKicker), 21, 34);
    setText(COLOR.white);
    const titleLines = wrap(options.title, 160, 'bold', 25);
    pdf.text(titleLines, 21, 55, { lineHeightFactor: 1.05 });
    const titleBottom = 55 + titleLines.length * 10;

    setFill(COLOR.gold);
    pdf.roundedRect(21, titleBottom + 9, 47, 9, 4.5, 4.5, 'F');
    setText(COLOR.navy);
    setFont('bold', 7.5);
    pdf.text('YOUR DISCOVERY MAP', 44.5, titleBottom + 15, { align: 'center' });

    setText(COLOR.gold);
    setFont('bold', 8.2);
    pdf.text('STRONGEST CAREER-INTEREST PATTERN', 21, titleBottom + 36);
    setText(COLOR.white);
    setFont('bold', 22);
    const profileTitleLines = wrap(coverProfileTitle || 'Your personalised profile', 160, 'bold', 22);
    pdf.text(profileTitleLines, 21, titleBottom + 47, { lineHeightFactor: 1.03 });

    const profileTitleBottom = titleBottom + 47 + profileTitleLines.length * 8.5;
    let chipX = 21;
    [coverProfileCode, coverProfileSecondary].filter(Boolean).forEach((label, index) => {
      const safeLabel = pdfText(label || '');
      setFont('bold', 7.8);
      const chipWidth = Math.min(index === 0 ? 45 : 82, pdf.getTextWidth(safeLabel) + 12);
      setFill(index === 0 ? COLOR.gold : COLOR.teal);
      pdf.roundedRect(chipX, profileTitleBottom + 3, chipWidth, 8.5, 4.25, 4.25, 'F');
      setText(index === 0 ? COLOR.navy : COLOR.white);
      pdf.text(safeLabel, chipX + chipWidth / 2, profileTitleBottom + 8.6, { align: 'center' });
      chipX += chipWidth + 4;
    });

    const cardY = profileTitleBottom + 19;
    setFill(COLOR.navyCard);
    setDraw([45, 65, 87]);
    pdf.roundedRect(21, cardY, 168, 52, 5, 5, 'FD');
    setText(COLOR.white);
    setFont('bold', 11.2);
    const taglineLines = wrap(
      coverProfileTagline || 'Your personalised career pattern and the strengths behind it.',
      148,
      'bold',
      11.2
    );
    pdf.text(taglineLines, 31, cardY + 12, { lineHeightFactor: 1.25 });
    const contextY = cardY + 14 + taglineLines.length * 5.1;
    setText([182, 199, 216]);
    setFont('normal', 9.7);
    pdf.text(
      wrap(
        coverProfileContext ||
          'This complete report connects your interests, strengths, career stage, learning style and practical next steps.',
        148,
        'normal',
        9.7
      ),
      31,
      contextY,
      { lineHeightFactor: 1.32 }
    );

    const statY = cardY + 65;
    [
      [`${sections.length}`, 'REPORT SECTIONS'],
      ['26', 'QUESTIONS'],
      ['100%', 'YOUR ANSWERS'],
    ].forEach(([value, label], index) => {
      const x = 21 + index * 57;
      setFill(index === 0 ? COLOR.gold : COLOR.navyCard);
      pdf.roundedRect(x, statY, 52, 29, 4, 4, 'F');
      setText(index === 0 ? COLOR.navy : COLOR.white);
      setFont('bold', 14);
      pdf.text(value, x + 26, statY + 12, { align: 'center' });
      setText(index === 0 ? COLOR.ink : [163, 183, 203]);
      setFont('bold', 6.6);
      pdf.text(label, x + 26, statY + 21.5, { align: 'center' });
    });

    setText([158, 177, 197]);
    setFont('normal', 8.3);
    pdf.text(`Prepared ${new Date().toLocaleDateString('en-IN')}`, 21, pageHeight - 25);
    pdf.text(options.phoneDisplay, 21, pageHeight - 16);
    setText(COLOR.gold);
    setFont('bold', 8.3);
    pdf.text('futurecareerschool.com', pageWidth - 21, pageHeight - 16, { align: 'right' });
    pdf.link(pageWidth - 76, pageHeight - 23, 55, 12, { url: options.siteUrl });
  };

  const renderSectionHeader = (title: string) => {
    sectionNumber += 1;
    const accent = sectionNumber % 2 ? COLOR.gold : COLOR.teal;
    const titleLines = wrap(title, contentWidth - 29, 'bold', 15.2);
    const height = Math.max(19, titleLines.length * 7 + 7);
    // Keep the heading with at least the first line of its section.
    ensureSpace(height + 18);
    setFill(COLOR.white);
    setDraw(COLOR.line);
    pdf.roundedRect(marginX, y, contentWidth, height, 3.5, 3.5, 'FD');
    setFill(accent);
    pdf.roundedRect(marginX, y, 4, height, 2, 2, 'F');
    const badgeCenterX = marginX + 13.5;
    const badgeCenterY = y + height / 2;
    pdf.circle(badgeCenterX, badgeCenterY, 6.8, 'F');
    setText(sectionNumber % 2 ? COLOR.navy : COLOR.white);
    setFont('bold', 9.4);
    pdf.text(String(sectionNumber).padStart(2, '0'), badgeCenterX, badgeCenterY, {
      align: 'center',
      baseline: 'middle',
    });
    setText(COLOR.ink);
    setFont('bold', 15.2);
    pdf.text(titleLines, marginX + 25.5, y + 8.8, { lineHeightFactor: 1.06 });
    y += height + 6;
  };

  const renderScoreRows = (section: ReportSection) => {
    const rows = section.scoreRows || [];
    if (!rows.length) return;
    const compact = section.kind === 'intelligences';
    const rowWidth = compact ? (contentWidth - 4) / 2 : contentWidth;
    const rowHeight = compact ? 20 : 18;
    rows.forEach((row, index) => {
      if (compact && index % 2 === 0) ensureSpace(rowHeight + 3);
      if (!compact) ensureSpace(rowHeight + 2);
      const column = compact ? index % 2 : 0;
      const x = marginX + column * (rowWidth + 4);
      const rowY = y;
      setFill(index % 2 ? COLOR.white : COLOR.indigoSoft);
      setDraw(COLOR.line);
      pdf.roundedRect(x, rowY, rowWidth, rowHeight, 3, 3, 'FD');
      setFill(section.kind === 'riasec' && index < 3 ? COLOR.gold : COLOR.teal);
      pdf.circle(x + 8, rowY + rowHeight / 2, 4.3, 'F');
      setText(section.kind === 'riasec' && index < 3 ? COLOR.navy : COLOR.white);
      setFont('bold', row.code.length > 2 ? 6.8 : 8.4);
      pdf.text(pdfText(row.code.toUpperCase()), x + 8, rowY + rowHeight / 2, { align: 'center', baseline: 'middle' });
      setText(COLOR.ink);
      setFont('bold', compact ? 8.7 : 9.5);
      pdf.text(pdfText(`${row.rank ? `${row.rank}  ` : ''}${row.label}`), x + 15, rowY + 6.2);
      setText(COLOR.muted);
      setFont('normal', 6.8);
      pdf.text(pdfText(row.raw), x + 15, rowY + 10.9);
      const barX = x + 15;
      const scoreArea = compact ? 19 : 25;
      const barWidth = rowWidth - 15 - scoreArea - 6;
      setFill(COLOR.line);
      pdf.roundedRect(barX, rowY + rowHeight - 4.5, barWidth, 2.4, 1.2, 1.2, 'F');
      setFill(section.kind === 'riasec' && index < 3 ? COLOR.gold : COLOR.teal);
      pdf.roundedRect(barX, rowY + rowHeight - 4.5, Math.max(1, barWidth * Math.min(100, row.score) / 100), 2.4, 1.2, 1.2, 'F');
      setText(COLOR.ink);
      setFont('bold', compact ? 8.4 : 9.2);
      pdf.text(`${row.score}%`, x + rowWidth - 6, rowY + rowHeight / 2 + 1.2, { align: 'right' });
      if (!compact || column === 1 || index === rows.length - 1) y += rowHeight + 2;
    });
    y += 2;
  };

  const renderProfile = (section: ReportSection) => {
    if (!section.profile) return;
    const profile = section.profile;
    const tagline = wrap(profile.tagline, contentWidth - 35, 'bold', 11.2);
    const description = wrap(profile.description, contentWidth - 20, 'normal', 9.8);
    const height = 35 + tagline.length * 5.2 + description.length * 4.7;
    ensureSpace(height + 2);
    setFill(COLOR.navyCard);
    pdf.roundedRect(marginX, y, contentWidth, height, 5, 5, 'F');
    setFill(COLOR.gold);
    pdf.circle(marginX + 14, y + 14, 9, 'F');
    setText(COLOR.navy);
    setFont('bold', profile.code.length > 2 ? 8.7 : 11);
    pdf.text(pdfText(profile.code), marginX + 14, y + 14, { align: 'center', baseline: 'middle' });
    setText([175, 194, 213]);
    setFont('bold', 7.2);
    pdf.text(pdfText(profile.label.toUpperCase()), marginX + 28, y + 8.7);
    setText(COLOR.white);
    setFont('bold', 10.4);
    pdf.text(pdfText(profile.badge), marginX + 28, y + 15.2);
    setText(COLOR.gold);
    setFont('bold', 11.2);
    pdf.text(tagline, marginX + 10, y + 29, { lineHeightFactor: 1.14 });
    const descriptionY = y + 32 + tagline.length * 5.2;
    setText([190, 204, 218]);
    setFont('normal', 9.8);
    pdf.text(description, marginX + 10, descriptionY, { lineHeightFactor: 1.22 });
    y += height + 3;
  };

  const renderCareerRows = (section: ReportSection) => {
    (section.careerRows || []).forEach((row, index) => {
      const detail = `Domain: ${row.domain}   |   Key skill: ${row.skill}   |   Indicative pay: ${row.salary}`;
      const pathLines = wrap(`Entry path: ${row.path}`, contentWidth - 14, 'normal', 8.4);
      const height = Math.max(24, 18 + pathLines.length * 4.1);
      ensureSpace(height + 2);
      setFill(index % 2 ? COLOR.white : COLOR.goldSoft);
      setDraw(COLOR.line);
      pdf.roundedRect(marginX, y, contentWidth, height, 3.5, 3.5, 'FD');
      setFill(COLOR.gold);
      pdf.roundedRect(marginX + 5, y + 5, 8, 8, 2.3, 2.3, 'F');
      setText(COLOR.navy);
      setFont('bold', 7.6);
      pdf.text(String(index + 1), marginX + 9, y + 9, { align: 'center', baseline: 'middle' });
      setText(COLOR.ink);
      setFont('bold', 10.2);
      pdf.text(pdfText(row.career), marginX + 17, y + 9.5);
      setText(COLOR.slate);
      setFont('bold', 7.6);
      pdf.text(pdfText(detail), marginX + 17, y + 15);
      setFont('normal', 8.4);
      pdf.text(pathLines, marginX + 7, y + 21, { lineHeightFactor: 1.18 });
      y += height + 2;
    });
    y += 2;
  };

  const renderLine = (line: ReportLine, index: number, nextLine?: ReportLine) => {
    const rawText = normaliseVisibleText(line.text);
    const inlineRating = rawText.match(
      /^(.*?\S)\s+([\u2605\u2b50\u2606]{2,})$/
    );
    if (inlineRating) {
      const label = pdfText(inlineRating[1]);
      const symbols = inlineRating[2];
      const filledCount = Array.from(symbols).filter(
        (symbol) => symbol === '\u2605' || symbol === '\u2b50'
      ).length;
      const totalCount = Array.from(symbols).length;
      const height = 16;
      ensureSpace(height + 2);
      setFill(COLOR.goldSoft);
      setDraw([239, 220, 166]);
      pdf.roundedRect(marginX, y, contentWidth, height, 3, 3, 'FD');
      setText(COLOR.ink);
      setFont('bold', 9.5);
      pdf.text(label, marginX + 7, y + 9.7);
      Array.from(symbols).forEach((symbol, starIndex) => {
        drawStar(
          pageWidth - marginX - 50 + starIndex * 7.5,
          y + 7.9,
          symbol === '\u2605' || symbol === '\u2b50',
          2.8
        );
      });
      setText(COLOR.slate);
      setFont('bold', 8);
      pdf.text(`${filledCount} of ${totalCount}`, pageWidth - marginX - 7, y + 10, {
        align: 'right',
      });
      y += height + 2;
      return;
    }
    const ratingSymbols = rawText.match(/^[\u2605\u2b50\u2606]+$/)?.[0];
    if (ratingSymbols) {
      const filledCount = Array.from(ratingSymbols).filter(
        (symbol) => symbol === '\u2605' || symbol === '\u2b50'
      ).length;
      const totalCount = Array.from(ratingSymbols).length;
      const height = 15;
      ensureSpace(height + 2);
      setFill(COLOR.goldSoft);
      setDraw([239, 220, 166]);
      pdf.roundedRect(marginX, y, contentWidth, height, 3, 3, 'FD');
      setText(COLOR.ink);
      setFont('bold', 8.2);
      pdf.text('CAREER FIT', marginX + 7, y + 9.2);
      Array.from(ratingSymbols).forEach((symbol, starIndex) => {
        drawStar(
          marginX + 42 + starIndex * 8.2,
          y + 7.5,
          symbol === '\u2605' || symbol === '\u2b50'
        );
      });
      setText(COLOR.slate);
      setFont('bold', 9.2);
      pdf.text(
        `${filledCount} of ${totalCount} stars`,
        pageWidth - marginX - 7,
        y + 9.4,
        { align: 'right' }
      );
      y += height + 2;
      return;
    }

    if (/^[\u2713\u2714\u2705]+$/.test(rawText)) {
      ensureSpace(8);
      drawCheck(marginX + 4, y + 3.7, 2.8);
      y += 7.5;
      return;
    }

    if (/^[\u2192\u21d2\u27a1\u27a4\u279c]+$/.test(rawText)) {
      ensureSpace(7);
      drawArrow(marginX + 1, y + 3.2);
      y += 6.5;
      return;
    }

    if (/^[\u2717\u2718\u274c]+$/.test(rawText)) {
      ensureSpace(8);
      drawCross(marginX + 4, y + 3.7, 2.8);
      y += 7.5;
      return;
    }

    const isRecommended = /[\u2713\u2714\u2705]\s*$/.test(rawText);
    const isTopMatch =
      /[\u2605\u2b50]\s*$/.test(rawText) && !/^[\u2605\u2b50\u2606]+$/.test(rawText);
    const hasLeadingCheck = /^[\u2713\u2714\u2705]\s+/.test(rawText);
    const hasLeadingCross = /^[\u2717\u2718\u274c]\s+/.test(rawText);
    const hasLeadingArrow = /^[\u2192\u21d2\u27a1\u27a4\u279c]\s+/.test(rawText);
    const hasLeadingSwatch = /^\u25a0\s+/.test(rawText);
    const hasLeadingSignal = /^(?:\u23f1\ufe0f?|\ud83d\udccc|\ud83d\udcc5)\s*/.test(rawText);
    const cleanedText = rawText
      .replace(/^[\u2713\u2714\u2705\u2717\u2718\u274c\u2192\u21d2\u27a1\u27a4\u279c\u25a0]\ufe0f?\s+/, '')
      .replace(/^(?:\u23f1\ufe0f?|\ud83d\udccc|\ud83d\udcc5)\s*/, '')
      .replace(/\s+[\u2713\u2714\u2705\u2605\u2b50]\s*$/, '');
    const text = pdfText(cleanedText);
    if (!text || !/[A-Za-z0-9]/.test(text)) return;

    if (isRecommended || isTopMatch) {
      const badgeLabel = isRecommended ? 'RECOMMENDED' : 'TOP MATCH';
      const wrapped = wrap(text, contentWidth - 56, 'bold', 10.7);
      const height = Math.max(14, wrapped.length * 5.1 + 6);
      ensureSpace(height + 2);
      setFill(isRecommended ? COLOR.tealSoft : COLOR.goldSoft);
      setDraw(isRecommended ? [176, 226, 219] : [239, 220, 166]);
      pdf.roundedRect(marginX, y, contentWidth, height, 3.5, 3.5, 'FD');
      if (isRecommended) drawCheck(marginX + 8, y + height / 2, 3.2);
      else drawStar(marginX + 8, y + height / 2, true, 3.4);
      setText(COLOR.ink);
      setFont('bold', 10.7);
      pdf.text(wrapped, marginX + 15, y + 6.8, { lineHeightFactor: 1.16 });
      setFill(isRecommended ? COLOR.teal : COLOR.gold);
      pdf.roundedRect(pageWidth - marginX - 37, y + height / 2 - 3.8, 31, 7.6, 3.8, 3.8, 'F');
      setText(isRecommended ? COLOR.white : COLOR.navy);
      setFont('bold', 6.7);
      pdf.text(badgeLabel, pageWidth - marginX - 21.5, y + height / 2, {
        align: 'center',
        baseline: 'middle',
      });
      y += height + 2;
      return;
    }

    if (line.kind === 'subheading') {
      const wrapped = wrap(text, contentWidth - 12, 'bold', 11.8);
      const height = wrapped.length * 5.5 + 5;
      ensureSpace(height + 10);
      setFill(COLOR.teal);
      pdf.roundedRect(marginX, y + 1, 2.2, Math.max(7, height - 3), 1.1, 1.1, 'F');
      setText(COLOR.ink);
      setFont('bold', 11.8);
      pdf.text(wrapped, marginX + 7, y + 6.3, { lineHeightFactor: 1.15 });
      y += height;
      return;
    }

    if (line.kind === 'table') {
      const wrapped = wrap(text, contentWidth - 12, index === 0 ? 'bold' : 'normal', 9.6);
      const height = wrapped.length * 4.6 + 7;
      ensureSpace(height + 1);
      setFill(index % 2 ? COLOR.white : COLOR.indigoSoft);
      setDraw(COLOR.line);
      pdf.roundedRect(marginX, y, contentWidth, height, 2.5, 2.5, 'FD');
      setText(COLOR.ink);
      setFont(index === 0 ? 'bold' : 'normal', 9.6);
      pdf.text(wrapped, marginX + 6, y + 5.8, { lineHeightFactor: 1.18 });
      y += height + 1.5;
      return;
    }

    const metric = text.match(/(?:^|\s)(\d{1,3})\s*%(?:\s|$)/);
    if (metric && text.length < 150) {
      const metricLabel = text === `${metric[1]}%` ? 'Relative score' : text;
      const wrapped = wrap(metricLabel, contentWidth - 35, 'bold', 9.8);
      const height = Math.max(19, wrapped.length * 4.6 + 9);
      ensureSpace(height + 2);
      setFill(COLOR.navyCard);
      pdf.roundedRect(marginX, y, contentWidth, height, 4, 4, 'F');
      setFill(COLOR.gold);
      pdf.roundedRect(marginX + 6, y + 5, 22, 11, 3, 3, 'F');
      setText(COLOR.navy);
      setFont('bold', 10.5);
      pdf.text(`${metric[1]}%`, marginX + 17, y + 12.5, { align: 'center' });
      setText(COLOR.white);
      setFont('bold', 9.8);
      pdf.text(wrapped, marginX + 33, y + 7.5, { lineHeightFactor: 1.16 });
      setFill([48, 67, 88]);
      pdf.roundedRect(marginX + 33, y + height - 6, contentWidth - 40, 2, 1, 1, 'F');
      setFill(COLOR.teal);
      pdf.roundedRect(
        marginX + 33,
        y + height - 6,
        (contentWidth - 40) * (Math.min(100, Number(metric[1])) / 100),
        2,
        1,
        1,
        'F'
      );
      y += height + 2;
      return;
    }

    if (
      line.kind === 'bullet' ||
      hasLeadingCheck ||
      hasLeadingCross ||
      hasLeadingArrow ||
      hasLeadingSwatch ||
      hasLeadingSignal
    ) {
      const wrapped = wrap(text, contentWidth - 18, 'normal', 10.2);
      const height = wrapped.length * 4.85 + 6;
      ensureSpace(height + 1);
      setFill(COLOR.white);
      setDraw(COLOR.line);
      pdf.roundedRect(marginX, y, contentWidth, height, 3, 3, 'FD');
      if (hasLeadingCheck) drawCheck(marginX + 7, y + 6.2, 2.6);
      else if (hasLeadingCross) drawCross(marginX + 7, y + 6.2, 2.6);
      else if (hasLeadingArrow) drawArrow(marginX + 4, y + 6.2);
      else if (hasLeadingSignal) drawSignal(marginX + 7, y + 6.2);
      else if (hasLeadingSwatch) {
        setFill(index % 2 ? COLOR.teal : COLOR.indigo);
        pdf.roundedRect(marginX + 4.4, y + 3.6, 5.2, 5.2, 1.1, 1.1, 'F');
      } else {
        setFill(COLOR.teal);
        pdf.circle(marginX + 7, y + 6.2, 2.2, 'F');
        setText(COLOR.white);
        setFont('bold', 6.5);
        pdf.text('>', marginX + 7, y + 7.3, { align: 'center' });
      }
      setText(COLOR.ink);
      setFont('normal', 10.2);
      pdf.text(wrapped, marginX + 13, y + 6.5, { lineHeightFactor: 1.18 });
      y += height + 1.5;
      return;
    }

    const isLabel =
      text.length <= 72 &&
      !/[.!?]$/.test(text) &&
      ((/[A-Z]/.test(text) && text === text.toUpperCase()) ||
        /[:%]$/.test(text) ||
        text.split(' ').length <= 7);
    if (/^\d{1,2}$/.test(text)) {
      // Keep a numbered step with its following label/body instead of leaving
      // a lone circle at the foot of the page.
      ensureSpace(28);
      setFill(COLOR.gold);
      pdf.circle(marginX + 5, y + 5, 4.2, 'F');
      setText(COLOR.navy);
      setFont('bold', 9);
      pdf.text(text, marginX + 5, y + 5, {
        align: 'center',
        baseline: 'middle',
      });
      y += 11;
      return;
    }
    if (isLabel) {
      const wrapped = wrap(text, contentWidth - 14, 'bold', 10.5);
      const height = wrapped.length * 4.95 + 4;
      // Avoid leaving a label by itself at the foot of a page.
      const nextIsRating = Boolean(
        nextLine && /^[\u2605\u2b50\u2606]+$/.test(normaliseVisibleText(nextLine.text))
      );
      ensureSpace(height + (nextIsRating ? 40 : 10));
      setFill(COLOR.gold);
      pdf.circle(marginX + 2.2, y + 4.7, 1.7, 'F');
      setText(COLOR.ink);
      setFont('bold', 10.5);
      pdf.text(wrapped, marginX + 7, y + 6.2, { lineHeightFactor: 1.18 });
      y += height + 0.8;
      return;
    }

    drawWrappedAcrossPages(text, contentWidth - 2, marginX + 1, 'normal', 10.5, COLOR.slate, 5.1);
    y += 1.5;
  };

  renderCover();
  addContentPage();
  sections.forEach((section) => {
    renderSectionHeader(section.title);
    renderProfile(section);
    renderScoreRows(section);
    renderCareerRows(section);
    section.lines.forEach((line, index) => renderLine(line, index, section.lines[index + 1]));
    y += 4;
  });

  pdf.addPage();
  setFill(COLOR.navy);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  setFill(COLOR.gold);
  pdf.rect(0, 0, 7, pageHeight, 'F');
  setText(COLOR.gold);
  setFont('bold', 9);
  pdf.text('YOUR NEXT STEP', 22, 39);
  setText(COLOR.white);
  setFont('bold', 24);
  pdf.text(['Turn your discovery', 'into a confident plan.'], 22, 61, { lineHeightFactor: 1.06 });
  setText([188, 203, 218]);
  setFont('normal', 10.5);
  pdf.text(
    wrap(
      'Keep this report, discuss it with a trusted mentor, and use the action plan before making your next career move. Personalised guidance is available when you want help comparing realistic roles, skills and growth paths.',
      160,
      'normal',
      10.5
    ),
    22,
    95,
    { lineHeightFactor: 1.4 }
  );
  setText(COLOR.gold);
  setFont('bold', 9.4);
  pdf.text(pdfText(guidanceTitle), 22, 116);
  setText([188, 203, 218]);
  setFont('normal', 8.8);
  pdf.text(wrap(guidanceBody, 166, 'normal', 8.8), 22, 124, { lineHeightFactor: 1.28 });
  setFill(COLOR.gold);
  pdf.roundedRect(22, 151, 166, 28, 5, 5, 'F');
  setText(COLOR.navy);
  setFont('bold', 11.5);
  pdf.text(pdfText(guidanceLabel), 31, 163);
  setFont('normal', 8.2);
  pdf.text('Compare career paths, skills and practical next steps with a counsellor.', 31, 172);
  pdf.link(22, 151, 166, 28, { url: options.guidanceUrl });
  setText([166, 185, 204]);
  setFont('normal', 8.2);
  pdf.text(wrap(guidanceFinePrint, 166, 'normal', 8.2), 22, 191, { lineHeightFactor: 1.25 });
  setFont('normal', 9);
  pdf.text(`Future Career School  |  ${options.phoneDisplay}`, 22, 211);
  setText(COLOR.gold);
  setFont('bold', 9);
  pdf.text('futurecareerschool.com', 22, 225);
  pdf.link(22, 218, 55, 12, { url: options.siteUrl });

  const totalPages = pdf.getNumberOfPages();
  for (let page = 1; page <= totalPages; page += 1) {
    pdf.setPage(page);
    const dark = page === 1 || page === totalPages;
    if (!dark) {
      // Repaint the header in the final pass as a hard guarantee for pages
      // that jsPDF may have inserted while laying out a long text array.
      setFill(COLOR.navy);
      pdf.rect(0, 0, pageWidth, 18, 'F');
      setFill(COLOR.gold);
      pdf.rect(0, 18, pageWidth, 1.1, 'F');
      setText(COLOR.white);
      setFont('bold', 8.5);
      pdf.text('FUTURE CAREER SCHOOL', marginX, 11.2);
      setText([182, 197, 214]);
      setFont('normal', 7.2);
      pdf.text('GRADUATES  /  EARLY CAREER REPORT', pageWidth - marginX, 11.2, { align: 'right' });
    }
    setDraw(dark ? [54, 72, 94] : COLOR.line);
    pdf.line(marginX, pageHeight - 12, pageWidth - marginX, pageHeight - 12);
    setText(dark ? [148, 168, 189] : COLOR.muted);
    setFont('normal', 7.4);
    pdf.text(`Future Career School  |  Page ${page} of ${totalPages}`, marginX, pageHeight - 7);
    if (!dark) pdf.text(options.phoneDisplay, pageWidth - marginX, pageHeight - 7, { align: 'right' });
  }

  return { pdf, sections };
}
