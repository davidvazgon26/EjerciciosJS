package EjerciciosPOO.JavaUtils.src.bytebank.test;

import java.util.ArrayList;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestArrayList {
    public static void main(String[] args) {
        // Con <> forzo a que acepte solo un tipo de objeto
        ArrayList<Cuenta> lista = new ArrayList<>();

        Cuenta cc = new CuentaCorriente(11,22);
        Cuenta cc2 = new CuentaCorriente(13,42);
        Cuenta cc3 = new CuentaCorriente(11,22);

        lista.add(cc);
        lista.add(cc2);

        Cuenta obtenerCuenta = lista.get(0);
        System.out.println(obtenerCuenta);
        // Cuenta obtenerCuenta =(Cuenta) lista.get(0);
        // System.out.println(obtenerCuenta);

        for (int i = 0; i < lista.size(); i++) {
            System.out.println(lista.get(i));
        }
        
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta );
        }

        boolean contiene = lista.contains(cc);
        if(contiene) System.out.println("Si");
       
        boolean contiene2 = lista.contains(cc3);
        if(contiene2) System.out.println("Si");
        else System.out.println("No");

        if(cc.esIgual(cc3)){
            System.out.println("Si son iguales");
        }

        boolean igual = lista.contains(cc3);
        if(igual) System.out.println("Son iguales con (con equals)");

    }
}
