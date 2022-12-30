package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo;

public class CuentaCorriente extends Cuenta {

    // constructor, requiere envio de parametros por como esta el constructor padre
    public CuentaCorriente(int agencia, int numero){
        super(agencia, numero);
    }

    @Override
    public void retirar(double valor) {
        // comision del 2% por las transferencias o retiros de la cuenta corriente
       /*
         double valorARetirar = valor + 0.2;
        return super.retirar(valorARetirar);
        */
        double valorARetirar = valor + 0.2;
        super.retirar(valorARetirar);
    }

    @Override
    public void depositar(double valor) {
        this.saldo = this.saldo + valor;        
    }
    
}
