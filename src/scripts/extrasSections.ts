// Turns the report-details, method, review and sources lines that the shared plan section prepares
// into sections the stage-test PDF generators can print.
export type ExtraSection = { title: string; lines: { kind: 'bullet'; text: string }[] };

export function extrasSections(container: HTMLElement, which: 'front' | 'back'): ExtraSection[] {
  try {
    const get = (window as any).__fcsReportExtras;
    if (typeof get !== 'function' || !container.querySelector('#fcs-companion-marker')) return [];
    const ex = get();
    const lines: { kind: string; text: string }[] = ex && ex[which] ? ex[which] : [];
    const out: ExtraSection[] = [];
    lines.forEach((l) => {
      if (l.kind === 'heading-1') out.push({ title: l.text, lines: [] });
      else if (out.length && l.text) out[out.length - 1].lines.push({ kind: 'bullet', text: l.text });
    });
    return out.filter((s) => s.lines.length);
  } catch (e) {
    return [];
  }
}
