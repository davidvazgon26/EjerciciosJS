## Curso de Angular Componentes By Platzi

Link al curso: https://platzi.com/clases/2486-angular-componentes/41176-que-son-los-componentes/

- Crear proyecto: ng new "nombre del Proyecto"
  - yes a routing
  - elegir SCSS

* Componente por defecto app.component(html, scss, spec, ts)

probar (correr proyecto): ** ng serve ** (no olvides ingresar en el nuevo directorio de tu proyecto)

- Te debe abrir una pagina con informacion de Angular, documentacion etc...
- Crea tu primer componente con el comando: ng generate component xyz O puedes usar iniciales y ruta de tu carpeta como:

ng g c components(ruta)/img(nombre del componente)

- un componente esta dividido en HTML, CSS, Test y la logica con js o ts
- en el archivo ts esta el decorador que es el que le dice al compilador cuales son las partes de este componente (todo lo que esta dentro de @Component) y como llamar a nuestro componente desde otro componente (selector: 'nombre')

* Recuerda que si usas ts debes usar programacion OOP o tipado estricto.
* Para mostrar valores de nuestras variables del archivo ts debes llamarlas en el archivo html con "{{valor}}" y por consecuencia dicho valor debe existir.
* Al parecer anteriormente tenias que implementar una inteface (en este caso OnInit) y crear tu constructor, pero en este ejercicio no fue necesario incluirlo y nuestro componente funciono.
* y al recibir una implementacion de una interface tendriamos que implementar sus metodos...
* al igual que en React podemos pasarle valores o parametros al componente, solo debemos indicar que esa propiedad del componente recibe parametros con la palabra clave "@Input()" (hay que importar el decorador) antes del parametro y en el componente se debe llamar el valor igual.

archivo.html
`<app-img img="Este valor viene desde el componente en app.component.html"></app-img>`
archivo.ts
`

`
