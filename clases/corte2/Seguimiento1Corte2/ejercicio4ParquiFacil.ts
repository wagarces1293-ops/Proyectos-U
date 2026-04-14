/*"ParquiFácil" es un parqueadero ubicado en el centro de Armenia que 
maneja tarifas diferenciadas según el tipo de vehículo: Moto: $2.000 
por hora Carro: $4.000 por hora Camioneta/SUV: $6.000 por hora Además, 
si el tiempo de permanencia supera las 8 horas, se aplica una tarifa 
plana del día completo con un descuento del 20% sobre el valor 
calculado. El sistema registra vehículos durante una jornada y genera 
un reporte al cierre.*/

let opcionMenu: number = 0;
let tipovehiculo: string = "";
let horasPermanencia: number = 0;
let tarifaHora: number = 0;
let costoTotal: number = 0;
let descuento: number = 0;
let totalPagar: number = 0;
let contMotos: number = 0;
let contCarros: number = 0;
let contCamionetas: number = 0;
let sumaHoras: number = 0;
let totalVehiculos: number = 0;
let totalDia: number = 0;

opcionMenu = Number(prompt("1. Registrar Vehiculo\n2. Cerrar Jornada"));

while (opcionMenu !== 2) {
    if (opcionMenu === 1) {
        let seleccion: string | null = prompt("Tipo (1: Moto, 2: Carro, 3: Camioneta):");
        horasPermanencia = Number(prompt("Horas de permanencia:"));

        if (isNaN(horasPermanencia) || horasPermanencia < 0) {
            console.log("Error: Horas no válidas.");
            opcionMenu = Number(prompt("1. Registrar Vehiculo\n2. Cerrar Jornada"));
            continue;
        }

        if (seleccion === "1") {
            tarifaHora = 2000;
            tipovehiculo = "Moto";
            contMotos++;
        } else if (seleccion === "2") {
            tarifaHora = 4000;
            tipovehiculo = "Carro";
            contCarros++;
        } else if (seleccion === "3") {
            tarifaHora = 6000;
            tipovehiculo = "Camioneta";
            contCamionetas++;
        } else {
            console.log("Tipo de vehículo no válido.");
            opcionMenu = Number(prompt("1. Registrar Vehiculo\n2. Cerrar Jornada"));
            continue;
        }

        costoTotal = tarifaHora * horasPermanencia;
        descuento = (horasPermanencia > 8) ? costoTotal * 0.20 : 0;
        totalPagar = costoTotal - descuento;

        totalVehiculos++;
        totalDia += totalPagar;
        sumaHoras += horasPermanencia;

        console.log(`\n--- Recibo de Parqueo ---`);
        console.log(`Vehículo: ${tipovehiculo} | Tiempo: ${horasPermanencia}h`);
        console.log(`Subtotal: $${costoTotal} | Descuento: $${descuento}`);
        console.log(`Total a Pagar: $${totalPagar}`);
    } 
    
    opcionMenu = Number(prompt("1. Registrar Vehiculo\n2. Cerrar Jornada"));
}

if (totalVehiculos > 0) {
    const promedioHoras: number = sumaHoras / totalVehiculos;
    console.log(`\n=== CIERRE DE JORNADA ===`);
    console.log(`Motos: ${contMotos} | Carros: ${contCarros} | Camionetas: ${contCamionetas}`);
    console.log(`Total Vehículos: ${totalVehiculos}`);
    console.log(`Ingresos Totales: $${totalDia}`);
    console.log(`Promedio de permanencia: ${promedioHoras.toFixed(2)} horas`);
}