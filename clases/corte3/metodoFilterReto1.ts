export {}; // Esto convierte el archivo en un módulo aislado

/* Productos en oferta
Tienes un array de productos con nombre, precio y descuento. Filtra los productos
con descuento mayor a 20%. Para cada uno, calcula el precio final aplicando el
descuento y muéstralo formateado.  */

let productos: string [] = [
    "Producto A, 100, 10%",
    "Producto B, 200, 25%",
    "Producto C, 150, 15%",
    "Producto D, 300, 30%",
    "Producto E, 250, 5%"
];

let productosEnOferta: string [] = productos.filter(productos => {
    // Desestructuramos y aseguramos valores por defecto "" si no existieran
    const [_, __, des = ""] = productos.split(",");
    
    let descuento: number = parseFloat(des.trim().replace("%", ""));
    // trim() para eliminar espacios en blanco, replace("%", "") para eliminar el símbolo de porcentaje y parseFloat() para convertirlo a número
    //replace() : Reemplaza el símbolo de porcentaje con una cadena vacía, eliminándolo del valor
    return descuento > 20;
});
// hasta aqui entendi.

productosEnOferta.forEach(producto => {
    // Desestructuramos el array asignando un texto vacío por defecto a cada parte
    const [nom = "", pre = "", des = ""] = producto.split(",");

    let nombre: string = nom.trim();// trim() para eliminar espacios en blanco al inicio y al final del nombre
    let precio: number = parseFloat(pre.trim());// trim() para eliminar espacios en blanco y parseFloat() para convertirlo a número
    let descuento: number = parseFloat(des.trim().replace("%", ""));
    let precioFinal: number = precio * (1 - descuento / 100);
    console.log(`${nombre}: $${precioFinal.toFixed(2)}`);
});