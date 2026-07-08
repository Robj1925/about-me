/* =========================================================================
   home-motion.js - GSAP + ScrollTrigger entrance choreography (homepage only)
   MOTION_INTENSITY 7. Every animation is justified (hierarchy / feedback /
   sequence). No window scroll listeners. All motion is gated behind
   prefers-reduced-motion: content is fully visible by default in CSS, and
   GSAP only ever hides-then-reveals when motion is allowed.

   Reveals use set() + onEnter -> to({opacity:1}) rather than from(). A
   gsap.from() reveal combined with ScrollTrigger.refresh() (fired on load and
   after the async blog cards inject) can re-record the "natural" value while
   the element is still hidden and animate from 0 to 0, stranding content
   invisible. Animating explicitly TO opacity 1 can never strand.
   ========================================================================= */
(function () {
  'use strict';

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Reduced motion: run nothing. CSS keeps every element visible and in place.
  if (reduce) return;

  var nav = document.querySelector('body.home nav');

  /* Refresh-proof reveal: explicit hidden -> explicit visible, once. */
  function reveal(triggerEl, itemsSel) {
    var items = gsap.utils.toArray(itemsSel);
    if (!items.length) return;
    gsap.set(items, { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: triggerEl,
      start: 'top 80%',
      once: true,
      onEnter: function () {
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          stagger: 0.08, overwrite: 'auto'
        });
      }
    });
  }

  /* --- HERO: staggered load-in (sequence communicates reading order).
         Above the fold, no ScrollTrigger, plays once on load -> safe. --- */
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('[data-hero="eyebrow"]',  { y: 18, opacity: 0, duration: 0.5 })
    .from('[data-hero="title"]',    { y: 34, opacity: 0, duration: 0.8 }, '-=0.25')
    .from('[data-hero="sub"]',      { y: 22, opacity: 0, duration: 0.7 }, '-=0.5')
    .from('[data-hero="actions"]',  { y: 18, opacity: 0, duration: 0.6 }, '-=0.45')
    .from('[data-hero="terminal"]', { y: 32, opacity: 0, scale: 0.98, duration: 0.9, ease: 'expo.out' }, '-=0.55');

  /* --- SECTION REVEALS (static sections set up immediately). --- */
  reveal('#about',        '#about .about-photo-wrap, #about .about-panel');
  reveal('#testimonials', '#testimonials .home-head, #testimonials .testimonial-card');
  reveal('#services',     '#services .home-head, #services .service-card');
  reveal('#videos',       '#videos .home-head, #videos .video-card');
  reveal('#projects',     '#projects .home-head, #projects .proj-row');
  reveal('#contact',      '#contact .contact-band');

  /* --- NAV compaction on scroll (replaces the removed scroll listener). --- */
  if (nav) {
    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: function (self) {
        nav.classList.toggle('scrolled', self.scroll() > 24);
      }
    });
  }

  /* --- Magnetic pull on the primary hero CTA (feedback micro-physics).
         Uses gsap.quickTo - no per-frame state, runs off the render cycle. --- */
  var magnet = document.getElementById('hero-yt-cta');
  if (magnet && window.matchMedia('(pointer: fine)').matches) {
    var xTo = gsap.quickTo(magnet, 'x', { duration: 0.4, ease: 'power3' });
    var yTo = gsap.quickTo(magnet, 'y', { duration: 0.4, ease: 'power3' });
    magnet.addEventListener('pointermove', function (e) {
      var r = magnet.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
    });
    magnet.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
  }

  /* --- Blog cards are injected by main.js after this script runs. Set up
         their reveal once they exist (load), then refresh trigger positions
         now that the page height is final. --- */
  window.addEventListener('load', function () {
    reveal('#blog', '#blog .home-head, #blog .blog-card');
    ScrollTrigger.refresh();
  });
})();
