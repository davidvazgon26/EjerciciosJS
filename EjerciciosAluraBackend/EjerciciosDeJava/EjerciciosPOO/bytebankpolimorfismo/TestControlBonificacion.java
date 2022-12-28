package EjerciciosPOO.bytebankpolimorfismo;

public class TestControlBonificacion {
    public static void main(String[] args) {
        Funcionario david = new Contador();
        david.setSalario(2000);

        Gerente cecy = new Gerente();
        cecy.setSalario(10000);

        Contador richard = new Contador();
        richard.setSalario(5000);

        ControlBonificacion controlBonificacion = new ControlBonificacion();

        controlBonificacion.registrarSalario(david);
        controlBonificacion.registrarSalario(cecy);
        controlBonificacion.registrarSalario(richard );

    }
}
