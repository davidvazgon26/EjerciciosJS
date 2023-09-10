package CursoPOO.Java;

import java.util.ArrayList;
import java.util.List;

public class Genericos {

    public static void main(String[] args) {

        // Ejemplo sin genericos
        List<String> names = new ArrayList<>();
        names.add("David");
        String name = (String) names.get(0);
        System.out.println("Nombre: " + name);
        // name.add(7);

        // Ejemplo con genericos
        List<String> names2 = new ArrayList<>();
        names2.add("David2");
        String name2 = names2.get(0);
        System.out.println("Nombre: " + name2);
        // name2.add(7);
    }

}

// El generico comprueba en este caso que los datos agregados a la lista sean
// del mismo tipo,
// al agregar como en este ejemplo un entero el que no tiene generico aceptara
// el dato mientras que el generico lo rechazara
//
