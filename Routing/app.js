const http = require  ('http');
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.end("Respuesta desde el servidor");
})

server.listen(PORT, ()=>{
    console.log(`Servidor funcionando en puerto ${PORT}`)
})