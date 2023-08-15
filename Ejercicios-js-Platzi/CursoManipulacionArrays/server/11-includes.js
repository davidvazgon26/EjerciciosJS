const pets = ["cat", "dog", "bat"];

let includesInArray = false;

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includesInArray = true;
    break;
  }
}

const rta = pets.includes("dog");

console.log("for", includesInArray);
console.log("includes", rta);
