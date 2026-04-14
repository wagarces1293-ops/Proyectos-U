// Para poder usar node ingresa:
//cd C:\Users\wilma\OneDrive\Desktop\proyecto1\Tareas\juegoConTodo
//node juego.js
const prompt = require("prompt-sync")()

// Usamos una Función Flecha para mostrar el estado
const mostrarEstado = (vidaJugador, vidaMonstruo, inventario) => {
    console.log("\n" + "=".repeat(30)) // \n Salta de linea
    console.log(`Tu Vida: ${vidaJugador} HP`)
    console.log(`Vida del Monstruo: ${vidaMonstruo} HP`);
    console.log(`Inventario: [${inventario}]`)
    console.log("=".repeat(30))// Repite el simbolo "=" 30 veces.
};

function iniciarJuego() {// Se asigna el valor de la vida del jugador
    //y del montruo
    let vidaJugador = 100
    let vidaMonstruo = 100
    // Array de inventario
    let inventario = ["Poción", "Poción", "Escudo"]

    console.log("¡Un monstruo salvaje ha aparecido!")

    // Ciclo principal: Mientras ambos estén vivos
    while (vidaJugador > 0 && vidaMonstruo > 0) {
        mostrarEstado(vidaJugador, vidaMonstruo, inventario)

        console.log("¿Qué quieres hacer?")
        console.log("1. Atacar (Espada)")
        console.log("2. Usar Poción (+20 HP)")
        console.log("3. Huir");
        // Toma unicamente los valores enteros.
        let opcion = parseInt(prompt("Elige una opción (1-3): "))

        // Validación de entrada, Si no es un numero o es menor a 1 y mayor a 3.
        if (isNaN(opcion) || opcion < 1 || opcion > 3) {
            console.log("❌ Opción no válida. Pierdes el turno por distraído.")
        } else if (opcion === 1) {
            // Ataque simple
            let danio = 20
            vidaMonstruo = vidaMonstruo - danio
            console.log(`⚔️ ¡Atacaste al monstruo y le quitaste ${danio} HP!`)
        } else if (opcion === 2) {
            // Uso de Array: Verificar si hay pociones
            if (inventario.includes("Poción")) {
                // .includes busca si Pocion existe en la lista
                vidaJugador = vidaJugador + 20
                // Quitamos una poción del array
                let indice = inventario.indexOf("Poción")
                inventario.splice(indice, 1)
                console.log("🧪 Usaste una poción. ¡Te sientes mejor!")
            } else {
                console.log("🚫 No tienes pociones en tu inventario.")
            }
        } else {
            console.log("🏃 Has huido del combate... Cobarde, pero vivo.")
            break
        }

        // Turno del Monstruo (si sigue vivo)
        if (vidaMonstruo > 0) {
            let danioMonstruo = 15
            vidaJugador = vidaJugador - danioMonstruo
            console.log(`👹 El monstruo te golpea y te quita ${danioMonstruo} HP.`)
        }
    }

    // Resultado final
    if (vidaMonstruo <= 0) {
        console.log("¡VICTORIA! El monstruo ha caído.")
    } else if (vidaJugador <= 0) {
        console.log("HAS MUERTO. El calabozo reclama otra alma.")
    }
}

iniciarJuego()