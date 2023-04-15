const calculadora = require('./calculadora.js')


try{
    console.log("Suma: " + sumar(2,2))

    console.log("Suma con error: " +sumar("2",2))

    console.log("resta: " +restar(10,2))

    console.log("resta con error: " + restar("a",2))

    console.log("Multiplicación: " + multiplicar (20, 3))

    console.log("Multiplicación con error: " + multiplicar ("a", 3))

    console.log("Division: " + dividir(100, 50))

    console.log("Division con error: " + dividir(10, "3"))

    console.log("Divide por 0" + dividir (10, 0))

    console.log("Es par o impar: " + esParOImpar (10))

    console.log("Es par o impar con error: " + esParOImpar(a))
    }
catch (error){
    console.log("se rompió!!!! " + error.message)
}