using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Linq;
using System.Threading.Tasks;

public class TimeMiddleware
{
    private readonly RequestDelegate _next; //Permite llamar al siguiente middleware

    public TimeMiddleware(RequestDelegate nextRequest)
    {
        _next = nextRequest;
    }

    public async Task Invoke(HttpContext context) //Viene toda la información del request
    {  //Debe venir por defecto en todos los middlewares

        await _next(context); //Siempre debes llamar a tu siguiente middleware antes de tu logica para evitar errores o funcionamiento inadecuadi

        if (context.Request.Query.Any(p => p.Key == "time"))
        {
            await context.Response.WriteAsync(DateTime.Now.ToShortTimeString());
        }
    }
}

public static class TimeMiddlewareExtension
{
    public static IApplicationBuilder UseTimeMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<TimeMiddleware>();
    }
}
