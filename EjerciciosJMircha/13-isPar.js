//Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


const isPar = (n)=>{

    if(n === undefined) { return("Debes ingresar un numero"); }
    if(n<0){return("Ingresa un numero positivo"); }

    if(n%2 === 0){return(`El numero ${n} es par`)}
    else{return(`El numero ${n} es impar`)}


}


console.log(isPar(0))
console.log(isPar())
console.log(isPar(-4))
console.log(isPar(1))
console.log(isPar(2))
console.log(isPar(3))
console.log(isPar(7))
console.log(isPar(12))