// Site-wide motion: smooth scroll (Lenis) and scroll-driven reveals (GSAP).
//
// Markup hooks:
//   section[data-stack]      stacked tile: sticks while the next section slides over it
//   data-reveal              fade + rise in   (values: "left" | "right" | "scale")
//   data-reveal-delay="0.2"  delay in seconds
//   data-stagger             direct children reveal one after another
//   data-count="1200"        number counts up from 0 (optional data-suffix="+")
//   data-draw                SVG path draws itself in (path needs pathLength="1")
//   data-parallax            element drifts slowly while its parent scrolls past
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power3.out';
let lenis: Lenis | undefined;
let stackAbort: AbortController | undefined;
const raf = (time: number) => lenis?.raf(time * 1000);

function init() {
  // Start states are only applied in CSS when motion is allowed, so nothing to undo here
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (window.matchMedia('(pointer: fine)').matches) {
    lenis = new Lenis({ duration: 1.1, anchors: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
  }

  initStack();

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const from: gsap.TweenVars = { opacity: 0 };
    const kind = el.dataset.reveal;
    if (kind === 'left') from.x = -40;
    else if (kind === 'right') from.x = 40;
    else if (kind === 'scale') from.scale = 0.94;
    else from.y = 28;

    gsap.fromTo(el, from, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: EASE,
      delay: Number(el.dataset.revealDelay ?? 0),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    gsap.fromTo(
      group.children,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.1,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? '';
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = Math.round(state.value).toLocaleString('en-IN') + suffix;
      },
    });
  });

  document.querySelectorAll<SVGElement>('[data-draw]').forEach((el, i) => {
    gsap.to(el, {
      strokeDashoffset: 0,
      duration: 1.8,
      ease: 'power2.inOut',
      delay: (i % 6) * 0.15,
      scrollTrigger: { trigger: el.closest('svg'), start: 'top 80%', once: true },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

// data-stack sections are sticky (see global.css). A section taller than the screen must stick only once
// its bottom edge is in view, otherwise its lower part would never be seen.
function initStack() {
  const sections = [...document.querySelectorAll<HTMLElement>('main > section[data-stack]')];
  if (sections.length === 0) return;

  const setTops = () =>
    sections.forEach((section) => {
      section.style.top = `${Math.min(0, window.innerHeight - section.offsetHeight)}px`;
    });
  setTops();

  stackAbort = new AbortController();
  let width = window.innerWidth;
  window.addEventListener(
    'resize',
    () => {
      // ignore mobile address-bar show/hide, which only changes the height
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      setTops();
      ScrollTrigger.refresh();
    },
    { signal: stackAbort.signal },
  );

  // The covered section sinks back slightly as the next tile slides over it
  sections.forEach((section) => {
    let cover = section.nextElementSibling;
    while (cover && cover.tagName !== 'SECTION') cover = cover.nextElementSibling;
    if (!cover) return;
    gsap.to(section, {
      scale: 0.93,
      '--stack-dim': 0.5,
      ease: 'none',
      scrollTrigger: { trigger: cover, start: 'top bottom', end: 'top top', scrub: true },
    });
  });
}

function destroy() {
  stackAbort?.abort();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.ticker.remove(raf);
  lenis?.destroy();
  lenis = undefined;
}

// astro:page-load fires on first load and after every view-transition navigation
document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', destroy);
