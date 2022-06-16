// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".



const recortar = function(string,num){

    let result = string.substring(0,num);

    console.log(result);
    return result;
}

recortar("Hola Mundo",4);