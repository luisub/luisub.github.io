'use strict';

// Enhance the static document; the full site remains usable without JavaScript.
const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (nav && menuToggle && navLinks) {
  nav.dataset.enhanced = 'true';
  menuToggle.hidden = false;

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
  });

  navLinks.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    closeMenu();
    // Keep keyboard focus on the destination when the mobile menu disappears.
    if (wasOpen && link.hash) {
      const destination = document.querySelector(link.hash);
      if (destination) {
        destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      }
    }
  });

  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  const mobileQuery = window.matchMedia('(max-width: 640px)');
  mobileQuery.addEventListener('change', closeMenu);
}

const publicationTools = document.querySelector('.publication-tools');
const filters = [...document.querySelectorAll('[data-filter]')];
const publications = [...document.querySelectorAll('.publication')];
const publicationCount = document.querySelector('.publication-count');

if (publicationTools && publicationCount && publications.length) {
  publicationTools.hidden = false;
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let visibleCount = 0;
      publications.forEach((publication) => {
        const visible = filter === 'all' ||
          (filter === 'first' ? publication.dataset.firstAuthor === 'true' : publication.dataset.kind === filter);
        publication.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      publicationCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'selected work' : 'selected works'}`;
    });
  });
}

// Reflect the section being read without changing browser history.
if ('IntersectionObserver' in window && navLinks) {
  const links = [...navLinks.querySelectorAll('a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const visibleSections = new Set();
  const updateCurrent = () => {
    const current = [...sections].reverse().find((section) => visibleSections.has(section.id));
    links.forEach((link) => {
      if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target.id);
      else visibleSections.delete(entry.target.id);
    });
    updateCurrent();
  }, { rootMargin: '-90px 0px -45% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
