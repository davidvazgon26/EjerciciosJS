package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;

public class Clase13 {
    /*
     * //TODOs:
     * https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html
     * //TODOs:
     * https://docs.oracle.com/javase/8/docs/api/index.html?java/util/Collection.
     * html
     */

    public static void main(String[] args) {
        String alumno1 = "Luis Miguel";
        String alumno2 = "David Vaz";
        String alumno3 = "Juan Carlos";
        String alumno4 = "Pedro Perez";
        String alumno5 = "Gustavo Sanchez";
        String alumno6 = "Marcia Maria";
        String alumno7 = "David Vaz";
        String alumno8 = "Marcia Maria";

        Collection<String> listaAlumnos = new HashSet<>();

        listaAlumnos.add(alumno1);
        listaAlumnos.add(alumno2);
        listaAlumnos.add(alumno3);
        listaAlumnos.add(alumno4);
        listaAlumnos.add(alumno5);
        listaAlumnos.add(alumno6);
        listaAlumnos.add(alumno7);
        listaAlumnos.add(alumno8);
        listaAlumnos.add(alumno8);

        // La interface Set no guarda la posicion, es por eso que siempre dara
        // diferentes posiciones a los elementos de la lista o set
        // set no permite elementos duplicados.

        // System.out.println("con HashSet y lambda (no repite elementos)");
        // listaAlumnos.forEach(alumno-> System.out.println(alumno));

        System.out.println(listaAlumnos.contains("Pedro Perez")); // true
        System.out.println(listaAlumnos.contains("Pedro perez")); // false

        System.out.println(listaAlumnos.stream().max(Comparator.comparingInt(String::length)).get());
        System.out.println(listaAlumnos.stream().max(Comparator.comparingInt(String::length)).get().length());

        listaAlumnos.removeIf(alumno -> "Pedro Perez".equalsIgnoreCase(alumno));
        listaAlumnos.forEach(alumno -> System.out.println(alumno));

        // De esta manera (poniendo en primer lugar el valor buscado) si no lo encuentra
        // evitas en nullpointer, Ej:
        listaAlumnos.removeIf(alumno -> "David Perez".equalsIgnoreCase(alumno));
        listaAlumnos.forEach(alumno -> System.out.println(alumno));
    }
}
