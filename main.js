document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(f => f.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  const mobToggle = document.getElementById('mobileToggle');
  const mobPanel = document.getElementById('mobileNavPanel');
  const backdrop = document.getElementById('mobileBackdrop');
  const closeBtn = document.getElementById('mobileCloseBtn');

  function openMenu() {
    if (mobPanel) mobPanel.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (mobPanel) mobPanel.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  if (mobToggle) mobToggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  const menuLinks = document.querySelectorAll('.mobile-menu-list a');
  menuLinks.forEach(l => l.addEventListener('click', closeMenu));
});
