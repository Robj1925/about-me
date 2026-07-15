/* =========================================================================
   home-motion.js — restrained homepage motion (light design-engineer site).
   Motion only ENHANCES: content is fully visible by default in CSS. We only
   hide-then-reveal when motion is allowed, and reveals use IntersectionObserver
   (observes real element visibility) so they can never be stranded invisible by
   a mis-timed ScrollTrigger position calc against async images / injected cards.
   No window scroll listeners. Reduced motion: early-return, everything visible.
   ========================================================================= */
(function () {
  'use strict';

  if (typeof gsap === 'undefined') return;
  var hasST = typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return; // CSS renders every element visible and in place.

  /* Reveal a section's items on first intersection, with a gentle stagger.
     IntersectionObserver fires immediately for anything already in view, so
     nothing stays hidden if it is on-screen at load. */
  function reveal(triggerSel, itemsSel) {
    var trigger = document.querySelector(triggerSel);
    var items = gsap.utils.toArray(itemsSel);
    if (!trigger || !items.length) return;
    gsap.set(items, { opacity: 0, y: 24 });
    var io = new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) {
        gsap.to(items, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          stagger: 0.08, overwrite: 'auto'
        });
        obs.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });
    io.observe(trigger);
  }

  /* --- HERO: one orchestrated load-in (above the fold, plays once). --- */
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('[data-hero="eyebrow"]',  { y: 16, opacity: 0, duration: 0.5 })
    .from('[data-hero="title"]',    { y: 30, opacity: 0, duration: 0.8 }, '-=0.25')
    .from('[data-hero="lead"]',     { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
    .from('[data-hero="actions"]',  { y: 16, opacity: 0, duration: 0.6 }, '-=0.45')
    .from('[data-hero="portrait"]', { y: 28, opacity: 0, scale: 0.985, duration: 0.9, ease: 'expo.out' }, '-=0.6');

  /* --- SECTION REVEALS (static sections). --- */
  reveal('#social-proof', '#social-proof .proof-item');
  reveal('#about',        '#about .about-intro, #about .about-body');
  reveal('#products',     '#products .home-head, #products .product-card');
  reveal('#testimonials', '#testimonials .home-head, #testimonials .quote');
  reveal('#services',     '#services .home-head, #services .service-card');
  reveal('#videos',       '#videos .home-head, #videos .video-card');
  reveal('#projects',     '#projects .home-head, #projects .proj-row');
  reveal('#contact',      '#contact .contact-band');

  /* --- NAV compaction on scroll (ScrollTrigger, not a scroll listener). --- */
  var nav = document.querySelector('body.home nav');
  if (nav && hasST) {
    ScrollTrigger.create({
      start: 'top top', end: 'max',
      onUpdate: function (self) { nav.classList.toggle('scrolled', self.scroll() > 24); }
    });
  }

  /* --- Blog cards inject via main.js after this runs; reveal them once present. --- */
  window.addEventListener('load', function () {
    reveal('#blog', '#blog .home-head, #blog .blog-card');
  });

  /* Failsafe: if anything reveal-tracked is still hidden a few seconds in
     (e.g. an observer edge case), force it visible. Motion is a bonus, never a
     gate on content. */
  setTimeout(function () {
    gsap.utils.toArray('#social-proof .proof-item, #about .about-intro, #about .about-body, #products .product-card, #testimonials .quote, #services .service-card, #videos .video-card, #projects .proj-row, #contact .contact-band, #blog .blog-card, .home-head')
      .forEach(function (el) {
        if (parseFloat(getComputedStyle(el).opacity) < 0.05) gsap.set(el, { opacity: 1, y: 0 });
      });
  }, 4000);
})();
