import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value
    // console.log(nombre," - ", email)
    clientServices.crearCliente(nombre, email).then(() =>{
        // console.log(response)
        window.location.href = "../screens/registro_completado.html"
    }).catch(err => console.log(err))
});