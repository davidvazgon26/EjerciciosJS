# Primero cargamos un servidor web para desplegar nuestra pagina web, yo usare de Dockerhub una imagen de nginx

FROM nginx:latest

# Colocando los archivos html en la ruta o direccion del servidor nginx que vamos a utilizar
# Por default la ruta de un servidor linux como nginx es Path: /usr/share/nginx/html 
#Ejemplo de mi carpeta sitio a la ruta de nginx
COPY /sitio /usr/share/nginx/html