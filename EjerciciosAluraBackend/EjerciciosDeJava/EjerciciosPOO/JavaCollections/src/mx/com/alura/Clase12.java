package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
// import java.util.Set;

public class Clase12 {
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

        // Set<String> listaAlumnos = new HashSet<>(); // Si declaro con la interface me
        // permite cambiar de tipo facilmente (usar Collection en lugar de Set)
        Collection<String> listaAlumnos = new HashSet<>();
        Collection<String> listaAlumnos2 = new ArrayList<>();

        listaAlumnos.add(alumno1);
        listaAlumnos.add(alumno2);
        listaAlumnos.add(alumno3);
        listaAlumnos.add(alumno4);
        listaAlumnos.add(alumno5);
        listaAlumnos.add(alumno6);
        listaAlumnos.add(alumno7);
        listaAlumnos.add(alumno8);
        listaAlumnos.add(alumno8);

        listaAlumnos2.add(alumno1);
        listaAlumnos2.add(alumno2);
        listaAlumnos2.add(alumno3);
        listaAlumnos2.add(alumno4);
        listaAlumnos2.add(alumno5);
        listaAlumnos2.add(alumno6);
        listaAlumnos2.add(alumno7);
        listaAlumnos2.add(alumno8);
        listaAlumnos2.add(alumno8);

        // La interface Set no guarda la posicion, es por eso que siempre dara
        // diferentes posiciones a los elementos de la lista o set
        // set no permite elementos duplicados.
        for (String alumno : listaAlumnos) {
            System.out.println(alumno);
        }
        System.out.println("con HashSet y lambda (no repite elementos)");
        listaAlumnos.forEach(alumno -> System.out.println(alumno));
        System.out.println("con ArrayList y lambda (repite elementos)");
        listaAlumnos2.forEach(alumno -> System.out.println(alumno));
    }
}
