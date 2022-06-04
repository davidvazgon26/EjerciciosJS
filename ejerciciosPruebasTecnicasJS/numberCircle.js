// Considere los números enteros de 0a n - 1escritos a lo largo del círculo de tal manera que la distancia entre dos números vecinos sea igual (tenga en cuenta que 0y n - 1también son vecinos).

// Dado ny firstNumber, encuentre el número que está escrito en la posición radialmente opuesta a firstNumber.

// Ejemplo

// Para n = 10y firstNumber = 2, la salida debería ser
// solution(n, firstNumber) = 7.

function solution(n, firstNumber) {

    let res =0 
    if(firstNumber >= (n/2)){
        res = firstNumber - (n/2)
    }
    else{ res = firstNumber + (n/2)}

    console.log(res)
    return res
}


solution(10, 7)