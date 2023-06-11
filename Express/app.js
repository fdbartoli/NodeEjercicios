const express = require('express');
const app = express();
const { infoLenguajes } = require('./lenguajesBackFront.js')
const router = express.Router();

const PORT = process.env.PORT || 3000;



app.get('/', (req,res) => {
res.send('<h1>Primer servidor con Express 💻</h1>');
})
app.get('/api/lenguajes', (req,res) => {
res.send(JSON.stringify(infoLenguajes));
})
app.get('/api/lenguajes/frontend', (req,res) => {
res.send(JSON.stringify(infoLenguajes.frontend));
})
app.get('/api/lenguajes/backend', (req,res) => {
res.send(JSON.stringify(infoLenguajes.backend));
})
app.listen(PORT, () => {
console.log('Server funcionando en puerto '+ PORT);
})
