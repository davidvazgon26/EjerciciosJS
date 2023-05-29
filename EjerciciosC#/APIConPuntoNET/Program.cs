var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// al inyectar la interface se crea el objeto que nombramos HelloWorldService //Esta es la manera mas habitual
// builder.Services.AddScoped<IHelloWorldService, HelloWorldService>();
//Tambien se puede inyectar directamente con una arrow function asi:
builder.Services.AddScoped<IHelloWorldService>(p => new HelloWorldService());


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
