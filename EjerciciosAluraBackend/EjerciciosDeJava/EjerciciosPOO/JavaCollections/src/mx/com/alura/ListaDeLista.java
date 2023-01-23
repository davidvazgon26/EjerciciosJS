package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Aula;
import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

public class ListaDeLista {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Ruby", 30, new ArrayList<>());
        curso1.addAula(new Aula("ArrayList"));
        curso1.addAula(new Aula("List"));
        curso1.addAula(new Aula("LinkedList"));
        
        ArrayList<Curso> cursos = new ArrayList<>();
        cursos.add(curso1);

        System.out.println(cursos.get(0).getAulaList());
        // System.out.println(cursos);

    }
}
