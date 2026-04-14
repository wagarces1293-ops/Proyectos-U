// El Map es una estructura de datos que nos permite almacenar pares de clave-valor, donde cada clave es única y se puede asociar a un valor. A diferencia de los objetos, los mapas pueden tener claves de cualquier tipo, incluyendo objetos y funciones. Además, los mapas mantienen el orden de inserción de los elementos, lo que significa que podemos iterar sobre ellos en el mismo orden en que fueron agregados. Los mapas también tienen métodos específicos para agregar, eliminar y verificar la existencia de elementos, lo que los hace muy útiles para manejar colecciones de datos dinámicas.
const usuario = new Map () // Creamos un nuevo mapa llamado usuario
usuario.set(2, "Camila") // Agregamos un nuevo elemento al mapa con la clave 2 y el valor "Camila"
// el set se utiliza para agregar elementos al mapa, el primer argumento es la clave y el segundo argumento es el valor
usuario.set("otros", "Sofia") // Agregamos un nuevo elemento al mapa con la clave "otros" y el valor "Sofia"
usuario.set(4, ["Manzana", "Pera", "Naranja"]) // Agregamos un nuevo elemento al mapa con la clave 4 y el valor es una lista de frutas
usuario.set(5, "Wilma") // Agregamos un nuevo elemento al mapa con la clave 5 y el valor "Wilma"
usuario.set(6, {nombre: `Juan`, edad: 30})// Agregamos un nuevo elemento al mapa con la clave 6 y el valor es un objeto con las propiedades nombre y edad


console.log(usuario) // Mostramos el mapa completo en consola
console.log(usuario.get(2))// Obtenemos el valor asociado a la clave 2 y lo mostramos en consola
console.log(usuario.get("otros"))// Obtenemos el valor asociado a la clave "otros" y lo mostramos en consola
console.log(usuario.get(4)[0])// Obtenemos el valor asociado a la clave 4, que es una lista, y mostramos el primer elemento de la lista en consola.
console.log(usuario.get(6).edad) // Obtenemos el valor asociado a la clave 6, que es un objeto, y mostramos la propiedad edad del objeto en consola.
// El .has se utiliza para verificar si una clave existe en el mapa, devuelve true si la clave existe y false si no existe
console.log(usuario.has(2)) // Verificamos si la clave 2 existe en el mapa, devuelve true
//el .delete se utiliza para eliminar un elemento del mapa, el argumento es la clave del elemento que queremos eliminar
usuario.delete(5) // Eliminamos el elemento con la clave 5 del mapa
//el size se utiliza para obtener el número de elementos que hay en el mapa
console.log(usuario.size) // Mostramos el número de elementos que hay en el mapa, devuelve 4
// el .clear se utiliza para eliminar todos los elementos del mapa
// usuario.clear()  Eliminamos todos los elementos del mapa
// el forEach se utiliza para iterar sobre los elementos del mapa, el argumento es una función que se ejecuta para cada elemento del mapa, la función recibe como argumentos el valor, la clave y el mapa completo
usuario.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`) // Mostramos la clave y el valor de cada elemento del mapa en consola
})
