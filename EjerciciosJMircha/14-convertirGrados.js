//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


const convertirGrados = (n,grado) =>{

    let result = 0;

    if(grado === undefined){ return ("Faltan dtos por ingresar")}
    if(typeof n !== 'number'){ return ("Los grados debe ingresar como numero")}

    grado = grado.toLowerCase();

    if(grado === "c"){
        result = n*(9/5) + 32
        return (`${n} grados Celsius, es igual a ${result} grados Fahrenheit`)
    }
    
    if(grado === "f"){
        result = (n-32) * (5/9)
        return (`${n} grados Fahrenheit, es igual a ${result.toFixed(2)} grados Celsius`)
    }
    


}


console.log(convertirGrados(0))
console.log(convertirGrados("C"))
console.log(convertirGrados(0,"C"))
console.log(convertirGrados(1,"C"))
console.log(convertirGrados(4,"C"))
console.log(convertirGrados(18,"F"))
console.log(convertirGrados(60,"F"))