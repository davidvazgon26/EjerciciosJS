package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.test;

import EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo.Contador;
import EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo.Funcionario;

public class TestFuncionario {

    public static void main(String[] args) {
        Funcionario david = new Contador();
        david.setNombre("David A");
        david.setDocumento("dfsdsdsdg");
        david.setSalario(2000);
        david.setTipo(0);

        System.out.println(david.getSalario());
        System.out.println(david.getBonificacion());
    }
    
}
