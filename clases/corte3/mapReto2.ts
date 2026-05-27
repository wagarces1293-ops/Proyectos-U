/* Contador de palabras
Dada una frase, crea un Map<string, number> que cuente cuántas veces aparece
cada palabra. Recorre la frase, separa por espacios y va sumando en el Map. Al
final, muestra el Map completo con cada palabra y su frecuencia. */

let frase: string = "No se trata del auto que conduces, es el conductor quien conduce el auto el que hace la conduccion";
let contadorPalabras: Map<string, number> = new Map(); // Crear un Map para contar las palabras
//.split(" ") para separar la frase en palabras
let palabras: string[] = frase.split(" ");
for (let palabra of palabras){// Recorre cada palabra en el array de palabras
    contadorPalabras.set(palabra, (contadorPalabras.get(palabra) || 0) + 1);
}
console.log(contadorPalabras);