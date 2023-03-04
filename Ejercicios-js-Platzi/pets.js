


function getPetExerciseInfo(type, age) {
    // Tu Código aquí 👈
    let respuesta=""
    switch (type) {
        case "perro":
            if(age<1) respuesta = "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
            if(age>=1 && age<=7) respuesta = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
            if(age>7) respuesta = "Los perros viejos necesitan caminatas más cortas";
            break;
        case "gato":
            if(age<1) respuesta = "Los gatitos necesitan frecuentes sesiones de juego";
            if(age>=1 && age<=7) respuesta = "Los gatos a esta edad necesitan jugar diariamente";
            if(age>7) respuesta = "Los gatos viejos necesitan sesiones de juego más cortas";
            break;
        case "ave":
            if(age<1) respuesta = "Las aves jóvenes necesitan mucho espacio para volar";
            if(age>=1 && age<=7) respuesta = "Las aves necesitan jugar diariamente y un lugar para volar";
            if(age>7) respuesta = "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
            break;
    
        default:
            respuesta = "Tipo de mascota inválida";
            break;
    }
    return respuesta;
}



console.log(getPetExerciseInfo("perro",3));
console.log(getPetExerciseInfo("gato",8));
console.log(getPetExerciseInfo("Mamut",25));