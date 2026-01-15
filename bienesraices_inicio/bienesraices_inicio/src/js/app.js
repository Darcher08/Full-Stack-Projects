document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  darkMode();
});

function darkMode() {
  const botonDark = document.querySelector(".dark-mode-boton");

  // Restaurar preferencia guardada (si existe)
  const darkModeLS = localStorage.getItem("dark-mode");
  if (darkModeLS === "on") {
    document.body.classList.add("dark-mode");
  } else if (darkModeLS === "off") {
    document.body.classList.remove("dark-mode");
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // Si no hay preferencia guardada, respetar la preferencia del sistema
    document.body.classList.add("dark-mode");
  }

  // Añadir listener sólo si el botón existe en la página
  if (botonDark) {
    botonDark.addEventListener("click", function () {
      const enabled = document.body.classList.toggle("dark-mode");
      // Guardar preferencia para mantenerla al cambiar de página
      localStorage.setItem("dark-mode", enabled ? "on" : "off");
    });
  }
}
function eventListeners() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", clickMenuMobile);
}

function clickMenuMobile() {
  const navegacion = document.querySelector(".navegacion");
  navegacion.classList.toggle("mostrar");
}
