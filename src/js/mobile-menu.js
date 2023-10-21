const refs = {
mobileMenu: document.querySelector('[mobile-menu]'),
mobileMenuOpen: document.querySelector('[mobile-menu-open]'),
mobileMenuClose: document.querySelector('[mob-menu-close]'),
};
 
refs.mobileMenuOpen.addEventListener("click", toggleModal);
refs.mobileMenuClose.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.mobileMenu.classList.toggle("is-hidden");
    }
