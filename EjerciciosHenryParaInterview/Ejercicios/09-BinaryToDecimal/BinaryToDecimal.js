function BinaryToDecimal(binary) {
  // Your code here:
  let potencia = 1
  let arreglo = binary.split('');
  let total = 0

  for(let i=arreglo.length-1;i>=0;i--) {
    total += potencia*parseInt(arreglo[i]);
    potencia = potencia === 1? 2: potencia*2
}
return total
}

//console.log(BinaryToDecimal("11010"))

module.exports = BinaryToDecimal;
