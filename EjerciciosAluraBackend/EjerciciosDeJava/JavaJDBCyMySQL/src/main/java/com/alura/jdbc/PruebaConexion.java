package JavaJDBCyMySQL.src.main.java.com.alura.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PruebaConexion {

    public static void main(String[] args) throws SQLException {
        Connection con = DriverManager.getConnection(
                "jdbc:mariadb://localhost:3306/control_de_stock?useTimeZone=true&serverTimeZone=UTC",
                "dbuser",
                "dbuser");

        System.out.println("Cerrando la conexión");

        con.close();
    }

}
