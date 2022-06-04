// Ordenar sin usar sort, creando un arreglo con 0's y rellenando las veces que se repite el valor

//Ejemplo arr=[1,1,3,2,1]
// 0 	1 	[ 0 ,  1 ,  0 ,  0 ] 
// 1 	1 	[ 0 ,  2 ,  0 ,  0 ] 
// 2 	3 	[ 0 ,  2 ,  0 ,  1 ] 
// 3 	2 	[ 0 ,  2 ,  1 ,  1 ] 
// 4 	1 	[ 0 ,  3 ,  1 ,  1]

// arr = [1,1,1,2,3]

let array = [1,1,3,2,1]

function countingSort(arr) {
    // Write your code here
  let frequencyArray = new Array(100).fill(0)
  for(let num of arr){
  frequencyArray[num]++
  }
  return frequencyArray
}

console.log(countingSort(array))
countingSort(array)



// function countingSort(arr) {
//     // Write your code here
//     let max = Math.max(...arr)
//     let array = []
//     let arrFinal = []
//     for(let i = 0; i <= max; i++){array.push(0)}

//     arr.forEach(item => {
//         array[item]=array[item]+1
//     })

//     array.forEach((el, index)=>{
//         for(let i=0; i<el; i++){
//             arrFinal.push(index)
//         }
//     })
    
//         console.log(arrFinal)
// }
