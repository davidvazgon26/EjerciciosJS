## Proyecto de API con .NET

### Conceptos iniciales:

API: Application Programming Interface

Rest : Representational State Transfer (reglas (como el uso de los verbos HTTP Verbs(GET,POST, PUT,PATCH, DELETE) ) a seguir para eficiencia y escalabilidad)

- GET: Obtener registro o registros
- POST: Creacion de un registro o recurso
- PUT: Actualizacion de un registro
- PATCH:Actualizacion parcial de un registro
- Delete: Eliminacion de un regstro

Rest recomienda manejar una URL por cada recurso que tengamos

** API y Rest son conceptos teoricos, no son una tecnologia. **

Respuestas HTTP:
Informativas : 100-199
Satisfactorias : 200-299
Redirecciones : 300-399
Error Cliente : 400-499
Error Server : 500-599

### Inicio de nuestro proyecto de API con .NET

- Iniciar proyecto:

  - Comando para ver ayuda de creacion de tipo de proyecto: dotnet new
  - Comando para ver lista de tipos de proyecto en .NET: dotnet new --list

  Para este proyecto usaremos webapi (ojo, tambien existe web pero es para crear api minimalista, webapi es mas completo)

  - Comando dotnet new webapi
  - Ir al proyecto con . code

  ## MVC

  Concepto de Modelo Vista controlador

  Model = Datos
  View = interfaz del usuario
  Controller = logica

  aqui se utilizara MXC, donde eliminas la vista y usas solo el modelo y controlador ya que una API no tiene interfaz de usuario como tal.

Cada Modelo debe estar relacionado a un controlador (ejemplo en la plantilla con WeatherForecast.cs y WeatherForecastController.cs) // No olvides agregar la palabra controller a los archivos de Controller para identificarlos.
