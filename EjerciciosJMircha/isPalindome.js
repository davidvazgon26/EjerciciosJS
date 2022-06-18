// Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), 
// pe. mifuncion("Salas") devolverá true.

const palindrome = function(str){


    if(str === ""){ console.warn("Se requiere un texto para validar"); return }
    if(typeof str !== "string"){ console.warn("El valor ingresado no es una cadena"); return }

    str = str.toLowerCase();

    let comparar = str.split('').reverse().join("");
    if(str === comparar){ console.info(`${str} es un Palindromo`)}
    else{ console.info(`${str} no es un palindromo`)}

}


palindrome("Salas")
palindrome("")
palindrome("Gol")