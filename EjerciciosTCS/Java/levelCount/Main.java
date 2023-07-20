// package EjerciciosTCS.Java.levelCount;

// import java.io.*;

public class Main {

    public static void main(String[] args) {
        System.out.println("Texto ingresado: ");
        System.out.println(args[0]);
        System.out.println(levelCount(args[0]));
    }

    public static int levelCount(String word) {
        int openingBraceCount = 0;
        int index = 0;
        boolean withinName = false;

        while (index < word.length()) {
            char c = word.charAt(index);

            if (c == '{' && !withinName) {
                openingBraceCount++;
            }
            if (c == '}' && !withinName) {
                break;
            }

            index++;
        }

        return openingBraceCount;
    }

}

// java Main "{"0": { "name": "John"},"1":{"name":"micheal"}}"