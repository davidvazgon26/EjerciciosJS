package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Administrador;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Gerente;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.SistemaInterno;

public class TestSistemaInterno {

	public static void main(String[] args) {
		SistemaInterno sistema = new SistemaInterno();
		Gerente gerente1 = new Gerente();
		Administrador admin = new Administrador();
		
		sistema.autentica(gerente1);
		sistema.autentica(admin);
	}
}
