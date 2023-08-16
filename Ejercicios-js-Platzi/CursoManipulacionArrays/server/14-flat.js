const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, [10, 11, 12]],
];

console.log("Matriz", matriz);

const newArray = [];

for (let index = 0; index < matriz.length; index++) {
  const array = matriz[index];
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    newArray.push(array[j]);
  }
}

console.log("Con For: ", newArray);

const arrayFlat = matriz.flat(2); // 2 es el nivel de aplanado

console.log("Con flat: ", arrayFlat);
