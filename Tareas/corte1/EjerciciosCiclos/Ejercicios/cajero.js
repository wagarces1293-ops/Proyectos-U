const prompt = require(`prompt-sync`)()
let saldo = 1000;
console.log("\n--- CAJERO ---");
let accion = prompt("1. Retiro | 2. Consignar | 3. Saldo: ");

if (accion === "1") {
    let monto = Number(prompt("¿Cuánto retira?: "));
    if (monto <= saldo) { saldo -= monto; console.log("Saldo: " + saldo); }
    else { console.log("Fondos insuficientes"); }
} else if (accion === "2") {
    let monto = Number(prompt("¿Cuánto consigna?: "));
    saldo += monto;
    console.log("Nuevo saldo: " + saldo);
} else {
    console.log("Su saldo es: " + saldo);
}