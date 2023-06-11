const usuario = require('./usuarios.json')

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("<h1>Apellido del usuario 1: " + usuario[0].apellido +
    ", Apellido del usuario 2: " + usuario[1].apellido +
    ", Apellido del usuario 3: " + usuario[2].apellido +
    ", Apellido del usuario 4: " + usuario[3].apellido +
    ", Apellido del usuario 5: " + usuario[4].apellido + "</h1>" );
})

server.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})


