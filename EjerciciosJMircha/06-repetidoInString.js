// Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


const repite = function(str, word) {
    
    let string = str.split(' ')
    let arr=[]

    if(str===""){console.log("No hay cadena que validar"); return}
    if(word===""){console.log("No hay palabra que validar"); return}


    for(let i=0;i<string.length;i++) {
        if(string[i]===word){ arr.push(string[i])}
    }

    console.log(arr.length)
    return arr.length

}

repite("Hola mundo adios mundo", "mundo")