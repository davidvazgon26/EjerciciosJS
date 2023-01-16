package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.GuardaCuentas;

public class TestGuardaCuentas {
    public static void main(String[] args) {
        
        GuardaCuentas guardaCuentas = new GuardaCuentas();
        Cuenta cc = new CuentaCorriente(11, 22);
        guardaCuentas.adicionar(cc);

        Cuenta cc2 = new CuentaCorriente(22, 44);
        guardaCuentas.adicionar(cc2);

        Cuenta oc = guardaCuentas.obtener(1);

        System.out.println(oc);
    }
}
