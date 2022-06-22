// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
//  pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].



const stringToArray = function(str,val){

    if(str ===""){console.warn("No hay nada que separar"); return;}
    if(val ===""){console.warn("No hay separador"); return;}

    let result = str.split(val)

    console.log(result);
    return result
}

stringToArray("Hola Mundo"," ");
stringToArray("Hola-Mundo","-");
stringToArray("Hola,Mundo",",");
stringToArray("Hola*Mundo","*");