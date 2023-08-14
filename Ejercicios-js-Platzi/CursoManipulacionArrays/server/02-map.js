const letters = ["a", "b", "c"];

const newArray = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
}

console.log("Original: ", letters);
console.log("New: ", newArray);

const newArrayMap = letters.map((item) => item + "++");

console.log("Original again: ", letters);
console.log("New ArrayMap: ", newArrayMap);
