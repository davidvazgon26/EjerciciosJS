package EjerciciosPOO.bytebankpolimorfismo;

public class Contador extends Funcionario{

    @Override
    public double getBonificacion(){
        System.out.println("Llmando al metodo del contador");
        return 200;
    }
    
}
