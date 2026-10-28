// Entrances: each [data-reveal] rises once when its section enters. Children of a [data-stagger]
// parent get increasing delays in reading order.
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
  group.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => el.style.setProperty('--i', String(i)));
});

const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-in'));
}

// The shutter sits in the first screen and starts clipped to nothing, which an observer would never
// see as visible: open it once the page has painted.
requestAnimationFrame(() =>
  requestAnimationFrame(() => {
    document.querySelectorAll<HTMLElement>('[data-shutter]').forEach((el) => el.classList.add('is-in'));
  }),
);
