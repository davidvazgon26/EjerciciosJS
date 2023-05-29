

using System.Runtime.CompilerServices;
public class LinqQueries
{
    private List<Book> librosCollection = new List<Book>();
    public LinqQueries()
    {
        using (StreamReader reader = new StreamReader("books.json"))
        {
            string json = reader.ReadToEnd();
            this.librosCollection = System.Text.Json.JsonSerializer.Deserialize<List<Book>>(json, new System.Text.Json.JsonSerializerOptions() { PropertyNameCaseInsensitive = true });
        }
    }

    public IEnumerable<Book> TodaLaColeccion()
    {
        return librosCollection;
    }
    public IEnumerable<Book> LibrosDespuesDel2000()
    {
        // Con extension method
        // return librosCollection.Where(item => item.PublishedDate.Year > 2000);

        //Con query expresion
        return from l in librosCollection where l.PublishedDate.Year > 2000 select l;
    }

    public IEnumerable<Book> LibrosConMasde250pagConPalabrasInAction()
    {
        // Con extension method
        // return librosCollection.Where(item => item.PageCount > 250 && item.Title.Contains("in Action"));

        //Con query expresion
        return from l in librosCollection where l.PageCount > 250 && l.Title.Contains("in Action") select l;
    }

    public bool TodosLosLibrosTienenStatus()
    {
        // Con extension method
        return librosCollection.All(item => item.Status != string.Empty);
    }
    public bool Algunlibro2005()
    {
        // Con extension method
        return librosCollection.Any(item => item.PublishedDate.Year == 2005);
    }

    public IEnumerable<Book> Contiene()
    {
        // Con extension method
        return librosCollection.Where(item => item.Categories.Contains("Python"));
    }

    public IEnumerable<Book> LibrosJavaOrdenadosPorNombre()
    {
        return librosCollection.Where(item => item.Categories.Contains("Java")).OrderBy(p => p.Title);
    }
    public IEnumerable<Book> LibroMayor450OrdenadoDesc()
    {
        return librosCollection.Where(item => item.PageCount > 450).OrderByDescending(p => p.PageCount);
    }

    public IEnumerable<Book> Traer3erY4toLibro()
    {
        return librosCollection.Where(item => item.PageCount > 400)
        .Take(4)
        .Skip(2);
    }

    public IEnumerable<Book> TresPrimerosLibros()
    {
        return librosCollection.Take(3)
        .Select(item => new Book() { Title = item.Title, PageCount = item.PageCount });
    }

    public long CantidadDeLibrosEntre200y500Paginas()
    {
        return librosCollection.LongCount(item => item.PageCount >= 200 && item.PageCount <= 500);
    }

    public DateTime PublicacionMasAntigua()
    {
        return librosCollection.Min(item => item.PublishedDate);
    }

    public Book? LibroConMenorNumeroDePaginas()
    {
        return librosCollection.Where(item => item.PageCount > 0).MinBy(i => i.PageCount);
    }

    public int SumaDePaginasEntre0y500()
    {
        return librosCollection.Where(item => item.PageCount >= 0 && item.PageCount <= 500).Sum(item => item.PageCount);
    }

    public string TitulosDeLibrosdel2015Conccatenados()
    {
        return librosCollection
            .Where(item => item.PublishedDate.Year > 2015)
            .Aggregate("", (TitulosDeLibros, next) =>
            {
                if (TitulosDeLibros != string.Empty)
                {
                    TitulosDeLibros += " - " + next.Title;
                }
                else
                {
                    TitulosDeLibros += next.Title;
                }
                return TitulosDeLibros;
            });
    }

    public double PaginasPromedio()
    {

        return librosCollection.Average(item => item.PageCount);
    }

    public IEnumerable<IGrouping<int, Book>> LibrosDespuesDel2000AgrupadosPorAnio()
    {
        return librosCollection.Where(item => item.PublishedDate.Year >= 2000).GroupBy(i => i.PublishedDate.Year);
    }

    public ILookup<char, Book> DiccionariosDeLibrosPorLetra()
    {
        return librosCollection.ToLookup(p => p.Title[0], p => p);
    }

    public IEnumerable<Book> LibrosDespuesDel2005ConMasDe500Pags()
    {
        var LibrosDespuesDel2005 = librosCollection.Where(item => item.PublishedDate.Year > 2005);

        var LibrodConMasDe400pag = librosCollection.Where(item => item.PageCount > 500);

        return LibrosDespuesDel2005.Join(LibrodConMasDe400pag, p => p.Title, x => x.Title, (p, x) => p); //Se uso para el join Title porque no cuentan con id los datos.
    }
}