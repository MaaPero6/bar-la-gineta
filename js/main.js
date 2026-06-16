  // NAV scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile menu
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
  });
  function closeMenu() {
    menu.classList.remove('open');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }

  // Tabs
  document.getElementById('tab-nav').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('active');
      b.classList.add('text-sand/70');
      b.classList.remove('text-sand');
    });
    btn.classList.add('active');
    btn.classList.remove('text-sand/70');
    btn.classList.add('text-sand');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  faders.forEach(f => io.observe(f));
