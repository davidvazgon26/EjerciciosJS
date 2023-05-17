using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQ
{
    class Program
    {
        static void Main(string[] args){
            int[] arregloEnteros = { 1,2,10,3,2,55,6,18,2,100,2,41};

            IEnumerable<int> lst = from d in arregloEnteros
            orderby d
            select d;

            foreach (var item in lst)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("Resultado menores o iguales a 5");
            IEnumerable<int> lst2 = from d in arregloEnteros
            where d<= 5
            select d;

            foreach (var item in lst2)
            {
                Console.WriteLine(item);
            }

                     Complejo[] lst3 = {
                new Complejo(1,"patito"),
                new Complejo(6,"diablito"),
                new Complejo(5,"perro"),
                new Complejo(10,"ave"),
                new Complejo(55,"foca")
            };

            var oDiablo = (from d in lst3
                           where d.Cadena == "diablito"
                           select d).FirstOrDefault();

            Console.Write(oDiablo.Imprime());
        }
        }

        public class Complejo
        {
            public int Numero {get; set;}
            public string Cadena {get; set;}

            public Complejo(int Numero, string Cadena){
                this.Numero = Numero;
                this.Cadena = Cadena;
            }

            public String Imprime(){
                return Numero + "" + Cadena;
            }
        }

    }
    

