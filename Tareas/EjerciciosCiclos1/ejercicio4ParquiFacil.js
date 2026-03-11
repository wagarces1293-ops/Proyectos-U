/*"ParquiFácil" es un parqueadero ubicado en el centro de Armenia que 
maneja tarifas diferenciadas según el tipo de vehículo: Moto: $2.000 
por hora Carro: $4.000 por hora Camioneta/SUV: $6.000 por hora Además, 
si el tiempo de permanencia supera las 8 horas, se aplica una tarifa 
plana del día completo con un descuento del 20% sobre el valor 
calculado. El sistema registra vehículos durante una jornada y genera 
un reporte al cierre.*/

let opcionMenu
let tipovehiculo = ""
let horasPermanencia = 0
let tarifaHora
let costoTotal = 0
let descuento = 0
let totalPagar = 0
let contMotos = 0
let contCarros = 0
let contCamionetas = 0
let sumaHoras = 0
let totalVehiculos = 0
let totalDia = 0
let promedioHoras = 0

const prompt = require(`prompt-sync`)()
 opcionMenu = Number(prompt(`
1. Registrar Vehiculo.
2.Cerrar Jornada.`))

    while(opcionMenu != 2 ){
        if (opcionMenu == 1){
        tipovehiculo = prompt(`Tipo de vehiculo (1 = Moto, 2 = Carro, 3=Camioneta): `)
        horasPermanencia = Number(prompt(`Horas de permanencia:`))
        if (isNaN(horasPermanencia) || horasPermanencia < 0) {
    console.log("Error: Debes ingresar un número de horas válido.");
    // Aquí podrías usar un continue para reiniciar el ciclo
    continue;
}
        if(tipovehiculo == "1"){
            tarifaHora = 2000
            tipovehiculo = "Moto"
            contMotos ++
        }
        else if(tipovehiculo == "2"){
            tarifaHora = 4000
            tipovehiculo = "Carro"
            contCarros ++
        }
        else if (tipovehiculo == "3"){
            tarifaHora = 6000
            tipovehiculo = "Camioneta"
            contCamionetas ++
        }
        else {
            console.log(`Error`)
            tarifaHora = 0
            horasPermanencia = 0
            console.clear()
            continue
        }
        costoTotal = tarifaHora * horasPermanencia
        totalVehiculos ++

        if (horasPermanencia > 8){
            descuento = costoTotal * 0.20
        }
        else {
            descuento = 0
        }
        totalPagar = costoTotal - descuento
        totalDia += totalPagar
        sumaHoras += horasPermanencia
        console.log(`---Vehiculo Registrado---
            Tipo: ${tipovehiculo}.
            Horas: ${horasPermanencia}
            Subtotal: $${costoTotal}
            Total: $${totalPagar} `)
            horasPermanencia < 8? console.log(`---TARIFA POR HORAS---`) : console.log(`---TARIFA DÍA COMPLETO---`)
            console.log(`Descuento (${horasPermanencia > 8 ? "20%" : "0%"}): $${descuento}`)
            }
            else if (opcionMenu >= 3){
                console.clear()
                console.log("¡¡¡Opcion invalida!!!")
            }
            opcionMenu = Number(prompt(`1. Registrar Vehiculo.
2.Cerrar Jornada.`))
    }
    if (opcionMenu == 2){
    if (totalVehiculos > 0){
    promedioHoras = sumaHoras / totalVehiculos
    }
    console.log(`=== CIERRE DE JORNADA ===
        Motos: ${contMotos} | Carros: ${contCarros} | Camionetas: ${contCamionetas}
        Total Vehiculos: ${totalVehiculos}
        Ingresos Totales: $${totalDia.toLocaleString()}
        Promedio Permanencia: ${promedioHoras.toFixed(2)} horas`)
        }
    else {console.clear()}