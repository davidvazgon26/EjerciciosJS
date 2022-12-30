package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.test;

import EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo.Cuenta;
import EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo.CuentaAhorros;

public class TestCuentaExceptionSaldo {
    
    public static void main(String[] args) {
        Cuenta cuenta = new CuentaAhorros(1, 256);
        cuenta.depositar(200);
        cuenta.retirar(400);
    }
}
