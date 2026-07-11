import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export function initSurfaces() {
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

export function revealOnScroll() {
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

revealOnScroll();
initSurfaces();