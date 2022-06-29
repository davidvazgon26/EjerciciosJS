//Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
//pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


const elevarArray = (array) =>{

    let result = []
    let resultado = null
    
    if(Array.isArray(array)){
        
        if(array.length <= 0 ){ console.warn("El arreglo ingresado esta vacio"); return; }
        
         result = array.map(item => {

            item = Math.pow(item,2)
            return item
        })
        

    }else{ return console.warn(`el dato ingresado no es un arreglo valido, es un ${typeof array}`); return}
    
        resultado = result.includes(NaN)?"El arreglo contiene valores no numericos":result

     console.log(resultado)
}

elevarArray([1,2,3,4,5,6])
elevarArray([5,9,1,7,3])
elevarArray(["a","b","c"])
elevarArray({})
elevarArray(undefined)
elevarArray("string")
elevarArray([])