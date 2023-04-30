import scrollTopButton from "./dom/btnScroll.js";
import countDown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menuHamburguesa.js";
import { digitalClock, alarmaSonora } from "./dom/reloj.js";
import { shortCuts, moveBall } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarmaSonora("./assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
    countDown("countdown", "May 23, 2023 03:23:19", "Feliz Cumpleanios Docente Digital");
    scrollTopButton(".scroll-top-btn");
});

//keydown, keyup, keypress
d.addEventListener("keydown", (e)=> {
    shortCuts(e);
    moveBall(e, ".ball", ".stage");
});

