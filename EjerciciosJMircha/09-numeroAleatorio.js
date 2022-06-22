//Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = (min, max)=>{

    let result = Math.random()* ((max+1)-min) + min
    result = Math.floor(result) 
    return result
}

console.log(aleatorio(501, 600))
console.log(aleatorio(1, 3))
console.log(aleatorio(1, 2))