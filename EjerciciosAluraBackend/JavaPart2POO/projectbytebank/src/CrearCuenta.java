package EjerciciosAluraBackend.JavaPart2POO.projectbytebank.src;

public class CrearCuenta {
    public static void main(String[] args) {
        Cuenta firstCuenta = new Cuenta();

        firstCuenta.saldo = 1000;

        System.out.println("El saldo de la cuenta es de: " + firstCuenta.saldo);
    }
}
