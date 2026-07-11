function initNativeParallax() {
  const elements = Array.from(document.querySelectorAll('.native-parallax')).map(el => {
    return { 
      el, 
      initialCenter: 0, 
      speed: parseFloat(el.getAttribute('data-speed')) || 0 
    };
  });

  if (!elements.length) return;

  function calculateCenters() {
    elements.forEach(item => item.el.style.transform = 'none');
    elements.forEach(item => {
      let top = 0;
      let current = item.el;
      while (current) {
        top += current.offsetTop;
        current = current.offsetParent;
      }
      item.initialCenter = top + (item.el.offsetHeight / 2);
    });
  }

  calculateCenters();

  let ticking = false;

  function update() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const viewportCenter = scrollY + (windowHeight / 2);

    elements.forEach(({ el, initialCenter, speed }) => {
      const distance = viewportCenter - initialCenter;
      const yPos = distance * speed;
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    calculateCenters();
    update();
  });

  update();
}

initNativeParallax();
