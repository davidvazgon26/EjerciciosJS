- iniciar proyecto -> npm init
- otra opcion -> npm init -y
- abrir en el editor -> code .
- instalar una dependencia -> npm install (dependencia)
- instalar una dependencia para dev -> npm install (dependencia) --save-dev
- instalar una dependencia para dev -> npm install (dependencia) -D
- instalar una dependencia para prod -> npm install (dependencia) --save
- instalar paquete global (en sistema no en proyecto) => npm install -g (dependencia)
- lista de paquetes en el proyecto => npm list
- lista de paquetes globales => npm list -g
- checar conflicto entre dependencias antes de instalar => npm install (dependencia) --dry-run
- instalar version de dependencia particular => npm install (dependencia)@version
- instalar la version mas reciente de una dependencia => npm install (dependecia)@lastet

* node package management => managment (npm)
* node packaje exexute => execute (npx)
* actualizaciones que pudieron sufrir las dependencias de repositorios clonados => npm outdate
* si solo quiero ver informacion de las dependencias con problemas sin modificar nada => npm audit
* ver informacion de las dependencias con problemas sin modificar nada en json => npm audit --json
* arreglar los problemas criticos con las dependencias => npm audit fix
* eliminar una dependencia => npm uninstall (dependencia)
* compilar el proyecto => npm run build
* compilar en modo verboso para ver posibles errores => npm run build --dd
* probar una paquete o dependencia propio sin publicar aun => npm link
* para iniciar sesion de npm cuando ya creaste tu cuenta => npm a dduser
* publicar el nuevo paquete => npm publish
*
