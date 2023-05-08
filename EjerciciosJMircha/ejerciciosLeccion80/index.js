import scrollTopButton from "./dom/btnScroll.js";
import countDown from "./dom/cuenta_regresiva.js";
import darkTheme from "./dom/darkTheme.js";
import hamburgerMenu from "./dom/menuHamburguesa.js";
import responsiveMedia from "./dom/objeto_responsivo.js";
import { digitalClock, alarmaSonora } from "./dom/reloj.js";
import { shortCuts, moveBall } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarmaSonora("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown(
    "countdown",
    "May 23, 2023 03:23:19",
    "Feliz Cumpleanios Docente Digital"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    "Contenido Movil",
    "Contenido Escritorio"
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    "Contenido Movil",
    "Contenido Escritorio"
  );
});

darkTheme(".dark-theme-btn", "dark-mode"); // Se saca de la carga inicial con DOMContentLoaded para poder volverlo a invocar dentro de darkTheme.

//keydown, keyup, keypress
d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});
