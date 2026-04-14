function colorSemaforo(color) {
    if (color === "verde") {
        return "Sigue adelante.";
    } else if (color === "amarillo") {
        return "Precaución, baja la velocidad.";
    } else if (color === "rojo") {
        return "¡Detente!";
    } else {
        return "Color no válido.";
    }
}

console.log(colorSemaforo("amarillo"));