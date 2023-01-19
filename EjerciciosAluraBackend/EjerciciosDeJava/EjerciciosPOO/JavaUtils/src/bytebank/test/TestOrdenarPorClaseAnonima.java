package EjerciciosPOO.JavaUtils.src.bytebank.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cliente;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestOrdenarPorClaseAnonima {
    public static void main(String[] args) {
        Cuenta cc1 = new CuentaCorriente(62, 33);
        Cliente clienteCC1 = new Cliente();
        clienteCC1.setNombre("Diego");
        cc1.setTitular(clienteCC1);
        cc1.deposita(333.0);

        Cuenta cc2 = new CuentaAhorros(32, 44);
        Cliente clienteCC2 = new Cliente();
        clienteCC2.setNombre("Renato");
        cc2.setTitular(clienteCC2);
        cc2.deposita(444.0);

        Cuenta cc3 = new CuentaCorriente(22, 11);
        Cliente clienteCC3 = new Cliente();
        clienteCC3.setNombre("Liam");
        cc3.setTitular(clienteCC3);
        cc3.deposita(111.0);

        Cuenta cc4 = new CuentaAhorros(2, 22);
        Cliente clienteCC4 = new Cliente();
        clienteCC4.setNombre("Angel");
        cc4.setTitular(clienteCC4);
        cc4.deposita(222.0);

        List<Cuenta> lista = new ArrayList<>();

        lista.add(cc1);
        lista.add(cc2);
        lista.add(cc3);
        lista.add(cc4);

        
        System.out.println(" ******* Antes de ordenar por numero con clase anonima:");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }

        lista.sort(new Comparator<Cuenta>() {
            @Override
            public int compare(Cuenta o1, Cuenta o2){
                return Integer.compare(o1.getNumero(), o2.getNumero());
            }
        });

        System.out.println(" ****** despues de ordenar por numero con clase anonima:");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }


        //Ordenando las cuentas ahora por nombre y con clase anonima y de la manera antigua que es con Collections
        Collections.sort(lista,new Comparator<Cuenta>() {

            @Override
            public int compare(Cuenta o1, Cuenta o2) {
                return o1.getTitular().getNombre().compareTo(o2.getTitular().getNombre());
            }
            
        });

        System.out.println("*****  Ahora ordenado por nombre con clase anonima y Collections ****");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }

    }
}


