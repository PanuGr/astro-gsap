import { gsap, ScrollTrigger } from './gsap.js';

function revealOnScroll() {
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
}

function parallaxHero() {
  const hero = document.querySelector('[data-parallax]');
  if (!hero) return;
  gsap.to(hero, {
    backgroundPositionY: '20%',
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  });
}

revealOnScroll();
parallaxHero();
