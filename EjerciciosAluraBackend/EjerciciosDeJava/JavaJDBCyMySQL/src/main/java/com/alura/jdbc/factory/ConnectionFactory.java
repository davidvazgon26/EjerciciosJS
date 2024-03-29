package com.alura.jdbc.factory;

import java.sql.Connection;
import java.sql.SQLException;
import javax.sql.DataSource;
import com.mchange.v2.c3p0.ComboPooledDataSource;

public class ConnectionFactory {
    // Utilizando un pool de dataset para administrar nuestras conexiones
    private DataSource datasource;

    public ConnectionFactory() {
        var pooledDataSource = new ComboPooledDataSource();
        pooledDataSource.setJdbcUrl("jdbc:mysql://localhost:3306/control_de_stock?useTimeZone=true&serverTimeZone=UTC");
        pooledDataSource.setUser("dbuser");
        pooledDataSource.setPassword("dbuser");
        pooledDataSource.setMaxPoolSize(10);

        this.datasource = pooledDataSource;
    }

    public Connection recuperaConexion() {
        try {
            return this.datasource.getConnection();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    /**
     * public Connection recuperaConexion() throws SQLException{
     * return DriverManager.getConnection(
     * "jdbc:mysql://localhost:3306/control_de_stock?useTimeZone=true&serverTimeZone=UTC",
     * "dbuser",
     * "dbuser");
     * }
     */
}
