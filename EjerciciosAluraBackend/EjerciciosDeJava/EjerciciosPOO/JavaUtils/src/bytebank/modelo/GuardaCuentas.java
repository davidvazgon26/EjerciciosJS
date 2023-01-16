package EjerciciosPOO.JavaUtils.src.bytebank.modelo;

public class GuardaCuentas {
    // Creamos un objeto para guardar muchas Cuentas
    // PErmitirnos agregat cuentas con un metodo
    // guardarCuentas.adiciona(cuenta)
    //obtener, remover, etc.

    Cuenta [] cuenta = new Cuenta[10];
    int indice = 0;

    public void adicionar(Cuenta cc) {
        cuenta[indice]= cc;
        indice++;
    }

    public Cuenta obtener(int indice) {
        return cuenta[indice];
    }

}
