# Projecto de conexiones a BD con JAva

En este proyecto se pretende utilizar Java con Mysql


* Las conexiones se pueden realizar cargando las librerias manualmente (.jar) o usando Maven
* Para homologar el uso del driver se utilizara JDBC para evitar en caso de cambio de BD, por ejemplo de MySQL a Oracle tener que modificar el codigo, lo cual lo hace mas eficiente.

Imagen de ejemplo:

![digrama conexion app -> bd](./assets//img/Java%20y%20JDBC%20con%20la%20BD%20ejemplo.PNG)


#### Pregunta:

¿Cuál es la ventaja de utilizar una API como la JDBC, basada en interfaces, para realizar la comunicación entre el código y una base de datos relacional?

#### Respuesta:

* Transparencia a la hora de elegir la base de datos o cambiar de una para otra, con muy pocos cambios de código.

* Lo único que va a ser necesario hacer es cambiar la dependencia del driver de base datos y el JDBC se encarga de todo.


### Ejercicio:

Hemos desarrollado el siguiente código para abrir y cerrar una conexión con la base de datos:

```
public class PruebaConexionConBaseDeDatos {
    public static void main(String[] args) throws SQLException {
        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost/control_de_stock?useTimezone=true&serverTimezone=UTC");

        con.close();
    }
}
```

Cuando ejecutamos el codigo anterior aparece el mensaje:  <strong>Access denied for user.</strong>. Como lo solucionamos?

### Respuesta:

Se necesita agregar los parámetros de usuario y contraseña en el método de conexión. codigo:

```
DriverManager.getConnection(
    "jdbc:mysql://localhost/control_de_stock?useTimezone=true&serverTimezone=UTC", 
    "root", 
    "root1234");

```

### En resumen:

* Para acceder a una base de datos necesitamos del driver de conexión;
    * Un driver es simplemente una librería .jar.
* JDBC significa Java DataBase Connectivity;
    * El JDBC define una capa de abstracción entre la aplicación y el driver de la base de datos.
    * Esta capa es compuesta de interfaces que el driver implementa.
* Para abrir una conexión con la base de datos debemos utilizar el método getConnection de la clase DriverManager;
    * El método getConnection recibe tres parámetros. Son ellos la URL de conexión JDBC, el usuario y la contraseña.
    * Nunca olvidar finalizzar o cerrar la conexion a la base de datos.