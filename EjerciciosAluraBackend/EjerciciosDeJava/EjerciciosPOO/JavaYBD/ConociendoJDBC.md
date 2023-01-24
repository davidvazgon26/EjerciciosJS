# ¿Qué es JDBC?

El JDBC es un API del Java que posibilita que una aplicación construida en el lenguaje consiga introducir un banco de datos configurado local o remotamente. API es compuesta por los paquetes java.sql y javax.sql, incluidos en el JavaSE. Por medio de las clases e interfaces dados por esos dos paquetes, las personas pueden desenvolver softwares que introduzcan cualquier fuente de datos, desde bancos relacionales hasta planillas.

## Componentes

La API JDBC es compuesta por dos componentes centrales. En primer lugar, podemos hablar de los paquetes (Java.sql y Javax.sql) que contienen las clases e interfaces que padronizan la comunicación de aplicación Java con una base de datos

Otro elemento importante son los drivers, verdaderos responsables por la conección e interacción con un banco específico. Un driver JDBC es una clase que implementa la interface java.sql.Driver. Muchos drivers son totalmente desarrollados con el uso de Java, lo que colabora para ser cargados de manera dinámica.

Los drivers también pueden ser escritos de forma nativa, accesando otras bibliotecas u otros drivers del sistema que permitan acceso a una base de datos determinada.

La clase DriverManager define un conjunto básico de operaciones para la manipulacion del driver adecuado para la conección con un banco. Además de eso, ella también es responsable por realizar la conección inicial.

## Tipos de drivers

Todo driver JDBC debe dar soporte mínimo a las funcionalidades especificadas en el estándar ANSI2 SQL-92. A través del driver, la aplicación Java introduce las implementaciones de clases e interfaces que van a permitir la ejecución de los comandos SQL en una base de datos.

Hoy la arquitectura del JDBC posee cuatro tipos de drivers diferentes:

* Tipo 1: La JDBC-ODBC posibilita el acceso a drivers del tipo ODBC, un estándar ya consolidado para el acceso a bases de datos.
* Tipo 2: En este tipo de driver es implementado el protocolo del propietario del banco de datos. El transforma las llamadas JDBC en llamadas del banco con el uso de la API propietária.
* Tipo 3: Este tipo de driver hace la conversión de las chamadas JDBC en otras llamadas del banco de datos, que son dirigidas para una capa intermediaria de software, el middleware. Así, la llamada será convertida para el protocolo del banco.
* Tipo 4: Son escritos puramente en Java e implementan el protocolo propietario del banco de datos. En general, tiene desempeño superior, ya que introducen directamente el SGBD, sistema gerenciador de banco de datos.

## Usando el JDBC

Ahora vamos a ver de manera práctica como utilizar el JDBC para implementar una conexión con una base de datos. En los ejemplos abajo, utilizamos el postgresql como fuente, pero la idea central puede ser replicada para otros bancos de datos relacionales

Como en una receta de torta, vamos a seguir un guion básico para a manipulacion de los datos. Nuestros pasos iniciales serán:

Definir la clase que implementa el driver JDBC, vamos a usar org.postgresql.Driver;
Definir el *string de conexión del banco de datos, básicamente una cadena de caracteres con informaciones para conectar. Es importante mencionar que la manera de definir esta string varía entre bancos diferentes. Tú puedes explorar más formas de escribir esas strings accesando ConnectionString;
Definir el nombre de usuario y contraseña (aquí llamada de "senha") para conectarnos en el banco de datos.

### Codigo Conexion:

```
//Informacion para conectar con el banco de datos.
String stringConexion = "jdbc:postgresql://localhost:5432/nameBD";
String usuario="usuario";
String password=;"password*;**";(Exception ex)
    throw new RuntimeException(ex.getMessage());
try{
    //Cargando el Driver del banco de datos
    Class.forName("org.postgresql.Driver");

    //Creando la conexion con el banco de datos.
    Connection con = DriverManager.getConnection(stringConexion, usuario,password);
}catch(Exception ex){
    throw new RuntimeException(ex.getMessage());
}
```

### Haciendo una consulta a la BD despues de creada la conexion:

```
//Creando la conexion con la BD
Connection connect = getConnection();

//Creando un objeto conteniendo los comandos SQL
Statement stmt = connect.createStatement();

//String con el comando SQL a ser ejecutado
String sql = "Select * FROM tabla";

//Como el objetivo y la realizacion de una consulta en los bancos de datos, vamos a elegir, el retorno e iniciar un objeto ResultSet especifico para tratar retorno de consulta.
ResultSet rs = stmt.executeQuery(sql);

//atravesando el objeto y exhibiendo los datos
while(rs.next()){
    System.out.println("#"+ rs.getInt("id") + " # " + rs.getString("name"));
}

//Cerrando el objeto
rs.close();
//Cerrando el objeto
stmt.close();

// Cerrando la conexion
connect.close();
```

### Operaciones CRUD

Solo se mostrara el codigo del INSERT pero para el resto de operaciones es el mismo codigo, solo reemplazando por la query por las otras operaciones (UPDATE y DELETE ademas de INSERT).

```
// Creando una conexion con el banco de datos.
Connection connect = getConnection();

// String con el comando SQL para ser ejecutando en el banco.
String sql = "INSERT INTO nameTable VALUES (?,?,?)";

// Creando un objeto conteniendo los comandos SQL.
PreparedStatement ps = connect.prepareStatement(sql);
ps.setLong(1,2);
ps.setString(2,"James T. Kirk");
ps.setString(3,"mat03");

// Ejecutando el comando en la base de datos.
int resultado = ps.executeUpdate(sql);
if(resultado == 1){
    System.out.println("Datos insertados con exito");
}

// Cerrando el objeto
ps.close();

// Cerrando la conexion.
connect.close();
```