package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;
import java.util.List;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Aula;
import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

public class Clase7 {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Ruby", 30, new ArrayList<>());
        curso1.addAula(new Aula("ArrayList"));
        curso1.addAula(new Aula("List"));
        curso1.addAula(new Aula("LinkedList"));
        curso1.addAula(new Aula("Inmutable"));

        List<Aula> aulaList = curso1.getAulaList();

      
        ArrayList<Curso> cursos = new ArrayList<>();
        cursos.add(curso1);

        System.out.println(cursos.get(0).getAulaList());
        // System.out.println(cursos);

        System.out.println(aulaList);

    }
}
