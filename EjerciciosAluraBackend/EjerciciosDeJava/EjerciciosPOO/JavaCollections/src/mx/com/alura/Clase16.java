package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.Iterator;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Alumno;
import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

public class Clase16 {
    /*
     * //TODOs:
     * https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html
     * //TODOs:
     * https://docs.oracle.com/javase/8/docs/api/index.html?java/util/Collection.
     * html
     */

    // En este ejercicios estamos pasando la responsabilidades a cada una de las
    // clases para mejorar nuestro codigo y hacerlo mas reutilizable
    public static void main(String[] args) {

        Curso curso1 = new Curso("Historia", 30);

        Alumno alumno1 = new Alumno("Luis Miguel", "001");
        Alumno alumno2 = new Alumno("Pepito de los palotes", "002");
        Alumno alumno3 = new Alumno("Juan Carlos", "003");
        Alumno alumno4 = new Alumno("Pedro Pedrito", "004");
        Alumno alumno5 = new Alumno("Gustavo Sanchez", "005");
        Alumno alumno6 = new Alumno("Marcia Maria", "006");
        Alumno alumno7 = new Alumno("Claudia Patricia", "007");

        curso1.addAlumno(alumno1);
        curso1.addAlumno(alumno2);
        curso1.addAlumno(alumno3);
        curso1.addAlumno(alumno4);
        curso1.addAlumno(alumno5);
        curso1.addAlumno(alumno6);
        curso1.addAlumno(alumno7);

        // curso1.getAlumnos().forEach(alumno->System.out.println(alumno));

        Iterator<Alumno> alumnoIterator = curso1.getAlumnos().iterator();

        while (alumnoIterator.hasNext()) {
            System.out.println(alumnoIterator.next());
        }

    }
}
