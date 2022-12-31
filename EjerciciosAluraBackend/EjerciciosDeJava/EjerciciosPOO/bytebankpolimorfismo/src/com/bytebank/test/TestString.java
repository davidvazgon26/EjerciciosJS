package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.test;

public class TestString {
    
    public static void main(String[] args) {
        String nombre = "David";
        String otro = new String("Alura");
        System.out.println(nombre);
        System.out.println(otro);

        //Repazando la inmutabilidad del string
        String nuevo = otro.replace("A", "a");

        System.out.println(nuevo);

        String nuevo2 = nombre.toLowerCase(); //también pruebe toUpperCase()
        System.out.println(nuevo2);

        char c = nombre.charAt(3); //char i
        System.out.println(c);

        int pos = nombre.indexOf("vid");
        System.out.println(pos);

        String sub = nombre.substring(1);
        System.out.println(sub);

        for(int i = 0; i < nombre.length(); i++) {
            System.out.println(nombre.charAt(i));
        } 
    }
}
