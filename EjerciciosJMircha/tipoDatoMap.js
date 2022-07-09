//Es parecido a los objetos, pero solo para su iteracion


let mapa = new Map();

mapa.set("nombre","David");
mapa.set("apellido", "Vazquez");
mapa.set("edad", 35)

console.log(mapa);
console.log("El total de elementos es de: " + mapa.size);

// Ver si existe la propiedad

console.log("Existe apellido? "+ mapa.has("apellido"));
console.log("Existe correo? "+  mapa.has("correo"));

// Obtener el valor de una propiedad

console.log("El valor de la propiedad nombre es: " + mapa.get("nombre"))

//Sobreescribir valor de la propiedad

mapa.set("nombre", "David A")
console.log(mapa);

//Eliminar propiedad

mapa.delete("edad")
console.log(mapa);

//Iterar el objeto

for(let [key,value] of mapa){
    console.log(`Llave:${key}, Valor:${value}`)
}

//Otra manera de armar un map

const mapa2 = new Map([
    ["nombre", "otro"],
    [19, "numero"],
    [null, "nulo"],
    ["edad", 18],
])

console.log(mapa2)

const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2)
console.log(valoresMapa2)

