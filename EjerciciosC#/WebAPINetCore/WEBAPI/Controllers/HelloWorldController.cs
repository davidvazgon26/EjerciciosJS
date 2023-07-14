using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers;

[ApiController]
[Route("api/[controller]")]


public class HelloWorldController : ControllerBase
{
    IHelloWorldService helloWorldService; //Se inyecta el servicio

    public HelloWorldController(IHelloWorldService helloWorld)
    {
        helloWorldService = helloWorld; //Lo recibimos en el constructor
    }

    public IActionResult Get()
    {
        return Ok(helloWorldService.GetHelloWorld()); //Lo utilizo
    }
}