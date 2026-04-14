function verificarEntrada(edad) {
    if (edad >= 18) {
        return "Acceso concedido. ¡Bienvenido!"
    } else {
        return "Acceso denegado. Eres menor de edad."
    }
}

let miEdad = 17
console.log(verificarEntrada(miEdad))