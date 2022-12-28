package EjerciciosPOO.bytebankpolimorfismo;

public class TestCuenta {
    public static void main(String[] args) {
        CuentaCorriente cc = new CuentaCorriente(1, 1);
        CuentaAhorros ca = new CuentaAhorros(2, 3);

        cc.depositar(2000);
        ca.depositar(100);

        cc.transferir(400, ca);

        System.out.println("CC: "+ cc.getSaldo());
        System.out.println("CA: "+ ca.getSaldo());
 
    }
}
