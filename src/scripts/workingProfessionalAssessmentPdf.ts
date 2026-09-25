import html2canvas from 'html2canvas';

type JsPdfConstructor = typeof import('jspdf').jsPDF;

interface WorkingProfessionalPdfOptions {
  title: string;
  reportKicker: string;
  guidanceUrl: string;
  siteUrl: string;
  phoneDisplay: string;
  audienceLabel?: string;
  questionCount?: number;
  moduleCountLabel?: string;
}

interface RenderedBlock {
  canvas: HTMLCanvasElement;
  breakpoints: number[];
  preferredBreakpoints: number[];
  text: string;
  title: string;
}

const COLOR = {
  navy: [6, 14, 28] as const,
  navyCard: [16, 31, 51] as const,
  gold: [229, 184, 74] as const,
  teal: [45, 212, 191] as const,
  white: [255, 255, 255] as const,
  muted: [166, 185, 204] as const,
  line: [48, 67, 88] as const,
};

function cleanText(value: string) {
  return value.replace(/\u00a0/g, ' ').replace(/[ \t]+/g, ' ').trim();
}

function pdfText(value: string) {
  return value
    .replace(/\u20b9/g, 'Rs. ')
    .replace(/[\u00d7\u2715]/g, ' x ')
    .replace(/[\u2012\u2013\u2014\u2212]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2022\u00b7\u2219]/g, '-')
    .replace(/[\u2192\u21d2\u27a1\u27a4\u279c]/g, '->')
    .replace(/[\u2713\u2714\u2705]/g, 'YES')
    .replace(/[\u2717\u2718\u274c]/g, 'NO')
    .replace(/[\u2605\u2b50]/g, 'FILLED STAR')
    .replace(/\u2606/g, 'EMPTY STAR')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7e\n]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function cloneIsolatedSection(section: HTMLElement) {
  const clone = section.cloneNode(true) as HTMLElement;
  clone.classList.remove('is-collapsed');
  clone.style.maxHeight = 'none';
  clone.style.opacity = '1';
  clone.style.overflow = 'visible';
  clone.querySelectorAll('.res-section').forEach((nestedSection) => nestedSection.remove());
  clone.querySelectorAll('.res-guidance').forEach((guidance) => guidance.remove());
  clone
    .querySelectorAll(
      '.assessment-report-actions, .assessment-quick-nav, .assessment-section-toggle, .rg-actions, button, script, style'
    )
    .forEach((node) => node.remove());
  clone.querySelectorAll<HTMLElement>('.is-collapsed').forEach((node) => {
    node.classList.remove('is-collapsed');
    node.style.maxHeight = 'none';
    node.style.opacity = '1';
    node.style.overflow = 'visible';
  });
  clone.querySelectorAll<HTMLDetailsElement>('details').forEach((details) => {
    details.open = true;
  });
  return clone;
}

function prepareCaptureRoot(block: HTMLElement) {
  const root = document.createElement('div');
  root.dataset.workingPdfCapture = 'true';
  root.style.cssText = [
    'position:fixed',
    'left:-12000px',
    'top:0',
    'width:900px',
    'box-sizing:border-box',
    'padding:28px',
    'background:#060e1c',
    'color:#ffffff',
    'font-family:Inter,Arial,sans-serif',
    'z-index:-9999',
    'pointer-events:none',
  ].join(';');
  block.style.margin = '0';
  block.style.width = '100%';
  block.style.maxWidth = 'none';
  block.style.boxSizing = 'border-box';
  root.append(block);
  document.body.append(root);
  return root;
}

