Verifica versión de Node: node -v

Verifica versión de npm: npm -v

Instala el CLI de Angular: npm -g @angular/cli

Verifica tu instalación: ng version

Crea tu primer proyecto: ng new my-project

Ejecuta el servidor de desarrollo: ng serve (Dentro de la carpeta de tu proyecto.)

puedes usar ng server -o --port=3500

Si usar ng -version en el proyecto te muestra las versiones utilizadas en ese proyecto.

Extensiones ecomendadas:

- Angular Language Service
- thunder

### Para instalar en un host de firebase

    * vamos a firebase e ingresamos con nuestra cuenta
    * creamos un proyecto
    * desactivamos analytics y le damos crear proyecto
    * ya creado vamos a la seccion de hosting
    * instalamos en nuestro proyecto la herramienta de firebase tools con el siguiente comando:
        npm install -g firebase-tools o comprueba si ya lo tienes instalado con firebase -V
    * Conectas tu consola con la de firebase con el siguiente comando:
        firebase login
    * Damos los permisos con nuestra cuenta e iniciamos el servicio con el comando:
        firebase init
    * Nos saldran opciones de configuracion en consola, solo requerimos la de hosting.
        * Use an existing project (seleccionas el que creaste)
        * Te agregara algunos archivos a tu proyecto, este es indicativo de que va bien todo.
    * Debes compilar tu app para productivo con el comando ng build
    * Te creara la carpeta dist que es la ruta que debes modificar en el archivo firebase.json
    * ahora solo queda regresar a firebase para traernos el comando para hacer deploy que es:
        firebase deploy
    * Listo, en consola tendras el enlace a tu proyecto en productivo, en mi caso es:

           consola o dashboard: https://console.firebase.google.com/project/demoangularbasic/overview

            o

            deploy: https://demoangularbasic.web.app
