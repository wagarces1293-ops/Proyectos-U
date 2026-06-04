/* Ranking ordenado
Tienes un array de jugadores con nombre y puntaje. Crea una copia ordenada de
mayor a menor puntaje. Muestra el top 3 con formato '🏆 Posición. Nombre -
Puntaje'. Usa join para mostrar todos los nombres separados por coma. */
const jugadores = [
  { nombre: "Alice", puntaje: 150 },
  { nombre: "Bob", puntaje: 120 },
  { nombre: "Charlie", puntaje: 180 },
  { nombre: "Diana", puntaje: 130 }
];
const rankingOrdenado = [...jugadores].sort((a, b) => b.puntaje - a.puntaje);
const top3 = rankingOrdenado.slice(0, 3).map((jugador, index) => `🏆 ${index + 1}. ${jugador.nombre} - ${jugador.puntaje}`);
console.log(top3.join("\n"));
 