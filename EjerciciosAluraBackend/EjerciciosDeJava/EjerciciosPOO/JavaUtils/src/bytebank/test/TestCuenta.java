package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestCuenta {

	public static void main(String[] args) {
		CuentaCorriente cc = new CuentaCorriente(0, 0);
		int num = 0;
		int resultado = 30 / num;
		System.out.println(resultado);

		CuentaAhorros ca = new CuentaAhorros(2, 3);
		cc.deposita(2000.00);
		cc.transfiere(1000, ca);

		System.out.println(cc.getSaldo());
		System.out.println(ca.getSaldo());
	}

}