function collectBreakpoints(root: HTMLElement, scale: number) {
  const rootRect = root.getBoundingClientRect();
  const points = new Set<number>([0, Math.round(rootRect.height * scale)]);
  const preferredPoints = new Set<number>([0, Math.round(rootRect.height * scale)]);
  root.querySelectorAll<HTMLElement>('*').forEach((element) => {
    const style = getComputedStyle(element);
    if (!['block', 'flex', 'grid', 'table', 'list-item'].includes(style.display)) return;
    const rect = element.getBoundingClientRect();
    if (rect.height < 22 || rect.width < rootRect.width * 0.22) return;
    const top = Math.round((rect.top - rootRect.top) * scale);
    const bottom = Math.round((rect.bottom - rootRect.top) * scale);
    if (top > 12) points.add(top);
    if (bottom > 12) points.add(bottom);

    // Prefer the edge of a complete result card over a boundary inside one of
    // its metric cells. This keeps a pathway, recommendation, or score card
    // together even when a result section needs more than one PDF page.
    const radius = Number.parseFloat(style.borderTopLeftRadius) || 0;
    const hasVisibleContainer =
      radius >= 6 ||
      style.borderTopWidth !== '0px' ||
      (style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent');
    const isWideCard = rect.width >= rootRect.width * 0.68;
    const parentDisplay = element.parentElement
      ? getComputedStyle(element.parentElement).display
      : '';
    const isGridCard = parentDisplay === 'grid' && rect.width >= rootRect.width * 0.32;
    if (hasVisibleContainer && (isWideCard || isGridCard)) {
      if (top > 12) preferredPoints.add(top);
      if (bottom > 12) preferredPoints.add(bottom);
    }
  });
  return {
    all: Array.from(points).sort((a, b) => a - b),
    preferred: Array.from(preferredPoints).sort((a, b) => a - b),
  };
}

async function renderBlock(block: HTMLElement, title: string): Promise<RenderedBlock> {
  const root = prepareCaptureRoot(block);
  await document.fonts?.ready;
  await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  const scale = 2;
  const text = cleanText(root.innerText);
  const breakpoints = collectBreakpoints(root, scale);
  try {
    const canvas = await html2canvas(root, {
      backgroundColor: '#060e1c',
      scale,
      logging: false,
      useCORS: true,
      width: root.scrollWidth,
      height: root.scrollHeight,
      windowWidth: 1200,
      windowHeight: Math.max(900, root.scrollHeight),
    });
    return {
      canvas,
      breakpoints: breakpoints.all,
      preferredBreakpoints: breakpoints.preferred,
      text,
      title,
    };
  } finally {
    root.remove();
  }
}

function cropCanvas(source: HTMLCanvasElement, top: number, height: number) {
  const slice = document.createElement('canvas');
  slice.width = source.width;
  slice.height = height;
  const context = slice.getContext('2d');
  if (!context) throw new Error('The PDF page canvas could not be created.');
  context.fillStyle = '#060e1c';
  context.fillRect(0, 0, slice.width, slice.height);
  context.drawImage(source, 0, top, source.width, height, 0, 0, source.width, height);
  return slice;
}

function chooseBreak(
  current: number,
  maximumEnd: number,
  totalHeight: number,
  breakpoints: number[],
  preferredBreakpoints: number[]
) {
  if (maximumEnd >= totalHeight) return totalHeight;
  const minimumUsefulEnd = current + Math.round((maximumEnd - current) * 0.58);
  const preferred = preferredBreakpoints.filter(
    (point) => point >= minimumUsefulEnd && point <= maximumEnd - 8
  );
  if (preferred.length) return preferred[preferred.length - 1];
  const safe = breakpoints.filter((point) => point >= minimumUsefulEnd && point <= maximumEnd - 8);
  return safe.length ? safe[safe.length - 1] : maximumEnd;
}

function drawPageBase(
  pdf: InstanceType<JsPdfConstructor>,
  sectionLabel: string,
  sectionTitle: string
) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  pdf.setFillColor(...COLOR.navy);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  pdf.setFillColor(...COLOR.gold);
  pdf.rect(0, 18, pageWidth, 1.1, 'F');
  pdf.setTextColor(...COLOR.white);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8.6);
  pdf.text('FUTURE CAREER SCHOOL', 16, 11.5);
  pdf.setTextColor(...COLOR.muted);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7.2);
  const rightLabel = `${sectionLabel}  /  ${pdfText(sectionTitle)}`;
  const clipped = rightLabel.length > 76 ? `${rightLabel.slice(0, 73)}...` : rightLabel;
  pdf.text(clipped, pageWidth - 16, 11.5, { align: 'right' });
}

function embedSearchableText(
  pdf: InstanceType<JsPdfConstructor>,
  value: string,
  x: number,
  y: number,
  width: number
) {
  const searchable = pdfText(value);
  if (!searchable) return;
  pdf.setTextColor(...COLOR.navy);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(1);
  const lines = pdf.splitTextToSize(searchable, width * 10);
  pdf.text(lines, x, y, { lineHeightFactor: 1.02 });
}

