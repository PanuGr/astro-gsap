import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, ScrambleTextPlugin);

function initSurfaces() {
  const mm = gsap.matchMedia();

  // Enforce prefers-reduced-motion check[cite: 2]
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    
    // 2. Section Halos around each Header
    const halos = document.querySelectorAll('[data-reveal-halo]');
    halos.forEach(halo => {
      gsap.to(halo, {
        "--halo-opacity": 1,
        duration: 1.5,
        ease: "power2.out", // Will be swapped for CustomEase in a later phase[cite: 2]
        scrollTrigger: {
          trigger: halo,
          start: "top 80%",
        }
      });
    });
  });
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach(el => {
    gsap.fromTo(el,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      }
    );
  });

  const dividers = document.querySelectorAll('.divider');
  dividers.forEach(div => {
    gsap.fromTo(div,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: div,
          start: "top 85%",
        }
      }
    );
  });
}

function initScrambleText() {
  const els = document.querySelectorAll('[data-scramble]');
  if (!els.length) return;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    els.forEach(el => {
      gsap.to(el, {
        scrambleText: { text: el.getAttribute('data-scramble'), chars: '0123456789', revealDelay: 0.5 },
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      });
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -300',
      onEnter: () => gsap.to(btn, { autoAlpha: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }),
      onLeaveBack: () => gsap.to(btn, { autoAlpha: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' }),
    });
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    const toggle = () => btn.classList.toggle('visible', window.scrollY > 300);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    return () => window.removeEventListener('scroll', toggle);
  });

  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

revealOnScroll();
initSurfaces();
initScrambleText();
initBackToTop();