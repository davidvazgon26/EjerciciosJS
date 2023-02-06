package com.alura.jdbc.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alura.jdbc.factory.ConnectionFactory;


public class ProductoController_copy {

	public int modificar(String nombre, String descripcion, Integer id, Integer cantidad) throws SQLException {
		// System.out.println(id+" "+nombre+" "+ descripcion+" "+cantidad);
		final Connection con = new ConnectionFactory().recuperaConexion();

		try (con) {
			// Statement statement = con.createStatement();
			final PreparedStatement statement = con.prepareStatement("UPDATE PRODUCTO SET "
					+ " NOMBRE = ? "
					+ ", DESCRIPCION = ? "
					+ ", CANTIDAD = ? "
					+ " WHERE ID = ? ");

			try (statement) {
				statement.setString(1, nombre);
				statement.setString(2, descripcion);
				statement.setInt(3, cantidad);
				statement.setInt(4, id);

				// statement.execute("UPDATE PRODUCTO SET NOMBRE="+nombre+"',
				// DESCRIPCION='"+descripcion+"' WHERE ID ='"+id);

				// statement.execute("UPDATE PRODUCTO SET NOMBRE='" + nombre + "',
				// DESCRIPCION='" + descripcion + "', CANTIDAD='" + cantidad + "' WHERE ID='" +
				// id + "'");
				statement.execute();
				int updateCount = statement.getUpdateCount();
				return updateCount;
			}

		}
	}

	public int eliminar(Integer id) throws SQLException {
		final Connection con = new ConnectionFactory().recuperaConexion();

		try (con) {
			// Statement statement = con.createStatement();
			final PreparedStatement statement = con.prepareStatement("DELETE FROM PRODUCTO WHERE ID = ?");
			try (statement) {
				statement.setInt(1, id);

				statement.execute();

				return statement.getUpdateCount();
			}
		}

	}

	public List<Map<String, String>> listar() throws SQLException {
		// Creo la conexion
		final Connection con = new ConnectionFactory().recuperaConexion();

		try (con) {
			// Abro la conexion
			final PreparedStatement statement = con
					.prepareStatement("SELECT ID, NOMBRE, DESCRIPCION, CANTIDAD FROM PRODUCTO");
			try (statement) {
				// Hago la operacion en la BD, esta devuelve true o false dependiendo si tuvo
				// exito o no la query
				statement.execute();
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
				return resultado;
			}
		}
	}

	public void guardar(Map<String, String> producto) throws SQLException {
		final Connection con = new ConnectionFactory().recuperaConexion();

		try (con) {
			con.setAutoCommit(false); // con esta linea aplico Rollback //Esto es solo una parte, si solo lo dejas con
										// estro ya no se registrara nada en la BD

			// Modificando codigo anterior para aplicar PreparedStatement para prevenir
			// inyeccion de codigo o querys en la sentencia SQL
			// Codigo anterior:
			/**
			 * Statement statement = con.createStatement();
			 * statement.execute("INSERT INTO PRODUCTO(nombre, descripcion, cantidad)"
			 * + " VALUES('"+ producto.get("NOMBRE") + "','"
			 * + producto.get("DESCRIPCION") + "', "
			 * + producto.get("CANTIDAD")+")",
			 * Statement.RETURN_GENERATED_KEYS); //Para saber si el elemento fue creado con
			 * exito, recuperamos el id asignado
			 */

			// Nuevo codigo:
			// TAmbien se agrego una regla de negocio que los nuevos registros no puedan
			// tener mas de 50 en cantidad
			String nombre = producto.get("NOMBRE");
			String descripcion = producto.get("DESCRIPCION");
			Integer cantidad = Integer.valueOf(producto.get("CANTIDAD"));
			Integer maximoCantidad = 50;

			final PreparedStatement statement = con.prepareStatement("INSERT INTO PRODUCTO "
					+ "(nombre, descripcion, cantidad)"
					+ " VALUES (?, ?, ?)",
					Statement.RETURN_GENERATED_KEYS);

			try (statement) {
				do {
					int cantidadParaGuardar = Math.min(cantidad, maximoCantidad);
					ejecutaRegistro(nombre, descripcion, cantidadParaGuardar, statement);
					cantidad -= maximoCantidad;
				} while (cantidad > 0);

				con.commit(); // con esto garantizamos que se guarde la informacion en la base de datos
								// despues de pasar todas las validaciones y logica nuestra transaccion.
			} catch (Exception e) {
				con.rollback(); // Con esto grantizamos que si ocurre algun error deje todo como estaba en la BD
			}

		}

	}

	//Se separo en un metodo aparte para aplicar las reglas de negocio en el metodo guardar.
	private void ejecutaRegistro(String nombre, String descripcion, Integer cantidad, PreparedStatement statement)
			throws SQLException {
		statement.setString(1, nombre);
		statement.setString(2, descripcion);
		statement.setInt(3, cantidad);

		statement.execute();

		// Recuperamos en consola los id creados
		final ResultSet resultSet = statement.getGeneratedKeys();

		try(resultSet){  // Para cerrar con Autoclosable
			while (resultSet.next()) {
				System.out.println(String.format("Fue insertado el producto de ID %d", resultSet.getInt(1)));
			}
		}
	}

}
