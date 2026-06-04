/* Lote de productos vencidos
Tienes un array de productos con nombre y dias_vencimiento. Usa some para
detectar si hay productos con menos de 7 días para vencer. Usa every para verificar
si TODOS los productos tienen más de 30 días de vida. */
const productos = [
  { nombre: "Leche", dias_vencimiento: 5 },
  { nombre: "Pan", dias_vencimiento: 2 },
  { nombre: "Queso", dias_vencimiento: 15 },
  { nombre: "Yogur", dias_vencimiento: 10 }
];
const hayVencidos = productos.some(producto => producto.dias_vencimiento < 7);
const todosValidos = productos.every(producto => producto.dias_vencimiento > 30);
console.log(`Hay productos vencidos: ${hayVencidos}`);
console.log(`Todos los productos son válidos: ${todosValidos}`);