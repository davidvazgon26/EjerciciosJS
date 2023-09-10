package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.*;

public class TestControlBonificacion {

	public static void main(String[] args) {
		Funcionario diego = new Contador();
		diego.setSalario(2000);

		EjerciciosPOO.JavaUtils.src.bytebank.modelo.Gerente jimena = new EjerciciosPOO.JavaUtils.src.bytebank.modelo.Gerente();
		jimena.setSalario(10000);

		EjerciciosPOO.JavaUtils.src.bytebank.modelo.Contador alexiz = new EjerciciosPOO.JavaUtils.src.bytebank.modelo.Contador();
		alexiz.setSalario(5000);

		ControlBonificacion controlBonificacion = new ControlBonificacion();

		controlBonificacion.registrarSalario(diego);
		controlBonificacion.registrarSalario(jimena);
		controlBonificacion.registrarSalario(alexiz);
	}

}
