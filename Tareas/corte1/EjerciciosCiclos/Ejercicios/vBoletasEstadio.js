const prompt = require("prompt-sync")();

let boletas = 20;
console.log("\n--- ENTRADAS ESTADIO ---");
let cant = Number(prompt(`¿Cuántas comprar? (Quedan ${boletas}): `));

if (cant > 0 && cant <= boletas) {
    boletas -= cant;
    console.log(`Venta exitosa. Quedan ${boletas} boletas.`);
} else {
    console.log("No hay suficiente capacidad.");
}