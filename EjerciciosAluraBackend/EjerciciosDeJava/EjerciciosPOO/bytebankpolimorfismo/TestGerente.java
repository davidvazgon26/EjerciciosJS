package EjerciciosPOO.bytebankpolimorfismo;

public class TestGerente {

    public static void main(String[] args) {
        Gerente cecy = new Gerente();
        cecy.setSalario(6000);
        cecy.setClave("Alura");
        cecy.setTipo(1);

        System.out.println(cecy.getBonificacion());
        System.out.println(cecy.iniciarSesion("Alura"));
    }
    
}
