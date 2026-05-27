const miSet: Set<string> = new Set();
miSet.add("Alice");
miSet.add("Bob");
miSet.add("Charlie");
console.log(miSet); // Imprime el Set con los elementos
console.log(miSet.has("Alice")); // Imprime true
console.log(miSet.delete("Charlie")); // Imprime true
console.log(miSet); // Imprime el Set sin el elemento eliminado