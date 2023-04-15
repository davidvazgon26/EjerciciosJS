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
console.log($linkDOM.getAttribute('style'))
console.log($linkDOM.style.backgroundColor)

//Tambien se pueden acceder las propiedades de la siguiente manera (tipo JSON):

console.log(window.getComputedStyle($linkDOM))
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

//Modificando con setProperty

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';
$linkDOM.style.marginTop = '1.5rem';

console.log($linkDOM.style)
console.log($linkDOM.getAttribute('style'))
console.log(window.getComputedStyle($linkDOM).getPropertyValue("padding"))

//usando mis variables CSS

const $html = document.documentElement, 
        $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
    varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

    console.log(varDarkColor, varYellowColor)

    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;

    // Modificando el valor de la variable para que se refleje en el navegador
    $html.style.setProperty("--dark-color", "red");
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

    $body.style.setProperty("background-color", varDarkColor);

    //Agregando y quitando clases de los tag de HTML

    const $card = document.querySelector('.card');

    console.log($card);
    console.log($card.className);
    console.log($card.classList);
    console.log($card.classList.contains("rotate-45"));
    $card.classList.add("rotate-45");
    console.log($card.classList.contains("rotate-45"));
    console.log($card.className);
    console.log($card.classList);
    $card.classList.remove("rotate-45");
    console.log($card.classList.contains("rotate-45"));
    $card.classList.toggle("rotate-45");
    console.log($card.classList.contains("rotate-45"));
    $card.classList.toggle("rotate-45");
    console.log($card.classList.contains("rotate-45"));
    $card.classList.toggle("rotate-45");
    $card.classList.toggle("rotate-45");
    $card.classList.replace("rotate-45", "rotate-135");
    $card.classList.add("opacity-80", "sepia");
    $card.classList.remove("opacity-80", "sepia");
    $card.classList.toggle("opacity-80", "sepia");

    const $whatIsDOM = document.getElementById('que-es');

    let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
    `;

    $whatIsDOM.innerText = text  //Esta fue creada para internet Explorer, no es parte del estandar
    $whatIsDOM.textContent = text  //Tampoco interpreta las etiquetas HTML
    $whatIsDOM.innerHTML = text  // Usa esta cuando tu texto tenga etiquetas HTML incluidas
    $whatIsDOM.outerHTML = text  // Reemplaza la etiqueta en cuestion para tener una correcta semantica en HTML
    

    //recorriendo los nodos o elementos

    const $cards = document.querySelector(".cards")

    console.log($cards)
    console.log($cards.children)
    console.log($cards.children[2])
    console.log($cards.parentElement)
    console.log($cards.parentNode)
    console.log($cards.firstChild)
    console.log($cards.firstElementChild)
    console.log($cards.lastChild)
    console.log($cards.lastElementChild)
    console.log($cards.nextElementSibling)

    //El ancestro mas cercano que le demos

    console.log($cards.closest("ul"));


    // Creando etiquetas dinamicas

/*

//insertar una tarjeta nueva
    const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode('Animals');

    $img.setAttribute("src", "https://placeimg.com/200/200/animals")
    $img.setAttribute("alt", "Animals")
    $figure.classList.add("card")
    $figcaption.appendChild($figcaptionText)
    $figure.appendChild($img)
    $figure.appendChild($figcaption)
    $cards.appendChild($figure)

    */

    // Otro ejemplo
    const estaciones = ['Primavera','Verano','Otono','Invierno']
    const $ul = document.createElement('ul');

    document.write("<h3>Estaciones del Año</h3>");
    document.body.appendChild($ul);

    estaciones.forEach(el => {
        const $li = document.createElement('li')
        $li.textContent = el;
        $ul.appendChild($li);
    })


    //Usando fragment para insertar en el DOM

    const meses = ['Enero',"Febrero",'Marzo',"Abril",'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']


    const $ul3 = document.createElement('ul');
    const $fragment = document.createDocumentFragment()

    meses.forEach(el => {
        const $li = document.createElement('li');
        $li.textContent =el;
        $fragment.appendChild($li)
    })

    document.write("<h3>Meses del Anio</h3>");
    $ul3.appendChild($fragment);
    document.body.appendChild($ul3);  


    //Trabajando con los templates

    const $template = document.getElementById('template-card').content,
    $fragment2 = document.createDocumentFragment();
    const cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        },
    ]

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src", el.img)
        $template.querySelector("img").setAttribute("alt", el.title)
        $template.querySelector("figcaption").textContent = el.title;

        //clonar el template

        let $clone = document.importNode($template, true);
        $fragment2.appendChild($clone);
    })

    // $cards.appendChild($fragment2) // Agrega las tarjetas creadas con el template.

    //Utilizando replace, remove e insert a la antigua  (clase 70)

    const $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true) // para clonar el nodo completo hay que usar true

    $newCard.innerHTML=`
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card") //Agregando estilos a la card a insertar

    // $cards.replaceChild($newCard, $cards.children[2]); // Reemplazando el nodo 2 de las cards
    // $cards.removeChild($cards.lastElementChild);  // Eliminando la ultima card de las cards quedando solo 4
    // $cards.insertBefore($newCard, $cards.firstElementChild); // Inserte card al inicio de las card pero se pierde la que se reemplazo
    // document.body.appendChild($cloneCards) //Se clono todas las cards


    // Utilizando los nuevos metodos para reemplazar insertar y remover en el DOM (clase 71)

    /* 
.insertAdjacent...
    .insertAdjacentElement(position,el)  // Igual a un appendChild
    .insertAdjacentHTML(position,html) // Igual a un innerHTML que agrega contenido HTML
    .insertAdjacentText(position,text) // Igual a un textContent

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

const $newCard2 = document.createElement("figure");
const $newCard3 = document.createElement("figure");

let $contentCard=`<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>`;

$newCard2.classList.add("card")
$newCard2.insertAdjacentHTML("beforeend", $contentCard)

$newCard3.classList.add("card")
$newCard3.insertAdjacentHTML("beforeend", $contentCard)
$newCard3.querySelector("figcaption").insertAdjacentText("beforeend", "Any")

// $cards.insertAdjacentElement("beforebegin", $newCard2);
// $cards.insertAdjacentElement("afterbegin", $newCard2);
// $cards.insertAdjacentElement("beforeend", $newCard2);
// $cards.insertAdjacentElement("afterend", $newCard3);


//Tambien ya puedes utilizar los metodos de jquery nativamente en js

$cards.prepend($newCard3)
// $cards.append($newCard3)
// $cards.before($newCard3)
// $cards.after($newCard3)


// Clase 72 eventos o manejadores de eventos  (evenHandler)


function holaMundo(){
    alert("Hola desde el DOM")
    console.log(event);
}

function saludar(nombre = "desconocido"){
    alert(`Holliiiii ${nombre}`)
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e)=>{
    console.log(e.type)
    console.log(e.target)
    console.log(event)
})


$eventoMultiple.addEventListener("click", ()=> saludar("David"));

const removerDobleClick = (e) =>{
    alert("Removiendo el evento de tipo "+ e.type);
    console.log(e)
    $eventoRemover.removeEventListener("dblclick", removerDobleClick)
    $eventoRemover.disabled = true;
}

    $eventoRemover.addEventListener("dblclick", removerDobleClick)

// Clase 74 del DOM, Flujo de Eventos (Burbuja y Captura)

const $divsEventos = document.querySelectorAll(".evento-flujo div")
const $linksEventos = document.querySelector(".evento-flujo a")

console.log($divsEventos)

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click que origino fue ${e.target.className}`);
    e.stopPropagation();
}

$divsEventos.forEach(div => {
    div.addEventListener("click", flujoEventos) 
    // div.addEventListener("click", flujoEventos, true) //El tercer parametro invierte la burbuja o propagacion 
        //Ejecutar el vento solo una vez, que simula el montaje de un componente solo en carga
        // div.addEventListener("click", flujoEventos,{
        //     capture:false, //Burbuja false, Captura True
        //     once: true, //ejecuta solo una vez
        // })
})

$linksEventos.addEventListener("click", (e)=>{
    e.preventDefault();  //Previene que no vaya a mi sitio personal con el a href en una nueva pestana.
    e.stopPropagation();
    alert("Hola, yo soy David")
})
