// source adapted from https://bulma.io/documentation/components/navbar/
document.addEventListener('DOMContentLoaded', () => {
    // Get "navbar-burger" element
    const $navbarBurgers = document.querySelectorAll('.navbar-burger');
    const navbarBurgerEl = $navbarBurgers[0];
    // Get "navbar-menu" element from the "data-target" attribute
    const target = navbarBurgerEl.dataset.target;
    const navbarMenuEl = document.getElementById(target);

    navbarBurgerEl.addEventListener('click', () => {
        toggleNavBar(navbarBurgerEl, navbarMenuEl);
    });

    // Get all "navbar-item" elements and toggle navBar on click
    const $navbarLinks = document.querySelectorAll('.navbar-item');
    $navbarLinks.forEach((el) => {
        el.addEventListener('click', () => {
            toggleNavBar(navbarBurgerEl, navbarMenuEl);
        });
    });
});

const toggleNavBar = (navbarBurgerEl, navbarMenuEl) => {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    navbarBurgerEl.classList.toggle('is-active');
    navbarMenuEl.classList.toggle('is-active');
};
