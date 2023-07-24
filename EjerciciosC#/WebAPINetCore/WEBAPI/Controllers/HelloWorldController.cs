using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers;

[ApiController]
[Route("api/[controller]")]


public class HelloWorldController : ControllerBase
{
    IHelloWorldService helloWorldService; //1.- Se inyecta el servicio

    public HelloWorldController(IHelloWorldService helloWorld) //2.- Lo pasamos como argumento
    {
        helloWorldService = helloWorld; //3.- Lo recibimos o iniciamos en el constructor
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(helloWorldService.GetHelloWorld()); //4.- Lo utilizo

    }
}