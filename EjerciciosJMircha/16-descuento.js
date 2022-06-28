//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. 
//miFuncion(1000, 20) devolverá 800.


const descuento = (tot, desc) => {

    return  tot - ((desc/100)*tot)
}


console.log(descuento(1000,20))
console.log(descuento(1000,10))
console.log(descuento(1000,50))