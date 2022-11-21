import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async () =>{
    const url =  new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null) window.location = "../screens/error.html"

    const nombre = document.querySelector("[data-nombre]")
    const email = document.querySelector("[data-email]")
   try {
    const perfil = await clientServices.detalleCliente(id);
    nombre.value = perfil.nombre;
    email.value = perfil.email;
   } catch (error) {
    console.error(error);
   }
    // clientServices.detalleCliente(id).then(element => {
    //     nombre.value = element.nombre;
    //     email.value = element.email;
    // })
}

obtenerInformacion();

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url =  new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value
    clientServices.actualizarCliente(nombre, email, id).then(()=>{
        window.location = "./edicion_concluida.html";
    })
})