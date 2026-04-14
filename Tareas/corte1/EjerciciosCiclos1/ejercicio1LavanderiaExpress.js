/* La empresa "Lavandería Express" ofrece el servicio de alquiler de 
lavadoras industriales por horas. El costo por hora es de $5.000 COP. 
Sin embargo, como estrategia comercial, si un cliente alquila una 
lavadora por más de 12 horas, recibe un descuento del 30% 
sobre el total de la cuenta. El sistema debe permitir registrar varios 
clientes y al final mostrar un resumen completo del día.*/
/*Decaro las variables recomendadas a exepcion de cantidadClientes
que la voy a usar como indice del ciclo for */
let nombreCliente = ""
let horasAlquiler = 0
let costoPorHora = 5000
let costoTotal
let totalPagar = 0
let acumuladorIngresos = 0
let contadorDeDescuentos
let descuento 
let mensaje
for (cantidadClientes = 0; cantidadClientes < 1 ; cantidadClientes++) {
nombreCliente = "Clara" //prompt(`Ingrese su nombre:`)
let horasAlquiler = 15 //prompt(`Ingrese la cantidad de horas que desea alquilar:`)
costoTotal = 5000 * horasAlquiler
mensaje = (horasAlquiler > 12)? `CON DESCUENTO` : `SIN DESCUENTO`

if (horasAlquiler > 12){
    descuento = costoTotal * 0.30
    totalPagar = costoTotal - descuento
    console.log(`Cliente ${cantidadClientes+1}:${nombreCliente}`)
    console.log(`Horas Alquiladas: ${horasAlquiler}`)
    console.log(`Descuento:${descuento}`)
    console.log(mensaje)
    console.log(`Total a pagar: ${totalPagar}`)
}
else {
    totalPagar = costoTotal
    console.log(`Cliente ${i+1}:${nombreCliente}`)
    console.log(`Horas Alquiladas: ${horasAlquiler}`)
    console.log(mensaje)
    console.log(totalPagar)

}
    acumuladorIngresos += totalPagar
    

}
    console.log("======RESUMEN DEL DÍA======")
    console.log(`Clientes atendidos: ${cantidadClientes}`)
    console.log(`Ingreso Total: ${acumuladorIngresos}`)