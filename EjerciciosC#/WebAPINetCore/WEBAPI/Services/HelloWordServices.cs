class HelloWordServices : IHelloWorldService
{
    public string GetHelloWorld()
    {
        return "Hello Inyeccion de Dependencias";
    }
    public string GetHelloWorld1()
    {
        return "Este ya no es visible en la interface porque no esta expuesto en ella";
    }
}

public interface IHelloWorldService
{
    string GetHelloWorld(); //Exponiendo metodo
}

// Configura el inyector en program.cs