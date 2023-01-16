package EjerciciosPOO.JavaUtils.src.bytebank.test;

import EjerciciosPOO.JavaUtils.src.bytebank.modelo.Cuenta;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaAhorros;
import EjerciciosPOO.JavaUtils.src.bytebank.modelo.CuentaCorriente;

public class TestArrayReferencias {
    public static void main(String[] args) {

        // Creando un arreglo de Cuentas corrientes
        // Cambiando el tipo de CuentaCorriente a Cuentas para poder guardar de varios tipos en el arreglo
        Cuenta[] cuentas = new Cuenta[5];

        // Crando cuenta correinete 1 para guardar en posicion 0 del arreglo
        CuentaCorriente cc1 = new CuentaCorriente(22, 11);
        cuentas[0] = cc1;

        // Creando cuenta corriente 2 para guardar en posicion 1 del arreglo
        CuentaCorriente cc2 = new CuentaCorriente(22, 22);
        cuentas[1] = cc2;
        //Viendo el numero de cuenta de la cuenta guardadad en la posicion 1
        // System.out.println(cuentas[1].getNumero());

        //Agregando cuenta de ahorro para comprobar que acepta ambos tipos de cuenta
        CuentaAhorros ca1 = new CuentaAhorros(22, 22);
        cuentas[2] = ca1;

        // Creando referencia
        CuentaCorriente ref = (CuentaCorriente) cuentas[0]; // ref a cc1  // Cuendo existen varios tipos en el arreglo hay que decirle como debe tomar la referencia, esto es castear
        System.out.println(cc2.getNumero()); // 22
        System.out.println(ref.getNumero()); // 11
        System.out.println(ca1.getNumero()); // 22

    }

}
