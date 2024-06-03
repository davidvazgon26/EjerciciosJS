Comandos para contenedores

Crea y ejecuta un contenedor a partir de una imagen, con un nombre personalizado:

docker run --name <nombre_contenedor> <nombre_imagen>

Ejecutar un contenedor con y publicar un puerto(s) del contenedor al host.

docker run -p <puerto_host>:<puerto_contenedor> <nombre_imagen>

Ejecutar un contenedor en segundo plano

docker run -d <nombre_imagen>

Iniciar o detener un contenedor existente:

docker start|stop <nombre_del_contenedor> (o <id_del_contenedor>)

Eliminar un contenedor detenido:

docker rm <nombre_del_contenedor>

Abrir un shell dentro de un contenedor en ejecución:

docker exec -it <nombre_del_contenedor> sh

Obtener y seguir los logs de un contenedor:

docker logs -f <nombre_contenedor>

Inspeccionar un contenedor en ejecución:

docker inspect <nombre_del_contenedor> (o <id_del_contenedor>)

Para listar los contenedores actualmente en ejecución:

docker ps

Listar todos los contenedores docker (en ejecución y parados):

docker ps --all

Ver las estadísticas de uso de recursos

docker container stats
