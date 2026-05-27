/* Carrito de compras dinámico
Crea un array de strings vacío llamado carrito. Agrega tres productos con push,
agrega uno al inicio con unshift, quita el último con pop, verifica con includes si un
producto está, y finalmente muestra el total de productos. */
let carrito: string[]= [];
carrito.push("Manzana");// Agrega "Manzana" al final del carrito
carrito.push("Banana");
carrito.push("Naranja");
carrito.unshift("Pera");// Agrega "Pera" al inicio del carrito
carrito.pop();// Elimina el último elemento (Naranja)
carrito.includes("Manzana") ? console.log("Manzana está en el carrito") : console.log("Manzana no está en el carrito");
console.log(carrito); // Imprime ["Pera", "Manzana", "Banana"]
console.log("Total de productos:", carrito.length); // Imprime 3