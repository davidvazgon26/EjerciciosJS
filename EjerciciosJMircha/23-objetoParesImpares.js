//Programa una función que dado un array de números devuelva un objeto con 2 arreglos 
//en el primero almacena los números pares y en el segundo los impares, 
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


const paresImpares = (array) => {

    if(!Array.isArray(array)){console.warn(`Esto no es un array valido, es un ${typeof array}`); return;}

    if(array.length<=0){console.warn("Debes ingresar un arreglo con datos, este esta vacio"); return;}
    let obj = {}
    let par = []
    let impar = []

    for(let i=0;i<array.length;i++){
        if(Number.isNaN(array[i])){ `El valor ${array[i]} no es un numero valido`; return}
            if(array[i]%2 === 0){ par.push(array[i]) }
            else{impar.push(array[i])}
    }

     obj = {
        par,
        impar
    }

    console.log(obj)


}

paresImpares([1,2,3,4,5,6,7,8,9,0])
paresImpares([54,554,6658,4454,555,44,22])
paresImpares([])
paresImpares("[54,554,6658,4454,555,44,22]")
paresImpares({})