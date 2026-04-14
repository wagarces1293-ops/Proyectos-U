const prompt = require('prompt-sync')()

function validarClave(correcta) {
    let intento
    do {
        intento = prompt("Introduce la contraseña: ")
        if (intento !== correcta) {
            console.log("Clave incorrecta. Intenta de nuevo.")
        }
    } while (intento !== correcta)
    
    console.log("Acceso exitoso.")
}

validarClave("12345")