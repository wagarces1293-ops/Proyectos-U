/* Inventario total por bodega
Tienes un array de productos donde cada uno tiene nombre, bodega ('A', 'B' o 'C')
y unidades. Usa reduce para crear un objeto con la suma de unidades por bodega:
{ A: total, B: total, C: total }. Imprime el resultado. */
const productos = [
  { nombre: "Producto 1", bodega: "A", unidades: 10 },
  { nombre: "Producto 2", bodega: "B", unidades: 20 },
  { nombre: "Producto 3", bodega: "C", unidades: 15 }
];

const inventarioPorBodega = productos.reduce((acumulador, producto) => {
  acumulador[producto.bodega] = (acumulador[producto.bodega] || 0) + producto.unidades;
  return acumulador;
}, {});

console.log(inventarioPorBodega);