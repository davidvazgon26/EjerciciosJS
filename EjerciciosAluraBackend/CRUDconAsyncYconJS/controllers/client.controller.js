// Crear elementos dinamicos del DOM
import {clientServices} from '../service/client-service.js'

// console.log(clientServices)

const crearNuevaLinea = (nombre, email, id) => {
    // Con los backticks puedo meter todo mi HTML en una variable o constante
    console.log(id)
    const linea = document.createElement('tr');
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}" 
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button" id="${id}"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
    `;
    linea.innerHTML = contenido;

    // eventlistener para boton eliminar
  const btn = linea.querySelector('button');
    btn.addEventListener("click", ()=>{
        const id = btn.id;
        clientServices.eliminarCliente(id).then(res => console.log(res)).catch(err => console.log(err));
    }); 


    return linea;
}

const table = document.querySelector("[data-table]");


// invoco la funcion (asyncrona)
clientServices.listaClientes()
.then(data => {
    data.forEach(({nombre, email, id}) => {
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        table.appendChild(nuevaLinea);
    });
})
.catch(error => alert('Ocurrio un error'));

const eliminarCliente = (id) =>{
  console.log("elimina a: " + id)
}