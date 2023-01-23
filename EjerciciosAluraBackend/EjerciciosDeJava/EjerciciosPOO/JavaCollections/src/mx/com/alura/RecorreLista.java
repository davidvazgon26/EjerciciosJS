package EjerciciosPOO.JavaCollections.src.mx.com.alura;

import java.util.ArrayList;

public interface RecorreLista {
    public static void main(String[] args) {
        String variable1 = "Clase 1";
        String variable2 = "Clase 2";
        String variable3 = "Clase 3";
        String variable4 = "Clase 4";

        ArrayList<String> listaString = new ArrayList<>();
        listaString.add(variable1); 
        listaString.add(variable2); 
        listaString.add(variable3); 
        listaString.add(variable4); 

        System.out.println(listaString);

        //Recorriendo la lista con for
        for (int i = 0; i < listaString.size(); i++) {
            System.out.println(listaString.get(i));
        }

        System.out.println("*************** forEach *****************");
        
        //Recorriendo la lista con forEach
        for (String string : listaString) {
            System.out.println(string);
        }

        System.out.println("*************** con Lambda *****************");

        listaString.forEach(string -> System.out.println(string)); 
    }
}
