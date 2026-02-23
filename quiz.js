const display = document.getElementById('messageDisplay');
const puntosHTML = document.getElementById('puntuacionActual');
const spinner = document.getElementById('spinner');
let pregunta1 = false
let pregunta2 = false
let pregunta3 = false
let puntuacion = 0

let respuesta1 = 23
let respuesta2 = "10 diciembre"
let respuesta3 = "sonic"

function refrescarUI(texto) {
    display.innerText = texto;
    puntosHTML.innerText = puntuacion;
}
/* prompt es la forma mas simple para capturar 
lo que el usuario escribe */
let tRespuesta1 = prompt(`¿Cuanto es 9 * 2 + 5?`)
if (tRespuesta1 == respuesta1) {
    puntuacion ++
    refrescarUI("¡Correcto! Siguiente en 5s...");
}
else {
    refrescarUI("¡Incorrecto! Siguiente en 5s...");
}
spinner.style.display = "block"; // Activamos el reloj visual
setTimeout(() => {
    spinner.style.display = "none"
let tRespuesta2 = prompt(`¿En que día y mes se celebran los derechos humanos? (Ejemplo: 15 septiembre)`)
if (tRespuesta2 == respuesta2) {
    puntuacion ++
    refrescarUI("¡Correcto! Siguiente en 5s...");
}
else {
    refrescarUI("¡Incorrecto! Siguiente en 5s...");
}
spinner.style.display = "block";
setTimeout(() => {
    spinner.style.display = "none"
let tRespuesta3 = prompt(`¿Como se llama el juego clasico que tiene de protagonista a un erizo azul?`)
if (tRespuesta3 == respuesta3) {
    puntuacion ++
    refrescarUI("¡Correcto! Siguiente en 5s...");
}
else {
    refrescarUI("¡Incorrecto!");
}
setTimeout(() => {
if (puntuacion == 3) {
     refrescarUI(`¡¡¡Puntuacion perfecta!!!`)
}
else if (puntuacion == 2) {
    refrescarUI(`¡¡¡Haz acertado 2 :D!!!`)
}
else if (puntuacion == 1) {
    refrescarUI(`¡¡Bueno almenos es algo!!`)

}
else {
     refrescarUI(`¡¡Eres una deshonra, no acertaste ni una!! (* ￣︿￣)`)
}
},1000)
}, 5000)
}, 5000)