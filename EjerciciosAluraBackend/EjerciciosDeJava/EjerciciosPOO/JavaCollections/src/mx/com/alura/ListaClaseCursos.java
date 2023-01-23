package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

public class ListaClaseCursos {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Geometria", 30);
        Curso curso2 = new Curso("Fisica", 10);
        Curso curso3 = new Curso("Quimica", 20);
        Curso curso4 = new Curso("Historia", 50);
    
        
        ArrayList<Curso> cursos = new ArrayList<>();
        cursos.add(curso1);
        cursos.add(curso2);
        cursos.add(curso3);
        cursos.add(curso4);

        System.out.println(cursos);
    }
}
