// package EjerciciosTCS.Java.operationCount;

public class Main {
    public static void main(String[] args) {
        int input1 = Integer.parseInt(args[1]);
        int input2 = Integer.parseInt(args[2]);
        int result = input1 + input2 + 1;
        System.out.println(result);
    }
}

// javac Main.java && java Main abcabc 1 1
// Result: 3

// javac Main.java && java Main AbcDef 1 2
// Result: 4
