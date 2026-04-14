/*"ParquiFácil" es un parqueadero ubicado en el centro de Armenia que 
maneja tarifas diferenciadas según el tipo de vehículo: Moto: $2.000 
por hora Carro: $4.000 por hora Camioneta/SUV: $6.000 por hora Además, 
si el tiempo de permanencia supera las 8 horas, se aplica una tarifa 
plana del día completo con un descuento del 20% sobre el valor 
calculado. El sistema registra vehículos durante una jornada y genera 
un reporte al cierre.*/



let opcionMenu: number;
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
let promedioHoras: number = 0;

opcionMenu = Number(prompt(`
1. Registrar Vehiculo.
2. Cerrar Jornada.`));

while (opcionMenu !== 2) {
    if (opcionMenu === 1) {
        tipovehiculo = prompt(`Tipo de vehiculo (1 = Moto, 2 = Carro, 3=Camioneta): `) as string;
        horasPermanencia = Number(prompt(`Horas de permanencia:`));

        if (isNaN(horasPermanencia) || horasPermanencia < 0) {
            console.log("Error: Debes ingresar un número de horas válido.");
            continue;
        }

        if (tipovehiculo === "1") {
            tarifaHora = 2000;
            tipovehiculo = "Moto";
            contMotos++;
        }
        else if (tipovehiculo === "2") {
            tarifaHora = 4000;
            tipovehiculo = "Carro";
            contCarros++;
        }
        else if (tipovehiculo === "3") {
            tarifaHora = 6000;
            tipovehiculo = "Camioneta";
            contCamionetas++;
        }
        else {
            console.log(`Error`);
            tarifaHora = 0;
            horasPermanencia = 0;
            console.clear();
            opcionMenu = Number(prompt(`1. Registrar Vehiculo. 2. Cerrar Jornada.`));
            continue;
        }

        costoTotal = tarifaHora * horasPermanencia;
        totalVehiculos++;

        if (horasPermanencia > 8) {
            descuento = costoTotal * 0.20;
        }
        else {
            descuento = 0;
        }

        totalPagar = costoTotal - descuento;
        totalDia += totalPagar;
        sumaHoras += horasPermanencia;

        console.log(`---Vehiculo Registrado---
            Tipo: ${tipovehiculo}.
            Horas: ${horasPermanencia}
            Subtotal: $${costoTotal}
            Total: $${totalPagar} `);

        horasPermanencia < 8 ? console.log(`---TARIFA POR HORAS---`) : console.log(`---TARIFA DÍA COMPLETO---`);
        console.log(`Descuento (${horasPermanencia > 8 ? "20%" : "0%"}): $${descuento}`);
    }
    else if (opcionMenu >= 3) {
        console.clear();
        console.log("¡¡¡Opcion invalida!!!");
    }

    opcionMenu = Number(prompt(`1. Registrar Vehiculo.
2. Cerrar Jornada.`));
}

if (opcionMenu === 2) {
    if (totalVehiculos > 0) {
        promedioHoras = sumaHoras / totalVehiculos;
    }
    console.log(`=== CIERRE DE JORNADA ===
        Motos: ${contMotos} | Carros: ${contCarros} | Camionetas: ${contCamionetas}
        Total Vehiculos: ${totalVehiculos}
        Ingresos Totales: $${totalDia.toLocaleString()}
        Promedio Permanencia: ${promedioHoras.toFixed(2)} horas`);
}
else {
    console.clear();
}