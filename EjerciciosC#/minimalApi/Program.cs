var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Declaración e inicialización de un arreglo de enteros
int[] numeros = { 1, 2, 3, 4, 5 };


app.MapGet("/", () => "Hello World!");
app.MapGet("/api", () => "Hello api!");
app.MapGet("/arrayNumber", () => numeros);

app.Run();
