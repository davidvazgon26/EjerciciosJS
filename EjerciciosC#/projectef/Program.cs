using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using projectef;

var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddDbContext<TareasContext>(p => p.UseInMemoryDatabase("TareasDB"));
// builder.Services.AddSqlServer<TareasContext>(p => p.UseInMemoryDatabase("Data Source= NombreDelServidor; Initial Catalog=NameDBDb; user id=sa;password=miPassword"));
builder.Services.AddDbContext<TareasContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("cnTareas")));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/dbconexion", async ([FromServices] TareasContext dbContext) =>
{
    dbContext.Database.EnsureCreated();
    return Results.Ok("Base de datos en memoria: " + dbContext.Database.IsInMemory());
});

app.Run();
