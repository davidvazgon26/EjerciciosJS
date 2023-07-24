var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Declaración e inicialización de un arreglo de enteros
int[] numeros = { 1, 2, 3, 4, 5 };

/*en minimal api es para microservicios o Azure Functions ya que no esta disenado para proyectos grandes ya que todos las rutas se encontraran aqui, abajo unos ejemplos de su uso, el mapeo es a travez de fuciones*/


app.MapGet("/", () => "Hello World!");
app.MapGet("/api", () => "Hello api!");
app.MapGet("/arrayNumber", () => numeros);

app.Run();
