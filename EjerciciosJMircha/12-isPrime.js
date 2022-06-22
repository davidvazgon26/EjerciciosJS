//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
//pe. miFuncion(7) devolverá true.

const isPrime = (n) => {

    let cont = 0
  
    if(n === undefined) { console.warn("debes ingresar algun numero"); return false}
    if(n === 0) {console.warn("El cero no esta definido, ingresa otro numero"); return false  }
    if(n<0){ console.warn('debes ingresar un numero positivo'); return false }

    for(let i= 1 ;i<=n;i++){
        if(n%i === 0){ cont += 1}
    }

    if(cont === 2){ console.info(`El numero ${n} es primo`); return true}
    else{ console.info( n +" No es primo"); return false}

}

console.log(isPrime())
console.log(isPrime(0))
console.log(isPrime(-8))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(10))
console.log(isPrime(11))
console.log(isPrime(12))