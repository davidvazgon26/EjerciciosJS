package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.GuardaReferencias;

public class TestGuardaReferencia {
    public static void main(String[] args) {
        
        GuardaReferencias guardarReferencia = new GuardaReferencias();
        Cuenta cc = new CuentaCorriente(11, 22);
        guardarReferencia.adicionar(cc);

        Cuenta cc2 = new CuentaCorriente(22, 44);
        guardarReferencia.adicionar(cc2);

        Object oc = guardarReferencia.obtener(0);

        System.out.println(oc);
    }
}
