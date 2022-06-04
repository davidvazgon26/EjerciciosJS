//Si el numero es divisible entre 3 y 5 escribe FizzBuzz, si es divisible entre 5 escribe Fizz si es divisible entre 3 escribe Buzz sino entrega el numero ingresado

let arr = [0,1,3,5,7,15,20,33,55,60,65,70,71,72,73]

function fizzbuzz(n){
    if(n==0)return 0
    if (n % 5 === 0 && n % 3 === 0 ) {
        return "FizzBuzz"
    }
    if(n%5 === 0) return "Fizz"
    if(n%3 === 0) return "Buzz"
    else return n
}

arr.forEach(item=>console.log(fizzbuzz(item)))


