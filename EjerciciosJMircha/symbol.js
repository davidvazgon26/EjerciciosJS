// Symbol es un tipo de dato o identificador unico, ejemplo:


let a = "b"
let c = "b"

console.log(a === c)
//esto da true para

let simbolo1 = Symbol("b")
let simbolo2 = Symbol("b")

console.log(simbolo1 === simbolo2)
//esto da falso

console.log(typeof simbolo1)
