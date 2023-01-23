package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public interface OrdenarListas {
    public static void main(String[] args) {
        String curso1 = "Geometria";
        String curso2 = "Fisica";
        String curso3 = "Quimica";
        String curso4 = "Historia";

        ArrayList<String> cursos = new ArrayList<>();
        cursos.add(curso1); 
        cursos.add(curso2); 
        cursos.add(curso3); 
        cursos.add(curso4); 

        System.out.println(cursos);

        //Ordenando la lista con la clase Collections
        Collections.sort(cursos);

        System.out.println(cursos);

        //Ordenando la lista de forma inversa con la clase Collections
        Collections.sort(cursos, Collections.reverseOrder());

        System.out.println(cursos);

        //Ordenando con los metodos del objeto
        cursos.sort(Comparator.reverseOrder());
        System.out.println("Ordenando con los metodos del objeto (reverse)");
        System.out.println(cursos);

        //Ordenando con los metodos del objeto
        cursos.sort(Comparator.naturalOrder());
        System.out.println("Ordenando con los metodos del objeto (natural)");
        System.out.println(cursos);

        //Ordenando con stream, esto crea una nueva lista por lo que...
        List<String> cursosList = cursos.stream().sorted().collect(Collectors.toList());
        System.out.println("usando stream"); 
        System.out.println(cursosList); 



    }
}
