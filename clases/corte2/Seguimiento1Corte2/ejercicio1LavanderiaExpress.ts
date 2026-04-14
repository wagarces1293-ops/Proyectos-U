/* La empresa "Lavandería Express" ofrece el servicio de alquiler de 
lavadoras industriales por horas. El costo por hora es de $5.000 COP. */

let nombreCliente: string = "";
let horasAlquiler: number = 0;
let costoPorHora: number = 5000;
let costoTotal: number;
let totalPagar: number = 0;
let acumuladorIngresos: number = 0;
let contadorDeDescuentos: number; // Declarada pero no inicializada según el original
let descuento: number;
let mensaje: string;
let cantidadClientes: number; // Declarada para usar en el ciclo

for (cantidadClientes = 0; cantidadClientes < 1; cantidadClientes++) {
    nombreCliente = "Clara"; //prompt(`Ingrese su nombre:`)
    let horasAlquiler: number = 15; //prompt(`Ingrese la cantidad de horas...`)
    costoTotal = costoPorHora * horasAlquiler;
    mensaje = (horasAlquiler > 12) ? `CON DESCUENTO` : `SIN DESCUENTO`;

    if (horasAlquiler > 12) {
        descuento = costoTotal * 0.30;
        totalPagar = costoTotal - descuento;
        console.log(`Cliente ${cantidadClientes + 1}:${nombreCliente}`);
        console.log(`Horas Alquiladas: ${horasAlquiler}`);
        console.log(`Descuento:${descuento}`);
        console.log(mensaje);
        console.log(`Total a pagar: ${totalPagar}`);
    }
    else {
        totalPagar = costoTotal;
        // Se cambió 'i' por 'cantidadClientes' para que el código sea funcional
        console.log(`Cliente ${cantidadClientes + 1}:${nombreCliente}`);
        console.log(`Horas Alquiladas: ${horasAlquiler}`);
        console.log(mensaje);
        console.log(totalPagar);
    }
    acumuladorIngresos += totalPagar;
}

console.log("======RESUMEN DEL DÍA======");
console.log(`Clientes atendidos: ${cantidadClientes}`);
console.log(`Ingreso Total: ${acumuladorIngresos}`);