function addRenderedBlock(
  pdf: InstanceType<JsPdfConstructor>,
  rendered: RenderedBlock,
  sectionIndex: number,
  sectionCount: number
) {
  const contentX = 12;
  const contentY = 23;
  const contentWidth = pdf.internal.pageSize.getWidth() - contentX * 2;
  const contentBottom = pdf.internal.pageSize.getHeight() - 17;
  const maxHeightMm = contentBottom - contentY;
  const maxSlicePixels = Math.floor((maxHeightMm / contentWidth) * rendered.canvas.width);
  let top = 0;
  let sliceIndex = 0;

  while (top < rendered.canvas.height) {
    const maximumEnd = Math.min(rendered.canvas.height, top + maxSlicePixels);
    const end = chooseBreak(
      top,
      maximumEnd,
      rendered.canvas.height,
      rendered.breakpoints,
      rendered.preferredBreakpoints
    );
    const sliceHeight = Math.max(1, end - top);
    const slice = cropCanvas(rendered.canvas, top, sliceHeight);
    pdf.addPage();
    const sectionLabel = `SECTION ${String(sectionIndex).padStart(2, '0')} OF ${sectionCount}`;
    drawPageBase(pdf, sliceIndex ? `${sectionLabel} - CONTINUED` : sectionLabel, rendered.title);
    if (sliceIndex === 0) {
      embedSearchableText(pdf, rendered.text, contentX + 1, contentY + 1, contentWidth - 2);
    }
    const heightMm = (sliceHeight / rendered.canvas.width) * contentWidth;
    pdf.addImage(
      slice.toDataURL('image/jpeg', 0.9),
      'JPEG',
      contentX,
      contentY,
      contentWidth,
      heightMm,
      undefined,
      'FAST'
    );
    top = end;
    sliceIndex += 1;
  }
}

function drawCover(
  pdf: InstanceType<JsPdfConstructor>,
  summary: RenderedBlock,
  options: WorkingProfessionalPdfOptions,
  sectionCount: number
) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  pdf.setFillColor(...COLOR.navy);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  pdf.setFillColor(...COLOR.gold);
  pdf.rect(0, 0, 6, pageHeight, 'F');
  pdf.setFillColor(...COLOR.teal);
  pdf.circle(pageWidth - 16, 13, 23, 'F');
  pdf.setFillColor(99, 102, 241);
  pdf.circle(pageWidth - 10, 8, 16, 'F');
  pdf.setTextColor(...COLOR.gold);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8.4);
  pdf.text(pdfText(options.reportKicker), 20, 28);
  pdf.setTextColor(...COLOR.white);
  pdf.setFontSize(24);
  pdf.text(['Working Professional', 'Career Assessment Report'], 20, 43, { lineHeightFactor: 1.05 });
  pdf.setTextColor(...COLOR.muted);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9.2);
  pdf.text('A complete, personalised strategy report based on your assessment answers.', 20, 68);

  embedSearchableText(pdf, summary.text, 20, 76, 170);
  const imageWidth = 170;
  const imageHeight = (summary.canvas.height / summary.canvas.width) * imageWidth;
  pdf.addImage(
    summary.canvas.toDataURL('image/jpeg', 0.92),
    'JPEG',
    20,
    78,
    imageWidth,
    Math.min(118, imageHeight),
    undefined,
    'FAST'
  );

  const statY = 204;
  const statWidth = 51;
  [
    [String(sectionCount), options.moduleCountLabel || 'RESULT MODULES'],
    [String(options.questionCount || 32), 'QUESTIONS'],
    ['100%', 'PERSONALISED'],
  ].forEach(([value, label], index) => {
    const x = 20 + index * 58;
    pdf.setFillColor(...(index === 0 ? COLOR.gold : COLOR.navyCard));
    pdf.roundedRect(x, statY, statWidth, 25, 4, 4, 'F');
    pdf.setTextColor(...(index === 0 ? COLOR.navy : COLOR.white));
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(13);
    pdf.text(value, x + statWidth / 2, statY + 10.5, { align: 'center' });
    pdf.setTextColor(...(index === 0 ? COLOR.navy : COLOR.muted));
    pdf.setFontSize(6.3);
    pdf.text(label, x + statWidth / 2, statY + 18.2, { align: 'center' });
  });
  pdf.setTextColor(...COLOR.muted);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8);
  pdf.text('Generated from the complete working-professional results page', 20, 247);
  pdf.setTextColor(...COLOR.gold);
  pdf.setFont('helvetica', 'bold');
  pdf.text('futurecareerschool.com', 20, 259);
}

