const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    navbar.style.top = menuButton.classList.contains('active') ? '0' : '16px';
    navbar.style.marginLeft = menuButton.classList.contains('active') ? '0' : '1rem';
    navbar.style.marginRight = menuButton.classList.contains('active') ? '0' : '1rem';
    navbar.style.paddingTop = menuButton.classList.contains('active') ? '2rem' : '0.8rem';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuButton.contains(e.target)) {
      menuButton.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Close menu when pressing escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuButton.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
      navbar.style.top = menuButton.classList.contains('active') ? '0' : '16px';
      navbar.style.marginLeft = menuButton.classList.contains('active') ? '0' : '1rem';
      navbar.style.marginRight = menuButton.classList.contains('active') ? '0' : '1rem';
      navbar.style.paddingTop = menuButton.classList.contains('active') ? '2rem' : '0.8rem';
    }
  });
}