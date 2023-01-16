package EjerciciosPOO.JavaUtils.src.bytebank.modelo;

public class GuardaReferencias {
    // Creamos un objeto para guardar muchas Cuentas
    // PErmitirnos agregat cuentas con un metodo
    // guardarCuentas.adiciona(cuenta)
    //obtener, remover, etc.

    Object [] referencia = new Object[10];
    int indice = 0;

    public void adicionar(Cuenta cc) {
        referencia[indice]= cc;
        indice++;
    }

    public Object obtener(int indice) {
        return referencia[indice];
    }

}
