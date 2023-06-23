## Crear certificados propios

usa el siguiente comando: dotnet dev-certs https --trust

## Cream mi aplicacion web con:

dotnet new mvc -o HolaMundoMVC

## Indicaciones

- El controler tiene que tener la ruta a las vistas y debe llamarse la ruta igual que la vista creada, en este ejemplo creamos la vista About

- Los archivos finales estan en wwwroot

- No olvides compilar y correc con dotnet build y dotnet run

- Cada vista debe tener su controllador, por ejemplo aqui creamos la carpeta Escuela y ahi pondremos las vistas referentes a ella, pero tambien creamos el controllador con el nombre de la carpeta por coonvencion y ahi agregamos las rutas como en este caso, se agregan:

  - Namespace
  - Nombre de la clase que debe ser el mismo que el del archivo y debe heredar de la clase controller
  - por ultimo utilizamos la interfaz IActionResult para llamar al metodo View que entiende cual es la vista que debe presentar por la configuracion que realizamos antes.
  - Al correr nuestra aplicacion y querer acceder a la ruta debes utilizar la ruta raiz/controlador/nombredelavista que es este caso seria tu localhost + controlador Escuele(sin el contnroller) + Index (que fue el nombre que se le puso al metodo) quedando: http://localhost:5259/Escuela/Index
