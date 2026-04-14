const prompt = require("prompt-sync")();

const turnos = ["T1", "T2"];
let menuT = prompt("1. Pedir Turno | 2. Atender: ");

if(menuT === "1") {
    let n = `T${turnos.length + 1}`;
    turnos.push(n);
    console.log("Su turno: " + n);
} else {
    let atendido = turnos.shift();
    console.log(atendido ? "Atendiendo a: " + atendido : "No hay turnos");
}
