package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
// import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestArregloReferencias {
	public static void main(String[] args) {

		CuentaCorriente cc = new CuentaCorriente(23, 44);

		// [ new |cc |null |null |null ]
		Cuenta[] cuentas = new CuentaCorriente[5];
		cuentas[1] = cc;

		// CuentaAhorros ca = new CuentaAhorros(44, 55);

		cuentas[0] = new CuentaCorriente(11, 99);
		System.out.println(cuentas[0]);

		for (int i = 0; i < cuentas.length; i++) {
			System.out.println(cuentas[i]);
		}

	}

}
