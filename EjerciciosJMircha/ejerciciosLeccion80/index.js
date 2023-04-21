import hamburgerMenu from "./dom/menuHamburguesa.js";
import { digitalClock, alarmaSonora } from "./dom/reloj.js";
import { shortCuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarmaSonora("./assets/alarma.mp3","#activar-alarma", "#desactivar-alarma")
});

//keydown, keyup, keypress
d.addEventListener("keydown", (e)=> {
    shortCuts(e);
});

