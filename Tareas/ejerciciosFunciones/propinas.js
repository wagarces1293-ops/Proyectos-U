const prompt = require('prompt-sync')()

function calcularTotalConPropina(cuenta, porcentaje) {
    let propina = cuenta * (porcentaje / 100)
    return cuenta + propina
}
//parseFloat Convierte texto en decimal float
let totalCuenta = parseFloat(prompt("¿Cuánto fue el total de la cuenta?: "))
let porc = parseFloat(prompt("¿Qué porcentaje de propina quieres dejar? (ej. 10, 15): "))

console.log("El total a pagar es: " + calcularTotalConPropina(totalCuenta, porc))