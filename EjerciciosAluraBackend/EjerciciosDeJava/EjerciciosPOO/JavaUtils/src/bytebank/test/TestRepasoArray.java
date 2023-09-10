package EjerciciosPOO.JavaUtils.src.bytebank.test;

import java.util.ArrayList;
import java.util.List;

public class TestRepasoArray {
    public static void main(String[] args) {
        // Creando un arreglo, recuerda que en java los arreglos son estaticos en
        // tamanio
        // No tienen todos los metodos que tiene un ArrayList por lo que las operaciones
        // deben tipo add y otras deben ser manuales o implementadas por ejemplo debes
        // hacer numeros[1] = 40 para asignarle un valor
        // o para para saber los espacios ocupados del arreglo debes recorrer el arreglo
        // en lugar de usar size ya que length te devolvera el
        // total de espacios del arreglo sin distinguir si esta ocupado o no
        int[] numeros = new int[10];
        numeros[2] = 40;
        System.out.println(numeros.length);

        int numero = 26;
        // Integer numeroObjeto = new Integer(40); // El subrayado indica que esta
        // deprecado el metodo
        Integer numeroObjeto2 = Integer.valueOf(40); // Esta es la nueva manera de wrappear un primitivo a objeto

        // Ojo ArrayList no acepta valores primitivios, solo acepta objetos
        // primitivo != objeto, Un valor primitivo guarda el valor un objeto guarda la
        // referencia al valor
        List<Integer> lista = new ArrayList<>();
        // En lista si puedo usar el metodo add
        lista.add(numero); // puedo ingresar un valor primitivo porque ArrayList internamente le hace
                           // autobocing o Wrapper
        // lista.add(new Integer(numero)); // Esto es lo que haria internamente
        // ArrayList con valores primitivos
        lista.add(Integer.valueOf(numero)); // Esto es lo que haria internamente ArrayList con el nuevo metodo
        // lista.add(numeroObjeto);
        lista.add(numeroObjeto2);

        System.out.println(lista);

        // puedo hacer autoboxing de un primitivo a objeto, pero tambien puedo hacer
        // unboxing de objeto a primitivo asi:
        // int valorPrimitivo = numeroObjeto; // Tambien lo hace automatico
        // int valorPrimitivo2 = numeroObjeto.intValue(); // Esto es lo que haria
        // internamente el unboxing

        // TAmbien puedo transformar objetos a primitivos de otro tipo de dato numerico
        // como:
        // byte numeroByte = numeroObjeto2.byteValue();
        // double numeroDoble = numeroObjeto2.doubleValue();
        // float numeroFloat = numeroObjeto.floatValue();

        // System.out.println(valorPrimitivo + ", " + valorPrimitivo2+ ", " +numeroByte+
        // ", " +numeroDoble+ ", " +numeroFloat);

        // Integer tiene otros metodos estaticos como:
        System.out.println(Integer.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE);

        System.out.println("El tamanio de Integer en bites es de: " + Integer.SIZE);
        System.out.println("EL metodo Integer soporta hasta " + Integer.BYTES + " fffBytes");

    }
}
