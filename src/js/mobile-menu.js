const mobMenuRefs = {
  mobileMenu: document.querySelector('[mobile-menu]'),
  mobileMenuOpen: document.querySelector('[mobile-menu-open]'),
  mobileMenuClose: document.querySelector('[mob-menu-close]'),
};

mobMenuRefs.mobileMenuOpen.addEventListener('click', toggleMenu);
mobMenuRefs.mobileMenuClose.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobMenuRefs.mobileMenu.classList.toggle('is-hidden');
  mobMenuRefs.mobileMenu.classList.toggle('is-visible');

  if (mobMenuRefs.mobileMenu.classList.contains('is-hidden')) {
    mobMenuRefs.mobileMenu.classList.add('is-closing');
    setTimeout(() => {
      mobMenuRefs.mobileMenu.classList.remove('is-closing');
    }, 500);
  }
}
