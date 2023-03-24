

const iterable = [1,2,3,4,5]

const iterable2 = "Hola"

const iterable3 = new Set([1,1,1,1,2,2,2,3,3,3,3,4,4,4,5,5,5,"a","a",false])

const iterable4 = new Map([["nombre", "David"],["edad",42]])


//Accedemos al iterador del iterable
const iterador = iterable4[Symbol.iterator]()

// console.log(iterable)
// console.log(iterador)
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

console.log("***************************************")
let next = iterador.next();
while (!next.done) {
    console.log(next.value)
    next = iterador.next()
}