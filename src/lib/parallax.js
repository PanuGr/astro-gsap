function initNativeParallax() {
  const elements = Array.from(document.querySelectorAll('.native-parallax')).map(el => ({
    el,
    initialCenter: 0,
    speed: parseFloat(el.dataset.speed) || 0
  }));

  if (!elements.length) return;

  let ticking = false;
  let lastWidth = window.innerWidth;

  function calculateCenters() {
    elements.forEach(item => {
      const rect = item.el.getBoundingClientRect();

      // Document-space center of the element.
      // Assumes the element is not already translated when initialized.
      item.initialCenter = window.scrollY + rect.top + rect.height / 2;
    });
  }

  function update() {
    const viewportCenter = window.scrollY + window.innerHeight / 2;

    elements.forEach(({ el, initialCenter, speed }) => {
      const offset = (viewportCenter - initialCenter) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  calculateCenters();
  update();

  window.addEventListener('scroll', requestUpdate, { passive: true });

  window.addEventListener('resize', () => {
    // Ignore mobile address-bar height changes.
    if (window.innerWidth === lastWidth) return;

    lastWidth = window.innerWidth;
    calculateCenters();
    update();
  });

  // Recalculate if element sizes change (images, fonts, etc.)
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => {
      calculateCenters();
      requestUpdate();
    });

    elements.forEach(({ el }) => observer.observe(el));
  }
}

initNativeParallax();