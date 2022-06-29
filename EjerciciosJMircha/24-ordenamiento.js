//Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const ordenamiento = (arr) => {

    if(!Array.isArray(arr)){console.error(`el objeto ingresado no es un array, es un ${typeof arr}` ); return}

    if(arr.length<= 0){console.warn("El arreglo esta vacio"); return }

    let asc = arr.sort((a,b)=>a-b)
    let desc = arr.slice().sort((a,b)=>b-a)

    let obj ={
        asc,
        desc
    }


    console.log(obj)


}

ordenamiento([7, 5,7,8,6])
ordenamiento([22,55,44,66,855,551,1,55])
ordenamiento(['22,55,44,66,855,551,1,55'])
ordenamiento([])
ordenamiento({})