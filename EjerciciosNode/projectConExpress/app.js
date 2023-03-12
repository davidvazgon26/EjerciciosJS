const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send('Hola express')
})

app.get('/otra', (req,res)=>{
    res.send('Otra ruta de prueba')
})


//Configurando un middleware para acceder a la carpta public desde el navegador:
app.use(express.static(__dirname + '/public')) // Recuerda que __dirname se encarga de traerte el path del sistema en el que te encuentres para hacerlo dinamico.


app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
})