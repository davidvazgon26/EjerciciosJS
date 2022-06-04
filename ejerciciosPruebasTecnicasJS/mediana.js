//Encontrar la mediana, ordenar arreglo y obtener el valor medio del array
// Ejemplo [5,3,1,2,4] => [1,2,3,4,5] => 3
let array = [5,3,1,2,4]

function mediana(arr){
    arr.sort((a,b) => a-b)
    let med = Math.floor(arr.length/2)
    console.log(arr[med])
    return arr[med]
}

mediana(array)
