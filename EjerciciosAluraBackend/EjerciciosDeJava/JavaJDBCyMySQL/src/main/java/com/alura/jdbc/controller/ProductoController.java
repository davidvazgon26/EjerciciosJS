package com.alura.jdbc.controller;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alura.jdbc.factory.ConnectionFactory;


public class ProductoController {

	public void modificar(String nombre, String descripcion, Integer id) {
	}

	public int eliminar(Integer id) throws SQLException {
		Connection con = new ConnectionFactory().recuperaConexion();

		Statement statement = con.createStatement();

		statement.execute("DELETE FROM PRODUCTOO WHERE ID ="+id);

		return statement.getUpdateCount();

	}

	public List<Map<String,String>> listar() throws SQLException {
		// Creo la conexion
		Connection con = new ConnectionFactory().recuperaConexion();
		// Abro la conexion
		Statement statement = con.createStatement();
		// Hago la operacion en la BD, esta devuelve true o false dependiendo si tuvo
		// exito o no la query
		statement.execute("SELECT ID, NOMBRE, DESCRIPCION, CANTIDAD FROM PRODUCTO");
		// Mando el error en caso de existir un nivel arriba o a donde llaman esta
		// funcion con el throws SQLException

		// Obtengo los datos regresados de la BD por la query realizada.
		ResultSet resultSet = statement.getResultSet();

		// Creo una lista para guardar los resultados.
		List<Map<String, String>> resultado = new ArrayList<>();

		// Recorro el ResultSet con resultSet.next() para ir insertando los registros en
		// la lista.

		while (resultSet.next()) {
			Map<String, String> fila = new HashMap<>();
			fila.put("ID", String.valueOf(resultSet.getInt("ID")));
			fila.put("NOMBRE", resultSet.getString("NOMBRE"));
			fila.put("DESCRIPCION", resultSet.getString("DESCRIPCION"));
			fila.put("CANTIDAD", String.valueOf(resultSet.getInt("CANTIDAD")));

			resultado.add(fila);
		}

		con.close();
		return resultado;
	}

    public void guardar(Map<String, String> producto) throws SQLException {
		Connection con = new ConnectionFactory().recuperaConexion();

		Statement statement = con.createStatement();
		statement.execute("INSERT INTO PRODUCTO(nombre, descripcion, cantidad)" 
		+ " VALUES('"+ producto.get("NOMBRE") + "','"
		+ producto.get("DESCRIPCION") + "', "
		+ producto.get("CANTIDAD")+")",
		Statement.RETURN_GENERATED_KEYS); //PAra saber si el elemento fue creado con exito, recuperamos el id asignado

		//Recuperamos en consola los id creados
		ResultSet resultSet = statement.getGeneratedKeys();

		while (resultSet.next()) {
			System.out.println(String.format("Fue insertado el producto de ID %d", resultSet.getInt(1)));
		}
	}

}
