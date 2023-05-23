//servidor sin utilizar express, usamos el modulo de node http

const http = require('http');
const PORT = 3000; //leer convencion mayusculas constantes js

const server = http.createServer((req, res) => {
    console.log("hola")
    res.end("Bienvenido al servidor");

})

server.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})