# Comandos de linea de comandos tipo Unix


Diapositivas en linea en que se basa este documento [Link](https://slides.com/alexfernandez/unix-floqq)

Videos curso Unix [link](https://pinchito.es/2019/curso-unix.html)

Documento [Markdown.es](https://markdown.es/sintaxis-markdown/#links)

## Apuntes:

**Nota el signo $ en los comandos escritos en este archivo se refiere al prompt de la consola, no incluir en tus comandos**

### Pintar una linea de codigo:

    echo <cadena>

ejemplo:

`
$ echo "hola, mundo"
`

respuesta:

    Hola mundo

### Variables

van a manera de tag: ` <variable>`

## Comandos

## file:

Muestra el tipo de archivo o directorio que es el invocado en la consulta.

ejemplo:

`
$ file ejemplo.txt
`

respuesta:
    
    ejemplo.txt: UTF-8 Unicode text

ejemplo 2:

`$ file pic`

respuesta:

    pic: directory

ejemplo 3:

`$ file página.html`

respuesta:

    página.html: HTML document, UTF-8 Unicode text


## ls

muestra los archivos existentes en la ruta actual

ejemplo:

`$ ls`

respuesta:

    user:/mnt/c/Users/user/Desktop/Comandos Unix/floqq-unix$ ls
    LICENSE  README.md  ejemplo.txt  pic  página.html  scripts  soluciones.md

ejemplo 2:

`$ ls pic`          (pic es otro directorio)

respuesta:

    bash.png  wikipedia-ls.png

## pwd

Muestra la ruta o directorio de trabajo actual

ejemplo:

`$ pwd`

respuesta:

    /mnt/c/Users/user/Desktop/Comandos Unix/floqq-unix

## cd

cambiar de directorio segun la ruta dada

ejemplo:

`$ cd pic`

respuesta:

    /mnt/c/Users/user/Desktop/Comandos Unix/floqq-unix/pic$

ejemplo 2:

`$ cd ..`

respuesta:

    /mnt/c/Users/user/Desktop/Comandos Unix/floqq-unix$

## tree

Muestra el directorio a manera de diagrama

ejemplo:

`$ tree`

respuesta:

    .
    ├── LICENSE
    ├── README.md
    ├── ejemplo.txt
    ├── pic
    │   ├── bash.png
    │   └── wikipedia-ls.png
    ├── página.html
    ├── scripts
    │   ├── crea-un-monton.sh
    │   ├── cuenta-ficheros.sh
    │   ├── hola-mundo.sh
    │   └── lista-ficheros.sh
    └── soluciones.md

    2 directories, 11 files

**Nota:** en caso de no funcionar el comando es muy probable que la consola te de las instrucciones a ejecutar...

ejemplo de caso con Ubuntu:

    Command 'tree' not found, but can be installed with:

    sudo apt install tree

Se recomienda actualizar la shell antes de ejecutar el comando.

`
$ sudo apt-get update
`

`$ sudo apt install tree`


## cat

imprime el o los ficheros que se le pasen como parametro

ejemplo:

`$ cat ejemplo.txt página.html`

respuesta:

    La cabra se subió al monte.
    Dábale arroz a la zorra el abad.
    Líneas separadas por saltos de línea.
    Colecciono moscas, pero no estoy loco.
    Dame pan y llámame tonto.
    <!doctype html>
    <html>
    <head>
    <title>Mi página</title>
    <body>
    <h1>Bienvenidos a mi página</h1>
    <p>Hola, bienvenidos a mi excelente página</p>
    <h2>En construcción</h2>
    Esta página está permanentemente en construcción.
    <img src="working.gif">
    Como puede verse en este gráfico.
    </body>
    </html>

## touch

crea el archivo pasado por parametro y si ya existe actualiza la fecha de modificacion.

ejemplo:

`$ touch novedad `

respuesta:

    no hay respuesta, si usas el comando ls puedes ver en nuevo
    archivo en el directorio.

## cp

crea una copia de fichero pasado por parametro a otro.

ejemplo:

`$ cp ejemplo.txt copia.txt `

respuesta:

    no hay respuesta, si usas el comando ls puedes ver en nuevo
    archivo en el directorio y con el comando cat ver lo que hay dentro del nuevo fichero.

## mv

Mueve fichero(s) al nuevo directorio segun los parametros dados en el comando. Si en lugar de directorio le pasas el nombre de un fichero este sera renombrado con el segundo parametro.

ejemplo para mover al directorio pic:

`$ mv ficheromv.txt ejemplo.txt pic `

respuesta:

    no hay respuesta, si usas el comando cd pic para ir al directorio pic y usas el comando ls ahi encontraras el fichero

ejemplo para renombrar fichero:

`$ mv ficheromv.txt ejemplorenombrar.txt `

respuesta:

    no hay respuesta, si usas el comando ls veras que el fichero
    cambio de nombre a "ejemplorenombrar.txt"

ejemplo para usar ambas funciones a la vez:

`$ mv ficheromv.txt pic/ejemplorenombrar.txt `

respuesta:

    no hay respuesta, si usas el comando cd pic para ir al directorio pic y usas el comando ls ahi encontraras el fichero

**Nota** en caso de querer regresar fichero de un directorio interno (por ejemplo de pic a floqq-unix) puedes usar

`$ mv ficheromv.txt cd .. `

    marcara error, pero si vas a tu directorio floqq-unix ahi esta el fichero.


## Globbing 

Este no es un commando en si, sino comodines para nuestros comandos

* "*" para traer todo o cualquier cosa que cumpla el criterio
* "?" para caracteres faltantes o busquedas

ejemplo para mover todos los archivos con extension .md a un nuevo directorio :

`$ mv *.md pic/`  

o

`$ mv LICE?CE pic/`

resultado:

    sin resultado visible, debes usar cd y ls para comprobar

## rm

Elimina ficheros

ejemplo:

`$ rm ficheromv.txt`

resultado:

    sin resultados visibles, debe usar ls para comprobar

**Nota** en el caso de querer eliminar un fichero no existente nos dara un mensaje de error:

ejemplo volviendo a eliminar el mismo fichero que ya no existe:

`$ rm ficheromv.txt`

resultado:

    rm: cannot remove 'ficheromv.txt': No such file or directory

## mkdir

Crear un directorio

ejemplo:

`$ mkdir newdir`

resultado:

    sin resultados visibles, debe usar ls para comprobar

## rmdir

Elimina un directorio, pero solo si este esta vacio.

ejemplo:

`$ rmdir newdir`

resultado:

    sin resultados visibles, debe usar ls para comprobar

## df

VEr el espac

ejemplo:

`$ mkdir newdir`

resultado:

    sin resultados visibles, debe usar ls para comprobar