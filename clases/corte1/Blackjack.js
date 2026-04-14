// Genera numero aleatorio entre 1 y 11
function pedirCarta(min, max)  {
    return Math.floor(Math.random()*(max-min +1)) + min;
}
let puntosJ1 = pedirCarta() + pedirCarta()
let puntosJ2 = pedirCarta() + pedirCarta()

let contadorCartasJ1 = 0
let contadorCartasJ2 = 0
console.log("---Inicio d juego---")

console.log(`Puntos iniciales: ${puntosJ1}`)
console.log(`Puntos de j2: ${puntosJ2}`)

console.log("---Turno del jugador---")

puntosJ1 = pedirCarta() + pedirCarta()
puntosJ2 = pedirCarta() + pedirCarta()

if (puntosJ1 <= 21) {
    puntosJ1 += pedirCarta()
    
}


/*
for (let i = 0; i < 3 ; i ++) {
    let decision = prompt(`Tienes ${puntosJ1} ¿Quieres sacar otra carta? (si/no)`)
    if (decision === "Si"){
        let carta = pedirCarta();
        puntosJ1 = puntosJ1 + carta
        console.log(`Sacaste un ${carta}, tu total es: ${puntosJ1}`)
        if (puntosJ1 > 21){
            console.log("Te pasaste")
            break
        }
    } else {
        console.log(`Sigues con ${puntosJ1}`)
        break
    }
}
    */

// Computadora

