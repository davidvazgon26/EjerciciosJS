using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers;

[ApiController]
[Route("api/[controller]")] //Puedo manipular una parte estatica ya que controller es dinamica y toma el nombre del controlador, en este caso le agregue la parte de api.
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger; //Esta es la implementacion por defecto de webapi de una interface de logger, es decir los logs en los endpoint donde lo apliques.
    /*tipos de loggers: Trace=0, Debug=1, Information=2, Warning = 3, Error = 4, Critical = 5, None = 6*/

    //Ojo no olvides cambiar este parametro en el archivo de appsetings.Development.json sino, los cambios no los tendra en cuenta.

    private static List<WeatherForecast> ListWeatherForecast = new List<WeatherForecast>();

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
        if (ListWeatherForecast == null || !ListWeatherForecast.Any()) //valido si es nula o esta vacia la lista
        {
            ListWeatherForecast = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
       .ToList();
        }

    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return ListWeatherForecast;
    }

    /********************************************/

    //Ojo comente todo el end point para que funcionara swagger

    //Ejercicio de distintas rutas
    //   [HttpGet] //Manejo de distintas rutas
    // [Route("OtraRutaParaGet")]
    // [Route("OtraRutaParaGet33")]
    // [Route("[Action]")] //Action permite usar el nombre del metodo como parte de la ruta, es decir: api/WeatherForecast/GetWw
    // public IEnumerable<WeatherForecast> GetWw()
    // {
    //     _logger.LogInformation("Retorna la lista tipo wwatherforecast");
    //     return ListWeatherForecast;
    // }



    [HttpGet("otro")]
    public IEnumerable<WeatherForecast> ById(int index)
    {
        return new List<WeatherForecast> { ListWeatherForecast[index] };
    }

    [HttpPost]
    public IActionResult Post(WeatherForecast weatherForecast)
    {
        ListWeatherForecast.Add(weatherForecast);

        return Ok();
    }

    [HttpDelete]
    public IActionResult Delete(int index)
    {
        if (index < 0 || index >= ListWeatherForecast.Count)
        {
            return NotFound(); // Devuelve una respuesta HTTP 404 si el índice está fuera de rango
        }

        ListWeatherForecast.RemoveAt(index);

        return Ok();
    }
}
