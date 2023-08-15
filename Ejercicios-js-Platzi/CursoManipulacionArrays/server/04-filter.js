const words = ["spray", "limit", "elite", "exuberant"];

// sin arrowfunctions
const newArray = [];

for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

console.log("Original array: ", words);
console.log("Nuevo array: ", newArray);

const filterArray = words.filter((item) => item.length >= 6);

console.log("Original array: ", words);
console.log("Nuevo array con filter: ", filterArray);

// otro ejemplo
const array = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
];

const result = array.filter((item) => item.delivered && item.total > 60);

console.log(result);
