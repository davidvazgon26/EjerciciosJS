package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.Collection;
import java.util.HashSet;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Alumno;

public class Clase14 {
    /*
     * //TODOs:
     * https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html
     * //TODOs:
     * https://docs.oracle.com/javase/8/docs/api/index.html?java/util/Collection.
     * html
     */

    public static void main(String[] args) {
        Alumno alumno1 = new Alumno("Luis Miguel", "001");
        Alumno alumno2 = new Alumno("Pepito de los palotes", "002");
        Alumno alumno3 = new Alumno("Juan Carlos", "003");
        Alumno alumno4 = new Alumno("Pedro Pedrito", "004");
        Alumno alumno5 = new Alumno("Gustavo Sanchez", "005");
        Alumno alumno6 = new Alumno("Marcia Maria", "006");
        Alumno alumno7 = new Alumno("Claudia Patricia", "007");

        Collection<Alumno> listaAlumnos = new HashSet<>();

        listaAlumnos.add(alumno1);
        listaAlumnos.add(alumno2);
        listaAlumnos.add(alumno3);
        listaAlumnos.add(alumno4);
        listaAlumnos.add(alumno5);
        listaAlumnos.add(alumno6);
        listaAlumnos.add(alumno7);

        Alumno alumnoNuevo = new Alumno("Luis Miguel", "001"); // Aun no se agrega a la lista

        // Buscar un alumno
        System.out.println(alumno1.equals(alumnoNuevo)); // false, porque aunque las propiedades son iguales no es el
                                                         // mismo espacio de memoria, para que funcione hay que
                                                         // sobreescribir el metodo en la clase Alumno.
        System.out.println(listaAlumnos.contains(alumnoNuevo)); // Tambien da false

        // despues de sobreescribir los metodos equals y hashCode ambos daran true.

    }
}
