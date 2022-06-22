// Programa una función que calcule el factorial de un número 
//(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
// pe. miFuncion(5) devolverá 120.  (1x2x3x4x5)


const factorial = (n) =>{

    let tot = 1;

    for(let i=1;i<=n;i++){
        tot*= i
    }
    return tot
}


console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(4))
