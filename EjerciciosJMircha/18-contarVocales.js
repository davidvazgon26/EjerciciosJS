//Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


const contarVocalesConsonantes = (str) =>{
    str = str.toLowerCase();
    let vocales = ['a','e','i','o','u']
    let totVocales = 0
    let totConsonantes = 0

    if(typeof str !== 'string'){console.warn("la cadena introducida debe ser del tipo string"); return}
    if(/[0-9]/.test(str)){console.warn("no debe contener numeros la cadena"); return}

    for( let letra of str){
        if(vocales.includes(letra)){
            totVocales += 1
        }else if(letra ===" "){
        }else{ totConsonantes += 1}
    }

    console.log(`tienes ${totVocales} vocales y ${totConsonantes} consonantes`)
     
}

contarVocalesConsonantes('Hola Mundo')
contarVocalesConsonantes('Holaa Mundoo')
contarVocalesConsonantes('Holaa Mundo777')