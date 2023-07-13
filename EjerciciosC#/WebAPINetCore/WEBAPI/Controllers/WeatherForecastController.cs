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

    private readonly ILogger<WeatherForecastController> _logger;

    private static List<WeatherForecast> ListWeatherForecast = new List<WeatherForecast>();

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
        if (ListWeatherForecast == null || !ListWeatherForecast.Any())
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
    //Ejercicio de distintas rutas
    [HttpGet(Name = "GetWeatherForecast")] //Manejo de distintas rutas
    [Route("OtraRutaParaGet")]
    [Route("OtraRutaParaGet33")]
    [Route("[Action]")]
    public IEnumerable<WeatherForecast> GetWw()
    {
        return ListWeatherForecast;
    }

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
