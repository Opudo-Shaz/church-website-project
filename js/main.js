  document.documentElement.classList.add('js');

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const revealItems = document.querySelectorAll(
    'section:not(.hero) .section-head, section:not(.hero) .about, section:not(.hero) .about-photo, section:not(.hero) .time-card, section:not(.hero) .event-card, section:not(.hero) .team-card, section:not(.hero) .ministry, section:not(.hero) .testimonial-card, section.give .till-card, section.give .paypal-card'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => {
      item.classList.add('reveal');
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const copyTillBtn = document.getElementById('copyTillBtn');
  const tillNumber = document.getElementById('tillNumber');
  if (copyTillBtn && tillNumber) {
    copyTillBtn.addEventListener('click', async () => {
      const text = tillNumber.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const original = copyTillBtn.textContent;
        copyTillBtn.textContent = 'Copied!';
        setTimeout(() => { copyTillBtn.textContent = original; }, 1800);
      } catch (err) {
        console.error('Copy failed', err);
      }
    });
  }