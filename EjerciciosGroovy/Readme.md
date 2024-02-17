## Informacion de como iniciar con Groovy

Los scripts de Groovy son programas escritos en el lenguaje de programación Groovy. **Groovy es un lenguaje de programación dinámico que se ejecuta en la plataforma Java** y es compatible con la sintaxis de Java. Los scripts de Groovy se utilizan comúnmente para la automatización de tareas, el desarrollo de aplicaciones web, el scripting en entornos de pruebas y otras tareas de programación.

Los scripts de Groovy son archivos de texto que contienen código fuente escrito en Groovy. Pueden ejecutarse directamente desde la línea de comandos o integrarse en aplicaciones Java existentes. Los scripts de Groovy se interpretan y ejecutan utilizando el intérprete de Groovy, que compila el código Groovy en bytecode Java en tiempo de ejecución.

Los scripts de Groovy tienen acceso a todas las bibliotecas y clases de Java, lo que les permite aprovechar la amplia funcionalidad disponible en el ecosistema de Java. Además, Groovy agrega características adicionales al lenguaje Java, como el soporte para closures, metaprogramación y una sintaxis más concisa, lo que facilita el desarrollo rápido de aplicaciones y scripts.

En resumen, los scripts de Groovy son programas escritos en el lenguaje de programación Groovy que se utilizan para automatizar tareas, desarrollar aplicaciones y realizar scripting en entornos de pruebas, entre otros casos de uso.

- Necesitas el **sdkman** que puedes descargar de: https://sdkman.io/install o instalar desde la linea de comandos

- La **documentacion de Groovy** la encuentras en el siguiente enlace: https://groovy-lang.org/

        **Ojo necesitas un sistema basado en unix para correr el sdkman**

* Comando para instalar desde la consola el **sdkman** : curl -s "https://get.sdkman.io" | bash

* Validar version con comando: sdk version

* Agregar sdkman al path con el comando: source "$HOME/.sdkman/bin/sdkman-init.sh"

* puedes ver las versiones de groovy con el comando: sdk list groovy

* Cuando definiste la version de groovy a instalar puedes usar el comando: sdk install groovy X.X.X (las x son la version)

* puedes validar la version de groovy instalada con el comando: groovy -version

* Tambien puedes seguir los mismos pasos para instalar java: sdk list java, sdk install java y java -version. si ha sdk install java no le agregas la version te instalara la version por default en ese momento

* **Para abrir el entorno de desarrollo de Groovy usa el comando:** groovyConsole

Groovy es Java, con la ventaja de ser opcionalmente tipado.

Groovy puede funcionar como un tipo de bash.

        **Ojo Groovy se ve mas como un complemento para Java, no un sustituto**

    * Groovy es opcionalmente tipado
    *

## Instalacion de Gradle para crear proyectos compatibles con Groovy

        * Puedes comprobar si lo tienes instalado con el comando gradle --version
        * Si no lo tienes instalado lo puedes instalar con Sdk man
        * Puedes ver las versiones disponibles con el comando sdk list gradle
        * puedes instalar gradle con el comando sdk install gradle o si quieres una version en especifico con sdk install gradle y la version deseada, por ejemplo `sdk install gradle 6.8.3`
        * Creas la carpeta o directorio donde vas a guardar tu proyecto
        * Te posicionas en esa direccion en la consola
        * Utiliza el comando gradle init para iniciarlo
        * Seguimos o definimos los parametros del proyecto conforme lo vaya pidiendo el Daemon o wizard.
....
