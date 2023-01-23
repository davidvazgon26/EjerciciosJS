package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.Optional;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Alumno;
import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

public class Clase19 {
    /*
     * //TODO:
     * https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html
     * //TODO:
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

        // Agregar HashMap en la clase Curso para que funcione

        Alumno alumnoMap = curso1.getAlumnoMap().get("003");
        System.out.println(alumnoMap);

        // Dependiendo de lo que queremos hacer hay que usar los diferentes tipos para
        // buscar como map.
        /*
         * ¿Por qué usar un mapa?
         * 
         * 
         * 
         * ¡Alternativa correcta! Un mapa trabaja bajo un concepto de (llave, valor), al
         * tener una llave única por ejemplo un DNI,
         * termina siendo más rápido la búsqueda de información.
         */

        curso1.getAlumnoMap().put("008", new Alumno("Juan Miguel", "008"));
        curso1.getAlumnoMap().put("009", new Alumno("Maria Jose", "009"));
        curso1.getAlumnoMap().put("010", new Alumno("Luis Pedro", "010"));

        curso1.getAlumnoMap().forEach((codigo, alumno) -> {
            System.out.println(alumno);
        });

        /*
         * Lo que aprendimos en esta aula:

            * Saber que un Map nos permite acceder a sus valores con más rapidez porque trabaja en el concepto de llave única y valor.

            * Buscar valores de un mapa a través de un key termina siendo mucho más rápido que un List o Set.

            * El usar mapas es muy útil cuando tenemos registros únicos en nuestros registros como DNI, numero de celular, etc. 
              Porque así podemos diferenciar nuestros valores y colocarlos como llave única en nuestros registros.

            * Leer valores de un Map.
         * 
         */
    }
}
