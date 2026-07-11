import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

gsap.registerPlugin(ScrollTrigger, InertiaPlugin, Physics2DPlugin, Draggable);

function initCandleGame() {
  const candle = document.getElementById('cs-candle');
  const target = document.getElementById('cs-target');
  const flame = document.getElementById('cs-flame');
  const glow = document.getElementById('cs-glow');
  const prompt = document.getElementById('candle-prompt');
  const msg = document.getElementById('candle-lit-msg');
  if (!candle || !target) return;

  let lit = false;
  let draggable = null;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    ScrollTrigger.create({
      trigger: '#donate',
      start: 'top 80%',
      once: true,
      onEnter: enableDragging,
    });
  });

  function enableDragging() {
    if (lit || draggable) return;
    draggable = Draggable.create(candle, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: { minX: -120, maxX: 80, minY: -150, maxY: 20 },
      inertia: true,
      onDragEnd: checkDrop,
    })[0];
  }

  function checkDrop() {
    if (!draggable || lit) return;

    const cr = candle.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    const cx = cr.left + cr.width / 2;
    const cy = cr.top + cr.height / 2;
    const margin = 50;

    if (cx >= tr.left - margin && cx <= tr.right + margin &&
        cy >= tr.top - margin && cy <= tr.bottom + margin) {
      snapAndIgnite();
    }
  }

  function snapAndIgnite() {
    lit = true;
    draggable.disable();

    const cr = candle.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    const dx = (tr.left + tr.width / 2) - (cr.left + cr.width / 2);
    const dy = (tr.top + tr.height / 2) - (cr.top + cr.height / 2);
    const nx = draggable.x + dx;
    const ny = draggable.y + dy;

    const tl = gsap.timeline();
    tl.to(candle, { x: nx, y: ny, duration: 0.3, ease: 'back.out(2)' })
      .to(flame, { opacity: 1, scale: 1, duration: 0.15 }, '+=0.05')
      .to(glow, { opacity: 1, scale: 1, duration: 0.25 }, '-=0.1')
      .call(startFlicker);

    if (prompt) prompt.classList.add('d-none');
    if (msg) msg.classList.remove('d-none');
  }

  function startFlicker() {
    gsap.to(flame, {
      scaleY: 1.12,
      scaleX: 0.88,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to(flame, {
      physics2D: { velocity: 0.8, angle: 90, acceleration: 0.4 },
      duration: 2,
      repeat: -1,
    });
    gsap.to(glow, {
      scale: 1.25,
      opacity: 0.55,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }
}

initCandleGame();
