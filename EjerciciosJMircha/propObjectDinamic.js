// generar propiedades dinamicas en los objetos, ejemplo crear 1000 objetos de empleado con id diferente para cada uno de manera dinamica

// Manera anterior
const objUsuario = {}

console.log(objUsuario)

const arrayUsuarios = ['David','Pedro','Juan', 'Ceci', 'Viky'] 

arrayUsuarios.forEach((usuario, index)=> {objUsuario[`id_${index}`]= usuario})

console.log(objUsuario)

// Manera actual
let aleatorio = Math.round(Math.random()*100 + 5)
const objUsuario2 = {
    propiedad: "Valor",
    [`id_${aleatorio}`]: "Valor aleatorio",
}

console.log(objUsuario2)