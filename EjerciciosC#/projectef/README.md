### Librerias a instalar para este proyecto: (AOI Minimalista)

Comando para crear proyecto desde VSC:

- dotnet create new web //Desde el directorio que deseamos usar para nuestro proyecto

#### Paquetes que necesitamos en nuestro proyecto

- EntityFrameworkCore
- EntityFrameworkCore.inMemory
- EntityFrameworkCore.PostgreSQL
- EntityFrameworkCore.Design
- Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore

Si quieres integrar suagger incluye:

Swashbuckle.AspNetCore

- "Microsoft.EntityFrameworkCore.Design" Version="7.0.5"
- "Microsoft.EntityFrameworkCore.InMemory" Version="7.0.5" // Para tener entityFramework en memoria para pruebas.
- "Npgsql.EntityFrameworkCore.PostgreSQL" Version="7.0.4"

Pasos:

- Crea tus objetos que seran tus tablas (la clase que representa a la tabla en la carpeta Models)
- Crea la configuracion de conexion (Nombre-Context.cs)
- Crea tu connectionString en appsettings.json
- Conectar en Program.cs (el Context con builder.Services. AddContext(para inMemoria o SQL o Postgress para conectar a la BD.))

#### Fluent API

- Fluent API es la que usa las arrow functions para configurar las tablas. (sobreescribes el metodo OnModelCreating en el Context)

- Existen 2 formas de crear el modelo: Code First (tengo el codigo y en base a este se crea la BD) o DataBase First (ya tengo la base de datos y en base a eso se crea el codigo.)

#### Migraciones (snapshots)

- Asegurarse de tener el CLI de dotnet (dotnet tool install --global dotnet-ef)

- Actualizar la hherramienta con (dotnet tool update --global dotnet-ef)

- Iniciar las migraciones: (dotnet ef migrations add firstMigration o baseMigration)

Recuerda Migracion sirve para tener diferentes configuraciones o estados de la base de datos conforme vayamos modificandola.

- Aplicar la configuracion a la base de datos con: (dotnet ef database update "nombre del script") //Que en este caso seria firstMigration o baseMigration

* Desde aqui ya podemos trabajar con la api (la encuentras en Program.cs el ejemplo)

puedes agregar la parte de swagger y la ruta inicial con este codigo:

if(app.Enviroment.IsDevelopment())
{
app.UseSwagger();
app.UseSwaggerUI();
}

app.UseHttpsRedirection();

** Recuerda que las apis minimas se recomiendan para MVP o proyectos pequenos, para proyectos grandes probablemente sea mejor utilizar Controllers **

---

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
