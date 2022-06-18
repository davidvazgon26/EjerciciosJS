// Programa una función que cuente el número de caracteres de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10.


const contarString = function (string){

        if(string ===""){console.warn("No hay nada que contar"); return;}

        let result = string.length;

        console.log(result)
        return result;

}


contarString("Hola Mundo");