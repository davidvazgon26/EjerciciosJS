package EjerciciosPOO.bytebankpolimorfismo.src.com.bytebank.modelo;

public abstract class Cuenta {

    private static int total = 0;

    protected double saldo;
    private int agencia;
    private int numero;
    private Cliente titular;

    public Cuenta (int agencia, int numero){
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 100; // esto significa que cada cuenta comienza con un saldo de 100.
        System.out.println("Recuerda que todas las cuentas inician con saldo de 100");
        System.out.println("Estoy creando una cuenta");
        total++;
        System.out.println("El total de cuentas creadas es de: " + Cuenta.getTotal());
    }

    public abstract void depositar(double valor);

    public void retirar(double valor){
        /*
        // if(this.saldo>=valor){
        //     this.saldo -= valor;
        //     System.out.println("Se realizo retiro por: "+valor);
        //     return true;
        // }else{
        //     return false;
        // }
        */
            if (this.saldo<valor) {
                throw new SaldoInsuficienteException("No tienes suficiente saldo");
            }

    }
    public boolean transferir(double valor, Cuenta cuenta){
        if (this.saldo>=valor) {
            this.retirar(valor);
           cuenta.depositar(valor); 
            System.out.println("Transferencia exitosa");
           return true;
        } else {
            System.out.println("No se realizo la transferencia por falta de saldo, tu saldo es de: "+this.saldo);
            return false;
        }
    }

    public double getSaldo(){
        return this.saldo;
    }

    public int getAgencia() {
        return agencia;
    }
    public void setAgencia(int agencia) {
        this.agencia = agencia;
    }
    public int getNumero() {
        return numero;
    }
    public void setNumero(int numero) {
        this.numero = numero;
    }
    public Cliente getTitular() {
        return titular;
    }
    public void setTitular(Cliente titular) {
        this.titular = titular;
    }

    public static int getTotal(){
        return Cuenta.total;
    }

    @Override
    public String toString() {
        return "Numero: " + this.numero + ", Agencia No: " + this.agencia;
    }

    
}
