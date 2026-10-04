/* Puts the full-assessment call to action into a narrower test page.
 * - Watches the page's result container and inserts the "top" and "bottom"
 *   templates whenever a result is rendered (also after a retake).
 * - Shows a dismissible sticky bar while the visitor reads the page, hidden
 *   while the quiz itself is on screen and once results are showing.
 * - Reports clicks to Google Analytics when it is available. */
(function () {
  var root = document.getElementById('mac-funnel');
  if (!root) return;

  var containerId = root.getAttribute('data-container');
  var quizId = root.getAttribute('data-quiz-section') || 'assessment';
  var container = document.getElementById(containerId);

  function slot(name) {
    var tpl = root.querySelector('template[data-mac-slot="' + name + '"]');
    return tpl ? tpl.content.cloneNode(true) : null;
  }

  function hasResult() {
    return !!container && !container.hidden && container.style.display !== 'none' && container.children.length > 0;
  }

  function inject() {
    if (!container || !hasResult() || container.querySelector('[data-mac-injected]')) return;
    var top = slot('top');
    var bottom = slot('bottom');
    if (top) {
      var first = container.firstElementChild;
      var anchor = container.querySelector('.res-top, .result-head, .result-hero');
      var topEl = document.createElement('div');
      topEl.setAttribute('data-mac-injected', 'top');
      topEl.appendChild(top);
      if (anchor && anchor.parentNode === container) anchor.parentNode.insertBefore(topEl, anchor.nextSibling);
      else container.insertBefore(topEl, first);
    }
    if (bottom) {
      var bottomEl = document.createElement('div');
      bottomEl.setAttribute('data-mac-injected', 'bottom');
      bottomEl.appendChild(bottom);
      var actions = container.querySelector('.res-actions, .result-actions');
      if (actions && actions.parentNode === container) container.insertBefore(bottomEl, actions);
      else container.appendChild(bottomEl);
    }
    updateSticky();
  }

  if (container && 'MutationObserver' in window) {
    new MutationObserver(inject).observe(container, { childList: true, attributes: true, attributeFilter: ['hidden', 'style'] });
    inject();
  }

  /* Sticky bar */
  var stickyEl = null;
  var dismissed = false;
  try { dismissed = window.sessionStorage.getItem('fcs-mac-dismissed') === '1'; } catch (e) {}

  function buildSticky() {
    var frag = slot('sticky');
    if (!frag) return;
    stickyEl = frag.firstElementChild;
    document.body.appendChild(stickyEl);
    var close = stickyEl.querySelector('.mac-sticky-close');
    if (close) close.addEventListener('click', function () {
      dismissed = true;
      try { window.sessionStorage.setItem('fcs-mac-dismissed', '1'); } catch (e) {}
      updateSticky();
    });
  }

  var quizInView = false;
  function updateSticky() {
    if (!stickyEl) return;
    var scrolled = (window.scrollY || window.pageYOffset) > 520;
    var show = scrolled && !quizInView && !dismissed && !hasResult();
    stickyEl.classList.toggle('is-visible', show);
  }

  if (!dismissed) {
    buildSticky();
    var quiz = document.getElementById(quizId);
    if (quiz && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        quizInView = entries[0].isIntersecting;
        updateSticky();
      }, { threshold: 0.15 }).observe(quiz);
    }
    window.addEventListener('scroll', updateSticky, { passive: true });
    updateSticky();
  }

  /* Click reporting */
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('[data-mac-cta]') : null;
    if (!link || typeof window.gtag !== 'function') return;
    window.gtag('event', 'main_assessment_click', {
      placement: link.getAttribute('data-mac-cta'),
      target_assessment: link.getAttribute('data-mac-target'),
      source_path: window.location.pathname
    });
  });
})();
