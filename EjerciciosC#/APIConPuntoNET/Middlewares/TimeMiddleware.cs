public class TimeMiddleware
{

    //middleware disenado para mostrar la hora si cualquiera de las rutas de la api tiene el parametro ?time
    readonly RequestDelegate next;  //Esta linea te manda al siguiente middleware

    public TimeMiddleware(RequestDelegate nextRequest)
    {
        next = nextRequest;
    }

    public async Task Invoke(Microsoft.AspNetCore.Http.HttpContext context)
    {
        await next(context);  //Invoka al middleware que sigue

        if (context.Request.Query.Any(p => p.Key == "time"))
        {
            await context.Response.WriteAsync(DateTime.Now.ToShortTimeString());
        }

        // Si pones aca await next (context) como ya modificaste los datos solo te mostrara la hora.
    }


}

public static class TimeMiddlewareExtension
{
    public static IApplicationBuilder UseTimeMiddleware(this IApplicationBuilder builder)
    {

        return builder.UseMiddleware<TimeMiddleware>();
    }
}

