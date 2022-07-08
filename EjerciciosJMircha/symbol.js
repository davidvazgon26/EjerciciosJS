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

// puedes mantener privado algun tipo de propiedad, ejemplo:

//Hay que definirlo para usarlo
const NOMBRE = Symbol();

//ahora lo usamos dentro del objeto persona    

const persona = {
    [NOMBRE]: "David"
};

console.log(persona)

//puedo incluso crear una propiedad con el mismo nombre y no se ve afectado, ejemplo:

persona.NOMBRE = "Otro David"; 
console.log(persona)


//para invocar un symbol, lo hacemos asi:

console.log(persona.NOMBRE)  //Devuelve Otro David
console.log(persona[NOMBRE]) // Devuelve David

//Para diferenciar cuando utilizas varios symbol, los puedes nombrar pasando un string como parametro, ejemplo:

const simboloNombrado = Symbol("Nombrado")

console.log(simboloNombrado) 

// Tambien le puedes asignar alguna funcion

const FUNCION = Symbol("funcion");

persona[FUNCION] = function (){
    console.log("Saludando desde la propiedad symbol-funcion");
}

//Para invocarlo usa esto:

persona[FUNCION]();

// Los Symbol no aparecen al iterar en las propiedades del objeto persona de

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}
