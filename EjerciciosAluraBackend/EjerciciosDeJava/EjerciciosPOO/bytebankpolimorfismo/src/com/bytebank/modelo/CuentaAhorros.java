package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo;

public class CuentaAhorros extends Cuenta {

    public CuentaAhorros(int agencia, int numero) {
        super(agencia, numero);
        System.out.println("Se creo la cuenta No: "+ numero);
    }

    @Override
    public void depositar(double valor) {
            this.saldo = this.saldo + valor;        
    }

    @Override
    public String toString() {
        return "CuentaAhorros, " + super.toString();
    }

    
    
}
