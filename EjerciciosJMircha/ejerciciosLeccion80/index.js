import hamburgerMenu from "./dom/menuHamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
});