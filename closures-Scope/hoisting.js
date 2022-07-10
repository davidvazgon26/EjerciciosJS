//las declaraciones si pasan al momento de elevar, lo que no pasa es la asignacion, aqui una muestra
//La elevacion o Hoisting solo se da en variables y funciones     

console.log(nombre)
var nombre = "David"
console.log(nombre)

//ahora en funciones  

imprime();

function imprime(){
    console.log(`El mejor perrito es ${perro}`);
}

var perro = "Roko"
imprime();