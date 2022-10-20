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

ejemplo para mover de una ruta a mi ruta actual:

`$ mv pic/*.md . `

respuesta:

    no hay respuesta, esto mueve de la ruta que le pasaste los archivos indicados a tu ruta actual que en los parametros esta representada por "." el punto.

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

Ver el espacio disponible / usado de nuestras unidades de disco

**Nota** para hacerlo un poco mas legible puedes utilizar el parametro -h

ejemplo:

`$ df -h`

resultado:

    Algo similar a esto:

        Filesystem      Size  Used Avail Use% Mounted on
        /dev/sdb        251G  1.4G  237G   1% /
        tmpfs           3.1G     0  3.1G   0% /mnt/wsl
        tools           216G  184G   33G  86% /init
        none            3.1G     0  3.1G   0% /dev
        none            3.1G  4.0K  3.1G   1% /run
        none            3.1G     0  3.1G   0% /run/lock
        none            3.1G     0  3.1G   0% /run/shm
        none            3.1G     0  3.1G   0% /run/user
        tmpfs           3.1G     0  3.1G   0% /sys/fs/cgroup
        drivers         216G  184G   33G  86% /usr/lib/wsl/drivers
        lib             216G  184G   33G  86% /usr/lib/wsl/lib
        C:\             216G  184G   33G  86% /mnt/c



# Comandos de texto

## wc

Cuenta las palabras de un fichero (Word Count)

ejemplo:

`$ wc ejemplo.txt`

respuesta:

      5  30 169 ejemplo.txt

Que son: 5 lineas, 30 palabras, 169 caracteres.


## grep

Busca el patron en un fichero (Global Regular Expression Print)

ejemplo:

`$ grep abad ejemplo.txt`

respuesta:

Dábale arroz a la zorra el 
<span style="color:red">abad</span>


## cut

corta las lineas de texto por la cantidad deseada

ejemplo:

`$ cut -c1-5 ejemplo.txt`

respuesta:

        La ca
        Dába 
        Líne 
        Colec
        Dame 

ejemplo 2:

`$ cut -d' ' -f2 ejemplo.txt`

respuesta:

        cabra    
        arroz    
        separadas
        moscas,
        pan
      

## head

muestra los "n" renglones de inicio del fichero

ejemplo:

`$ head -c 32 ejemplo.txt`

respuesta:

        La cabra se subió al monte.


## tail

muestra los "n" renglones del final del fichero

ejemplo:

`$ tail -c 32 ejemplo.txt`

respuesta:

    oco.
    Dame pan y llámame tonto.

**Nota** si no se incluye el parametro de los caracteres por default te da al rededor de 9 o 10 lineas.


## less

muestra el fichero de manera paginada para navegarlo

ejemplo:

`$ less ejemplo.txt`

respuesta:

    La cabra se subió al monte.
    Dábale arroz a la zorra el abad.
    Líneas separadas por saltos de línea.
    Colecciono moscas, pero no estoy loco.
    Dame pan y llámame tonto.
    ejemplo.txt (END)


## nano

nos permite editar el fichero

ejemplo:

`$ nano ejemplo.txt`

respuesta:

    La cabra se subió al monte.
    Dábale arroz a la zorra el abad.
    Líneas separadas por saltos de línea.
    Colecciono moscas, pero no estoy loco.
    Dame pan y llámame tonto.
    ejemplo.txt (END)


# Procesos en Unix

`$ ps`

ver los procesos corriendo

`$ kill -9 <no de proceso>`

Matar algun proceso corriendo

`$ free`

ver la memoria libre en el sistema

`$ top`

para ver los procesos ordenadamente

`$ time + comando`

sirve para ver cuanto tarda en ejecutarse el comando.

`$ sleep 1`

duerme el proceso por los segundos dados

`$ comando1 && comando2`

para concatenar comandos

`$ comando &`

ejecuta el comando en background, es decir lo deja en segundo plano.


## Enlazar comandos

## ">"

ejemplo:

`$ cat README.md soluciones.md > combinado.md`

resultado:

    combina el texto de ambos ficheros en combinado.md

## ">>"

anade al final del fichero la respuesta

ejemplo:

`$ ccomando >> fichero`

`$ echo "hola, mundo" >> ejemplo.txt`

resultado:

    La cabra se subió al monte.
    Dábale arroz a la zorra el abad.
    Líneas separadas por saltos de línea.
    Colecciono moscas, pero no estoy loco.
    Dame pan y llámame tonto.
    hola, mundo
    ejemplo.txt (END)

**Nota** si solo utilizas un mayor que, lo que hara sera sustituir lo que este dentro del fichero.
 
## "<"

ejemplo:

`$ grep arroz < ejemplo.txt`

resultado:

    Dábale arroz a la zorra el abad.



## "|"

ejemplo:

`$ cat ejemplo.txt | grep "arroz" | grep "abad"`

resultado: filtro las lineas que contengan arroz y abad

    Dábale arroz a la zorra el abad.

## sort

ejemplo:

`$ sort ejemplo.txt`

