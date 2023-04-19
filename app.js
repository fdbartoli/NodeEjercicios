const calculadora = require('./calculadora.js').default


try{
    console.log("Suma: " + calculadora.sumar(2,2))

    console.log("Suma con error: " + calculadora.sumar("2",2))

    console.log("resta: " + calculadora.restar(10,2))

    console.log("resta con error: " + calculadora.restar("a",2))

    console.log("Multiplicación: " + calculadora.multiplicar (20, 3))

    console.log("Multiplicación con error: " + calculadora.multiplicar ("a", 3))

    console.log("Division: " + calculadora.dividir(100, 50))

    console.log("Division con error: " + calculadora.dividir(10, "3"))

    console.log("Divide por 0" + calculadora.dividir (10, 0))

    console.log("Es par o impar: " + calculadora.esParOImpar (10))

    console.log("Es par o impar con error: " + calculadora.esParOImpar(a))
    }
catch (error){
    console.log(`Error!!!! ${error.message}` )
}

