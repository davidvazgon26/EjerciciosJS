package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.test;

import EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo.CuentaCorriente;

public class TestToString {
    public static void main(String[] args) {
        Object cc = new CuentaCorriente(22, 33);
        Object ca = new CuentaAhorros(33, 22);

        System.out.println(cc);
        System.out.println(ca);
    }
}
