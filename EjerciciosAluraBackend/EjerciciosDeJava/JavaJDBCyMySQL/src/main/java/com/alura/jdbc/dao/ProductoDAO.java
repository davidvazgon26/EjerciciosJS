package com.alura.jdbc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

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
	
	//Buscar los productos por el id de la categoria.
   	public List<Producto> listar(Integer categoriaId) {
		List<Producto> resultado = new ArrayList<>();

		try{
			final PreparedStatement statement = con
					.prepareStatement("SELECT ID, NOMBRE, DESCRIPCION, CANTIDAD"
					+ " FROM PRODUCTO"
					+ " WHERE CATEGORIA_ID = ?");
			try (statement) {
				statement.setInt(1, categoriaId);
				statement.execute();

				final ResultSet resultSet = statement.getResultSet();

				try (resultSet) {
					while (resultSet.next()) {
						resultado.add(new Producto(
								resultSet.getInt("ID"),
								resultSet.getString("NOMBRE"),
								resultSet.getString("DESCRIPCION"),
								resultSet.getInt("CANTIDAD")));
					}
				}
			}
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return resultado;
	}

    public int modificar(String nombre, String descripcion, Integer cantidad, Integer id) {
        try {
            final PreparedStatement statement = con.prepareStatement(
                    "UPDATE PRODUCTO SET "
                    + " NOMBRE = ?, "
                    + " DESCRIPCION = ?,"
                    + " CANTIDAD = ?"
                    + " WHERE ID = ?");

            try (statement) {
                statement.setString(1, nombre);
                statement.setString(2, descripcion);
                statement.setInt(3, cantidad);
                statement.setInt(4, id);
                statement.execute();

                int updateCount = statement.getUpdateCount();

                return updateCount;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

	public int eliminar(Integer id) {
		try {
            final PreparedStatement statement = con.prepareStatement("DELETE FROM PRODUCTO WHERE ID = ?");

            try (statement) {
                statement.setInt(1, id);
                statement.execute();

                int updateCount = statement.getUpdateCount();

                return updateCount;
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
	}
}
