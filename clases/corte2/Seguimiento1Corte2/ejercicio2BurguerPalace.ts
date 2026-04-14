/* "Burger Palace" - Adaptación a TypeScript */

let opcion: string | null;
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
    opcion = prompt(`Ingrese su pedido: `);

    if (opcion === "1") {
        precioCombo = 15000;
        let ingreso: number = Number(prompt(`Ingrese Cantidad Combo 1:`));
        cantidadCombo = ingreso; // Siguiendo tu lógica de asignación
        contadorCombo1 += cantidadCombo;
    }
    else if (opcion === "2") {
        precioCombo = 22000;
        let ingreso: number = Number(prompt(`Ingrese Cantidad Combo 2:`));
        cantidadCombo = ingreso;
        contadorCombo2 += cantidadCombo;
    }
    else if (opcion === "3") {
        precioCombo = 35000;
        let ingreso: number = Number(prompt(`Ingrese Cantidad Combo 3:`));
        cantidadCombo = ingreso;
        contadorCombo3 += cantidadCombo;
    }
    else if (opcion === "4") {
        break;
    }
    else {
        console.log(`Opcion no valida.`);
        continue;
    }

    subTotal = precioCombo * cantidadCombo;
    totalCombos += cantidadCombo;
    totalCuenta += subTotal;

    console.log(`Combo: ${opcion}`);
    console.log(`Cantidad: ${cantidadCombo}`);
    console.log(`Subtotal: ${subTotal}`);
    console.log(`Total Acumulado: ${totalCuenta}`);

} while (opcion !== "4");

console.clear();
console.log(`Combos Clasica: ${contadorCombo1}`);
console.log(`Combos Doble Poder: ${contadorCombo2}`);
console.log(`Combos Mega Fest: ${contadorCombo3}`);
console.log(`Total combos: ${totalCombos}`);
console.log(`Total a pagar: ${totalCuenta}`);