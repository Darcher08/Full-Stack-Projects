document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
    darkMode();
});
function darkMode() {
    const botonDark = document.querySelector('.dark-mode-boton');
    botonDark.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

    })
}

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', clickMenuMobile)
}

function clickMenuMobile() {
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');
}