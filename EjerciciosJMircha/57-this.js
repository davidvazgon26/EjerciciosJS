

console.log(this);
// console.log(global)

console.log(this === global);

this.nombre = "Contexto Global";
console.log(this);

function imprimir (){
    console.log(this.nombre)
}

imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function (){
        console.log(this.nombre)
    }
}

obj.imprimir();

const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir,
}

obj2.imprimir();

const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {  //la arrow function no maneja su propio contexto, es por eso que maneja el de su padre
        console.log(this.nombre)
    }
}

obj3.imprimir();

function Persona(nombre){
    this.nombre = nombre;

    return function () {
        console.log(this.nombre)
    }
}

let res = new Persona("David")
res(); //undefined, pero en tools del navegador debe mostrar a global

function Persona2(nombre){
    this.nombre = nombre;

    return  ()=> console.log(this.nombre)
}

let res2 = new Persona2("David")
res2(); //David

