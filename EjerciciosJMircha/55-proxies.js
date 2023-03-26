// Sirve para validar los datos en los objetos

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor){

        // validacion para no recibir propiedades que no esten incluidas en el objeto inicial u original
        if(Object.keys(obj).indexOf(prop)===-1){
            return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
        }

        //Validar en nombre y apellido que sean validos, no numeros, no caracteres especiales
        if((prop === 'nombre' || prop === 'apellido') && !(/^[A-Za-z\s]+$/g.test(valor))){ // el simbolo \s es para indicar espacios en blanco
            return console.error(`La propiedad '${prop}' solo acepta letras y espacios en blanco`)
        }
        obj[prop] = valor;
    }
}

//El proxy se puede complementar con expresiones regulares para solo aceptar las propiedades como lo necesitemos

const newObj = new Proxy(persona, manejador);

newObj.nombre = "David";
newObj.apellido = "Vazquez";
newObj.edad = 60

newObj.twitter = '@davidvazgon'

console.log(newObj)
