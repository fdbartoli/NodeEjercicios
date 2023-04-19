const os = require ('os');

//obtengo el sistema operativo
//console.log(os.type());

//ruta raiz
//console.log(os.homedir());

//obtengo la cantidad de segundos del so
console.log(Math.floor(os.uptime / 60))//en minutos
console.log(Math.floor(os.uptime / 3600))//en horas

