package EjerciciosPOO.JavaUtils.src.bytebank.test;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestOrdenarLista {
    public static void main(String[] args) {

        Cuenta cc1 = new CuentaCorriente(22, 33);
        cc1.deposita(333.0);

        Cuenta cc2 = new CuentaAhorros(22, 44);
        cc2.deposita(444.0);
        Cuenta cc3 = new CuentaAhorros(22, 11);
        cc3.deposita(111.0);
        Cuenta cc4 = new CuentaCorriente(22, 22);
        cc4.deposita(222.0);

        
        List<Cuenta> lista = new ArrayList<>();

        lista.add(cc1);
        lista.add(cc2);
        lista.add(cc3);
        lista.add(cc4);

        System.out.println("Antes de ordenar (por No de Cuenta): "+lista);
        
        //Ordenar las cuentas
        
        NumeroDeCuentaComparador comparador = new NumeroDeCuentaComparador();
        lista.sort(comparador);

        System.out.println("Despues de ordenar (por No de Cuenta): "+lista);
    }
    
}


class NumeroDeCuentaComparador implements Comparator<Cuenta>{

    @Override
    public int compare(Cuenta c1, Cuenta c2) {
        return Integer.compare(c1.getNumero(), c2.getNumero());
    }
    
}