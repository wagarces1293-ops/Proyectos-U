const prompt = require(`prompt-sync`)()
const habitaciones = [
    { id: 101, tipo: 'Simple', precio: 50, ocupada: false },
    { id: 102, tipo: 'Doble', precio: 100, ocupada: true },
    { id: 103, tipo: 'Simple', precio: 50, ocupada: false }
];

console.log("\n--- HOTEL ---");
let op = prompt("1. Libres (Filter) | 2. Lista (Map) | 3. Total (Reduce): ");

switch(op) {
    case "1":
        console.log(habitaciones.filter(h => !h.ocupada));
        break;
    case "2":
        console.log(habitaciones.map(h => `Habitación ${h.id}: ${h.tipo}`));
        break;
    case "3":
        let total = habitaciones.reduce((acc, h) => acc + h.precio, 0);
        console.log(`Valor total: $${total}`);
        break;
}