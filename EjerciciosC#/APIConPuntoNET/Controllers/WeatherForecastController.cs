using Microsoft.AspNetCore.Mvc;

namespace APIConPuntoNET.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public static List<WeatherForecast> ListWeatherForecast = new List<WeatherForecast>();

    //Constructor de la lista
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
    // [Route("Get/weatherforecast")]   // va a funcionar con la ruta original y con esta tambien el metodo get
    // [Route("Get/weatherforecast2")]  //Puedo crear las rutas que necesite
    // [Route("[action]")]  //Tomara como valida el nombre de nuestra accion, en este caso Get, que es el nombre de nuestro metodo aqui abajo.

    /*
    esta ruta funcionara con:
    http://localhost:5223/weatherforecast
    http://localhost:5223/weatherforecast/get/weatherforecast
    http://localhost:5223/weatherforecast/get/weatherforecast2
    http://localhost:5223/weatherforecast/getdavid
    */
    public IEnumerable<WeatherForecast> GetDavid()
    {
        // _logger.LogInformation("Retornando la lista de weatherforecast desde GetDavid");
        _logger.LogDebug("Retornando la lista de weatherforecast desde GetDavid");
        return ListWeatherForecast;
    }

    [HttpPost]
    public IActionResult Post(WeatherForecast weatherForecast)
    {
        ListWeatherForecast.Add(weatherForecast);

        return Ok();
    }

    [HttpDelete("{index}")]
    public IActionResult Delete(int index)
    {
        ListWeatherForecast.RemoveAt(index);

        return Ok();
    }
}
