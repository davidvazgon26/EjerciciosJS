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