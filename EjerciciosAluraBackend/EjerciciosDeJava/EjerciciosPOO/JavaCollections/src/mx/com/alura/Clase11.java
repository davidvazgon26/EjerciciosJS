package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.HashSet;
import java.util.Set;

public class Clase11 {
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

        Set<String> listaAlumnos = new HashSet<>();

        listaAlumnos.add(alumno1);
        listaAlumnos.add(alumno2);
        listaAlumnos.add(alumno3);
        listaAlumnos.add(alumno4);
        listaAlumnos.add(alumno5);
        listaAlumnos.add(alumno6);

        // La interface Set no guarda la posicion, es por eso que siempre dara
        // diferentes posiciones a los elementos de la lista o set
        for (String alumno : listaAlumnos) {
            System.out.println(alumno);
        }
    }
}
