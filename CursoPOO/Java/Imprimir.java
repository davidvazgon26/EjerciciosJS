package CursoPOO.Java;

import java.util.*;

public class Imprimir {
    public static void main(String[] args) {
        Queue<String> pq = new PriorityQueue<>();
        pq.add("Hello");
        pq.add("Hackerrank");
        String s1 = pq.poll();
        pq.remove();
        System.out.println(s1);
        String s2 = pq.remove();
        System.out.println(s2);
    }
}
