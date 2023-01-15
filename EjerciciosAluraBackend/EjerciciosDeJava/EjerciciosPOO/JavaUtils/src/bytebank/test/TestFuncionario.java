package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Contador;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Funcionario;

public class TestFuncionario {

	public static void main(String[] args) {
		Funcionario diego = new Contador();
		diego.setDocumento("Diego");
		diego.setDocumento("444556665");
		diego.setSalario(2000);
		diego.setTipo(0);
		
		System.out.println(diego.getSalario());
		System.out.println(diego.getBonificacion());
	}
}
