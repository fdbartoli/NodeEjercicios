const express = require ('express')
const app = express()
const PORT = 3000;
const { infoLenguajes } = require('./lenguajesFrontBack');

app.get('/', (req, res)=> {res.send("hola mundo")});
app.get('/api/lenguajes', (req, res)=> {res.send(JSON.stringify(infoLenguajes))})
app.get('/api/lenguajes/front', (req, res)=> {res.send(JSON.stringify(infoLenguajes.frontend))})
app.get('/api/lenguajes/back', (req, res)=> {res.send(JSON.stringify(infoLenguajes.backend))})

app.get('./api/lenguajes', (req, res)=> {res.send("hola" )})

app.listen(PORT, ()=>console.log(`Servidor funcionando en puerto: ${PORT}`))