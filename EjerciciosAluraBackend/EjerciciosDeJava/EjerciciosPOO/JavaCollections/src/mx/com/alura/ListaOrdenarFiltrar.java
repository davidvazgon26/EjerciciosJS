package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import EjerciciosPOO.JavaCollections.src.mx.com.alura.model.Curso;

public class ListaOrdenarFiltrar {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Ruby", 30);
        Curso curso2 = new Curso("Python", 10);
        Curso curso3 = new Curso("PHP", 20);
        Curso curso4 = new Curso("Java", 50);
        Curso curso5 = new Curso("JavaScript", 50);
    
        
        ArrayList<Curso> cursos = new ArrayList<>();
        cursos.add(curso1);
        cursos.add(curso2);
        cursos.add(curso3);
        cursos.add(curso4);
        cursos.add(curso5);

        System.out.println(cursos);

        // Esto es implementando y sobreescribiendo el metodo compareTo en la clase Curso
        Collections.sort(cursos);
        System.out.println(cursos);

        //Otras formas de ordenar sin sobreescribir el metodo
        Collections.sort(cursos, Comparator.comparing(Curso::getNombre).reversed());
        System.out.println("Ordenar sin metodo sobreescrito");
        System.out.println(cursos);

        //Ordenar sin metodo sobreescrito y filtrando la lista
        List<Curso> cursosList = cursos.stream().filter(curso -> !curso.getNombre().equalsIgnoreCase("Ruby"))
        .sorted(Comparator.comparingInt(Curso::getTiempo)).collect(Collectors.toList());
        System.out.println(cursosList);

    }
}
