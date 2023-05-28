### Librerias a instalar para este proyecto:

    * "Microsoft.EntityFrameworkCore.Design" Version="7.0.5"
    * "Microsoft.EntityFrameworkCore.InMemory" Version="7.0.5"  // Para tener entityFramework en memoria para pruebas.
    * "Npgsql.EntityFrameworkCore.PostgreSQL" Version="7.0.4"


    Recuerda Migracion para tener diferentes configuraciones de la base de datos conforme lo necesitemos.

Preguntas:

¿Cuál es el nombre de la librería para configurar Entity Framework en memoria?
Microsoft.EntityFrameworkCore.InMemory

¿Cómo se llama normalmente a la clase que contiene la configuracion de EF?
Contexto

¿Qué representa el connection string?
La cadena que contienen la informacion para conectarse a la base de datos (servidor, base de datos, usuario y contraseña).

¿Cómo se llama la clase de la que debemos heredar para configurar nuesto model usando Entity Framework?
DbContext

¿Cuál es el comando para crear una nueva migración usando dotnet CLI?
dotnet ef add-migration nombreMigracion

¿Cuál es la función en Fluent API que nos permite indicar que una columna NO es requerida?
.IsRequired(false)

¿Cuál es el método que nos permite filtrar la informacion que obtenemos desde Entity Framework?
.Where()

¿Cuál es el comando que nos permite actualizar la base de datos y ejecutar todas las migraciones?
dotnet ef database update

¿Cuál es el método que nos permite agregar un nuevo registro en el contexto de Entity Framework?
AddAsync
