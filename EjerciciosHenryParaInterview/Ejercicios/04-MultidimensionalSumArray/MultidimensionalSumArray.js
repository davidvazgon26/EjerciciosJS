function mdArraySum(arr) {
  // Your code here:
  
  let total = 0

    arr.forEach(item =>{
        if(item.length > 0 ){
          total += mdArraySum(item)
        }else{ 
          total += parseInt(item)
        }

    })
 
    return total

}

module.exports = mdArraySum;

//realizar suma de arreglo, que puede tener otros areglos dentro del el mismo

//Solucion con recursividad

// solucion aplanando el array:

// let array = arr.flat();

// let result = array.reduce((prev, anterior)=> prev+anterior)

// console.log(result)

// return result
