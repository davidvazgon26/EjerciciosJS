//Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
        // - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
        // - Valida que los géneros sean introducidos en forma de arreglo.
        // - Valida que los géneros introducidos esten dentro de los géneros 
        //    aceptados*.
        // - Crea un método estático que devuelva los géneros aceptados*.
        // - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
        //   decimal de una posición.
        // - Crea un método que devuelva toda la ficha técnica de la película.
        // - Apartir de un arreglo con la información de 3 películas genera 3 
        //   instancias de la clase de forma automatizada e imprime la ficha técnica 
        //   de cada película.

        //* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula{

    constructor({id, titulo, director, estreno, pais, genero, calificacion}){
            this.id = id;
            this.titulo = titulo;
            this.director = director;
            this.estreno = estreno;
            this.pais = pais;
            this.genero = genero;
            this.calificacion = calificacion;

            this.validarId(id);
            this.validarTitulo(titulo);
            this.validarDirector(director);
            this.validarEstreno(estreno);
            this.validarPais(pais);
            this.validarGenero(genero);
            this.validarCalificacion(calificacion);
    }

      // staic es para cuando necesitas un atributo (atributo estatico) que este disponible aun cuando no exista una instancia de la clase. Get es el obtenedor
      static get listaGeneros(){
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
      }

      //Metodo estatico para consumir el atributo estatico para
      static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`)
      }

    validarString(propiedad, valor){ // Metodo para reutilizar en validarId, validarTitulo, validarDirector
        if(!valor) return console.warn(`${propiedad} ${valor} esta vacio`)
        if(typeof valor !== 'string') return console.error(`El valor ingresado en ${propiedad} no es una cadena valida, es un ${typeof valor}`)
        return true
    }

    validarLongitudString(propiedad, valor, longitud){
        if(valor.length > longitud)  {console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`); return false}else{
            console.log(`Validacion de ${propiedad} exitosa`)
            return true
        }
    }

    validarId(id){
        if(this.validarString("Id", id)){

           /* Expresion regular
            ^ indica que no exista nada antes de este Simbolo
            $ indica que no exista nada despues de este Simbolo
            {n} cantidad de caracteres necesarios 
            / para iniciar la expresion y / para finalizarla */

            if(!/^([a-z]){2}([0-9]){7}$/.test(id)) return console.error(`El Id ${id} no es valido, debe tener 2 letras minusculas de inicio y continuar con 7 digitos`);

            console.log(`Validacion de Id exitosa`)

        }
    }

    validarTitulo(titulo) {
        if(this.validarString("Titulo",titulo))
        this.validarLongitudString("Titulo",titulo,100)
    }
    validarDirector(director) {
        if(this.validarString("Director",director))
        this.validarLongitudString("Director",director,50)
    }
    validarEstreno(estreno){
        if(!/^[0-9]{4}$/.test(estreno)) return console.error(`Error en el anio de estreno ${estreno}, debe ser una anio de 4 digitos valido `)

        console.log(`Validacion de anio de estreno exitosa`)
    }
    validarArreglo(propiedad, valor){ // reutilizar metodo para validarPais y validarGenero
        if(!(valor instanceof Array)) return console.error(`La propiedad ${propiedad} "${valor}", no es un arreglo valido, es un ${typeof valor}`)
        if(!valor) return console.warn(`La propiedad ${propiedad}, esta vacia`)
        if(valor.length === 0 ) return console.warn("El arreglo esta vacio")
        for(let item of valor){
            if(typeof item !== "string"){ console.error(`El arreglo ${propiedad} contiene ${item} un registro no valido`); return}
        }
        return true
    }
    validarPais(pais){
        if(this.validarArreglo("Pais", pais)){
        console.log(`Validacion de Pais exitosa`)

        }
        
        
    }
    validarGenero(genero){
        if(this.validarArreglo("Generos", genero)){
            for(let item of genero){
                if(!Pelicula.listaGeneros.includes(item)) { 
                    console.error(`Genero(s) incorrectos ${genero.join(', ')}`);
                    Pelicula.generosAceptados();
                }
            }
        }
        console.log(`Validacion de Generos exitosa`)

    }

    validarCalificacion(calificacion){
        if(this.validarNumero("Anio de estreno", estreno)){
            if(!(/^([0-9]{4}$)/.test(estreno))){
                return console.error(`Anio de estreno "${calificacion}"`)
            }
        }
            
    }

  

}

//Pelicula.generosAceptados()

const pelicula = new Pelicula({
    id: 'tt1234567',
    titulo: "La babosa asesina",
    director: "Lucas Watchovski",
    estreno: 2022,
    pais: ["Mexico", "Francia"],
    genero: ["Action", "Comedy"],
    // calificacion:"8.7", 
})