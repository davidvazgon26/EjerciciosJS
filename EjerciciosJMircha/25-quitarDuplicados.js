// Programa una función que dado un arreglo de elementos, elimine los duplicados, 
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

//Mi solucion
// const quitarDuplicados = (arr)=>{

//     if(!Array.isArray(arr)){console.warn(`No es un arreglo este elemento, es un ${typeof arr}`); return }

//     if(arr.length<=0){console.warn("El arreglo esta vacio"); return }

//     let newArray = [];

//     for(let i=0;i<arr.length;i++){
//         if(!newArray.includes(arr[i])){ newArray.push(arr[i]);}
//     }

//     console.log(newArray);

// }

//Solucion J Mircha   (2 opciones)

const quitarDuplicados = (arr)=>{

    if(!Array.isArray(arr)){console.warn(`No es un arreglo este elemento, es un ${typeof arr}`); return }

    if(arr.length<=0){console.warn("El arreglo esta vacio"); return }

    // return console.info({
    //     original: arr,
    //     sinDuplicados: arr.filter((value, index, self)=>self.indexOf(value)===index)
    // })

    return console.info({
        original: arr,
        sinDuplicados: [...new Set(arr)]
    })

}


quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true])
quitarDuplicados(["x", 10, "x", 2,"2","X",2, "10", 10,10,10, true, true])
quitarDuplicados([])
quitarDuplicados({})