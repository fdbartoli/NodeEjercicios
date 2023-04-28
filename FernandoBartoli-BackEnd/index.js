const usuario = require('./usuarios.json')


function allName(){
    console.log("\n Nombre de los usuario: ")
    for (let i in usuario){
        console.log(usuario[i].nombre)
    }
}

function allLastName(){
    console.log("\n Apellido de los usuario: ")
    for (let i in usuario){
        console.log(usuario[i].apellido)
    }
}

function allEmail(){
    console.log("\n E-mail de los usuario: ")
    for (let i in usuario){
        console.log(usuario[i].mail)
    }
}


function allUsers (){
    console.log("\n Datos de todos los usuarios luego de 3 segundos de espera: ")
    for (let i in usuario){
        console.log(usuario[i])
    }
}


allName();
allLastName();
allEmail();


console.log("\n Espero los 3 segundos")
setTimeout(() => {
    allUsers();
  }, "3000");