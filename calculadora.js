function sumar (num1, num2){
    if (!sonNumeros(num1, num2)){
        return "Para realizar la suma debe ingresar dos números"
    }   

    return num1 + num2
}

function restar (num1, num2){
    if (!sonNumeros(num1, num2)){
        return "Para realizar la resta debe ingresar dos números"
    }   
    return num1 - num2
}

function multiplicar (num1, num2){
    if (!sonNumeros(num1, num2)){
        return "Para realizar la multiplicación debe ingresar dos números"
    } 

    return num1 * num2  
}

function dividir (num1, num2){
    if (!sonNumeros(num1, num2)){
        return "Para realizar la división debe ingresar dos números"
    }  

    if (num2 == 0){
        return "No se puede dividir por 0"
    }

    return num1 / num2
}

function esParOImpar (num){
    if (!sonNumeros(num)){
        return "Ingree un número para verificar si es par o impar"
    }
    if (num%2 == 0){
        return `${num} Es par`
    }    
    return `${num} Es impar`
}

// parametro rest para poder reutilizar la función sin importar la cantidad de paramétros ingresados.
// .every me devuelve true en caso que todas las iteraciones sean true (todos los valores son numeros), false en caso contrario


function sonNumeros(...args) { 
    return args.every((arg) => typeof arg === "number"); 
  }


  module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    esParOImpar
  }





  
  // function sonNumeros (num1, num2){
//     if (typeof num1 !== "number" || typeof num2 !== "number"){
//         return false
//     }
//     return true   

// } 

