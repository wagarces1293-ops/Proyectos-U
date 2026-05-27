/* Países visitados únicos
Tienes un array con países que un viajero visitó este año (puede haber
repeticiones). Crea un Set para obtener solo los países únicos. Muestra cuántos
países distintos visitó y la lista ordenada alfabéticamente. */

let paisesVisitados: string[] = ["España", "Francia", "Italia", "España", "Alemania", "Italia"];
let paisesUnicos: Set<string> = new Set(paisesVisitados); // Crear un Set a partir del array para obtener países únicos
console.log(`Número de países distintos visitados: ${paisesUnicos.size}`);
console.log(`Países distintos visitados: ${[...paisesUnicos].sort().join(", ")}`); // Imprime la lista de países únicos ordenada alfabéticamente
//.sort() : Ordena los elementos del array alfabéticamente
// .join() : Convierte el array en una cadena de texto, separando los elementos con ", "

