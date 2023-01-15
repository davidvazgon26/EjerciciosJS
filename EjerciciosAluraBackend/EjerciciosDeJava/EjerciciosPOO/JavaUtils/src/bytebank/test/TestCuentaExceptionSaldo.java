package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.SaldoInsuficienteException;

public class TestCuentaExceptionSaldo {
	
	public static void main(String[] args) {
		Cuenta cuenta = new CuentaAhorros(123, 456);
		cuenta.deposita(210);
		try {
			cuenta.saca(2000);
			cuenta.saca(100);
		} catch (SaldoInsuficienteException e) {
			e.printStackTrace();
		}
		
	}

}
