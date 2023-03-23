


function protectDog(dog) {
    for (let property of Object.keys(dog)) {
      Object.freeze(dog[property]);
    }
    let dog_copy = Object.freeze({ ...dog });
    return dog_copy;
  }


//   Input: 
  let obj = {
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
  }

  console.log("Objeto Original:")
  console.log(obj)

  console.log("Se cambia nombre a David")
  obj.name = "David"
  console.log(obj)

  console.log("Se protegen propiedades del objeto: ************************")

  let result = protectDog(obj)

  result.name = "Toro"

  console.log("Se modifico a Toro")
  console.log(result)
  
  /*
  Output:
  protectedDog.name = "Toro"
  protectedDog.name // "Romeo"

  */