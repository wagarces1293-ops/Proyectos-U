const prompt = require("prompt-sync")();

function tablaMultiplicar() {// Solo enteros

    let numero = parseInt (prompt(`¿De que numero quieres que sea la tabla?:`))

    if (isNaN(numero)){
        console.log(`Valor ingresado no valido
            Por favor Ingresa unicamente numeros`)
    }else{
        console.log(`Tabla del ${numero}.`)
        for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i))
    }}
}

//tablaMultiplicar(7)
tablaMultiplicar()