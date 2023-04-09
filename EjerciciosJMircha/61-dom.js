// Aqui vamos a manipular el DOM de la clase 60

console.log("**************Elementos del DOM******************");
console.log(window.document)
console.log(" window.document Es igual a solo document")
console.log(document)

console.log("Mostrando solo el encabezado del archivo html")
console.log(document.head)

console.log("Mostrando solo el cuerpo del archivo html")
console.log(document.body)

console.log("Obteniendo algun tag especifico")
console.log(document.documentElement)

console.log("Otros metodos:")

console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)

//Para este metodo debes seleccionar algo de la pagina antes de 5 segundos
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 4000);

document.write("<h3>HOla mundo desde el DOM</h3>")

//    Clase 62 

//Estos ya no suelen utilizarce:

console.log(document.getElementsByTagName("li")) //Tratar de ya no usar

console.log(document.getElementsByClassName("card")) //Tratar de ya no usar

console.log(document.getElementsByName("nombre")) //Tratar de ya no usar

console.log(document.getElementById("menu"))

// reemplazados por :

console.log(document.querySelector("#menu"))
console.log(document.querySelector(".card"))
console.log(document.querySelector("li"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)


document.querySelectorAll("a").forEach(el => console.log(el))

console.log(document.querySelectorAll(".card")[2])

console.log(document.querySelectorAll("#menu li"))

// Data atributes

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang")); 
console.log(document.querySelector(".link-dom").href); 
console.log(document.querySelector(".link-dom").getAttribute("href")); 

//Modificando elementos del DOM
console.log(document.documentElement.lang)
document.documentElement.lang = "en"
console.log(document.documentElement.lang)

//Regresando al valor iniciaal pero usando setElement
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang) 

const $linkDOM = document.querySelector(".link-dom"); // Se acostumbra en las variables que guardan elementos del DOM agregar al inicio del nombre el signo de "$" para identificarles

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "nooperner"); // se agrega como buena practica al abrir otra pestana para que no guarde relacion
$linkDOM.setAttribute("href", "https://www.google.com")

//Ver si existe un elemento 
console.log($linkDOM.hasAttribute("rel"))
//quitarlo
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

//Trabajando con Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);

// modificando dataAttribute
$linkDOM.setAttribute("data-description", "modelo de objeto del documento")
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.dataset.description = "Modificando otra vez"
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.hasAttribute("data-description"));



//ver mis estilos

console.log($linkDOM.style)