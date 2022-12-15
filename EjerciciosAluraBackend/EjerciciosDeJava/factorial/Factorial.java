package factorial;

import java.util.Scanner;


public class Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingresa un numero: ");
        int num = scanner.nextInt();
        long resultado = factorial(num);
        System.out.println("El factorial de " + num +" es: " + resultado);
        if(scanner!=null)
        scanner.close();
    }

    static long factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("El factorial no está definido para números negativos");
        }
        
        System.out.println("Obteniendo el factorial de "+ n + "...");

        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
            System.out.println(result);
        }
        return result;
    }
}

  