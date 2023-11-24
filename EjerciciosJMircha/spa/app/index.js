import { App } from "./App.js";
import api from "./helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App); //CArgo el componente App a la carga del navegador
window.addEventListener("hashchange", () => {
  api.page = 1;
  App();
}); // Detecto cualquier cambio de hash en el componente App, que es el principal
