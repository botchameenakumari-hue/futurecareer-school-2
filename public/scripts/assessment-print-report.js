(function () {
  var removableSelectors = [
    'button',
    '.btn-gold',
    '.btn-outline',
    '.rg-actions',
    '.res-actions',
    '.result-actions',
    '.hero-actions',
    '.keyboard-hint',
    'script',
    'style'
  ];

  var visualStyleProps = [
    'color',
    'background',
    'backgroundColor',
    'backgroundImage',
    'boxShadow',
    'textShadow',
    'filter',
    'backdropFilter',
    'outlineColor',
    'borderColor'
  ];

  function removeInteractiveNodes(root) {
    removableSelectors.forEach(function (selector) {
      root.querySelectorAll(selector).forEach(function (node) {
        node.remove();
      });
    });
  }

  function normalizeInlineStyles(root) {
    root.querySelectorAll('*').forEach(function (node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }

      var style = node.style;
      visualStyleProps.forEach(function (prop) {
        if (style[prop]) {
          style[prop] = '';
        }
      });

      if (style.transform) {
        style.transform = '';
      }

      if (style.position === 'absolute' || style.position === 'fixed') {
        style.position = '';
        style.top = '';
        style.right = '';
        style.bottom = '';
        style.left = '';
      }

      if (/^\d+(\.\d+)?px$/.test(style.height) && parseFloat(style.height) > 500) {
        style.height = '';
      }

      if (/^\d+(\.\d+)?px$/.test(style.minHeight) && parseFloat(style.minHeight) > 500) {
        style.minHeight = '';
      }
    });
  }

  function buildDocument(title, subtitle, bodyHtml) {
    return (
      '<!DOCTYPE html>' +
      '<html lang="en">' +
      '<head>' +
      '<meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<title>' + title + '</title>' +
      '<style>' +
      ':root{color-scheme:light}' +
      '*{box-sizing:border-box}' +
      'html,body{margin:0;padding:0;background:#ffffff !important;color:#111827 !important}' +
      'body{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;font-size:12px;line-height:1.65}' +
      '.report-shell{max-width:980px;margin:0 auto;padding:18px 16px 28px}' +
      '.report-header{padding:18px 20px;margin-bottom:18px;border:1px solid #d7dce3;border-radius:16px;background:#ffffff}' +
      '.report-title{margin:0 0 8px;font-size:28px;line-height:1.12;font-weight:800;color:#0f172a !important}' +
      '.report-subtitle{margin:0;font-size:13px;color:#475569 !important}' +
      '.report-root,.report-root *{color:#111827 !important;background-image:none !important;text-shadow:none !important;filter:none !important;box-shadow:none !important}' +
      '.report-root h1,.report-root h2,.report-root h3,.report-root h4,.report-root h5,.report-root h6,.report-root strong{color:#0f172a !important}' +
      '.report-root a{color:#0f172a !important;text-decoration:none !important}' +
      '.report-root svg,.report-root canvas,.report-root button{display:none !important}' +
      '.report-root p,.report-root li,.report-root td,.report-root th,.report-root div,.report-root span{overflow-wrap:anywhere;word-break:break-word}' +
      '.report-root ul,.report-root ol{margin:10px 0;padding-left:20px}' +
      '.report-root table{width:100% !important;table-layout:fixed !important;border-collapse:collapse !important;margin:12px 0 !important}' +
      '.report-root th,.report-root td{padding:8px 10px !important;border:1px solid #d7dce3 !important;vertical-align:top;text-align:left;background:#ffffff !important}' +
      '.report-root [style*="display:flex"],.report-root [style*="display: flex"],.report-root [style*="display:grid"],.report-root [style*="display: grid"]{display:block !important}' +
      '.report-root .exec-dashboard,.report-root .res-section,.report-root .signal-card,.report-root .start-card,.report-root .mi-card,.report-root .result-section,.report-root .diagnostic-card,.report-root .error-card,.report-root .result-metric,.report-root .axis-card,.report-root .experiment-card,.report-root .indicator-card,.report-root .facet-card,.report-root .trait-result,.report-root .trait-card,.report-root .signal-list,.report-root .link-card,.report-root .hero-choice-card,.report-root .best-fit-card,.report-root .best-fit-panel,.report-root .related-test-card,.report-root .coverage-grid article,.report-root .practice-steps article{display:block !important;margin:0 0 14px !important;padding:14px 16px !important;border:1px solid #d7dce3 !important;border-radius:14px !important;background:#ffffff !important;break-inside:avoid;page-break-inside:avoid}' +
      '.report-root .flow-career,.report-root .start-num,.report-root .meta-chip,.report-root .related-name-row span{display:inline-block !important;padding:2px 8px !important;border:1px solid #cbd5e1 !important;border-radius:999px !important;background:#f8fafc !important;color:#1e293b !important;margin:2px 6px 2px 0 !important}' +
      '.report-root .bar-container,.report-root .apt-bar,.report-root .rb-track,.report-root .trait-track,.report-root .axis-track,.report-root .domain-bar{height:10px !important;border:1px solid #cbd5e1 !important;border-radius:999px !important;background:#f8fafc !important;overflow:hidden !important}' +
      '.report-root .bar-fill,.report-root .apt-fill,.report-root .rb-fill,.report-root .trait-track i,.report-root .axis-track i,.report-root .domain-bar i{display:block !important;height:100% !important;background:#2563eb !important;border:none !important}' +
      '.report-root .axis-track i{width:14px !important;border-radius:999px !important;background:#1d4ed8 !important}' +
      '.report-root .rg-note{margin-top:8px !important;font-size:11px !important;color:#64748b !important}' +
      '@page{size:A4;margin:10mm}' +
      '@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}.report-shell{padding:0}.report-header{break-inside:avoid;page-break-inside:avoid}}' +
      '</style>' +
      '</head>' +
      '<body>' +
      '<div class="report-shell">' +
      '<header class="report-header">' +
      '<h1 class="report-title">' + title + '</h1>' +
      '<p class="report-subtitle">' + subtitle + '</p>' +
      '</header>' +
      '<main class="report-root">' + bodyHtml + '</main>' +
      '</div>' +
      '</body>' +
      '</html>'
    );
  }

  function triggerPrint(printWindow) {
    var runPrint = function () {
      var fontsReady = printWindow.document.fonts && printWindow.document.fonts.ready;
      Promise.resolve(fontsReady).catch(function () {}).finally(function () {
        printWindow.focus();
        printWindow.print();
      });
    };

    if (printWindow.document.readyState === 'complete') {
      setTimeout(runPrint, 150);
      return;
    }

    printWindow.addEventListener(
      'load',
      function () {
        setTimeout(runPrint, 150);
      },
      { once: true }
    );
  }

  window.openAssessmentPrintReport = function (options) {
    if (!options || !options.container) {
      return false;
    }

    var source = options.container;
    var title = options.title || 'Assessment Report';
    var subtitle =
      options.subtitle ||
      ('Future Career School report generated on ' +
        new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }));

    var clone = source.cloneNode(true);
    removeInteractiveNodes(clone);
    normalizeInlineStyles(clone);

    var printWindow = window.open('', '_blank', 'width=1100,height=900');
    if (!printWindow) {
      return false;
    }

    var printMarkup = buildDocument(title, subtitle, clone.innerHTML);
    var parsedPrintDocument = new DOMParser().parseFromString(printMarkup, 'text/html');
    printWindow.document.open();
    printWindow.document.replaceChild(
      printWindow.document.importNode(parsedPrintDocument.documentElement, true),
      printWindow.document.documentElement
    );
    printWindow.document.close();
    triggerPrint(printWindow);
    return true;
  };
})();
