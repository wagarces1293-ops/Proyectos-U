/* Ranking de jugadores
Tienes un array con los puntajes de 8 jugadores. Ordénalo de mayor a menor (sin
modificar el original), obtén los 3 mejores con slice, calcula la suma de esos 3 y
muestra el promedio del top 3. */
let puntajes: number[] = [85, 92, 78, 90, 88, 95, 80, 91];// Array original sin modificar
let puntajesOrdenado: number [] = puntajes.sort((a, b) => b - a);// Ordena de mayor a menor
//sort.(): itera el array compara el resultado de b -a, si es positivo, b se coloca antes que a, si es negativo, a se coloca antes que b, y si es cero, no cambia el orden. Esto da como resultado un array ordenado de mayor a menor.
console.log(puntajesOrdenado); // Imprime los puntajes ordenados de mayor a menor
let mejores: number [] = puntajesOrdenado.slice(0, 3); // Obtiene los 3 mejores puntajes
console.log(mejores); // Imprime los 3 mejores puntajes
let promedio: number = mejores.reduce((sum, score) => sum + score, 0) / mejores.length; // Calcula el promedio de los mejores puntajes
console.log(promedio); // Imprime el promedio de los mejores puntajes