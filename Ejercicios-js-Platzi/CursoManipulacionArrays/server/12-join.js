const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}

const result = elements.join("--");

console.log("con For: ", rtaFinal);
console.log("con Join: ", result);
