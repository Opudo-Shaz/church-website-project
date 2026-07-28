document.getElementById('year').textContent = new Date().getFullYear();
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));

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