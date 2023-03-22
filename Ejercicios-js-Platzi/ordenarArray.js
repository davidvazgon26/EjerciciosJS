
//Ordenamiento default es como texto
const numbers = [1, 5, 2, 4, 3];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]


//Ordenamiento por numero:
const numbersNdesc = [1, 5, 2, 4, 3];
numbersNdesc.sort((a, b) => b - a);
console.log(numbersNdesc); // Output: [5, 4, 3, 2, 1]

const numbersNasc = [1, 5, 2, 4, 3];
numbersNasc.sort((a, b) => a - b);
console.log(numbersNasc); // Output: [5, 4, 3, 2, 1]

//Ordenamiento viendo las comparaciones:
const numbersDesc = [1, 5, 2, 4, 3];
numbersDesc.sort((a, b) => {
    console.log(`${b} - ${a}: ${ b - a}`)
    return b - a
});
console.log(numbersDesc)


// Ordenar objetos dentro de array:

const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Jim", age: 32 }
    ];
    people.sort((a, b) => a.age - b.age);
    console.log(people);   // Output: [{ name: "Jane", age: 28 }, { name: "John", age: 30 }, { name: "Jim", age: 32 }]