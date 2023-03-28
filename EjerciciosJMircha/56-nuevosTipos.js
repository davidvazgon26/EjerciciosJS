
let aleatorio = Math.round(Math.random()*100+5);

const objUsuarios = {
    propiedad:'Valor',
    [`id_${aleatorio}`]: "Valor aleatorio"
};

console.log(objUsuarios);

const usuarios = ["Jon", "David", "Roko"];

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios);



//El ejemplo de uso real que d Jon es como en su sitio lo utiliza para crear rutas url dinamicas para sus post

// Extracto de codigo del sitio de Jon:

/*

postSlugs.map((slug)=>{
    let newURL = [`/${slug}`];
    postsURLs[newURL]={
        page: "/post",
        query:{
            slug,
        }
    };
});


------------ archivo tipo *.md
    title: Flexbox CSS
    desciption: En esta nita te compatimos apuntes blbalbalalbbla...
    slug: hola-mundo
    category: css 
    date: 2019-12-06T13:00:00
    poster:/img/blog/flex-conceptos.png
    ----------

    */

/*

Las propiedades calculadas son una forma de definir una propiedad de un objeto cuyo nombre se determina mediante una expresión. En lugar de definir una propiedad utilizando la sintaxis de punto o de corchetes, que requieren que el nombre de la propiedad sea una cadena literal, se puede utilizar una expresión entre corchetes para definir el nombre de la propiedad.

Por ejemplo, supongamos que tenemos un objeto llamado persona con una propiedad llamada nombre. Podemos agregar una nueva propiedad calculada llamada edad de la siguiente manera:

const persona = {
  nombre: 'Juan',
  [edad]: 25
};


En este ejemplo, el nombre de la propiedad edad se determina dinámicamente mediante una expresión entre corchetes. En este caso, la expresión simplemente evalúa la variable edad, que se asume que tiene un valor de 25.

Las propiedades calculadas son especialmente útiles cuando se necesita definir propiedades de un objeto de manera dinámica en tiempo de ejecución.


*/