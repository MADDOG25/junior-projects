window.sr = ScrollReveal();

/* SCROLL MENU AND NAVBAR DROPDOWN */
sr.reveal('.scroll_menu', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.scroll_menu_nav', {
    scale: 0,
    duration: 3000
});
/* SCROLL SECTION NOVEDADES */
sr.reveal('.scroll_novedades', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});
/* SCROLL SECTION CONTACT */
sr.reveal('.scroll_contact', {
    duration: 3000,
    origin: 'left',
    distance: '-200px'
});