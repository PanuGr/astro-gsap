import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export function initSurfaces() {
  const mm = gsap.matchMedia();

  // Enforce prefers-reduced-motion check[cite: 2]
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    
    // 1. Hero light-shaft overlay via CSSRulePlugin[cite: 2]
    // ponytail: CSSRulePlugin can occasionally struggle with bundled/minified selectors in Astro prod builds. 
    // Upgrade path: If it breaks in deployment, animate a CSS custom property natively on the .hero element instead.
    const heroRule = CSSRulePlugin.getRule(".hero::before");
    if (heroRule) {
      gsap.to(heroRule, {
        cssRule: { backgroundPosition: "100% 50%" },
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

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
}

revealOnScroll();
initSurfaces();