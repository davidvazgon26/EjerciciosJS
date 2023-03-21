

//Constructor de array
let myArray = new Array();
console.log(myArray)

//Costructor de Array con valores incluidos
let myArray2 = new Array(1,2,3,4,5,6,7);
console.log(myArray2)

//Creando array apartir de objeto iterable
let myArray3 = Array.from("David");
console.log(myArray3);

//Crear y rellenar arreglo
let myarray4 = new Array(5).fill(3)
console.log(myarray4);

//Confirmar si es array
console.log(Array.isArray(myarray4));

//creando copia de array
const originalArray = [1,2,3,4,5,6,7,8,9];
const copiaArray1 = originalArray;
const copiaArray2 = new Array(...originalArray);

console.log(originalArray === copiaArray1) // Apuntan a la misma direccion 
console.log(originalArray === copiaArray2) // No apunta a la misma direccion

//Tambien el metodo slice y concat crean un nuevo arreglo

console.log(originalArray === originalArray.slice()) //false
console.log(originalArray === originalArray.concat()) //false

// Lo mismo para el spread operator...
const otroArray = [...originalArray]
console.log(originalArray === otroArray); //false


//Metodo Every para validar si todos los elementos de un array cumplen una condicion.
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive);

const arreglo = [1,2,3,4,5,"t","x"];
const arreglo2 = [1,2,3,4,5];
const allNumber = arreglo.every(el => typeof el === 'number')
const allNumber2 = arreglo2.every(el => typeof el === 'number')

console.log("----------------------------------------------------")

console.log(allNumber)
console.log(allNumber2)

// Validando si todos los elementos de un arrglo de objetos tienen una propiedad especifica:

const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];

const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);

//Find para encontrar el primer elemento que cumpla con la condicion:

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbersArray.find(number => number > 5);
const result2 = numbersArray.find(number => number > 15);

console.log(result); // 6
console.log(result2); // undefined, no confundir con el metodo findIndex()

// Mismo caso pero con un arreglo de objetos:

const people = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Jim', age: 40 }
  ];
  const resultado = people.find(person => person.age === 28);
  
  console.log(resultado);
  // Output: { name: 'Jane', age: 28 }

  //Metodo findIndex()
  const numbersFI = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbersFI.findIndex(num => num > 5);
const index2 = numbersFI.findIndex(num => num > 15);
console.log(index); // Output: 5
console.log(index2); // Output: -1 que indica que no se encontro algun elemento que cumpla la condicion.


//El uso del metodo include

const n = [1,2,3,4,5]

const res = n.includes(3)
console.log(res)

const res2 = n.includes(3,4) //Cuando se pasa el segundo argumento inicia desde esa posicion, si no se pasa el argumento inicia la busqueda desde el indice 0
console.log(res2)

// Metodo flat

const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const multiDimensionalArray2 = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const flatArray2 = multiDimensionalArray2.flat(1); // si cambio el valor a 2 aplana completamente el arreglo.
console.log(flatArray2); // [1, 2, 3, 4, [5, 6], 7, 8, 9]

// Metodo flatMap
const numbersFM = [1, 2, 3, 4];

const resultFM = numbersFM.flatMap(x => [x, x * 2]); //Pasa el valor como viene por la primer x y luego la multiplica y lo agrega al nuevo array

console.log(resultFM); // Output: [1, 2, 2, 4, 3, 6, 4, 8]


// Metodo flatMap para quitar nulos o undefineds
const values5 = [1, 2, 3, null, 4, undefined, 5];

const resultFM2 = values5.flatMap(x => x ? [x]:[]).filter(Boolean);

console.log(resultFM2); // Output: [1, 2, 3, 4, 5]
