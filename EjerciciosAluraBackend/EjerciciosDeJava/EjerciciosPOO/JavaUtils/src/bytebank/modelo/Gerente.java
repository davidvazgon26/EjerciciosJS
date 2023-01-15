package EjerciciosPOO.JavaUtils.src.bytebank.modelo;

//                  extiende de
public class Gerente extends Funcionario implements Autenticable {

    // Sobre-escritura de metodo
    public double getBonificacion() {
        System.out.println("EJECUTANDO DESDE GERENTE");
        return 2000;
    }

    @Override
    public void setClave(String clave) {

    }

    @Override
    public boolean iniciarSesion(String clave) {
        return false;
    }
}
