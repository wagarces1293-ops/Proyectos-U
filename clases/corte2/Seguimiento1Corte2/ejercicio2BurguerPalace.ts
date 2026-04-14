/* "Burger Palace" es un restaurante de comidas rápidas que ofrece 
únicamente 3 combos: 
Combo 1 — "Clásica" (hamburguesa sencilla + papas + gaseosa): $15.000 
Combo 2 — "Doble Poder" (hamburguesa doble + papas grandes + gaseosa): 
$22.000 
Combo 3 — "Mega Fest" (hamburguesa triple + papas + malteada + 
postre): $35.000 
El sistema permite tomar pedidos de forma continua 
hasta que el usuario decida finalizar. Debe calcular el total acumulado de la cuenta a medida que se 
agregan combos. */
export {}; // Esto convierte el archivo en un módulo aislado

let opcion: string | null = "";
let cantidadCombo: number = 0;
let precioCombo: number = 0;
let subTotal: number = 0;
let totalCuenta: number = 0;
let totalCombos: number = 0;
let contadorCombo1: number = 0;
let contadorCombo2: number = 0;
let contadorCombo3: number = 0;

console.log(`====== BURGUER PALACE ======
    1. Clasica - $15.000
    2. Doble Poder - $22.000
    3. Mega Fest - $35.000
    4. Finalizar pedido.`);

do {
    opcion = prompt(`Ingrese su pedido (1-4): `);

    if (opcion === "1") {
        precioCombo = 15000;
        cantidadCombo = Number(prompt(`Ingrese Cantidad Combo 1:`));
        contadorCombo1 += cantidadCombo;
    } else if (opcion === "2") {
        precioCombo = 22000;
        cantidadCombo = Number(prompt(`Ingrese Cantidad Combo 2:`));
        contadorCombo2 += cantidadCombo;
    } else if (opcion === "3") {
        precioCombo = 35000;
        cantidadCombo = Number(prompt(`Ingrese Cantidad Combo 3:`));
        contadorCombo3 += cantidadCombo;
    } else if (opcion === "4") {
        break;
    } else {
        console.log(`Opción no válida.`);
        continue;
    }

    subTotal = precioCombo * cantidadCombo;
    totalCombos += cantidadCombo;
    totalCuenta += subTotal;

    console.log(`Combo seleccionado: ${opcion}`);
    console.log(`Cantidad: ${cantidadCombo}`);
    console.log(`Subtotal: ${subTotal}`);
    console.log(`Total Acumulado: ${totalCuenta}`);

} while (opcion !== "4");

console.log(`\n=== RESUMEN DE VENTAS ===`);
console.log(`Combos Clasica: ${contadorCombo1}`);
console.log(`Combos Doble Poder: ${contadorCombo2}`);
console.log(`Combos Mega Fest: ${contadorCombo3}`);
console.log(`Total combos vendidos: ${totalCombos}`);
console.log(`Total a pagar: ${totalCuenta}`);