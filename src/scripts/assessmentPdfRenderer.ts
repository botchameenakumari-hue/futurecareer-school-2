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
  const sections = groupSections(lines);
  let y = 0;
  let onContentPage = false;

  const setFill = (color: Rgb) => pdf.setFillColor(...color);
  const setText = (color: Rgb) => pdf.setTextColor(...color);
  const setDraw = (color: Rgb) => pdf.setDrawColor(...color);
  const wrap = (text: string, width: number) => pdf.splitTextToSize(text, width) as string[];

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
    const titleLines = wrap(section.title, contentWidth - 28);
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
    const wrapped = wrap(line.text, contentWidth - 8);
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
    const wrapped = wrap(line.text, contentWidth - 28);
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
    const wrapped = wrap(line.text, contentWidth - 15);
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

    const metricMatch = line.text.match(/\b(\d{1,3})\s*%/);
    if (metricMatch && line.text.length < 165) {
      renderMetric(line, metricMatch);
      return;
    }

    const isCallout =
      line.text.length < 165 &&
      (/^(your|top|best|next|focus|strength|risk|readiness|timeline|income|freedom|important|remember|action)\b/i.test(
        line.text
      ) ||
        /^[A-Z][A-Z\s&/()-]{3,}$/.test(line.text));
    const wrapped = wrap(line.text, isCallout ? contentWidth - 14 : contentWidth - 2);
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

  const getResponseBlockHeight = (block: VisualReportLine[]) => {
    const contentLines = block.slice(1);
    const textWidth = contentWidth - 25;
    const wrappedLines = contentLines.map((line) => wrap(line.text, textWidth));
    const contentHeight = wrappedLines.reduce(
      (height, wrapped, index) => height + wrapped.length * (index === 0 ? 4.25 : 3.9),
      0
    );
    return Math.max(17, contentHeight + 7);
  };

  const renderResponseBlock = (block: VisualReportLine[]) => {
    const [numberLine, ...contentLines] = block;
    const textWidth = contentWidth - 25;
    const wrappedLines = contentLines.map((line) => wrap(line.text, textWidth));
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
      if (standaloneNumber || numberedQuestion) {
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
