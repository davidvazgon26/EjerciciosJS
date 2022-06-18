function SumArray(arr, n) {
  // Your code here:

  if(arr.includes(n)) return true

  while(arr.length > 0) {
    let valor = arr.shift()
    for(let i=0;i<arr.length;i++) {
        if(valor+arr[i]===n){
          return true
        }
    }
  }
  return false
}

module.exports = SumArray;

//Aproximacion:

//Recibo 2 argumentos, un arreglo y un numero

//Validar si alguna combinacion de 2 numeros del arreglo suma la cantidad del numero pasado en el segundo argumento.

//Si el valor se encuenta en el arreglo ya no sumo.

// Tomo el primero valor y recorro el arreglo sumando y comparando con el resto hasta hacer todas las comparaciones posibles.

//Al momento de encontrar una coincidencia detengo los loops

//Si alguno de los numeros es mayor que el buscado lo salto

//Si hay coincidencia devuelvo true, sino false
