let menuLinks = ['/favourite.html'];
let pathname = window.location.pathname;

menuLinks.forEach(element => {
    if (element = pathname) {
        let blockMenu = document.querySelector(`.header__menu [href = ".${element}"]`).parentNode;
        blockMenu.classList.add('header__active-link');
    }
});