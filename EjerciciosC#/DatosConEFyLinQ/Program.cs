using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        /*
        var frutas = new string[] { "Sandia", "Fresa", "Mango", "Mango de azucar", "Mango Tomy" };

        var MangoList = frutas.Where(p => p.StartsWith("Mango")).ToList();
        MangoList.ForEach(item => System.Console.WriteLine(item));
        Console.WriteLine("Hola Mundo");
        */

        LinqQueries queries = new LinqQueries();

        // ImprimirValores(queries.TodaLaColeccion()); //Toda la lista
        // ImprimirValores(queries.LibrosDespuesDel2000()); //Filtro por anio
        // ImprimirValores(queries.LibrosConMasde250pagConPalabrasInAction()); //Filtro por paginas y titulo
        Console.WriteLine($"Todos los libros tienen estatus? : {queries.TodosLosLibrosTienenStatus()}"); // Verificar que todos los elementos de la collection tengan un valor en "status"
        Console.WriteLine($"Algun libro se publico en 2005? : {queries.Algunlibro2005()}"); // Verificar que todos los elementos de la collection tengan un valor en "status"
        // ImprimirValores(queries.Contiene()); //Filtro por paginas y titulo
        // ImprimirValores(queries.LibrosJavaOrdenadosPorNombre()); //Libros que son de Java ordenados
        // ImprimirValores(queries.LibroMayor450OrdenadoDesc()); //Libros que son de Java ordenados
        // ImprimirValores(queries.Traer3erY4toLibro()); //Libros 3 y 4 de una lista
        // ImprimirValores(queries.TresPrimerosLibros()); //3 primeros libros sin ordenamiento ni filtros pero solo la columan titulo y paginas
        System.Console.WriteLine($"El Total de libros entre 200 y 500 paginas es de: {queries.CantidadDeLibrosEntre200y500Paginas()} libros"); //3 primeros libros sin ordenamiento ni filtros pero solo la columan titulo y paginas
        Console.WriteLine($"Libro mas antiguo en publiacarse fue en: {queries.PublicacionMasAntigua().ToShortDateString()}");
        Console.WriteLine($"El libro con el menor numero de paginas es: {queries.LibroConMenorNumeroDePaginas()?.Title} - con {queries.LibroConMenorNumeroDePaginas()?.PageCount} paginas");
        Console.WriteLine($"Total de paginas en los libros con 0 a 500 paginas es de:  {queries.SumaDePaginasEntre0y500()}");
        //Libros publicados despues del 2015
        Console.WriteLine($"Titulos de libros despues del 2015 son : {queries.TitulosDeLibrosdel2015Conccatenados()}");
        Console.WriteLine($"El promedio de paginas por libro es de {queries.PaginasPromedio()}");
        //Libros publicados despues del 2000 agrupados por anio
        // ImprimirGrupo(queries.LibrosDespuesDel2000AgrupadosPorAnio());

        //Diccionario de libros agrupado por letra de titulo
        var diccionarioLookup = queries.DiccionariosDeLibrosPorLetra();
        ImprimirDiccionario(diccionarioLookup, 'C');

        //Libros filtrados con la clausula join
        ImprimirValores(queries.LibrosDespuesDel2005ConMasDe500Pags());


        void ImprimirValores(IEnumerable<Book> listadelibros)
        {
            System.Console.WriteLine("{0, -60}{1, 20}{2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
            foreach (var item in listadelibros)
            {
                System.Console.WriteLine("{0, -60}{1, 20}{2, 15}", item.Title, item.PageCount, item.PublishedDate.ToShortDateString());
            }
        }

        void ImprimirGrupo(IEnumerable<IGrouping<int, Book>> listadelibros)
        {

            foreach (var grupo in listadelibros)
            {
                System.Console.WriteLine("");
                System.Console.WriteLine($"Grupo: {grupo.Key}");
                System.Console.WriteLine("{0, -60}{1, 20}{2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
                foreach (var item in grupo)
                {
                    System.Console.WriteLine("{0, -60}{1, 20}{2, 15}", item.Title, item.PageCount, item.PublishedDate.ToShortDateString());
                }
            }

        }

        void ImprimirDiccionario(ILookup<char, Book> ListaDeLibros, char letra)
        {
            Console.WriteLine("{0, -60}{1, 20}{2, 15}\n", "Titulo", "N. Paginas", "Fecha publicacion");
            foreach (var item in ListaDeLibros[letra])
            {
                Console.WriteLine("{0, -60}{1, 20}{2, 15}", item.Title, item.PageCount, item.PublishedDate.ToShortDateString());
            }
        }
    }


}