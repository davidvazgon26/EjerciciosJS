package EjerciciosPOO.JavaUtils.src.bytebank.modelo;

public class CuentaAhorros extends Cuenta {
	
	public CuentaAhorros(int agencia, int numero) {
		super(agencia, numero);
	}

	@Override
	public void deposita(double valor) {
		this.saldo = this.saldo + valor;
	}
	
	@Override
	public String toString() {
		return super.toString();
	}

}
