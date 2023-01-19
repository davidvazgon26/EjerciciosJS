package EjerciciosPOO.JavaUtils.src.bytebank.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cliente;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestOrdenarListaPorNombre {
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

        
        System.out.println("Antes de ordenar por numero:");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }

        //Ordenar las cuentas por NO de cuenta. sort pide nuestra implementacion asi que...
        
        //Una forma de implementar
        //Comparator es la interfaz                 OrdenarPorNumeroDeCuenta es la implementacion
        //Comparator<Cuenta> comparator = new OrdenarPorNumeroDeCuenta();
        //lista.sort(comparator);  // Comprarator es una implementacion de la interfaz por lo que pudiera hacerlo tambien asi:
        
        //Otra forma de implementar
        lista.sort(new OrdenarPorNumeroDeCuenta());

        System.out.println("despues de ordenar por numero:");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }


        //Ordenando las cuentas ahora por nombre, por lo que requiero otro metodo que sobreescriba la interface
        Comparator<Cuenta> comparatorNombre = new OrdenarPorNombreDelTitular();
        lista.sort(comparatorNombre);

        System.out.println("*****  Ahora ordenado por nombre ****");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }

        //Ahora la forma antigua de implementar el ordenamiento 

        //Para este ejempl ordenamos otra vez por cuenta
        Collections.sort(lista, new OrdenarPorNumeroDeCuenta());

        System.out.println("*****  Ahora ordenado por No cuenta de la manera antigua ****");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }

        //Ordenando otra vez de la manera antigua pero por "orden natural", dejando como opcion de orden natural a agencia,
        // el cual debe estar implementado en la clase, en este caso en Cuenta.
        // debo implementar la interfaz Comparable en la clase Cuenta
        Collections.sort(lista);

        System.out.println("*****  Ahora ordenado por Orden Natural (agencia) ****");
        for (Cuenta cuenta : lista) {
            System.out.println(cuenta);
        }


    }
}

// Implementando nuestras versiones de ordenamiento sobreescribiendo a Comparator

class OrdenarPorNumeroDeCuenta implements Comparator<Cuenta>{

    @Override
    public int compare(Cuenta o1, Cuenta o2) {
        //Forma basica
            // if (o1.getNumero() == o2.getNumero()) {
            //     return 0;
            // } else if (o1.getNumero()>o2.getNumero() ) {
            //     return 1;
            // } else {
            //     return -1;
            // }
        //Forma intermedia
                // return o1.getNumero() - o2.getNumero();
        //Forma Wrapper
                return Integer.compare(o1.getNumero(), o2.getNumero());

    }
    
}

class OrdenarPorNombreDelTitular implements Comparator<Cuenta>{

    @Override
    public int compare(Cuenta o1, Cuenta o2) {
        return o1.getTitular().getNombre().compareTo(o2.getTitular().getNombre());
    }
    
}
