/* La empresa "Lavandería Express" ofrece el servicio de alquiler de 
lavadoras industriales por horas. El costo por hora es de $5.000 COP. 
Sin embargo, como estrategia comercial, si un cliente alquila una 
lavadora por más de 12 horas, recibe un descuento del 30% 
sobre el total de la cuenta. El sistema debe permitir registrar varios 
clientes y al final mostrar un resumen completo del día.*/
export {}; // Esto convierte el archivo en un módulo aislado

let nombreCliente: string = "";
let horasAlquiler: number = 0;
const costoPorHora: number = 5000;
let costoTotal: number = 0;
let totalPagar: number = 0;
let acumuladorIngresos: number = 0;
let descuento: number = 0;
let mensaje: string = "";
let cantidadClientes: number = 0;

for (cantidadClientes = 0; cantidadClientes < 1; cantidadClientes++) {
    nombreCliente = "Clara"; // Simulación de entrada
    horasAlquiler = 15;      // Simulación de entrada
    
    costoTotal = costoPorHora * horasAlquiler;
    mensaje = (horasAlquiler > 12) ? `CON DESCUENTO` : `SIN DESCUENTO`;

    if (horasAlquiler > 12) {
        descuento = costoTotal * 0.30;
        totalPagar = costoTotal - descuento;
        console.log(`Cliente ${cantidadClientes + 1}: ${nombreCliente}`);
        console.log(`Horas Alquiladas: ${horasAlquiler}`);
        console.log(`Descuento: ${descuento}`);
        console.log(mensaje);
        console.log(`Total a pagar: ${totalPagar}`);
    } else {
        totalPagar = costoTotal;
        console.log(`Cliente ${cantidadClientes + 1}: ${nombreCliente}`);
        console.log(`Horas Alquiladas: ${horasAlquiler}`);
        console.log(mensaje);
        console.log(`Total a pagar: ${totalPagar}`);
    }
    acumuladorIngresos += totalPagar;
}

console.log("======RESUMEN DEL DÍA======");
console.log(`Clientes atendidos: ${cantidadClientes}`);
console.log(`Ingreso Total: ${acumuladorIngresos}`);