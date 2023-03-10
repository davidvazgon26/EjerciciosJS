
function createCalculator() {
    // Tu código aquí 👈
    let result = 0;
   return {
    add:num => result += num,
    subtract : num => result -= num,
    multiply: num => result *= num,
    divide: num => result /= num,
    clear: ()=> result = 0,
    getTotal: ()=> result
   }

  }
  



const calculator = createCalculator()
// calculator.add(10)  //10
console.log(calculator.add(10))  //10
console.log(calculator.add(10))  //20
console.log(calculator.getTotal())  //20
console.log(calculator.clear())  //0
console.log(calculator.getTotal())  //0
console.log(calculator.add(100))  //100
console.log(calculator.divide(5))  //20
console.log(calculator.multiply(2))  //40
console.log(calculator.subtract (10))  //30

// calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10) //20

// calculator = createCalculator()
// calculator.add(10)
// calculator.subtract(-10)
// calculator.clear() //0