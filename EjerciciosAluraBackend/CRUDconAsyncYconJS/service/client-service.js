// Fetch API

const listaClientes = () => fetch('http://localhost:3000/perfil').then(response=> response.json());

const crearCliente = (nombre, email) =>{
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email, id:uuid.v4()})
    })

}

const eliminarCliente = (id) => {
    // console.log("Eliminar a --> ", id);
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE",
    });
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then( response => response.json())
}

const actualizarCliente = (nombre, email, id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})
    })
    .then(response => response)
    .catch(err => console.error(err))

}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};

