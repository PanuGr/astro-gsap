import { gsap } from 'gsap';

function initCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  const mm = gsap.matchMedia();

  // Desktop-only (pointer: fine) and no reduced motion
  mm.add('(pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    // Show the cursor, hide the default cursor on body
    gsap.set(cursor, { autoAlpha: 1 });
    document.body.style.cursor = 'none';

    // Use quickTo for high-performance following (same pattern as tilt3d.js)
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

    const moveCursor = (e) => {
      // Offset by half width/height (10px) to center on cursor
      xTo(e.clientX - 10);
      yTo(e.clientY - 10);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    // Interactive elements hover state
    const interactives = document.querySelectorAll('a, button');
    
    const onEnter = () => gsap.to(cursor, { scale: 1.5, duration: 0.2, ease: "power2.out" });
    const onLeave = () => gsap.to(cursor, { scale: 1, duration: 0.2, ease: "power2.out" });

    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
      
      // Some interactive elements might still show the default pointer
      el.style.cursor = 'none';
    });

    // Cleanup when media query doesn't match
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.style.cursor = '';
      });
      document.body.style.cursor = '';
      gsap.set(cursor, { autoAlpha: 0 });
    };
  });
}

initCursor();
