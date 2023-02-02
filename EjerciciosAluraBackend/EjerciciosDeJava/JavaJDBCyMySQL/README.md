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