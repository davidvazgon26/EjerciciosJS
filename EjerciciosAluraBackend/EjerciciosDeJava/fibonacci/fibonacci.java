package fibonacci;

public class fibonacci {
    public static void main(String[] args) {
        int n = 10; // número de elementos de la secuencia que quieres calcular
        int a = 0, b = 1;
        System.out.print(a + " " + b);
    
        for (int i = 2; i < n; i++) {
          int c = a + b;
          System.out.print(" " + c);
          a = b;
          b = c;
        }
    
    }
}
