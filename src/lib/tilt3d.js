import { gsap } from 'gsap';

function initCardTilt() {
  const cards = document.querySelectorAll('.stained-glass, .gold-glass');
  if (!cards.length) return;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    cards.forEach(card => {
      gsap.set(card, { transformPerspective: 800 });

      const setRotX = gsap.quickTo(card, 'rotationX', { duration: 0.3, ease: 'power2.out' });
      const setRotY = gsap.quickTo(card, 'rotationY', { duration: 0.3, ease: 'power2.out' });

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const hw = rect.width / 2;
        const hh = rect.height / 2;
        setRotX(((y - hh) / hh) * -6);
        setRotY(((x - hw) / hw) * 6);
      });

      card.addEventListener('mouseleave', () => {
        setRotX(0);
        setRotY(0);
      });
    });
  });
}

initCardTilt();