using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers;

[ApiController]
[Route("api/[controller]")]


public class HelloWorldController : ControllerBase
{
    IHelloWorldService helloWorldService; //1.- Se inyecta el servicio

    TareasContext dbcontext;

    public HelloWorldController(IHelloWorldService helloWorld, TareasContext db) //2.- Lo pasamos como argumento
    {
        helloWorldService = helloWorld; //3.- Lo recibimos o iniciamos en el constructor
        dbcontext = db;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(helloWorldService.GetHelloWorld()); //4.- Lo utilizo

    }

    [HttpGet]
    [Route("createdb")]
    public IActionResult CreateDatabase()
    {
        dbcontext.Database.EnsureCreated();
        return Ok();
    }
}