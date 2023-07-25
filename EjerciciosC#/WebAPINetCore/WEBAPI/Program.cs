using Microsoft.EntityFrameworkCore;
using WEBAPI.Services;
using WEBAPI.Models;


AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);  // Esta linea es para usar postgress en lugar de SQL Server


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();  //Implementacion de swagger, ruta: /swagger/index.html

builder.Services.AddDbContext<TareasContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("conexionDB")));

//Las inyecciones de dependencias van antes del Build(), esta la utilizamos en 
builder.Services.AddScoped<IHelloWorldService, HelloWordServices>(); // Cada que se inyecte la interface se crear un nuevo objeto  HelloWorld. Ahora crearemos un controlador que utilice esta dependencia.

// Inyectando las dependencnias para Categorias y Tareas...  con esto quedan listas para usarse dentro de un Controller
builder.Services.AddScoped<ICategoriaService, CategoriaService>();
builder.Services.AddScoped<ITareasService, TareasService>();


/*
   addscoped = Se crea una nueva instancia a nivel de controlador o clase y siempre se inyecta esta misma
   addsingleton = una unica instancia a nivel de TODA la API o proyecto

   Se recomienda utilizar addscoped
*/

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) //Se recomienda utilizar la interface de swagger solo para desarrollo, no para produccion.
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

//app.UseWelcomePage(); // Middleware de pagina de Bienvenida. (ojo desabilita las pruebas de get en el navegador)

// app.UseTimeMiddleware();

app.MapControllers();

app.Run();


/*
El orden de los middlewares es asi:

request ->

ExceptionHandler
HTTS
HttpRedirection
Static Files
Routing
CORS
Authentication
Authorization

Custom middlewares

End Points

*/