/* Reto 1: Agenda telefónica
Crea un Map<string, string> donde la clave es el nombre y el valor el teléfono.
Agrega cinco contactos. Busca y muestra el teléfono de dos contactos específicos.
Elimina uno. Recorre y muestra todos los contactos restantes.*/

let agenda: Map<string, string> = new Map();
agenda.set("Alice", "123-456-7890");
agenda.set("Bob", "987-654-3210");
agenda.set("Charlie", "555-555-5555");
agenda.set("David", "111-222-3333");
agenda.set("Eve", "444-444-4444");
console.log(agenda.has("Alice") ? ` El telefono de Alice es: ${agenda.get("Alice")}` : "Alice no encontrada");
console.log(agenda.delete("Charlie") ? "Charlie eliminado" : "Charlie no encontrado");
console.log(agenda); // Imprime los contactos restantes
// ;