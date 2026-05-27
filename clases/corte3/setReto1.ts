/* Sistema de etiquetas
Crea un Set para las etiquetas de un artículo de blog. Intenta agregar 'tecnología',
'IA', 'tecnología', 'desarrollo', 'IA'. Imprime el tamaño y los elementos. Verifica si
tiene la etiqueta 'IA'. Elimina 'desarrollo' y muestra el Set final. */

const etiquetas: Set<string> = new Set();
etiquetas.add("tecnología");
etiquetas.add("IA");
etiquetas.add("tecnología");
etiquetas.add("desarrollo");
etiquetas.add("IA");

console.log(etiquetas.size); // Imprime el tamaño del Set
console.log(etiquetas); // Imprime los elementos del Set
console.log(etiquetas.has("IA")); // Imprime true
etiquetas.delete("desarrollo");
console.log(etiquetas); // Imprime el Set sin el elemento eliminado