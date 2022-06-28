//Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha=undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste una fecha");

    if(!(fecha instanceof Date)) return console.error("Haz ingresado un valor que no es una fecha valida")

        let compara = new Date().getTime() - fecha.getTime();
                                //segundo*minutos*hora*dia*anio
        let milisegundosAAnios = 1000*60*60*24*365
        let aniosHumanos = Math.floor(compara / milisegundosAAnios);

        return (Math.sign(aniosHumanos) === -1)
         ? console.info(`Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}`)
         : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el mismo anio ${fecha.getFullYear()}`)

}



calcularAnios()
calcularAnios({})
calcularAnios(true)
calcularAnios(new Date())
calcularAnios(new Date(1984,4,23))
calcularAnios(new Date(2084,4,23))