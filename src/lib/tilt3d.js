import { gsap } from 'gsap';

function initCardTilt() {
  const cards = document.querySelectorAll('.stained-glass, .gold-glass');
  if (!cards.length) return;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    cards.forEach(card => {
      gsap.set(card, { transformPerspective: 800 });

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const hw = rect.width / 2;
        const hh = rect.height / 2;
        gsap.set(card, {
          rotationX: ((y - hh) / hh) * -6,
          rotationY: ((x - hw) / hw) * 6,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    });
  });
}

initCardTilt();