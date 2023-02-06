package com.alura.jdbc.dao;

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
import com.alura.jdbc.modelo.Producto;

//DAO o Data Access Object

public class ProductoDAO {
    final private Connection con;

    public ProductoDAO(Connection con){
        this.con = con;
    }

  	public void guardar(Producto producto) {
		// final Connection con = new ConnectionFactory().recuperaConexion(); //Lo
		// eliminamos para usar el de esta clase que recibe por el constructor
		try (con) {
			final PreparedStatement statement = con.prepareStatement("INSERT INTO PRODUCTO "
					+ "(nombre, descripcion, cantidad, categoria_id)"
					+ " VALUES (?, ?, ?, ?)",
					Statement.RETURN_GENERATED_KEYS);
			try (statement) {
				ejecutaRegistro(producto, statement);
			}
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

    private void ejecutaRegistro(Producto producto, PreparedStatement statement)
			throws SQLException {
		statement.setString(1, producto.getNombre());
		statement.setString(2, producto.getDescripcion());
		statement.setInt(3, producto.getCantidad());
		statement.setInt(4, producto.getCategoriaId());

		statement.execute();

		// Recuperamos en consola los id creados
		final ResultSet resultSet = statement.getGeneratedKeys();

		try(resultSet){  // Para cerrar con Autoclosable
			while (resultSet.next()) {
				producto.setId(resultSet.getInt(1));
				System.out.println(String.format("Fue insertado el producto %s", producto));
			}
		}
	}

	public List<Producto> listar(){
				// Creo una lista para guardar los resultados.
		List<Producto> resultado = new ArrayList<>();

		// Creo la conexion
		final Connection con = new ConnectionFactory().recuperaConexion();

		try (con) {
			// Abro la conexion
			final PreparedStatement statement = con
					.prepareStatement("SELECT ID, NOMBRE, DESCRIPCION, CANTIDAD FROM PRODUCTO");
			try (statement) {
				// Hago la operacion en la BD, esta devuelve true o false dependiendo si tuvo exito o no la query
				statement.execute();

				// Obtengo los datos regresados de la BD por la query realizada.
				final ResultSet resultSet = statement.getResultSet();

				// Recorro el ResultSet con resultSet.next() para ir insertando los registros en la lista.
				try(resultSet){
				while (resultSet.next()) {
					Producto fila = new Producto(resultSet.getInt("ID"),
					resultSet.getString("NOMBRE"),
					resultSet.getString("DESCRIPCION"),
					resultSet.getInt("CANTIDAD"));

					resultado.add(fila);
				}
			}
		}
		return resultado;
		}catch(SQLException e){
			throw new RuntimeException(e);
		}
	}
}
