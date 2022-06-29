//Programa una función que dado un arreglo de números obtenga el promedio,
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.


const promedio = (array) => {

    if(!Array.isArray(array)){ console.error(`Este no es un array es un ${typeof array}`);return}

    if(array.length <=0){console.warn("El arreglo esta vacio"); return}

    let result =( array.reduce((prev,ant)=> prev+ant,0)/array.length).toFixed(2)

    console.log(result)

}

promedio([9,8,7,6,5,4,3,2,1,0])
promedio([9,8,7,6,5,4,3,2,1,10,40,80])
promedio("9,8,7,6,5,4,3,2,1,0")
promedio({})
promedio([])