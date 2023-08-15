const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];

for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}

const rta = elements.concat(otherElements);

console.log("Con for: ", newArray);
console.log("Con Concat: ", rta);

const rta2 = [...elements, ...otherElements];

console.log("rta con ...", rta2);

elements.push(...otherElements);

console.log("elements con push y ...: ", elements);
