// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".



const recortar = function(string,num){

    if(string ===""){console.warn("No hay nada que recortar"); return;}
    if(num ===""){console.warn("No hay numero"); return;}
    
    let result = string.substring(0,num);

    console.log(result);
    return result;
}

recortar("Hola Mundo",4);