/* Producto con detalles opcionales
Crea una interface Producto con id, nombre, precio (obligatorios), descuento y
descripcion (opcionales). Crea dos productos: uno con todos los campos y otro solo
con los obligatorios. Imprime cada uno mostrando el precio final aplicando el
descuento si existe. */
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descuento?: number;
    descripcion?: string;
}
const Producto1: Producto = {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    descuento: 20,
    descripcion: "Este es el producto 1"
};

const Producto2: Producto = {
    id: 2,
    nombre: "Producto 2",
    precio: 50
};
function calcularPrecioFinal(producto: Producto): number {
    if (producto.descuento) {
        return producto.precio - producto.descuento;
    } else {        return producto.precio;
    } }
console.log(`El precio final de ${Producto1.nombre} es: $${calcularPrecioFinal(Producto1)}`);
console.log(`El precio final de ${Producto2.nombre} es: $${calcularPrecioFinal(Producto2)}`);
