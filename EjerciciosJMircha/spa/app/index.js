import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App); //CArgo el componente App a la carga del navegador
window.addEventListener("hashchange", App); // Detecto cualquier cambio de hash en el componente App, que es el principal
