const prompt = require("prompt-sync")();
const carrito = [];
let agregar = "s";

while(agregar === "s") {
    let prod = prompt("Producto: ");
    let precio = Number(prompt("Precio: "));
    carrito.push({ prod, precio });
    agregar = prompt("¿Otro? (s/n): ");
}

let totalC = 0;
for(let i=0; i < carrito.length; i++) { totalC += carrito[i].precio; }
console.log(`Total a pagar: $${totalC}`);