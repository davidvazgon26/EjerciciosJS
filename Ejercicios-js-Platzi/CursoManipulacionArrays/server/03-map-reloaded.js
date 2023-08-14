const array = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
];

console.log("Arreglo original: ", array);

const newArray = array.map((item) => item.total);

console.log("NewArray: ", newArray);

//Ojo lo pango para recordar que asi no se realiza por las referencias en memoria apuntan al mismo objeto
// const newArrayTax = array.map((item) => {
//   item.tax = 0.19;
//   return item;
// });

const newArrayTax = array.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log("array original: ", array);
console.log("Agregando propiedad a items: ", newArrayTax);
