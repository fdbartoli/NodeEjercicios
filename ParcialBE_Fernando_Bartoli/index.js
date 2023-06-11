const calculadora = require("./calculadora.js");

console.log("El valor del producto mas el IVA es: " + calculadora.calculaIVA(10));
console.log("El valor del producto mas el IVA - 10% es: " +calculadora.calcula10(10));
console.log("El valor del producto mas el IVA - 20% es: " +calculadora.calcula20(10))