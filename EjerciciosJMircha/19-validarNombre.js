//Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const isName = (str) =>{

    if(typeof str !== "string"){ console.error("El dato ingresado no es valido"); return}
    
    if(/[0-9]/.test(str)){console.error("La cadena ingresada no corresponde a un nombre"); return}

    if(/[!@#$%^&*()+]/.test(str)){console.error("La cadena ingresada no corresponde a un nombre"); return}

    return console.log(`${str} es un nombre valido`)

}


isName("David Vazque")
isName({})
isName([])
isName("1254334")
isName("Jonathan Mircha")