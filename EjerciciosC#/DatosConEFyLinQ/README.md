## Manipulacion de datos con Entnity Framework y LinkQ

Entity Framework .- Se encarga de la conexion a la base de datos y manipular las collections con codigo C#

LinQ (Language Integrated Query) .- Para realizar queries y transformaciones que afectaran la BD.

LinQ trabaja tanto con delacaraciones imperativas (paso a paso) como declarativa (que quiero)

ejemplo de LINQ con compilador en line: replit.com

- Creamos un proyecto de consola con dotnet new console
- Agregamos en la raiz los datos de trabajo (books.json)
- Incluimos el archivo en el proyecto agregandolo en el archivo .csproj

Ejemplo de LinQ en codigo:

`
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
public static void Main(string[] args)
{

        List<Animal> animales = new List<Animal>();
        animales.Add(new Animal() { Nombre = "Hormiga", Color = "Rojo" });
        animales.Add(new Animal() { Nombre = "Lobo", Color = "Gris" });
        animales.Add(new Animal() { Nombre = "Elefante", Color = "Gris" });
        animales.Add(new Animal() { Nombre = "Pantegra", Color = "Negro" });
        animales.Add(new Animal() { Nombre = "Gato", Color = "Negro" });
        animales.Add(new Animal() { Nombre = "Iguana", Color = "Verde" });
        animales.Add(new Animal() { Nombre = "Sapo", Color = "Verde" });
        animales.Add(new Animal() { Nombre = "Camaleon", Color = "Verde" });
        animales.Add(new Animal() { Nombre = "Gallina", Color = "Blanco" });
        animales.Add(new Animal() { Nombre = "allina", Color = "Verde" });

        // Escribe tu código aquí
        // filtra todos los animales que sean de color verde que su nombre inicie con una vocal
         List<char> vocales = new List<char>() { 'a', 'e', 'i', 'o', 'u' };

        List<Animal> result = animales.Where(x => x.Color.ToLower().Equals("verde") && vocales.Contains(x.Nombre.ToLower()[0])).ToList();

        if (result.Any())
            result.ForEach(x => Console.WriteLine(x.Nombre));
    }

    public class Animal
    {
        public string Nombre { get; set; }
        public string Color { get; set; }
    }

}
`

Tipos de metodos disponibles (solo algunos:)

- Where
- contains
- All
- Any
- OrderBy
- Take, TakeLast y TakeWhile (Devuelve una muestra de la collection)
- Skip (omite)
- Select
- Count o LongCount
- Min y Max o MinBy y MaxBy para obtener toda el elemento.
- GroupBy
- Join
