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

### Minimal API VS Web API

Minimal API: (dotnet new web)

- necesita menos lineas de codigo
- Facilita la curva de aprendizaje
- Controller ya no existe
- las rutas son funciones (Arrow functions)
- Orientado a proyectos simples, microservicios y Azure functions o AWS Lambda.
- todas las apis estan en un solo archivo

Web API:

- Utiliza el modelo MVC
- Mas sencillo de escalar
- Util para proyectos de cualquier tamanio.
- puedo modularizar mis controladores

### Middlewares

Serie de instrucciones de codigo que se agregan al ciclo de vida de una peticion HTTP
Los middlewares son parecidos a lo que tenemos en devops con los pipelines

Los middlewares tambien tienen una estructura o un orden para funcionar correctamente, algunos de los mas usados y el orden que deberian tener al usarlos es el siguiente:

Request:

- ExceptionHandler
- HSTS
- HttpRedirection
- Static Files
- Routing
- CORS
- Authentication
- Authorization
- Custom middlewares

Estos los encuentras en el archivo Program.cs

En este ejercicio crearemos una carpeta middlewares para agregar nuestros custom middlewares llamado TimeMiddleware.cs y la agregaremos en Program.cs para que se incluya en el flujo del ciclo de vida de una peticion HTTP

### Inyeccion de Dependencias.

Este concepto nos ayuda a no tener que estar creando objetos o referencias al objeto, sino a inyectar esta dependencia para poder utilizarla.

Ejemplo desde la creacion hasta su inyeccion:
