let jpactual = "X" // Jugador
let juegoActivo = true // estado de juego, cambia a false para reiniciar
let estadoJuego = ["", "", "", "", "", "", "", "", ""] /* Arrego para
simular tablero del juego*/
// Relacion con html y css hecho por IA
    /*document es todo el archivo html y getElementById('message')
    va al documento y busca el elemento que tenga el ID message */
let messageDisplay = document.getElementById('message')
// querySelectorAll capturar las 9 celdas
/* querySelectorAll('.cell') busca a todos los elementos que 
tengan la clase cell, en este caso las 9 celdas y las guarda */
let cells = document.querySelectorAll('.cell')
let resetBtn = document.getElementById('resetBtn')
// Relacion con el click. Hecho por IA
function handleCellClick(e) {
    const clickedCell = e.target
    const clickedIndex = clickedCell.getAttribute('data-index')

    // 
    if (estadoJuego[clickedIndex] !== "" || !juegoActivo) {
        return
    }

    // 
    estadoJuego[clickedIndex] = jpactual
    clickedCell.innerText = jpactual

    validarResultado() // Ejecuta la funcion que sirve de arbitro.
}
// creamos la funcion.
function validarResultado() {
    let ganar = false

    /* La logica es que compara los posibles casos de victori, 
    por ejemplo si 0 esigual a 1 y 1 es igual a 2 hizo 3 en linea en 
    la primera fila, es iguan con las demas filas y columnas */

    if (estadoJuego[0] !== "" && estadoJuego[0] === estadoJuego[1] && estadoJuego[1] === estadoJuego[2]) ganar = true
    if (estadoJuego[3] !== "" && estadoJuego[3] === estadoJuego[4] && estadoJuego[4] === estadoJuego[5]) ganar = true
    if (estadoJuego[6] !== "" && estadoJuego[6] === estadoJuego[7] && estadoJuego[7] === estadoJuego[8]) ganar = true

    if (estadoJuego[0] !== "" && estadoJuego[0] === estadoJuego[3] && estadoJuego[3] === estadoJuego[6]) ganar = true
    if (estadoJuego[1] !== "" && estadoJuego[1] === estadoJuego[4] && estadoJuego[4] === estadoJuego[7]) ganar = true
    if (estadoJuego[2] !== "" && estadoJuego[2] === estadoJuego[5] && estadoJuego[5] === estadoJuego[8]) ganar = true

    if (estadoJuego[0] !== "" && estadoJuego[0] === estadoJuego[4] && estadoJuego[4] === estadoJuego[8]) ganar = true
    if (estadoJuego[2] !== "" && estadoJuego[2] === estadoJuego[4] && estadoJuego[4] === estadoJuego[6]) ganar = true

    if (ganar) {       /* innerText Cambia el mensaje que se ve en la 
        pantalla */
        messageDisplay.innerText = `¡¡El jugador ${jpactual} ha ganado!!`
        juegoActivo = false
        return
    }
// En caso de empate
    if (!estadoJuego.includes("")) {
        messageDisplay.innerText = "¡¡Es un empate!!"
        juegoActivo = false
        return
    }

    // Cambio de turno 
    jpactual = (jpactual === "X") ? "O" : "X"
    messageDisplay.innerText = `Turno de ${jpactual}.`
}

function reiniciarJuego(){
    jpactual = "X"
    juegoActivo = true
    estadoJuego = ["", "", "", "", "", "", "", "", ""]
    messageDisplay.innerText = "Turno de: X"
    cells.forEach(cell => cell.innerText = "")
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick))
resetBtn.addEventListener('click', reiniciarJuego)