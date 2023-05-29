using Microsoft.AspNetCore.Mvc;

namespace APIConPuntoNET.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloWorldController : ControllerBase
{
    //Inyeccion
    IHelloWorldService helloWorldService;

    TareasContext dbcontext;

    //Lo recibimos usando el constructor
    public HelloWorldController(IHelloWorldService helloWorld, TareasContext db)
    {
        helloWorldService = helloWorld;
        dbcontext = db;
    }

    //Aca lo utilizamos o implementamos.
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(helloWorldService.GetHelloWorld());
    }

    [HttpGet]
    [Route("createdb")]
    public IActionResult CreateDatabase()
    {
        dbcontext.Database.EnsureCreated();
        return Ok();
    }
}