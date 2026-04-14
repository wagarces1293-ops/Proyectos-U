function aplicarDescuento(precioUnitario, cantidad) {
    let totalBruto = precioUnitario * cantidad
    if (cantidad > 5) {
        console.log(`Aplica descuento`)
        return totalBruto * 0.90 // Se aplica el 10% de descuento.
    }
    return totalBruto
}

console.log(`Total a pagar:  ${aplicarDescuento(100, 6)}`)