//funciona a manera de arreglo sin permitir elementos repetidos, pero tiene sus particularidades

const set = new Set([1,2,3,3,4,5,true,false, false, {}, {}, "hola", "Hola"]) //son 13 elementos con 2 repetidos

console.log(set)

//Para seguir agregando elementos:

const set2 = new Set()
set2.add(1)
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(24)
set2.add(22)
set2.add(24)
set2.add(false)

console.log(set2)
console.log(set2.size)

// puedes recorrerlo con for of... y con forEach

console.log("Recorriendo con for of")
for (const item of set) {
    console.log(item)
}

console.log("Recorriendo con forEach")

set2.forEach(item => console.log(item))

//Pero no puedes acceder por indice, es decir no podrias hacer: console.log(set[0]), lo debes transformar en arreglo, de la siguiente manera:

 const arreglo = Array.from(set);

 if(arreglo instanceof Array){console.log("Si es ya un arreglo")}
 console.log(arreglo)
 console.log(arreglo[3])

 //Borrar datos de un set en
 console.log(set)
 set.delete("Hola")
 console.log(set)

 //Compureba si existe el valor dentro de la coleccion de datos
console.log(set.has("hola"))
console.log(set.has(5))

//Limpiar los datos de un set2
console.log(set2)
set2.clear()
console.log(set2)

//Quitar valores duplicados a un arreglos
let r = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5]
console.log(r)

let sinDuplicados = [...new Set(r)];

console.log(sinDuplicados)