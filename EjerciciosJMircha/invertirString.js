// Programa una función que invierta las palabras de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


const invertirString = function(string){

    if(string ===""){console.warn("No hay nada que invertir"); return;}

    let result = string.split("").reverse().join("");

    console.log(result);
}


invertirString("Hola Mundo");