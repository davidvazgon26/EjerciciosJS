using APIConPuntoNET;
using APIConPuntoNET.Services;
using Microsoft.EntityFrameworkCore;

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);  // Esta linea es para usar postgress en lugar de SQL Server


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Conexion a DB Postgress
builder.Services.AddDbContext<TareasContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("conexionDB")));
// al inyectar la interface se crea el objeto que nombramos HelloWorldService //Esta es la manera mas habitual
// builder.Services.AddScoped<IHelloWorldService, HelloWorldService>();
//Tambien se puede inyectar directamente con una arrow function asi:
builder.Services.AddScoped<IHelloWorldService>(p => new HelloWorldService());
//Inyectando Tareas y Categorias:
builder.Services.AddScoped<ICategoriaService, CategoriaService>();
builder.Services.AddScoped<ITareaService, TareasService>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// app.UseCors();  // Para manejar temas de seguridad y quien puede acceder a las rutas.

app.UseAuthorization();

//Aqui van los custome middlewares como UseWelcomePage que habilita una pagina de bienvenida en nuestra ruta si la visitas desde un browser.

// app.UseWelcomePage();

// app.UseTimeMiddleware();  // Para utilizarlo debes a la ruta al final agregar el parametro ?time

app.MapControllers();

app.Run();
