

public class HelloWorldService : IHelloWorldService
{
    public string GetHelloWorld()
    {
        return "Hello World!!! desde el archivo HelloWorldService.cs que se inyecta";
    }
}

public interface IHelloWorldService
{
    string GetHelloWorld();
}