resultado: ordena las lineas por su primera letra

    Colecciono moscas, pero no estoy loco.
    Dame pan y llámame tonto.
    Dábale arroz a la zorra el abad.
    La cabra se subió al monte.
    Líneas separadas por saltos de línea.


## uniq

Elimina las lineas repetidas

ejemplo:

`$ cat ejemplo.txt | sort | uniq -c`

resultado: 

      1 Colecciono moscas, pero no estoy loco.
      1 Dame pan y llámame tonto.
      1 Dábale arroz a la zorra el abad.
      1 La cabra se subió al monte.
      1 Líneas separadas por saltos de línea.

**Nota** en este caso se utilizo el comando en conjunto con  sort para ordenar, cat para leer y -c para contar.

## split

corta el fichero segun los parametros y crea nuevos con dicha informacion

ejemplo:

`$ split -b <bytes> <file> <prefijo>`

`$ split -b 100 ejemplo.txt DAVG`

resultado: 

      1 Colecciono moscas, pero no estoy loco.
      1 Dame pan y llámame tonto.
      1 Dábale arroz a la zorra el abad.
      1 La cabra se subió al monte.
      1 Líneas separadas por saltos de línea.

**Nota** en este caso se utilizo el comando en conjunto con  sort para ordenar, cat para leer y -c para contar.

## du

obtienes el espacio ocupado por algun archivo

`$ du -sh ejemplo.txt`

## find

busca ficheros por nombre

ejemplo:

`$ find ./pic -name *.png`

resultado:

    ./pic/bash.png
    ./pic/wikipedia-ls.png



# tar

comprime y descomprime ficheros o directorios

`$ tar -czf  <destino.tar.gz> <fichero1> <fichero2>...`

ejemplos comprime:

`$ tar -czf pic.tar.gz pic`


ejemplo descomprime

`$ tar -xzf pic.tar.gz`

# Expresiones Regulares

ver tema de expresiones regulares

ejemplo sencillo de una linea de texto pero puede hacerse con ficheros y demas:

`$ echo "Esto es un ejemplo con cadena" | egrep "[abc]"`

resultado: 

    Esto es un ejemplo con cadena // marca la c y a

ejemplo anterior negado:

`$ echo "Esto es un ejemplo con cadena" | egrep "[^abc]"`

resultado:

    Esto es un ejemplo con cadena // marca todo excepto la c y a

ejemplo con tags:

`$ echo "<img href='aaa'>" | egrep "<[^>]+>"`

resultado:

    <img href='aaa'>
**Nota** los ejercicios se realizan con echo pero en su lugar puede haber un fichero.

**Nota:** [ejercicios de regex](https://alf.nu/RegexGolf?world=regex&level=r00)


# Seguridad

## password 

cambiar el password

## us

Cambiar de usuario

## sudo 

autoriza hacer algo como usuario root

## whoami

identifica el usuario actual o logeado

## users 

muestra los usuarios del equipo

## adduser

permite agregar un usuario nuevo

ejemplo:

`$ sudo adduser usuarioprueba`

resultado:

    [sudo] password for user: 
    Adding user `usuarioprueba' ...
    Adding new group `usuarioprueba' (1002) ...
    Adding new user `usuarioprueba' (1001) with group `usuarioprueba' ...
    Creating home directory `/home/usuarioprueba' ...
    Copying files from `/etc/skel' ...
    New password: 
    Retype new password: 
    passwd: password updated successfully
    Changing the user information for usuarioprueba
    Enter the new value, or press ENTER for the default
            Full Name []: Usuario de Prueba
            Room Number []:
            Work Phone []: 
            Home Phone []: 
            Other []: 
    Is the information correct? [Y/n] y


## w

muestra los usuarios loggeados y que estan haciendo

## chmod

cambiar los permisos de uno o mas ficheros  



`$ sudo chmod 777 fichero`

## permisos

lectura: 4 escritura: 2 ejecucion: 1

todo el mundo accede: 777

## groups

muestra los grupos a los que pertenecemos

## addgroup 

para crear un grupo

**Ejemplo:** `$ adduser user group`  //añade un usuario a un grupo

## chown

cambia el propietario "Change Owner"

`$ sudo chown user:grupo fichero`

cambio los archivos y el directorio de owner:

`$ sudo chown -R user:group directorio/`

## cambiar a root

`$ sudo su root`

**Nota** root no cuenta con contrasena por default


# Otros Comandos

## rename

renombrar ficheros

`$ rename "s/text/md" *.text` //renombra en el directorio actual los ficheros con extension md por text

## ssh

acceso remoto seguro

`$ ssh user@localhost ` // te ingresa a la terminal local pero desde ssh

## scp y sftp

copias remotas

ejemplo:

`$ scp README.md user@192.168.0.5:` // estamos copiando el fichero README al directorio raiz de user

sftp nos permite interactuar con la consola remota y traer o llevar ficheros con comandos como get o put (puedes ver todos los comandos con help)

## nohup

comando que se quede andando aunque se cierre la consola

## mount umount

para montar y desmontar discos

## rsync

sincroniza directorios

## wget

accede a una pagina web y la baja en local

ejemplo:

`wget http://google.com`

## link2 y lynx

Son navegadores web para explorar sitos web 



fin...







