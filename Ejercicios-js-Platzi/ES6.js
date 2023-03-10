//Algunas de las mejoras introducidas en ES6:

/**
 Sintaxis de clases: ES6 introduce una nueva sintaxis para la creación de clases en JavaScript. Esto hace que el código sea más fácil de leer y entender, especialmente para desarrolladores con experiencia en lenguajes orientados a objetos. Ejemplo:
 */

 class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  const persona = new Persona("Juan", 30);
  persona.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."

  /**
   Template literals: ES6 introduce una nueva sintaxis para crear cadenas de texto de manera más sencilla y legible. Esto permite la interpolación de variables y expresiones dentro de las cadenas de texto. Ejemplo:
   */

   const nombre = "Davd";
   const edad = 30;
   console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); // Output: "Hola, mi nombre es Juan y tengo 30 años."


   /**
    Arrow functions: ES6 introduce una nueva sintaxis para crear funciones anónimas de manera más corta y sencilla. Esto hace que el código sea más legible y fácil de escribir. Ejemplo:
    */

    const numeros = [1, 2, 3, 4, 5];
    const dobles = numeros.map((n) => n * 2);
    console.log(dobles); // Output: [2, 4, 6, 8, 10]


    /**
     Spread operator: El spread operator es una característica que permite expandir un array o un objeto en una lista de valores. Se representa con los tres puntos (…) y se utiliza para copiar elementos de un array o para combinar elementos de varios arrays en uno solo. También se utiliza para pasar argumentos a una función de manera dinámica. Ejemplo:
     */

     const numeross = [1, 2, 3];
     const nuevosNumeros = [...numeross, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

     console.log(nuevosNumeros);

     /**
      Destructuring: ES6 introduce una nueva sintaxis para asignar valores de un objeto o un array a variables de manera más sencilla y legible. Ejemplo:
      */

      const personad = { nombred: "Juan", edadd: 30 };
      const { nombred, edadd } = personad;
      console.log(nombred); // Output: "Juan"
      console.log(edadd); // Output: 30

      /**
       Nuevos métodos de arrays: ES6 incluye métodos como “Array.prototype.find” y “Array.prototype.findIndex” que facilitan la búsqueda de elementos en un array.
       */

       const numerosA = [1, 2, 3, 4, 5, 3, 3]; // Trae la primera coincidencia.
       const encontrado = numerosA.find((n) => n === 3);
       console.log(encontrado); // Output: 3

       /**
        Manejo de promesas: ES6 incluye mejoras en el manejo de promesas, permitiendo la utilización de métodos como “Promise.prototype.finally” para ejecutar código independientemente del resultado de la promesa.
        */

        const miPromesa = new Promise((resolve, reject) => {
            // código
            // new Error('Algo fallo')
            console.log("Entro a la promesa")
          });

          miPromesa.finally(() => console.log('Promesa finalizada'));


          // Tambien en esta version salio try catch para el manejo de excepciones.