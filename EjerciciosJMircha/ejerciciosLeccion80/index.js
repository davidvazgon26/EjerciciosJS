import hamburgerMenu from "./dom/menuHamburguesa.js";
import { digitalClock, alarmaSonora } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarmaSonora("./assets/alarma.mp3","#activar-alarma", "#desactivar-alarma")
});