function drawClosingPage(
  pdf: InstanceType<JsPdfConstructor>,
  options: WorkingProfessionalPdfOptions,
  guidance?: HTMLElement
) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  pdf.addPage();
  pdf.setFillColor(...COLOR.navy);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  pdf.setFillColor(...COLOR.gold);
  pdf.rect(0, 0, 7, pageHeight, 'F');
  pdf.setTextColor(...COLOR.gold);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.text('YOUR NEXT STEP', 22, 39);
  pdf.setTextColor(...COLOR.white);
  pdf.setFontSize(24);
  pdf.text(['Turn your assessment', 'into a confident plan.'], 22, 61, { lineHeightFactor: 1.06 });
  pdf.setTextColor(...COLOR.muted);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10.5);
  pdf.text(
    pdf.splitTextToSize(
      'Keep this report because every score, recommendation, roadmap and scenario is tied to this assessment attempt. Use it to compare options before making a costly career move.',
      164
    ),
    22,
    94,
    { lineHeightFactor: 1.35 }
  );
  const guidanceText = cleanText(guidance?.innerText || 'Book Working Professional Guidance');
  embedSearchableText(pdf, guidanceText, 22, 125, 164);
  pdf.setFillColor(...COLOR.gold);
  pdf.roundedRect(22, 145, 166, 27, 5, 5, 'F');
  pdf.setTextColor(...COLOR.navy);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(11.3);
  pdf.text('Book Working Professional Guidance', 31, 157);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8.2);
  pdf.text('Compare paths, risks, timelines and practical next steps.', 31, 166);
  pdf.link(22, 145, 166, 27, { url: options.guidanceUrl });
  pdf.setTextColor(...COLOR.muted);
  pdf.setFontSize(9);
  pdf.text(`Future Career School  |  ${options.phoneDisplay}`, 22, 201);
  pdf.setTextColor(...COLOR.gold);
  pdf.setFont('helvetica', 'bold');
  pdf.text('futurecareerschool.com', 22, 215);
  pdf.link(22, 208, 56, 12, { url: options.siteUrl });
}

function addFinalPageFurniture(
  pdf: InstanceType<JsPdfConstructor>,
  options: WorkingProfessionalPdfOptions
) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const totalPages = pdf.getNumberOfPages();
  for (let page = 1; page <= totalPages; page += 1) {
    pdf.setPage(page);
    pdf.setDrawColor(...COLOR.line);
    pdf.line(16, pageHeight - 12, pageWidth - 16, pageHeight - 12);
    pdf.setTextColor(...COLOR.muted);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(7.2);
    pdf.text(`Future Career School  |  Page ${page} of ${totalPages}`, 16, pageHeight - 7);
    if (page > 1 && page < totalPages) {
      pdf.text(options.phoneDisplay, pageWidth - 16, pageHeight - 7, { align: 'right' });
    }
  }
}

export async function createWorkingProfessionalAssessmentPdf(
  container: HTMLElement,
  PdfDocument: JsPdfConstructor,
  options: WorkingProfessionalPdfOptions
) {
  const executiveSummary = container.querySelector<HTMLElement>('.exec-dashboard');
  if (!executiveSummary) {
    throw new Error('The working-professional executive result was not available to export.');
  }
  const sourceSections = Array.from(container.querySelectorAll<HTMLElement>('.res-section'));
  if (!sourceSections.length) {
    throw new Error('No working-professional result modules were available to export.');
  }

  const pdf = new PdfDocument({ unit: 'mm', format: 'a4', compress: true });
  const summary = await renderBlock(
    executiveSummary.cloneNode(true) as HTMLElement,
    'Your Primary Profile'
  );
  drawCover(pdf, summary, options, sourceSections.length);

  for (let index = 0; index < sourceSections.length; index += 1) {
    const sourceSection = sourceSections[index];
    const title = cleanText(
      sourceSection.querySelector<HTMLElement>('h1,h2,h3,[data-pdf-section-heading]')
        ?.textContent || `Result Module ${index + 1}`
    );
    const rendered = await renderBlock(cloneIsolatedSection(sourceSection), title);
    addRenderedBlock(pdf, rendered, index + 1, sourceSections.length);
  }

  drawClosingPage(
    pdf,
    options,
    container.querySelector<HTMLElement>('.res-guidance') || undefined
  );
  addFinalPageFurniture(pdf, options);
  return { pdf, sectionCount: sourceSections.length };
}
