import scrollTopButton from "./dom/btnScroll.js";
import countDown from "./dom/cuenta_regresiva.js";
import darkTheme from "./dom/darkTheme.js";
import hamburgerMenu from "./dom/menuHamburguesa.js";
import responsiveMedia from "./dom/objeto_responsivo.js";
import responsiveTester from "./dom/prueba_responsive.js";
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
    `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/Br9ywpHPvx1WYFeWA" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115195.42212100168!2d-103.62102080273438!3d25.5431418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd998f4c200bb%3A0xf43ee754091915a5!2sMonumento%20del%20Torre%C3%B3n!5e0!3m2!1ses!2smx!4v1683526512823!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
});

darkTheme(".dark-theme-btn", "dark-mode"); // Se saca de la carga inicial con DOMContentLoaded para poder volverlo a invocar dentro de darkTheme.

//keydown, keyup, keypress
d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});
