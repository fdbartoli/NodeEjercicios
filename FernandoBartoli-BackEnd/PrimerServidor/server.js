//servidor sin utilizar express, usamos el modulo de node http

const http = require('http');
const PORT = 3000; //leer convencion mayusculas constantes js

const server = http.createServer((req, res) => {
    console.log("hola")
    res.end("Bienvenido al servidor");
})//con esto creo el servidor

server.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})//con esto muestro el servidor


// const http = require('http')
// const puerto = 3000
// const servidor = http.createServer( (req,res) => {
// res.end("Hola Mundo")
// })
// servidor.listen(3000, () => {
// console.log(`Servidor ejecutándose en el puerto ${puerto}...`)
// })
