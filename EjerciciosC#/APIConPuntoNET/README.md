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

creamos la carpeta Services
dentro generamos el archivo HelloWorldService.cs con su clase e interface.

En Program.cs hacemos la inyeccion. (antes del Build)

existen diferentes tipos de implementacion:

- AddScope se inyecta la misma instancia en el contexto o al nivel de controlador o a nivel de clase.
- AddSingleton se inyecta una instancia para toda la aplicacion lo que consume mucha memoria.

- Creamos un controlador (lo puedes nombrar igual)en la carpeta de los controller, despues lo utilizamos como se ve en el archivo Program.cs

### Loggin a API

Viene un logger por default configurado en nuestro archivo WeatherForecastController el cual podemos utilizar en cada ruta de nuestra API para retornar algunos mensajes a la consola como el de getDavid en WeatherForecastController.

Esto se puede configurar desde los archivos appsettings.json y appsettings.Development.json

puedo indicar el nivel de error en:

"LogLevel": {
"Default": "Information",
"Microsoft.AspNetCore": "Warning"
}

    y los diferentes tipos que tenemos son:

    Trace = 0, Debug = 1, Information = 2, Warning = 3, Error = 4, Critical = 5, y None = 6

### Documentacion de nuestra API con Suagger

Ya viene pre cargado y configurada la libreria y el codigo para implementar en nuestro proyecto, puedes ver en el archivo csproj la dependencia y la configuracion eb Program.cs

para acceder a esta desde un navegador solo debemos correr nuestra aplicacion e ingresar a la ruta inicial por ejemplo: http://localhost:5052/swagger

** ojo debes seguir el standar open API, de no seguirlo tendras algunos errores al ver la pagina **

## Finalizacion de nuestra API

Ahora que ya tenemos los conocimientos necesarios, vamos a crear una version mas cercana a la realidad realizando algunos cambios en el codigo e incluyendo algunas dependencias que tambien utilizamos en nuesta version de api minimalista buscando en nuget.org:

#### Paquetes que necesitamos en nuestro proyecto

- EntityFrameworkCore (dotnet add package Microsoft.EntityFrameworkCore --version 7.0.5)
- EntityFrameworkCore.inMemory (dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 7.0.5)
- EntityFrameworkCore.PostgreSQL (dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 7.0.4)
- EntityFrameworkCore.Design (dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0.5)
- Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore (dotnet add package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore --version 7.0.5)
