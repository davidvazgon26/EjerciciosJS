// Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const modificaString = function (cadena, eliminar){
    if(typeof cadena !== "string"){console.warn("No ingresaste una cadena de texto valida"); return}
    if(cadena === ""){console.warn("La cadena de texto esta vacia"); return}
    let result = cadena.replaceAll(eliminar,"")
    console.log(result)
}

const modificaString2 = function (cadena, eliminar){
    if(typeof cadena !== "string"){console.warn("No ingresaste una cadena de texto valida"); return}
    if(cadena === ""){console.warn("La cadena de texto esta vacia"); return}
    let result = cadena.replace(new RegExp(eliminar,"ig"),"")
    console.log(result)
}


modificaString("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
modificaString2("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

