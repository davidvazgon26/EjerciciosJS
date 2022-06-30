//Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
//pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const mayorYMenor = (array) => {
    if(!(array instanceof Array)){ console.warn(`No es un array valido, esto es un ${typeof array}`); return }
    if(array.length<=0){console.warn('El arreglo esta vacio'); return}

    let min = Math.min(...array)
    let max = Math.max(...array)

    console.log(`de acuerdo al array ${array}, el valor minimo es: ${min}, y el valor maximo es: ${max}`)

}


mayorYMenor([1,5,7,6,4,646])
mayorYMenor([1,5,7,6,4,8])
mayorYMenor([1,5,7,6,4,-2])
mayorYMenor({})
mayorYMenor([])
mayorYMenor('')