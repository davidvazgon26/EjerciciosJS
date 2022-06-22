function DecimalToBynary(num) {
  // Your code here:
  let arr = []
  while(num>0){

    arr.push(num%2);
    num = Math.floor(num/2);
        
  }
  
   return arr.reverse().join("")

}

module.exports = DecimalToBynary;
