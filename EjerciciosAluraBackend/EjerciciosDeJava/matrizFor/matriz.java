package matrizFor;

public class matriz {
    public static void main(String[] args) {

        for(int contador = 1; contador<=10; contador++){
            for (int multiplicacion = 0; multiplicacion <= 10; multiplicacion++) {
                int resultado = contador * multiplicacion;
                if(resultado<10){
                    String res = String.format("%02d", resultado);
                    System.out.print(res);
                }else{
                    System.out.print(resultado);
                }
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}
