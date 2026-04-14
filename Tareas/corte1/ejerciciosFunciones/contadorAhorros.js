function proyectarAhorro(montoMensual, meses) {
    let total = 0;
    for (let i = 1; i <= meses; i++) {
        total = total + montoMensual
        console.log("Mes " + i + ": $" + total)
    }
    return total
}

proyectarAhorro(50, 80); // Ahorrar 50 por 6 meses