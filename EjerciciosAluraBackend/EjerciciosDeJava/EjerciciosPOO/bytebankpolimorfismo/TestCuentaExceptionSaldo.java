package EjerciciosPOO.bytebankpolimorfismo;

public class TestCuentaExceptionSaldo {
    
    public static void main(String[] args) {
        Cuenta cuenta = new CuentaAhorros(1, 256);
        cuenta.depositar(200);
        cuenta.retirar(400);
    }
}
