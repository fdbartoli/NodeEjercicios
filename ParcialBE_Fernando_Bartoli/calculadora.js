function calculaIVA(precio){
    return precio + (precio*0.21)
}

function calcula10(precio){
    let precioIVA = precio + (precio*0.21);
    return precioIVA - (precioIVA*0.1)
}

function calcula20(precio){
    let precioIVA = precio + (precio*0.21);
    return precioIVA - (precioIVA*0.2)
}

module.exports = {
    calculaIVA,
    calcula10,
    calcula20
}




