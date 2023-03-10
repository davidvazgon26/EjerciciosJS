

function myMap(array, func) {
    // Tu código aquí 👈

    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(func(array[i]))        
    }

    console.log(arr);
    return arr

  }
  

  myMap([1,2,3,4], (num) => num * 2)

  myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name)