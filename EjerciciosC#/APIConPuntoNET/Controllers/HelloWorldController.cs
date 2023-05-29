using Microsoft.AspNetCore.Mvc;

namespace APIConPuntoNET.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloWorldController : ControllerBase
{
    //Inyeccion
    IHelloWorldService helloWorldService;

    //Lo recibimos usando el constructor
    public HelloWorldController(IHelloWorldService helloWorld)
    {
        helloWorldService = helloWorld;
    }

    //Aca lo utilizamos o implementamos.
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(helloWorldService.GetHelloWorld());
    }
}