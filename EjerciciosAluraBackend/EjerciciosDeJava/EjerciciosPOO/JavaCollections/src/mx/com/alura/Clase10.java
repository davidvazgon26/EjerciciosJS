package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

import java.util.ArrayList;
import java.util.Comparator;



public class Clase10 {
    
    public static final List<List<Integer>> listas = new ArrayList<List<Integer>>(){
        {
            add(new LinkedList<>());
            add(new ArrayList<>());
        }
    };
    
    public static void main(String[] args) {
       Curso curso1 = new Curso("Historia", 30);
       Curso curso2 = new Curso("Algebra", 10);
       Curso curso3 = new Curso("Aritmetica", 20);
       Curso curso4 = new Curso("Geometria", 50);
       Curso curso5= new Curso("Fisica", 60);
       Curso curso6 = new Curso("Quimica", 80);
       Curso curso7 = new Curso("Geografia", 70);
       Curso curso8 = new Curso("Fisica", 30);

       ArrayList<Curso> cursos = new ArrayList<>();
       cursos.add(curso1);
       cursos.add(curso2);
       cursos.add(curso3);
       cursos.add(curso4);
       cursos.add(curso5);
       cursos.add(curso6);
       cursos.add(curso7);
       cursos.add(curso8);

       List<Curso> cursosList = cursos.stream().filter(curso -> !curso.getNombre().equalsIgnoreCase("Ruby"))
       .sorted(Comparator.comparingInt(Curso::getTiempo)).collect(Collectors.toList());
       System.out.println(cursosList);

       System.out.println(cursos.stream().mapToInt(Curso::getTiempo).sum());
       System.out.println(cursos.stream().mapToInt(Curso::getTiempo).max().getAsInt());
       System.out.println(cursos.stream().mapToInt(Curso::getTiempo).min().getAsInt());
       System.out.println(cursos.stream().mapToInt(Curso::getTiempo).average().getAsDouble());

        Map<String, List<Curso>> groupCurso = cursos.stream().collect(Collectors.groupingBy(Curso::getNombre));
       
        groupCurso.forEach((key, value)-> System.out.println(key + " - " + value.size()));

        //para reducir el tiempo de procesamiento (usa threads)
        System.out.println(cursos.parallelStream().mapToInt(Curso::getTiempo).sum());
    }
}