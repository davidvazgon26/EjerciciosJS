package EjerciciosPOO.projectbytebank;

public class CrearCuenta {
    public static void main(String[] args) {
        Cuenta fc = new Cuenta(333,444);
        
        Cuenta sc = new Cuenta(55,77);

        // Deposito 500 a fc
        fc.depositar(1800);

            // retirar 300 a fc
        fc.retirar(600);

        // tranferencia de fc a sc de 500
        fc.transferir(300,sc);

        System.out.println("Saldos...: ");
        System.out.println("Saldo de fc: "+fc.getSaldo());
        System.out.println("Saldo de sc: "+sc.getSaldo());
        

        

    }
}
