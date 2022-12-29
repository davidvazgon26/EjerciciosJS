package EjerciciosPOO.JavaPilaEjecucion;

// ejemplo procedural del flujo de la pila de ejecucion

public class Flujo {
    public static void main(String[] args) {
        System.out.println("Inicio metodo main");
        try {
            metodo1();
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("Fin metodo main");
    }

    private static void metodo1() throws MiException {
        System.out.println("Inicio metodo1");
        try {
            metodo2();
          } catch (ArithmeticException | NullPointerException | MiException e) {
            System.out.println(e.getMessage());
            // System.out.println(e.fillInStackTrace());
            // System.out.println(e.getStackTrace());
            e.printStackTrace();
        }
        System.out.println("Fin metodo1");
    }

    private static void metodo2() throws MiException{
        System.out.println("Inicio metodo 2");
        // String cadena = null;
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);

            System.out.println((i + "Hola".toString()));

            if (i < 3 ) {
                int num = i;
                System.out.println(num/0);
            }


        }
        System.out.println("Fin metodo 2");
        System.out.println("Probando Miexception");

        throw new MiException("Se lanzo MiException");
        
    }
}
