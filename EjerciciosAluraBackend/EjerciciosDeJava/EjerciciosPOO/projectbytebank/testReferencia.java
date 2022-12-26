package EjerciciosPOO.projectbytebank;

public class testReferencia {
    public static void main(String[] args) {
        // Evaluando cuando se hace referencia de un objeto y cuando son diferentes    
        Cuenta firstCuenta = new Cuenta(1,2);
        firstCuenta.depositar(1000);;

        Cuenta segundaCuenta = firstCuenta;
        segundaCuenta.depositar(200);;

        Cuenta tercerCuenta = new Cuenta(7,9);
        tercerCuenta.depositar(3000);;

        System.out.println("El saldo de primera cuenta es de: " + firstCuenta.getSaldo());
        System.out.println("El saldo de segunda cuenta es de: " + segundaCuenta.getSaldo());
        System.out.println("El saldo de tercer cuenta es de: " + tercerCuenta.getSaldo());

        System.out.println("Incrementando saldo de segundaCuenta en 800...");
        System.out.println();
        segundaCuenta.depositar(800);;
        
        System.out.println("El saldo de primera cuenta es de: " + firstCuenta.getSaldo());
        System.out.println("El saldo de segunda cuenta es de: " + segundaCuenta.getSaldo());
        System.out.println("El saldo de tercer cuenta es de: " + tercerCuenta.getSaldo());

        System.out.println("validando espacio es memoria de las cuentas...");
        System.out.println();

        System.out.println(firstCuenta);
        System.out.println(segundaCuenta);
        System.out.println(tercerCuenta);

        System.out.println("Comparando cuentas...");
        System.out.println();

        if (firstCuenta == segundaCuenta) {
            System.out.println("Primera y segunda cuenta son iguales");
        } 

        if (firstCuenta != tercerCuenta) {

            System.out.println("Primera cuenta y tercera cuenta no son iguales");
            
        }


    
    }
}
