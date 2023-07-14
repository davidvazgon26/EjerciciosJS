var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Las inyecciones de dependencias van antes del build
builder.Services.AddScoped<IHelloWorldService, HelloWordServices>(); // Cada que se inyecte la interface se crear un nuevo objeto  Hellow. Ahora crearemos un controlador que utilice esta dependencia.

/*
   addscoped = Se crea una nueva instancia a nivel de controlador o clase y siempre se inyecta esta misma
   addsingleton = una unica instancia a nivel de TODA la API o proyecto

   Se recomienda utilizar addscoped
*/

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
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
