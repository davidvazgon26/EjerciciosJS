/*
En este desafío deberás validar un formulario de registro de usuario.

Tu tarea es implementar la lógica de la función validateForm la cual recibirá como parámetro un objeto con los datos del formulario al igual que una lista de usurios registrados.

La función debe verificar que todos los campos requeridos del formulario (name, lastname, email y password) estén completos, si falta algún campo, debe lanzar un error especificando los campos faltantes.

Para lanzar dicho error debes usar la siguiente sintaxis

throw new Error("Faltan los siguientes campos: name, email, etc...");

Además, la función debe verificar si el email ingresado ya existe en la lista de usuarios registrados. Si el email ya está en uso, debe retornar un error especificando el email duplicado.

Si todo está correcto, se debe agregar el usuario a la lista de usuarios registrados con todos los datos excepto la contraseña y retornar un mensaje indicando que el registro fue exitoso junto con el nombre y apellido del usuario.
*/



function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    let datos = ["name", "lastname", "email", "password"];

    const faltantes = datos.filter((el) => !(el in formData));

    if (!!faltantes.length) {
    //   throw new Error(`Faltan los siguientes campos: ${faltantes.join(", ")}`);
      return console.log(`Faltan los siguientes campos: ${faltantes.join(", ")}`);
    }

    const { name, lastname, email } = formData;

    if (registeredUsers.some((el) => el.email === email))
    //   throw new Error(`Email ya existe: ${email}`);
      console.log(`Email ya existe: ${email}`);

    registeredUsers.push({ name, lastname, email });

    return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`; 
  }



  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]

  const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "juan@example.com",
    password: "123456"
  }
 

  let result = validateForm(formData, registeredUsers)
  console.log(result)

//  Output: "Tu registro fue exitoso Juan Perez"

const formData2 = {
    name: "Alejandro",
    password: "123456",
};

let result2 = validateForm(formData2, registeredUsers)
console.log(result2)

//  Output: "Faltan los siguientes campos requeridos: lastname, email"




