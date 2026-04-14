//El set es una estructura de datos que nos permite almacenar valores únicos, es decir, 
// no permite elementos duplicados. A diferencia de los arrays, los sets no tienen un orden específico y no permiten acceder a los elementos 
// por su índice. Los sets son útiles para almacenar colecciones de datos donde la unicidad es importante, como por ejemplo, para eliminar 
// duplicados de una lista o para realizar operaciones de conjunto como la unión, intersección y diferencia.

const numeros = new Set() // Creamos un nuevo set llamado numeros
numeros.add(1) // Agregamos el número 1 al set
numeros.add(2) // Agregamos el número 2 al set
numeros.add(3) // Agregamos el número 3 al set
numeros.add(4) // Agregamos el número 4 al set
numeros.add(5) // Agregamos el número 5 al set
numeros.add(5) // Intentamos agregar el número 5 nuevamente, pero no se agregará porque ya existe en el set
numeros.add(1) // Intentamos agregar el número 1 nuevamente, pero no se agregará porque ya existe en el set
numeros.delete(2) // Eliminamos el número 2 del set
// numeros.clear() // Eliminamos todos los elementos del set
// el map se utiliza para iterar sobre los elementos del set, el argumento es una función que se ejecuta para cada elemento del set, 
// la función recibe como argumento el valor del elemento
// El forEach se utiliza para iterar sobre los elementos del set, el argumento es una función que se ejecuta para cada elemento del set,
numeros.forEach(valor => {
    console.log(`Valor: ${valor}`) // Mostramos el valor de cada elemento del set en consola
})
console.log(numeros) // Mostramos el set completo en consola, devuelve Set { 1, 2, 3, 4, 5 }// cual es el error
console.log(numeros.has(3)) // Verificamos si el número 3 existe en el set, devuelve true
console.log(numeros.has(6)) // Verificamos si el número 6 existe en el set, devuelve false

/*la diferencia entre el set y el array es que el set no permite elementos duplicados, mientras que el array sí permite elementos duplicados.
y la diferencia entre el set y el map es que el set solo almacena valores únicos, mientras que el map almacena pares de clave-valor, 
donde cada clave es única y se puede asociar a un valor.*/