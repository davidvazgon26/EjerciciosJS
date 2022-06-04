//Encontrar la suma minima y maxima considerando 4 de 5 valores dentro de un  array        
// ejemplo [1,3,5,7,9] => sumMin= 16, sumMax => 24

let array = [1,3,5,7,9]

function miniMaxSum(arr){
    let iValueMin = 0;

    let min = Math.min(...arr)
    let max = Math.max(...arr)
    const sumMin = arr.reduce((previousValue, currentValue) => previousValue + currentValue, iValueMin)-max;
    const sumMax = arr.reduce((previousValue, currentValue) => previousValue + currentValue, iValueMin)-min;
    console.log(sumMin, sumMax)
}

miniMaxSum(array)