// encontrar las fracciones de elementos positivos negativos e iguakes a o en un array
//Ejemplo [1,1,0,-1,-1] => 0.400000, 0.400000, 0.200000


let array = [1,1,0,-1,-1]

function fracciones(arr){
    let result1 = (arr.filter(item => item>0).length / arr.length).toFixed(6)
    let result2 = (arr.filter(item => item<0).length / arr.length).toFixed(6)
    let result3 = (arr.filter(item => item==0).length / arr.length).toFixed(6)

    console.log(result1)
    console.log(result2)
    console.log(result3)

}

fracciones(array)