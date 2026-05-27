interface producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string; // Propiedad opcional
    categoria: string;
    descuento?: number; // Propiedad opcional
}
const producto1: producto = {
    id: 1,
    nombre: "Camiseta",
    precio: 19.99,
    descripcion: "Camiseta de algodón de alta calidad",
    categoria: "Ropa",
    descuento: 10 // Descuento del 10%
};
console.log(producto1.nombre);