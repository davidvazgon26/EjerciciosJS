// Esta dependencia no necesitaos instalarla porque ya viene por defecto en node

const http = require('http');  //requerimos http
const server = http.createServer((req,res)=>{
    res.end('respondiendo a la solicitud v2')
}) //creamos el servidor

//Configurando el puerto
const port = 3000;  // traen el puerto de nuestro archivo .env o utiliza el por defecto que en este caso es el 3000

server.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
})


//Tengo otro ejemplo en la careta Ejercicios-js-Platzi/moServidorConHTTP.js