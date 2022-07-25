// Sirve para hacer iterable una funcion

function* iterable(){

 yield "Hola"
 console.log("Entre otra vez a mi generador");
 yield "Mundo"
 console.log("2 ingreso a mi generador")
 console.log("Se debe detener despues de llegar al siguiente yield")

yield "desde JS"

}


console.log(iterable().next())
console.log(iterable().next())

let iterador = iterable()

console.log(iterador.next())
console.log(iterador.next())

//podemos uasr un for of para no tener que estar invocando a nuestra funcion generadora

for (const y of iterador) {
    console.log(y)
}


//puedo generar un arreglo con mis respuestas

const array = [...iterable()]
console.log(array)
console.log(array.join(" "))

//Generando asincronismo no bloqueante **********************************************

function cuadrado(valor){
    setTimeout(()=>{
        return console.log({
            valor,
            resultado: valor*valor,
        })
    }, Math.random()*1000)
}


function* generador(){
    console.log("Inicia el generador");
    // Ingresando datos del 0 al 5 para elevar al cuadrado
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Finaliza el generador");
}

let generar = generador();

for (const y of generar) {
    console.log(y)
}