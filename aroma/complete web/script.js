// Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobile-navigation');

  hamburgerBtn.addEventListener('click', () => {
    const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
    hamburgerBtn.setAttribute('aria-expanded', !expanded);
    hamburgerBtn.classList.toggle('open');
    mobileNav.classList.toggle('show');

    // Update tabIndex of mobile nav links for accessibility
    const links = mobileNav.querySelectorAll('a');
    links.forEach(link => {
      link.tabIndex = !expanded ? 0 : -1;
    });
  });

  // Close mobile nav on link click for better UX on small screens
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.setAttribute('aria-expanded', false);
      hamburgerBtn.classList.remove('open');
      mobileNav.classList.remove('show');
      link.tabIndex = -1;
    });
  });

  // Contact form submission (basic front-end validation and confirmation)
  const contactForm = document.querySelector('form.contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    alert('Thank you for contacting OceanCraft! We will get back to you soon.');
    contactForm.reset();
  });
